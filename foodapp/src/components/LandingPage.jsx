import React from 'react'
import img1 from '../imgs/img1.png'
import '../styles/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="LandingPage">
        <div className="landing-image">
            <img src={img1} alt="" />
        </div>
        <div className="landing-text">
            <h1>
                Order <span style={{color: "var(--secondary-color)"}}>food</span> anytime, anywhere
            </h1>
            <div className="landing-description">
                Browse from our list of specials to place your order and have food be delievered to you in no time. Affordable, tasty and fast!
            </div>
        </div>
    </div>
  )
}

export default LandingPage