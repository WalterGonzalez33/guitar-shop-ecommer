import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { CartContext } from '../../context/CartContext';


function CartWidget() {

  const { cart } = useContext(CartContext);

  const [ quantity, setQuantity ] = useState();

  const getQuantity = () => {
    setQuantity(cart.reduce((acc, item) => {
      return acc + item.quantity
    }, 0))
  }

  useEffect(() => {
    getQuantity()
  }, [ cart ])

  return (
    <Link to={'/cart'} className='cartWidget-container'>

      {
        quantity > 0 && <div className="quantity-cart-container">
                      <span className='cart-quantity'>{quantity <= 9 ? quantity : '9+'}</span>
                    </div>
      }
        
        <FiShoppingCart className='svgCart'/>
    
    </Link>
  )
}

export default CartWidget