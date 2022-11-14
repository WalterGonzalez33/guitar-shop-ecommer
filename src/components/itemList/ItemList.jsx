import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {Data} from '../../data/Data'
import Cards from '../cards/Cards'

const ItemList = () => {

    const [productData, setProductData] = useState([])

    const { filterName } = useParams()

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
          if(filterName){
            const dataFiltrada = Data.filter((product) => {
              return product.modelo == filterName
            })
            resolve(dataFiltrada)
          }else{
            resolve(Data)
          }


            
        } ,2000)
    })


    useEffect(() => {
      getData
        .then(res => {
          setProductData(res)
        })
        .catch( e => console.log(e))
    } ,[filterName])

  return (

    <div className='container cont-card'>
        {
            productData.map(item => (
                <Cards key={item.ID} producto={item}/>
            ))
        }
    </div>
  )
}

export default ItemList