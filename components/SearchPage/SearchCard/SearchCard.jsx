"use client";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { diffOfDays } from "@utils/dateHelper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  p: 4,
};

const SearchCard = ({ place }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dates = useSelector(
    (state) => state.search.searchOptions.datesOfAccommodation
  );
  const differenceInDays = diffOfDays(dates.arrivalDate, dates.departureDate);
  const {
    placeDetails: {
      images,
      placeTitle,
      roomsAndGuest: { bartRoom, bedRooms, beds, guest },
      fees: { perNightFees },
    },
    _id,
  } = place;
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { sm: "auto", md: "200px" },
          borderBottom: "1px solid #CBCBCB",
        }}
      >
        <Stack
          direction={{ sm: "column", md: "row" }}
          gap={2}
          justifyContent={{ sm: "center" }}
        >
          <Box
            sx={{
              position: "relative",
              width: { md: "265px", sm: "100%" },
              height: "197px",
            }}
            onClick={handleOpen}
          >
            <Image
              src={images[0]}
              alt="home image"
              fill
              style={{ borderRadius: "16px" }}
              quality={50}
              sizes="(min-width: 768px) 100%, (min-width: 1200px) 265px, 265px"
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
              <Link href={`/place-details/${_id}`}>{placeTitle}</Link>
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
                <br />
                <Typography
                  component="span"
                  sx={{
                    fontSize: "16px",
                    color: "#6A6A6A",
                    fontWeight: "500",
                  }}
                >
                  ${perNightFees * differenceInDays}/ total
                </Typography>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Hotel images"
        aria-describedby="Hotel image in view"
      >
        <Box sx={style}>
          <Box>
            <Typography color="primary"> Images of the home</Typography>
            <Image
              src={images[0]}
              alt="home image"
              width={300}
              height={300}
              style={{ borderRadius: "16px" }}
              quality={75}
            />
            <Image
              src={images[1]}
              alt="home image"
              width={300}
              height={300}
              style={{ borderRadius: "16px" }}
              quality={75}
            />
          </Box>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </>
  );
};

export default SearchCard;
