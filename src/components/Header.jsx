import React from 'react'
import '../styles/header.css'
import CTA from './CTA'
import me from '../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Anish Kumar</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={me} alt="selfphoto" draggable="false"/>
        </div>

        <a href="#Contact" className='scroll__down'>Scroll Down</a>
      </div>
      
      </header>
  )
}

export default Header
