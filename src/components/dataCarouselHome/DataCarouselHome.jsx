import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Data } from '../../data/Data'
import CarouselHome from '../carouselHome/CarouselHome'
import Loading from '../loading/Loading'

const DataCarouselHome = () => {

  const [ dataCarousel , setDataCarousel ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const getData = new Promise((res, rej) => {
    setTimeout(() => {
      res(Data)
    }, 1000)
  })

  useEffect(() => {
    getData
      .then(res =>{
        setDataCarousel(res)
        setLoading(!loading)
      })
      .catch(res => console.log(res))

  }, [dataCarousel])


  return (
    <div className='container'>
      {dataCarousel && <CarouselHome products={dataCarousel}/>}
      {loading && <Loading/>}
    </div>
  )
}

export default DataCarouselHome