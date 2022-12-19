import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';

const SetQuantity = ({ stock, setState, state, text, product}) => {

    const { cart, setCart } = useContext(CartContext);

    const setQuantityProduct = () => {
      const newCart = cart.map(( item ) => {
        if(item.id === product){
          item.quantity = state
        }
        return item
      })

      setCart(newCart)
    }

    const [ alertMaxCant, setAlertMaxCant] = useState(false)

    const setCantItem = (a) => {
        if(a == "plus"){
      
          if(state < stock){
            setState(state + 1)
          }
          if(state == stock){
            setAlertMaxCant(true)
          }
        }
        if(a == "less"){
      
          if(state > 1){
            setState(state - 1)
          }
          if(state <= stock){
            setAlertMaxCant(false)
          }
        }
    }

    useEffect(() => {
      setQuantityProduct()
    },[ state ])

  return (
    <div>

        {/* // selecionable de cantidad de elementos para el carrito */}
        {   stock > 0 &&   <div className='cant-product-container'>
                                        {text && <span className="cantidad-txt">Cantidad: </span>}
                                        <div className="selec-cant-item-container">
                                          <button onClick={()=> setCantItem('less')} className="buttom-cant button-plus">-</button>
                                          <div className="cant-item">{ state }</div>
                                          <button onClick={()=> setCantItem('plus')} className="buttom-cant button-less">+</button>
                                        </div>
            {/* // alerta de maxima capacida de selecion del producto */}

                                        {
                                          text && alertMaxCant && <div className="alertMaxCant-container">
                                                            <span className="text-maxSelect">max</span>
                                                          </div>
                                        }
                                    </div>
        }

    </div>
  )
}

export default SetQuantity