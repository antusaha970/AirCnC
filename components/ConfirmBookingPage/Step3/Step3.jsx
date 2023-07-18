"use client";

import { Box, Typography } from "@mui/material";
import StepperComponent from "../StepperComponent/StepperComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const Step3 = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    async function getStripe() {
      try {
        const { data } = await axios.get("/api/payment/config");
        setStripePromise(loadStripe(data.publishableKey));
      } catch (error) {
        console.error(error);
      }
    }
    getStripe();
  }, []);
  useEffect(() => {
    async function getClientSecret() {
      try {
        const { data } = await axios.post(
          "/api/payment/create-payment-intent",
          {}
        );
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error(error);
      }
    }
    getClientSecret();
  }, []);

  return (
    <Box>
      <StepperComponent activeStep={2} />
      <Box>
        <Typography
          component="h5"
          sx={{
            fontSize: "24px",
            color: "#646464",
            my: 2,
          }}
        >
          Payment Section
        </Typography>
        <Box>
          {stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Step3;
