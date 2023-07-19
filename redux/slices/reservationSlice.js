import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservedPlace: {},
  reservationInfo: {},
  isReserving: false,
  totalPayment: 0,
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
      state.isReserving = true;
    },
    addTotalPayment: (state, action) => {
      state.totalPayment = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addReservedPlace, addReservationInfo, addTotalPayment } =
  reservationSlice.actions;

export default reservationSlice.reducer;
