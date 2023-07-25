import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import '../styles/ActualDash.css'
import ModalComp from '../components/ModalComp'

const ActualDash = () => {
  return (
    <div className="ActualDash">
        <Sidebar/>
        <Dashboard/>
        <ModalComp/>
    </div>
  )
}

export default ActualDash