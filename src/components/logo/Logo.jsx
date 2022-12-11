import React from 'react'
import { Link } from 'react-router-dom'
import ImgLogo from '../../assets/logo.png'

function Logo() {
  return (
    <Link to={'/'} className="logo-container">
      <div className='context'>
        <img src={ImgLogo} alt="Logo" className="imgLogo d-inline-block align-text-top"/>
        <span className='logo-txt'>FireGuitar</span>
      </div>
    </Link>
  )
}

export default Logo