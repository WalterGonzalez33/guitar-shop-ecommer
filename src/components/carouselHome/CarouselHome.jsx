import React, { useEffect } from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cards from '../cards/Cards'

const CarouselHome = ({ products }) => {

  // dimensiones del brouser
  const [ width, setWidth ] = useState(window.innerWidth)

  // funcion que modifica los valores de las dimensiones actuales del brouser
  const sizeChange = () => {
    setWidth(window.innerWidth);
  }

  // funcion del carousel para la vista movil
  const getItemMovil = () => {
    const cardItem = products.map((item) => {
      return (
            <Carousel.Item key={item.ID}>
              {<div className='carousel-item-container'>
                <Cards producto={item}/>
              </div>}
            </Carousel.Item>
      )
    })
    return cardItem
  }

  // funsion de la vista para dispositivos mas grandes
  const getItemDesk = () => {
    const cardItem = products.map((item, index)=>{
      return index < 4 ? <Cards key={item.ID} producto={item}/> : <></>
    })
    return cardItem
  }

  useEffect(() => {

    window.addEventListener('resize', sizeChange)

    return () => {
      window.removeEventListener('resize', sizeChange)
    }
    
  }, [ width ])


  return (
    <div className="home-products container">

      
      {width <= 1000 &&  <Carousel variant="dark" indicators={false}>
        { width <= 1000 && getItemMovil() }
      </Carousel>}

      <div className="item-card row" >
        { width > 1000 && getItemDesk() }
      </div>
    </div>
  )
}

export default CarouselHome
