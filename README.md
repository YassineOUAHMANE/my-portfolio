# Yassine Ouahmane – Data Engineer & Generative AI Portfolio

![Portfolio preview](images/my-prtfolio.png)

A modern, interactive **single-page portfolio** built with React to showcase my work as a **Data Engineer & Generative AI enthusiast**.

This app focuses on:

- Clean, focused sections (About, Skills, Journey, Projects, Experience, Contact)
- A **dashboard-style navigation** (one “view” at a time)
- Creative **data workflows & AI visualizations** (animated pipelines, cluster → AI brain diagram)
- A strong emphasis on **data engineering, MLOps, BI, and Generative AI**

---


## 🛠 Tech Stack

- **Frontend:** React (Vite or CRA)
- **Styling:** Custom CSS (no UI frameworks)
- **Language:** JavaScript (ES6+)
- **Assets:** Local images (profile, project illustrations, etc.)

---

## ✨ Main Features

### 1. Hero Section

- Clear headline: **“Data Engineer transforming raw data into intelligent systems.”**
- Buttons for:
  - `Contact me`
  - `View projects`
  - `Download CV` 
- **Social pills** for:
  - LinkedIn  
  - GitHub  
  - LeetCode  
- Animated **data pipeline** in the background:
  - “Sources → Pipelines → AI layer” with glowing particles flowing through.

---

### 2. About Section

- Strong personal introduction focused on:
  - Data engineering
  - Automation
  - MLOps
  - Generative AI
- Highlight cards:
  - What I like to work on (pipelines, streaming, GenAI, automation)
  - How I work (curiosity, clean engineering, communication, impact)
- Stats row:
  - Internships, freelance work, teaching experience
- Right side: **“Data cluster → AI brain” diagram**
  - Glowing data nodes on the left (noisy data)
  - Animated path
  - Pulsing AI “brain” on the right
  - Moving particles showing **data flowing into AI systems**

---

### 3. Skills Section

Grouped skill cards including:

- **Data Engineering:** Python, SQL, Apache Spark, Airflow/dbt, Kafka, Parquet/Delta  
- **ETL/BI & Data Modeling:** Talend, Power BI, Kimball/star schemas, data tests, lineage  
- **Cloud & DevOps:** AWS, GCP, Docker, Kubernetes, Terraform, Jenkins/GitLab CI, PostgreSQL  
- **MLOps / AI:** MLflow, Weights & Biases, Machine learning, DVC, Airflow/Prefect, KServe/Seldon, Evidently, Prometheus, Grafana  
- **Backend & Frontend:** FastAPI, Django, React  
- **Methods:** Agile SCRUM, CI/CD, data security, documentation, code reviews  
- **Certifications:**  
  - AWS Certified Cloud Practitioner  
  - AWS Badge Data Engineer  
  - DataCamp Associate Data Engineer  
  - HackerRank SQL (Advanced)  
  - Databricks Lakehouse Fundamentals  
  - Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate  
  - Oracle Cloud Infrastructure 2024 Data Foundations Associate  

The **Certifications** card spans full width to give it more visual weight.

---

### 4. Data Journey (Experience Flow Diagram)

- An interactive **“data journey”** section where each experience is a step in a pipeline:
  - Data Analyst → Data Engineer (EdTech) → Teacher → BI & Data Engineer (Centrale Danone) → Freelance Data Engineer
- Horizontal animated **pipeline diagram** with labeled nodes.
- Clicking/hovering a node updates the right-hand panel:
  - Role, company, period
  - Responsibilities
  - Tech focus for that step (e.g. Power BI, RAG, LangChain, etc.)

---

### 5. Projects Section

- Filterable by category: `All`, `Data Engineering`, `Streaming`, `Generative AI`
- Each project includes:
  - Title & type
  - Description
  - Tech stack chips
  - **Custom image** (e.g. data platform, streaming pipeline, GenAI assistant)
- Click on a project:
  - Opens a **modal** with:
    - Larger image
    - Deeper description
    - Tech stack
    - A small “hook” line (e.g. *“Ask me how I'd model your product events.”*)
    - Button to email you about that specific project.

---

### 6. Experience Timeline

- Classic vertical timeline listing:
  - Freelance Data Engineer (Upwork)
  - Centrale Danone – Data Engineer & BI Analyst
  - Superprof – CS & Math Teacher
  - 2Peerfect – Data Engineer (EdTech, GenAI chatbot)
  - Mentorness – Data Analyst (hospitality client, remote)
- Each item includes:
  - Place, period
  - Bullet points focused on outcomes and responsibilities

---

### 7. Contact Section

- Left side:
  - Short text explaining how you like to collaborate
  - What kind of contexts you’re interested in (data platforms, GenAI, automation)
- Right side (console-style contact card):
  - Email, location, languages
  - Social links with styled social pills
  - “Send me an email” button with pre-filled subject
- Bottom: **Contact value pipeline**
  - Visual “Your idea → Data & AI design → Delivery → Long-term impact”
  - Animated glowing particle moving along the line
  - Caption explaining how you take ideas to production-ready systems.

---

### 8. Theming & UX

- **Dark / light theme toggle** (stored in `localStorage`)
- Sticky header with:
  - Logo (initials)
  - Role tagline
  - Navigation switching between full-screen “views”
- Each tab (`Hero`, `About`, `Skills`, `Journey`, `Projects`, `Experience`, `Contact`) appears as a **separate dashboard-like screen** with smooth transitions.

---

## 📁 Project Structure (simplified)

```bash
├── src
│   ├── assets
│   │   ├── YASSINEOUAHMANE.png
│   │   ├── project-data-platform.png
│   │   ├── project-streaming.png
│   │   └── project-genai-assistant.png
│   ├── App.jsx
│   ├── main.jsx        # or main.tsx depending on setup
│   └── styles.css
├── images
│   └── my-prtfolio.png  # screenshot used in README
├── package.json
└── README.md
