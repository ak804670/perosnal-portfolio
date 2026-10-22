import React, { useState } from 'react';
import '../styles/nav.css';
import { HiMiniHome } from 'react-icons/hi2';
import { HiUser } from 'react-icons/hi';
import { AiFillBook, AiFillProject, AiFillContacts } from 'react-icons/ai';
import { RiServiceFill } from 'react-icons/ri';
import { MdOutlineWork } from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#Home');

  return (
    <nav className="nav-dock" aria-label="Main Navigation">
      <a 
        href="#Home" 
        onClick={() => setActiveNav('#Home')} 
        className={activeNav === '#Home' ? 'active' : ''}
        title="Home"
        aria-label="Home"
      >
        <HiMiniHome />
      </a>
      <a 
        href="#About" 
        onClick={() => setActiveNav('#About')} 
        className={activeNav === '#About' ? 'active' : ''}
        title="About"
        aria-label="About"
      >
        <HiUser />
      </a>
      <a 
        href="#Experience" 
        onClick={() => setActiveNav('#Experience')} 
        className={activeNav === '#Experience' ? 'active' : ''}
        title="Tech Stack"
        aria-label="Tech Stack"
      >
        <AiFillBook />
      </a>
      <a 
        href="#WorkExperience" 
        onClick={() => setActiveNav('#WorkExperience')} 
        className={activeNav === '#WorkExperience' ? 'active' : ''}
        title="Work Experience"
        aria-label="Work Experience"
      >
        <MdOutlineWork />
      </a>
      <a 
        href="#Portfolio" 
        onClick={() => setActiveNav('#Portfolio')} 
        className={activeNav === '#Portfolio' ? 'active' : ''}
        title="Projects"
        aria-label="Projects"
      >
        <AiFillProject />
      </a>
      <a 
        href="#Certificate" 
        onClick={() => setActiveNav('#Certificate')} 
        className={activeNav === '#Certificate' ? 'active' : ''}
        title="Certifications"
        aria-label="Certifications"
      >
        <RiServiceFill />
      </a>
      <a 
        href="#Contact" 
        onClick={() => setActiveNav('#Contact')} 
        className={activeNav === '#Contact' ? 'active' : ''}
        title="Contact"
        aria-label="Contact"
      >
        <AiFillContacts />
      </a>
    </nav>
  );
};

export default Nav;
