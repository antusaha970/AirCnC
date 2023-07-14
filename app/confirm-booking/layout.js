"use client";

import { BookingCard, PrivateRouteForBooking } from "@components";
import { Box, Container, Stack } from "@mui/material";

const layout = ({ children }) => {
  return (
    <PrivateRouteForBooking>
      <Container maxWidth="lg" component="section">
        <Stack
          direction={{ sm: "column", md: "row" }}
          sx={{
            my: 2,
          }}
          gap={2}
        >
          <Box flex={1}>{children}</Box>
          <Box flex={1}>
            <BookingCard />
          </Box>
        </Stack>
      </Container>
    </PrivateRouteForBooking>
  );
};

export default layout;
