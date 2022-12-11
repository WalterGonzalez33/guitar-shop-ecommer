import { useEffect } from "react";
import { createContext, useState } from "react"

export const CartContext = createContext([]);

// let cartStorage = (toCart) => {
//   localStorage.setItem('itemToCart', JSON.stringify(toCart))
// }
// let getCartStorage = localStorage.getItem('itemToCart')

const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([]);


    // esta funcion agrega todos los elementos que ya estan en el carrito y le agrega el nuevo selecionado // 

    const addToCart = (product, quantity) => {
        setCart([...cart, {...product, quantity}])
    }


    // esta funcion te debuelve true o false si el elemento esta en el carrito //

    const getElementExist = (id) => {
      const getExist = cart.find(( item ) => {
        return item.ID === id
      })
      
      if(getExist){
        return true
      }else{
        return false
      }
      
    }

    // remueve el elemento seleccionado si este esta en el carrito //
    
    const removeToCart = (id) => {
      const removeProduct = cart.filter(product => {
        return product.ID != id;
      })

      setCart(removeProduct)
    }
    useEffect(() => {
    },[ cart ]);

    return(
        <CartContext.Provider value={{cart, addToCart, removeToCart, getElementExist}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider