
import { useEffect } from 'react';
import { useContext } from 'react';
import ViewCart from '../../components/viewCart/ViewCart'
import { CartContext } from '../../context/CartContext';
import cartImg from '../../assets/cart/carrito-de-compras.gif'

const Cart = (prop) => {

  const { cart } = useContext(CartContext);

  useEffect(() => {
    
  },[cart])


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
            return <ViewCart dataProduct={product} key={product.ID}/>
            })
          } 
        </div>
      </div>
    </div>
  )
}

export default Cart