import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./product-slice/product-slice";
import { productSliceName } from "./product-slice/actions";




export default configureStore({

    reducer: {
        [productSliceName]: productReducer,
    }
});