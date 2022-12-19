import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../cards/Cards'

import { getFirestore, getDocs, collection, where, query } from 'firebase/firestore'
import Loading from '../loading/Loading'

const ItemList = () => {

    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const { filterName } = useParams()



    const getData = () => {

      const db = getFirestore();

      const querySnapshot = collection(db, 'Products')

      if(filterName){
        const queryFilter = query(
          querySnapshot,
          where('model', '==', filterName)
        )

        getDocs(queryFilter)
        .then((res) => {
          const data = res.docs.map(( item ) => {
            return {id: item.id, ...item.data()}
          })

          setData(data)
          setLoading(false)

        })
        .catch(err => console.log(err))
      }else{
        getDocs(querySnapshot)
        .then((res) => {
          const data = res.docs.map(( item ) => {
            return {id: item.id, ...item.data()}
          })
  
          setData(data)
          setLoading(false)
  
        })
        .catch(err => console.log(err))
      }
    }

    useEffect(() => {
      getData()
    } ,[filterName])


  return (

    <div className='container cont-card'>

      <div className="title-product-list-container">
        <h3 className="title-product-list">{filterName ? filterName : 'All products'}</h3>
      </div>
      { loading && <Loading/>}
        {
          data &&  data.map(item => (
                <Cards key={item.id} producto={item}/>
            ))
        }
    </div>
  )
}

export default ItemList