import React, { useEffect } from 'react' 
import './download.css'
import Phone from '../../../asset/Ellipse 16.png'
import { AiOutlineApple } from 'react-icons/ai'
import Playstore from '../../../asset/playstore.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Download = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])
    
  return (
    <section id='download'>
        <div className='container'>
            <div className="download-content">
                <div className="download-left" data-aos='zoom-in'>
                    <img src={Phone} alt="" />
                </div>
                <div className="download-right" data-aos='zoom-in-up'>
                    <h3>Learn and manage your season with <br /> GROW mobile app</h3>
                    <div className='download-sec'>
                        <button className='download-btn'>
                            <img src={Playstore} alt="" className='play-logo'/>
                            <div className='apple_desc'>
                                <h1>Download on</h1>
                                <h2>Play Store</h2>
                            </div>
                        </button>

                        <button className='download-btn'>
                            <AiOutlineApple color='white' size={30} className='apple'/>
                            <div className='apple_desc'> 
                                <h1>Download on</h1>
                                <h2>App Store</h2>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Download