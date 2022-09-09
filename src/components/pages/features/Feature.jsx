import React from 'react'
import './feature.css'
import { BsCircle } from 'react-icons/bs'

const Feature = ({num, text}) => { 
  return (
    <div className='feature'>
        <div className="feature-icon">
            <BsCircle color='#3BE0A8' size={35}/>
            <div className="inner-text">{num}</div>
        </div>
        <div className="feature-text">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature