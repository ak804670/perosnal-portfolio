import React from 'react';
import '../styles/workExperience.css';
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { MdVerified } from 'react-icons/md';

const WorkExperience = () => {
  const expData = [
    {
      company_name: "Slashash Tech LLP",
      experience_type: "Full Time",
      role: "Full Stack Web Developer",
      tech_used: [
        "React.js",
        "Node.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "ClickHouse",
        "MySQL",
        "MongoDB",
        "Supabase",
        "AWS SQS",
        "WebSockets",
        "Docker"
      ],
      exp_summary: `Optimized complex database queries and indexing strategies, achieving up to 72% improvement in data retrieval and query performance. Migrated asynchronous background processing from Bull Queue to AWS SQS for high-throughput decoupled scaling. Architected global compliance features including system-wide multi-timezone support and multilingual localization frameworks. Developed low-latency, real-time communication platforms using persistent WebSockets. Built an AI-driven automated appointment booking engine with conversational chat interfaces, collaborating in Agile workflows with peer code reviews.`,
      start_date: "Sep-2023",
      end_date: "Present",
      location: "Jodhpur (Rajasthan)",
      website: "https://slashash.co",
      logo: '/slashash.jpeg'
    },
    {
      company_name: "AlmaBetter",
      experience_type: "Trainee",
      role: "Web Development Trainee",
      tech_used: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "JavaScript (ES6)",
        "HTML5 & CSS3",
        "MongoDB",
        "SQL",
        "JWT Auth",
        "REST APIs"
      ],
      exp_summary: `Gained intensive hands-on experience building foundational full-stack software components using HTML5, CSS3, JavaScript (ES6), Node.js, Express, MongoDB, and relational SQL ecosystems. Designed dynamic UI rendering using React.js and decoupled Express.js REST APIs for backend computing. Implemented software security best practices, incorporating JWT user authentication, session tokens, and cryptographic data encryption layers. Graded in the top 5% of a competitive cohort of over 200 software students.`,
      start_date: "Nov-2022",
      end_date: "Aug-2023",
      location: "Remote (Bengaluru)",
      website: "https://grow.almabetter.com/",
      logo: '/almabetter.jpeg'
    }
  ];

  return (
    <section id="WorkExperience">
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
  const [isOpen, setIsOpen] = React.useState(true);
  const descriptionRef = React.useRef(null);
  const [descriptionHeight, setDescriptionHeight] = React.useState('auto');

  const toggleDescription = () => {
    setIsOpen((prev) => !prev);
  };

  React.useEffect(() => {
    if (isOpen) {
      setDescriptionHeight(`${descriptionRef.current?.scrollHeight || 400}px`);
    } else {
      setDescriptionHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="work-experience__item">
      <div className="dot"></div>
      <div className="work-experience__item-content">
        <img 
          src={exp.logo} 
          alt={`${exp.company_name} logo`} 
          className="company-logo" 
          draggable="false"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <h3>{exp.role} @ {exp.company_name}</h3>
        <div className="sub-heading">
          <small>{exp.start_date} - {exp.end_date} | {exp.location}</small>
          <a href={exp.website} target="_blank" rel="noreferrer">Website</a>
        </div>

        <div
          className="work-experience-description"
          ref={descriptionRef}
          style={{
            height: isOpen ? descriptionHeight : '0px',
            overflow: 'hidden',
            transition: 'height 0.5s ease',
          }}
        >
          <h4>Description:</h4>
          <p>{exp.exp_summary}</p>
          <h4>Technologies Used:</h4>
          <article className="work-experience-details">
            {exp.tech_used.map((tech, i) => (
              <span key={i} className="tech-item">
                <MdVerified className="work-experience-details-icon" />
                <div>
                  <h4>{tech}</h4>
                </div>
              </span>
            ))}
          </article>
        </div>

        <div className="work-experience__desc-toggler">
          <button 
            onClick={toggleDescription} 
            className="work-experience-toggle-btn"
            aria-label={isOpen ? "Collapse work details" : "Expand work details"}
          >
            {isOpen ? (
              <FaChevronCircleUp className="work-experience-toggle-icon" />
            ) : (
              <FaChevronCircleDown className="work-experience-toggle-icon" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
