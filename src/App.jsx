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
  role: "Software Engineer | Java Backend Developer",
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
  { label: "Achievements", href: "#achievements" },
  { label: "Certification", href: "#certification" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Backend Development",
    description: "Core Java and application services",
    icon: Server,
    skills: [
      "Java 17",
      "Core Java",
      "Java 8 Streams",
      "OOP",
      "Collections",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Spring JDBC",
      "Hibernate",
      "REST APIs",
      "Swagger / OpenAPI",
    ],
  },
  {
    title: "Microservices & Integration",
    description: "Service communication and architecture",
    icon: Layers3,
    skills: [
      "Microservices",
      "Spring Cloud Gateway",
      "Netflix Eureka",
      "FeignClient",
      "WebClient",
      "Kafka (additional knowledge)",
      "ReactJS",
      "Axios",
      "Fetch API",
    ],
  },
  {
    title: "Databases & Performance",
    description: "Data access, storage, and optimization",
    icon: Database,
    skills: [
      "MariaDB",
      "ClickHouse",
      "MySQL",
      "SQL",
      "Redis",
      "Query Optimization",
      "Indexing",
    ],
  },
  {
    title: "Testing & Engineering Tools",
    description: "API testing, build tools, and delivery workflows",
    icon: Terminal,
    skills: ["Postman", "JUnit 5", "Mockito", "MockMvc", "JMeter", "Git", "GitHub", "Bitbucket", "Maven", "Jenkins CI/CD", "JIRA", "Agile / Scrum"],
  },
  {
    title: "Cloud & Additional Knowledge",
    description: "Cloud fundamentals and technologies being explored",
    icon: Code2,
    skills: ["AWS Lambda", "AWS EC2", "AWS S3", "Docker / Kubernetes (project exposure)", "Python (familiarity)", "Spring Security (knowledge)", "JWT / OAuth2 (knowledge)", "Spring WebFlux (knowledge)", "OpenSearch / Elasticsearch (exposure)", "GitHub Copilot", "Claude", "ChatGPT"],
  },
];

const projects = [
  {
    number: "01",
    name: "Quiz Microservices",
    category: "Microservices",
    description:
      "Built a Java-based microservices application with separate Question and Quiz services. Spring Cloud Gateway routes API requests, Netflix Eureka provides service discovery and dynamic registration, and FeignClient enables inter-service REST communication with load balancing.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Eureka",
      "FeignClient",
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
      "Contributed to the TDW Semiconductor Data Management System at Tech Mahindra, developing and maintaining Spring Boot REST APIs, integrating frontend components, documenting APIs, and working with MariaDB, ClickHouse, and Redis. Project details are kept at a high level to respect confidentiality.",
    technologies: [
      "Java",
      "Spring Boot",
      "Postman",
      "ReactJS",
      "Axios",
      "Redis",
      "Swagger / OpenAPI",
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
            <small>Software Engineer</small>
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
              <span>SOFTWARE ENGINEERING · JAVA BACKEND</span>
            </div>

            <p className="hero-greeting">Hello, I'm Vinay Challa.</p>

            <h1>
              Software
              <br />
              engineering,
              <br />
              <span>built to scale.</span>
            </h1>

            <p className="hero-description">
              Software Engineer with 2.7 years of experience building Java
              backend services, Spring Boot REST APIs, and microservices, with
              frontend integration experience using ReactJS.
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
                  <span className="code-yellow">"Software Engineer"</span>;
                </div>

                <div className="code-line">
                  <span className="line-number">03</span>
                  &nbsp;&nbsp;<span className="code-purple">String</span> stack ={" "}
                  <span className="code-yellow">"Java + Spring Boot"</span>;
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
                I'm a Software Engineer with 2.7 years of experience at Tech
                Mahindra, contributing to enterprise application development
                across backend services and frontend integrations. My work
                includes Java 17, Spring Boot, REST APIs, ReactJS, SQL, Spring
                Data JPA, Hibernate, and microservices.
              </p>
              <p>
                I have worked on API documentation, Redis caching, debugging,
                and automated testing. I also improved ClickHouse query
                performance by approximately 10% and automated 125 REST API
                test cases, reducing regression testing time by approximately
                60%.
              </p>
            </div>

            <div className="about-side">
              <div className="about-stat-card">
                <span className="stat-number">2.7</span>
                <span className="stat-label">Years of professional experience</span>
              </div>

              <div className="about-focus-card">
                <span className="focus-icon">
                  <Code2 size={20} />
                </span>
                <div>
                  <h3>Backend engineering</h3>
                  <p>Java 17, Spring Boot, REST APIs, JPA, and Hibernate.</p>
                </div>
              </div>

              <div className="about-focus-card">
                <span className="focus-icon">
                  <Database size={20} />
                </span>
                <div>
                  <h3>Data and performance</h3>
                  <p>MariaDB, ClickHouse, Redis, and SQL optimization.</p>
                </div>
              </div>

              <div className="about-focus-card">
                <span className="focus-icon">
                  <Layers3 size={20} />
                </span>
                <div>
                  <h3>Service integration</h3>
                  <p>ReactJS integration, Axios, FeignClient, and API communication.</p>
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
            description="Enterprise application development, backend services, frontend integrations, and data-focused systems."
          />

          <div className="experience-layout">
            <div className="experience-intro">
              <span className="experience-icon">
                <BriefcaseBusiness size={23} />
              </span>
              <h3>Professional experience</h3>
              <p>
                Java backend development, API integration, database performance,
                and collaborative delivery workflows.
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
                    Developed and maintained Java backend services and REST APIs
                    using Spring Boot, including business logic, request
                    validation, and exception handling.
                  </li>
                  <li>
                    Applied Core Java, OOP, Collections, Spring Data JPA, and
                    Hibernate for service logic and database interactions.
                  </li>
                  <li>
                    Created and updated Swagger/OpenAPI documentation and
                    integrated frontend components using ReactJS, Axios, and
                    Fetch API.
                  </li>
                  <li>
                    Worked with MariaDB and ClickHouse on SQL operations, query
                    analysis, indexing, and troubleshooting; improved analytical
                    query performance by approximately 10%.
                  </li>
                  <li>
                    Implemented Redis caching, debugged backend/API issues,
                    and contributed to code reviews, unit/integration testing,
                    and regression validation.
                  </li>
                  <li>
                    Used Git/Bitbucket, Maven, and Jenkins CI/CD workflows in
                    collaboration with QA and DevOps teams in an Agile/Scrum
                    environment.
                  </li>
                </ul>

                <div className="experience-tags">
                  <span>Java 17</span>
                  <span>Spring Boot</span>
                  <span>REST APIs</span>
                  <span>Spring Data JPA</span>
                  <span>Hibernate</span>
                  <span>ReactJS</span>
                  <span>Axios</span>
                  <span>MariaDB</span>
                  <span>ClickHouse</span>
                  <span>Redis</span>
                  <span>Swagger / OpenAPI</span>
                  <span>Postman</span>
                  <span>JMeter</span>
                  <span>Maven</span>
                  <span>Jenkins CI/CD</span>
                  <span>Agile / Scrum</span>
                </div>
              </article>

              <article className="experience-item">
                <span className="timeline-dot" />

                <div className="experience-meta">
                  <span>PERSONAL PROJECT</span>
                  <span className="experience-type">Completed</span>
                </div>

                <h3>Quiz Microservices Application</h3>
                <h4>Java · Spring Boot · Spring Cloud</h4>

                <p>
                  Developed a Java-based microservices application with separate
                  Question and Quiz services. Configured Spring Cloud Gateway to
                  route API requests, Netflix Eureka for service discovery and
                  dynamic registration, and FeignClient for inter-service REST
                  communication with load balancing.
                </p>

                <div className="experience-tags">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>Microservices</span>
                  <span>REST APIs</span>
                  <span>Spring Cloud Gateway</span>
                  <span>Eureka</span>
                  <span>FeignClient</span>
                  <span>Postman</span>
                  <span>Git/GitHub</span>
                </div>
                <a
                  className="project-link"
                  href="https://github.com/VINAY-CHALLA/springboot-quiz-microservices"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Quiz Microservices on GitHub <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section-container section-block" id="achievements">
          <SectionHeading
            eyebrow="05 — ACHIEVEMENTS"
            title="Measurable engineering contributions."
            description="Selected outcomes from API automation and database performance work."
          />
          <div className="achievement-grid">
            <div className="about-stat-card">
              <span className="stat-number">10%</span>
              <span className="stat-label">Improvement in analytical ClickHouse query performance</span>
            </div>
            <div className="about-stat-card">
              <span className="stat-number">125</span>
              <span className="stat-label">REST API test cases automated using Postman collections</span>
            </div>
            <div className="about-stat-card">
              <span className="stat-number">60%</span>
              <span className="stat-label">Reduction in regression testing time</span>
            </div>
          </div>
        </section>

        <section
          className="section-container section-block"
          id="certification"
        >
          <SectionHeading
            eyebrow="06 — CERTIFICATION"
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

        <section className="section-container section-block" id="education">
          <SectionHeading
            eyebrow="07 — EDUCATION"
            title="Academic foundation."
            description="Formal education."
          />
          <article className="certification-card">
            <span className="certification-icon">
              <Award size={26} />
            </span>
            <div className="certification-copy">
              <span className="certification-label">BACHELOR'S DEGREE · 2023</span>
              <h3>Sree Vidyanikethan Engineering College</h3>
              <p>B.Tech — Electronics &amp; Communication Engineering</p>
            </div>
            <div className="education-score" aria-label="Percentage: 87.07 percent">
              <strong>87.07%</strong>
              <span>Percentage</span>
            </div>
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
              <span className="eyebrow">07 — CONTACT</span>
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
