import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./reducers/filtres";
import pizzasReducer from "./reducers/pizzas";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    pizzas: pizzasReducer,
  },
  
});
