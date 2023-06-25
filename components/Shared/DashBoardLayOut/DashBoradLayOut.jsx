"use client";
import { SideBar } from "@components";
import { Box, Stack } from "@mui/material";
import React from "react";

const DashBoardLayOut = ({ children }) => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <Stack direction={{ sm: "column", md: "row" }}>
        <Box flex={1}>
          <SideBar />
        </Box>
        <Box flex={4}>{children}</Box>
      </Stack>
    </Box>
  );
};

export default DashBoardLayOut;
