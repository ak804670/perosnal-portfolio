import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import '../styles/header.css';

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a 
        href="https://www.linkedin.com/in/anish-kumar-thakur-478001185/" 
        target="_blank" 
        rel="noreferrer"
        aria-label="LinkedIn Profile"
      >
        <BsLinkedin />
      </a>
      <a 
        href="https://github.com/ak804670" 
        target="_blank" 
        rel="noreferrer"
        aria-label="GitHub Profile"
      >
        <BsGithub />
      </a>
      <a 
        href="https://t.me/imkr_anish" 
        target="_blank" 
        rel="noreferrer"
        aria-label="Telegram Profile"
      >
        <FaTelegramPlane />
      </a>
    </div>
  );
};

export default HeaderSocial;
