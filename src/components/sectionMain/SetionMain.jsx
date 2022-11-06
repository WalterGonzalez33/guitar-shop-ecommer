import React from 'react'
import Img from '../../assets/mainSectionImg.png'

const SetionMain = () => {
  return (
    <div className='sectMain-container'>
        <div className='sectMain-content'>
            <div className='sectMain-Legend'>
                <p className='sectMain-txt'>where the guitar of your dreams awaits you!</p>
            </div>
            <div className='sectMain-imgContainer'>
                <img className='sectMain-img' src={Img} alt="guitar" />
            </div>
        </div>
    </div>
  )
}

export default SetionMain