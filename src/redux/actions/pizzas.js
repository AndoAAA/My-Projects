import axios from "axios";
import { SET_PIZZAS, FETCH_PIZZAS_FAILED, SET_LOADED } from "./actionTypes";


export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});

export const fetchPizzasFailed = (error) => ({
  type: FETCH_PIZZAS_FAILED,
  payload: error,
});

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});


export const fetchPizzas = (sortBy, category) => async (dispatch) => {
  dispatch(setLoaded(false));

  try {
    const categoryParam = category !== null ? `category=${category}` : "";
    const { type = "popular", order = "desc" } = sortBy || {};
    const { data } = await axios.get(
      `/pizzas?${categoryParam}&_sort=${type}&_order=${order}`
    );
    dispatch(setPizzas(data));
    dispatch(setLoaded(true));
  } catch (error) {
    console.error("Error fetching data:", error);
    dispatch(fetchPizzasFailed(error.message));
  }
};
