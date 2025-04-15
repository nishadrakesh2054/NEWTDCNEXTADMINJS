"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Head from "next/head";

const PaymentResponse = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [responseMessage, setResponseMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const isVerifyingRef = useRef(false);

  useEffect(() => {
    const verifyPayment = async () => {
      //   if (isVerifyingRef.current) return;
      //   isVerifyingRef.current = true;
      //   setIsLoading(true);

      try {
        // Get formData from sessionStorage if available

        const formData =
          typeof window !== "undefined"
            ? JSON.parse(sessionStorage.getItem("formData") || "null")
            : null;
        const params = {
          PRN: searchParams.get("PRN"),
          PID: searchParams.get("PID"),
          PS: searchParams.get("PS"),
          RC: searchParams.get("RC"),
          UID: searchParams.get("UID"),
          BC: searchParams.get("BC"),
          INI: searchParams.get("INI"),
          P_AMT: searchParams.get("P_AMT"),
          R_AMT: searchParams.get("R_AMT"),
          DV: searchParams.get("DV"),
          formData: formData,
        };

        console.log("Verification params:", params);
        console.log("Form data from storage:", formData);

        // Immediate check for failure/cancellation
        if (params.PS === "false" || params.RC !== "successful") {
          let message = "Payment failed";
          switch (params.RC) {
            case "01":
              message = "Payment was cancelled by user";
              break;
            case "02":
              message = "Payment timed out";
              break;
            case "03":
              message = "Invalid payment credentials";
              break;
            case "04":
              message = "Insufficient funds";
              break;
            default:
              message = `Payment failed (Code: ${params.RC})`;
          }

          setResponseMessage(message);
          setIsSuccess(false);
          setIsLoading(false);
          return;
        }

        // Verify payment with backend
        const response = await axios.post(
          "http://localhost:5000/api/v1/verify-payment",
          {
            ...params,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log("Verification response:", response.data);

        if (response.status === 200) {
          const { verified, message, paymentDetails } = response.data;
          setIsVerified(verified);
          setResponseMessage(message);
          setPaymentDetails(paymentDetails);
          setIsSuccess(verified);
          // Clear session storage on successful verification
          if (verified && typeof window !== "undefined") {
            sessionStorage.removeItem("formData");
            sessionStorage.removeItem("paymentAmount");
            sessionStorage.removeItem("prn");
          }
        } else {
          setResponseMessage(
            response.data?.message || "Payment verification failed"
          );
          setIsSuccess(false);
        }
      } catch (error) {
        console.error("Payment verification error:", error);
        setResponseMessage(
          error.response?.data?.message ||
            "Payment verification failed. Please try again."
        );
        setIsSuccess(false);
      } finally {
        setIsLoading(false);
        isVerifyingRef.current = false;
      }
    };

    verifyPayment();
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h3 className="mt-3">Processing your payment...</h3>
            <p className="text-muted">
              Please wait while we verify your transaction
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{isSuccess ? "Payment Successful" : "Payment Failed"}</title>
        <meta name="description" content="Payment processing result" />
      </Head>

      <div className="container py-5">
        {isSuccess ? (
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card border-success">
                <div className="card-header bg-success text-white">
                  <h2 className="mb-0">Payment Successful</h2>
                </div>
                <div className="card-body">
                  <div className="alert alert-success">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Thank you, <strong>{paymentDetails?.fullName}</strong>!
                  </div>

                  <p className="lead">
                    Your registration has been successfully completed, and your
                    payment has been received. You will shortly receive a
                    confirmation email with further details.
                  </p>

                  <div className="border p-4 rounded mb-4">
                    <h3 className="text-center">
                      Total Paid: NPR{" "}
                      <span className="text-success">
                        {paymentDetails?.amount}
                      </span>
                    </h3>
                    <div className="d-flex justify-content-between mt-3">
                      <span>Transaction ID:</span>
                      <strong>{paymentDetails?.transactionId}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Sports:</span>
                      <strong>{paymentDetails?.sports}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Category:</span>
                      <strong>{paymentDetails?.category}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Date:</span>
                      <strong>{new Date().toLocaleDateString()}</strong>
                    </div>
                  </div>

                  <p className="text-center mt-4">
                    We look forward to seeing you at the academy. If you have
                    any questions, please contact our team.
                  </p>

                  <div className="text-center mt-4">
                    <button
                      className="btn btn-primary"
                      onClick={() => router.push("/")}
                    >
                      Go to Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card border-danger">
                <div className="card-header bg-danger text-white">
                  <h2 className="mb-0">Payment Failed</h2>
                </div>
                <div className="card-body">
                  <div className="alert alert-danger">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    {responseMessage}
                  </div>

                  <p className="lead">
                    We couldn't process your payment. Please try again or
                    contact support if the problem persists.
                  </p>

                  <div className="text-center mt-4">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => router.push("/register")}
                    >
                      Try Again
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => router.push("/contact")}
                    >
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentResponse;
