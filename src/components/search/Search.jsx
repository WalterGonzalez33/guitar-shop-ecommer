import React from 'react'
import imgSearch from '../../assets/search.png'

function Search() {
  return (
    <div className="search-container">
        <form className="search-content d-flex" role="search">
            <input className="search form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">
                <img className='imgSearch' src={imgSearch} alt="search" />
            </button>
        </form>
    </div>
  )
}

export default Search