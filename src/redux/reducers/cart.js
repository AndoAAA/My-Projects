const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (items) => items.reduce((sum, obj) => sum + obj.price, 0);
const calculateTotals = (items) => {
  let totalPrice = 0;
  let totalCount = 0;

  for (const group of Object.values(items)) {
    totalPrice += getTotalPrice(group);
    totalCount += group.length;
  }

  return { totalPrice, totalCount };
};

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

    case "REMOVE_PIZZA": {
      const { id, uniqueId } = action.payload;

      let updatedItems = { ...state.items };

      if (uniqueId) {
        updatedItems[id] = updatedItems[id].filter(
          (item) => item.uniqueId !== uniqueId
        );

        if (updatedItems[id].length === 0) {
          delete updatedItems[id];
        }
      } else {
        delete updatedItems[id];
      }

      const { totalPrice, totalCount } = calculateTotals(updatedItems);

      return {
        ...state,
        items: updatedItems,
        totalPrice,
        totalCount,
      };
    }

    case "INCREMENT_PIZZA": {
      const { id } = action.payload;
      const currentItems = state.items[id] || [];

      const updatedItems = {
        ...state.items,
        [id]: [...currentItems, currentItems[0]],
      };

      const { totalPrice, totalCount } = calculateTotals(updatedItems);

      return {
        ...state,
        items: updatedItems,
        totalPrice,
        totalCount,
      };
    }

    case "DECREMENT_PIZZA": {
      const { id } = action.payload;
      const currentItems = state.items[id] || [];

      if (currentItems.length <= 1) {
        const updatedItems = { ...state.items };
        delete updatedItems[id];

        const { totalPrice, totalCount } = calculateTotals(updatedItems);

        return {
          ...state,
          items: updatedItems,
          totalPrice,
          totalCount,
        };
      }

      const updatedItems = {
        ...state.items,
        [id]: currentItems.slice(0, -1),
      };

      const { totalPrice, totalCount } = calculateTotals(updatedItems);

      return {
        ...state,
        items: updatedItems,
        totalPrice,
        totalCount,
      };
    }

    default:
      return state;
  }
};

export default cart;
