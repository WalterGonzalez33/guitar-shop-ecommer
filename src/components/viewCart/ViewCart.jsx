import CartData from "../cartData/CartData"
import { useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import GetForm from '../form/GetForm'
import cartImg from '../../assets/cart/carrito-de-compras.gif'
import { useState } from "react";


const ViewCart = () => {

  const { cart, cleardCart, total, setTotal } = useContext(CartContext);

  const [ formActive, setFormActive ] = useState(false)

  const mostrarForm = () => {
    setFormActive(true)
  }

  useEffect(() => {
  },[cart])

  return (

    <div className="cart">
      <div className=' container'>

        {formActive && <GetForm formActive={setFormActive}/>}

        <div className="img-cart-container">
          <img className='img-cart' src={cartImg} alt="cart" />

          <h3 className="title-cart">Cart</h3>
        </div>

        <div className="cleard-container">
          <span className='cleard' onClick={() => cleardCart()}>Clear</span>
        </div>
        <div className="list-cart-container">
          {
            cart.map(product => {
            return <CartData dataProduct={product} key={product.id} setState={setTotal} state={total}/>
            })
          } 
        </div>

        <div className="cart-description-container">
          <div className="total-container">
            <span>total: $ {total}</span>
          </div>

          <div className="confirm-compra-container">
            <button className='confirm-compra' onClick={() =>{mostrarForm()} }>confirm order</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ViewCart