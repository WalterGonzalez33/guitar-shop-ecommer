import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import { Data } from '../../data/Data'

const ItemDetailContainer = () => {

    const [data, setData] = useState([])

    const { productId } = useParams()

    const getData = new Promise((resolve, reject) => {

        setTimeout(() => {

          if(productId){
            const getProduct = Data.filter((p) => {
              return p.ID == productId
            })
            resolve(getProduct)
          }else{
            resolve(Data)
          }


            
        } ,2000)
    })


    useEffect(() => {
      getData
        .then(res => {
          setData(res)
        })
        .catch( e => console.log(e))
    } ,[productId])
    
  return (
    <div className='detail-container'>
        {
            data.length == 1
                ? <ItemDetail key={data.ID} product={data}/>
                : <>nada para mostrar</>
        }
    </div>
  )
}

export default ItemDetailContainer