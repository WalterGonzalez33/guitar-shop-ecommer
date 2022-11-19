import { Link } from 'react-router-dom';
import { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'


function CartWidget() {

  const [burbuja, setBurbuja] = useState(0);

  return (
    <Link to={'/cart'} className='cartWidget-container'>
        
        {/* <img className='imgCart' src={card} alt="card" /> */}
        <FiShoppingCart className='svgCart'/>
    
    </Link>
  )
}

export default CartWidget