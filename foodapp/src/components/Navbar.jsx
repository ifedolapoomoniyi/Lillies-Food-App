import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="company-name">
            <span></span>
            <span>Lilies</span>
        </div>
        <div className="Navbar-links">
            <span className="links">Home</span>
            <span className="links">Login</span>
            <span className="links signup-link">Sign up</span>

        </div>
    </div>
  )
}

export default Navbar