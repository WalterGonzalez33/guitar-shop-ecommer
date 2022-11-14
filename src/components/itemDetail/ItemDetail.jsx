import React from 'react'
import { FaProductHunt } from 'react-icons/fa'

const ItemDetail = (Product) => {
  return (
    <div>
        <h1>{Product.name}</h1>
        <img src={Product.imgProduct} alt="" />
    </div>
  )
}

export default ItemDetail