"use client";
import Box from "@mui/material/Box";
import { Divider, Stack, Typography } from "@mui/material";
import { StepperComponent } from "@components";
import PetsIcon from "@mui/icons-material/Pets";
import NoDrinksIcon from "@mui/icons-material/NoDrinks";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import { ReserveButton as AgreeButton } from "@components/Styled/Styled";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { diffOfDays } from "@utils/dateHelper";
const Step1 = () => {
  const reservationInfo = useSelector(
    (state) => state.reservation.reservationInfo
  );
  const reservedPlace = useSelector((state) => state.reservation.reservedPlace);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [differenceOfDays, setDifferenceOfDays] = useState(0);
  const [reservedLocation, setReservedLocation] = useState("");
  useEffect(() => {
    setArrivalDate(new Date(JSON.parse(reservationInfo.arrival)));
    setDepartureDate(new Date(JSON.parse(reservationInfo.departure)));
    const {
      placeDetails: { location },
    } = reservedPlace;
    setReservedLocation(location);
  }, [reservationInfo.arrival, reservationInfo.departure, reservedPlace]);
  useEffect(() => {
    setDifferenceOfDays(diffOfDays(arrivalDate, departureDate));
  }, [arrivalDate, departureDate]);
  return (
    <Box>
      <StepperComponent activeStep={0} />
      <Box
        sx={{
          my: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "500",
          }}
          component="h5"
          variant="h4"
        >
          Review house rules
        </Typography>
        <Typography
          sx={{ fontSize: "22px", fontWeight: "500", mt: 1 }}
          component="p"
        >
          {differenceOfDays} nights in {reservedLocation}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            my: 1,
          }}
        >
          <Typography
            sx={{
              color: "#6A6A6A",
            }}
          >
            {arrivalDate?.toLocaleDateString("en-US", {
              weekday: "long",
            })}{" "}
            check-in <br /> After 12:00 AM
          </Typography>
          <Typography
            sx={{
              color: "#6A6A6A",
            }}
          >
            {departureDate?.toLocaleDateString("en-US", {
              weekday: "long",
            })}{" "}
            check-out <br /> After 12:00 AM
          </Typography>
        </Stack>
        <Typography
          component="p"
          sx={{
            color: "#606060",
            mb: 3,
          }}
        >
          Self check-in with building staff
        </Typography>
        <Divider />
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            mb: 2,
          }}
          component="h5"
          variant="h4"
        >
          Things to keep in mind
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
          }}
        >
          <ChildFriendlyIcon /> &nbsp;&nbsp; Suitable for children and infants
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
          }}
        >
          <PetsIcon /> &nbsp;&nbsp; Pets allowed
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
          }}
        >
          <NoDrinksIcon /> &nbsp;&nbsp; No parties or events
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
          }}
        >
          <SmokingRoomsIcon /> &nbsp;&nbsp; Smoking allowed
        </Typography>
      </Box>
      <AgreeButton
        sx={{
          color: "#fff",
        }}
      >
        Agree and Continue
      </AgreeButton>
    </Box>
  );
};

export default Step1;
