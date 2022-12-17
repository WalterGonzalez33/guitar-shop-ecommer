import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import Loading from '../loading/Loading';
import {doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)


    const { productId } = useParams()

    const getProduct = () => {

      const db = getFirestore();
      const query = doc(db, 'Products', productId)

      getDoc(query)
        .then((res) => {
          setProduct({id: res.id, ...res.data()})
          setLoading(false)
        }
        )
        .catch(err => console.log(err))

    }



    useEffect(() => {
      getProduct()
    } ,[productId])
    
  return (
    <div className='detail-container'>
      
        { loading && <Loading/>}

        { product && <ItemDetail key={product.id} product={product}/> }
    </div>
  )
}

export default ItemDetailContainer