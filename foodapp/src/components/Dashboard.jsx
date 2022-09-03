import React from 'react'
import '../styles/Dashboard.css'
import ImageComp from './ImageComp'
import img4 from '../imgs/img4.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'
import img1 from '../imgs/img1.png'
import img5 from '../imgs/img5.png'

const Dashboard = () => {
  return (
    <div className="Dashboard">
        <div className="dashboard-header">
            <h3>Good morning, Ifedolapo!</h3>
            <img src="" alt="Profile Image" />
        </div>
        <div className="dashboard-body">
            <div className="dashboard-image">
                <ImageComp 
                name={'Stir Fry Pasta'}
                text={'The in-house pasta and chicken by chef Moose'}
                image={img4}
                />
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