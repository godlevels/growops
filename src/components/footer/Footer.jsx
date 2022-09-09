import React, { useState } from 'react'
import './footer.css'
// import Footerlogo from '../../asset/Ellipse.png'

const Footer = () => {

    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [message, setMessage] = useState ('')

  async  function contactUs (e) {
        e.preventDefault()
        let item={name, email, message}
        console.warn(item)
    let result = await fetch("https://api-v1-staging.growng.company/api/v1/contact", {
            method: "POST",
            body: JSON.stringify(item),
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        console.warn('result', result)
        localStorage.setItem('data', JSON.stringify(result))
    }
  return ( 
    <div id='contactus'>
        <div className="container">
            <div className="footer-content">
                <div className="footer-left">
                    {/* <div className="logo">
                        <img src={Footerlogo} alt="" className='footlog'/>
                        <span>innovation is our DNA</span>
                    </div> */}
                    <div className="address">
                        <h1>Address:</h1>
                        <address>10A, Munirat Abike Close, <br /> Baruwa, Iyana Ipaja, Lagos State.</address>
                    </div>

                    <div className="support">
                        <h1>Customer support:</h1>
                        <p>support@growng.company</p>
                    </div>

                    <div className="info">
                        <h1>For enquiries:</h1>
                        <p>info@growng.company</p>
                    </div>

                    
                </div>
        
                <h1 className='contact'>Contact Us:</h1>
                    <form className='form-bottom'>
                        <input type="text"  placeholder='Full name' className='inputy' onChange={(e) =>setName(e.target.value)} value={name} required/>
                        <input type="email" placeholder='Email address' className='inputy' onChange={(e) =>setEmail(e.target.value)} value={email} required/>
                        <textarea name="type here" id="" cols="30" rows="10" placeholder='Type here' onChange={(e) =>setMessage(e.target.value)} value={message}required></textarea>
                        <button className='form-btn' onClick={contactUs}>Submit</button>
                    </form>
                
            </div>
            <h3 className='copy'>&copy; 2022 GROW</h3>
        </div>
    </div>
  )
}

export default Footer