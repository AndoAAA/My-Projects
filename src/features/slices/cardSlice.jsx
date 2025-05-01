import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    card: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCard(state, action) {
      const product = action.payload;

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
          img: product.img,
          price: product.price,
          size: product.size,
          amount: 1,
          totalPrice: product.price,
          name: product.name,
          color: product.color,
        });
        state.totalAmount++;
        state.totalPrice += product.price;
      }
    },

    removeProduct(state, action) {
      const product = action.payload;

      const index = state.card.findIndex(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );

      if (index !== -1) {
        const productToRemove = state.card[index];
        
        state.totalAmount -= productToRemove.amount;
        state.totalPrice -= productToRemove.totalPrice;

        state.card.splice(index, 1);
      }
    },
  },
});

export const { addToCard, removeProduct } = cardSlice.actions;
export default cardSlice.reducer;
