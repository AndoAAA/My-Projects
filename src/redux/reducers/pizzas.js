import { SET_PIZZAS, FETCH_PIZZAS_FAILED } from "../actions/actionTypes";

const initialState = {
  items: [],
  error: null,
  isLoaded: false,
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        error: null,
        isLoaded: true,
      };
    case FETCH_PIZZAS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default pizzasReducer;
