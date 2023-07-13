"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useSelector } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import {
  arrivalFormattedDate,
  departureFormattedDate,
  diffOfDays,
} from "@utils/dateHelper";
import dayjs from "dayjs";
import { ReserveButton } from "@components/Styled/Styled";
const ReserveBox = ({ placeDetails }) => {
  const {
    fees: { perNightFees, cleaningFees, serviceFees },
  } = placeDetails;
  console.log(placeDetails);
  const search = useSelector((state) => state.search);
  const [arrivalDate, setArrivalDate] = useState(dayjs(arrivalFormattedDate));
  const [departureDate, setDepartureDate] = useState(
    dayjs(departureFormattedDate)
  );
  const [differenceOfDays, setDifferenceOfDays] = useState(null);
  console.log(search);
  useEffect(() => {
    if (search.isSearched) {
      setArrivalDate(
        dayjs(search.searchOptions.datesOfAccommodation.arrivalDate)
      );
      setDepartureDate(
        dayjs(search.searchOptions.datesOfAccommodation.departureDate)
      );
    }
  }, []);
  useEffect(() => {
    setDifferenceOfDays(diffOfDays(arrivalDate, departureDate));
  }, [arrivalDate, departureDate]);
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
      <Typography
        sx={{
          fontSize: "24px",
        }}
      >
        ${perNightFees}/night
      </Typography>
      <Typography
        sx={{
          color: "#383838",
          fontSize: "12px",
          mt: 1,
        }}
      >
        Dates
      </Typography>

      <Stack
        direction={"row"}
        sx={{
          mb: 2,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker", "DatePicker"]}
            sx={{
              margin: "auto",
              flex: "1",
            }}
          >
            <DatePicker
              label="Arrival"
              value={arrivalDate}
              onChange={(newValue) => setArrivalDate(newValue)}
            />
            <DatePicker
              label="Departure"
              value={departureDate}
              onChange={(newValue) => setDepartureDate(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Stack>
      <Typography
        sx={{
          color: "#383838",
          fontSize: "12px",
          mt: 1,
        }}
      >
        Pricing
      </Typography>
      <Box>
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
        <ReserveButton>Reserve</ReserveButton>
      </Box>
    </Box>
  );
};

export default ReserveBox;
