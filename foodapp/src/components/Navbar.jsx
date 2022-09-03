import React from 'react'
import '../styles/Navbar.css'
import logo from '../imgs/logo.png';
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="company-name">
            <span><img src={logo} alt="logo" className='company-logo'/></span>
            <span>Lilies</span>
        </div>
        <div className="Navbar-links">
            <span ><Link to={'/'} className="links">Home</Link></span>
            <span ><Link to={"/login"} className="links">Login</Link></span>
            <span><Link to={"/signup"} className="links signup-link">Sign up</Link></span>

        </div>
    </div>
  )
}

export default Navbar