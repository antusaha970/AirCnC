"use client";

import { Box } from "@mui/material";

const AuthWarper = ({ children }) => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

export default AuthWarper;
