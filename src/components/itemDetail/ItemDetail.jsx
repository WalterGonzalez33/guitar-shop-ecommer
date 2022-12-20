
import { Link } from 'react-router-dom'
import SimilarProducts from '../similarProducts/SimilarProducts'
import Pagos from '../../assets/Pagos.png'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import SetQuantity from '../setQuantity/SetQuantity'

const ItemDetail = ({ product }) => {


 const { getElementExist, addToCart } = useContext(CartContext)

 const [ cantProduct, setCantProduct ] = useState(1)

 useEffect(() => {
 },[])

  return (
    <div className="container itemDetail">

      <div className='itemDetail-container'>

        <div className="detail-content">

          <div className="detailImg-container">

            <img className='detail-img' src={`../imgProducts/${product.imgId}`} alt="guitar" />

          </div>

          <div className="detailData">

            <div className="detailName-container">
              <h3 className='detail-name'>{product.title}</h3>
            </div>

            <div className="detail-brand">
              <img className='detailBrandImg' src={`../logosMarcas/${product.breand}`} alt="brand" />
            </div>

            <div className="detail-price-container">
              <span className='detail-price'>$ {product.price}</span>
            </div>

            <div className="detailStock-container">
              <span className="detailStock">STOCK: {product.stock}</span>
            </div>

            {
              getElementExist(product.id)
                ? <></>
                : <SetQuantity stock={product.stock} state={cantProduct} setState={setCantProduct} text={true}/>
            }
            


            {/* // funcion para aniadir al carrito... f no tengo enie */}

          {
            product.stock != 0
              ? getElementExist(product.id)

                  ? <Link to={'/cart'} className="exist-product-container detail-button-container">
                      <button className='detail-button'>product already in cart</button>
                    </Link>
                  : <Link to={'/cart'} onClick={() => {

                      { addToCart(product, cantProduct)}
        
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
          <p className="detailDescribe"><span className='span'>Description:</span>{product.description}</p>
        </div>

        <div className="detail-metodosDePagos-container">
          <img src={Pagos} alt="metodos de pago" />
        </div>
      </div>

      <SimilarProducts id={product.id} model={product.model}/>
    </div>
    
  )
}

export default ItemDetail