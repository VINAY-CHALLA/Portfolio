import React, { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Server,
  Terminal,
  X,
  Zap,
  Award,
  ExternalLink,
} from "lucide-react";

const profile = {
  name: "Vinay Challa",
  role: "Java Backend Developer",
  email: "vinaychalla2517@gmail.com",
  github: "https://github.com/VINAY-CHALLA",
  linkedin: "https://www.linkedin.com/in/challa-vinay",
  hackerrank: "https://www.hackerrank.com/profile/ece_19121a0436",
  resumeUrl: "/Vinay_Challa_Software_Engineer.pdf",
  gmailCompose:
    "https://mail.google.com/mail/?view=cm&fs=1&to=vinaychalla2517%40gmail.com",
};

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certification", href: "#certification" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Backend Development",
    description: "Core Java and application services",
    icon: Server,
    skills: [
      "Java",
      "OOP",
      "Collections",
      "Java 8 Streams",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
    ],
  },
  {
    title: "Microservices & Integration",
    description: "Service communication and architecture",
    icon: Layers3,
    skills: [
      "Microservices",
      "Eureka",
      "API Gateway",
      "OpenFeign",
      "WebClient",
      "Kafka",
    ],
  },
  {
    title: "Databases & Performance",
    description: "Data access, storage, and optimization",
    icon: Database,
    skills: [
      "MariaDB",
      "MySQL",
      "ClickHouse",
      "SQL",
      "Query Optimization",
      "Indexing",
    ],
  },
  {
    title: "Tools & Engineering",
    description: "Development, API testing, and delivery",
    icon: Terminal,
    skills: ["Git", "Docker", "Postman", "JMeter", "JIRA", "Agile / Scrum"],
  },
];

const projects = [
  {
    number: "01",
    name: "Quiz Microservices",
    category: "Microservices",
    description:
      "A Java and Spring Boot project that explores a service-based quiz application, REST endpoints, and communication between independently organized services. See the repository README for the implemented services, configuration, and API details.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Microservices",
      "REST APIs",
      "Git/GitHub",
      "Postman",
    ],
    github: "https://github.com/VINAY-CHALLA/springboot-quiz-microservices",
    featured: true,
  },
  {
    number: "02",
    name: "Semiconductor Data Management",
    category: "Backend Engineering",
    description:
      "Professional backend work supporting semiconductor manufacturing data workflows, REST APIs, ETL pipelines, and relational and analytical data stores. Details are kept at a high level to respect project confidentiality.",
    technologies: [
      "Java",
      "Spring Boot",
      "Postman",
      "JMeter",
      "MariaDB",
      "ClickHouse",
      "SQL",
      "BitBucket",
      "JIRA",
      "Agile / Scrum",
      "CI/CD"
    ],
    featured: false,
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="Open GitHub profile"
        title="GitHub"
      >
        <Github size={18} />
      </a>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="Open LinkedIn profile"
        title="LinkedIn"
      >
        <Linkedin size={18} />
      </a>

      <a
        href={profile.gmailCompose}
        target="_blank"
        rel="noreferrer"
        aria-label="Compose an email to Vinay Challa in Gmail"
        title={`Email ${profile.email}`}
      >
        <Mail size={18} />
      </a>

      <span className="social-caption">Find me online</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Vinay Challa home">
          <span className="brand-mark">VC</span>
          <span>
            <strong>Vinay Challa</strong>
            <small>Java Backend Developer</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        >
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            className="nav-resume"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              <span>JAVA BACKEND DEVELOPMENT</span>
            </div>

            <p className="hero-greeting">Hello, I'm Vinay Challa.</p>

            <h1>
              Java backend
              <br />
              development,
              <br />
              <span>built to scale.</span>
            </h1>

            <p className="hero-description">
              Java Backend Developer focused on Spring Boot, microservices,
              REST APIs, and SQL databases, with experience in backend
              development and performance optimization.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>

              <a className="button button-secondary" href="#contact">
                Let's connect <ArrowUpRight size={17} />
              </a>
            </div>

            <SocialLinks />
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>

                <span>DeveloperProfile.java</span>
                <Code2 size={15} />
              </div>

              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">01</span>
                  <span className="code-purple">public class</span>{" "}
                  <span className="code-green">Developer</span> {"{"}
                </div>

                <div className="code-line">
                  <span className="line-number">02</span>
                  &nbsp;&nbsp;<span className="code-purple">String</span> role ={" "}
                  <span className="code-yellow">"Java Backend"</span>;
                </div>

                <div className="code-line">
                  <span className="line-number">03</span>
                  &nbsp;&nbsp;<span className="code-purple">String</span> stack ={" "}
                  <span className="code-yellow">"Spring Boot"</span>;
                </div>

                <div className="code-line">
                  <span className="line-number">04</span>
                  &nbsp;&nbsp;<span className="code-purple">boolean</span>{" "}
                  learning = <span className="code-blue">true</span>;
                </div>

                <div className="code-line">
                  <span className="line-number">05</span>
                  {"}"}
                </div>
              </div>

              <div className="terminal-output">
                <span className="terminal-indicator">
                  <Zap size={14} />
                </span>

                <div>
                  <strong>System ready</strong>
                  <small>Building. Improving. Shipping.</small>
                </div>

                <span className="terminal-check">
                  <CheckCircle2 size={17} />
                </span>
              </div>
            </div>

            <div className="floating-card floating-top">
              <span className="floating-icon">
                <Server size={17} />
              </span>
              <span>
                <strong>Backend</strong>
                <small>API development</small>
              </span>
            </div>

            <div className="floating-card floating-bottom">
              <span className="floating-icon">
                <Database size={17} />
              </span>
              <span>
                <strong>Data systems</strong>
                <small>SQL & optimization</small>
              </span>
            </div>

            <div className="visual-label">
              <span>01 / 06</span>
              <span>ENGINEERING MINDSET</span>
            </div>
          </div>
          
        </section>

        <section
          className="section-container section-block"
          id="about"
        >
          <SectionHeading
            eyebrow="01 — ABOUT ME"
            title="Engineering with purpose."
            description="A practical approach to building and improving backend applications."
          />

          <div className="about-grid">
            <div className="about-main-card">
              <span className="about-label">MY APPROACH</span>
              <h3>
                Turning backend requirements into dependable applications.
              </h3>
              <p>
                I'm a Java Backend Developer with professional experience in
                Java, Spring Boot, REST API development, SQL, and data-focused
                applications. I enjoy understanding how systems work,
                troubleshooting issues, and improving application performance.
              </p>
              <p>
                My experience spans backend development and software testing,
                helping me consider both implementation quality and application
                reliability.
              </p>
            </div>

            <div className="about-side">
              <div className="about-stat-card">
                <span className="stat-number">2.7+</span>
                <span className="stat-label">Years of experience</span>
              </div>

              <div className="about-focus-card">
                <span className="focus-icon">
                  <Code2 size={20} />
                </span>
                <div>
                  <h3>Backend engineering</h3>
                  <p>Java, Spring Boot, and REST API development.</p>
                </div>
              </div>

              <div className="about-focus-card">
                <span className="focus-icon">
                  <Database size={20} />
                </span>
                <div>
                  <h3>Data and performance</h3>
                  <p>SQL, data access, and query optimization.</p>
                </div>
              </div>

              <div className="about-focus-card">
                <span className="focus-icon">
                  <Layers3 size={20} />
                </span>
                <div>
                  <h3>Service integration</h3>
                  <p>Microservices and service communication patterns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-container section-block"
          id="skills"
        >
          <SectionHeading
            eyebrow="02 — TECHNICAL SKILLS"
            title="My engineering toolkit."
            description="Core technologies and tools relevant to my backend development work."
          />

          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card-top">
                    <span className="skill-icon">
                      <Icon size={21} />
                    </span>
                    <span className="skill-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{group.title}</h3>
                  <p className="skill-description">{group.description}</p>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="section-container section-block"
          id="projects"
        >
          <SectionHeading
            eyebrow="03 — SELECTED WORK"
            title="Projects that show how I build."
            description="Hands-on development and professional backend experience."
          />

          <div className="project-toolbar">
            <div className="filter-buttons" aria-label="Filter projects">
              {filters.map((filter) => (
                <button
                  type="button"
                  className={activeFilter === filter ? "filter-active" : ""}
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            <span className="project-count">
              {String(visibleProjects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article
                className={`project-card ${
                  project.featured ? "project-featured" : ""
                }`}
                key={project.number}
              >
                <div className="project-card-header">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>

                  {project.github && (
                    <a
                      className="project-external"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  )}
                </div>

                <div className="project-art">
                  <div className="project-art-grid" />
                  <div className="project-art-icon">
                    {project.featured ? (
                      <Layers3 size={43} strokeWidth={1.3} />
                    ) : (
                      <Database size={43} strokeWidth={1.3} />
                    )}
                  </div>
                  <span className="project-art-label">
                    {project.featured
                      ? "DISTRIBUTED SERVICES"
                      : "DATA SYSTEMS"}
                  </span>
                </div>

                <div className="project-card-body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  {project.github ? (
                    <a
                      className="text-link project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View source code <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="project-private-note">
                      Professional project · Details kept confidential
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-container section-block"
          id="experience"
        >
          <SectionHeading
            eyebrow="04 — EXPERIENCE"
            title="Where I've contributed."
            description="Professional experience across testing, backend development, and data-focused systems."
          />

          <div className="experience-layout">
            <div className="experience-intro">
              <span className="experience-icon">
                <BriefcaseBusiness size={23} />
              </span>
              <h3>Professional experience</h3>
              <p>
                Backend development, API implementation, and data performance
                work.
              </p>

              <a
                className="text-link"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View full resume <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="experience-timeline">
              <article className="experience-item">
                <span className="timeline-dot" />

                <div className="experience-meta">
                  <span>DEC 2023 — JUL 2026</span>
                  <span className="experience-type">Full-time</span>
                </div>

                <h3>Tech Mahindra</h3>
                <h4>Associate Software Engineer</h4>

                <ul className="experience-bullets">
                  <li>
                    Transitioned from testing responsibilities into backend
                    development.
                  </li>
                  <li>
                    Worked on Java and Spring Boot REST APIs for data-driven
                    applications.
                  </li>
                  <li>
                    Contributed to SQL tuning, indexing, and query optimization
                    across MariaDB and ClickHouse.
                  </li>
                </ul>

                <div className="experience-tags">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>REST APIs</span>
                  <span>Microservices</span>
                  <span>Postman</span>
                  <span>JMeter</span> 
                  <span>SQL</span>
                  <span>Git</span>
                  <span>BitBucket</span>
                  <span>MariaDB</span>
                  <span>ClickHouse</span>
                  <span>JIRA</span>
                  <span>Agile / Scrum</span>
                  <span>CI/CD</span>
                </div>
              </article>

              <article className="experience-item">
                <span className="timeline-dot" />

                <div className="experience-meta">
                  <span>PERSONAL DEVELOPMENT</span>
                  <span className="experience-type">Ongoing</span>
                </div>

                <h3>Independent Projects</h3>
                <h4>Java Backend Development</h4>

                <p>
                  Building and refining projects to practise Spring Boot, REST
                  API design, microservices, and maintainable application
                  structure.
                </p>

                <div className="experience-tags">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>REST APIs</span>
                  <span>Microservices</span>
                  <span>Postman</span> 
                  <span>MySQL</span>
                  <span>Git/GitHub</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="section-container section-block"
          id="certification"
        >
          <SectionHeading
            eyebrow="05 — CERTIFICATION"
            title="Continuous learning."
            description="A professional certification supporting my cloud fundamentals."
          />

          <article className="certification-card">
            <span className="certification-icon">
              <Award size={26} />
            </span>

            <div className="certification-copy">
              <span className="certification-label">
                AWS CERTIFICATION
              </span>
              <h3>AWS Certified Cloud Practitioner</h3>
              <p>
                Foundational knowledge of AWS cloud concepts, services,
                security, and billing. Refer to the official credential for
                current validity and verification details.
              </p>
            </div>

            <a
              className="certification-link"
              href="https://www.credly.com/badges/b45b125c-4b11-415a-b498-457ea4698ea8/linked_in?t=tehyob"
              target="_blank"
              rel="noreferrer"
              aria-label="View AWS Certified Cloud Practitioner information"
            >
              AWS details <ExternalLink size={15} />
            </a>
          </article>
        </section>

        <section
          className="section-container section-block"
          id="contact"
        >
          <div className="contact-panel">
            <div className="contact-decoration decoration-one" />
            <div className="contact-decoration decoration-two" />

            <div className="contact-content">
              <span className="eyebrow">06 — CONTACT</span>
              <h2>Let's build something reliable.</h2>
              <p>
                I'm interested in Java backend development opportunities and
                teams building dependable applications with Spring Boot and
                microservices.
              </p>

              <a
                className="button button-primary"
                href={profile.gmailCompose}
                target="_blank"
                rel="noreferrer"
              >
                <Mail size={17} /> Get in touch <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="contact-details">

              <span className="contact-label">ELSEWHERE</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href={profile.hackerrank}
                target="_blank"
                rel="noreferrer"
              >
                HackerRank <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
  <p>Designed with care. Built with React.</p>

  <a className="back-to-top" href="#home">
    Back to top <ArrowUpRight size={15} />
  </a>
</footer>
    </div>
  );
}

export default App;
