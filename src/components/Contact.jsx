import React, { useState, useRef } from 'react';
import '../styles/contact.css';
import { BiLogoGmail } from 'react-icons/bi';
import { FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      setSending(true);
      const response = await axios.post('https://api.worldofdevtool.world/api/send-mail', {
        to: 'ak804670@protonmail.ch',
        subject: `New Portfolio Message from ${formData.name}`,
        text: `
          Name: ${formData.name}
          Email: ${formData.email}
          Contact: ${formData.contact || 'N/A'}
          Message: ${formData.message}
        `,
        html: `
          <h3>New Message from Portfolio Contact Form</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Contact:</strong> ${formData.contact || "N/A"}</p>
          <p><strong>Message:</strong><br/>${formData.message}</p>
        `
      });

      if (response.status === 200) {
        toast.success("Message sent successfully! I will reply as soon as possible.");
        setFormData({ name: '', email: '', contact: '', message: '' });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Message could not be sent right now. Please email me directly or contact via Telegram!");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-icon-wrapper">
              <BiLogoGmail className="contact__option-icon" />
            </div>
            <h4>Email</h4>
            <h5 className="contact__option-detail">ak804670@gmail.com</h5>
            <a href="mailto:ak804670@gmail.com" className="contact__action-link">
              Send an Email
            </a>
          </article>

          <article className="contact__option">
            <div className="contact__option-icon-wrapper">
              <FaLinkedinIn className="contact__option-icon" />
            </div>
            <h4>LinkedIn</h4>
            <h5 className="contact__option-detail">Anish Kumar</h5>
            <a 
              href="https://www.linkedin.com/in/anish-kumar-thakur-478001185/" 
              target="_blank" 
              rel="noreferrer"
              className="contact__action-link"
            >
              Let's Connect
            </a>
          </article>

          <article className="contact__option">
            <div className="contact__option-icon-wrapper">
              <FaTelegramPlane className="contact__option-icon" />
            </div>
            <h4>Telegram</h4>
            <h5 className="contact__option-detail">@imkr_anish</h5>
            <a 
              href="https://t.me/imkr_anish" 
              target="_blank" 
              rel="noreferrer"
              className="contact__action-link"
            >
              Send Direct Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your Full Name *" 
              required 
            />
          </div>

          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your Email Address *" 
              required 
            />
          </div>

          <div className="input-group">
            <input 
              type="tel" 
              name="contact" 
              value={formData.contact} 
              onChange={handleChange} 
              placeholder="Phone Number (optional)" 
            />
          </div>

          <div className="input-group">
            <textarea 
              name="message" 
              rows="6" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="How can I help you? *" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary contact-submit-btn" 
            disabled={sending}
          >
            {sending ? (
              <>
                <span className="spinner-border"></span> Sending...
              </>
            ) : (
              <>
                <FiSend /> Send Message
              </>
            )}
          </button>
        </form>

        <ToastContainer
          position="bottom-center"
          autoClose={4500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" 
        />
      </div>
    </section>
  );
};

export default Contact;
