import img from '../../assets/imgProducts/guitar1.png'
import gibson from '../../assets/logosMarcas/gibson.png'

const Cards = ({producto}) => {
  return (
    <div className="card-container">

        <div className="card-content">

            <div className='card-img-container'>

              <img className='card-img' src={img} alt="les paul" />

            </div>

            <div className='card-data'>

                <div className='card-name-container'>

                  <span className='card-name'>{producto.name}</span>

                </div>

                <div className='card-brand-container'>
                  <img src={gibson} alt="gibson" />
                </div>

                <div className='card-price-container'>

                  <span className='card-price'>${producto.price}</span>

                </div>
            </div>

            <div className='card-button-container'>
               <button className='card-button'>BUY</button>
            </div>
        </div>
    </div>
  )
}

export default Cards