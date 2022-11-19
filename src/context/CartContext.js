import { useEffect } from "react";
import { createContext, useState } from "react"

export const CartContext = createContext([]);


const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([]);

    const addToCart = (product, quantity) => {
        setCart([...cart, {...product, quantity}])
    }

    const removeToCart = (id) => {
      const removeProduct = cart.filter(product => {
        return product.ID != id;
      })

      setCart(removeProduct)
    }
    useEffect(() => {
      
    },[]);

    return(
        <CartContext.Provider value={{cart, addToCart, removeToCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider