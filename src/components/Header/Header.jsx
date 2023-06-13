import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
        <img className='logo' src={Logo} alt="Logo The Fit Club" />

        <ul className='header-menu'>
            <li><a href="#hero">Início</a></li>
            <li><a href="#programs">Programas</a></li>
            <li><a href="#reasons">Por que nos escolher</a></li>
            <li><a href="#plans">Planos</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
        </ul>
    </div>
  )
}

export default Header