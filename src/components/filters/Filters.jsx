import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowCircleDown,FaArrowCircleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
                    <Link to={'products/les paul'} className='filter-link' href='#'>Les Paul</Link>
                </li>

                <li className='filter-item'>
                    <Link to={'products/stratocaster'} className='filter-link' href='#'>Stratocaster</Link>
                </li>

                <li className='filter-item'>
                    <Link to={'products/telecaster'} className='filter-link' href='#'>Telecaster</Link>
                </li>

                <li className='filter-item'>
                    <Link to={'products/flying v'} className='filter-link' href='#'>Flying V</Link>
                </li>
                
                <li className='filter-item'>
                    <Link to={'products/explorer'} className='filter-link' href='#'>Explorer</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Filters