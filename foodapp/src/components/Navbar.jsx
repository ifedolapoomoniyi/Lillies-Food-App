import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'
import logo from '../imgs/logo.png';
import { Link } from "react-router-dom"

const Navbar = () => {

  const [ isNavOpen, setIsNavOpen ] = useState(false)

  const handleNavOpen =() => {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(() => {
    
    const hamburger = document.querySelector('.hamburger');

      hamburger.addEventListener('click', handleNavOpen)

      return () => {
        hamburger.removeEventListener('click', handleNavOpen);
      };
    }, [isNavOpen]
  )


  return (
    <>
    <div className="company-name">
      <span><img src={logo} alt="logo" className='company-logo'/></span>
      <span>Lilies</span>
    </div>
    <div className={isNavOpen? "Navbar active" : "Navbar"}>
        <div className="Navbar-links">
            <span ><Link to={'/'} className="links">Home</Link></span>
            <span ><Link to={"/login"} className="links">Login</Link></span>
            <span><Link to={"/signup"} className="links signup-link">Sign up</Link></span>

        </div>
    </div>

    <div className={isNavOpen? "hamburger active": "hamburger"}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
    </div>

    </>
    
  )
}

export default Navbar