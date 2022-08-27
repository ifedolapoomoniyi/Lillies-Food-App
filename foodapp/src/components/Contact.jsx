import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className="Contact">
        <div className="contact-text">
            <h3>
                Get notified when we update!
            </h3>
            <div>
                Get notified when we add new items to our specials menu, update our price list when we have promos!
            </div>
        </div>
        <div className="contact-input">
            <input type="email" className='contact-input-box'
            placeholder='randomuser@gmail.com'/>
            <button className='contact-submit-btn'>Get notified</button>
        </div>
    </div>
  )
}

export default Contact