"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { PlaceImageCarousel, PlaceInfo } from "@components";

const PlaceLanding = ({ place }) => {
  const {
    result: {
      placeDetails: { images, placeTitle },
    },
  } = place;

  return (
    <Box component="section">
      <PlaceImageCarousel images={images} placeTitle={placeTitle} />
      <Container
        maxWidth="lg"
        sx={{
          mb: 5,
        }}
      >
        <Stack direction={{ sm: "column-reverse", md: "row" }} gap={2}>
          <Box flex={2}>
            <PlaceInfo place={place} />
          </Box>
          <Box flex={1}>fasdfdsf</Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PlaceLanding;
