import React from 'react';
import '../styles/workExperience.css';
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { MdVerified } from 'react-icons/md'

const WorkExperience = () => {
  const expData = [
    {
      company_name: "Slashash Tech LLP",
      experience_type: "Full Time",
      role: "Full Stack Web Developer",
      tech_used: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Node.js",
        "Flask",
        "MySQL",
        "Wappler"
      ],
      exp_summary: `Led dynamic web application development encompassing frontend design (HTML, CSS, JavaScript, Bootstrap), robust backend systems (Node.js, Flask), and MySQL database management. Streamlined development using Wappler, optimizing project timelines while maintaining coding standards. Collaborated on project management, issue resolution, and embraced continuous learning, staying updated with emerging technologies to enhance team capabilities and deliver innovative solutions.`,
      start_date: "Sep-2023",
      end_date: "Present",
      location: "Jodhpur (Rajasthan)",
      website: "https://slashash.co",
      logo: '/slashash.jpeg'
    },
    {
      company_name: "AlmaBetter",
      experience_type: "Internship",
      role: "Web Development Trainee",
      tech_used: [
        "HTML",
        "CSS",
        "JavaScript",
        "NodeJS",
        "ReactJS",
        "ExpressJS",
        "MongoDB",
        "SQL"
      ],
      exp_summary: `Gained hands-on experience in front-end programming languages like HTML, CSS, JavaScript, with back-end programming languages and tools such as NodeJS and using databases such as MongoDB and SQL. Created an optimized web application utilizing front-end framework like ReactJS and back-end framework like ExpressJS. Learned about best practices, including user authentication and data encryption to develop and deploy high-quality and secure web applications. Secured a place in the top 5% of students in the cohort of more than 100 students, and worked as an SME.`,
      start_date: "Nov-2022",
      end_date: "Aug-2023",
      location: "Remote (Bengaluru)",
      website: "https://grow.almabetter.com/",
      logo: '/almabetter.jpeg'
    }
  ];

  return (
    <section id='WorkExperience'>
      <h5>My Journey</h5>
      <h2>Work Experience</h2>

      <div className="container work-experience__timeline">
        {expData.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} />
        ))}
      </div>
    </section>
  );
};
const ExperienceItem = ({ exp }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const descriptionRef = React.useRef(null);
  const [descriptionHeight, setDescriptionHeight] = React.useState('0px');

  const toggleDescription = () => {
    setIsOpen(prev => !prev);
  };

  React.useEffect(() => {
    if (isOpen) {
      setDescriptionHeight(`${descriptionRef.current.scrollHeight}px`);
    } else {
      setDescriptionHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="work-experience__item">
      <div className="dot"></div>
      <div className="work-experience__item-content">
        <img src={exp.logo} alt={`${exp.company_name} logo`} className="company-logo" />
        <h3>{exp.role} @ {exp.company_name}</h3>
        <div className='sub-heading'>
          <small>{exp.start_date} - {exp.end_date} | {exp.location}</small>
          <a href={exp.website} target="_blank" rel="noopener noreferrer">Website</a>
        </div>
        <div
          className="work-experience-description"
          ref={descriptionRef}
          style={{
            height: descriptionHeight,
            overflow: 'hidden',
            transition: 'height 0.6s ease',
          }}
        >
          <h4>Description:</h4>
          <p>{exp.exp_summary}</p>
          <h4>Technologies Used:</h4>
          <article className='work-experience-details'>
  {exp.tech_used.map((tech, i) => (
    <span key={i} className="tech-item">
      <MdVerified className='work-experience-details-icon' />
      <div>
        <h4>{tech}</h4> 
      </div>     
    </span>
  ))}
</article>


        </div>

        <div className='work-experience__desc-toggler'>
          <button onClick={toggleDescription} className="work-experience-toggle-btn">
            {isOpen ? <FaChevronCircleUp className='work-experience-toggle-icon' /> : <FaChevronCircleDown className='work-experience-toggle-icon' />}
          </button>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
