"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { settings } from "@utils/helperFunctions";

const PlaceLanding = ({ place }) => {
  const {
    result: {
      placeDetails: { images, placeTitle },
      userProfile,
    },
  } = place;
  console.log(place);

  return (
    <Box component="section">
      <Box
        sx={{
          width: "100%",
          minHeight: "75vh",
          overflow: "hidden",
          mt: 1,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: "40px",
            textAlign: "center",
            fontWeight: "bold",
            my: 2,
          }}
        >
          {placeTitle}
        </Typography>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={image}>
              <Box
                sx={{
                  position: "relative",
                  width: { sm: "100%", md: "600px" },
                  height: "50vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                <Image
                  src={images[index]}
                  alt="corusel image"
                  fill
                  sizes="(min-width: 768px) 100%, (min-width: 1200px) 100%, 100%"
                />
              </Box>
            </div>
          ))}
        </Slider>
      </Box>

      <Container maxWidth="lg">
        <Stack direction={{ sm: "column-reverse", md: "row" }} gap={2}>
          <Box flex={2}>
            <Box>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                gap={1}
              >
                <Typography
                  variant="h1"
                  component="h5"
                  sx={{
                    fontSize: "35px",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  {placeTitle}
                </Typography>
                <Box>
                  <Image
                    src={userProfile}
                    alt="user profile picture"
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "25px",
                    }}
                  />
                </Box>
              </Stack>
            </Box>
          </Box>
          <Box flex={1}>fasdfdsf</Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PlaceLanding;
