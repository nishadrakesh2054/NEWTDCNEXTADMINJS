"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Head from "next/head";
import Layout from "@/components/layout/Layout";

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
            case "cancel":
              message = "Payment was cancelled by user";
              break;
            case "failed":
              message = "Payment timed out";
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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Payment Status">
        <Head>
          <title>{isSuccess ? "Payment Successful" : "Payment Failed"}</title>
          <meta name="description" content="Payment processing result" />
        </Head>

        <div className="response-wrapper">
          <div className="status-card">
            {isSuccess ? (
              <>
                <div className="status-header success">
                  <i className="bi bi-check-circle-fill status-icon"></i>
                  <h2>Payment Successful</h2>
                </div>
                <div className="status-body">
                  <p className="thank-msg">
                    Thank you, <strong>{paymentDetails?.fullName}</strong>! Your
                    registration and payment have been successfully processed.
                  </p>

                  <div className="details-box">
                    <h4>
                      Total Paid: NPR{" "}
                      <span className="text-success">
                        {paymentDetails?.amount}
                      </span>
                    </h4>
                    <ul className="details-list">
                      <li>
                        <span>Transaction ID:</span>{" "}
                        <strong>{paymentDetails?.transactionId}</strong>
                      </li>
                      <li>
                        <span>Sports:</span>{" "}
                        <strong>{paymentDetails?.sports}</strong>
                      </li>
                      <li>
                        <span>Category:</span>{" "}
                        <strong>{paymentDetails?.category}</strong>
                      </li>
                      <li>
                        <span>Date:</span>{" "}
                        <strong>{new Date().toLocaleDateString()}</strong>
                      </li>
                    </ul>
                  </div>

                  <p className="text-muted text-center mt-4">
                    You’ll receive a confirmation email shortly. For any
                    questions, contact our support team.
                  </p>

                  <div className="text-center mt-4">
                    <button
                      className="btn btn-primary px-4"
                      onClick={() => router.push("/")}
                    >
                      Go to Dashboard
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="status-header failed">
                  <i className="bi bi-x-circle-fill status-icon"></i>
                  <h2>Payment Failed</h2>
                </div>
                <div className="status-body">
                  <div className="alert alert-danger">{responseMessage}</div>
                  <p className="lead">
                    We couldn’t process your payment. Please try again or
                    contact our support.
                  </p>
                  <div className="text-center mt-4">
                    <button
                      className="btn btn-primary me-3"
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
              </>
            )}
          </div>

          <style jsx>{`
            .response-wrapper {
              display: flex;
              justify-content: center;
              padding: 4rem 1rem;
              background: #f9fafb;
            }

            .status-card {
              background: #fff;
              border-radius: 12px;
              padding: 2.5rem;
              max-width: 700px;
              width: 100%;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
            }

            .status-header {
              display: flex;
              align-items: center;
              gap: 1rem;
              border-radius: 10px 10px 0 0;
              padding-bottom: 1.5rem;
              border-bottom: 1px solid #e9ecef;
            }

            .status-header.success {
              color: #198754;
            }

            .status-header.failed {
              color: #dc3545;
            }

            .status-icon {
              font-size: 2rem;
            }

            .thank-msg {
              font-size: 1.15rem;
              margin: 1.5rem 0;
            }

            .details-box {
              background: #f1f3f5;
              padding: 1.5rem;
              border-radius: 8px;
              border-left: 4px solid #0d6efd;
            }

            .details-box h4 {
              font-weight: 600;
              margin-bottom: 1rem;
            }

            .details-list {
              list-style: none;
              padding: 0;
              margin: 0;
            }

            .details-list li {
              display: flex;
              justify-content: space-between;
              margin-bottom: 0.5rem;
              font-size: 1rem;
            }

            .alert-danger {
              font-size: 1rem;
              margin-bottom: 1rem;
            }

            @media (max-width: 576px) {
              .details-list li {
                flex-direction: column;
                align-items: flex-start;
              }
            }
          `}</style>
        </div>
      </Layout>
    </>
  );
};

export default PaymentResponse;
