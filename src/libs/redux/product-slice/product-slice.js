import { createSlice } from "@reduxjs/toolkit";
import { FETCH_STATUS } from "../../../utils/constant";
import { getProducts, productSliceName } from "./actions";

const productSlice = createSlice({
  name: productSliceName,
  initialState: {
    loading: null,
    products: [],
    basketItems: [],
    getProductsStatus: FETCH_STATUS.IDLE,
  },

  reducers: {
    getBasketDataByStorage: (state) => {
      const basketItems = JSON.parse(localStorage.getItem("basketItems"));
      if (basketItems && basketItems?.length) {
        state.basketItems = basketItems;
      }
    },

    addBasket: (state, { payload }) => {
      if (!state.basketItems.length) {
        state.basketItems.push(payload);
      } else {
        const findItem = state.basketItems.find(
          (item) => item.id === payload.id
        );

        if (!findItem) {
          state.basketItems.push(payload);
        } else {
          state.basketItems = state.basketItems.map((item) => {
            if (item.id === findItem.id) {
              return {
                ...item,
                count: item.count + payload.count,
              };
            }
            return item;
          });
        }
      }
      localStorage.setItem("basketItems", JSON.stringify(state.basketItems));
    },

    removeItem: (state, { payload }) => {
      state.basketItems = state.basketItems.filter(
        (item) => item.id !== payload.id
      );
      localStorage.setItem("basketItems", JSON.stringify(state.basketItems));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.getProductsStatus = FETCH_STATUS.PANDING;
    }),
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        state.getProductsStatus = FETCH_STATUS.SUCCESS;
        state.products = payload;
      });
    builder.addCase(getProducts.rejected, (state) => {
      state.getProductsStatus = FETCH_STATUS.REJECTED;
    });
  },
});

export const productReducer = productSlice.reducer;

export const productActions = {
  ...productSlice.actions,
  getProducts,
};
