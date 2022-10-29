import React from 'react'
import ImgLogo from '../../assets/logo.png'

function Logo() {
  return (
    <div className="logo-container">
      <a href="#">
        <img src={ImgLogo} alt="Logo" className="imgLogo d-inline-block align-text-top"/>
        <span className='logo-txt'>FireGuitar</span>
      </a>
    </div>
  )
}

export default Logo