import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import WorkExprience from './components/WorkExprience';
import Portfolio from './components/Portfolio';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track page scroll progress for the top glowing indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll entrance animations for sections
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('section').forEach((sec) => sec.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
      sec.classList.add('scroll-reveal');
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-wrapper">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
        aria-hidden="true"
      />
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <WorkExprience />
      <Portfolio />
      <Certificate />
      <Contact />
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
