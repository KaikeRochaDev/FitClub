import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
        <img className='logo' src={Logo} alt="Logo The Fit Club" />

        <ul className='header-menu'>
            <li><a href="#hero">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#reasons">Why us</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
        </ul>
    </div>
  )
}

export default Header