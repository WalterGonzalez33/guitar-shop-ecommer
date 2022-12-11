import { Link } from 'react-router-dom'
import img from '../../assets/imgProducts/guitar1.png'

const Cards = ({ producto }) => {

  return (
    <div className="card-container">
      <Link to={`/detail/${producto.ID}`} className="card-content">

        <div className='card-img-container'>

          <img className='card-img' src={producto.imgProduct ? producto.imgProduct : img} alt="guitar" />

        </div>

            <div className='card-data'>

              <div className='card-name-container'>

                <span className='card-name'>{producto.name}</span>

              </div>

              <div className='card-brand-container'>
                <img src={producto.marca} alt="" />
              </div>

              <div className='card-price-container'>

                <span className='card-price'>${producto.price}</span>

              </div>
            </div>

      {
        producto.stock != 0
          ? <div className='card-button-container'>
               <button className='card-button'>BUY</button>
            </div>
          : <div className="card-offStock">
              <p>out of stock</p>
            </div>
      }
      </Link>
    </div>
  )
}

export default Cards