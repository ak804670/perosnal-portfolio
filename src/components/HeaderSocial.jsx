import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import '../styles/header.css'



const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/anish-kumar-thakur-478001185/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/ak804670" target='_blank'><BsGithub/></a>

    </div>
  )
}

export default HeaderSocial