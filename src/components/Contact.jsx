import React, { useState } from 'react'
import '../styles/contact.css'
import {BiLogoGmail} from 'react-icons/bi'
import{RiWhatsappFill} from 'react-icons/ri'
import {FaTelegram} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const Contact = () => {

  const notify = () => toast.success("Mail sent 😊, You response is really importent to me, I'll definatly reply ASAP ");
  const notify1 = () => toast.error("Please fill the required information");

  const [name,setName]=useState("") 
  const [email,setEmail]= useState("")
  const [contact,setContact]= useState("")
  const [message,setMessage]= useState("")
  const [value,setValue]=useState("")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_cmy6js5","template_d8c61cc", form.current, 'Ob3A51I-3EhDs14RZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

const detailsAreMissing=()=>{
  notify1()
  setValue("")
}

  const handleClick=()=>{
    setContact("");
    setEmail("");
    setMessage("");
    setName("");
    notify()
    setValue("send")
  }



  return (
    <section id='Contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
  
    <div className="container contact__container">
      <div className="contact__options">
         <article className="contact__option">
          <BiLogoGmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>ak804670@gmail.com</h5>
          <a href='mailto:ak804670@gmail.com' target='_blank'>Send a message</a>
         </article>
        

        
         <article className="contact__option">
          <RiWhatsappFill className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <a href='https://api.whatsapp.com/send?phone+917992470122'>Send a message</a>
         </article>
        

     
         <article className="contact__option">
          <FaTelegram className='contact__option-icon'/>
          <h4>Telegram</h4>
          <h5>@imkr_anish</h5>
          <a href='https://t.me/imkr_anish' target='_blank'>Send a message</a>
         </article>
      </div>

    
  
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" value={name} onChange={(e)=>{ setName(e.target.value)}} placeholder='your full name' required />
            <input type="text" name="email" value={email} onChange={(e)=>{ setEmail(e.target.value)}} placeholder='Your Email' required />
            <input type="text" name="contact" value= {contact} onChange={(e)=>{ setContact(e.target.value)}} placeholder='Contact No (optional)'  />
            <textarea name="message" rows="7" value={message}  onChange={(e)=>{ setMessage(e.target.value)}} placeholder='your message' required />
            <button type='submit' className='btn btn-primary' value={value} onClick={(name.length===0 || email.lenght===0 || message.length===0)?detailsAreMissing:handleClick} >Send message</button>
        </form>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />

    </div>
    </section>
  )
}

export default Contact