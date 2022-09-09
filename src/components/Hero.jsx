import React, { useEffect } from 'react'
import { Button } from '../Button'
import { Link } from 'react-scroll'
import Image from "../components/img/Hero image.jpg"
import { BsMouse } from 'react-icons/bs'
import "./hero.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Hero = ({lightBg, lightText, lightTextDesc, headline, description, imgStart,}) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])

  return (
    <div id='/'>
        <div className={lightBg ? "home_hero-section" : "home__hero-section darkBg"}>
            <div className="container">
                <div className="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === "start" ? "row-reverse" : "row"}}>
                    <div className="col" data-aos='fade-right'>
                        <div className="home__hero-text-wrapper">
                            <h1 className={lightText ? "heading" : "heading dark"}>{headline}</h1>
                            <p className={lightTextDesc ? "home__hero-subtitle" : "home__hero-subtitle dark"}>{description}</p>
                            <Link to="/sign-up" className="btn-link btn--medium get">
                                <Button>Get started</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col" data-aos='fade-left'>
                        <div className="home__hero-img-wrapper">
                            <img className="home__hero-img" src={Image} alt="" />
                        </div> 
                    </div>
                </div>

                <div className='floating-icon'>
                    <Link to="services" spy={true} smooth={true} offset={1000} duration={500}>
                        <BsMouse color='#fff' size={15} className="mouse"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero