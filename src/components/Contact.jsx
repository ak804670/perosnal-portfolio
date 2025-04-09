import React, { useState } from 'react'
import '../styles/contact.css'
import {BiLogoGmail} from 'react-icons/bi'
// import{RiWhatsappFill} from 'react-icons/ri'
import {FaTelegram, FaLinkedin} from 'react-icons/fa'
import { useRef } from 'react';
// import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

 const Contact = () => {

  const notify = () => toast.success("Mail sent 😊, You response is really importent to me, I'll definatly reply ASAP ");
  const notify1 = () => toast.error("Please fill the required information");

  const [name,setName]=useState("") 
  const [email,setEmail]= useState("")
  const [contact,setContact]= useState("")
  const [message,setMessage]= useState("")
  const [value,setValue]=useState("")
  const [sending,setSending]=useState(false)

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !message) {
      setValue("Please fill in required fields");
      return;
    }
  
    try {
      setSending(true);
      const response = await axios.post('http://api.worldofdevtool.world/api/send-mail', {
        to: 'ak804670@protonmail.ch',
        subject: `New message from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Contact: ${contact}
          Message: ${message}
        `,
        html: `
          <h3>New Message from Contact Form</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact:</strong> ${contact || "N/A"}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `
      });
  
      if (response.status === 200) {
        setValue("Message sent successfully!");
        notify()
        // optionally clear the form
        setName('');
        setEmail('');
        setContact('');
        setMessage('');
        setSending(false);
      }
    } catch (error) {
      setSending(false);
      console.error("Error sending message:", error);
      setValue("Failed to send message. Please try again.");
    }
  };
  

const detailsAreMissing=()=>{
  notify1()
  setValue("")
}

  // const handleClick=()=>{
  //   setContact("");
  //   setEmail("");
  //   setMessage("");
  //   setName("");
  // }



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
          <a href='mailto:ak804670@gmail.com' target='_blank'>Send a mail</a>
         </article>
        

        
         {/* <article className="contact__option">
          <RiWhatsappFill className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <a href='https://api.whatsapp.com/send?phone+917992470122'>Send a message</a>
         </article> */}
        
         <article className="contact__option">
          <FaLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <a href='https://www.linkedin.com/in/anish-kumar-thakur-478001185/' target='_blank'>Let's Connect</a>
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
            <button type='submit' className='btn btn-primary spinner-container ' value={value} onClick={(name.length===0 || email.lenght===0 || message.length===0)?detailsAreMissing:null} disabled={sending}>Send message
            {sending && <div className="spinner text-primary ms-2"></div>}
            </button>
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