import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/sliderSlice";
import productReducer from "../features/slices/productSlice";
import cardReducer from "../features/slices/cardSlice";
import authReducer from "../features/slices/authSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productReducer,
    card: cardReducer,
    user: authReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
