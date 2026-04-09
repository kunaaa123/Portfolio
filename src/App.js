import React, { useEffect, useState } from 'react';
import './App.css';
import { Mail, Phone } from 'lucide-react';
import characterImg from './character.png';
import resumePdfFile from './resume.pdf';

function Navbar({ onOpenResume }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button type="button" className="resume-btn" onClick={onOpenResume}>
            View Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

function ResumeModal({ isOpen, onClose }) {
  const resumePdf = resumePdfFile;

  if (!isOpen) {
    return null;
  }

  return (
    <div className="resume-modal-overlay" onClick={onClose} role="presentation">
      <div className="resume-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Resume document">
        <button type="button" className="resume-close-btn" onClick={onClose} aria-label="Close resume">
          x
        </button>
        <h3 className="resume-modal-title">Resume</h3>
        <object data={resumePdf} type="application/pdf" className="resume-doc-frame" aria-label="Resume PDF">
          <div className="resume-missing">
            <p>ไม่สามารถแสดงตัวอย่าง PDF ได้ในเบราว์เซอร์นี้</p>
            <p>
              กรุณาเปิดไฟล์โดยตรงที่{' '}
              <a href={resumePdf} target="_blank" rel="noreferrer">resume.pdf</a>
            </p>
            <p>และตรวจสอบว่าไฟล์อยู่ที่ public/resume.pdf</p>
          </div>
        </object>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <h1 className="hero-title" data-text="SINGHALAKKHAM">SINGHALAKKHAM</h1>
      <div className="hero-subtitle-container">
        <h2 className="hero-subtitle">
          <span className="green">FULL-STACK DEVELOPER</span>{' // '}<span className="purple">BACKEND SPECIALIST</span>
        </h2>
        <img src={characterImg} alt="Character" className="hero-character" />
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me-content">
        <p className="about-label">ABOUT ME</p>
        <h2>BUILDING FAST, CLEAN, AND SCALABLE PRODUCTS</h2>
        <p className="about-text">
          I am a Full-Stack Developer with a strong focus on backend development. I enjoy designing scalable systems, building efficient APIs, and delivering products that work well in real-world scenarios.
I like turning complex problems into simple and intuitive user experiences, supported by clean and reliable engineering behind the scenes.
        </p>
      </div>
      <div className="about-me-highlights">
        <div className="about-card">
          <p className="about-card-number">FRESH</p>
          <p className="about-card-label">Graduate Ready to Grow</p>
        </div>
        <div className="about-card">
          <p className="about-card-number">70%</p>
          <p className="about-card-label">System Performance Improvement</p>
        </div>
        <div className="about-card">
          <p className="about-card-number">12+</p>
          <p className="about-card-label">Production Projects</p>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="tech-stack" id="tech-stack">
      <h2>TECH STACK</h2>
      <div className="tech-icons">
        <div className="tech-item">
          <div className="tech-icon go">
            <img src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png" alt="Go" width="50" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <span>Go</span>
        </div>
        <div className="tech-item">
          <div className="tech-icon react">
            <svg viewBox="0 0 118 103" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
              <path fill="#61dafb" d="M59 72.8c-8 0-14.5-6.5-14.5-14.6S51 43.6 59 43.6 73.6 50 73.6 58.2 67 72.8 59 72.8zm-1.8-31c-22 .3-40 6.6-40 18s18 17.6 40 18c21.8-.2 39.8-6.5 40-18s-18-17.7-40-18zm0-18.7c-31 0-56 12.3-56 27.5s25 27.4 56 27.4 56-12.3 56-27.4-25-27.5-56-27.5z"/>
            </svg>
          </div>
          <span>React</span>
        </div>
        <div className="tech-item">
          <div className="tech-icon flutter">
            <img src="https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg" alt="Flutter" width="50" />
          </div>
          <span>Flutter</span>
        </div>
        <div className="tech-item">
          <div className="tech-icon elastic">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Elasticsearch_logo.svg" alt="Elasticsearch" width="40" />
          </div>
          <span>Elasticsearch</span>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'TAGTHAI Platform - Elasticsearch Implementation',
      description: 'Optimized tourism data search efficiency by 40% with Elasticsearch integration',
      tags: ['#Golang', '#Elasticsearch'],
    },
    {
      title: 'University Project - React Native Mobile App',
      description: 'Built a cross-platform app for local business finder, integrating maps and reviews',
      tags: ['#Elasticsearch', '#Microservices', '#React'],
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>FEATURED PROJECTS</h2>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image-placeholder"></div>
            <div className="project-tags">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className={`tag tag-${tag.replace('#', '').toLowerCase()}`}>{tag}</span>
              ))}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>LET'S BUILD SOMETHING</h2>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="4"></textarea>
        </form>
        <div className="contact-info">
          <div className="info-item">
            <Mail size={20} className="info-icon purple" />
            <span>Email: Singha...&#64;gmail.com</span>
          </div>
          <div className="info-item">
            <Phone size={20} className="info-icon purple" />
            <span>Phone: 062-215-7506</span>
          </div>
          <div className="info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="info-icon purple"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub: kunaaa123</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isResumeOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isResumeOpen]);

  return (
    <div className="App">
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <Hero />
      <AboutMe />
      <Projects />
      <TechStack />
      <Contact />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;