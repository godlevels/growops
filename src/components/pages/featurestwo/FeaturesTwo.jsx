import React, { useEffect } from 'react'
import { featureListTwo } from './datatwo'
import FeatureTwo from './FeatureTwo'
import FeaturedTwo from '../../img/Group 314.png'
import "./featurestwo.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
 
const FeaturesTwo = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])
   
  return (
    <section id="featurestwo">
        <div className="container">
            <div className="featurestwo-content"> 
                <div className="featurestwo-left"  data-aos='fade-up-right'>
                    <img src={FeaturedTwo} alt="" />
                </div>
                <div className="featurestwo-right"  data-aos='fade-up-left'>
                    <div className='featuretwo-title'>
                        <div className='featuretwo-line'></div>
                        <p>Calculate your projections for the season and evaluate your activities as you progress during the season</p>
                    </div>
                    {
                       featureListTwo.map((featuretwo) => (
                        <FeatureTwo key={featuretwo.id} num={featuretwo.num} text={featuretwo.text}/>
                       )) 
                    }
                </div>
            </div>
        </div>
    </section> 
  )
}

export default FeaturesTwo