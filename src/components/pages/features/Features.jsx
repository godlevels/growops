import React, { useEffect } from 'react'
import Featured from '../../img/mockups.png'
import Feature from './Feature'
import "./features.css"
import { featureList } from './data'
import AOS from 'aos';
import 'aos/dist/aos.css';


   
const Features = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, 
        });
    }, []) 
   
  return (
    <section id="features"> 
        <div className="container">
            <div className="features-content">
                <div className="features-left" data-aos='fade-right'>
                    <div className='feature-title'>
                        <div className='feature-line'></div>
                        <p>Manage Your Season With <br /> Easy-to-Use Productivity Tools</p>
                    </div>
                    {
                       featureList.map((feature) => (
                        <Feature key={feature.id} num={feature.num} text={feature.text}/>
                       )) 
                    }
                </div>
                <div className="features-right" data-aos='fade-left'>
                    <img src={Featured} alt="" />
                </div>
            </div>
        </div>
    </section> 
  )
}

export default Features