"use client";

import { Box, Stack, Typography } from "@mui/material";
import SearchFeedTitle from "../SearchFeedTitle/SearchFeedTitle";
import { FilterButton } from "@components/Styled/Styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addSearchResult } from "@redux/slices/searchSlice";

const SearchFeed = () => {
  const search = useSelector((state) => state.search);
  const searchLocation = useSelector(
    (state) => state.search.searchOptions.searchLocation.location
  );
  const dispatch = useDispatch();
  useEffect(() => {
    async function searchResult() {
      try {
        const { data } = await axios.get(
          `/api/client/places/filter?location=${searchLocation}`
        );
        dispatch(addSearchResult(data.availablePlaces));
      } catch (error) {
        console.error(error);
      }
    }
    searchResult();
  }, [dispatch, searchLocation]);
  return (
    <Box
      component="section"
      sx={{
        m: 2,
      }}
    >
      <Stack direction={{ md: "row", sm: "column" }}>
        <Box flex={1}>
          <SearchFeedTitle />
          <Stack direction="row" gap={2}>
            <FilterButton variant="p" component="button">
              Lowest Price
            </FilterButton>
            <FilterButton variant="p" component="button">
              Highest Price
            </FilterButton>
            <FilterButton variant="p" component="button">
              self-checking
            </FilterButton>
          </Stack>
        </Box>
        <Box flex={1}>flex 2</Box>
      </Stack>
    </Box>
  );
};

export default SearchFeed;
