"use client";

import { Box, Container, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container
      maxWidth="lg"
      component="section"
      sx={{
        my: 2,
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        sx={{
          fontWeight: "bold",
        }}
      >
        Where do you want to go?
      </Typography>

      <Stack direction={{ md: "row", sm: "column" }}>
        <Box flex={1}>flex</Box>
        <Box flex={2}>flex</Box>
      </Stack>
    </Container>
  );
};

export default Home;
