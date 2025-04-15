"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import getCurrentDate from "../../components/elements/getCurrentDate";
import Layout from "@/components/layout/Layout";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(null);
  const [fee, setFee] = useState("0.00");
  const [prn, setPrn] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const loadData = () => {
      try {
        const storedFormData = sessionStorage.getItem("formData");
        const storedFee = sessionStorage.getItem("paymentAmount");
        const storedPrn = sessionStorage.getItem("prn");

        if (storedFormData) {
          setFormData(JSON.parse(storedFormData));
        }
        if (storedFee) {
          setFee(storedFee);
        }
        if (storedPrn) {
          setPrn(storedPrn);
        }
      } catch (err) {
        console.error("Error loading session data:", err);
      }
    };

    loadData();
  }, []);

  const config = {
    merchantCode: "2222400016311524",
    returnUrl: "http://localhost:3000",
    paymentUrl: "https://clientapi.fonepay.com",
  };

  const generatePaymentUrl = async () => {
    if (!formData || !fee) {
      setError("Incomplete payment data.");
      return;
    }

    setLoading(true);
    try {
      const paymentParams = {
        pid: config.merchantCode,
        md: "P",
        amt: parseFloat(fee).toFixed(2),
        crn: "NPR",
        dt: getCurrentDate(),
        r1: formData?.fullName?.substring(0, 160) || "Payment",
        r2: formData?.sports?.substring(0, 50) || "N/A",
        ru: `${config.returnUrl}/payResponse`,
        prn: prn,
      };

      console.log("Payment Parameters:", paymentParams);

      const res = await axios.post(
        "http://localhost:5000/api/v1/generate-hash",
        paymentParams,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!res.data?.dv) {
        throw new Error("No hash received from server");
      }

      const fonepayParams = {
        PID: paymentParams.pid,
        MD: paymentParams.md,
        AMT: paymentParams.amt,
        CRN: paymentParams.crn,
        DT: paymentParams.dt,
        R1: paymentParams.r1,
        R2: paymentParams.r2,
        RU: paymentParams.ru,
        PRN: paymentParams.prn,
        DV: res.data.dv.toUpperCase(),
      };

      const baseUrl = `${config.paymentUrl}/api/merchantRequest`;
      const queryString = new URLSearchParams();

      Object.entries(fonepayParams).forEach(([key, value]) => {
        queryString.append(key, value);
      });

      const finalUrl = `${baseUrl}?${queryString.toString()}`;
      console.log("Redirecting to:", finalUrl);
      window.location.href = finalUrl;
    } catch (err) {
      console.error("Payment processing error:", err);
      setError(
        err.response?.data?.message || "Payment failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.push("/register");
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Payment Summary">
        <div className="payment-wrapper">
          <div className="payment-box">
            <h2 className="payment-heading">Payment Details</h2>

            {error && (
              <div className="alert alert-danger d-flex justify-content-between align-items-center">
                <span>{error}</span>
                <button
                  onClick={handleBack}
                  className="btn btn-outline-light btn-sm ms-3"
                >
                  Go Back
                </button>
              </div>
            )}

            {formData && (
              <div className="payment-summary shadow-sm">
                <h4 className="summary-title">Registration Summary</h4>
                <ul className="summary-list">
                  <li>
                    <strong>Name:</strong> {formData.fullName}
                  </li>
                  <li>
                    <strong>Sports:</strong> {formData.sports}
                  </li>
                  <li>
                    <strong>Category:</strong> {formData.category}
                  </li>
                  <li>
                    <strong>Amount to Pay:</strong> NPR &nbsp; {fee} /-
                  </li>
                  <li>
                    <strong>PRN:</strong> {prn}
                  </li>
                </ul>
              </div>
            )}

            <div className="payment-actions">
              <button
                onClick={generatePaymentUrl}
                disabled={loading || !formData || !fee}
                className="btn btn-success px-4"
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Processing...
                  </>
                ) : (
                  "Proceed to Payment"
                )}
              </button>

              <button
                onClick={handleBack}
                className="btn btn-outline-secondary px-4"
              >
                Back to Registration
              </button>
            </div>
          </div>

          <style jsx>{`
            .payment-wrapper {
              display: flex;
              justify-content: center;
              padding: 3rem 1rem;
              background: linear-gradient(145deg, #f8f9fa, #ffffff);
            }

            .payment-box {
              width: 100%;
              max-width: 700px;
              background: #fff;
              padding: 2.5rem;
              border-radius: 12px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
            }

            .payment-heading {
              font-size: 2rem;
              font-weight: 600;
              margin-bottom: 2rem;
              color: #333;
              text-align: center;
            }

            .payment-summary {
              background: #f1f3f5;
              border-left: 4px solid #0d6efd;
              padding: 1.5rem;
              border-radius: 8px;
              margin-bottom: 2rem;
            }

            .summary-title {
              font-size: 1.25rem;
              font-weight: 600;
              margin-bottom: 1rem;
            }

            .summary-list {
              list-style: none;
              padding: 0;
              margin: 0;
            }

            .summary-list li {
              margin-bottom: 0.5rem;
              font-size: 1rem;
              color: #333;
            }

            .payment-actions {
              display: flex;
              gap: 1rem;
              justify-content: center;
            }

            .alert-danger {
              background-color: #dc3545;
              color: #fff;
              padding: 1rem;
              border-radius: 6px;
              margin-bottom: 1.5rem;
            }

            @media (max-width: 576px) {
              .payment-actions {
                flex-direction: column;
              }
            }
          `}</style>
        </div>
      </Layout>
    </>
  );
};

export default page;
