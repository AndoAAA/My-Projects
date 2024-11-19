import axios from "axios";
import { SET_PIZZAS, FETCH_PIZZAS_FAILED } from "./actionTypes";

// Action Creators
export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});

export const fetchPizzasFailed = (error) => ({
  type: FETCH_PIZZAS_FAILED,
  payload: error,
});

// Thunk Action Creator
export const fetchPizzas = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3001/pizzas");
    dispatch(setPizzas(data));
  } catch (error) {
    console.error("Error fetching data:", error);
    dispatch(fetchPizzasFailed(error.message));
  }
};
