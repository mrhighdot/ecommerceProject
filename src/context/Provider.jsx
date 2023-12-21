import { useState, useEffect, useReducer } from "react";
import ECommerceContext from "./myContext";
import { commerceReducer } from "./reducers/commerceReducre";

//Declare initial global state of the website
const initialState = {
  cart: [],
  products: [],
  itemAmount: 0,
};

const CommerceProvider = ({ children }) => {
  // Initializing the useReducer hook
  const [state, dispatch] = useReducer(commerceReducer, initialState);

  // Dispatch Function for adding a product to the cart
  const addToCart = ({ product }) => {
    dispatch({ type: "add_to_cart", payload: product });
  };

  // Dispatch Function for removing a particular item from the cart
  const removeItem = ({ productId }) => {
    dispatch({ type: "remove_from_cart", payload: productId });
  };

  // Dispatch Function to clear all items
  const clearCart = () => {
    dispatch({ type: "clear_cart" });
  };
    
    
  return (
    <ECommerceContext.Provider
      value={{ state, addToCart, removeItem, clearCart }}
    >
      {children}
    </ECommerceContext.Provider>
  );
};

export default CommerceProvider;
