import React, { useState, } from 'react'
import Logo from "../components/img/Ellipse.png"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll'
import './navbar.css'
// import Button from '../../src/Button'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true) 

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        } 
    }

    window.addEventListener('resize', showButton)

    // const nav__links = [
    //     {
    //         path: '/',
    //         display: 'Home'
    //     },
    //     {
    //         path: 'services',
    //         display: 'Services'
    //     },
    //     {
    //         path: 'blog',
    //         display: 'Blog'
    //     },
    //     {
    //         path: 'aboutus',
    //         display: 'About Us'
    //     },
    //     {
    //         path: 'contactus',
    //         display: 'Contact Us'
    //     },
    // ]

    // const headerRef = useRef(null)

    // const headerFunc = () => {
    //     if(document.body.scrollTop > 80 || document.elementFromPoint.scrollTop > 80) {
    //         headerRef.current.classList.add('header__shrink')
    //     } else {
    //         headerRef.current.classList.remove('header__shrink')
    //     }
    // }


    // useEffect (() =>{
    //     window.addEventListener('scroll', headerFunc)

    //     return()=> window.removeEventListener('scroll', headerFunc)
    // }, [])

    

  

  return (
    <div>
        <div className="navbar"> 
            <div className="navbar-container container">
                <Link to='/' className='nav-link' spy={true} smooth={true} offset={50} duration={500}>
                    <div className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={Logo} alt=""  className='logo'/>
                    </div>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMobileMenu} className="nav-links" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='services' onClick={closeMobileMenu} className="nav-links" spy={true} smooth={true} offset={150} duration={500}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='blog' onClick={closeMobileMenu} className="nav-links" spy={true} smooth={true} offset={50} duration={500}>Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='aboutus' onClick={closeMobileMenu} className="nav-links" spy={true} smooth={true} offset={50} duration={500}>About Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contactus' onClick={closeMobileMenu} className="nav-links" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link>
                    </li>

                    {/* <li className="nav-btn">
                        {button ? (
                            <Link to='sign-up' className="btn-link btn--medium">
                                <Button buttonStyle='btn--outline'>Get started</Button>
                            </Link>
                        ) : (
                            <Link to='sign-up' className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline" buttonSize="btn--medium">Get started</Button>
                            </Link>
                        )}
                    </li>  */}
                </ul>
            </div>
        </div>

</div>
  )
}

export default Navbar