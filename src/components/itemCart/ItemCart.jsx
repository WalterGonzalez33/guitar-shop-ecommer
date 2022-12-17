
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

        <div className="item-cart-container">

            <Link to={`/detail/${producto.id}`} className="item-cart-img-container link-product">
                <img src={`./imgProducts/${producto.imgId}`} alt="guitar" />
                <div className="item-cart-name-container">
                    <h3 className="item-cart-name">{producto.title}</h3>
                </div>
            </Link>

            <div className="price-container">
                <span>${producto.price} c/u</span>
            </div>

            <SetQuantity stock={producto.stock} state={cantProduct} setState={setCantProduct} text={false}/>

            <div className="quantity">
                <span>subtotal: ${subTotal}</span>
            </div>

            <div className="item-cart-remove-container" onClick={()=>{
                removeToCart(producto.ID)
            }}>
                <FaTrash/>
            </div>

        </div>

    </div>
    
  )
}

export default ItemCart