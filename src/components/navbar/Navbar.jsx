import React from 'react'
import CartWidget from '../cart/CartWidget'
import Logo from '../logo/Logo'
import Navs from '../navs/Navs'
import Search from '../search/Search'

function Navbar() {
  return (
    <nav className='navbar-container'>
        <Logo/>
        <Search/>
        <Navs/>
        <CartWidget/>
    </nav>
  )
}

export default Navbar