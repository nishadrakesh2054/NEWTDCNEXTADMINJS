"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import getCurrentDate from "../../components/elements/getCurrentDate";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(null);
  const [fee, setFee] = useState("0.00");
  const [prn, setPrn] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Load data from sessionStorage when component mounts
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
    <div className="payment-container">
      <h2>Payment Details</h2>

      {error && (
        <div className="alert alert-danger">
          {error}
          <button onClick={handleBack} className="btn btn-secondary ml-2">
            Go Back
          </button>
        </div>
      )}

      {formData && (
        <div className="payment-summary">
          <h3>Registration Summary</h3>
          <p>
            <strong>Name:</strong> {formData.fullName}
          </p>
          <p>
            <strong>Sports:</strong> {formData.sports}
          </p>
          <p>
            <strong>Category:</strong> {formData.category}
          </p>
          <p>
            <strong>Amount to Pay:</strong> NPR {fee}
          </p>
          <p>
            <strong>PRN:</strong> {prn}
          </p>
        </div>
      )}

      <div className="payment-actions">
        <button
          onClick={generatePaymentUrl}
          disabled={loading || !formData || !fee}
          className="btn btn-primary"
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Processing...
            </>
          ) : (
            "Proceed to Payment"
          )}
        </button>

        <button onClick={handleBack} className="btn btn-secondary">
          Back to Registration
        </button>
      </div>

      <style jsx>{`
        .payment-container {
          max-width: 800px;
          margin: 2rem auto;
          padding: 2rem;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .payment-summary {
          background: #f8f9fa;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border-radius: 4px;
        }
        .payment-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .alert {
          padding: 1rem;
          margin-bottom: 1rem;
          border-radius: 4px;
        }
        .alert-danger {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        .btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default page;