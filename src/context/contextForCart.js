import React, { createContext, useReducer } from 'react';
import { CartReducer } from './cartReducer';

export const contextForCart = createContext();

const initialState = { cartItems: [] }

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    const addProduct = payload => {
        dispatch({ type: 'ADD', payload });
    }

    const removeProduct = payload => {
        dispatch({ type: 'REMOVE', payload });
    }

    const increaseQuantity = payload => {
        dispatch({ type: 'INCREASEQTY', payload });
    }

    const decreaseQuantity = payload => {
        dispatch({ type: 'DECREASEQTY', payload });
    }

    const clearProducts = () => {
        dispatch({ type: 'CLEAR', payload: undefined });
    }

    const getItems = () => {
        return state.cartItems;
    }

    const contextValues = {
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearProducts,
        getItems,
        ...state
    }

    return (
        <contextForCart.Provider value={contextValues}>{children}</contextForCart.Provider>
    )
}

export default CartProvider;