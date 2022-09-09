import React from 'react'
import { BsCircle } from 'react-icons/bs'
import './featuretwo.css'

const FeatureTwo = ({num, text}) => {
  return (
    <div className='featuretwo'>
        <div className="featuretwo-icon">
            <BsCircle color='#3BE0A8' size={35}/>
            <div className="innertwo-text">{num}</div>
        </div>
        <div className="featuretwo-text">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default FeatureTwo