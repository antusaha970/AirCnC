import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllPlaces = createAsyncThunk(
  "places/getAllPlaces",
  async () => {
    try {
      const response = await fetch("/api/client/places", {
        next: { revalidate: 60 },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
};

export const placesSlice = createSlice({
  name: "placesSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllPlaces.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllPlaces.fulfilled, (state, action) => {
      state.result = action.payload.result;
      state.isLoading = false;
    });
    builder.addCase(getAllPlaces.rejected, (state) => {
      state.error = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = placesSlice.actions;

export default placesSlice.reducer;
