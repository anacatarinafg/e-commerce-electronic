import React, { createContext, useReducer } from 'react';
import { CartReducer } from './cartReducer';

export const contextForCart = createContext();

const initialState = { cartItems: [] };

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = payload => {
    dispatch({ type: 'ADD', payload });
    return state.cartItems;
  };

  const increaseQuantity = payload => {
    dispatch({ type: 'INCREASEQTY', payload });
    return state.cartItems;
  };

  const decreaseQuantity = payload => {
    dispatch({ type: 'DECREASEQTY', payload });
    return state.cartItems;
  };

  const removeProduct = payload => {
    dispatch({ type: 'REMOVE', payload });
    return state.cartItems;
  };

  const clearProducts = () => {
    dispatch({ type: 'CLEAR' });
    return state.cartItems;
  };

  const getItems = () => {
    return state.cartItems;

  };

  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearProducts,
    getItems,
    ...state,
  };

  return (
    <contextForCart.Provider value={contextValues}>
      {children}
    </contextForCart.Provider>
  );
};

export default CartProvider;