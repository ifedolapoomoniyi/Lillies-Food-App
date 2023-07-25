import React, { useState } from 'react'
import '../styles/Dashboard.css'
import ImageComp from './ImageComp'
import img4 from '../imgs/img4.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'
import img1 from '../imgs/img1.png'
import img5 from '../imgs/img5.png'
import ModalComp from './ModalComp'

const Dashboard = () => {

    const [openModal, setopenModal] = useState(false)

    const handleOpen = ()=>{
        setopenModal(true)
    }
    const handleClose = ()=>{
        setopenModal(false)
    }


  return (
    <div className="Dashboard">
        <div className="dashboard-header">
            <h3>Good morning, {localStorage.getItem("name")}!</h3>
            <img src="" alt="Profile Image" />
        </div>
        <div className="dashboard-body">
            <div className="dashboard-image">
                <ImageComp 
                name={'Stir Fry Pasta'}
                text={'The in-house pasta and chicken by chef Moose'}
                image={img4}
                >   
                    <ModalComp open = {openModal} handleClose = {handleClose}><div>Can this modal take some stuff from here?</div></ModalComp>
                    <button onClick={handleOpen}>Open MOdal</button>
                </ImageComp>
            </div>
            <div className="dashboard-image">
                <ImageComp 
                name={'Stir Fry Pasta'}
                text={'The in-house pasta and chicken by chef Moose'}
                image={img2}
                />
            </div>
            <div className="dashboard-image">
                <ImageComp 
                name={'Stir Fry Pasta'}
                text={'The in-house pasta and chicken by chef Moose'}
                image={img3}
                />
            </div>
            <div className="dashboard-image">
                <ImageComp 
                name={'Stir Fry Pasta'}
                text={'The in-house pasta and chicken by chef Moose'}
                image={img1}
                />
            </div>
            <div className="dashboard-image">
                <ImageComp 
                name={'Stir Fry Pasta'}
                text={'The in-house pasta and chicken by chef Moose'}
                image={img1}
                />
            </div>
            <div className="dashboard-image">
                <ImageComp 
                name={'Stir Fry Pasta'}
                text={'The in-house pasta and chicken by chef Moose'}
                image={img4}
                />
            </div>
        </div>


    </div>
  )
}

export default Dashboard