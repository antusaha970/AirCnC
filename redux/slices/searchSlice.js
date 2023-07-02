import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearched: false,
  searchOptions: {},
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    addSearchOption: (state, action) => {
      state.searchOptions = action.payload;
      state.isSearched = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSearchOption } = searchSlice.actions;

export default searchSlice.reducer;
