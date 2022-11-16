import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Data } from '../../data/Data'
import Cards from '../cards/Cards'

const SimilarProducts = ({ modelo,id }) => {

    const [ data, setData ] = useState()

    const getSimilProduct = () => {
        const similProduct = Data.filter((product) => {
          return product.modelo === modelo
        })

        const comprovationSimil = similProduct.filter((product) => {
          return product.ID != id
        })

        return comprovationSimil
    }
    useEffect(() => {
      setData(getSimilProduct())
    },[id])
    
  return (
    <div>
        <div className="product-similar-container">

            <div className="similar-text-container">
                <h3 className='similar-text'>similar products</h3>
            </div>

            <div className="similar-pruduct-container">
                {
                    data
                        ? data.map(e => <Cards key={e.ID} producto={e}/>)
                        : <></>
                }
            </div>

        </div>
    </div>
  )
}

export default SimilarProducts