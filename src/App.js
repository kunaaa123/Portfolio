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
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeShowcaseIndex, setActiveShowcaseIndex] = useState(0);
  const publicBase = process.env.PUBLIC_URL || '';

  const projects = [
    {
      title: 'Elasticsearch',
      description: 'Search-focused backend project with indexing and query workflow.',
      tags: ['#Search', '#Elasticsearch', '#Backend'],
      stack: ['Go', 'Elasticsearch', 'REST API', 'Docker'],
      coverStyle: 1,
      image: `${publicBase}/elasticsearch-showcase/01_match_coffee.png`,
      showcaseImages: [
        `${publicBase}/elasticsearch-showcase/01_match_coffee.png`,
        `${publicBase}/elasticsearch-showcase/02_term_beverage.png`,
        `${publicBase}/elasticsearch-showcase/03_range_price.png`,
        `${publicBase}/elasticsearch-showcase/04_agg_category.png`,
        `${publicBase}/elasticsearch-showcase/05_fuzzy_cofee.png`,
      ],
      link: 'https://github.com/kunaaa123/Elasticsearch',
    },
    {
      title: 'SendGrid Webhook',
      description: 'Webhook integration project for email event processing and tracking.',
      tags: ['#Webhook', '#SendGrid', '#API'],
      stack: ['Node.js', 'Express', 'SendGrid API', 'Webhook'],
      coverStyle: 2,
      imageFit: 'contain',
      image: 'https://raw.githubusercontent.com/kunaaa123/SendGrid_webhook/main/docs/images/sendgrid.png',
      showcaseImages: [
        'https://raw.githubusercontent.com/kunaaa123/SendGrid_webhook/main/docs/images/sendgrid.png',
        'https://raw.githubusercontent.com/kunaaa123/SendGrid_webhook/main/docs/images/log.png',
        'https://raw.githubusercontent.com/kunaaa123/SendGrid_webhook/main/docs/images/mysql.png',
        'https://raw.githubusercontent.com/kunaaa123/SendGrid_webhook/main/docs/images/larkbot.png',
      ],
      link: 'https://github.com/kunaaa123/SendGrid_webhook',
    },
    {
      title: 'AI Smart Event Assistant',
      description: 'AI assistant workflow for event planning and productivity automation.',
      tags: ['#AI', '#Assistant', '#Automation'],
      stack: ['Python', 'OpenAI', 'FastAPI', 'Automation'],
      coverStyle: 3,
      image: `${publicBase}/ai-showcase/EV.png`,
      showcaseImages: [
        `${publicBase}/ai-showcase/EV.png`,
        `${publicBase}/ai-showcase/EV2.png`,
        `${publicBase}/ai-showcase/EV5.png`,
        `${publicBase}/ai-showcase/EV3.png`,
        `${publicBase}/ai-showcase/EV4.png`,
      ],
      link: 'https://github.com/kunaaa123/AI_Smart_Event_Assistant',
    },
    {
      title: 'Automation MCP',
      description: 'MCP-based automation tools for command and workflow integration.',
      tags: ['#MCP', '#Automation', '#Tooling'],
      stack: ['Node.js', 'MCP', 'CLI', 'Workflow'],
      coverStyle: 4,
      imageFit: 'contain',
      image: `${publicBase}/mcp-showcase/mcp-main.jpg`,
      showcaseImages: [
        `${publicBase}/mcp-showcase/mcp-main.jpg`,
        `${publicBase}/mcp-showcase/mcp-1.jpg`,
        `${publicBase}/mcp-showcase/mcp-2.jpg`,
      ],
      link: 'https://github.com/kunaaa123/automation-mcp',
    },
    {
      title: 'REDOC',
      description: 'Interactive API documentation portal with OpenAPI-based service docs and responsive navigation.',
      tags: ['#ReDoc', '#OpenAPI', '#Documentation'],
      stack: ['HTML', 'CSS', 'OpenAPI', 'ReDoc'],
      coverStyle: 2,
      imageFit: 'contain',
      image: `${publicBase}/redoc-showcase/redoc-1.png`,
      showcaseImages: [
        `${publicBase}/redoc-showcase/redoc-1.png`,
        `${publicBase}/redoc-showcase/redoc-2.png`,
      ],
      link: 'https://github.com/Gnisah/REDOC',
    },
    {
      title: 'Bot Lark GitHub',
      description: 'Lark bot project for GitHub integration, event handling, and workflow automation.',
      tags: ['#LarkBot', '#GitHub', '#Automation'],
      stack: ['Node.js', 'Lark Bot', 'GitHub API', 'Webhook'],
      coverStyle: 1,
      imageFit: 'contain',
      image: `${publicBase}/botlark-showcase/bot1.png`,
      showcaseImages: [
        `${publicBase}/botlark-showcase/bot1.png`,
        `${publicBase}/botlark-showcase/bot2.png`,
      ],
      link: 'https://github.com/kunaaa123/Bot_lark_github',
    },
  ];

  const techLogoMap = {
    'go': 'https://cdn.simpleicons.org/go/00ADD8',
    'elasticsearch': 'https://cdn.simpleicons.org/elasticsearch/005571',
    'rest api': 'https://cdn.simpleicons.org/openapiinitiative/6BA539',
    'docker': 'https://cdn.simpleicons.org/docker/2496ED',
    'node.js': 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
    'express': 'https://cdn.simpleicons.org/express/FFFFFF',
    'sendgrid api': 'https://cdn.simpleicons.org/twilio/F22F46',
    'webhook': 'https://cdn.simpleicons.org/webhooks/4EA94B',
    'python': 'https://cdn.simpleicons.org/python/3776AB',
    'html': 'https://cdn.simpleicons.org/html5/E34F26',
    'css': 'https://cdn.simpleicons.org/css/1572B6',
    'openai': 'https://cdn.simpleicons.org/openai/FFFFFF',
    'openapi': 'https://cdn.simpleicons.org/openapiinitiative/6BA539',
    'fastapi': 'https://cdn.simpleicons.org/fastapi/009688',
    'automation': 'https://cdn.simpleicons.org/n8n/EA4B71',
    'mcp': 'https://cdn.simpleicons.org/protocolsdotio/FFFFFF',
    'cli': 'https://cdn.simpleicons.org/gnubash/4EAA25',
    'workflow': 'https://cdn.simpleicons.org/apacheairflow/017CEE',
    'grpc': 'https://cdn.simpleicons.org/grpc/244C5A',
    'mysql': 'https://cdn.simpleicons.org/mysql/4479A1',
    'jwt': 'https://cdn.simpleicons.org/jsonwebtokens/FFFFFF',
    'lark bot': 'https://cdn.simpleicons.org/feishu/00C2FF',
    'github api': 'https://cdn.simpleicons.org/github/FFFFFF',
  };

  const getTechLogo = (tech) => techLogoMap[tech.toLowerCase()] || '';

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProject]);

  useEffect(() => {
    setActiveShowcaseIndex(0);
  }, [selectedProject?.title]);

  const selectedProjectImages = selectedProject
    ? (selectedProject.showcaseImages && selectedProject.showcaseImages.length > 0
      ? selectedProject.showcaseImages
      : (selectedProject.image ? [selectedProject.image] : []))
    : [];

  const selectedImageSrc = selectedProjectImages[activeShowcaseIndex] || '';

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
            <article
              className="project-card marquee-card"
              key={`${rowClass}-${idx}`}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`Open ${project.title} showcase`}
            >
              <div className="project-preview-frame" aria-hidden="true">
                <div className="preview-topbar">
                  <span className="preview-dot"></span>
                  <span className="preview-dot"></span>
                  <span className="preview-dot"></span>
                </div>
                <div className="preview-body">
                  <p className="project-stack-title">Tech Stack</p>
                  <div className="project-stack-list preview-stack-list">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={`${rowClass}-${idx}-${tech}`} className="project-stack-chip preview-stack-chip">
                        {getTechLogo(tech) ? (
                          <img src={getTechLogo(tech)} alt={`${tech} logo`} className="project-stack-chip-icon" />
                        ) : (
                          <span className="project-stack-chip-dot" aria-hidden="true"></span>
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className={`project-image-placeholder project-image-trigger image-style-${project.coverStyle}`}
                onClick={() => setSelectedProject(project)}
                aria-label={`Open ${project.title} details`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className={`project-cover-image ${project.imageFit === 'contain' ? 'project-cover-image-contain' : ''}`}
                  />
                ) : null}
              </button>
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={`${rowClass}-${idx}-${tIdx}`} className="tag">{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                onClick={(event) => event.stopPropagation()}
              >
                View Repo
              </a>
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
      {selectedProject ? (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)} role="presentation">
          <article className="project-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={`${selectedProject.title} details`}>
            <button type="button" className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">
              x
            </button>
            <div className="project-modal-media-wrap">
              {selectedImageSrc ? (
                <>
                  <img
                    src={selectedImageSrc}
                    alt={`${selectedProject.title} showcase`}
                    className={`project-modal-image ${selectedProject.imageFit === 'contain' ? 'project-modal-image-contain' : ''}`}
                  />
                  {selectedProjectImages.length > 1 ? (
                    <div className="project-modal-gallery-strip" aria-label="Project showcase gallery">
                      {selectedProjectImages.map((imageSrc, imageIdx) => (
                        <button
                          key={`${selectedProject.title}-image-${imageIdx}`}
                          type="button"
                          className={`project-gallery-thumb ${imageIdx === activeShowcaseIndex ? 'active' : ''}`}
                          onClick={() => setActiveShowcaseIndex(imageIdx)}
                          aria-label={`View image ${imageIdx + 1}`}
                          aria-pressed={imageIdx === activeShowcaseIndex}
                        >
                          <img src={imageSrc} alt="" />
                        </button>
                      ))}
                    </div>
                  ) : null}
                </>
              ) : (
                <div className={`project-modal-image project-modal-fallback image-style-${selectedProject.coverStyle}`}></div>
              )}
            </div>
            <p className="project-modal-kicker">Project Showcase</p>
            <h3 className="project-modal-title">{selectedProject.title}</h3>
            <p className="project-modal-description">{selectedProject.description}</p>
            <div className="project-modal-stack">
              <p className="project-stack-title">Tech Stack</p>
              <div className="project-stack-list modal-stack-list">
                {selectedProject.stack.map((tech) => (
                  <span key={`${selectedProject.title}-stack-${tech}`} className="project-stack-chip">
                    {getTechLogo(tech) ? (
                      <img src={getTechLogo(tech)} alt={`${tech} logo`} className="project-stack-chip-icon" />
                    ) : (
                      <span className="project-stack-chip-dot" aria-hidden="true"></span>
                    )}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-modal-tags">
              {selectedProject.tags.map((tag) => (
                <span key={`${selectedProject.title}-${tag}`} className="tag">{tag}</span>
              ))}
            </div>
            <a href={selectedProject.link} target="_blank" rel="noreferrer" className="project-link project-modal-link">
              Open Repository
            </a>
          </article>
        </div>
      ) : null}
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: '',
    message: '',
  });
  const contactEmail = 'Singha20032546@gmail.com';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name || 'Visitor'}`,
          _captcha: 'false',
          _template: 'box',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully. I will get your email notification shortly.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Unable to send right now. Please try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>LET'S BUILD SOMETHING</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="_honey"
            className="contact-honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
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
          <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          <p className="contact-note">This form sends directly to {contactEmail}. You can reply back to the sender email they entered.</p>
          {submitStatus.message ? (
            <p className={`contact-status ${submitStatus.type}`} role="status" aria-live="polite">
              {submitStatus.message}
            </p>
          ) : null}
        </form>
        <div className="contact-info">
          <div className="info-item">
            <Mail size={20} className="info-icon purple" />
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
          <div className="info-item">
            <Phone size={20} className="info-icon purple" />
            <a href="tel:0622157506">066-157-1032</a>
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
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37a4 4 0 1 1-2.83-2.83"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <a href="https://www.instagram.com/singha_10_sk/" target="_blank" rel="noreferrer">instagram.com/singha_10_sk</a>
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