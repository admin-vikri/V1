import React from 'react'
import image from './Logo.jpg'
import './Logo.css'

const Logo = () => {
    return (
        <div>
            <img src={image} alt='Logo' height='40px' width='55px' class = 'imggg'/>
        </div>
    )
}

export default Logo
