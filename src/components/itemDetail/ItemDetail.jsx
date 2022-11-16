import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FaProductHunt } from 'react-icons/fa'
import SimilarProducts from '../similarProducts/SimilarProducts'

const ItemDetail = ({product}) => {

  return (
    <div className="container itemDetail">

          <div className='itemDetail-container'>

            <div className="detail-content">

              <div className="detailImg-container">

                <img className='detail-img' src={product[0].imgProduct} alt="guitar" />

              </div>

              <div className="detailData">

                <div className="detailName-container">
                  <h3 className='detail-name'>{product[0].name}</h3>
                </div>

                <div className="detail-price-container">
                  <span className='detail-price'>$ {product[0].price}</span>
                </div>

                <div className="detailStock-container">
                  <span className="detailStock">STOCK: {product[0].stock}</span>
                </div>

                <div className="detail-brand">
                  <img className='detailBrandImg' src={product[0].marca} alt="marcha" />
                </div>

                <div className='detail-button-container'>
                  <button className='detail-button'>add cart</button>
                </div>

              </div>
            </div>

            <div className="detailDescribe-container">
              <p className="detailDescribe"><span className='span'>Description:</span>{product[0].descripcion}</p>
            </div>
          </div>

          <SimilarProducts id={product[0].ID} modelo={product[0].modelo}/>
    </div>
  )
}

export default ItemDetail