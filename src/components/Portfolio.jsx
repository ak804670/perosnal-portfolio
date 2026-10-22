import React from 'react';
import '../styles/portfolio.css';
import pic1 from '../assets/portfolio1.png';
import pic2 from '../assets/portfolio2.jpg';
import pic3 from '../assets/portfolio3.jpg';
import pic4 from '../assets/portfolio4.jpg';
import pic5 from '../assets/portfolio5.png';
import ragPreview from '../assets/rag-preview.jpg';
import { BsGithub, BsServer } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

const data = [
  {
    id: 1,
    image: pic5,
    title: "ResuBuddy",
    badge: "AI Platform",
    tags: ["AI Resume Builder", "React", "ATS-Friendly", "TailwindCSS"],
    description: "An intelligent, AI-driven resume building platform engineered to create, customize, and optimize ATS-compliant resumes with real-time editing.",
    liveLink: "https://resubuddy.in/",
    github: null,
    isPrivate: true,
    isBackendService: false,
    isAbandoned: false
  },
  {
    id: 2,
    image: pic1,
    title: "World of Dev Tools",
    badge: "Dev Suite",
    tags: ["React", "Bootstrap", "Monaco Editor", "Node.js", "SQL", "ExpressJS"],
    description: "An open-source ecosystem featuring text formatters, code parsers, query evaluators, and Monaco Editor integrations for modern developers.",
    github: "https://github.com/ak804670/world-of-dev-tool",
    liveLink: "https://worldofdevtool.com/",
    isPrivate: true,
    isBackendService: false,
    isAbandoned: false
  },
  {
    id: 3,
    image: ragPreview,
    title: "AI Retrieval-Augmented Generation (RAG) System",
    badge: "Backend Engine",
    tags: ["LangChain", "Node.js", "Supabase", "pgvector", "OpenAI", "Google Embeddings"],
    description: "Production-grade backend RAG pipeline enabling semantic document search, pgvector mathematical vector lookups, and context-aware LLM retrieval with localized multi-language translation.",
    github: "https://github.com/ak804670",
    liveLink: null,
    isPrivate: false,
    isBackendService: true,
    isAbandoned: false
  },
  {
    id: 4,
    image: pic2,
    title: "Resume Builder",
    badge: "Web App",
    tags: ["React", "JavaScript", "Local Storage", "CSS3"],
    description: "Interactive and responsive resume generator allowing users to design, customize, and export professional PDF resumes directly in the browser.",
    github: "https://github.com/ak804670/resumebuilder-app",
    liveLink: "https://ak804670.github.io/resumebuilder-app/",
    isPrivate: false,
    isBackendService: false,
    isAbandoned: false
  },
  {
    id: 5,
    image: pic3,
    title: "Book Your Show",
    badge: "Abandoned",
    tags: ["MERN", "Redux", "Stripe API", "JWT Auth", "ExpressJS"],
    description: "Full-stack movie ticket booking web app featuring dynamic seat allocation, real-time availability, and secure payment checkout.",
    github: "https://github.com/ak804670/BookYourShow_Frontend",
    liveLink: "https://book-your-show-ui.onrender.com/",
    isPrivate: false,
    isBackendService: false,
    isAbandoned: true
  },
  {
    id: 6,
    image: pic4,
    title: "Blog App with AWS S3",
    badge: "Abandoned",
    tags: ["Node.js", "Express", "AWS S3", "MongoDB", "Cloud Storage"],
    description: "Scalable cloud-integrated blogging portal supporting rich-media uploads, cloud asset management via AWS S3, and secure user auth.",
    github: "https://github.com/ak804670/blogAppwithS3",
    liveLink: "https://blogappbyanish.onrender.com/",
    isPrivate: false,
    isBackendService: false,
    isAbandoned: true
  }
];

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {data.map((item) => (
          <article 
            key={item.id} 
            className={`project__item ${item.isAbandoned ? 'project__item--abandoned' : ''}`}
          >
            <div className="project__image">
              <img src={item.image} alt={item.title} draggable="false" />
              <span className={`project__badge ${item.isAbandoned ? 'project__badge--abandoned' : ''}`}>
                {item.badge}
              </span>
            </div>

            <div className="project__content">
              <h3 className="project__title">{item.title}</h3>
              <p className="project__description">{item.description}</p>

              <div className="project__tags">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="project__tag">{tag}</span>
                ))}
              </div>

              <div className="project__item-btn">
                {item.isAbandoned ? (
                  <>
                    <span className="project-btn project-btn--disabled">
                      <BsGithub /> Code
                    </span>
                    <span className="project-btn project-btn--disabled">
                      <FiExternalLink /> Live Demo
                    </span>
                  </>
                ) : item.isBackendService ? (
                  <>
                    <a href={item.github} className="project-btn project-btn--code" target="_blank" rel="noreferrer">
                      <BsGithub /> Code
                    </a>
                    <span className="project-btn project-btn--backend">
                      <BsServer /> Backend Service
                    </span>
                  </>
                ) : (
                  <>
                    {item.github && (
                      item.isPrivate ? (
                        <span className="project-btn project-btn--disabled">
                          <BsGithub /> Private Repo
                        </span>
                      ) : (
                        <a href={item.github} className="project-btn project-btn--code" target="_blank" rel="noreferrer">
                          <BsGithub /> Code
                        </a>
                      )
                    )}

                    {item.liveLink && (
                      <a href={item.liveLink} className="project-btn project-btn--live" target="_blank" rel="noreferrer">
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
