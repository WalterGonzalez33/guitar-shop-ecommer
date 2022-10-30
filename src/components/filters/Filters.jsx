import React from 'react'

function Filters() {
  return (
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
  )
}

export default Filters