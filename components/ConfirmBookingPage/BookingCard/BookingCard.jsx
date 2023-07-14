"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import { diffOfDays } from "@utils/dateHelper";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BookingCard = () => {
  const reservedPlace = useSelector((state) => state.reservation.reservedPlace);
  const reservationInfo = useSelector(
    (state) => state.reservation.reservationInfo
  );
  const {
    placeDetails: {
      placeTitle,
      images,
      fees: { perNightFees, cleaningFees, serviceFees },
    },
  } = reservedPlace;
  const [differenceOfDays, setDifferenceOfDays] = useState(0);
  useEffect(() => {
    setDifferenceOfDays(
      diffOfDays(
        new Date(JSON.parse(reservationInfo.arrival)),
        new Date(JSON.parse(reservationInfo.departure))
      )
    );
  }, [reservationInfo.arrival, reservationInfo.departure]);

  return (
    <Box
      sx={{
        boxShadow: "0px 2px 15px #e8e8e8",
        width: "100%",
        height: "450px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        p: 2,
      }}
      component="aside"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          component="h5"
          sx={{
            fontSize: { sm: "20px", md: "26px" },
            fontWeight: "bold",
            pr: 1,
          }}
        >
          {placeTitle}
        </Typography>
        <Image src={images[0]} alt="home image" width={150} height={124} />
      </Stack>

      <Box
        sx={{
          mt: 2,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            py: 1,
          }}
        >
          <Typography>
            ${perNightFees} X {differenceOfDays} days
          </Typography>
          <Typography>${perNightFees * differenceOfDays}</Typography>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            py: 1,
          }}
        >
          <Typography>Cleaning fee</Typography>
          <Typography>${cleaningFees}</Typography>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            py: 1,
          }}
        >
          <Typography>Service fee</Typography>
          <Typography>${serviceFees}</Typography>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            py: 1,
          }}
        >
          <Typography>Total</Typography>
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            ${perNightFees * differenceOfDays + serviceFees + cleaningFees}
          </Typography>
        </Stack>
        <Divider />
      </Box>
    </Box>
  );
};

export default BookingCard;
