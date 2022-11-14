import { useEffect, useState } from "react"

const ItemDetailContainer = () => {

    const [productData, setProductData] = useState([])

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Data)
        } ,2000)
    })

    useEffect(() => {
        getData
          .then(res => setProductData(res))
          .catch( console.log('error fatal'))
      } ,[])

  return (
    <div>

    </div>
  )
}

export default ItemDetailContainer