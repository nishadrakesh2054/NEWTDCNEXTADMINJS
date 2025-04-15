import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    registrationId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Registration",
    },
    transactionId: {
      type: String,
      unique: true,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      defaultValue: "NPR",
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
   
    },
    paymentMethod: {
      type: String,
      enum: ["fonepay", "esewa", "khalti"],
      required: true,
    },
    paymentDate: {
      type: Date,
      default: true,
    },
    email: {
      type: String,
      default: true,
    },
    fullName: {
      type: String,
      default: true,
    },
    sports: {
      type: String,
      default: true,
    },

    time: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    days: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const TDCPaymentSchema = mongoose.model("payment", PaymentSchema);

export default TDCPaymentSchema;
