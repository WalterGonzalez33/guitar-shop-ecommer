
import { useEffect } from 'react';
import { useContext } from 'react';
import ViewCart from '../../components/viewCart/ViewCart'
import { CartContext } from '../../context/CartContext';

const Cart = (prop) => {

  const { cart } = useContext(CartContext);

  useEffect(() => {
    
  },[cart])

  console.log(cart)

  return (
    <div className=' container'>
        {
          cart.map(product => {
           return <ViewCart dataProduct={product} key={product.ID}/>
          })
        }
    </div>
  )
}

export default Cart