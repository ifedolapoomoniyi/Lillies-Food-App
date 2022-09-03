import React from 'react'
import '../styles/Sidebar.css'
import { Link } from 'react-router-dom'
import {UilHome, UilProfile, UilOrder, UilCart} from '@iconscout/react-unicons'
import logo from '../imgs/logo.png'

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="sidebar-logo">
            <img src={logo} alt="" />
            <span>Lilies</span>
        </div>
        <div className="sidebar-flexer">
            <div className="dashboard-link">
                <Link className='sidebar-links' to={''}><UilHome/>Dashboard</Link>
            </div>
            <div className="profile-link">
                <Link className='sidebar-links' to={''}>Your Profile</Link>
            </div>
            <div className="orders-link">
                <Link className='sidebar-links' to={''}>Orders</Link>
            </div>
            <div className="cart-link">
                <Link className='sidebar-links' to={''}>Your Cart</Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar