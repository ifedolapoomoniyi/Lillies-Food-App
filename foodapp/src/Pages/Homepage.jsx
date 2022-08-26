import React from 'react'
import styled from 'styled-components'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'


const Homepagestyle = styled.div`
background: rgb(38, 59, 54);
padding: 3rem;`

const Homepage = () => {
  return(
    <Homepagestyle>
        <Navbar/>
        <LandingPage/>
    </Homepagestyle>
  )
}

export default Homepage