import { useEffect } from "react";
import { createContext, useState } from "react"

import { getFirestore, getDocs, doc, collection, where, query } from 'firebase/firestore'

export const CartContext = createContext([]);

// let cartStorage = (toCart) => {
//   localStorage.setItem('itemToCart', JSON.stringify(toCart))
// }
// let getCartStorage = localStorage.getItem('itemToCart')

const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([]);
    const [ data, setData ] = useState([]);
    const [ searchConten, setSearchConten ] = useState('')


    // esta funcion agrega todos los elementos que ya estan en el carrito y le agrega el nuevo selecionado // 

    const addToCart = (product, quantity) => {
        setCart([...cart, {...product, quantity}])
    }

    // borra todos los items del carrito
    const cleardCart = () => {
      setCart([])
    }


    // esta funcion te debuelve true o false si el elemento esta en el carrito //

    const getElementExist = (id) => {
      const getExist = cart.find(( item ) => {
        return item.id === id
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
        return product.id != id;
      })

      setCart(removeProduct)
    }

   // funcion que obtiene la data de firebase
    const getData = () => {
      const db = getFirestore();

      const querySnapshot = collection(db, 'Products')
      getDocs(querySnapshot)
        .then((res) => {
          const data = res.docs.map(( item ) => {
            return {id: item.id, ...item.data()}
          })

          setData(data)

        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
      getData()
    },[]);

    return(
        <CartContext.Provider value={{cart,data,setSearchConten,searchConten, cleardCart, setCart, addToCart, removeToCart, getElementExist}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider