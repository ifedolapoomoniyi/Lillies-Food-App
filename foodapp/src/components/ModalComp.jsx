import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal'
import '../styles/ModalComp.css'


const customStyles = {
    content: {
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '50%',
      height: '100vh',
      transform: 'translate(-0%, -10%)',
    },
  };

const ModalComp = (props) => {

    const [ModalOpen, setModalOpen]= useState(false)

    const handleClose = ()=>{
        setModalOpen(false)
    }



  return (
    <div>
        <Modal isOpen= {props.open} style={customStyles}>
            <h2>Modal Test</h2>
            <div>Modal Text</div>
            <button onClick={props.handleClose}>Close Button</button>
        </Modal>
    </div>
  )
}

export default ModalComp