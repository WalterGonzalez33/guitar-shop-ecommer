import React from 'react'
import  swal from 'sweetalert2'
import fondo from '../../assets/fondoAlert.jpg';

function ItemListContainer({greeting}) {

    swal.fire({
        title:'Welcome',
        text:`${greeting}`,
        color:'white',
        background:` url("${fondo}")`,
        heightAuto:'1000px'
    })
  return (
    <>
    </>
  )
}

export default ItemListContainer