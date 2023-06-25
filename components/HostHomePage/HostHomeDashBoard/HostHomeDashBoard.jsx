"use client";

import { Box, Stack } from "@mui/material";
import { SideBar } from "@components";

const HostHomeDashBoard = () => {
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
        <Box flex={4}>flex2</Box>
      </Stack>
    </Box>
  );
};

export default HostHomeDashBoard;
