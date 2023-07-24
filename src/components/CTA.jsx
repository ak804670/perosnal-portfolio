import React from 'react'
import cv from '../assets/cv.pdf'
import '../styles/header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className='btn btn-primary' >Download Resume</a>
        <a href="#Contact" className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA