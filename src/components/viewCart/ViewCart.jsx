import React, { useContext } from 'react'
import { useEffect } from 'react'
import ItemCart from '../itemCart/ItemCart'

const ViewCart = ({dataProduct}) => {

  

  return (
    <div className='viewCart-container container'>
      <ItemCart producto={dataProduct}/>
    </div>
  )
}

export default ViewCart