"use client";

import { CustomFormControl } from "@components/Styled/Styled";
import { Box, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { useState } from "react";

const SearchBox = () => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  console.log(location);
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
        <Stack direction={"row"}></Stack>
      </Stack>
    </Box>
  );
};

export default SearchBox;
