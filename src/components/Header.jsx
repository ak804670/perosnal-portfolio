import React from 'react';
import '../styles/header.css';
import CTA from './CTA';
import me from '../assets/me.png';
import HeaderSocial from './HeaderSocial';
import { TypeAnimation } from 'react-type-animation';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  return (
    <header id="Home">
      <div className="container header__container">
        <div className="header__badge-wrapper">
          <span className="badge status-badge">
            <span className="status-dot"></span> Available for new opportunities
          </span>
        </div>

        <h5>Hello, I'm</h5>
        <h1 className="header__name text-gradient">Anish Kumar</h1>

        <div className="header__type-container">
          <TypeAnimation
            sequence={[
              'Full Stack Developer (3+ Years)',
              1500,
              'React & Node.js Engineer',
              1500,
              'AI & RAG Pipeline Architect',
              1500,
              'Database Optimization & Scalable Web Apps',
              1500,
            ]}
            wrapper="span"
            speed={50}
            className="header__type-text"
            repeat={Infinity}
          />
        </div>

        <CTA />
        <HeaderSocial />

        <div className="me-wrapper">
          <div className="me-glow"></div>
          <div className="me">
            <img src={me} alt="Anish Kumar" draggable="false" />
          </div>
        </div>

        <a href="#About" className="scroll__down" aria-label="Scroll down to About section">
          <span>Scroll Down</span>
          <FiChevronDown className="scroll__down-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
