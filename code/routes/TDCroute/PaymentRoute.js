import express from "express";
import crypto from "crypto";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import paymentTDC from "../../models/TDC/paymentModel.js";
import Registration from "../../models/TDC/RegisterFormModel.js";
import sendPaymentConfirmationEmail from "../../middleware/sendEmail.js";
import preCheckSchema from "../../validation/formValid.js";
import validatePaymentRequest from "../../validation/validatePayRequest.js";
const router = express.Router();

// Endpoint to generate HMAC-SHA512 hash
router.post("/generate-hash", (req, res) => {
  const { pid, md, prn, amt, crn, dt, r1, r2, ru } = req.body;
  const validationError = validatePaymentRequest(req);
  if (validationError) {
    return res.status(400).json({ message: validationError });
  }
  const dataString = `${pid},${md},${prn},${amt},${crn},${dt},${r1},${r2},${ru}`;

  const hmac = crypto.createHmac("sha512", process.env.SECRET_KEY);
  hmac.update(dataString, "utf-8");
  const dv = hmac.digest("hex");

  res.json({
    success: true,
    message: " (DV) generated successfully.",
    dv,
  });
});

// Endpoint to pre-check registration
router.post("/pre-check-registration", async (req, res) => {
  const { error, value } = preCheckSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  //   const { email, contactNo, sports, category } = value;

  try {
    const existingRegistration = await Registration.findOne({
      email: value.email,
      contactNo: value.contactNo,
    });
    if (existingRegistration) {
      return res.status(400).json({
        success: false,
        message: "You have already registered for an event.",
      });
    }

 

    const generatePRN = () => {
      return uuidv4().substring(0, 25);
    };
    const prn = generatePRN();
    console.log("Generated PRN during registration:", prn);
    return res.status(201).json({
      success: true,
      message: "Please proceed to payment for Registration",
      prn: prn,
    });
  } catch (err) {
    console.error("Pre-registration check error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
});

router.post("/verify-payment", async (req, res) => {
  const { PRN, PID, PS, RC, UID, BC, INI, P_AMT, R_AMT, DV, formData } =
    req.body;
  console.log("body request ", req.body);

  // 1. Enhanced parameter validation
  if (
    !PRN ||
    !PID ||
    !PS ||
    !RC ||
    !UID ||
    !BC ||
    !INI ||
    !P_AMT ||
    !R_AMT ||
    !DV ||
    !formData
  ) {
    return res.status(400).json({
      verified: false,
      message: "Missing required parameters from backend",
    });
  }

  const verificationString = `${PRN},${PID},${PS},${RC},${UID},${BC},${INI},${P_AMT},${R_AMT}`;
  let SECRET_KEY = "b83ec0267af644a89e7b7e9bf3fb16e0";
  //   let SECRET_KEY = "fonepay";
  try {
    // 2. More secure hash comparison (timing-safe)
    const hmac = crypto.createHmac("sha512", SECRET_KEY);
    hmac.update(verificationString.trim());
    const generatedHash = hmac.digest("hex");

    if (
      !crypto.timingSafeEqual(
        Buffer.from(generatedHash, "hex"),
        Buffer.from(DV, "hex")
      )
    ) {
      return res.status(400).json({
        verified: false,
        message: "Invalid verification. Hashes do not match.",
        code: "HASH_MISMATCH",
      });
    }

    // 3. Check for duplicate PRN first
    const existingPayment = await paymentTDC.findOne({ transactionId: PRN });
    if (existingPayment) {
      return res.status(409).json({
        verified: false,
        message: "This payment has already been processed",
        code: "DUPLICATE_PAYMENT",
        status: existingPayment.status,
      });
    }

    // 4. Create initial payment record (using transaction)
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // 6. Create registration
      const newRegistration = await Registration.create(
        [
          {
            ...formData,
            prn: PRN,
            registrationDate: new Date(),
          },
        ],
        { session }
      );

      await paymentTDC.create(
        [
          {
            transactionId: PRN,
            amount: parseFloat(P_AMT),
            status: PS.toLowerCase() === "true" ? "success" : "failed",
            paymentMethod: "fonepay",
            paymentDate: new Date(),
            email: formData.email,
            fullName: formData.fullName,
            registrationId: newRegistration[0]._id,
            sports: formData.sports,
            time: formData.time,
            category: formData.category,
            days: formData.days,
          },
        ],
        { session }
      );

      // 8. Send confirmation email
      await sendPaymentConfirmationEmail(
        newRegistration[0].email,
        newRegistration[0].fullName,
        parseFloat(P_AMT),
        newRegistration[0].sports,
        newRegistration[0].category,
        newRegistration[0].time,
        newRegistration[0].days
      );

      await session.commitTransaction();
      session.endSession();

      return res.status(200).json({
        verified: true,
        status: "success",
        message: "Payment verified and registration successful.",
        paymentDetails: {
          id: PRN,
          amount: parseFloat(P_AMT),
          paymentMethod: "fonepay",
          fullName: newRegistration[0].fullName,
          sports: newRegistration[0].sports,
          category: newRegistration[0].category,
          time: newRegistration[0].time,
          days: newRegistration[0].days,
          registrationId: newRegistration[0]._id,
        },
      });
    } catch (transactionError) {
      await session.abortTransaction();
      session.endSession();
      throw transactionError;
    }
  } catch (error) {
    console.error("Payment verification error:", error);

   
    return res.status(500).json({
      verified: false,
      message: "Internal server error during payment processing",
      code: "PAYMENT_PROCESSING_ERROR",
      error: error.message,
    });
  }
});

export default router;
