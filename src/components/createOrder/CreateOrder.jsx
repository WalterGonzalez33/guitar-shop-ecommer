import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, getFirestore, doc, updateDoc} from "firebase/firestore";
import moment from "moment/moment";

import Swal from 'sweetalert2'
import { useEffect } from 'react';

const CreateOrder = ({ buyer }) => {

    const { cart, cleardCart, total } = useContext(CartContext);

    const createOrder = () => {

        Swal.fire({
          title: 'create order?',
          text: "Do you want to create a new order?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'order Create!',
              '',
              'success'
            )
    
              // create order en firebase
    
            const db = getFirestore();
            const query = collection(db, 'Orders')
            const newOrder = {
              buyer:{email:buyer.email, name:buyer.name, phone:buyer.phone},
              date: moment().format('DD/MM/YYYY'),
              items:cart,
              total: total,
            }
        
            addDoc(query, newOrder)
            .then((res) => {
              // console.log(`order creada con el id: ${res.id}`)
              cleardCart()
              return res
            })
            .then((response) => {
              cart.forEach(element => {
                const query = doc(db, 'Products',element.id)
                updateDoc(query,{
                  stock: element.stock - element.quantity
                })
              });
              
            })
            .catch(err => console.log(err))
          }
        })
    
      }

      useEffect(() => {
        createOrder()
      },[])
  return (
    <></>
  )
}

export default CreateOrder