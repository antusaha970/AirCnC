"use client";

import { Box, Stack } from "@mui/material";
import SearchFeedTitle from "../SearchFeedTitle/SearchFeedTitle";
import { FilterButton } from "@components/Styled/Styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { addSearchResult } from "@redux/slices/searchSlice";
import SearchCard from "../SearchCard/SearchCard";
import { MyContentLoader } from "@components";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../MapComponent/MapComponent"), {
  ssr: false,
});

const SearchFeed = () => {
  const searchLocation = useSelector(
    (state) => state.search.searchOptions.searchLocation.location
  );
  const latLongStr = useSelector(
    (state) => state.search.searchOptions.searchLocation.latLong
  );
  const latLongArr = latLongStr.split(",");
  console.log({ latLongArr });

  const searchResults = useSelector((state) => state.search.searchResults);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function searchResult() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `/api/client/places/filter?location=${searchLocation}`
        );
        dispatch(addSearchResult(data.availablePlaces));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    searchResult();
  }, [dispatch, searchLocation]);

  const handleFilterSearch = async (filter) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/client/places/filter?location=${searchLocation}&filter=${filter}`
      );
      console.log(data.availablePlaces);
      dispatch(addSearchResult(data.availablePlaces));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
            <FilterButton
              variant="p"
              component="button"
              onClick={() => handleFilterSearch("lowest_price")}
            >
              Lowest Price
            </FilterButton>
            <FilterButton
              onClick={() => handleFilterSearch("highest-price")}
              variant="p"
              component="button"
            >
              Highest Price
            </FilterButton>
            <FilterButton
              onClick={() => handleFilterSearch("self-checking")}
              variant="p"
              component="button"
            >
              self-checking
            </FilterButton>
          </Stack>
          <Stack
            gap={3}
            sx={{
              mt: 2,
            }}
          >
            {!loading &&
              searchResults?.map((place) => (
                <SearchCard key={place._id} place={place} />
              ))}

            {loading && <MyContentLoader />}
            {loading && <MyContentLoader />}
            {loading && <MyContentLoader />}
          </Stack>
        </Box>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              ml: { sm: 0, md: 2 },
            }}
          >
            <MapComponent
              latitude={Number(latLongArr[0])}
              longitude={Number(latLongArr[1])}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchFeed;
