
import { Link } from 'react-router-dom'
import SimilarProducts from '../similarProducts/SimilarProducts'
import Pagos from '../../assets/Pagos.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({product}) => {

 const { cart, addToCart } = useContext(CartContext)

  return (
    <div className="container itemDetail">

      <div className='itemDetail-container'>

        <div className="detail-content">

          <div className="detailImg-container">

            <img className='detail-img' src={product[0].imgProduct} alt="guitar" />

          </div>

          <div className="detailData">

            <div className="detailName-container">
              <h3 className='detail-name'>{product[0].name}</h3>
            </div>

            <div className="detail-price-container">
              <span className='detail-price'>$ {product[0].price}</span>
            </div>

            <div className="detailStock-container">
              <span className="detailStock">STOCK: {product[0].stock}</span>
            </div>

            <div className="detail-brand">
              <img className='detailBrandImg' src={product[0].marca} alt="marcha" />
            </div>

            <Link to={'/cart'} onClick={() => {

              addToCart(product[0], 1)
              console.log(cart.length);

            }} className='detail-button-container'>
              <button className='detail-button'>add cart</button>
            </Link>

          </div>
        </div>

        <div className="detailDescribe-container">
          <p className="detailDescribe"><span className='span'>Description:</span>{product[0].descripcion}</p>
        </div>

        <div className="detail-metodosDePagos-container">
          <img src={Pagos} alt="metodos de pago" />
        </div>
      </div>

      <SimilarProducts id={product[0].ID} modelo={product[0].modelo}/>
    </div>
  )
}

export default ItemDetail