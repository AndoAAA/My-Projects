import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    card: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCard(state, action) {
      const product = action.payload;
      try {
        const exist = state.card.find(
          (item) =>
            item.id === product.id &&
            item.size === product.size &&
            item.color === product.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += product.price;
          state.totalAmount++;
          state.totalPrice += product.price;
        } else {
          state.card.push({
            id: product.id,
            price: product.price,
            size: product.size,
            amount: 1,
            totalPrice: product.price,
            name: product.name,
            color: product.color,
          });
          state.totalAmount ++;
          state.totalPrice += product.price;
        }
      } catch (error) {
        return error;
      }
    },
  },
});

export const { addToCard } = cardSlice.actions;
export default cardSlice.reducer;
