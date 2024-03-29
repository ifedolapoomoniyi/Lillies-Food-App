import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import '../styles/ActualDash.css'
import ModalComp from '../components/ModalComp'
import { cartStore } from '../components/ImageComp'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ActualDash = () => {
  const cartLength = cartStore.length
  let notify = false;

  useEffect(() => {

    if (!notify) {
    toast.success("Welcome to Lillies", {autoClose: 3000})
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return () => {notify = true}
  }, [])    



  return (
    <div className="ActualDash">
        <ToastContainer autoClose={3000}/>
        <Sidebar cartLength={cartLength}/>
        <Dashboard />
        <ModalComp/>
    </div>
  )
}

export default ActualDash