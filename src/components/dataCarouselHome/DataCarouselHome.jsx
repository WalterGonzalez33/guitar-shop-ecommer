import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CarouselHome from '../carouselHome/CarouselHome'
import Loading from '../loading/Loading'
import { getFirestore, getDocs, collection, where, query } from 'firebase/firestore'

const DataCarouselHome = ({ mejores_productos }) => {


  const [ dataCarousel , setDataCarousel ] = useState([])
  const [ loading, setLoading ] = useState(true)


  const getData = () => {

    const db = getFirestore();

    const querySnapshot = collection(db, 'Products')

    if(mejores_productos){
      const queryFilter = query(
        querySnapshot,
        where('price', '>', 2000)
      )

      getDocs(queryFilter)
      .then((res) => {
        const data = res.docs.map(( item ) => {
          return {id: item.id, ...item.data()}
        })

        setDataCarousel(data)
        setLoading(false)

      })
      .catch(err => console.log(err))
    }else{
      getDocs(querySnapshot)
      .then((res) => {
        const data = res.docs.map(( item ) => {
          return {id: item.id, ...item.data()}
        })

        setDataCarousel(data)
        setLoading(false)

      })
      .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className='container'>
      {dataCarousel && <CarouselHome products={dataCarousel}/>}
      {loading && <Loading/>}
    </div>
  )
}

export default DataCarouselHome