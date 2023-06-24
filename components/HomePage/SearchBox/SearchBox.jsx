"use client";

import { CustomFormControl } from "@components/Styled/Styled";
import { Box, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import {
  arrivalFormattedDate,
  departureFormattedDate,
} from "@utils/dateHelper";

const SearchBox = () => {
  const [location, setLocation] = useState("");
  const [arrivalDate, setArrivalDate] = useState(dayjs(arrivalFormattedDate));
  const [departureDate, setDepartureDate] = useState(
    dayjs(departureFormattedDate)
  );

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <Box>
      <Stack>
        <CustomFormControl
          fullWidth
          sx={{
            mb: 2,
          }}
        >
          <InputLabel id="locationSelect"> Select Location</InputLabel>
          <Select
            labelId="locationSelect"
            id="LocationSelect"
            value={location}
            label="Age"
            onChange={handleLocationChange}
            variant="outlined"
          >
            <MenuItem value={"Dhaka"}>Dhaka,Bangladesh</MenuItem>
            <MenuItem value={"Chottogram"}>Chottogram,Bangladesh</MenuItem>
            <MenuItem value={"Cox's Bazar"}>
              Cox&lsquo;s bazar ,Bangladesh
            </MenuItem>
          </Select>
        </CustomFormControl>
        <Stack direction={"row"}>
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
                sx={{
                  border: "1px solid #2BDE8C",
                }}
              />
              <DatePicker
                label="Departure"
                value={departureDate}
                onChange={(newValue) => setDepartureDate(newValue)}
                sx={{
                  border: "1px solid #2BDE8C",
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SearchBox;
