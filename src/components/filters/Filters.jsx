import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowCircleDown,FaArrowCircleUp } from "react-icons/fa";

function Filters() {

    const [activeFilters, setActiveFilters] = useState(false);

    useEffect(() => {
      const containerFilters = document.querySelector('.filters-container');

      if(activeFilters){
        containerFilters.classList.add('active');
      }else{
        containerFilters.classList.remove('active');

      }
    }, [activeFilters])
  return (
    <>
        <div className='filters-movile'>
            <span onClick={() => {setActiveFilters(!activeFilters)}} className='filters-content-movile'>
                Filters
                <span>
                    {
                        activeFilters
                            ? <FaArrowCircleUp/>
                            : <FaArrowCircleDown/>
                    }
                </span>
            </span>
        </div>
        <div className='filters-container'>
            <ul className='filters'>

                <li className='filter-item'>
                    <a className='filter-link' href='#'>Les Paul</a>
                </li>

                <li className='filter-item'>
                    <a className='filter-link' href='#'>Stratocaster</a>
                </li>

                <li className='filter-item'>
                    <a className='filter-link' href='#'>Telecaster</a>
                </li>

                <li className='filter-item'>
                    <a className='filter-link' href='#'>Flying V</a>
                </li>
                
                <li className='filter-item'>
                    <a className='filter-link' href='#'>Explorer</a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Filters