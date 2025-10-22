import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router";
 

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": { color: "#aab7c4" },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const PaymentModal = ({ open, onClose, course, refetch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const { user } = useAuth(); 
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  if (!open) return null;

  const handlePay = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!stripe || !elements) return;

    try {
      setLoading(true);

      const amountInCents = Math.round(Number(course.price) * 100);

      // Create PaymentIntent from backend
      const { data } = await axiosPublic.post(
        `/create-payment-intent`,
        { amount: amountInCents }
      );

      const clientSecret = data.clientSecret;
      const cardElement = elements.getElement(CardElement);

      const confirmResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: { name: user?.displayName || "Customer" },
        },
      });

      if (confirmResult.error) {
        setMessage(confirmResult.error.message);
        setLoading(false);
      } else if (confirmResult.paymentIntent.status === "succeeded") {
        // ✅ Payment success — send data to backend
        const paymentInfo = {
          paymentBy: user?.email,
          paymentAt: new Date(),
          courseId: course._id,
          transactionId: confirmResult.paymentIntent.id,
          amount: course.price,
        };

        await axiosPublic.post(
          `/payments`,
          paymentInfo
        );
        refetch()
        setMessage("✅ Payment successful!");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setMessage(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-base-100 rounded-lg max-w-md w-full shadow-lg">
        <div className="p-5 border-b">
          <h3 className="text-xl font-semibold">Purchase Course</h3>
        </div>

        <div className="p-5">
          <h4 className="text-lg font-medium mb-2">{course.title}</h4>
          <p className="text-gray-600 mb-4">Price: ${course.price}</p>

          <form onSubmit={handlePay}>
            <div className="border rounded p-3 mb-4">
              <CardElement options={CARD_ELEMENT_OPTIONS} />
            </div>

            {message && <p className="mb-3 text-sm text-red-600">{message}</p>}

            <div className="flex justify-between">
              <button
                type="submit"
                disabled={!stripe || loading}
                className="btn btn-primary"
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
