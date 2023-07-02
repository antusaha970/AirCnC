"use client";

import {
  AddIconCustom,
  CustomFormControl,
  RemoveIconCustom,
  SearchBoxButton,
  SearchBoxItemStack,
  SearchBoxItemText,
} from "@components/Styled/Styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addSearchOption } from "@redux/slices/searchSlice";
import { formatSearchOptions } from "@utils/helperFunctions";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [arrivalDate, setArrivalDate] = useState(dayjs(arrivalFormattedDate));
  const [departureDate, setDepartureDate] = useState(
    dayjs(departureFormattedDate)
  );
  const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(0);
  const [babes, setBabes] = useState(0);
  const dispatch = useDispatch();

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    if (!location) {
      toast.warn("Location is not selected", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const searchOptionsObject = formatSearchOptions(
        location,
        adults,
        child,
        babes,
        arrivalDate,
        departureDate
      );
      dispatch(addSearchOption(searchOptionsObject));
      router.push("/search");
    }
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

        <Box>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Guests</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  pb: 2,
                }}
                component="p"
              >
                {adults} Adults, {child} Child, {babes} babies
              </Typography>
              <SearchBoxItemStack>
                <SearchBoxItemText>Adults</SearchBoxItemText>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <AddIconCustom
                    onClick={() => {
                      setAdults((perv) => perv + 1);
                    }}
                  />
                  <Typography>{adults}</Typography>
                  <RemoveIconCustom
                    onClick={() => {
                      if (adults > 1) {
                        setAdults((perv) => perv - 1);
                      }
                    }}
                  />
                </Box>
              </SearchBoxItemStack>
              <SearchBoxItemStack>
                <SearchBoxItemText>Child</SearchBoxItemText>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <AddIconCustom
                    onClick={() => {
                      setChild((prvChild) => prvChild + 1);
                    }}
                  />
                  <Typography>{child}</Typography>
                  <RemoveIconCustom
                    onClick={() => {
                      if (child > 0) {
                        setChild((prvChild) => prvChild - 1);
                      }
                    }}
                  />
                </Box>
              </SearchBoxItemStack>
              <SearchBoxItemStack>
                <SearchBoxItemText>Babies</SearchBoxItemText>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <AddIconCustom
                    onClick={() => {
                      setBabes((prvBabes) => prvBabes + 1);
                    }}
                  />
                  <Typography> {babes} </Typography>
                  <RemoveIconCustom
                    onClick={() => {
                      if (babes > 0) {
                        setBabes((prvBabes) => prvBabes - 1);
                      }
                    }}
                  />
                </Box>
              </SearchBoxItemStack>
            </AccordionDetails>
          </Accordion>
        </Box>
        <SearchBoxButton onClick={handleSearch}>
          <SearchIcon /> Search
        </SearchBoxButton>
      </Stack>
    </Box>
  );
};

export default SearchBox;
