"use client";

import { useUser } from "@clerk/nextjs";
import { Typography } from "@mui/material";

const PrivateRoute = ({ children, WithOutAuth }) => {
  const { isLoaded, isSignedIn } = useUser();
  console.log({ isLoaded, isSignedIn });
  if (!isLoaded) {
    return (
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
        }}
      >
        Loading...
      </Typography>
    );
  }
  if (!isSignedIn) {
    return <WithOutAuth />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
