import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CarouselHome from '../carouselHome/CarouselHome'
import Loading from '../loading/Loading'

import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const DataCarouselHome = () => {

  const { data } = useContext(CartContext)

  const [ dataCarousel , setDataCarousel ] = useState([])
  const [ loading, setLoading ] = useState(true)


  const getData = () => {
    
    if(data){
      setDataCarousel(data)
      setLoading(false)
    }else{
      console.log('no data')
    }
  }

  useEffect(() => {
    getData()
  }, [dataCarousel, []])


  return (
    <div className='container'>
      {dataCarousel && <CarouselHome products={dataCarousel}/>}
      {loading && <Loading/>}
    </div>
  )
}

export default DataCarouselHome