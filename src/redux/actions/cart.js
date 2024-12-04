export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const removePizza = (id) => ({
  type:"REMOVE_PIZZA",
  payload: id,
});

export const incrementPizza = (id) => ({
  type: "INCREMENT_PIZZA",
  payload: id,
});

export const decrementPizza = (id) => ({
  type: "DECREMENT_PIZZA",
  payload: id,
});
