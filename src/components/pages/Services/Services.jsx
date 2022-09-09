import React, { useEffect } from 'react'
import './services.css'
import Hub from '../../../components/img/trial.png'
import Trial from '../../../components/img/trial 1.png'
import Trials from '../../../components/img/trial 2.png'
import Features from '../features/Features'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
 
const Services = () => {

  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
}, []) 


  return (
    <div id='services'>
      <div className='container'>
        <div className="services__top-content" data-aos='fade-down'>
            <h6 className='subtitle'>Features</h6>
            <p>Discover Our Services</p>
            {/* <div></div> */}
            {/* <img src={Service} alt="" /> */}
        </div> 
        <div className="service__item-wrapper"> 
          <div className="services__item" data-aos='fade-right'> 
            <img src={Hub} alt=""  className='service__icon'/>
            <h3 className='service__title'>Knowledge Hub</h3>
            <p className="description">Get the information you need from pre-planting to post-harvest in the palm of your hand</p>
          </div>

          <div className="services__item" data-aos='flip-down'>
            <img src={Trial} alt=""  className='service__icon'/>
            <h3 className='service__title'>Operations Schedule</h3>
            <p className="description">Schedule your farm activities for the season and get notifications when your next task is due</p>
          </div>

          <div className="services__item" data-aos='fade-left'>
            <img src={Trials} alt=""  className='service__icon'/>
            <h3 className='service__title'>Operations Calculator</h3>
            <p className="description">calculate your expected yield and the quantity of inputs <br /> for the season</p>
          </div>
        </div>
        <Features /> 
      </div>
    </div>
  )
}

export default Services