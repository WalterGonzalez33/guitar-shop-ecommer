
import { useEffect } from "react";
import { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import SetQuantity from "../setQuantity/SetQuantity";


const ItemCart = ({ producto }) => {

  const { removeToCart } = useContext(CartContext)
  const [ cantProduct, setCantProduct ] = useState(producto.quantity)
  const [ subTotal , setSubTotal ] = useState(cantProduct * producto.price)
 

  useEffect(() => {
    setSubTotal(cantProduct * producto.price)
  },[cantProduct])

  
  return (
    <div className="item-cart">

        <div  className="item-cart-container">

            <div className="data-name-price-container">
                <Link to={`/detail/${producto.id}`} className="item-cart-img-container link-product">
                    <img src={`./imgProducts/${producto.imgId}`} alt="guitar" />
                </Link>
                <div className="name-price-container">
                    <Link to={`/detail/${producto.id}`} className="item-cart-name-container">
                            <h3 className="item-cart-name">{producto.title}</h3>
                    </Link>
                    <div className="price-container">
                        <span>${producto.price} c/u</span>
                    </div>
                </div>


            </div>

            <div className="date-quantity-subtotal-container">
                <SetQuantity product={producto.id} stock={producto.stock} state={cantProduct} setState={setCantProduct} text={false}/>

                <div className="quantity-container">
                    <span className="quantity">${subTotal}</span>
                </div>
            </div>



            <div className="item-cart-remove-container" onClick={()=>{
                removeToCart(producto.id)
            }}>
                <FaTrash/>
            </div>

        </div>

    </div>
    
  )
}

export default ItemCart