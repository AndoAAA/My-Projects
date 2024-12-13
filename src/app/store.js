import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/sliderSlice";
import productReducer from "../features/slices/productSlice";


export const store = configureStore({
    reducer:{
        slider: slideReducer,
        products: productReducer
    }
})