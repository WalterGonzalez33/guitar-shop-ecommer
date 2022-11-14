import React from 'react'
import { useState } from 'react'
import Cards from '../cards/Cards'
import card from '../../assets/carrito-de-compras.png'
import { useEffect } from 'react';


function CartWidget() {

  const [burbuja, setBurbuja] = useState(0);

  return (
    <div className='cartWidget-container'>
        
        <img className='imgCart' src={card} alt="card" />
    
    </div>
  )
}

export default CartWidget