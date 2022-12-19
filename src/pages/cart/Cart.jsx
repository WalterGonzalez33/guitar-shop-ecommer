import React, { useContext } from 'react'
import ViewCart from '../../components/viewCart/ViewCart'
import cartVacio from '../../assets/carrito-vacio.gif'
import { CartContext } from '../../context/CartContext';
import { useEffect } from 'react';

const Cart = () => {

  const { cart } = useContext(CartContext);

  useEffect(() => {
    
  }, [ cart ])
  return (
    <>
    {
        cart.length
          ? <ViewCart/>
          : <div className="cart">
              <div className="container cart-vacio">
                <div className="cart-vacio">
                    <img src={cartVacio} alt="cartVacio" />
                </div>
              </div>
            </div>
    }
    </>  
  )
}

export default Cart