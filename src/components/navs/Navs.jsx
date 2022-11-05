import React, { useState } from 'react'

import { FaBars, FaArrowLeft } from "react-icons/fa";
import { useEffect } from 'react';

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
                        <a className="nav-link active" aria-current="page" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">PRODUCTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navs