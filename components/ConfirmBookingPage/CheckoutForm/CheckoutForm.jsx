"use client";
import { Button, Stack } from "@mui/material";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutForm = () => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      console.error("Stripe or elements not available", stripe, elements);
      return;
    }

    setIsProcessing(true);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/your-reservation`,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    }
    setIsProcessing(false);
    router.push("/your-reservation");
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mt: 2,
        }}
      >
        <Button disabled={isProcessing} variant="contained" type="submit">
          {isProcessing ? "Processing ... " : "Pay now"}
        </Button>
        <Button variant="contained">Pay Later</Button>
      </Stack>

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
