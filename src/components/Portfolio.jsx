import React from 'react'
import '../styles/portfolio.css'
import pic1 from '../assets/portfolio1.png'
import pic2 from '../assets/portfolio2.jpg'
import pic3 from '../assets/portfolio3.jpg'
import pic4 from '../assets/portfolio4.jpg'


const data = [
  {
    id:1,
    image: pic1,
    title: "World of Dev Tool",
    tags: "MERN",
    github: "https://github.com/ak804670/world-of-dev-tool",
    liveLink: "https://worldofdevtool.world/",
    isPrivate: true
  },
  {
    id:2,
    image: pic2,
    title: "Resume Builder",
    tags: "MERN",
    github: "https://github.com/ak804670/resumebuilder-app",
    liveLink: "https://ak804670.github.io/resumebuilder-app/",
    isPrivate: false
  },
  {
    id:3,
    image: pic3,
    title: "Book Your Show",
    tags: "MERN",
    github: "https://github.com/ak804670/BookYourShow_Frontend",
    liveLink: "https://book-your-show-ui.onrender.com/",
    isPrivate: false
  },
  {
    id:4,
    image: pic4,
    title: "Blog App Using AWS S3",
    tags: "MERN, AWS S3",
    github: "https://github.com/ak804670/blogAppwithS3",
    liveLink: "https://blogappbyanish.onrender.com/",
    isPrivate: false
  }
]


const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>
      <div className="container project__container">
            {data.map((data)=>{
              return(
                      
                    <article className='project__item'>
                                <div className="project__image">
                                  <img src={data.image} alt={data.title} draggable="false"/>
                                </div>
                                  <h3>{data.title}</h3>
                                  <h5>{data.tags}</h5>
                                    <div className="project__item-btn">
                                  <a href={data.github}  className={`btn btn-primary ${data.isPrivate ? "disable":''}`} target='_blank' disabled>GitHub</a>
                                  <a href={data.liveLink} className='btn btn-primary' target='_blank'>Live Demo</a>
                                  </div>

                    </article>

              )
            })}
      
      </div>
      
    </section>
  )
}

export default Portfolio