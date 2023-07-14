"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import {
  PlaceImageCarousel,
  PlaceInfo,
  ReserveBox,
  ReserveSignIn,
} from "@components";
import { useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addReservedPlace } from "@redux/slices/reservationSlice";

const PlaceLanding = ({ place }) => {
  const {
    result: {
      placeDetails: { images, placeTitle },
      _id,
    },
  } = place;
  const { isLoaded, isSignedIn } = useUser();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addReservedPlace(place.result));
  }, [dispatch, place]);

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
          <Box flex={1}>
            {isSignedIn ? (
              <ReserveBox placeDetails={place.result.placeDetails} />
            ) : (
              <ReserveSignIn id={_id} />
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PlaceLanding;
