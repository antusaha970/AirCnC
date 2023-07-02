"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import SearchBox from "../SearchBox/SearchBox";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { PlaceCard } from "@components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlaces } from "@redux/slices/placesSlice";

const Home = () => {
  const places = useSelector((state) => state.places.result);
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({ once: true });
    async function getAllPlaces() {
      try {
        const response = await fetch("/api/client/places", {
          next: { revalidate: 60 },
        });
        const data = await response.json();
        dispatch(addPlaces(data));
      } catch (error) {
        console.log(error);
      }
    }
    getAllPlaces();
  }, [dispatch]);
  return (
    <Container
      maxWidth="lg"
      component="section"
      sx={{
        my: 2,
      }}
    >
      <Stack direction={{ md: "row", sm: "column" }} gap={3}>
        <Box
          position="relative"
          sx={{
            minHeight: "100vh",
          }}
          flex={1}
        >
          <Box
            sx={{
              position: { md: "sticky", sm: "static" },
              top: "10px",
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
            <SearchBox />
          </Box>
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
          <Stack
            direction={{ md: "row", sm: "column" }}
            justifyContent={{ sm: "center", md: "start" }}
            alignItems="center"
            gap={2}
            sx={{
              flexWrap: "wrap",
            }}
          >
            {places?.map((place) => (
              <PlaceCard place={place} key={place._id} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
