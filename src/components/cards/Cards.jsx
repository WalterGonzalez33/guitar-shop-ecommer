import { Link } from 'react-router-dom'

const Cards = ({ producto }) => {

  return (
    <div className="card-container">
      <Link to={`../detail/${producto.id}`} className="card-content">

        <div className='card-img-container'>

          <img className='card-img' src={producto.imgId ? `../imgProducts/${producto.imgId}` : '../imgProducts/guitar1.png'} alt="guitar" />

        </div>

            <div className='card-data'>

              <div className='card-name-container'>

                <span className='card-name'>{producto.title}</span>

              </div>

              <div className='card-brand-container'>
                <img src={`../logosMarcas/${producto.breand}`} alt="" />
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