
import { Link } from 'react-router-dom'
import SimilarProducts from '../similarProducts/SimilarProducts'
import Pagos from '../../assets/Pagos.png'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useEffect } from 'react'
import SetQuantity from '../setQuantity/SetQuantity'

const ItemDetail = ({product}) => {

 const { getElementExist, addToCart } = useContext(CartContext)

 const [ cantProduct, setCantProduct ] = useState(1)

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

            <div className="detail-brand">
              <img className='detailBrandImg' src={product[0].marca} alt="marcha" />
            </div>

            <div className="detail-price-container">
              <span className='detail-price'>$ {product[0].price}</span>
            </div>

            <div className="detailStock-container">
              <span className="detailStock">STOCK: {product[0].stock}</span>
            </div>

            {
              getElementExist(product[0].ID)
                ? <></>
                : <SetQuantity stock={product[0].stock} state={cantProduct} setState={setCantProduct}/>
            }
            


            {/* // funcion para aniadir al carrito... f no tengo enie */}

          {
            product[0].stock != 0
              ? getElementExist(product[0].ID)

                  ? <Link to={'/cart'} className="exist-product-container detail-button-container">
                      <button className='detail-button'>product already in cart</button>
                    </Link>
                  : <Link to={'/cart'} onClick={() => {

                      { addToCart(product[0], cantProduct)}
        
                    }}className='detail-button-container'>
                        <button className='detail-button'>add cart</button>
                    </Link>
                
              : <div className="itemDetail-offStock">
                  <p>out of stock</p>
                </div>
          }

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