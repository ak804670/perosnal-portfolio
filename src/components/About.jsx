import React from 'react'
import '../styles/about.css'
import me from '../assets/me-about.jpg'
import { RiAwardFill } from 'react-icons/ri'
import { AiFillProject } from 'react-icons/ai'

const About = () => {
  return (
    <section id='About'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="about me image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon' />
              <h5>Work Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className='about__card'>
              <AiFillProject className='about__icon' />
              <h5>Projects</h5>
              <small>10+ compleated Project</small>
            </article>
          </div>

          <p>
            Dynamic, results-driven Full Stack Developer with a passion for building visually appealing,user-friendly websites and developing scalable, efficient APIs. Proficient in frontend technologies (HTML, CSS, JavaScript, React) and backend frameworks (Node.js, Express, SQL, MongoDB), with a strong focus on delivering seamless user experiences and robust, scalable functionality. Seeking a role as a Full Stack Web Developer to leverage my technical expertise, problem-solving skills, and passion for creating high-quality web solutions while
            continuously learning and growing professionally.
          </p>

          <a href='#Contact' className='btn btn-primary about-btn'>Let's Talk</a>


        </div>
      </div>
    </section>
  )
}

export default About