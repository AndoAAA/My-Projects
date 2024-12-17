import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filtredProducts:
      JSON.parse(sessionStorage.getItem("filtredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
  },
  reducers: {
    filtredProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filtredProducts = filter;
        const saveData = JSON.stringify(filter);
        sessionStorage.setItem("filtredData", saveData);
      } catch (error) {
        return error;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveData = JSON.stringify(oneProduct);
        sessionStorage.setItem("onePriduct", saveData);
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filtredProducts, singleProduct } = productSlice.actions;
export default productSlice.reducer;
