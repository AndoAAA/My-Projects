import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import slideReducer from "../features/slices/sliderSlice";
import productReducer from "../features/slices/productSlice";
import cardReducer from "../features/slices/cardSlice";
import authReducer from "../features/slices/authSlice";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "card"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productReducer,
    card: cardReducer,
    user: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);
