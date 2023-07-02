import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
export const getAllPlacesById = createAsyncThunk(
  "places/getAllPlacesById",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/order/get-hosted-places/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const deletePlaceById = createAsyncThunk(
  "places/deletePlaceById",
  async (id) => {
    try {
      const response = await axios.delete(`/api/order/delete-place/${id}`);
      return { id };
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  personalHostedPlaces: [],
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
      state.isLoading = false;
    });
    builder.addCase(getAllPlacesById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllPlacesById.fulfilled, (state, action) => {
      state.personalHostedPlaces = action.payload.hostedPlaces;
      state.isLoading = false;
    });
    builder.addCase(getAllPlacesById.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
    builder.addCase(deletePlaceById.fulfilled, (state, action) => {
      const newHomes = state.personalHostedPlaces.filter(
        (home) => home._id !== action.payload.id
      );
      state.personalHostedPlaces = newHomes;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = placesSlice.actions;

export default placesSlice.reducer;
