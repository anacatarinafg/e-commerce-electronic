import React, { createContext } from 'react';

export const contextForCart = createContext();

const initialState = { cartItems: [] }

const CartProvider = ({children}) => {
    return (
        <contextForCart.Provider value={initialState}>{children}</contextForCart.Provider>
    )
}

export default CartProvider;