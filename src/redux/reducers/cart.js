import { ADD_PIZZA_CART } from "../actions/actionTypes";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (items) => items.reduce((sum, obj) => sum + obj.price, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const currentItems = state.items[action.payload.id]
        ? [...state.items[action.payload.id]]
        : [];

      const updatedItems = {
        ...state.items,
        [action.payload.id]: [...currentItems, action.payload],
      };

      const allItems = Object.values(updatedItems).flat();
      const totalPrice = getTotalPrice(allItems);

      return {
        ...state,
        items: updatedItems,
        totalCount: allItems.length,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;
