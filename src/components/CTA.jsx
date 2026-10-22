import React from 'react';
import cv from '../assets/cv.pdf';
import '../styles/header.css';
import { FiDownload, FiSend } from 'react-icons/fi';

const CTA = () => {
  return (
    <div className="cta">
      <a href={cv} download className="btn btn-primary">
        <FiDownload /> Download Resume
      </a>
      <a href="#Contact" className="btn">
        <FiSend /> Let's Talk
      </a>
    </div>
  );
};

export default CTA;
