import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCarsData = createAsyncThunk("fetch-cars", async (apiURL) => {
  const response = await axios(apiURL);
  return response.data;
});

const carslice = createSlice({
  name: "cars",
  initialState: { carData: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCarsData.fulfilled, (state, action) => {
      state.carData = action.payload;
    });
  },
});

export default carslice;
