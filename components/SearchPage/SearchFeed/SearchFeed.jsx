"use client";

import { Box } from "@mui/material";
import SearchFeedTitle from "../SearchFeedTitle/SearchFeedTitle";

const SearchFeed = () => {
  return (
    <Box
      component="section"
      sx={{
        m: 2,
      }}
    >
      <SearchFeedTitle />
    </Box>
  );
};

export default SearchFeed;
