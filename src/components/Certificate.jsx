import React from 'react';
import '../styles/testmonials.css';
import { MdVerified } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';

const data = [
  {
    id: 1,
    image: "https://api-lb.appfurther.io/v2/ims/image/16206865447531",
    title: "Full Stack Web Development",
    issuer: "AlmaBetter",
    verify: "https://certificates.almabetter.com/en/verify/16206865447531"
  },
  {
    id: 2,
    image: "https://api-lb.appfurther.io/v2/ims/image/30777657480210",
    title: "Frontend Web Development",
    issuer: "AlmaBetter",
    verify: "https://certificates.almabetter.com/en/verify/30777657480210"
  },
  {
    id: 3,
    image: "https://api-lb.appfurther.io/v2/ims/image/83966941100680",
    title: "Backend Web Development",
    issuer: "AlmaBetter",
    verify: "https://certificates.almabetter.com/en/verify/83966941100680"
  }
];

const Certificate = () => {
  return (
    <section id="Certificate">
      <h5>Verified Credentials</h5>
      <h2>Certifications</h2>

      <div className="container certificate__container">
        {data.map((item) => (
          <article key={item.id} className="certificate__item">
            <div className="certificate__image-wrapper">
              <img 
                src={item.image} 
                alt={item.title} 
                draggable="false"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('certificate__placeholder');
                }} 
              />
              <span className="certificate__badge">
                <MdVerified /> Verified
              </span>
            </div>

            <div className="certificate__body">
              <h3 className="certificate__title">{item.title}</h3>
              <p className="certificate__issuer">Issued by {item.issuer}</p>

              <div className="certificate__item-btn">
                <a 
                  href={item.verify} 
                  className="btn btn-primary certificate-btn" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <FiExternalLink /> Verify Certificate
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
