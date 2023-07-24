import React from 'react'
import '../styles/about.css'
import me from '../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri' 
import { AiFillProject} from 'react-icons/ai'

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
              <article  className='about__card'>
              <RiAwardFill className='about__icon'/>
                <h5>Work Experience</h5>
                <small>6+ months</small>
              </article>

             <article  className='about__card'>
              <AiFillProject className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ compleated Project</small>
              </article>
            </div>

        <p>
        Dynamic, result driven, highly organized and detail-oriented Full Stack Developer with a passion for create visually appealing, User-
friendly and eﬀective website. Seeking a role as a Full Stack Web Developer to leverage my versatile technical skills, creative problem-
solveing abilities and passion for delivering exceptional user experience, while continuously learning and growing professionally.
        </p>

        <a href='"#Contact' className='btn btn-primary about-btn'>Let's Talk</a>


        </div>
        </div>
    </section>
  )
}

export default About