export const commerceReducer = (state, { type, payload }) => {
  switch (type) {
    case "add_to_cart":
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case "remove_from_cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    case "clear_cart":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
