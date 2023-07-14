"use client";

import { Box, Typography } from "@mui/material";
import StepperComponent from "../StepperComponent/StepperComponent";

const Step3 = () => {
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

        <Box
          sx={{
            width: "100%",
            height: "152px",
            border: "1px solid #707070",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Step3;
