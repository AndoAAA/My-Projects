import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./reducers/filtres";
import pizzasReducer from "./reducers/pizzas";
import cartReducer from "./reducers/cart";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});
