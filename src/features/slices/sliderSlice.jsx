import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

export const sliderSlice= createSlice({
    name:"slider",
    initialState:{
        value:0,
        length:sliderData.length,
    },
    reducers: {
        nextSlide (state) {
            state.value = (state.value + 1) % state.length;
        },
        prevSlide (state) {
            state.value = (state.value - 1 + state.length) % state.length;
        },
        dotSlide (state, action) {
            state.value = action.payload;
        },
    }

});


export const {nextSlide, prevSlide, dotSlide} = sliderSlice.actions;
export default sliderSlice.reducer;