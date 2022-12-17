import React from 'react'
import { useContext } from 'react';
import { HiSearch } from "react-icons/hi";
import { CartContext } from '../../context/CartContext'


function Search() {

  const { setSearchConten } = useContext(CartContext)
  const submit = (e) => {
    e.preventDefault();
    setSearchConten(e.target[0].value)
  }
  return (
    <div className="search-container">
        <form onSubmit={event => submit(event)} className="search-content d-flex" role="search">
            <input className="search form-control me-2 input" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">
                <HiSearch className="svgSearch"/>
            </button>
        </form>
    </div>
  )
}

export default Search