
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({ producto }) => {

    const { removeToCart } = useContext(CartContext)
  return (
    <div className="item-cart">

        <div className="item-cart-container">

            <Link to={`/detail/${producto.ID}`} className="item-cart-img-container">
                <img src={producto.imgProduct} alt="guitar" />
            </Link>
            <div className="item-cart-name-container">
                <h3 className="item-cart-name">{producto.name}</h3>
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