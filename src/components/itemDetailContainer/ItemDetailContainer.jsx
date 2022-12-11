import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import { Data } from '../../data/Data'
import Loading from '../loading/Loading';

const ItemDetailContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

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
          setLoading(!loading)
        })
        .catch( e => console.log(e))
    } ,[productId])
    
  return (
    <div className='detail-container'>
      
        { loading && <ItemDetail key={data.ID} product={data}/> }

        { loading === false && <Loading/> }
    </div>
  )
}

export default ItemDetailContainer