import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ErrorContainer = styled.div`
    background-color: var(--primary-color);
    color: white;
    height: 100vh;
    padding: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`
const ErrorHeader = styled.h2`
    text-align: center;
    font-size: 4rem;
`
const ErrorBody = styled.div`
    text-align: center;
    font-size: 1.1rem;
    padding: 0.5rem;
`
const ErrorBtn = styled.button`
    color: white;
    background-color: var(--primary-color);
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid var(--secondary-color);
    font-family: cursive;
`

const ErrorPage = () => {   
  return (
    <ErrorContainer>
        <Navbar/>
        <ErrorHeader>Error 404</ErrorHeader>
        <ErrorBody>
            No burgers here dear traveller 😪
        </ErrorBody>
        <ErrorBody>
            They're probably all in our homepage...
            <Link to ="/"> <ErrorBtn>Let's go!</ErrorBtn></Link>
        </ErrorBody>
    </ErrorContainer>
  )
}

export default ErrorPage