import React, { useEffect } from 'react'
import { useState } from 'react';
import '../styles/Navbar.css'
import logo from '../imgs/logo.png';
import { Link } from "react-router-dom"

const Navbar = () => {


  useEffect(() => {
    const navbar = document.querySelector('.Navbar');
    const hamburger = document.querySelector('.hamburger');

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
        console.log("working")
      })
    }, []
  )


  return (
    <>
    <div className="company-name">
      <span><img src={logo} alt="logo" className='company-logo'/></span>
      <span>Lilies</span>
    </div>
    <div className="Navbar active">
        <div className="Navbar-links">
            <span ><Link to={'/'} className="links">Home</Link></span>
            <span ><Link to={"/login"} className="links">Login</Link></span>
            <span><Link to={"/signup"} className="links signup-link">Sign up</Link></span>

        </div>
    </div>

    <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
    </div>

    </>
    
  )
}

export default Navbar