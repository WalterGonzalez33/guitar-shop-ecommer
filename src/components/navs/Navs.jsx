import React, { useState } from 'react'

import { FaBars, FaArrowLeft } from "react-icons/fa";
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navs() {

    const [menuMovilActive, setMenuMovilActive] = useState(false)


    useEffect(() => {
        const navs = document.querySelector('.navs-container');
        if (menuMovilActive) {
            navs.style.left = '0';
        }else{
            navs.style.left = '-100%';
        }

    }, [menuMovilActive])

    return (
        <>
            <div className='faBars-container'>
                {menuMovilActive 
                    ? <FaArrowLeft className='faBars' onClick={() => {
                        setMenuMovilActive(!menuMovilActive)
                      }}/>
                    : <FaBars className='faBars' onClick={() => {
                        setMenuMovilActive(!menuMovilActive)
                      }} />}
            </div>
            <div className='navs-container'>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink to={'/'}  className="nav-link">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/products'} className="nav-link">PRODUCTS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'contact'} className="nav-link">CONTACT</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navs