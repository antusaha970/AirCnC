"use client";

import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { settings } from "@utils/helperFunctions";

const PlaceLanding = ({ place }) => {
  const {
    result: {
      placeDetails: { images },
    },
  } = place;
  console.log(place);

  return (
    <Box component="section">
      <Box
        sx={{
          width: "100%",
          minHeight: "60vh",
          overflow: "hidden",
          mt: 1,
        }}
      >
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
    </Box>
  );
};

export default PlaceLanding;
