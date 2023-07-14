"use client";

import { Box, TextField, Typography } from "@mui/material";
import StepperComponent from "../StepperComponent/StepperComponent";
import { useState } from "react";
import { ReserveButton as ContinueButton } from "@components/Styled/Styled";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Step2 = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleContinue = () => {
    if (message === "") {
      toast.warn("Please write in short about your trip", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      router.push("/confirm-booking/step-3");
    }
  };
  return (
    <Box>
      <ToastContainer />
      <StepperComponent activeStep={1} />
      <Box
        sx={{
          my: 10,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            pb: 5,
          }}
          component="h5"
        >
          Traveling for work?
        </Typography>
        <Typography
          sx={{
            color: "#3C3C3C",
          }}
        >
          Say hello to your host <br /> Let owner know a little about yourself
          and why you’re coming.
        </Typography>
        <TextField
          fullWidth
          placeholder="Ex: Hello ! Can’t wait to spend 4 night is your home"
          id="fullWidth"
          multiline
          rows={5}
          sx={{
            mt: 2,
          }}
          onChange={handleMessage}
        />
        <ContinueButton
          sx={{
            color: "#fff",
            mt: 2,
          }}
          onClick={handleContinue}
        >
          Continue
        </ContinueButton>
      </Box>
    </Box>
  );
};

export default Step2;
