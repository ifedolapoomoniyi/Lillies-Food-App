import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import '../styles/ActualDash.css'

const ActualDash = () => {
  return (
    <div className="ActualDash">
        <Sidebar/>
        <Dashboard/>
    </div>
  )
}

export default ActualDash