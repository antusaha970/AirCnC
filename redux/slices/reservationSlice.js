import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservedPlace: {},
  reservationInfo: {},
};

export const reservationSlice = createSlice({
  name: "reservationSlice",
  initialState,
  reducers: {
    addReservedPlace: (state, action) => {
      state.reservedPlace = action.payload;
    },
    addReservationInfo: (state, action) => {
      state.reservationInfo = action.payload.finalDate;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addReservedPlace, addReservationInfo } =
  reservationSlice.actions;

export default reservationSlice.reducer;
