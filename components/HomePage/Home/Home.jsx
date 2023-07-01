"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import SearchBox from "../SearchBox/SearchBox";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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

      <Stack direction={{ md: "row", sm: "column" }} gap={3}>
        <Box flex={1}>
          <SearchBox />
        </Box>
        <Box flex={2}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              component="h1"
              sx={{
                fontSize: "22px",
                fontWeight: "500",
              }}
            >
              Homes
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              See all <NavigateNextIcon />
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
