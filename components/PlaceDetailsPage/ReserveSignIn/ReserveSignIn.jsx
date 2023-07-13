"use client";

import { SignIn } from "@clerk/nextjs";
import { Box, Typography } from "@mui/material";

const ReserveSignIn = ({ id }) => {
  return (
    <Box>
      <Typography
        component="h5"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Please Sign In for reservation
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SignIn
          afterSignInUrl={`/place-details/${id}`}
          redirectUrl={`/place-details/${id}`}
          path={`/place-details/${id}`}
          appearance={{
            elements: {
              card: {
                boxShadow: "none",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ReserveSignIn;
