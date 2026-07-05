// ═══════════════════════════════════════════════════════
// ICON SYSTEM — one hand-built, consistent line-icon set
// used everywhere: SVG canvas nodes, tooltips, modal, career
// cards, and the comparison table. Single source of truth.
// ═══════════════════════════════════════════════════════
const ICONS = {
  database: [["ellipse", { cx: 12, cy: 5, rx: 7, ry: 2.6 }], ["path", { d: "M5 5 L5 19 A7 2.6 0 0 0 19 19 L19 5" }], ["path", { d: "M5 12 A7 2.6 0 0 0 19 12" }]],
  box:      [["path", { d: "M4 7 L12 3 L20 7 L12 11 Z" }], ["path", { d: "M4 7 L4 17 L12 21 L20 17 L20 7" }], ["path", { d: "M12 11 L12 21" }]],
  plug:     [["path", { d: "M9 3 L9 8" }], ["path", { d: "M15 3 L15 8" }], ["rect", { x: 6, y: 8, width: 12, height: 7, rx: 2 }], ["path", { d: "M12 15 L12 21" }]],
  globe:    [["circle", { cx: 12, cy: 12, r: 9 }], ["path", { d: "M3 12 L21 12" }], ["path", { d: "M12 3 C16 7 16 17 12 21 C8 17 8 7 12 3 Z" }]],
  users:    [["circle", { cx: 9, cy: 8, r: 3.2 }], ["path", { d: "M3.5 20 C3.5 15.5 6 13.5 9 13.5 C12 13.5 14.5 15.5 14.5 20" }], ["circle", { cx: 17, cy: 9, r: 2.6 }], ["path", { d: "M14.5 14 C17.8 14 20.5 16.3 20.5 20" }]],
  card:     [["rect", { x: 3, y: 6, width: 18, height: 13, rx: 2 }], ["path", { d: "M3 10.5 L21 10.5" }], ["path", { d: "M6.5 15 L10.5 15" }]],
  factory:  [["path", { d: "M3 21 L3 11 L9 14 L9 11 L15 14 L15 8 L21 8 L21 21 Z" }], ["path", { d: "M6 21 L6 17" }], ["path", { d: "M12 21 L12 17" }], ["path", { d: "M18 21 L18 17" }]],
  grid:     [["rect", { x: 3, y: 3, width: 8, height: 8, rx: 1.4 }], ["rect", { x: 13, y: 3, width: 8, height: 8, rx: 1.4 }], ["rect", { x: 3, y: 13, width: 8, height: 8, rx: 1.4 }], ["rect", { x: 13, y: 13, width: 8, height: 8, rx: 1.4 }]],
  bolt:     [["path", { d: "M13 2 L4 14 L11 14 L10 22 L20 9 L13 9 Z" }]],
  layers:   [["path", { d: "M12 3 L21 8 L12 13 L3 8 Z" }], ["path", { d: "M3 13 L12 18 L21 13" }], ["path", { d: "M3 17.5 L12 22.5 L21 17.5" }]],
  blueprint:[["circle", { cx: 12, cy: 12, r: 2.2 }], ["path", { d: "M12 2 L12 6" }], ["path", { d: "M12 18 L12 22" }], ["path", { d: "M2 12 L6 12" }], ["path", { d: "M18 12 L22 12" }], ["path", { d: "M5 5 L8.5 8.5" }], ["path", { d: "M15.5 15.5 L19 19" }], ["path", { d: "M19 5 L15.5 8.5" }], ["path", { d: "M8.5 15.5 L5 19" }]],
  wrench:   [["path", { d: "M14.7 6.3 A4 4 0 1 1 9.3 11.7 L3 18 L6 21 L12.3 14.7 A4 4 0 0 1 17.7 9.3 L21 6 L18 3 Z" }]],
  funnel:   [["path", { d: "M3 4 L21 4 L14 13 L14 20 L10 22 L10 13 Z" }]],
  trendUp:  [["path", { d: "M3 17 L9 11 L13 15 L21 6" }], ["path", { d: "M15 6 L21 6 L21 12" }]],
  barChart: [["path", { d: "M5 21 L5 13" }], ["path", { d: "M12 21 L12 8" }], ["path", { d: "M19 21 L19 3" }]],
  flask:    [["path", { d: "M10 3 L10 9 L4.5 19 A2 2 0 0 0 6.3 22 L17.7 22 A2 2 0 0 0 19.5 19 L14 9 L14 3" }], ["path", { d: "M9 3 L15 3" }], ["path", { d: "M7.5 15 L16.5 15" }]],
  cog:      [["circle", { cx: 12, cy: 12, r: 3.2 }], ["path", { d: "M12 2 L12 5" }], ["path", { d: "M12 19 L12 22" }], ["path", { d: "M2 12 L5 12" }], ["path", { d: "M19 12 L22 12" }], ["path", { d: "M4.9 4.9 L7 7" }], ["path", { d: "M17 17 L19.1 19.1" }], ["path", { d: "M19.1 4.9 L17 7" }], ["path", { d: "M7 17 L4.9 19.1" }]],
  spark:    [["path", { d: "M12 2 L14 9 L21 11 L14 13 L12 20 L10 13 L3 11 L10 9 Z" }]],
  briefcase:[["rect", { x: 3, y: 8, width: 18, height: 12, rx: 2 }], ["path", { d: "M8 8 L8 5.5 A1.5 1.5 0 0 1 9.5 4 L14.5 4 A1.5 1.5 0 0 1 16 5.5 L16 8" }], ["path", { d: "M3 13 L21 13" }]],
  building: [["rect", { x: 5, y: 3, width: 14, height: 18, rx: 1 }], ["rect", { x: 8, y: 6, width: 2.5, height: 2.5 }], ["rect", { x: 13.5, y: 6, width: 2.5, height: 2.5 }], ["rect", { x: 8, y: 11, width: 2.5, height: 2.5 }], ["rect", { x: 13.5, y: 11, width: 2.5, height: 2.5 }], ["rect", { x: 9.5, y: 16, width: 5, height: 5 }]],
  target:   [["circle", { cx: 12, cy: 12, r: 9 }], ["circle", { cx: 12, cy: 12, r: 5 }], ["circle", { cx: 12, cy: 12, r: 1.4 }]],
  book:     [["path", { d: "M12 6 C10 4.5 6.5 4 4 4.5 L4 19 C6.5 18.5 10 19 12 20.5 C14 19 17.5 18.5 20 19 L20 4.5 C17.5 4 14 4.5 12 6 Z" }], ["path", { d: "M12 6 L12 20.5" }]],
};
const FILL_ICONS = ["bolt", "spark"];

function iconAttrString(attrs) {
  return Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(" ");
}

// HTML-string icon (modal, tooltip, career cards, comparison table)
function iconSVGString(key, size = 20, color = "#111") {
  const defs = ICONS[key] || ICONS.database;
  const fillMode = FILL_ICONS.includes(key);
  const inner = defs.map(([tag, attrs]) => {
    const finalAttrs = fillMode
      ? { ...attrs, fill: color, stroke: "none" }
      : { ...attrs, fill: "none", stroke: color, "stroke-width": 1.7, "stroke-linecap": "round", "stroke-linejoin": "round" };
    return `<${tag} ${iconAttrString(finalAttrs)} />`;
  }).join("");
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${inner}</svg>`;
}

// Native SVG-DOM icon (used inside the ecosystem canvas, which is real SVG)
function buildIconGroup(key, x, y, size, color) {
  const defs = ICONS[key] || ICONS.database;
  const fillMode = FILL_ICONS.includes(key);
  const g = svgEl("g", { transform: `translate(${x},${y}) scale(${size / 24})` });
  defs.forEach(([tag, attrs]) => {
    const finalAttrs = fillMode
      ? { ...attrs, fill: color, stroke: "none" }
      : { ...attrs, fill: "none", stroke: color, "stroke-width": 1.7, "stroke-linecap": "round", "stroke-linejoin": "round" };
    g.appendChild(svgEl(tag, finalAttrs));
  });
  return g;
}

const NODE_ICON_MAP = {
  sql: "database", nosql: "box", apis: "plug", webapps: "globe", crm: "users",
  payments: "card", vendors: "factory", sheets: "grid",
  pipeline: "bolt", bronze: "layers", silver: "layers", gold: "layers",
  architect: "blueprint", engineer: "wrench", ae: "funnel",
  analyst: "trendUp", bi: "barChart", scientist: "flask", ml: "cog", ai: "spark",
  knowledge: "book", managers: "briefcase", ops: "building", predictions: "target", aiproducts: "spark",
};

// ═══════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════
const ROLE_DATA = {
  architect: {
    title: "Data Architect", icon: "blueprint", color: "#0f766e",
    question: "How should our data be structured?",
    what: "Designs the blueprint of the entire data ecosystem — how data is stored, organized, governed, and secured across the company.",
    why: "Without a good architect, data becomes a chaotic mess that is expensive to maintain and impossible to trust.",
    example: "Designing the three-layer lakehouse (Bronze → Silver → Gold) that all other teams depend on.",
    output: "Data Architecture Blueprints",
    responsibilities: ["Data Architecture", "Data Modeling", "Governance", "Security", "Standards", "Platform Design"],
    skills: ["SQL", "Data Modeling", "Cloud Concepts", "Architecture Thinking", "Security", "Governance"],
    tools: ["dbt", "Draw.io", "Terraform", "Snowflake", "Databricks", "AWS/GCP/Azure"],
    hiresAt: "Banks, tech companies, large enterprises, consulting firms",
    salaryRange: "₹18–50 LPA (India) · $120–200K (US)",
    typicalDay: [
      { label: "Architecture Design", pct: 35, color: "#0f766e" },
      { label: "Stakeholder Meetings", pct: 25, color: "#0d9488" },
      { label: "Documentation", pct: 25, color: "#14b8a6" },
      { label: "Code Review", pct: 15, color: "#5eead4" },
    ],
    careerPath: "Data Analyst / Engineer → Senior Engineer → Data Architect → Chief Data Officer",
    learningPath: ["SQL Mastery", "Cloud Fundamentals", "Data Modeling", "System Design", "Cloud Architecture Cert"],
    fit: "You think in systems and want to design the blueprint everyone else builds on.",
  },
  engineer: {
    title: "Data Engineer", icon: "wrench", color: "#6366f1",
    question: "How do we move data reliably from source to warehouse?",
    what: "Builds and maintains the pipelines that ingest data from source systems and land it in the Bronze and Silver layers.",
    why: "Without data engineers, there is no reliable, up-to-date data for anyone downstream to work with.",
    example: "Writing an Airflow DAG that pulls transactions from a payment API every hour, validates them, and loads them into the Bronze layer.",
    output: "Reliable Data Pipelines",
    responsibilities: ["ETL / ELT", "Data Pipelines", "Data Quality", "Orchestration", "Data Integration"],
    skills: ["SQL", "Python", "Spark", "Airflow", "Cloud Platforms", "Docker"],
    tools: ["Apache Airflow", "Apache Spark", "Kafka", "Snowflake", "Databricks", "Cloud Storage"],
    hiresAt: "Every tech company, startups, banks, e-commerce",
    salaryRange: "₹12–40 LPA (India) · $100–170K (US)",
    typicalDay: [
      { label: "Building Pipelines", pct: 50, color: "#6366f1" },
      { label: "Debugging Issues", pct: 30, color: "#818cf8" },
      { label: "Cloud Operations", pct: 20, color: "#a5b4fc" },
    ],
    careerPath: "Junior DE → Senior DE → Lead DE → Data Architect / Engineering Manager",
    learningPath: ["Python", "SQL", "Apache Airflow", "Spark", "Cloud (AWS/GCP)"],
    fit: "You like writing code that moves and shapes data reliably, largely behind the scenes.",
  },
  ae: {
    title: "Analytics Engineer", icon: "funnel", color: "#0ea5e9",
    question: "How do we turn raw pipelines into trustworthy business models?",
    what: "Transforms cleaned Silver-layer data into modeled, tested, and documented Gold-layer tables using SQL and dbt — the layer between raw pipelines and business-ready data.",
    why: "Data Engineers move data. Analysts and Scientists need it pre-modeled, tested, and documented — otherwise every team rebuilds the same business logic differently and numbers stop matching.",
    example: "Building a dbt model that joins Silver-layer orders and customers into a certified fct_orders table, with automated tests for null values and duplicate keys.",
    output: "Modeled & Tested Datasets",
    responsibilities: ["Data Modeling", "dbt Development", "Data Testing", "Documentation", "Silver-to-Gold Transformation"],
    skills: ["SQL", "dbt", "Data Modeling", "Git", "Data Testing", "Stakeholder Communication"],
    tools: ["dbt", "Snowflake / BigQuery", "Git", "dbt Docs", "Looker"],
    hiresAt: "Modern data teams, SaaS companies, e-commerce, scale-ups",
    salaryRange: "₹10–30 LPA (India) · $90–150K (US)",
    typicalDay: [
      { label: "dbt Modeling", pct: 45, color: "#0ea5e9" },
      { label: "Testing & QA", pct: 25, color: "#38bdf8" },
      { label: "Stakeholder Requests", pct: 20, color: "#7dd3fc" },
      { label: "Documentation", pct: 10, color: "#bae6fd" },
    ],
    careerPath: "Data Analyst → Analytics Engineer → Senior Analytics Engineer → Analytics Lead / Data Architect",
    learningPath: ["SQL Mastery", "dbt Fundamentals", "Dimensional Modeling", "Git & Version Control", "Testing & Documentation"],
    fit: "You like SQL and structure, and want to build the reusable models everyone else queries — not just answer one-off questions.",
  },
  analyst: {
    title: "Data Analyst", icon: "trendUp", color: "#0891b2",
    question: "What happened, and why?",
    what: "Explores data to answer business questions, identify trends, and deliver actionable reports to stakeholders.",
    why: "Decisions based on gut feeling fail. Analysts transform raw numbers into clear narratives that drive strategy.",
    example: "Analysing why sales dropped 20% in Q3 by drilling into product, region, and channel data.",
    output: "Reports & Insights",
    responsibilities: ["Business Analysis", "SQL Queries", "Reporting", "Root Cause Analysis", "Stakeholder Presentations"],
    skills: ["SQL", "Excel", "Python", "Power BI", "Tableau", "Statistics"],
    tools: ["Excel", "Power BI", "Tableau", "SQL", "Python (pandas)", "Google Sheets"],
    hiresAt: "Every industry — retail, banking, healthcare, startups, consulting",
    salaryRange: "₹6–20 LPA (India) · $65–110K (US)",
    typicalDay: [
      { label: "SQL Queries", pct: 40, color: "#0891b2" },
      { label: "Dashboarding", pct: 30, color: "#06b6d4" },
      { label: "Meetings", pct: 20, color: "#22d3ee" },
      { label: "Documentation", pct: 10, color: "#67e8f9" },
    ],
    careerPath: "Junior Analyst → Senior Analyst → Analytics Manager → Head of Analytics / Product Manager",
    learningPath: ["Excel + SQL basics", "Power BI or Tableau", "Python (pandas)", "Statistics", "Business Communication"],
    fit: "You enjoy digging into 'why' something happened and explaining it clearly to non-technical people.",
  },
  bi: {
    title: "BI Developer", icon: "barChart", color: "#f59e0b",
    question: "How are we performing right now?",
    what: "Designs and builds interactive dashboards and automated reports that operations teams check every single day.",
    why: "Managers can't fly blind. BI developers make live business performance permanently visible.",
    example: "Building a real-time sales dashboard in Power BI that the CEO checks every morning.",
    output: "Dashboards & KPI Systems",
    responsibilities: ["Dashboard Development", "KPI Tracking", "Reporting Automation", "Data Modeling", "Training Users"],
    skills: ["Power BI", "Tableau", "SQL", "DAX", "Data Modeling", "Excel"],
    tools: ["Power BI", "Tableau", "Looker", "SQL Server", "DAX Studio", "Excel"],
    hiresAt: "Corporates, banks, retail chains, government, consulting",
    salaryRange: "₹8–22 LPA (India) · $75–120K (US)",
    typicalDay: [
      { label: "Dashboard Building", pct: 45, color: "#f59e0b" },
      { label: "SQL & Data Prep", pct: 25, color: "#fbbf24" },
      { label: "Stakeholder Reviews", pct: 20, color: "#fcd34d" },
      { label: "Training Users", pct: 10, color: "#fde68a" },
    ],
    careerPath: "Junior BI Dev → Senior BI Dev → BI Lead → Analytics Manager / Data Architect",
    learningPath: ["SQL", "Power BI / Tableau", "DAX", "Data Modeling", "Excel Advanced"],
    fit: "You like building the dashboards people check every single day, and making performance visible.",
  },
  scientist: {
    title: "Data Scientist", icon: "flask", color: "#10b981",
    question: "What will happen next?",
    what: "Uses statistics, machine learning, and experimentation to build predictive models and uncover hidden patterns.",
    why: "Historical analysis tells you what happened. Data scientists predict the future to give companies a competitive edge.",
    example: "Building a churn prediction model that identifies customers likely to cancel their subscription, ahead of time.",
    output: "Predictions & Statistical Insights",
    responsibilities: ["Machine Learning", "Forecasting", "Statistical Analysis", "Feature Engineering", "Experimentation & A/B Testing"],
    skills: ["Python", "Statistics", "Machine Learning", "Feature Engineering", "Experimentation"],
    tools: ["Python (scikit-learn)", "TensorFlow / PyTorch", "Jupyter", "SQL", "Spark", "MLflow"],
    hiresAt: "Tech companies, fintech, healthcare, e-commerce, research labs",
    salaryRange: "₹12–40 LPA (India) · $100–175K (US)",
    typicalDay: [
      { label: "Feature Engineering", pct: 30, color: "#10b981" },
      { label: "Model Training", pct: 30, color: "#34d399" },
      { label: "Data Exploration", pct: 25, color: "#6ee7b7" },
      { label: "Stakeholder Comms", pct: 15, color: "#a7f3d0" },
    ],
    careerPath: "Junior DS → Senior DS → Lead DS → Principal Scientist / ML Engineering Manager",
    learningPath: ["Python + pandas", "Statistics & Probability", "ML (scikit-learn)", "Deep Learning", "Experiment tracking"],
    fit: "You're drawn to statistics and prediction — you want to know what happens next, not just what happened.",
  },
  ml: {
    title: "ML Engineer", icon: "cog", color: "#ef4444",
    question: "How do we serve predictions to millions of users?",
    what: "Takes a Data Scientist's model and deploys it to production where it serves real-time predictions reliably at scale.",
    why: "A model stuck in a notebook is worthless. ML Engineers bridge the gap between research and real-world impact.",
    example: "Deploying a fraud detection model as an API that scores thousands of transactions per second with high uptime.",
    output: "Production ML Systems",
    responsibilities: ["Production Deployment", "Model Serving", "Monitoring", "MLOps", "Performance Optimization"],
    skills: ["Python", "Docker", "Kubernetes", "MLOps", "Cloud Platforms", "APIs"],
    tools: ["Docker", "Kubernetes", "MLflow", "FastAPI", "Cloud ML Services", "Monitoring Tools"],
    hiresAt: "Big tech, fintech, autonomous vehicles, healthcare AI, gaming",
    salaryRange: "₹18–50 LPA (India) · $130–200K (US)",
    typicalDay: [
      { label: "Pipeline Engineering", pct: 50, color: "#ef4444" },
      { label: "Debugging & Monitoring", pct: 30, color: "#f87171" },
      { label: "Cloud Operations", pct: 20, color: "#fca5a5" },
    ],
    careerPath: "Data Engineer / Backend Dev → ML Engineer → Senior MLE → ML Platform Lead / Engineering Manager",
    learningPath: ["Python", "Docker + Kubernetes", "MLflow", "FastAPI", "Cloud ML services"],
    fit: "You want to see models actually running in production, serving real users at scale.",
  },
  ai: {
    title: "AI Engineer", icon: "spark", color: "#7c3aed",
    question: "What should we do next — powered by AI?",
    what: "Builds LLM-powered applications, RAG pipelines, and autonomous agents that transform how businesses operate.",
    why: "LLMs alone aren't products. AI Engineers connect them to company data, workflows, and users to create real business value.",
    example: "Building a RAG-powered support agent that answers questions using internal documentation, reducing support tickets.",
    output: "AI Copilots, Chatbots & Agents",
    responsibilities: ["RAG Pipeline Development", "Prompt Engineering", "LLM Application Development", "Agent Orchestration", "Evaluation & Guardrails"],
    skills: ["Python", "APIs", "Vector Databases", "Prompt Engineering", "RAG", "Agent Design"],
    tools: ["LangChain / LlamaIndex", "LLM APIs", "Vector Databases", "FastAPI", "Evaluation Frameworks"],
    hiresAt: "Every major tech company, startups, consulting, healthcare, legal tech",
    salaryRange: "₹20–60 LPA (India) · $140–220K (US)",
    typicalDay: [
      { label: "Building AI Apps", pct: 40, color: "#7c3aed" },
      { label: "RAG & Agent Dev", pct: 30, color: "#a855f7" },
      { label: "Testing & Eval", pct: 20, color: "#c084fc" },
      { label: "Monitoring", pct: 10, color: "#d8b4fe" },
    ],
    careerPath: "Software Dev / Data Scientist → AI Engineer → Senior AI Eng → AI Architect / Head of AI",
    learningPath: ["Python + APIs", "Prompt Engineering", "Vector DBs", "RAG patterns", "Agent frameworks"],
    fit: "You want to build the next generation of AI-powered products, not just use existing tools.",
  },
};

// Order roles appear in the comparison table / role grid
const ROLE_ORDER = ["architect", "engineer", "ae", "analyst", "bi", "scientist", "ml", "ai"];

const STEPS = [
  { id: 1,  key: "sources",   label: "Sources",      color: "#6366f1", stage: "Sources" },
  { id: 2,  key: "pipeline",  label: "Pipeline",     color: "#8b5cf6", stage: "Platform" },
  { id: 3,  key: "bronze",    label: "Bronze",       color: "#b45309", stage: "Platform" },
  { id: 4,  key: "silver",    label: "Silver",       color: "#64748b", stage: "Platform" },
  { id: 5,  key: "gold",      label: "Gold",         color: "#d97706", stage: "Platform" },
  { id: 6,  key: "architect", label: "Architect",    color: "#0f766e", stage: "Engineering" },
  { id: 7,  key: "engineer",  label: "Engineer",     color: "#6366f1", stage: "Engineering" },
  { id: 8,  key: "ae",        label: "Analytics Eng",color: "#0ea5e9", stage: "Engineering" },
  { id: 9,  key: "analyst",   label: "Analyst",      color: "#0891b2", stage: "Analytics" },
  { id: 10, key: "bi",        label: "BI Dev",       color: "#f59e0b", stage: "Analytics" },
  { id: 11, key: "scientist", label: "Scientist",    color: "#10b981", stage: "Analytics" },
  { id: 12, key: "ml",        label: "ML Eng",       color: "#ef4444", stage: "AI" },
  { id: 13, key: "ai",        label: "AI Eng",       color: "#7c3aed", stage: "AI" },
  { id: 14, key: "impact",    label: "Impact",       color: "#059669", stage: "Impact" },
  { id: 15, key: "careers",   label: "Careers",      color: "#ec4899", stage: "Careers" },
];

const STAGES = ["Sources", "Platform", "Engineering", "Analytics", "AI", "Impact", "Careers"];

const STEP_STORY = {
  1:  { what: "Business data lives in dozens of disconnected systems — databases, APIs, CRM tools, payment platforms, and spreadsheets.", why: "Every click, transaction, and interaction generates data. The challenge is collecting it all reliably.", example: "An e-commerce company tracks orders in MySQL, customer profiles in MongoDB, and reviews in a spreadsheet.", next: "All of this data needs to flow into one central place — the Pipeline." },
  2:  { what: "An automated pipeline continuously ingests data from all sources using ETL/ELT processes.", why: "Manual data copying is error-prone and slow. Automated pipelines run 24/7 without human intervention.", example: "Airflow DAGs pull transactions every 15 minutes, trigger on new CRM updates, and validate data quality before loading.", next: "Data lands first in the Bronze Layer, completely raw." },
  3:  { what: "The Bronze Layer stores raw, unmodified data exactly as it arrived from source systems.", why: "We never modify the original data. If something breaks downstream, we can always re-process from the raw copy.", example: "A payment event lands in Bronze with all original fields, timestamps, and even duplicate records intact.", next: "Bronze data moves to Silver for cleaning and standardisation." },
  4:  { what: "The Silver Layer cleans, deduplicates, validates, and standardises data from Bronze.", why: "Raw data is messy — duplicates, nulls, inconsistent formats. Silver makes it trustworthy and consistent.", example: "Customer names are standardised, phone numbers formatted, duplicate orders removed, currencies converted to USD.", next: "Clean Silver data still needs to be modeled into business-ready tables — that's the Gold Layer." },
  5:  { what: "The Gold Layer contains curated, business-ready datasets, KPIs, and dimensional models.", why: "Analysts, BI developers, and data scientists need data in the right shape to do their jobs efficiently.", example: "A Sales_Daily_Summary table with revenue by region, product, and channel — pre-joined, pre-aggregated, ready to query.", next: "Now let's meet the people who design and build this platform." },
  6:  { what: "The Data Architect designs the overall blueprint of the data platform that everyone else builds on.", why: "Without a clear architectural design, data platforms become unmanageable 'data swamps' within a couple of years.", example: "Deciding to use a three-layer Lakehouse with dbt for transformations and infrastructure-as-code for provisioning.", next: "Data Engineers then build the ingestion layer the Architect designed." },
  7:  { what: "Data Engineers build and maintain the pipelines and infrastructure that move data into Bronze and Silver.", why: "Someone has to write the code that actually moves data reliably, every hour of every day.", example: "Writing Python + Airflow jobs and CI/CD pipelines for data code, so ingestion never silently breaks.", next: "With reliable raw data flowing, Analytics Engineers turn it into trustworthy business models." },
  8:  { what: "The Analytics Engineer transforms Silver-layer data into modeled, tested, business-ready Gold tables using SQL and dbt.", why: "Without this layer, every analyst and scientist rewrites the same joins and business logic differently — creating numbers that don't match across teams.", example: "Building a dbt model that certifies one shared definition of 'active customer' that every dashboard and report reuses.", next: "With trusted, modeled data in place, Data Analysts can query it directly." },
  9:  { what: "Data Analysts query the Gold Layer to answer business questions and produce reports.", why: "Gut-feel decisions fail at scale. Analysts translate data into clear business narratives that drive strategy.", example: "Analysing customer data to find that users who complete onboarding convert several times more often than those who don't.", next: "BI Developers take those insights and make them permanently visible on dashboards." },
  10: { what: "BI Developers build interactive dashboards and automated reports that teams check daily.", why: "Analysts answer one-time questions. BI developers create the 'always-on' performance visibility that operations needs.", example: "A real-time sales dashboard that shows revenue vs target, by region, refreshed continuously and used by managers daily.", next: "Data Scientists go deeper — using the same data to predict the future." },
  11: { what: "Data Scientists build machine learning models to predict future outcomes from historical patterns.", why: "Knowing what happened helps. Knowing what will happen next gives a real competitive advantage.", example: "Training a churn model on historical customer behaviour that flags at-risk customers well before they cancel.", next: "ML Engineers take those models and deploy them to production." },
  12: { what: "ML Engineers deploy Data Scientists' models to production systems that serve real-time predictions at scale.", why: "A model in a notebook doesn't help a single customer. ML Engineers make predictions part of the actual product.", example: "Wrapping a churn model in an API deployed on a container platform, scoring the customer base automatically every night.", next: "AI Engineers use LLMs and company knowledge to build the next generation of AI products." },
  13: { what: "AI Engineers build LLM-powered applications, RAG systems, and autonomous agents using company data and knowledge.", why: "LLMs alone are generic. AI Engineers ground them in company-specific knowledge to create genuinely useful products.", example: "Building a RAG chatbot that answers policy questions by searching internal documents, reducing routine support requests.", next: "All these outputs reach the business and create measurable impact." },
  14: { what: "Every role's output reaches the business in a different form — reports, dashboards, predictions, and AI products.", why: "The entire data ecosystem exists to help people make better decisions faster.", example: "A manager checks their team's KPI dashboard, gets a churn alert, and asks an AI copilot to draft a retention email — all in one morning.", next: "Now let's explore which career path is right for you." },
  15: { what: "Every role has a clear, learnable skills path from college to corporate.", why: "None of these roles require a specific degree. They require specific, teachable skills you can start building today.", example: "A student who learns Excel + SQL becomes a Data Analyst. That analyst who learns dbt becomes an Analytics Engineer, and who learns Python + Airflow becomes a Data Engineer.", next: "You've completed the full data & AI ecosystem tour." },
};

const CAREERS = [
  { role: "Data Analyst",     skills: "Excel + SQL",           color: "#0891b2", icon: "trendUp",  key: "analyst" },
  { role: "Analytics Eng.",   skills: "SQL + dbt",             color: "#0ea5e9", icon: "funnel",   key: "ae" },
  { role: "Data Engineer",    skills: "SQL + Python + Spark",  color: "#6366f1", icon: "wrench",   key: "engineer" },
  { role: "BI Developer",     skills: "Power BI + DAX",        color: "#f59e0b", icon: "barChart", key: "bi" },
  { role: "Data Scientist",   skills: "Statistics + ML",       color: "#10b981", icon: "flask",    key: "scientist" },
  { role: "ML Engineer",      skills: "MLOps + Cloud",         color: "#ef4444", icon: "cog",      key: "ml" },
  { role: "AI Engineer",      skills: "LLMs + RAG + Agents",   color: "#7c3aed", icon: "spark",    key: "ai" },
];

const STEP_COLORS = {
  1: "#6366f1", 2: "#8b5cf6", 3: "#b45309", 4: "#64748b", 5: "#d97706",
  6: "#0f766e", 7: "#6366f1", 8: "#0ea5e9", 9: "#0891b2", 10: "#f59e0b",
  11: "#10b981", 12: "#ef4444", 13: "#7c3aed", 14: "#059669", 15: "#ec4899",
};

// ── Node dimensions ──
const NH = 62;
const NW = (n) => (n.wide ? 138 : 100);
const nc = (n) => ({ cx: n.x + NW(n) / 2, cy: n.y + NH / 2 });

const NODES = {
  sql:        { id: "sql",        label: "SQL\nDatabases",       x: 14,  y: 150, step: 1 },
  nosql:      { id: "nosql",      label: "NoSQL\nDatabases",     x: 14,  y: 220, step: 1 },
  apis:       { id: "apis",       label: "APIs",                 x: 14,  y: 290, step: 1 },
  webapps:    { id: "webapps",    label: "Web Apps",             x: 14,  y: 360, step: 1 },
  crm:        { id: "crm",        label: "CRM\nSystems",         x: 14,  y: 430, step: 1 },
  payments:   { id: "payments",   label: "Payments",             x: 14,  y: 500, step: 1 },
  vendors:    { id: "vendors",    label: "Vendors",               x: 14,  y: 570, step: 1 },
  sheets:     { id: "sheets",     label: "Spreadsheets",         x: 14,  y: 640, step: 1 },

  pipeline:   { id: "pipeline",   label: "Automated\nIngestion", x: 170, y: 396, step: 2, wide: true },
  bronze:     { id: "bronze",     label: "Bronze\nRaw Data",     x: 350, y: 396, step: 3, wide: true },
  silver:     { id: "silver",     label: "Silver\nCleaned",      x: 530, y: 396, step: 4, wide: true },
  gold:       { id: "gold",       label: "Gold Layer\nBiz Ready",x: 710, y: 396, step: 5, wide: true },

  engineer:   { id: "engineer",   label: "Data\nEngineer",       x: 250, y: 520, step: 7, wide: true },
  architect:  { id: "architect",  label: "Data\nArchitect",      x: 430, y: 520, step: 6, wide: true },
  ae:         { id: "ae",         label: "Analytics\nEngineer",  x: 610, y: 520, step: 8, wide: true },
  knowledge:  { id: "knowledge",  label: "Knowledge\nSources",   x: 610, y: 650, step: 13, wide: true },

  analyst:    { id: "analyst",    label: "Data Analyst\nReports",    x: 880, y: 130, step: 9,  wide: true },
  bi:         { id: "bi",         label: "BI Developer\nDashboards", x: 880, y: 230, step: 10, wide: true },
  scientist:  { id: "scientist",  label: "Data Scientist\nML",       x: 880, y: 330, step: 11, wide: true },
  ml:         { id: "ml",         label: "ML Engineer\nMLOps",       x: 880, y: 430, step: 12, wide: true },
  ai:         { id: "ai",         label: "AI Engineer\nAgents",      x: 880, y: 530, step: 13, wide: true },

  managers:    { id: "managers",    label: "Managers &\nExecs",   x: 1050, y: 130, step: 14, wide: true },
  ops:         { id: "ops",         label: "Operations\nTeams",   x: 1050, y: 230, step: 14, wide: true },
  predictions: { id: "predictions", label: "Prediction\nProducts",x: 1050, y: 350, step: 14, wide: true },
  aiproducts:  { id: "aiproducts",  label: "AI Copilots\n& Agents",x: 1050, y: 470, step: 14, wide: true },
};

const PATHS = [
  { id: "p1",  from: "sql",       to: "pipeline",  color: "#6366f1", step: 2 },
  { id: "p2",  from: "nosql",     to: "pipeline",  color: "#6366f1", step: 2 },
  { id: "p3",  from: "apis",      to: "pipeline",  color: "#8b5cf6", step: 2 },
  { id: "p4",  from: "webapps",   to: "pipeline",  color: "#8b5cf6", step: 2 },
  { id: "p5",  from: "crm",       to: "pipeline",  color: "#6366f1", step: 2 },
  { id: "p6",  from: "payments",  to: "pipeline",  color: "#8b5cf6", step: 2 },
  { id: "p7",  from: "vendors",   to: "pipeline",  color: "#6366f1", step: 2 },
  { id: "p8",  from: "sheets",    to: "pipeline",  color: "#8b5cf6", step: 2 },
  { id: "p9",  from: "pipeline",  to: "bronze",    color: "#b45309", step: 3 },
  { id: "p10", from: "bronze",    to: "silver",    color: "#64748b", step: 4 },
  { id: "p11", from: "silver",    to: "gold",      color: "#d97706", step: 5 },
  { id: "p12", from: "architect", to: "bronze",    color: "#0f766e", step: 6 },
  { id: "p13", from: "engineer",  to: "pipeline",  color: "#6366f1", step: 7 },
  { id: "p13b",from: "silver",    to: "ae",        color: "#0ea5e9", step: 8 },
  { id: "p13c",from: "ae",        to: "gold",      color: "#0ea5e9", step: 8 },
  { id: "p14", from: "gold",      to: "analyst",   color: "#0891b2", step: 9 },
  { id: "p15", from: "gold",      to: "bi",        color: "#f59e0b", step: 10 },
  { id: "p16", from: "gold",      to: "scientist", color: "#10b981", step: 11 },
  { id: "p17", from: "scientist", to: "ml",        color: "#ef4444", step: 12 },
  { id: "p18", from: "gold",      to: "ai",        color: "#7c3aed", step: 13 },
  { id: "p19", from: "knowledge", to: "ai",        color: "#7c3aed", step: 13 },
  { id: "p20", from: "analyst",   to: "managers",     color: "#059669", step: 14 },
  { id: "p21", from: "bi",        to: "ops",          color: "#059669", step: 14 },
  { id: "p22", from: "scientist", to: "predictions",  color: "#059669", step: 14 },
  { id: "p23", from: "ml",        to: "predictions",  color: "#ef4444", step: 14 },
  { id: "p24", from: "ai",        to: "aiproducts",   color: "#7c3aed", step: 14 },
];

// ═══════════════════════════════════════════════════════
// SVG HELPERS
// ═══════════════════════════════════════════════════════
const SVG_NS = "http://www.w3.org/2000/svg";

function svgEl(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

function buildPath(a, b) {
  const f = nc(a), t = nc(b);
  const mx = (f.cx + t.cx) / 2;
  return `M ${f.cx} ${f.cy} C ${mx} ${f.cy}, ${mx} ${t.cy}, ${t.cx} ${t.cy}`;
}

let particleCounter = 0;
const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const supportsHover = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════
let state = { step: 0, autoPlay: false, autoTimer: null, selectedCareer: null, activeTab: "story" };
const TOTAL = STEPS.length;

// ═══════════════════════════════════════════════════════
// RENDER — PROGRESS BAR
// ═══════════════════════════════════════════════════════
function renderProgressBar() {
  const bar = document.getElementById("progress-bar");
  bar.innerHTML = "";
  const curStage = state.step > 0 ? STEPS[state.step - 1]?.stage : null;

  STAGES.forEach((stage, i) => {
    const stepsInStage = STEPS.filter(s => s.stage === stage);
    const stageColor = stepsInStage[0]?.color || "#6366f1";
    const isActive = stage === curStage;
    const stageIdx = STAGES.indexOf(stage);
    const curIdx = curStage ? STAGES.indexOf(curStage) : -1;
    const isDone = curIdx > stageIdx;

    const wrap = document.createElement("div");
    wrap.className = "prog-stage";
    const inner = document.createElement("div");
    inner.className = "prog-inner";
    const dot = document.createElement("div");
    dot.className = "prog-dot" + (isActive ? " active" : "");
    dot.style.background = isActive ? stageColor : isDone ? stageColor : "#e2e8f0";
    dot.style.opacity = isDone ? "0.5" : "1";
    if (isActive) dot.style.setProperty("--stage-color", stageColor + "30");
    const label = document.createElement("div");
    label.className = "prog-label";
    label.textContent = stage;
    label.style.fontWeight = isActive ? "800" : "500";
    label.style.color = isActive ? stageColor : isDone ? "#94a3b8" : "#cbd5e1";
    inner.appendChild(dot);
    inner.appendChild(label);
    wrap.appendChild(inner);
    if (i < STAGES.length - 1) {
      const conn = document.createElement("div");
      conn.className = "prog-connector";
      conn.style.background = isDone ? "#cbd5e1" : "#e2e8f0";
      wrap.appendChild(conn);
    }
    bar.appendChild(wrap);
  });
}

// ═══════════════════════════════════════════════════════
// RENDER — SVG
// ═══════════════════════════════════════════════════════
function renderSVG() {
  const s = state.step;
  ["svg-labels", "svg-banner", "svg-paths", "svg-particles", "svg-nodes", "svg-career-bar", "impact-glow"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = "";
  });
  renderSVGLabels(s);
  renderBanner(s);
  renderImpactGlow(s);
  renderPaths(s);
  renderNodes(s);
  renderCareerBar(s);
  renderCareerStrip(s);
}

function addText(parent, x, y, txt, attrs = {}) {
  const el = svgEl("text", { x, y, ...attrs });
  el.textContent = txt;
  parent.appendChild(el);
  return el;
}

function animateFadeIn(el) {
  if (prefersReducedMotion) { el.style.opacity = "1"; return; }
  el.style.opacity = "0";
  el.style.transition = "opacity 0.4s";
  requestAnimationFrame(() => { el.style.opacity = "1"; });
}

function renderSVGLabels(s) {
  const g = document.getElementById("svg-labels");
  const baseAttrs = { "font-size": "13", "font-weight": "800", "letter-spacing": "2", "font-family": "monospace", "fill": "#94a3b8" };

  if (s >= 1)  { const t = addText(g, 14,   112, "SOURCES",         baseAttrs); animateFadeIn(t); }
  if (s >= 2)  { const t = addText(g, 170,  372, "PIPELINE",        baseAttrs); animateFadeIn(t); }
  if (s >= 3)  { const t = addText(g, 470,  372, "LAKEHOUSE LAYERS",baseAttrs); animateFadeIn(t); }
  if (s >= 6)  { const t = addText(g, 380,  498, "BUILDERS",        baseAttrs); animateFadeIn(t); }
  if (s >= 9)  { const t = addText(g, 880,  108, "CONSUMERS",       baseAttrs); animateFadeIn(t); }
  if (s >= 14) { const t = addText(g, 1050, 108, "IMPACT",          baseAttrs); animateFadeIn(t); }

  if (s >= 6 && NODES.architect && NODES.bronze) {
    const fa = nc(NODES.architect), fb = nc(NODES.bronze);
    const t = addText(g, (fa.cx + fb.cx) / 2 - 16, fa.cy - 40, "Design ↑", { "font-size": "12", "fill": "#0f766e", "font-weight": "700", "font-family": "monospace" });
    animateFadeIn(t);
  }
  if (s >= 7 && NODES.engineer && NODES.pipeline) {
    const fa = nc(NODES.engineer), fb = nc(NODES.pipeline);
    const t = addText(g, (fa.cx + fb.cx) / 2 - 12, fa.cy - 40, "Build ↑", { "font-size": "12", "fill": "#6366f1", "font-weight": "700", "font-family": "monospace" });
    animateFadeIn(t);
  }
  if (s >= 8 && NODES.ae && NODES.silver) {
    const fa = nc(NODES.ae), fb = nc(NODES.silver);
    const t = addText(g, (fa.cx + fb.cx) / 2 - 12, fa.cy - 40, "Model ↑", { "font-size": "12", "fill": "#0ea5e9", "font-weight": "700", "font-family": "monospace" });
    animateFadeIn(t);
  }
}

function renderBanner(s) {
  if (s < 3) return;
  const g = document.getElementById("svg-banner");
  const rect = svgEl("rect", { x: 350, y: 340, width: 400, height: 26, rx: 6, fill: "#fef3c7", stroke: "#d97706", "stroke-width": 1.2 });
  const txt = addText(g, 550, 357, "AUTOMATED ENTERPRISE DATA PLATFORM", { "text-anchor": "middle", "font-size": "12", "font-weight": "800", "fill": "#92400e", "letter-spacing": "1", "font-family": "monospace" });
  g.appendChild(rect);
  g.appendChild(txt);
  animateFadeIn(g);
}

function renderImpactGlow(s) {
  if (s !== 14) return;
  const g = document.getElementById("impact-glow");
  const rect = svgEl("rect", { id: "impact-glow-rect", x: 1038, y: 108, width: 172, height: 440, rx: 10, fill: "#05966912", stroke: "#059669", "stroke-width": 2 });
  g.appendChild(rect);
}

function renderPaths(s) {
  const gPaths = document.getElementById("svg-paths");
  const gParticles = document.getElementById("svg-particles");
  const visible = PATHS.filter(p => p.step <= s);

  visible.forEach((path, i) => {
    const f = NODES[path.from], t = NODES[path.to];
    if (!f || !t) return;
    const d = buildPath(f, t);
    const isActive = path.step === s;

    const shadow = svgEl("path", { d, fill: "none", stroke: path.color, "stroke-width": isActive ? 4 : 2.2, "stroke-opacity": 0.1 });
    gPaths.appendChild(shadow);

    const main = svgEl("path", { d, fill: "none", stroke: path.color, "stroke-width": isActive ? 2.8 : 1.7, "stroke-opacity": isActive ? 0.95 : 0.5, "stroke-linecap": "round", "class": "flow-path" });
    if (isActive) main.style.filter = `drop-shadow(0 0 5px ${path.color}80)`;
    gPaths.appendChild(main);

    if (prefersReducedMotion) return;

    const uid = `pp${++particleCounter}`;
    const dur = 2.6 + (i * 0.38) % 2.2;
    const delay = (i * 0.38) % 3;
    const pDef = svgEl("path", { id: uid, d, fill: "none", stroke: "none" });
    gParticles.appendChild(pDef);

    [[5, "0.9", 0.0], [2.5, "0.5", 0.2], [1.8, "0.85", 0.08]].forEach(([r, op, dOff], ci) => {
      const circ = svgEl("circle", { r, fill: ci === 2 ? "white" : path.color, opacity: "0" });
      const anim = svgEl("animate", { attributeName: "opacity", values: `0;${op};${op};0`, dur: `${dur}s`, repeatCount: "indefinite", begin: `${(delay + dOff) % 3}s` });
      const mot = svgEl("animateMotion", { dur: `${dur}s`, repeatCount: "indefinite", begin: `${(delay + dOff) % 3}s` });
      const mpath = svgEl("mpath", {});
      mpath.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#${uid}`);
      mot.appendChild(mpath);
      circ.appendChild(anim);
      circ.appendChild(mot);
      gParticles.appendChild(circ);
    });
  });
}

function renderNodes(s) {
  const g = document.getElementById("svg-nodes");
  const visible = Object.values(NODES).filter(n => n.step <= s);

  visible.forEach(node => {
    const w = NW(node);
    const color = STEP_COLORS[node.step] || "#6366f1";
    const isActive = node.step === s;
    const lines = node.label.split("\n");
    const isRole = !!ROLE_DATA[node.id];

    const group = svgEl("g", { class: "node-g" + (isRole ? " clickable" : ""), tabindex: isRole ? "0" : "-1", role: isRole ? "button" : "presentation", "aria-label": isRole ? `${ROLE_DATA[node.id].title}: view details` : node.label.replace("\n", " ") });

    if (isActive) {
      const ring = svgEl("rect", { x: node.x - 5, y: node.y - 5, width: w + 10, height: NH + 10, rx: 14, fill: "none", stroke: color, "stroke-width": "2", class: "node-ring" });
      group.appendChild(ring);
    }

    const bg = svgEl("rect", { x: node.x, y: node.y, width: w, height: NH, rx: 10, fill: "#ffffff", stroke: color, "stroke-width": isActive ? 2.2 : 1.1 });
    if (isActive) bg.style.filter = `drop-shadow(0 0 10px ${color}50)`;
    group.appendChild(bg);

    const stripe = svgEl("rect", { x: node.x, y: node.y, width: 6, height: NH, rx: 10, fill: color });
    const stripeBottom = svgEl("rect", { x: node.x, y: node.y + NH / 2, width: 6, height: NH / 2, fill: color });
    group.appendChild(stripe);
    group.appendChild(stripeBottom);

    const iconKey = NODE_ICON_MAP[node.id] || "database";
    const iconSize = lines.length > 1 ? 18 : 20;
    const iconGroup = buildIconGroup(iconKey, node.x + 12, node.y + NH / 2 - iconSize / 2, iconSize, color);
    group.appendChild(iconGroup);

    lines.forEach((line, li) => {
      const yOff = lines.length === 1 ? node.y + NH / 2 : node.y + NH / 2 + (li - (lines.length - 1) / 2) * 15;
      addText(group, node.x + 40, yOff, line, { "font-size": lines.length > 1 ? "11" : "13", "font-weight": li === 0 ? "700" : "500", fill: li === 0 ? "#1e293b" : "#64748b", "dominant-baseline": "middle", "font-family": "system-ui,sans-serif" });
    });

    if (isRole) {
      if (supportsHover) {
        group.addEventListener("mouseenter", () => showTooltip(node.id));
        group.addEventListener("mouseleave", () => hideTooltip());
      }
      group.addEventListener("click", () => openModal(node.id));
      group.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(node.id); }
      });
    }

    if (!prefersReducedMotion) {
      group.style.opacity = "0";
      group.style.transition = "opacity 0.35s";
      requestAnimationFrame(() => { group.style.opacity = "1"; });
    }

    g.appendChild(group);
  });
}

function renderCareerBar(s) {
  if (s < 15) return;
  const g = document.getElementById("svg-career-bar");
  const barBg = svgEl("rect", { x: 10, y: 686, width: 1180, height: 56, rx: 10, fill: "#0f172a", "fill-opacity": "0.94", stroke: "#7c3aed", "stroke-width": "1.5" });
  g.appendChild(barBg);
  addText(g, 26, 703, "COLLEGE SKILLS → CORPORATE ROLES", { "fill": "#c4b5fd", "font-size": "10", "font-weight": "800", "letter-spacing": "1.5", "font-family": "monospace" });

  const perItem = 1150 / CAREERS.length;
  CAREERS.forEach((c, i) => {
    const gx = 24 + i * perItem;
    addText(g, gx, 716, c.skills, { fill: c.color, "font-size": "9.5", "font-weight": "700", "font-family": "monospace" });
    addText(g, gx, 730, `→ ${c.role}`, { fill: "#f1f5f9", "font-size": "11", "font-weight": "800", "font-family": "monospace" });
  });
  animateFadeIn(g);
}

function renderCareerStrip(s) {
  const strip = document.getElementById("career-cards-strip");
  strip.innerHTML = "";
  if (s < 15) { strip.classList.remove("visible"); return; }
  strip.classList.add("visible");

  CAREERS.forEach(c => {
    const card = document.createElement("div");
    card.className = "career-card" + (state.selectedCareer === c.key ? " selected" : "");
    card.style.setProperty("--card-color", c.color);
    card.style.borderColor = state.selectedCareer === c.key ? c.color : "";
    card.style.background = state.selectedCareer === c.key ? c.color + "15" : "";
    card.innerHTML = `
      <div class="career-card-icon" style="color:${c.color}">${iconSVGString(c.icon, 18, c.color)}</div>
      <div class="career-card-skills" style="color:${c.color}">${c.skills}</div>
      <div class="career-card-role">→ ${c.role}</div>
    `;
    card.addEventListener("click", () => { state.selectedCareer = c.key; openModal(c.key); });
    strip.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════
// TOOLTIP
// ═══════════════════════════════════════════════════════
let tooltipEl = null;
function ensureTooltip() {
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "svg-tooltip";
    document.getElementById("canvas-wrapper").appendChild(tooltipEl);
  }
  return tooltipEl;
}

function showTooltip(roleKey) {
  const data = ROLE_DATA[roleKey];
  if (!data) return;
  const tip = ensureTooltip();
  tip.style.borderColor = data.color;
  const tagsHtml = data.skills.slice(0, 5).map(s => `<span style="background:${data.color}15;color:${data.color};font-size:11px;font-weight:700;padding:2px 8px;border-radius:100px;display:inline-block;margin:2px">${s}</span>`).join("");
  tip.innerHTML = `
    <div class="tooltip-title" style="color:${data.color}">${iconSVGString(data.icon, 16, data.color)} ${data.title}</div>
    <div class="tooltip-desc">${data.what}</div>
    <div class="tooltip-skills-label">Top Skills</div>
    <div>${tagsHtml}</div>
    <div class="tooltip-salary">${data.salaryRange}</div>
  `;
  const svgElm = document.getElementById("ecosystem-svg");
  const svgRect = svgElm.getBoundingClientRect();
  const wrapRect = document.getElementById("canvas-wrapper").getBoundingClientRect();
  const node = NODES[roleKey];
  if (node) {
    const svgW = 1200, svgH = 760;
    const scaleX = svgRect.width / svgW;
    const scaleY = svgRect.height / svgH;
    const nodeScreenX = svgRect.left - wrapRect.left + node.x * scaleX;
    const nodeScreenY = svgRect.top - wrapRect.top + node.y * scaleY;
    tip.style.left = Math.max(0, nodeScreenX - 60) + "px";
    tip.style.top = Math.max(0, nodeScreenY - 175) + "px";
    tip.style.bottom = "auto";
  }
  tip.classList.add("visible");
}

function hideTooltip() { if (tooltipEl) tooltipEl.classList.remove("visible"); }

// ═══════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════
let lastFocusedEl = null;

function openModal(roleKey) {
  const data = ROLE_DATA[roleKey];
  if (!data) return;
  lastFocusedEl = document.activeElement;

  document.getElementById("modal-icon").innerHTML = iconSVGString(data.icon, 30, data.color);
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-question").textContent = data.question;
  document.getElementById("modal-what").textContent = data.what;
  document.getElementById("modal-why").textContent = data.why;

  const exBox = document.getElementById("modal-example");
  exBox.textContent = data.example;
  exBox.style.borderLeftColor = data.color;
  exBox.style.background = data.color + "10";

  const salaryEl = document.getElementById("modal-salary");
  salaryEl.textContent = data.salaryRange;
  salaryEl.style.color = data.color;

  document.getElementById("modal-hires").textContent = data.hiresAt;

  document.getElementById("modal-skills").innerHTML = data.skills.map(s => `<span class="tag tag-skill" style="background:${data.color}15;color:${data.color}">${s}</span>`).join("");
  document.getElementById("modal-tools").innerHTML = data.tools.map(t => `<span class="tag tag-tool">${t}</span>`).join("");
  document.getElementById("modal-daybar").innerHTML = buildDayBarHTML(data.typicalDay);
  document.getElementById("modal-learning").innerHTML = data.learningPath.map((item, i) => `
    <div class="learn-step">
      <div class="learn-num" style="background:${data.color}20;color:${data.color}">${i + 1}</div>
      <span class="learn-text">${item}</span>
    </div>`).join("");

  const box = document.getElementById("modal-box");
  box.style.borderColor = data.color;
  box.style.boxShadow = `0 20px 60px ${data.color}30`;

  document.getElementById("modal-overlay").classList.remove("hidden");
  document.getElementById("modal-close").focus();
}

function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
  if (lastFocusedEl && lastFocusedEl.focus) lastFocusedEl.focus();
}

// ═══════════════════════════════════════════════════════
// SIDE PANEL
// ═══════════════════════════════════════════════════════
function renderSidePanel() {
  const panel = document.getElementById("side-panel");
  const s = state.step;

  if (s === 0) {
    panel.innerHTML = `
      <div class="panel-intro">
        <h3>Guide</h3>
        <p>A 5-minute interactive tour of how data becomes business decisions and AI products inside a modern company.</p>
        <div class="nav-hints">
          <div class="section-label">Navigation</div>
          <div class="hint-row">
            <kbd>→</kbd> Next step<br/>
            <kbd>←</kbd> Previous<br/>
            <kbd>Space</kbd> Auto-play<br/>
            <kbd>R</kbd> Reset
          </div>
        </div>
        <div class="click-hint">Tap any role node to learn about that career path in depth.</div>
      </div>
    `;
    return;
  }

  const stepData = STEPS[s - 1];
  const story = STEP_STORY[s];
  const roleKey = stepData?.key;
  const role = ROLE_DATA[roleKey];
  const color = stepData?.color || "#6366f1";

  const tabsHTML = role ? `
    <div class="panel-tabs">
      ${["story", "skills", "day", "career"].map(t => `
        <button class="panel-tab${state.activeTab === t ? " active" : ""}" data-tab="${t}" style="${state.activeTab === t ? `--tab-color:${color}` : ""}">${t}</button>`).join("")}
    </div>
  ` : "";

  panel.innerHTML = `
    <div class="panel-header" style="background:${color}08">
      <div class="panel-step-label" style="color:${color}">Step ${s} / ${STEPS.length}</div>
      <div class="panel-step-title">${stepData?.label}</div>
      ${role ? `<div class="panel-question">${role.question}</div>` : ""}
    </div>
    ${tabsHTML}
    <div class="panel-content" id="panel-content-area"></div>
  `;

  if (role) {
    panel.querySelectorAll(".panel-tab").forEach(btn => {
      btn.addEventListener("click", () => { state.activeTab = btn.dataset.tab; renderSidePanel(); });
    });
  }
  renderPanelContent(story, role, color);
}

function renderPanelContent(story, role, color) {
  const area = document.getElementById("panel-content-area");
  if (!area) return;
  area.innerHTML = "";
  const div = document.createElement("div");
  div.className = "panel-animate";

  if (state.activeTab === "story" || !role) {
    if (story) {
      div.innerHTML = `
        <div class="section-label">What is it?</div>
        <p class="desc">${story.what}</p>
        <div class="section-label">Why does the company need it?</div>
        <p class="desc">${story.why}</p>
        <div class="section-label">Illustrative Example</div>
        <div class="example-box" style="border-left-color:${color};background:${color}10">${story.example}</div>
        <p class="example-caption">Composite scenario for teaching purposes, not a real company case study.</p>
        ${role ? `<div class="section-label">Output</div><div style="margin-bottom:10px"><span class="output-badge" style="background:${color}">${role.output}</span></div>` : ""}
        <div class="section-label">Next Stage</div>
        <p class="next-stage">→ ${story.next}</p>
      `;
    }
  }

  if (state.activeTab === "skills" && role) {
    div.innerHTML = `
      <div class="section-label">Responsibilities</div>
      ${role.responsibilities.map(r => `<div class="resp-item"><span class="resp-bullet" style="color:${color}">·</span><span class="resp-text">${r}</span></div>`).join("")}
      <div class="section-label" style="margin-top:12px">Skills Required</div>
      <div class="tag-group">${role.skills.map(s => `<span class="tag tag-skill" style="background:${color}15;color:${color}">${s}</span>`).join("")}</div>
      <div class="section-label">Tools Used</div>
      <div class="tag-group">${role.tools.map(t => `<span class="tag tag-tool">${t}</span>`).join("")}</div>
      <div class="section-label">Who Hires Them?</div>
      <p class="desc">${role.hiresAt}</p>
      <div class="section-label">Salary Range</div>
      <p class="desc" style="font-weight:700;color:${color}">${role.salaryRange}</p>
    `;
  }

  if (state.activeTab === "day" && role) {
    div.innerHTML = buildDayBarHTML(role.typicalDay);
  }

  if (state.activeTab === "career" && role) {
    div.innerHTML = `
      <div class="section-label">Career Progression</div>
      <div class="career-path-box" style="background:${color}08">${role.careerPath}</div>
      <div class="section-label">Learning Path</div>
      ${role.learningPath.map((item, i) => `<div class="learn-step"><div class="learn-num" style="background:${color}20;color:${color}">${i + 1}</div><span class="learn-text">${item}</span></div>`).join("")}
    `;
  }
  area.appendChild(div);
}

function buildDayBarHTML(items) {
  const track = items.map(i => `<div class="day-bar-segment" style="width:${i.pct}%;background:${i.color}"></div>`).join("");
  const legend = items.map(i => `
    <div class="day-bar-legend-row">
      <div class="day-bar-swatch" style="background:${i.color}"></div>
      <span class="day-bar-text">${i.label}</span>
      <span class="day-bar-pct" style="color:${i.color}">${i.pct}%</span>
    </div>`).join("");
  return `<div class="day-bar-label">Typical Day</div><div class="day-bar-track">${track}</div>${legend}`;
}

// ═══════════════════════════════════════════════════════
// CONTROLS
// ═══════════════════════════════════════════════════════
function renderControls() {
  const s = state.step;
  document.getElementById("btn-prev").disabled = s === 0;
  document.getElementById("btn-next").disabled = s >= TOTAL;
  document.getElementById("step-counter").textContent = s === 0 ? "Intro" : `${s} / ${TOTAL}`;

  const autoBtn = document.getElementById("btn-auto");
  if (state.autoPlay) {
    autoBtn.textContent = "⏸ Pause";
    autoBtn.classList.remove("dark");
    autoBtn.classList.add("danger");
  } else {
    autoBtn.textContent = "▶ Play All";
    autoBtn.classList.remove("danger");
    autoBtn.classList.add("dark");
  }
}

// ═══════════════════════════════════════════════════════
// ACTIONS
// ═══════════════════════════════════════════════════════
function next() { if (state.step < TOTAL) { state.step++; state.activeTab = "story"; render(); } }
function prev() { if (state.step > 0) { state.step--; state.activeTab = "story"; render(); } }
function reset() {
  clearInterval(state.autoTimer);
  state = { ...state, step: 0, autoPlay: false, autoTimer: null, selectedCareer: null, activeTab: "story" };
  render();
}
function toggleAuto() {
  state.autoPlay = !state.autoPlay;
  if (state.autoPlay) {
    state.autoTimer = setInterval(() => {
      if (state.step >= TOTAL) { state.autoPlay = false; clearInterval(state.autoTimer); render(); return; }
      state.step++; state.activeTab = "story"; render();
    }, 2100);
  } else {
    clearInterval(state.autoTimer);
    state.autoTimer = null;
  }
  renderControls();
}

// ═══════════════════════════════════════════════════════
// MASTER RENDER
// ═══════════════════════════════════════════════════════
function render() {
  renderProgressBar();
  renderSVG();
  renderSidePanel();
  renderControls();
}

// ═══════════════════════════════════════════════════════
// ROLE COMPARISON TABLE  (generated once, from ROLE_DATA)
// ═══════════════════════════════════════════════════════
function renderCompareTable() {
  const wrap = document.getElementById("compare-table-wrap");
  if (!wrap) return;

  const rows = ROLE_ORDER.map(key => {
    const r = ROLE_DATA[key];
    const topSkills = r.skills.slice(0, 4).map(s => `<span class="compare-tag" style="background:${r.color}15;color:${r.color}">${s}</span>`).join("");
    const topTools = r.tools.slice(0, 3).map(t => `<span class="compare-tag">${t}</span>`).join("");
    return `
      <tr>
        <td data-label="Role"><div class="compare-role-cell" style="color:${r.color}">${iconSVGString(r.icon, 18, r.color)}<span>${r.title}</span></div></td>
        <td data-label="Main Question">${r.question}</td>
        <td data-label="Key Skills">${topSkills}</td>
        <td data-label="Key Tools">${topTools}</td>
        <td data-label="Best Fit If...">${r.fit}</td>
      </tr>`;
  }).join("");

  wrap.innerHTML = `
    <div class="compare-table-scroll">
      <table class="compare-table">
        <thead>
          <tr><th>Role</th><th>Main Question</th><th>Key Skills</th><th>Key Tools</th><th>Best Fit If...</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════
// CHOOSE YOUR PATH — quiz
// ═══════════════════════════════════════════════════════
const QUIZ_QUESTIONS = [
  {
    text: "Which sounds most like a good day at work?",
    options: [
      { label: "Designing how systems fit together", scores: { architect: 3, engineer: 1 } },
      { label: "Writing code that moves data reliably", scores: { engineer: 3, ae: 1 } },
      { label: "Modeling messy data into clean tables", scores: { ae: 3, analyst: 1 } },
      { label: "Explaining what the numbers mean", scores: { analyst: 3, bi: 1 } },
    ],
  },
  {
    text: "What's more exciting to you?",
    options: [
      { label: "Building dashboards people check daily", scores: { bi: 3, analyst: 1 } },
      { label: "Predicting what happens next", scores: { scientist: 3, ml: 1 } },
      { label: "Shipping a model to real users at scale", scores: { ml: 3, scientist: 1 } },
      { label: "Building an AI product from scratch", scores: { ai: 3, ml: 1 } },
    ],
  },
  {
    text: "Pick a tool you'd enjoy getting really good at:",
    options: [
      { label: "SQL + dbt", scores: { ae: 3, analyst: 1, architect: 1 } },
      { label: "Power BI / Tableau", scores: { bi: 3, analyst: 1 } },
      { label: "Python + scikit-learn", scores: { scientist: 3, ml: 1 } },
      { label: "LLM APIs / LangChain", scores: { ai: 3 } },
    ],
  },
];

let quizAnswers = [];

function setupQuiz() {
  const wrap = document.getElementById("path-quiz");
  if (!wrap) return;

  wrap.innerHTML = QUIZ_QUESTIONS.map((q, qi) => `
    <div class="quiz-question" data-q="${qi}">
      <p class="q-text">${qi + 1}. ${q.text}</p>
      <div class="quiz-options">
        ${q.options.map((opt, oi) => `<button type="button" class="quiz-opt" data-q="${qi}" data-o="${oi}">${opt.label}</button>`).join("")}
      </div>
    </div>
  `).join("") + `<div class="quiz-result" id="quiz-result"></div>`;

  wrap.querySelectorAll(".quiz-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const qi = Number(btn.dataset.q), oi = Number(btn.dataset.o);
      quizAnswers[qi] = oi;
      wrap.querySelectorAll(`.quiz-opt[data-q="${qi}"]`).forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      maybeShowQuizResult();
    });
  });
}

function maybeShowQuizResult() {
  if (quizAnswers.length !== QUIZ_QUESTIONS.length || quizAnswers.some(a => a === undefined)) return;
  const scores = {};
  QUIZ_QUESTIONS.forEach((q, qi) => {
    const opt = q.options[quizAnswers[qi]];
    Object.entries(opt.scores).forEach(([role, val]) => { scores[role] = (scores[role] || 0) + val; });
  });
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const role = ROLE_DATA[winner];
  const resultEl = document.getElementById("quiz-result");
  resultEl.style.borderColor = role.color;
  resultEl.innerHTML = `
    <div class="quiz-result-role" style="color:${role.color}">
      ${iconSVGString(role.icon, 26, role.color)}
      <h3>${role.title}</h3>
    </div>
    <p>${role.fit}</p>
    <button type="button" class="btn btn-primary" id="quiz-explore-btn">Explore ${role.title} →</button>
  `;
  resultEl.classList.add("visible");
  document.getElementById("quiz-explore-btn").addEventListener("click", () => {
    openModal(winner);
  });
}

// ═══════════════════════════════════════════════════════
// SHARE BUTTON
// ═══════════════════════════════════════════════════════
function setupShare() {
  const btn = document.getElementById("btn-share");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const shareData = { title: document.title, text: "An interactive tour of the data ecosystem — see how raw data becomes business decisions and AI products.", url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        const original = btn.textContent;
        btn.textContent = "Link copied!";
        setTimeout(() => { btn.textContent = original; }, 2000);
      }
    } catch (err) {
      /* user cancelled share — no action needed */
    }
  });
}

// ═══════════════════════════════════════════════════════
// EVENTS
// ═══════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-next").addEventListener("click", next);
  document.getElementById("btn-prev").addEventListener("click", prev);
  document.getElementById("btn-reset").addEventListener("click", reset);
  document.getElementById("btn-auto").addEventListener("click", toggleAuto);
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal-overlay")) closeModal();
  });

  const heroBtn = document.getElementById("hero-start-btn");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      if (state.step === 0) { state.step = 1; state.activeTab = "story"; render(); }
    });
  }

  window.addEventListener("keydown", (e) => {
    const overlayOpen = !document.getElementById("modal-overlay").classList.contains("hidden");
    if (e.key === "Escape") { closeModal(); return; }
    if (overlayOpen) return;
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === " ") { e.preventDefault(); toggleAuto(); }
    else if (e.key === "r" || e.key === "R") reset();
  });

  render();
  renderCompareTable();
  setupQuiz();
  setupShare();
});
