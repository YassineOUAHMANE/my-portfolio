import React, { useEffect, useState } from "react";
import profilePhoto from "./assets/YASSINEOUAHMANE.png";
import cv from "./assets/CV_OUAHMANE_Yassine_ENSIMAG.pdf";

// Project images
import projectDataPlatform from "./assets/project-data-platfom.png";
import projectStreaming from "./assets/project-streaming.png";
import projectGenAI from "./assets/project-genai-assistant.png";

/* =========================
   SKILLS (matches your CV)
   ========================= */

const skills = {
  "ETL / BI & Data Modeling": [
    "Talend",
    "Power BI",
    "Kimball/star schemas",
    "Data tests",
    "Data lineage"
  ],
  "Cloud & DevOps": [
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins / GitLab CI",
    "PostgreSQL"
  ],
  "Data Engineering": [
    "Python",
    "SQL",
    "Apache Spark",
    "Airflow / dbt",
    "Kafka",
    "Parquet / Delta"
  ],
  "MLOps / AI": [
    "MLflow",
    "Weights & Biases",
    "Machine learning",
    "DVC",
    "Airflow / Prefect",
    "KServe / Seldon",
    "Evidently",
    "Prometheus",
    "Grafana"
  ],
  "Backend & Frontend": ["FastAPI", "Django", "React"],
  Methods: ["Agile SCRUM", "CI/CD", "Data security", "Documentation", "Code reviews"],
  Certifications: [
    "AWS Certified Cloud Practitioner",
    "AWS Badge Data Engineer",
    "DataCamp Associate Data Engineer",
    "HackerRank SQL (Advanced)",
    "Databricks Lakehouse Fundamentals",
    "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    "Oracle Cloud Infrastructure 2024 Data Foundations Associate"
  ]
};

/* =============
   PROJECTS
   ============= */

const projects = [
  {
    id: 1,
    title: "End-to-end Data Platform for Product Analytics",
    type: "Data Engineering",
    description:
      "Designed and implemented scalable ETL pipelines to centralize product, event, and billing data into a single warehouse for analytics and experimentation.",
    tech: ["Python", "SQL", "Airflow", "dbt", "PostgreSQL", "Power BI"],
    image: projectDataPlatform,
    hook: "Ask me how I’d model your product events.",
    note: "Example project – replace with your real experience."
  },
  {
    id: 2,
    title: "Streaming Analytics with Kafka & Spark",
    type: "Streaming",
    description:
      "Built a real-time data pipeline ingesting events with Kafka, processing with Spark, and exposing clean outputs for monitoring and anomaly detection.",
    tech: ["Kafka", "Spark", "Python", "Linux", "Git"],
    image: projectStreaming,
    hook: "Curious how to move from batch to streaming?",
    note: "Example project – replace with your real experience."
  },
  {
    id: 3,
    title: "Generative AI Assistant for Internal Knowledge",
    type: "Generative AI",
    description:
      "Prototyped a generative AI assistant that indexes internal documents and delivers conversational answers, with attention to prompt design and retrieval quality.",
    tech: ["Python", "TensorFlow", "PyTorch", "Generative AI"],
    image: projectGenAI,
    hook: "Want a custom AI assistant over your data?",
    note: "Example project – replace with your real experience."
  }
];

/* ==================
   EXPERIENCE (CV)
   ================== */

const experience = [
  {
    id: 1,
    role: "Freelance Data Engineer",
    place: "Upwork · Remote",
    period: "2023 – Present",
    bullets: [
      "Delivered end-to-end data solutions for international clients, from requirements gathering to deployment.",
      "Built ETL pipelines and analytics dashboards using Python, SQL and BI tools to support decision-making.",
      "Collaborated directly with non-technical stakeholders, translating business needs into technical designs."
    ]
  },
  {
    id: 2,
    role: "Data Engineer & BI Analyst",
    place: "Centrale Danone · Casablanca-Settat, Morocco · Hybrid",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Contributed to automating the migration from the company’s ERP system to Power BI.",
      "Optimized ERP queries and streamlined data integration, reducing the time needed to access insights.",
      "Automated reporting workflows, improving visualization and reporting efficiency for strategic decisions."
    ]
  },
  {
    id: 3,
    role: "Computer Science & Mathematics Teacher",
    place: "Superprof · Remote",
    period: "Sep 2024 – Jul 2025",
    bullets: [
      "Taught computer science and mathematics to students with diverse levels and goals.",
      "Explained complex concepts in a clear, structured way, strengthening communication skills.",
      "Adapted teaching methods to each student, improving their confidence and problem-solving abilities."
    ]
  },
  {
    id: 4,
    role: "Data Engineer",
    place: "2Peerfect | EdTech · Rabat, Morocco · Hybrid",
    period: "Jun 2024 – Jul 2024",
    bullets: [
      "Contributed to an AI-powered chatbot that helped students access educational information more easily.",
      "Worked on data preparation and integration to improve the quality and coverage of the chatbot’s answers.",
      "Helped the platform scale by streamlining information retrieval and improving user guidance."
    ]
  },
  {
    id: 5,
    role: "Data Analyst",
    place: "Mentorness · Gujarat, India · Remote",
    period: "Jan 2024 – May 2024",
    bullets: [
      "Collaborated with an international data science team on a hospitality client project.",
      "Improved data integration and reporting processes, enabling faster and more reliable insights.",
      "Automated dashboards and reporting workflows to support high-level management decisions."
    ]
  }
];

/* =====================
   EXPERIENCE FLOW (diagram)
   ===================== */

const experienceFlow = [
  {
    id: "mentorness",
    stage: "Ingest & Understand",
    role: "Data Analyst",
    company: "Mentorness · Remote",
    period: "Jan 2024 – May 2024",
    focus:
      "Collaborated with international teams to clean and integrate data for a hospitality client.",
    tech: "Power BI, SQL, automation, reporting",
    bullets: [
      "Improved data integration and reporting processes.",
      "Built dashboards that supported strategic decisions.",
      "Automated parts of the reporting workflows."
    ]
  },
  {
    id: "2peerfect",
    stage: "Build AI Experiences",
    role: "Data Engineer",
    company: "2Peerfect | EdTech · Rabat · Hybrid",
    period: "Jun 2024 – Jul 2024",
    focus:
      "Worked on an AI-powered chatbot to help students access educational information.",
    tech: "RAG, LangChain, Python, vector search",
    bullets: [
      "Prepared and indexed educational content for retrieval.",
      "Improved chatbot response quality and coverage.",
      "Helped the platform scale to more users."
    ]
  },
  {
    id: "superprof",
    stage: "Explain & Teach",
    role: "CS & Math Teacher",
    company: "Superprof · Remote",
    period: "Sep 2024 – Jul 2025",
    focus:
      "Taught math and computer science, making complex topics simple and intuitive.",
    tech: "Algorithms, data structures, pedagogy",
    bullets: [
      "Developed the skill to explain complex ideas clearly.",
      "Adapted concepts to different student backgrounds.",
      "Strengthened communication and mentoring abilities."
    ]
  },
  {
    id: "centrale-danone",
    stage: "Industrialize BI",
    role: "Data Engineer & BI Analyst",
    company: "Centrale Danone · Casablanca · Hybrid",
    period: "Jun 2025 – Aug 2025",
    focus:
      "Automated the migration from ERP to Power BI and optimized access to business insights.",
    tech: "Power BI, Microsoft SQL Server, ERP, ETL",
    bullets: [
      "Optimized ERP queries and data integration.",
      "Automated reporting workflows and dashboards.",
      "Reduced time to insights for business teams."
    ]
  },
  {
    id: "freelance",
    stage: "End-to-End Delivery",
    role: "Freelance Data Engineer",
    company: "Upwork · Remote",
    period: "2023 – Present",
    focus:
      "End-to-end data projects for international clients, from pipelines to dashboards and AI.",
    tech: "Python, SQL, cloud, BI, automation",
    bullets: [
      "Delivered complete data solutions from idea to production.",
      "Worked directly with stakeholders to define the right KPIs.",
      "Connected data engineering foundations with AI and analytics."
    ]
  }
];

/* ==================
   CONTACT INTENTS
   ================== */

const contactIntents = {
  project: {
    title: "Data / AI project",
    desc: "You have a concrete product, platform, or BI need and want help designing or implementing it end-to-end.",
    bullets: [
      "Designing or improving data platforms and pipelines.",
      "Building dashboards and self-service analytics.",
      "Exploring generative AI or AI agents on top of your data."
    ]
  },
  mentoring: {
    title: "Mentoring / career",
    desc: "You’re a student or early-career engineer who wants guidance on data, AI, or roadmap planning.",
    bullets: [
      "Feedback on your portfolio or learning plan.",
      "How to grow as a data / ML engineer.",
      "Preparing for interviews and technical challenges."
    ]
  },
  collaboration: {
    title: "Collaboration / community",
    desc: "You’d like to collaborate on open-source, content, or a technical initiative around data and AI.",
    bullets: [
      "Open-source tools in data engineering / MLOps.",
      "Talks, workshops, or technical content.",
      "Hackathons or research ideas around data & AI."
    ]
  }
};

/* ==========
   APP
   ========== */

function App() {
  const [theme, setTheme] = useState("dark");
  const [projectFilter, setProjectFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeNode, setActiveNode] = useState(
    experienceFlow[experienceFlow.length - 1]
  );
  const [activeSection, setActiveSection] = useState("hero");
  const [contactIntent, setContactIntent] = useState("project");

  // Load theme preference
  useEffect(() => {
    const saved =
      window.localStorage.getItem("theme") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  // Update theme on change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const filteredProjects =
    projectFilter === "All"
      ? projects
      : projects.filter((p) => p.type === projectFilter);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <div
            className="logo"
            onClick={() => setActiveSection("hero")}
            role="button"
          >
            <div className="logo-avatar">
              <span>YO</span>
            </div>
            <div>
              <div className="logo-name">Yassine Ouahmane</div>
              <div className="logo-role">
                Data Engineer · Generative AI Enthusiast
              </div>
            </div>
          </div>

          <nav className="nav">
            <button onClick={() => setActiveSection("about")}>About</button>
            <button onClick={() => setActiveSection("skills")}>Skills</button>
            <button onClick={() => setActiveSection("journey")}>Journey</button>
            <button onClick={() => setActiveSection("projects")}>
              Projects
            </button>
            <button onClick={() => setActiveSection("experience")}>
              Experience
            </button>
            <button onClick={() => setActiveSection("contact")}>Contact</button>
          </nav>

          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* MAIN VIEWS: one “dashboard” at a time */}
      <main className="main-views">
        {/* HERO VIEW */}
        <section
          id="hero"
          className={`hero view ${activeSection === "hero" ? "view-active" : ""}`}
        >
          
          <div className="container hero-grid">
            <div>
              <p className="hero-chip">
                <span className="status-dot" />
                Available for Data Engineering & Generative AI projects
              </p>
              <h1 className="hero-title">
                Data Engineer transforming{" "}
                <span>raw data into intelligent systems.</span>
              </h1>
              <p className="hero-subtitle">
                I design data platforms, automation workflows, and generative
                AI solutions that turn complex data into real, usable
                applications.
              </p>
              <div className="hero-tags">
                <span className="tag">Data Engineering</span>
                <span className="tag">Generative AI</span>
                <span className="tag">Automation & AI Agents</span>
              </div>
              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => setActiveSection("contact")}
                >
                  Contact me
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => setActiveSection("projects")}
                >
                  View projects
                </button>
                <a
                  href={cv}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  Download CV
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href="https://www.linkedin.com/in/yassineouahmane/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill social-pill--linkedin"
                >
                  <span className="social-icon-circle">in</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/yassineouahmane"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill social-pill--github"
                >
                  <span className="social-icon-circle">{`{}`}</span>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://leetcode.com/u/Yassineouahmane/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill social-pill--leetcode"
                >
                  <span className="social-icon-circle">LC</span>
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

            <aside className="hero-card">
              <div className="hero-photo-wrapper">
                <img
                  src={profilePhoto}
                  alt="Yassine Ouahmane"
                  className="hero-photo"
                />
              </div>

              <h2 className="hero-card-title">About me</h2>
              <p className="hero-card-text">
                I'm a data engineer focused on turning raw data into robust,
                intelligent systems. I enjoy building scalable pipelines,
                automation workflows, and generative AI solutions that solve
                real problems.
              </p>

              <ul className="hero-card-list">
                <li>Hands-on with Python, SQL, Kafka, Spark, Airflow & dbt</li>
                <li>Cloud experience across AWS, GCP & Azure</li>
                <li>
                  Passionate about generative AI, neural networks & AI agents
                </li>
              </ul>
            </aside>
          </div>
          <div className="hero-bg-orbits" aria-hidden="true">
            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
            <div className="orbit orbit-3" />
          </div>
          {/* NEW: animated data workflow */}
            <div className="hero-data-flow" aria-hidden="true">
                <div className="hero-data-track">
                <div className="hero-data-line hero-data-line-1" />
                <div className="hero-data-line hero-data-line-2" />

                <div className="hero-data-node hero-data-node--left">
                    <span>Sources</span>
                </div>
                <div className="hero-data-node hero-data-node--middle">
                    <span>Pipelines</span>
                </div>
                <div className="hero-data-node hero-data-node--right">
                    <span>AI layer</span>
                </div>

                <div className="hero-data-particle hero-data-particle-1" />
                <div className="hero-data-particle hero-data-particle-2" />
                <div className="hero-data-particle hero-data-particle-3" />
                </div>
            </div>

        </section>

        {/* ABOUT VIEW */}
        <section
          id="about"
          className={`section view ${activeSection === "about" ? "view-active" : ""}`}
        >
          <div className="container">
            <div className="section-header">
              <h2>About</h2>
              <p>Who I am and how I approach data & AI.</p>
            </div>

            <div className="about-grid about-grid-enhanced">
              <div className="about-main">
                <p>
                  I'm <strong>Yassine Ouahmane</strong>, a Data Engineer
                  passionate about{" "}
                  <strong>generative AI, automation and data platforms</strong>.
                  I like building systems where clean data, solid engineering
                  and AI come together to drive real business outcomes.
                </p>
                <p>
                  My work connects <strong>data engineering</strong> (pipelines,
                  modeling, performance) with{" "}
                  <strong>AI & MLOps practices</strong>, so that models and
                  assistants are built on top of a strong, reliable foundation.
                </p>

                <div className="about-stats-row">
                  <div className="about-stat-card">
                    <span className="about-stat-number">3+ internships</span>
                    <span className="about-stat-label">
                      Data, AI & BI roles
                    </span>
                  </div>
                  <div className="about-stat-card">
                    <span className="about-stat-number">Freelance</span>
                    <span className="about-stat-label">
                      End-to-end client work
                    </span>
                  </div>
                  <div className="about-stat-card">
                    <span className="about-stat-number">Teaching</span>
                    <span className="about-stat-label">
                      Math & CS, explaining clearly
                    </span>
                  </div>
                </div>

                <div className="about-highlights">
                  <div className="about-card">
                    <h3>What I like to work on</h3>
                    <ul>
                      <li>End-to-end data pipelines and ETL / ELT workflows</li>
                      <li>Streaming and real-time use cases with Kafka & Spark</li>
                      <li>
                        Generative AI applications connected to real business
                        data
                      </li>
                      <li>Automation and AI agents to remove repetitive work</li>
                    </ul>
                  </div>
                  <div className="about-card">
                    <h3>How I work</h3>
                    <ul>
                      <li>Curious, always learning and pushing boundaries</li>
                      <li>
                        Engineering discipline: clean, maintainable solutions
                      </li>
                      <li>
                        Clear communication with both tech & non-tech people
                      </li>
                      <li>Focus on real impact, not just “cool tech”</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: code window + coder scene */}
              <div className="about-visual">
                <div className="about-orbit about-orbit-1" />
                <div className="about-orbit about-orbit-2" />

                <div className="code-window">
                  <div className="code-window-header">
                    <span className="code-dot code-dot-red" />
                    <span className="code-dot code-dot-yellow" />
                    <span className="code-dot code-dot-green" />
                    <span className="code-window-title">
                      pipeline_orchestrator.py
                    </span>
                  </div>
                  <div className="code-window-body">
                    <p>
                      <span className="code-keyword">from</span>{" "}
                      <span className="code-lib">orchestrator</span>{" "}
                      <span className="code-keyword">import</span>{" "}
                      <span className="code-fn">DataPipeline</span>
                    </p>
                    <p>
                      <span className="code-keyword">from</span>{" "}
                      <span className="code-lib">ai_agents</span>{" "}
                      <span className="code-keyword">import</span>{" "}
                      <span className="code-fn">InsightAgent</span>
                    </p>
                    <p>
                      <span className="code-keyword">with</span>{" "}
                      <span className="code-fn">DataPipeline</span>
                      <span className="code-faded">(cloud="multi", quality="high")</span>{" "}
                      <span className="code-keyword">as</span>{" "}
                      <span className="code-faded">pipeline</span>:
                    </p>
                    <p>
                      &nbsp;&nbsp;pipeline.
                      <span className="code-fn">ingest</span>
                      <span className="code-faded">
                        ("events", streaming=True)
                      </span>
                    </p>
                    <p>
                      &nbsp;&nbsp;pipeline.
                      <span className="code-fn">transform</span>
                      <span className="code-faded">
                        (models="analytics + AI-ready")
                      </span>
                    </p>
                    <p>
                      &nbsp;&nbsp;<span className="code-keyword">agent</span> ={" "}
                      <span className="code-fn">InsightAgent</span>
                      <span className="code-faded">(source=pipeline)</span>
                    </p>
                    <p className="code-comment">
                      # Let&apos;s turn your data into{" "}
                      <span className="code-glow">decisions</span>{" "}
                      <span className="code-cursor" />
                    </p>
                  </div>
                </div>

                <div className="about-data-row">
                  <span className="data-chip data-chip-1">Data platforms</span>
                  <span className="data-chip data-chip-2">
                    Analytics & BI
                  </span>
                  <span className="data-chip data-chip-3">
                    Generative AI
                  </span>
                  <span className="data-chip data-chip-4">
                    Automation & agents
                  </span>
                </div>

                <p className="about-caption">
                  I love designing the whole flow: from streaming events and
                  clean data models to AI assistants that people actually use.
                </p>

                {/* Coder scene */}
                                {/* Data cluster → AI brain diagram */}
                <div className="about-diagram">
                  {/* background glows */}
                  <div className="about-diagram-glow about-diagram-glow-left" />
                  <div className="about-diagram-glow about-diagram-glow-right" />

                  {/* left: data cluster */}
                  <div className="about-diagram-cluster">
                    <div className="cluster-dot cluster-dot-1" />
                    <div className="cluster-dot cluster-dot-2" />
                    <div className="cluster-dot cluster-dot-3" />
                    <div className="cluster-dot cluster-dot-4" />
                    <div className="cluster-dot cluster-dot-5" />
                  </div>

                  {/* connecting path */}
                  <div className="about-diagram-path" />

                  {/* right: AI “brain” */}
                  <div className="about-diagram-brain">
                    <div className="brain-ring brain-ring-1" />
                    <div className="brain-ring brain-ring-2" />
                    <div className="brain-core" />
                    <div className="brain-node brain-node-1" />
                    <div className="brain-node brain-node-2" />
                    <div className="brain-node brain-node-3" />
                  </div>

                  {/* moving particles from data → brain */}
                  <div className="about-diagram-particle about-diagram-particle-1" />
                  <div className="about-diagram-particle about-diagram-particle-2" />
                </div>

                <p className="about-diagram-caption">
                  This is what I do: take scattered, noisy data, run it through
                  robust pipelines and MLOps, and end up with AI assistants and
                  analytics that your team can actually trust in production.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* SKILLS VIEW */}
        <section
          id="skills"
          className={`section view ${activeSection === "skills" ? "view-active" : ""}`}
        >
          <div className="container">
            <div className="section-header">
              <h2>Skills & stack</h2>
              <p>Technologies I use to build data and AI solutions.</p>
            </div>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, list]) => (
                <div
                  key={category}
                  className={
                    category === "Certifications"
                      ? "skill-card skill-card-wide"
                      : "skill-card"
                  }
                >
                  <h3>{category}</h3>
                  <div className="skill-chips">
                    {list.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY VIEW */}
        <section
          id="journey"
          className={`section view ${activeSection === "journey" ? "view-active" : ""}`}
        >
          <div className="container">
            <div className="section-header">
              <h2>Data journey</h2>
              <p>
                How my experience connects like a data pipeline: from raw data
                to AI-powered products.
              </p>
            </div>

            <div className="journey-grid">
              {/* Diagram */}
              <div className="journey-pipeline">
                <div className="pipeline-track">
                  <div className="pipeline-flow pipeline-flow-1" />
                  <div className="pipeline-flow pipeline-flow-2" />
                  <div className="pipeline-flow pipeline-flow-3" />

                  <div className="journey-nodes-row">
                    {experienceFlow.map((node, index) => (
                      <button
                        key={node.id}
                        className={
                          activeNode.id === node.id
                            ? "journey-node journey-node-active"
                            : "journey-node"
                        }
                        onMouseEnter={() => setActiveNode(node)}
                        onClick={() => setActiveNode(node)}
                      >
                        <span className="journey-node-index">
                          {index + 1}
                        </span>
                        <span className="journey-node-text">
                          <span className="journey-node-stage">
                            {node.stage}
                          </span>
                          <span className="journey-node-role">
                            {node.role}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Details */}
              <aside className="journey-details">
                <p className="journey-label">Step in the pipeline</p>
                <h3 className="journey-title">{activeNode.role}</h3>
                <p className="journey-meta">
                  {activeNode.company} · <span>{activeNode.period}</span>
                </p>
                <p className="journey-focus">{activeNode.focus}</p>
                <ul className="journey-bullets">
                  {activeNode.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
                <p className="journey-tech">
                  <strong>Focus stack:</strong> {activeNode.tech}
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* PROJECTS VIEW */}
        <section
          id="projects"
          className={`section view ${activeSection === "projects" ? "view-active" : ""}`}
        >
          <div className="container">
            <div className="section-header">
              <h2>Projects</h2>
                <p>Data engineering & generative AI projects.</p>
            </div>

            <div className="project-filters">
              {["All", "Data Engineering", "Streaming", "Generative AI"].map(
                (type) => (
                  <button
                    key={type}
                    className={
                      projectFilter === type
                        ? "filter-btn filter-btn-active"
                        : "filter-btn"
                    }
                    onClick={() => setProjectFilter(type)}
                  >
                    {type}
                  </button>
                )
              )}
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="project-card"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.image && (
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="project-image-overlay">
                        <span>Click to explore</span>
                      </div>
                    </div>
                  )}

                  <h3>{project.title}</h3>
                  <p className="project-type">{project.type}</p>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="chip chip-small">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.note && (
                    <p className="project-note">{project.note}</p>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div
              className="modal-backdrop"
              onClick={() => setSelectedProject(null)}
            >
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                )}

                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-type">{selectedProject.type}</p>
                <p className="modal-desc">{selectedProject.description}</p>

                <div className="modal-tech">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="chip chip-small">
                      {t}
                    </span>
                  ))}
                </div>

                {selectedProject.hook && (
                  <p className="modal-hook">{selectedProject.hook}</p>
                )}

                <div className="modal-actions">
                  <button
                    className="btn btn-outline"
                    onClick={() =>
                      (window.location.href =
                        `mailto:yassineouahmane2002@gmail.com?subject=Question%20about%20${encodeURIComponent(
                          selectedProject.title
                        )}`)
                    }
                  >
                    Ask me about this project
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* EXPERIENCE VIEW */}
        <section
          id="experience"
          className={`section view ${activeSection === "experience" ? "view-active" : ""}`}
        >
          <div className="container">
            <div className="section-header">
              <h2>Experience</h2>
              <p>Timeline of how I’ve grown as an engineer.</p>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>{item.role}</h3>
                    <p className="timeline-place">
                      {item.place} · <span>{item.period}</span>
                    </p>
                    <ul>
                      {item.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT VIEW */}
        <section
          id="contact"
          className={`section view ${activeSection === "contact" ? "view-active" : ""}`}
        >
          <div className="container">
            <div className="section-header">
              <h2>Contact</h2>
              <p>Let's talk about data, AI, and what you want to build.</p>
            </div>

            <div className="contact-grid contact-grid-enhanced">
              <div>
                <p>
                  If you're working on data platforms, generative AI, or
                  automation and need someone who can connect the dots between
                  engineering and impact, I'd be happy to discuss it.
                </p>
                <p>
                  Share a bit about your context (stack, data sources, goals),
                  and we can explore how I can help.
                </p>
                

                <p className="contact-flow-caption">
                    I help you move from a vague idea to a shipped, data-backed product that people actually use.
                </p>
                </div>

                <div className="contact-intents">
                  <button
                    className={
                      contactIntent === "project"
                        ? "contact-intent-chip contact-intent-chip-active"
                        : "contact-intent-chip"
                    }
                    onClick={() => setContactIntent("project")}
                  >
                    Data / AI project
                  </button>
                  <button
                    className={
                      contactIntent === "mentoring"
                        ? "contact-intent-chip contact-intent-chip-active"
                        : "contact-intent-chip"
                    }
                    onClick={() => setContactIntent("mentoring")}
                  >
                    Mentoring
                  </button>
                  <button
                    className={
                      contactIntent === "collaboration"
                        ? "contact-intent-chip contact-intent-chip-active"
                        : "contact-intent-chip"
                    }
                    onClick={() => setContactIntent("collaboration")}
                  >
                    Collaboration
                  </button>
                </div>

                <div className="contact-intent-panel">
                  <h3>{contactIntents[contactIntent].title}</h3>
                  <p className="contact-intent-desc">
                    {contactIntents[contactIntent].desc}
                  </p>
                  <ul className="contact-intent-list">
                    {contactIntents[contactIntent].bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="contact-card contact-card-console">
                <div className="contact-card-header">
                  <span className="contact-status-dot" />
                  <span className="contact-card-title">
                    Work with Yassine
                  </span>
                  <span className="contact-card-tag">Response &lt; 24h</span>
                </div>
                <div className="contact-card-body">
                  <div className="contact-row">
                    <span className="contact-label">Email</span>
                    <a
                      className="contact-value"
                      href="mailto:yassineouahmane2002@gmail.com"
                    >
                      yassineouahmane2002@gmail.com
                    </a>
                  </div>
                  <div className="contact-row">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">
                      Grenoble, France · Remote friendly
                    </span>
                  </div>
                  <div className="contact-row">
                    <span className="contact-label">Languages</span>
                    <span className="contact-value">French, English</span>
                  </div>
                  <div className="contact-row">
                    <span className="contact-label">Topics</span>
                    <span className="contact-value-topic">
                      Data platforms · BI · Generative AI
                    </span>
                  </div>

                  <div className="contact-row contact-row-socials">
                    <span className="contact-label">Profiles</span>
                    <div className="contact-socials">
                      <a
                        href="https://www.linkedin.com/in/yassineouahmane/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-pill social-pill--linkedin"
                      >
                        <span className="social-icon-circle">in</span>
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://github.com/yassineouahmane"
                        target="_blank"
                        rel="noreferrer"
                        className="social-pill social-pill--github"
                      >
                        <span className="social-icon-circle">{`{}`}</span>
                        <span>GitHub</span>
                      </a>
                      <a
                        href="https://leetcode.com/u/Yassineouahmane/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-pill social-pill--leetcode"
                      >
                        <span className="social-icon-circle">LC</span>
                        <span>LeetCode</span>
                      </a>
                    </div>
                  </div>

                  <div className="contact-cta">
                    <button
                      className="btn btn-primary btn-full"
                      onClick={() =>
                        (window.location.href =
                          "mailto:yassineouahmane2002@gmail.com?subject=Data%20Engineering%20%2F%20Generative%20AI%20project")
                      }
                    >
                      Send me an email
                    </button>
                  </div>
                </div>
              </div>
            </div>
             {/* NEW: value pipeline at the bottom */}
                <div className="contact-value-flow" aria-hidden="true">
                <div className="contact-flow-track">
                    <div className="contact-flow-line" />

                    <div className="contact-flow-node contact-flow-node--start">
                    <span>Your idea</span>
                    </div>
                    <div className="contact-flow-node contact-flow-node--middle">
                    <span>Data & AI design</span>
                    </div>
                    <div className="contact-flow-node contact-flow-node--delivery">
                    <span>Delivery</span>
                    </div>
                    <div className="contact-flow-node contact-flow-node--impact">
                    <span>Long-term impact</span>
                    </div>

                    <div className="contact-flow-particle contact-flow-particle-1" />
                    <div className="contact-flow-particle contact-flow-particle-2" />
                </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Yassine Ouahmane</span>
          <span className="footer-tagline">
            Data Engineer · Generative AI & Automation
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
