"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

const SearchCard = ({ place }) => {
  console.log(place);
  const {
    placeDetails: {
      images,
      placeTitle,
      roomsAndGuest: { bartRoom, bedRooms, beds, guest },
      fees: { perNightFees },
    },
  } = place;
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        borderBottom: "1px solid #CBCBCB",
      }}
    >
      <Stack direction="row" gap={2}>
        <Box>
          <Image
            src={images[0]}
            alt="home image"
            width={265}
            height={197}
            style={{ borderRadius: "16px" }}
          />
        </Box>
        <Box>
          <Typography
            component="h5"
            sx={{
              fontSize: "18px",
              color: "#000000",
            }}
          >
            {placeTitle}
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#6A6A6A",
              fontSize: "16px",
            }}
          >
            {guest} guests &nbsp;&nbsp; {bedRooms}bedrooms &nbsp;&nbsp; {beds}
            beds &nbsp;&nbsp; {bartRoom}baths
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#6A6A6A",
              fontSize: "16px",
            }}
          >
            Wifi Air conditioning Kitchen
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#6A6A6A",
              fontSize: "16px",
              mt: 2,
            }}
          >
            Cancellation flexibility available
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              mt: 1,
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StarIcon
                sx={{
                  color: "#2BDE8C",
                  fontSize: "16px",
                }}
              />
              5
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "18px",
                color: "#000000",
                fontWeight: "500",
              }}
            >
              ${perNightFees}/ night
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchCard;
