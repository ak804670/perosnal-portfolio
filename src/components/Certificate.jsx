import React from 'react'
import '../styles/testmonials.css'

const data = [
  {
    id:1,
    image: "https://verified.cv:3000/v2/ims/image/16206865447531",
    title: "Full Stack Web Development",
    verify: "https://certificates.almabetter.com/en/verify/16206865447531?ref=email"
  },
  {
    id:2,
    image: "https://verified.cv:3000/v2/ims/image/30777657480210",
    title: "Frontend Development",
    verify: "https://certificates.almabetter.com/en/verify/30777657480210"
  },
  {
    id:3,
    image: "https://verified.cv:3000/v2/ims/image/83966941100680",
    title: "Backend Development",
    verify: "https://certificates.almabetter.com/en/verify/83966941100680"
  }
  
]




const Certificate = () => {
  return (
    <section id='Certificate'>
      <h5>Relevent Coursework</h5>
      <h2>Certifications</h2>

      <div className="container certificate__container">
      {data.map((data)=>{
              return(
                      
                    <article className='certificate__item'>
                                <div className="certificate__image">
                                  <img src={data.image} alt={data.title}/>
                                </div>
                                  <h3>{data.title}</h3>
                                    <div className="certificate__item-btn">
                                  <a href={data.verify} className='btn btn-primary' target='_blank'>More info</a>
                                  
                                  </div>

                    </article>

              )
            })}
      
      </div>
      
      </section>
  
  )
}

export default Certificate