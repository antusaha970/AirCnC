"use client";

import { Box, Stack, Typography } from "@mui/material";
import SearchFeedTitle from "../SearchFeedTitle/SearchFeedTitle";
import { FilterButton } from "@components/Styled/Styled";

const SearchFeed = () => {
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
