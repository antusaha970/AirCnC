"use client";
import { useUser } from "@clerk/nextjs";
import { Button, Stack, Typography } from "@mui/material";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const router = useRouter();
  const reservation = useSelector((state) => state.reservation);
  const { user } = useUser();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
        setIsProcessing(false);
        return;
      }

      const reservationDataForDb = {
        placeDetails: reservation.reservedPlace,
        clientId: user.id,
        clientMessage: reservation.clientMessage,
        reservationDate: {
          arrival: reservation.reservationInfo.arrival,
          departure: reservation.reservationInfo.departure,
        },
        isPaid: true,
      };
      const { data } = await axios.post("/api/reservation/make-reservation", {
        reservationDataForDb,
      });
      console.log(data);
      if (data.success) {
        router.push("/your-reservation");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePayLater = async () => {
    try {
      setIsProcessing(true);
      const reservationDataForDb = {
        placeDetails: reservation.reservedPlace,
        clientId: user.id,
        clientMessage: reservation.clientMessage,
        reservationDate: {
          arrival: reservation.reservationInfo.arrival,
          departure: reservation.reservationInfo.departure,
        },
        isPaid: false,
      };
      const { data } = await axios.post("/api/reservation/make-reservation", {
        reservationDataForDb,
      });
      if (data.success) {
        router.push("/your-reservation");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsProcessing(false);
    }
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
          {isProcessing ? "Processing ... " : "Pay Now"}
        </Button>
        <Button
          variant="contained"
          onClick={handlePayLater}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing ... " : "Pay Later"}
        </Button>
      </Stack>

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
      <Typography
        variant="small"
        component="p"
        sx={{
          pt: 6,
          color: "gray",
          textAlign: "center",
        }}
      >
        If you don&apos;t have credit card please choose pay later
      </Typography>
    </form>
  );
};

export default CheckoutForm;
