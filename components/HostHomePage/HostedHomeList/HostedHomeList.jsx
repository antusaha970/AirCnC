"use client";

import { useUser } from "@clerk/nextjs";
import { Box, Typography } from "@mui/material";

const HostedHomeList = () => {
  const {
    user: { id },
  } = useUser();
  return (
    <Box
      sx={{
        mx: { sm: 0, md: 3 },
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontWeight: "bold",
          fontSize: "28px",
          textAlign: "center",
          py: 3,
        }}
        variant="h1"
      >
        Your Hosted Homes
      </Typography>
    </Box>
  );
};

export default HostedHomeList;
