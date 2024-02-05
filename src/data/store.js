import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./FormSlice";
import carslice from "./CarSlice";
import productSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    forms: formSlice.reducer,
    cars: carslice.reducer,
    products: productSlice.reducer,
  },
});

export default store;
