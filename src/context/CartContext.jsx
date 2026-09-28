import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cart: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item, index) => index !== action.index)
      };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};