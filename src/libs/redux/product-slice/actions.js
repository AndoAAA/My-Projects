import { createAsyncThunk } from "@reduxjs/toolkit";
import { productServices } from "./services";

export const productSliceName = "products";

export const getProducts = createAsyncThunk(
  `${productSliceName}/getProducts`,
  async (body, { rejectWithValue }) => {
    try {
      const response = await productServices.getProducts();

      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
