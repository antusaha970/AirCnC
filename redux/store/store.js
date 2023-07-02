import placesReducer from "@redux/slices/placesSlice";
import searchReducer from "@redux/slices/searchSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    places: placesReducer,
  },
});
