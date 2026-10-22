import React from 'react';
import '../styles/about.css';
import me from '../assets/me-about.jpg';
import { RiAwardFill } from 'react-icons/ri';
import { AiFillProject } from 'react-icons/ai';
import { HiOutlineCodeBracketSquare } from 'react-icons/hi2';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
  return (
    <section id="About">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-glow"></div>
          <div className="about__me-image">
            <img src={me} alt="Anish Kumar portrait" draggable="false" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div className="about__card-icon-wrapper">
                <RiAwardFill className="about__icon" />
              </div>
              <h5>Experience</h5>
              <small>3+ Years Engineering</small>
            </article>

            <article className="about__card">
              <div className="about__card-icon-wrapper">
                <AiFillProject className="about__icon" />
              </div>
              <h5>Projects</h5>
              <small>15+ Production Apps</small>
            </article>

            <article className="about__card about__card--wide">
              <div className="about__card-icon-wrapper">
                <HiOutlineCodeBracketSquare className="about__icon" />
              </div>
              <h5>Core Competencies</h5>
              <small>Full Stack, AI RAG Pipelines & High-Scale Databases</small>
            </article>
          </div>

          <div className="about__text">
            <p>
              I am a results-driven <strong>Full Stack Developer</strong> with 3+ years of experience engineering scalable web applications, robust decoupled REST APIs, and AI-powered systems using <strong>React, Node.js, Python, Express, and FastAPI</strong>.
            </p>
            <p>
              Proven track record in high-performance database design and query optimization (achieving up to 72% query boosts) across <strong>PostgreSQL, ClickHouse, MySQL, MongoDB, and Supabase</strong>. Expert in implementing secure RBAC systems, multi-timezone / multilingual localization frameworks, low-latency WebSocket platforms, and cutting-edge <strong>LangChain AI RAG pipelines</strong>.
            </p>
          </div>

          <a href="#Contact" className="btn btn-primary about-btn">
            Let's Talk <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
