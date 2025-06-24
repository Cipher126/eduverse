import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
        <p>&copy; {currentYear} Edusity. All rights reserved</p>
        <ul>
            <li>Terms and Services</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer