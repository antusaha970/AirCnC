import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearched: false,
  searchOptions: {},
  searchResults: {},
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    addSearchOption: (state, action) => {
      state.searchOptions = action.payload;
      state.isSearched = true;
    },
    addSearchResult: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSearchOption, addSearchResult } = searchSlice.actions;

export default searchSlice.reducer;
