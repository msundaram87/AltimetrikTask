import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const CreateCarForms = createAsyncThunk(
  "create-car-form",
  async ({ apiurl, formInfoData }) => {
    const response = await axios(apiurl, {
      method: "post",
      data: formInfoData,
    });
    return response.data;
  }
);

const formSlice = createSlice({
  name: "forms",
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CreateCarForms.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default formSlice;
