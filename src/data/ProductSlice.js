import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductData = createAsyncThunk(
  "fetch-products",
  async (apiUrl) => {
    const response = await axios(apiUrl);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { productData: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.productData = action.payload;
    });
  },
});

export default productSlice;
