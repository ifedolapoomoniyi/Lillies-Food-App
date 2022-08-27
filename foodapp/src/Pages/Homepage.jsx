import React from 'react'
import styled from 'styled-components'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import Special from '../components/Special'


const Homepagestyle = styled.div`
background: rgb(38, 59, 54);
padding: 3rem;`

const Homepage = () => {
  return(
    <div>
    <Homepagestyle>
        <Navbar/>
        <LandingPage/>
        <Special/>
        <Contact/>
    </Homepagestyle>
    <Footer/>
    </div>
  )
}

export default Homepage