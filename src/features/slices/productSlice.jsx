import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filtredProducts:
      JSON.parse(sessionStorage.getItem("filtredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
    error: false,
  },
  reducers: {
    filtredProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filtredProducts = filter;
        state.error = false;
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
        sessionStorage.setItem("oneProduct", saveData);
      } catch (error) {
        return error;
      }
    },
    filterByGender(state, action) {
      try {
        const gender = state.filtredProducts.filter(
          (product) => product.gender === action.payload
        );
        state.error = false;
        state.filtredProducts = gender;
        const oneGenderType = gender.length > 0;
        if (oneGenderType) {
          state.error = false;
          const saveState = JSON.stringify(gender);
          sessionStorage.setItem("filtredData", saveState);
        } else {
          state.error = true;
          state.filtredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    sortByPrice(state, action) {
      try {
        const sortedProducts = [...state.filtredProducts].sort(
          (a, b) => b.price - a.price
        );
        state.filtredProducts = sortedProducts;
        sessionStorage.setItem("filtredData", JSON.stringify(sortedProducts));
        state.error = null;
      } catch (error) {
        state.error = "An error occurred while sorting products by price.";
      }
    },
    filterByColor(state, action) {
      try {
        const filteredByColor = state.filtredProducts.filter(
          (product) => product.color && product.color.includes(action.payload)
        );
    
        if (filteredByColor.length > 0) {
          state.filtredProducts = filteredByColor;
          state.error = null;
          sessionStorage.setItem("filtredData", JSON.stringify(filteredByColor));
        } else {
          state.error = `No products found for color "${action.payload}".`;
        }
      } catch (error) {
        state.error = "An error occurred while filtering by color.";
      }
    },
    sortBySize(state, action) {
      try {
        const filteredBySize = state.filtredProducts.filter(
          (product) => product.size && product.size.includes(action.payload)
        );
    
        if (filteredBySize.length > 0) {
          state.filtredProducts = filteredBySize;
          state.error = null;
          sessionStorage.setItem("filtredData", JSON.stringify(filteredBySize));
        } else {
          state.error = `No products found for size "${action.payload}".`;
        }
      } catch (error) {
        state.error = "An error occurred while filtering by size.";
      }
    },
    
  },
});

export const {
  filtredProducts,
  singleProduct,
  filterByGender,
  sortByPrice,
  clearFilters,
  filterByColor,
  sortBySize,
} = productSlice.actions;
export default productSlice.reducer;
