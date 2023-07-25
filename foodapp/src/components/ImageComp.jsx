import React from 'react'
import '../styles/ImageComp.css'

const ImageComp = (props, ...children) => {
    const body = props.body
    const head = props.head
  return (
    <div className="ImageComp">
        <img src={props.image} alt="" />
        <h3 style={{color: head}}>{props.name}</h3>
        <p style={{color: body}}>{props.text}</p>
        {props.children}
        
    </div>
  )
}

export default ImageComp