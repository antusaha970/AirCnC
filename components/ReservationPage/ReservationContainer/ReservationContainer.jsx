"use client";

import { useUser } from "@clerk/nextjs";
import { Container } from "@mui/material";

const ReservationContainer = () => {
  const { user } = useUser();
  return (
    <Container component="section" maxWidth="lg">
      ReservationContainer
    </Container>
  );
};

export default ReservationContainer;
