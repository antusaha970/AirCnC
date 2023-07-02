import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const placesSlice = createSlice({
  name: "placesSlice",
  initialState,
  reducers: {
    addPlaces: (state, action) => {
      state.result = action.payload.result;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPlaces } = placesSlice.actions;

export default placesSlice.reducer;
