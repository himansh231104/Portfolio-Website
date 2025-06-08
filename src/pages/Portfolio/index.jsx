import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  Moon,
  Sun,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
} from 'lucide-react';
import './style.css';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      serviceId,      // from EmailJS dashboard
      templateId,     // from EmailJS dashboard
      formRef.current,
      publicKey // from EmailJS account settings
    )
    .then(
      (result) => {
        alert('Message sent successfully!');
        formRef.current.reset();
      },
      (error) => {
        alert('Failed to send message, try again.');
        console.error(error);
      }
    );
    };

  useEffect(() => {
    // Check system theme preference
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

 const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Himanshu-Raj-Resume.pdf'; 
  link.download = 'Himanshu-Raj-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const projects = [
    {
      title: 'Elixir — E-commerce Website',
      description:
        'Built a MERN-based B2C ecommerce site with API integrations, cutting checkout time by 40%. Used Postman to optimize APIs, reducing response time by 35%. Designed a responsive UI in React, boosting mobile engagement by 50%.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
      type: 'Full Stack Web Application',
      timeline: "May'25 – Jun'25",
      status: 'Completed',
      features: [
        'Payment Integration',
        'User Authentication',
        'Product Management',
        'Order Tracking',
      ],
      liveDemo: 'https://elixir-ecommerce-app.vercel.app/',
      sourceCode: 'https://github.com/himansh231104/Elixir-Ecommerce-App',
    },
    {
      title: 'Space Delta Force — Game',
      description:
        'Built a 2D spaceship battle game using PyGame and Tkinter, implementing collision detection and scoring logic. Applied real-time collision detection algorithms, ensuring 100% hit accuracy in gameplay scenarios.',
      techStack: ['Python', 'PyGame', 'Tkinter'],
      type: 'Desktop Game Application',
      timeline: "May'24 – Jun'24",
      status: 'Completed',
      features: [
        'Real-time Collision Detection',
        'Scoring System',
        'Game Physics',
        'UI/UX Design',
      ],
      liveDemo: 'https://github.com/himansh231104/Space-Delta-Force',
      sourceCode: 'https://github.com/himansh231104/Space-Delta-Force',
    },
  ];

  const technologies = [
    { name: 'Python', icon: <Code />, category: 'Programming' },
    { name: 'JavaScript', icon: <Code />, category: 'Programming' },
    { name: 'React', icon: <Globe />, category: 'Frontend' },
    { name: 'Node.js', icon: <Server />, category: 'Backend' },
    { name: 'MongoDB', icon: <Database />, category: 'Database' },
    { name: 'SQL', icon: <Database />, category: 'Database' },
    { name: 'Git', icon: <GitBranch />, category: 'Tools' },
    { name: 'REST APIs', icon: <Server />, category: 'Backend' },
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Among the top 3% of the batch in BCA program',
      icon: <Award />,
    },
    {
      title: 'Coding Competition',
      description:
        'Runner-up in inter-college coding competition among 250+ participants',
      icon: <Code />,
    },
    {
      title: 'CLAT Achievement',
      description:
        'Secured an AIR of 11,693 out of 70,000+ candidates in the CLAT examination',
      icon: <Award />,
    },
  ];

  return (
    <div className={`portfolio ${darkMode ? 'dark' : ''}`}>
      {/* Background Animation */}
      <div className='bg-animation'>
        <div className='floating-shapes'>
          <div className='shape shape-1'></div>
          <div className='shape shape-2'></div>
          <div className='shape shape-3'></div>
          <div className='shape shape-4'></div>
          <div className='shape shape-5'></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='navbar'>
        <div className='nav-container'>
          <div className='nav-brand'>
            <h2>Himanshu Raj</h2>
          </div>
          <div className='nav-menu'>
            <a
              href='#home'
              onClick={() => scrollToSection('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
            <a
              href='#about'
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>
            <a
              href='#qualifications'
              onClick={() => scrollToSection('qualifications')}
              className={activeSection === 'qualifications' ? 'active' : ''}
            >
              Qualifications
            </a>
            <a
              href='#experience'
              onClick={() => scrollToSection('experience')}
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Experience
            </a>
            <a
              href='#projects'
              onClick={() => scrollToSection('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
            <a
              href='#contact'
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </div>
          <div className='nav-actions'>
            <button onClick={downloadResume} className='download-btn'>
              <Download size={18} />
              Resume
            </button>
            <button onClick={toggleTheme} className='theme-toggle'>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='home' className='hero'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1 className='hero-title'>
              <span className='gradient-text'>Himanshu Raj</span>
              <p className='gradient-text-crimson'>CrimsonX</p>
            </h1>
            <h2 className='hero-subtitle'>
              Full Stack Developer & Data Enthusiast
            </h2>
            <p className='hero-description'>
              Detail-oriented BCA graduate with strong analytical and technical
              skills. Passionate about leveraging data and technology to solve
              problems and drive efficiency.
            </p>
            <div className='hero-stats'>
              <div className='stat'>
                <span className='stat-number'>2+</span>
                <span className='stat-label'>Years Experience</span>
              </div>
              <div className='stat'>
                <span className='stat-number'>5+</span>
                <span className='stat-label'>Projects Completed</span>
              </div>
              <div className='stat'>
                <span className='stat-number'>Top 3%</span>
                <span className='stat-label'>Academic Rank</span>
              </div>
            </div>
            <div className='hero-actions'>
              <button
                onClick={() => scrollToSection('projects')}
                className='cta-primary'
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='cta-secondary'
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className='hero-visual'>
            <div className='profile-card'>
              <div className='profile-image'>
                <div className='image-placeholder'>
                    <img src="profile.jpg" alt="Profile Picture" className='profileImg'/>
                </div>
              </div>
              <div className='profile-info'>
                <h3>Himanshu Raj</h3>
                <p>BCA Graduate</p>
                <div className='profile-links'>
                  <a href='mailto:himansh.231104@gmail.com'>
                    <Mail size={16} />
                  </a>
                  <a href='tel:+917091486698'>
                    <Phone size={16} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/himanshu-raj-a6803225b'
                    target='_blank'
                  >
                    <Linkedin size={16} />
                  </a>
                  <a href='https://github.com/himansh231104/' target='_blank'>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='about'>
        <div className='container'>
          <h2 className='section-title'>About Me</h2>
          <div className='about-content'>
            <div className='about-text'>
              <p>
                I am a dedicated BCA graduate with a strong foundation in
                computer applications and a passion for technology-driven
                solutions. Currently pursuing my degree at International School
                of Management, Bihar, I have consistently maintained academic
                excellence, ranking among the top 3% of my batch.
              </p>
              <p>
                My expertise spans full-stack web development, data science, and
                machine learning. I have practical experience in building
                scalable applications using modern technologies like React,
                Node.js, and Python. My recent internship at Nexware Solutions
                allowed me to develop interactive UI designs and optimize API
                performance, resulting in significant improvements in user
                experience.
              </p>
              <p>
                I am particularly interested in leveraging data analytics and
                artificial intelligence to solve real-world problems. My
                projects demonstrate my ability to work with diverse
                technologies and deliver measurable results, from reducing
                checkout times in e-commerce applications to optimizing game
                performance algorithms.
              </p>
            </div>
            <div className='about-highlights'>
              <div className='highlight-card'>
                <MapPin className='highlight-icon' />
                <h4>Location</h4>
                <p>Bihar, India</p>
              </div>
              <div className='highlight-card'>
                <Calendar className='highlight-icon' />
                <h4>Experience</h4>
                <p>1+ Years</p>
              </div>
              <div className='highlight-card'>
                <Award className='highlight-icon' />
                <h4>Education</h4>
                <p>BCA (2022-2025)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id='qualifications' className='qualifications'>
        <div className='container'>
          <h2 className='section-title'>Qualifications</h2>
          <div className='qualifications-content'>
            <div className='education-card'>
              <div className='card-header'>
                <h3>Education</h3>
              </div>
              <div className='qualification-item'>
                <div className='qualification-icon'>
                  <Award />
                </div>
                <div className='qualification-details'>
                  <h4>Bachelor of Computer Applications</h4>
                  <p className='institution'>
                    International School of Management Bihar, India
                  </p>
                  <p className='duration'>2022 – 2025</p>
                  <div className='highlights'>
                    <span className='highlight-badge'>Top 3% of Batch</span>
                    <span className='coursework'>
                      Data Science • ML • DSA • DBMS • Web Frameworks
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='certifications-card'>
              <div className='card-header'>
                <h3>Certifications</h3>
              </div>
              <div className='certification-list'>
                <div className='certification-item'>
                  <div className='cert-icon'>
                    <Database />
                  </div>
                  <div className='cert-details'>
                    <h4>Data Science with Python Specialization</h4>
                    <p>Great Learning • Dec 2022</p>
                  </div>
                </div>
                <div className='certification-item'>
                  <div className='cert-icon'>
                    <Code />
                  </div>
                  <div className='cert-details'>
                    <h4>Nano Diploma in Cyber Security</h4>
                    <p>Edapt • Dec 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='experience'>
        <div className='container'>
          <h2 className='section-title'>Work Experience</h2>
          <div className='experience-timeline'>
            <div className='timeline-item'>
              <div className='timeline-dot'></div>
              <div className='experience-card'>
                <div className='experience-header'>
                  <h3>Web Developer Intern</h3>
                  <span className='company'>Nexware Solutions</span>
                  <span className='location'>Remote</span>
                  <span className='duration'>Oct 2024 – Nov 2024</span>
                </div>
                <div className='experience-description'>
                  <p>
                    Developed interactive UI designs integrated with RESTful
                    APIs, achieving a 25% reduction in response time.
                    Collaborated cross-functionally with designers in an agile
                    environment, contributing to a 35% reduction in development
                    cycle time.
                  </p>
                  <div className='experience-achievements'>
                    <div className='achievement'>
                      <span className='achievement-metric'>25%</span>
                      <span className='achievement-desc'>
                        Response Time Reduction
                      </span>
                    </div>
                    <div className='achievement'>
                      <span className='achievement-metric'>35%</span>
                      <span className='achievement-desc'>
                        Development Cycle Improvement
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id='technologies' className='technologies'>
        <div className='container'>
          <h2 className='section-title'>Technologies & Skills</h2>
          <div className='tech-categories'>
            <div className='tech-category'>
              <h3>Programming Languages</h3>
              <div className='tech-grid'>
                <div className='tech-item'>
                  <Code className='tech-icon' />
                  <span>Python</span>
                </div>
                <div className='tech-item'>
                  <Code className='tech-icon' />
                  <span>JavaScript</span>
                </div>
                <div className='tech-item'>
                  <Database className='tech-icon' />
                  <span>SQL</span>
                </div>
              </div>
            </div>

            <div className='tech-category'>
              <h3>Web Development</h3>
              <div className='tech-grid'>
                <div className='tech-item'>
                  <Globe className='tech-icon' />
                  <span>React</span>
                </div>
                <div className='tech-item'>
                  <Server className='tech-icon' />
                  <span>Node.js</span>
                </div>
                <div className='tech-item'>
                  <Server className='tech-icon' />
                  <span>REST APIs</span>
                </div>
              </div>
            </div>

            <div className='tech-category'>
              <h3>Tools & Platforms</h3>
              <div className='tech-grid'>
                <div className='tech-item'>
                  <Database className='tech-icon' />
                  <span>MongoDB</span>
                </div>
                <div className='tech-item'>
                  <GitBranch className='tech-icon' />
                  <span>Git & GitHub</span>
                </div>
                <div className='tech-item'>
                  <Code className='tech-icon' />
                  <span>VS Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='projects'>
        <div className='container'>
          <h2 className='section-title'>Featured Projects</h2>
          <div className='projects-grid'>
            {projects.map((project, index) => (
              <div key={index} className='project-card'>
                <div className='project-header'>
                  <h3>{project.title}</h3>
                  <span className='project-type'>{project.type}</span>
                </div>
                <p className='project-description'>{project.description}</p>

                <div className='project-features'>
                  <h4>Key Features:</h4>
                  <div className='features-list'>
                    {project.features.map((feature, idx) => (
                      <span key={idx} className='feature-tag'>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='project-tech'>
                  <h4>Tech Stack:</h4>
                  <div className='tech-tags'>
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className='tech-tag'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='project-meta'>
                  <div className='project-timeline'>
                    <Calendar size={16} />
                    <span>{project.timeline}</span>
                  </div>
                  <div className='project-status'>
                    <span
                      className={`status-badge ${project.status.toLowerCase()}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className='project-actions'>
                  <button
                    className='project-btn primary'
                    onClick={() =>
                      window.open(
                        project.liveDemo,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button
                    className='project-btn secondary'
                    onClick={() =>
                      window.open(
                        project.sourceCode,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                  >
                    <ExternalLink size={16} />
                    Source Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id='achievements' className='achievements'>
        <div className='container'>
          <h2 className='section-title'>Achievements</h2>
          <div className='achievements-grid'>
            {achievements.map((achievement, index) => (
              <div key={index} className='achievement-card'>
                <div className='achievement-icon'>{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='contact'>
        <div className='container'>
          <h2 className='section-title'>Get In Touch</h2>
          <div className='contact-content'>
            <div className='contact-info'>
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in discussing new opportunities,
                collaborating on projects, or simply connecting with fellow
                developers and technology enthusiasts.
              </p>

              <div className='contact-methods'>
                <div className='contact-method'>
                  <Mail className='contact-icon' />
                  <div>
                    <h4>Email</h4>
                    <a href='mailto:himansh.231104@gmail.com'>
                      himansh.231104@gmail.com
                    </a>
                  </div>
                </div>

                <div className='contact-method'>
                  <Phone className='contact-icon' />
                  <div>
                    <h4>Phone</h4>
                    <a href='tel:+917091486698'>+91-7091486698</a>
                  </div>
                </div>

                <div className='contact-method'>
                  <MapPin className='contact-icon' />
                  <div>
                    <h4>Location</h4>
                    <span>Bihar, India</span>
                  </div>
                </div>
              </div>

              <div className='social-links'>
                <a
                  href='https://github.com/himansh231104/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-link'
                >
                  <Github size={24} />
                </a>
                <a
                  href='https://www.linkedin.com/in/himanshu-raj-a6803225b'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-link'
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href='mailto:himansh.231104@gmail.com'
                  className='social-link'
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className='contact-form'>
              <h3>Send Message</h3>
              <form ref={formRef} onSubmit={sendEmail}>
                <div className='form-group'>
                  <input type='text' name='name' placeholder='Your Name' required />
                </div>
                <div className='form-group'>
                  <input type='email' name='email' placeholder='Your Email' required />
                </div>
                <div className='form-group'>
                  <input type='text' name='subject' placeholder='Subject' required />
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    placeholder='Your Message'
                    rows='5'
                    required
                  ></textarea>
                </div>
                <button type='submit' className='submit-btn'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer'>
        <div className='container'>
          <div className='footer-content'>
            <div className='footer-section'>
              <h3>Himanshu Raj</h3>
              <p>Full Stack Developer & Data Enthusiast</p>
            </div>

            <div className='footer-section'>
              <h4>Quick Links</h4>
              <div className='footer-links'>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#experience'>Experience</a>
                <a href='#contact'>Contact</a>
              </div>
            </div>

            <div className='footer-section'>
              <h4>Connect</h4>
              <div className='footer-social'>
                <a
                  href='https://github.com/himansh231104/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github size={20} />
                </a>
                <a
                  href='https://www.linkedin.com/in/himanshu-raj-a6803225b'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin size={20} />
                </a>
                <a href='mailto:himansh.231104@gmail.com'>
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className='footer-bottom'>
            <p>&copy; 2025 Himanshu Raj | CrimsonX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
