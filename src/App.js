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
  const techGroups = [
    {
      title: 'Backend',
      tone: 'tone-backend',
      items: [
        { name: 'Go', logo: 'https://cdn.simpleicons.org/go/00ADD8' },
        { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
        { name: 'PHP', logo: 'https://cdn.simpleicons.org/php/777BB4' },
        { name: 'gRPC', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
        { name: 'Protocol Buffers', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
        { name: 'REST API' },
        { name: 'Microservices' },
        { name: 'JWT Auth' },
        { name: 'System Design' },
      ],
    },
    {
      title: 'Frontend & Mobile',
      tone: 'tone-frontend',
      items: [
        { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
        { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
        { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
        { name: 'Bootstrap', logo: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
        { name: 'Responsive UI' },
        { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter/02569B' },
        { name: 'React Native', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
      ],
    },
    {
      title: 'Data & Search',
      tone: 'tone-data',
      items: [
        { name: 'Elasticsearch', logo: 'https://cdn.simpleicons.org/elasticsearch/005571' },
        { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
        { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
        { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
        { name: 'Index Optimization' },
        { name: 'Query Tuning' },
      ],
    },
    {
      title: 'Dev Tools',
      tone: 'tone-tools',
      items: [
        { name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
        { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/FFFFFF' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/visualstudiocode.svg' },
        { name: 'DBeaver', logo: 'https://cdn.simpleicons.org/dbeaver/372923' },
        { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
        { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman/FF6C37' },
        { name: 'CI/CD' },
      ],
    },
  ];

  return (
    <section className="tech-stack" id="tech-stack">
      <h2>TECH STACK</h2>
      <p className="tech-stack-intro">
        Core tools and technologies I use to build reliable full-stack applications.
      </p>
      <div className="tech-grid">
        {techGroups.map((group) => (
          <article key={group.title} className={`tech-card ${group.tone}`}>
            <div className="tech-head">
              <p className="tech-label">{group.title}</p>
            </div>
            <div className="tech-list">
              {group.items.map((item) => (
                <span key={item.name} className="tech-pill">
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.name} logo`} className="tech-pill-logo" />
                  ) : (
                    <span className="tech-pill-dot" aria-hidden="true"></span>
                  )}
                  {item.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="tech-footnote">
        Always learning and improving based on real project requirements.
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Elasticsearch',
      description: 'Search-focused backend project with indexing and query workflow.',
      tags: ['#Search', '#Elasticsearch', '#Backend'],
      link: 'https://github.com/kunaaa123/Elasticsearch',
    },
    {
      title: 'SendGrid Webhook',
      description: 'Webhook integration project for email event processing and tracking.',
      tags: ['#Webhook', '#SendGrid', '#API'],
      link: 'https://github.com/kunaaa123/SendGrid_webhook',
    },
    {
      title: 'AI Smart Event Assistant',
      description: 'AI assistant workflow for event planning and productivity automation.',
      tags: ['#AI', '#Assistant', '#Automation'],
      link: 'https://github.com/kunaaa123/AI_Smart_Event_Assistant',
    },
    {
      title: 'Automation MCP',
      description: 'MCP-based automation tools for command and workflow integration.',
      tags: ['#MCP', '#Automation', '#Tooling'],
      link: 'https://github.com/kunaaa123/automation-mcp',
    },
    {
      title: 'BCFL',
      description: 'Production-oriented repository focused on backend and service logic.',
      tags: ['#Backend', '#Service', '#Project'],
      link: 'https://github.com/kunaaa123/BCFL',
    },
  ];

  const splitIndex = Math.ceil(projects.length / 2);
  const topRow = projects.slice(0, splitIndex);
  const bottomRow = projects.slice(splitIndex);

  const renderRow = (row, rowClass) => {
    // Ensure each marquee row has enough cards so looping feels continuous.
    const normalizedRow = [...row];
    while (normalizedRow.length > 0 && normalizedRow.length < 4) {
      normalizedRow.push(...row);
    }
    const visibleRow = normalizedRow.slice(0, Math.max(4, row.length));
    const loopedRow = [...visibleRow, ...visibleRow];

    return (
      <div className={`project-row ${rowClass}`}>
        <div className="project-track">
          {loopedRow.map((project, idx) => (
            <article className="project-card marquee-card" key={`${rowClass}-${idx}`}>
              <div className={`project-image-placeholder image-style-${(idx % 4) + 1}`}></div>
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={`${rowClass}-${idx}-${tIdx}`} className="tag">{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">View Repo</a>
            </article>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="projects" id="projects">
      <h2>FEATURED PROJECTS</h2>
      <div className="projects-stage">
        {renderRow(topRow, 'row-left')}
        {renderRow(bottomRow, 'row-right')}
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:Singha20032546@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <h2>LET'S BUILD SOMETHING</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-submit-btn">Send Message</button>
          <p className="contact-note">When you click send, your email app will open and send to Singha20032546@gmail.com.</p>
        </form>
        <div className="contact-info">
          <div className="info-item">
            <Mail size={20} className="info-icon purple" />
            <a href="mailto:Singha20032546@gmail.com">Singha20032546@gmail.com</a>
          </div>
          <div className="info-item">
            <Phone size={20} className="info-icon purple" />
            <a href="tel:0622157506">062-215-7506</a>
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
            <a href="https://github.com/kunaaa123" target="_blank" rel="noreferrer">github.com/kunaaa123</a>
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