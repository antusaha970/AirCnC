"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import SearchBox from "../SearchBox/SearchBox";
import { useAuth, useUser } from "@clerk/nextjs";

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
          mb: 3,
        }}
      >
        Where do you want to go?
      </Typography>

      <Stack direction={{ md: "row", sm: "column" }}>
        <Box flex={1}>
          <SearchBox />
        </Box>
        <Box flex={2}></Box>
      </Stack>
    </Container>
  );
};

export default Home;
