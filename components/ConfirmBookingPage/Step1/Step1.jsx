"use client";
import Box from "@mui/material/Box";
import { Container, Stack } from "@mui/material";
import { StepperComponent } from "@components";
const Step1 = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        direction={{ sm: "column", md: "row" }}
        sx={{
          my: 2,
        }}
      >
        <Box flex={1}>
          <StepperComponent activeStep={0} />
        </Box>
        <Box flex={1}></Box>
      </Stack>
    </Container>
  );
};

export default Step1;
