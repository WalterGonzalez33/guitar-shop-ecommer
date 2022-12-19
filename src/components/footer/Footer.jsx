import React from 'react'
import Logo from '../logo/Logo'
import { FaLinkedin, FaInstagramSquare, FaGithubSquare, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className="container">
            <div className="copy-container">
                <FaRegCopyright/>
                <span className="copy-name">todos los derechos reservados</span>
            </div>

            <div className="marca-container">
                <Logo/>
            </div>

            <div className="link-container">
                <ul>
                    <li><a href="https://www.instagram.com/walterg33g/?hl=es-la" target="_blank"><FaInstagramSquare/></a></li>
                    <li><a href="https://www.linkedin.com/in/walter-osvaldo-gonzalez-01b777211/" target="_blank"><FaLinkedin/></a></li>
                    <li><a href="https://github.com/walter-doctype/guitar-shop-ecommer" target="_blank"><FaGithubSquare/></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer