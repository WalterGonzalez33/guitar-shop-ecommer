import React from 'react'
import card from '../../assets/carrito-de-compras.png'

function CartWidget() {
  return (
    <div className='cartWidget-container'>
        
        <img className='imgCart' src={card} alt="card" />
    
    </div>
  )
}

export default CartWidget