"use client";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SearchFeedTitle = () => {
  const router = useRouter();
  const isSearched = useSelector((state) => state.search.isSearched);
  useEffect(() => {
    if (!isSearched) {
      router.replace("/");
    }
  }, [router, isSearched]);
  const searchOptions = useSelector((state) => state.search.searchOptions);
  const numberOfGuest =
    searchOptions?.numberOfGuests?.adults +
    searchOptions?.numberOfGuests?.babes +
    searchOptions?.numberOfGuests?.child;
  function getDate(date) {
    const formatted = new Date(date).toDateString();
    return formatted;
  }
  const arrivalDate = getDate(searchOptions.datesOfAccommodation.arrivalDate);
  const departureDate = getDate(
    searchOptions.datesOfAccommodation.departureDate
  );
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "16px",
          color: "#272727",
        }}
      >
        225 stays {arrivalDate} to {departureDate} {numberOfGuest} guests
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
          color: "#272727",
          fontWeight: "bold",
        }}
        component="h5"
      >
        Stay in {searchOptions?.searchLocation?.location}
      </Typography>
    </Box>
  );
};

export default SearchFeedTitle;
