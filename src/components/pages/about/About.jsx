import React, { useEffect } from 'react'
import Farm from '../../../asset/Rectangle 334.jpg'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => { 

  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
}, [])


  return (
    <section id='aboutus'>
      <div className="container">
        <div className="about-content">
          <div className="about-left" data-aos="zoom-out-up">
            <h2 className='header'>about us</h2>
            <h5 className='sub-head'>Who we are</h5>
            <div className='under'></div>
            <p className='descript'>We are a customer-focused organization pioneering digital solutions for agricultural extension delivery in Nigeria.</p>
          </div>
          <div className="about-right" data-aos="zoom-out-down">
            <img src={Farm} alt="" sizes='20'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About