import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./reducers/filtres";
import pizzasReducer from "./reducers/pizzas";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    pizzas: pizzasReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});
