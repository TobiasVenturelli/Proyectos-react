import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity) => {
        if (isInCart(item.index)) {
            let posicion = cart.findIndex(p => p.index === item.index);
            cart[posicion].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (itemId) => {
        const productos = cart.filter(item => item.index !== itemId);
        setCart([productos]);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.index ===itemId);
    }

    const cartTotal = () => {
        return cart.reduce((accum, item) => accum += item.quantity, 0);
    }

    const cartSum = () => {
        return cart.reduce((accum, item) => accum += item.quantity * item.price, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, cartSum}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;