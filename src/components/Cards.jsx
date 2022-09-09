import React, { useEffect } from 'react'
import './cards.css'
import BlogImg from '../asset/Rectangle 335.png'
import BlogImgOne from '../asset/Rectangle 336.png'
import BlogImgTwo from '../asset/Rectangle 337.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {

  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
}, [])


const cards = [
  {
    imgUrl: BlogImg,
    name: 'The Role of Technology in Agriculture',
    date: 'Posted 5th July, 2022',
    time: '(4 minutes read)'
  },

  {
    imgUrl: BlogImgOne,
    name: 'The Role of Technology in Agriculture',
    date: 'Posted 5th Sept., 2022',
    time: '(9 minutes read)'
  },

  {
    imgUrl: BlogImgTwo,
    name: 'The Role of Technology in Agriculture',
    date: 'Posted 9th August, 2022',
    time: '(20 minutes read)'
  }

]
  return (
    <section id='card'>
        <div className='container'>
           <div className='card__container'  data-aos="zoom-out-up">
           {
             cards.map((item, index) => (
              <div className="card__item" key={index}>
              <div className="card__img">
               <img src={item.imgUrl} alt="" />
              </div>
              <div className="card__details">
                <h4>{item.name}</h4>
                <p className='description'>{item.date}</p>
                <h5 className='description'>{item.time}</h5>
              </div>
            </div> 
             ))
           }
           </div>
        </div> 
    </section>
  )
}

export default Cards