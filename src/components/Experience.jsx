import React from 'react';
import '../styles/experience.css';
import { MdVerified } from 'react-icons/md';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTailwindcss, SiRedux, SiFastapi, SiJavascript, SiSupabase } from 'react-icons/si';

const Experience = () => {
  const frontendSkills = [
    { name: 'React.js', level: 'Advanced', icon: <FaReact /> },
    { name: 'JavaScript (ES6+)', level: 'Advanced', icon: <SiJavascript /> },
    { name: 'TailwindCSS', level: 'Advanced', icon: <SiTailwindcss /> },
    { name: 'Redux Toolkit', level: 'Intermediate', icon: <SiRedux /> },
    { name: 'HTML5 & CSS3', level: 'Advanced', icon: <MdVerified /> },
    { name: 'Bootstrap', level: 'Intermediate', icon: <MdVerified /> },
  ];

  const backendSkills = [
    { name: 'Node.js & Express', level: 'Advanced', icon: <FaNodeJs /> },
    { name: 'Python & FastAPI', level: 'Intermediate', icon: <SiFastapi /> },
    { name: 'PostgreSQL & ClickHouse', level: 'Advanced', icon: <SiPostgresql /> },
    { name: 'MongoDB & MySQL', level: 'Advanced', icon: <SiMongodb /> },
    { name: 'Supabase & pgvector', level: 'Intermediate', icon: <SiSupabase /> },
    { name: 'AI & LangChain (RAG)', level: 'Intermediate', icon: <FaPython /> },
    { name: 'AWS (SQS, S3)', level: 'Intermediate', icon: <FaAws /> },
    { name: 'Docker & WebSockets', level: 'Intermediate', icon: <FaDocker /> },
  ];

  return (
    <section id="Experience">
      <h5>What Skills I Have</h5>
      <h2>Tech Stack</h2>

      <div className="container experience__container">
        <div className="experience__card">
          <div className="experience__card-header">
            <h3>Frontend Engineering</h3>
            <span className="badge">UI / UX, SPAs & Performance</span>
          </div>
          <div className="experience__content">
            {frontendSkills.map((skill, index) => (
              <article key={index} className="experience__details">
                <span className="experience__skill-icon">{skill.icon}</span>
                <div className="experience__skill-info">
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__card">
          <div className="experience__card-header">
            <h3>Backend, Databases & AI</h3>
            <span className="badge">High-Scale APIs & RAG Pipelines</span>
          </div>
          <div className="experience__content">
            {backendSkills.map((skill, index) => (
              <article key={index} className="experience__details">
                <span className="experience__skill-icon">{skill.icon}</span>
                <div className="experience__skill-info">
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
