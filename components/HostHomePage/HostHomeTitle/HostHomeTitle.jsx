"use client";
import { Box, Typography } from "@mui/material";

const HostHomeTitle = () => {
  return (
    <Box
      sx={{
        marginLeft: { md: "50px", sm: 0 },
        mt: 2,
      }}
    >
      <Typography variant="h5" component="h1">
        Host your home with convenience
      </Typography>
      <Typography variant="p" component="p">
        Please fill up the form to host your home
      </Typography>
    </Box>
  );
};

export default HostHomeTitle;
