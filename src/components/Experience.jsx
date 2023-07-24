import React from 'react'
import '../styles/experience.css'
import {MdVerified} from 'react-icons/md'
const Experience = () => {
  return (
    <section id='Experience'>
      <h5>What Skills I have</h5>
      <h2>Tech Stack</h2>
      
      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Front-end developemnt</h3>
          <div className="experience__content">
             <article className='experience_details'>
             <MdVerified className='experience_details-icon'/>
             <div>
              <h4>HTML</h4>
              <small className='text-ligth'>Advance</small>  
              </div>            
             </article>

             <article className='experience_details'>
             <MdVerified className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-ligth'>Intermediate</small> 
              </div>             
             </article>

             <article className='experience_details'>
             <MdVerified className='experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-ligth'>Intermediate</small>
              </div>              
             </article>

             <article className='experience_details'>
             <MdVerified className='experience_details-icon'/>
             <div>
             <h4>Bootstrap</h4>
              <small className='text-ligth'>Intermediate</small>  
             </div>
            
             </article>

             <article className='experience_details'>
             <MdVerified className='experience_details-icon' />
             <div>
             <h4>TailwindCSS</h4>
              <small className='text-ligth'>Intermediate</small> 
             </div>
             
             </article>

             <article className='experience_details'>
             <MdVerified className='experience_details-icon'/>
             <div>
             <h4>ReactJS</h4>
              <small className='text-ligth'>Intermediate</small>   
             </div>
           
             </article>

             <article className='experience_details'>
             <MdVerified className='experience_details-icon'/>
             <div>
             <h4>Redux</h4>
              <small className='text-ligth'>Intermediate</small>    
             </div>
          
             </article>
          </div>

        </div>

        <div className="experience_frontend">
          <h3>Back-end developemnt</h3>
          <div className="experience__content">
             <article className='experience_details'>
             <MdVerified className='experience_details-icon'/>
             <div>
             <h4>NodeJS</h4>
              <small className='text-ligth'>Advance</small> 
             </div>
             
             </article>

             <article className='experience_details'>
             <MdVerified className='experience_details-icon'/>
             <div>
             <h4>ExpressJS</h4>
              <small className='text-ligth'>Intermediate</small>
             </div>
              
             </article>

             <article className='experience_details'>
             <MdVerified className='experience_details-icon'/>
             <div>
             <h4>MongoDB</h4>
              <small className='text-ligth'>Intermediate</small>  
             </div>
            
             </article>

             <article className='experience_details'>
             <MdVerified className='experience_details-icon'/>
             <div>              
              <h4>SQL</h4>
              <small className='text-ligth'>Intermediate</small> 
              </div>
             
             </article>

             <article className='experience_details'>
             <MdVerified className='experience_details-icon'/>
             <div>
             <h4>AWS S3</h4>
              <small className='text-ligth'>Intermediate</small> 
             </div>
                         
             </article>

          </div>

        </div>
      </div>

      </section>
  )
}

export default Experience