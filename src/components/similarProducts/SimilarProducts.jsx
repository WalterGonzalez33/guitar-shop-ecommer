import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from '../cards/Cards'
import { CartContext } from '../../context/CartContext'
import { useParams } from 'react-router-dom'

const SimilarProducts = ({ model,id }) => {

    const [ similData, setSimilData ] = useState()

    const { data } = useContext(CartContext)
    const { productId } = useParams()

    const getSimilProduct = () => {
        const similProduct = data.filter((product) => {
          return product.model === model
        })

        const comprovationSimil = similProduct.filter((product) => {
          return product.id != id
        })

        setSimilData(comprovationSimil)
    }
    useEffect(() => {
      getSimilProduct()
    },[productId])
    
  return (
    <div>
        <div className="product-similar-container">

            <div className="similar-text-container">
                <h3 className='similar-text'>similar products</h3>
            </div>

            <div className="similar-pruduct-container">
                {
                    similData
                        ? similData.map(e => <Cards key={e.id} producto={e}/>)
                        : <></>
                }
            </div>

        </div>
    </div>
  )
}

export default SimilarProducts