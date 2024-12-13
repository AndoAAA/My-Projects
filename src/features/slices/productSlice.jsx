import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filtredProducts:
      JSON.parse(sessionStorage.getItem("filtredData")) || storeData,
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
  },
});

export const { filtredProducts } = productSlice.actions;
export default productSlice.reducer;
