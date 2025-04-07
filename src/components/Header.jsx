import React from 'react'
import '../styles/header.css'
import CTA from './CTA'
import me from '../assets/me.png'
import HeaderSocial from './HeaderSocial'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Anish Kumar</h1>
{/*         <h5 className="text-light">Full Stack Developer</h5> */}
        <h4>
         <TypeAnimation
      sequence={[
        'Full Stack Developer',
        1500,
        'Master of Vanilla JS & Beyond',
        1500,
        'React + Node Full-Stack Pro',
        1500,
        'From Pixels to APIs, I Build It All',
        1500
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
          </h4>
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
