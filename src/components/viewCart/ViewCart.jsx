import React, { useContext } from 'react'
import { useEffect } from 'react'
import ItemCart from '../itemCart/ItemCart'

const ViewCart = ({dataProduct}) => {

  

  return (
    <ItemCart producto={dataProduct}/>
  )
}

export default ViewCart