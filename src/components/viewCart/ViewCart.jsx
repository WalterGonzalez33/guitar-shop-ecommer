
import ItemCart from '../itemCart/ItemCart'

const ViewCart = ({dataProduct, state}) => {


  return (
    <ItemCart producto={dataProduct} state={state}/>
  )
}

export default ViewCart