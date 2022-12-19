import React from 'react'
import ItemCart from '../itemCart/ItemCart'

const CartData = ({dataProduct, state}) => {
  return (
    <ItemCart producto={dataProduct} state={state}/>
  )
}

export default CartData