const initialState = {
  category: 0,
  sortBy: "popular",
};

const filters = (state = initialState, action) => {
  if (action === "SET_SORT_BY") {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action === "SET_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default filters;
