import placesReducer from "@redux/slices/placesSlice";
import reservationReducer from "@redux/slices/reservationSlice";
import searchReducer from "@redux/slices/searchSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    places: placesReducer,
    reservation: reservationReducer,
  },
});
