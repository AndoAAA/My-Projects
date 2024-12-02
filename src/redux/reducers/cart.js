const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (items) => items.reduce((sum, obj) => sum + obj.price, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const { id } = action.payload;

      const currentItems = state.items[id] || [];

      const updatedItems = {
        ...state.items,
        [id]: [...currentItems, action.payload],
      };

      let totalPrice = 0;
      let totalCount = 0;

      for (const items of Object.values(updatedItems)) {
        totalPrice += getTotalPrice(items);
        totalCount += items.length;
      }

      return {
        ...state,
        items: updatedItems,
        totalCount,
        totalPrice,
      };
    }

    case "CLEAR_CART":
      return {
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };

    default:
      return state;
  }
};

export default cart;
