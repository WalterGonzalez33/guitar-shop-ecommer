
import { useEffect } from 'react';
import { useContext } from 'react';
import ViewCart from '../../components/viewCart/ViewCart'
import { CartContext } from '../../context/CartContext';
import cartImg from '../../assets/cart/carrito-de-compras.gif'
import { useState } from 'react';

const Cart = () => {

  const { cart } = useContext(CartContext);

  const [ total, setTotal ] = useState(0)

  const getTotal = () => {

    setTotal(cart.reduce((acc, item) => {
      return acc + item.quantity * item.price
    },0))

  }

  useEffect(() => {
    getTotal()
    console.log(total)
  },[cart])

  useEffect(() => {
    getTotal()
  },[])


  return (
    <div className="cart">
      <div className=' container'>

        <div className="img-cart-container">
          <img className='img-cart' src={cartImg} alt="cart" />

          <h3 className="title-cart">Cart</h3>
        </div>

        <div className="list-cart-container">
          {
            cart.map(product => {
            return <ViewCart dataProduct={product} key={product.id} setState={setTotal} state={total}/>
            })
          } 
        </div>

        <div className="cart-description-container">
          <div className="total-container">
            <span>total:${total}</span>
          </div>

          <div className="confirm-compra-container">
            <button className='confirm-compra'>confirm order</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Cart