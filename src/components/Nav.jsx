import React, { useState } from 'react'
import '../styles/nav.css'
import {HiMiniHome} from 'react-icons/hi2'
import{HiUser} from 'react-icons/hi'
import {AiFillBook, AiFillProject, AiFillContacts} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
const Nav = () => {

  const [activeNav,setActiveNav]= useState('#')

  return (
    <nav>
      <a href="#" onClick={()=>{setActiveNav("#")}} className={activeNav==="#" ? "active" : ''}><HiMiniHome/></a>
      <a href="#About" onClick={()=>{setActiveNav("#About")}} className={activeNav==="#About" ? "active" : ''}><HiUser/></a>
      <a href="#Experience" onClick={()=>{setActiveNav("#Experience")}} className={activeNav==="#Experience" ? "active" : ''} ><AiFillBook/></a>
      <a href="#Portfolio" onClick={()=>{setActiveNav("#Portfolio")}} className={activeNav==="#Portfolio" ? "active" : ''}><AiFillProject/></a>
      <a href="#Certificate" onClick={()=>{setActiveNav("#Certificate")}} className={activeNav==="#Certificate" ? "active" : ''} ><RiServiceFill/></a>
      <a href="#Contact" onClick={()=>{setActiveNav("#Contact")}} className={activeNav==="#Contact" ? "active" : ''}><AiFillContacts/></a>

    </nav>
  )
}

export default Nav