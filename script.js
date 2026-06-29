// ═══════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════
const ROLE_DATA = {
  architect: {
    title: "Data Architect", icon: "🏗️", color: "#0f766e",
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
  },
  engineer: {
    title: "Data Engineer", icon: "🔧", color: "#6366f1",
    question: "How do we move and transform data reliably?",
    what: "Builds and maintains the pipelines that move data from source systems into the lakehouse layers.",
    why: "Without data engineers, analysts and scientists would have no reliable data to work with.",
    example: "Writing an Airflow DAG that pulls transactions from a payment API every hour, cleans them, and loads them into the Silver layer.",
    output: "Reliable Data Pipelines",
    responsibilities: ["ETL / ELT", "Data Pipelines", "Data Quality", "Orchestration", "Data Integration"],
    skills: ["SQL", "Python", "Spark", "Airflow", "Cloud Platforms", "Docker"],
    tools: ["Apache Airflow", "Apache Spark", "dbt", "Kafka", "Snowflake", "Databricks"],
    hiresAt: "Every tech company, startups, banks, e-commerce",
    salaryRange: "₹12–40 LPA (India) · $100–170K (US)",
    typicalDay: [
      { label: "Building Pipelines", pct: 50, color: "#6366f1" },
      { label: "Debugging Issues", pct: 30, color: "#818cf8" },
      { label: "Cloud Operations", pct: 20, color: "#a5b4fc" },
    ],
    careerPath: "Junior DE → Senior DE → Lead DE → Data Architect / Engineering Manager",
    learningPath: ["Python", "SQL", "Apache Airflow", "Spark", "Cloud (AWS/GCP)", "dbt"],
  },
  analyst: {
    title: "Data Analyst", icon: "📈", color: "#0891b2",
    question: '"What happened?" and "Why?"',
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
  },
  bi: {
    title: "BI Developer", icon: "📊", color: "#f59e0b",
    question: '"How are we performing right now?"',
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
  },
  scientist: {
    title: "Data Scientist", icon: "🔬", color: "#10b981",
    question: '"What will happen next?"',
    what: "Uses statistics, machine learning, and experimentation to build predictive models and uncover hidden patterns.",
    why: "Historical analysis tells you what happened. Data scientists predict the future to give companies a competitive edge.",
    example: "Building a churn prediction model that identifies customers likely to cancel their subscription 30 days before they do.",
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
    learningPath: ["Python + pandas", "Statistics & Probability", "ML (scikit-learn)", "Deep Learning", "MLflow & experiment tracking"],
  },
  ml: {
    title: "ML Engineer", icon: "⚙️", color: "#ef4444",
    question: '"How do we serve predictions to millions of users?"',
    what: "Takes a Data Scientist's model and deploys it to production where it serves real-time predictions reliably at scale.",
    why: "A model stuck in a Jupyter notebook is worthless. ML Engineers bridge the gap between research and real-world impact.",
    example: "Deploying a fraud detection model as a REST API that scores 10,000 transactions per second with 99.9% uptime.",
    output: "Production ML Systems",
    responsibilities: ["Production Deployment", "Model Serving", "Monitoring", "MLOps", "Performance Optimization"],
    skills: ["Python", "Docker", "Kubernetes", "MLflow", "Cloud Platforms", "APIs"],
    tools: ["Docker", "Kubernetes", "MLflow", "FastAPI", "AWS SageMaker", "Vertex AI", "Prometheus"],
    hiresAt: "Big tech, fintech, autonomous vehicles, healthcare AI, gaming",
    salaryRange: "₹18–50 LPA (India) · $130–200K (US)",
    typicalDay: [
      { label: "Pipeline Engineering", pct: 50, color: "#ef4444" },
      { label: "Debugging & Monitoring", pct: 30, color: "#f87171" },
      { label: "Cloud Operations", pct: 20, color: "#fca5a5" },
    ],
    careerPath: "Data Engineer / Backend Dev → ML Engineer → Senior MLE → ML Platform Lead / Engineering Manager",
    learningPath: ["Python", "Docker + Kubernetes", "MLflow", "FastAPI", "Cloud ML services"],
  },
  ai: {
    title: "AI Engineer", icon: "🤖", color: "#7c3aed",
    question: '"What should we do next?" — powered by AI',
    what: "Builds LLM-powered applications, RAG pipelines, autonomous agents, and AI copilots that transform how businesses operate.",
    why: "LLMs alone aren't products. AI Engineers connect them to company data, workflows, and users to create real business value.",
    example: "Building a RAG-powered customer support agent that answers questions using the company's internal documentation, reducing support tickets by 40%.",
    output: "AI Copilots, Chatbots & Autonomous Agents",
    responsibilities: ["RAG Pipeline Development", "Prompt Engineering", "LLM Application Development", "Agent Orchestration", "Evaluation & Guardrails"],
    skills: ["Python", "APIs", "Vector Databases", "LangChain", "OpenAI APIs", "MCP", "RAG", "Prompt Engineering"],
    tools: ["LangChain / LlamaIndex", "OpenAI / Anthropic APIs", "Pinecone / Weaviate", "FastAPI", "Streamlit", "MCP"],
    hiresAt: "Every major tech company, startups, consulting, healthcare, legal tech",
    salaryRange: "₹20–60 LPA (India) · $140–220K (US)",
    typicalDay: [
      { label: "Building AI Apps", pct: 40, color: "#7c3aed" },
      { label: "RAG & Agent Dev", pct: 30, color: "#a855f7" },
      { label: "Testing & Eval", pct: 20, color: "#c084fc" },
      { label: "Monitoring", pct: 10, color: "#d8b4fe" },
    ],
    careerPath: "Software Dev / Data Scientist → AI Engineer → Senior AI Eng → AI Architect / Head of AI",
    learningPath: ["Python + APIs", "Prompt Engineering", "LangChain basics", "Vector DBs", "RAG patterns", "Agent frameworks"],
  },
};

const STEPS = [
  { id: 1,  key: "sources",   label: "Sources",     color: "#6366f1",  stage: "Sources" },
  { id: 2,  key: "pipeline",  label: "Pipeline",    color: "#8b5cf6",  stage: "Platform" },
  { id: 3,  key: "bronze",    label: "Bronze",      color: "#b45309",  stage: "Platform" },
  { id: 4,  key: "silver",    label: "Silver",      color: "#64748b",  stage: "Platform" },
  { id: 5,  key: "gold",      label: "Gold",        color: "#d97706",  stage: "Platform" },
  { id: 6,  key: "architect", label: "Architect",   color: "#0f766e",  stage: "Engineering" },
  { id: 7,  key: "engineer",  label: "Engineer",    color: "#6366f1",  stage: "Engineering" },
  { id: 8,  key: "analyst",   label: "Analyst",     color: "#0891b2",  stage: "Analytics" },
  { id: 9,  key: "bi",        label: "BI Dev",      color: "#f59e0b",  stage: "Analytics" },
  { id: 10, key: "scientist", label: "Scientist",   color: "#10b981",  stage: "Analytics" },
  { id: 11, key: "ml",        label: "ML Eng",      color: "#ef4444",  stage: "AI" },
  { id: 12, key: "ai",        label: "AI Eng",      color: "#7c3aed",  stage: "AI" },
  { id: 13, key: "impact",    label: "Impact",      color: "#059669",  stage: "Impact" },
  { id: 14, key: "careers",   label: "Careers",     color: "#ec4899",  stage: "Careers" },
];

const STAGES = ["Sources", "Platform", "Engineering", "Analytics", "AI", "Impact", "Careers"];

const STEP_STORY = {
  1:  { what: "Business data lives in dozens of disconnected systems — databases, APIs, CRM tools, payment platforms, and spreadsheets.", why: "Every click, transaction, and interaction generates data. The challenge is collecting it all reliably.", example: "An e-commerce company tracks orders in MySQL, customer profiles in MongoDB, and reviews in a spreadsheet.", next: "All of this data needs to flow into one central place — the Pipeline." },
  2:  { what: "An automated pipeline continuously ingests data from all sources using ETL/ELT processes.", why: "Manual data copying is error-prone and slow. Automated pipelines run 24/7 without human intervention.", example: "Airflow DAGs pull transactions every 15 minutes, trigger on new CRM updates, and validate data quality before loading.", next: "Data lands first in the Bronze Layer, completely raw." },
  3:  { what: "The Bronze Layer stores raw, unmodified data exactly as it arrived from source systems.", why: "We never modify the original data. If something breaks downstream, we can always re-process from the raw copy.", example: "A payment event lands in Bronze with all original fields, timestamps, and even duplicate records intact.", next: "Bronze data moves to Silver for cleaning and standardisation." },
  4:  { what: "The Silver Layer cleans, deduplicates, validates, and standardises data from Bronze.", why: "Raw data is messy — duplicates, nulls, inconsistent formats. Silver makes it trustworthy and consistent.", example: "Customer names are standardised, phone numbers formatted, duplicate orders removed, currencies converted to USD.", next: "Clean data is modelled into business-ready structures in the Gold Layer." },
  5:  { what: "The Gold Layer contains curated, business-ready datasets, KPIs, and dimensional models.", why: "Analysts, BI developers, and data scientists need data in the right shape to do their jobs efficiently.", example: "A Sales_Daily_Summary table with revenue by region, product, and channel — pre-joined, pre-aggregated, ready to query.", next: "Now multiple teams can consume this data for their specific needs." },
  6:  { what: "The Data Architect designs the overall blueprint of the data platform that everyone else builds on.", why: "Without a clear architectural design, data platforms become unmanageable 'data swamps' within 2 years.", example: "Deciding to use a three-layer Lakehouse on Databricks with dbt for transformations and Terraform for infrastructure.", next: "Data Engineers then build what the Architect designs." },
  7:  { what: "Data Engineers build and maintain the pipelines, transformations, and infrastructure that power the platform.", why: "Someone has to write the code that actually moves data. Engineers make the architecture a reality.", example: "Writing Python + Airflow jobs, dbt models for Silver transformations, and CI/CD pipelines for data code.", next: "With reliable data flowing, Analytics teams can start consuming it." },
  8:  { what: "Data Analysts query the Gold Layer to answer business questions and produce reports.", why: "Gut-feel decisions fail at scale. Analysts translate data into clear business narratives that drive strategy.", example: "Analysing 3 months of customer data to find that users who complete onboarding convert 3x more than those who don't.", next: "BI Developers take those insights and make them permanently visible on dashboards." },
  9:  { what: "BI Developers build interactive dashboards and automated reports that teams check daily.", why: "Analysts answer one-time questions. BI developers create the 'always-on' performance visibility that operations needs.", example: "A real-time sales dashboard that shows revenue vs target, by region, updating every 10 minutes — used by 50 managers daily.", next: "Data Scientists go deeper — using the same data to predict the future." },
  10: { what: "Data Scientists build machine learning models to predict future outcomes from historical patterns.", why: "Knowing what happened helps. Knowing what will happen next gives a massive competitive advantage.", example: "Training a churn model on 2 years of customer behaviour data that correctly identifies 78% of churners 30 days early.", next: "ML Engineers take those models and deploy them to production." },
  11: { what: "ML Engineers deploy Data Scientists' models to production systems that serve real-time predictions at scale.", why: "A model in a notebook doesn't save any customers. ML Engineers make predictions part of the product.", example: "Wrapping the churn model in a FastAPI service deployed on Kubernetes — scoring 50,000 customers every night automatically.", next: "AI Engineers use LLMs and company knowledge to build the next generation of AI products." },
  12: { what: "AI Engineers build LLM-powered applications, RAG systems, and autonomous agents using company data and knowledge.", why: "LLMs alone are generic. AI Engineers ground them in company-specific knowledge to create genuinely useful products.", example: "Building a RAG chatbot that answers HR policy questions by searching 3,000 internal documents — reducing HR tickets by 35%.", next: "All these outputs reach the business and create measurable impact." },
  13: { what: "Every role's output reaches the business in a different form — reports, dashboards, predictions, and AI products.", why: "The entire data ecosystem exists to help people make better decisions faster.", example: "A manager sees their team's KPI dashboard, gets a churn alert, and asks the AI copilot to draft a retention email — all in one morning.", next: "Now let's explore which career path is right for you." },
  14: { what: "Every role has a clear, learnable skills path from college to corporate.", why: "None of these roles require a specific degree. They require specific, teachable skills that you can start building today.", example: "A Business student who learns Excel + SQL becomes a Data Analyst. That same analyst who learns Python + Airflow becomes a Data Engineer.", next: "You've completed the full data & AI ecosystem tour. 🎉" },
};

const CAREERS = [
  { role: "Data Analyst",   skills: "Excel + SQL",          color: "#0891b2", icon: "📈", key: "analyst" },
  { role: "Data Engineer",  skills: "SQL + Python + Spark", color: "#6366f1", icon: "🔧", key: "engineer" },
  { role: "BI Developer",   skills: "Power BI + DAX",       color: "#f59e0b", icon: "📊", key: "bi" },
  { role: "Data Scientist", skills: "Statistics + ML",      color: "#10b981", icon: "🔬", key: "scientist" },
  { role: "ML Engineer",    skills: "MLOps + Cloud",        color: "#ef4444", icon: "⚙️", key: "ml" },
  { role: "AI Engineer",    skills: "LLMs + RAG + Agents",  color: "#7c3aed", icon: "🤖", key: "ai" },
];

const STEP_COLORS = {
  1:"#6366f1",2:"#8b5cf6",3:"#b45309",4:"#64748b",5:"#d97706",
  6:"#0f766e",7:"#6366f1",8:"#0891b2",9:"#f59e0b",10:"#10b981",
  11:"#ef4444",12:"#7c3aed",13:"#059669",14:"#ec4899"
};

// ── Node dimensions ──
const NH = 62;
const NW = (n) => n.wide ? 138 : 100;
const nc = (n) => ({ cx: n.x + NW(n)/2, cy: n.y + NH/2 });

const NODES = {
  sql:        { id:"sql",        label:"SQL\nDatabases",          icon:"🗄️", x:14,  y:170, step:1 },
  nosql:      { id:"nosql",      label:"NoSQL\nDatabases",        icon:"📦", x:14,  y:228, step:1 },
  apis:       { id:"apis",       label:"APIs",                    icon:"🔌", x:14,  y:284, step:1 },
  webapps:    { id:"webapps",    label:"Web Apps",                icon:"🌐", x:14,  y:334, step:1 },
  crm:        { id:"crm",        label:"CRM\nSystems",            icon:"👥", x:14,  y:386, step:1 },
  payments:   { id:"payments",   label:"Payments",                icon:"💳", x:14,  y:436, step:1 },
  vendors:    { id:"vendors",    label:"Vendors",                 icon:"🏭", x:14,  y:484, step:1 },
  sheets:     { id:"sheets",     label:"Spreadsheets",            icon:"📊", x:14,  y:534, step:1 },
  pipeline:   { id:"pipeline",   label:"Automated\nIngestion",    icon:"⚡", x:152, y:355, step:2, wide:true },
  bronze:     { id:"bronze",     label:"Bronze\nRaw Data",        icon:"🥉", x:292, y:305, step:3, wide:true },
  silver:     { id:"silver",     label:"Silver\nCleaned",         icon:"🥈", x:430, y:305, step:4, wide:true },
  gold:       { id:"gold",       label:"Gold Layer\nBiz Ready",   icon:"🥇", x:568, y:305, step:5, wide:true },
  architect:  { id:"architect",  label:"Data\nArchitect",         icon:"🏗️", x:335, y:500, step:6, wide:true },
  engineer:   { id:"engineer",   label:"Data\nEngineer",          icon:"🔧", x:480, y:500, step:7, wide:true },
  knowledge:  { id:"knowledge",  label:"Knowledge\nSources",      icon:"📚", x:430, y:610, step:12, wide:true },
  analyst:    { id:"analyst",    label:"Data Analyst\nReports",   icon:"📈", x:718, y:188, step:8, wide:true },
  bi:         { id:"bi",         label:"BI Developer\nDashboards",icon:"📊", x:718, y:290, step:9, wide:true },
  scientist:  { id:"scientist",  label:"Data Scientist\nML",      icon:"🔬", x:718, y:392, step:10, wide:true },
  ml:         { id:"ml",         label:"ML Engineer\nMLOps",      icon:"⚙️", x:718, y:494, step:11, wide:true },
  ai:         { id:"ai",         label:"AI Engineer\nAgents",     icon:"🤖", x:718, y:596, step:12, wide:true },
  managers:   { id:"managers",   label:"Managers &\nExecs",       icon:"👔", x:900, y:188, step:13, wide:true },
  ops:        { id:"ops",        label:"Operations\nTeams",       icon:"🏢", x:900, y:290, step:13, wide:true },
  predictions:{ id:"predictions",label:"Prediction\nProducts",    icon:"🎯", x:900, y:415, step:13, wide:true },
  aiproducts: { id:"aiproducts", label:"AI Copilots\n& Agents",   icon:"✨", x:900, y:554, step:13, wide:true },
};

const PATHS = [
  { id:"p1",  from:"sql",       to:"pipeline",    color:"#6366f1", step:2 },
  { id:"p2",  from:"nosql",     to:"pipeline",    color:"#6366f1", step:2 },
  { id:"p3",  from:"apis",      to:"pipeline",    color:"#8b5cf6", step:2 },
  { id:"p4",  from:"webapps",   to:"pipeline",    color:"#8b5cf6", step:2 },
  { id:"p5",  from:"crm",       to:"pipeline",    color:"#6366f1", step:2 },
  { id:"p6",  from:"payments",  to:"pipeline",    color:"#8b5cf6", step:2 },
  { id:"p7",  from:"vendors",   to:"pipeline",    color:"#6366f1", step:2 },
  { id:"p8",  from:"sheets",    to:"pipeline",    color:"#8b5cf6", step:2 },
  { id:"p9",  from:"pipeline",  to:"bronze",      color:"#b45309", step:3 },
  { id:"p10", from:"bronze",    to:"silver",      color:"#64748b", step:4 },
  { id:"p11", from:"silver",    to:"gold",        color:"#d97706", step:5 },
  { id:"p12", from:"architect", to:"bronze",      color:"#0f766e", step:6 },
  { id:"p13", from:"engineer",  to:"pipeline",    color:"#6366f1", step:7 },
  { id:"p14", from:"gold",      to:"analyst",     color:"#0891b2", step:8 },
  { id:"p15", from:"gold",      to:"bi",          color:"#f59e0b", step:9 },
  { id:"p16", from:"gold",      to:"scientist",   color:"#10b981", step:10 },
  { id:"p17", from:"scientist", to:"ml",          color:"#ef4444", step:11 },
  { id:"p18", from:"gold",      to:"ai",          color:"#7c3aed", step:12 },
  { id:"p19", from:"knowledge", to:"ai",          color:"#7c3aed", step:12 },
  { id:"p20", from:"analyst",   to:"managers",    color:"#059669", step:13 },
  { id:"p21", from:"bi",        to:"ops",         color:"#059669", step:13 },
  { id:"p22", from:"scientist", to:"predictions", color:"#059669", step:13 },
  { id:"p23", from:"ml",        to:"predictions", color:"#ef4444", step:13 },
  { id:"p24", from:"ai",        to:"aiproducts",  color:"#7c3aed", step:13 },
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

// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════
let state = {
  step: 0,
  autoPlay: false,
  autoTimer: null,
  selectedCareer: null,
  activeTab: "story",
};

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

  // Clear groups
  ["svg-labels","svg-banner","svg-paths","svg-particles","svg-nodes","svg-career-bar","impact-glow"].forEach(id => {
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
  el.style.opacity = "0";
  el.style.transition = "opacity 0.4s";
  requestAnimationFrame(() => { el.style.opacity = "1"; });
}

function renderSVGLabels(s) {
  const g = document.getElementById("svg-labels");
  const baseAttrs = { "font-size": "13", "font-weight": "800", "letter-spacing": "2", "font-family": "monospace", "fill": "#94a3b8" };

  if (s >= 1)  { const t = addText(g, 14, 153, "SOURCES", baseAttrs); animateFadeIn(t); }
  if (s >= 2)  { const t = addText(g, 152, 153, "PIPELINE", baseAttrs); animateFadeIn(t); }
  if (s >= 3)  { const t = addText(g, 285, 153, "LAKEHOUSE LAYERS", baseAttrs); animateFadeIn(t); }
  if (s >= 6)  { const t = addText(g, 308, 480, "BUILDERS", baseAttrs); animateFadeIn(t); }
  if (s >= 8)  { const t = addText(g, 708, 153, "CONSUMERS", baseAttrs); animateFadeIn(t); }
  if (s >= 13) { const t = addText(g, 888, 153, "IMPACT", baseAttrs); animateFadeIn(t); }

  // Design/Build labels
  if (s >= 6 && NODES.architect && NODES.bronze) {
    const fa = nc(NODES.architect), fb = nc(NODES.bronze);
    const t = addText(g, (fa.cx + fb.cx)/2 - 10, fa.cy - 6, "Design ↑",
      { "font-size":"12", "fill":"#0f766e", "font-weight":"700", "font-family":"monospace" });
    animateFadeIn(t);
  }
  if (s >= 7 && NODES.engineer && NODES.pipeline) {
    const fa = nc(NODES.engineer), fb = nc(NODES.pipeline);
    const t = addText(g, (fa.cx + fb.cx)/2 - 10, fa.cy - 6, "Build ↑",
      { "font-size":"12", "fill":"#6366f1", "font-weight":"700", "font-family":"monospace" });
    animateFadeIn(t);
  }
}

function renderBanner(s) {
  if (s < 3) return;
  const g = document.getElementById("svg-banner");
  const rect = svgEl("rect", { x:275, y:132, width:440, height:26, rx:6, fill:"#fef3c7", stroke:"#d97706", "stroke-width":1.2 });
  const txt = addText(g, 495, 149, "AUTOMATED ENTERPRISE DATA PLATFORM", {
    "text-anchor":"middle", "font-size":"12", "font-weight":"800", "fill":"#92400e",
    "letter-spacing":"1", "font-family":"monospace"
  });
  g.appendChild(rect);
  g.appendChild(txt);
  animateFadeIn(g);
}

function renderImpactGlow(s) {
  if (s !== 13) return;
  const g = document.getElementById("impact-glow");
  const rect = svgEl("rect", {
    id: "impact-glow-rect",
    x:882, y:165, width:178, height:530, rx:10,
    fill:"#05966912", stroke:"#059669", "stroke-width":2
  });
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

    // Shadow track
    const shadow = svgEl("path", {
      d, fill:"none", stroke:path.color,
      "stroke-width": isActive ? 4 : 2.2,
      "stroke-opacity": 0.1
    });
    gPaths.appendChild(shadow);

    // Main path
    const main = svgEl("path", {
      d, fill:"none", stroke:path.color,
      "stroke-width": isActive ? 2.8 : 1.7,
      "stroke-opacity": isActive ? 0.95 : 0.5,
      "stroke-linecap":"round",
      "class":"flow-path"
    });
    if (isActive) main.style.filter = `drop-shadow(0 0 5px ${path.color}80)`;
    gPaths.appendChild(main);

    // Particle
    const uid = `pp${++particleCounter}`;
    const dur = 2.6 + (i * 0.38) % 2.2;
    const delay = (i * 0.38) % 3;

    const pDef = svgEl("path", { id:uid, d, fill:"none", stroke:"none" });
    gParticles.appendChild(pDef);

    [[5,"0.9",0.0],[2.5,"0.5",0.2],[1.8,"0.85",0.08]].forEach(([r, op, dOff], ci) => {
      const circ = svgEl("circle", { r, fill: ci === 2 ? "white" : path.color, opacity:"0" });
      const anim = svgEl("animate", {
        attributeName:"opacity",
        values:`0;${op};${op};0`,
        dur:`${dur}s`,
        repeatCount:"indefinite",
        begin:`${(delay + dOff) % 3}s`
      });
      const mot = svgEl("animateMotion", {
        dur:`${dur}s`, repeatCount:"indefinite",
        begin:`${(delay + dOff) % 3}s`
      });
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

    const group = svgEl("g", { class: "node-g" + (isRole ? " clickable" : "") });

    // Pulse ring if active
    if (isActive) {
      const ring = svgEl("rect", {
        x: node.x - 5, y: node.y - 5,
        width: w + 10, height: NH + 10, rx: 14,
        fill:"none", stroke:color, "stroke-width":"2",
        class:"node-ring"
      });
      group.appendChild(ring);
    }

    // Background rect
    const bg = svgEl("rect", {
      x:node.x, y:node.y, width:w, height:NH, rx:10,
      fill:"#ffffff", stroke:color,
      "stroke-width": isActive ? 2.2 : 1.1,
    });
    if (isActive) bg.style.filter = `drop-shadow(0 0 10px ${color}50)`;
    group.appendChild(bg);

    // Left color stripe
    const stripe = svgEl("rect", { x:node.x, y:node.y, width:6, height:NH, rx:10, fill:color });
    const stripeBottom = svgEl("rect", { x:node.x, y:node.y + NH/2, width:6, height:NH/2, fill:color });
    group.appendChild(stripe);
    group.appendChild(stripeBottom);

    // Icon
    const iconSize = lines.length > 1 ? 17 : 20;
    const iconEl = addText(group, node.x + 20, node.y + NH/2, node.icon, {
      "font-size": iconSize, "text-anchor":"middle", "dominant-baseline":"middle"
    });

    // Label lines
    lines.forEach((line, li) => {
      const yOff = lines.length === 1 ? node.y + NH/2 : node.y + NH/2 + (li - (lines.length-1)/2) * 15;
      addText(group, node.x + 36, yOff, line, {
        "font-size": lines.length > 1 ? "11" : "13",
        "font-weight": li === 0 ? "700" : "500",
        fill: li === 0 ? "#1e293b" : "#64748b",
        "dominant-baseline":"middle",
        "font-family":"system-ui,sans-serif"
      });
    });

    // Tooltip & click for roles
    if (isRole) {
      group.addEventListener("mouseenter", () => showTooltip(node.id, group));
      group.addEventListener("mouseleave", () => hideTooltip());
      group.addEventListener("click", () => openModal(node.id));
    }

    // Entry animation
    group.style.opacity = "0";
    group.style.transition = "opacity 0.35s";
    requestAnimationFrame(() => { group.style.opacity = "1"; });

    g.appendChild(group);
  });
}

function renderCareerBar(s) {
  if (s < 14) return;
  const g = document.getElementById("svg-career-bar");

  const barBg = svgEl("rect", { x:10, y:644, width:1040, height:60, rx:10, fill:"#0f172a", "fill-opacity":"0.94", stroke:"#7c3aed", "stroke-width":"1.5" });
  g.appendChild(barBg);

  addText(g, 28, 663, "COLLEGE SKILLS → CORPORATE ROLES", {
    "fill":"#c4b5fd", "font-size":"11", "font-weight":"800", "letter-spacing":"2", "font-family":"monospace"
  });

  CAREERS.forEach((c, i) => {
    const gx = 22 + i * 170;
    addText(g, gx, 676, c.skills, {
      fill:c.color, "font-size":"10", "font-weight":"700", "font-family":"monospace"
    });
    addText(g, gx, 692, `→ ${c.icon} ${c.role}`, {
      fill:"#f1f5f9", "font-size":"12", "font-weight":"800", "font-family":"monospace"
    });
  });

  animateFadeIn(g);
}

function renderCareerStrip(s) {
  const strip = document.getElementById("career-cards-strip");
  strip.innerHTML = "";
  if (s < 14) { strip.classList.remove("visible"); return; }
  strip.classList.add("visible");

  CAREERS.forEach(c => {
    const card = document.createElement("div");
    card.className = "career-card" + (state.selectedCareer === c.key ? " selected" : "");
    card.style.setProperty("--card-color", c.color);
    card.style.borderColor = state.selectedCareer === c.key ? c.color : "#e2e8f0";
    card.style.background = state.selectedCareer === c.key ? c.color + "15" : "#f8fafc";

    card.innerHTML = `
      <div class="career-card-icon">${c.icon}</div>
      <div class="career-card-skills" style="color:${c.color}">${c.skills}</div>
      <div class="career-card-role">→ ${c.role}</div>
    `;
    card.addEventListener("click", () => {
      if (state.selectedCareer === c.key) { openModal(c.key); }
      else { state.selectedCareer = c.key; openModal(c.key); }
    });
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

function showTooltip(roleKey, nodeGroup) {
  const data = ROLE_DATA[roleKey];
  if (!data) return;

  const tip = ensureTooltip();
  tip.style.borderColor = data.color;

  const tagsHtml = data.skills.slice(0, 5).map(s =>
    `<span style="background:${data.color}15;color:${data.color};font-size:11px;font-weight:700;padding:2px 8px;border-radius:100px;display:inline-block;margin:2px">${s}</span>`
  ).join("");

  tip.innerHTML = `
    <div class="tooltip-title" style="color:${data.color}">${data.icon} ${data.title}</div>
    <div class="tooltip-desc">${data.what}</div>
    <div class="tooltip-skills-label">Top Skills</div>
    <div>${tagsHtml}</div>
    <div class="tooltip-salary">💰 ${data.salaryRange}</div>
  `;

  // Position near node
  const svgEl = document.getElementById("ecosystem-svg");
  const svgRect = svgEl.getBoundingClientRect();
  const wrapRect = document.getElementById("canvas-wrapper").getBoundingClientRect();

  const node = NODES[roleKey];
  if (node) {
    const svgW = 1060, svgH = 710;
    const scaleX = svgRect.width / svgW;
    const scaleY = svgRect.height / svgH;
    const nodeScreenX = svgRect.left - wrapRect.left + node.x * scaleX;
    const nodeScreenY = svgRect.top  - wrapRect.top  + node.y * scaleY;

    tip.style.left = Math.max(0, nodeScreenX - 60) + "px";
    tip.style.top  = Math.max(0, nodeScreenY - 175) + "px";
    tip.style.bottom = "auto";
  }

  tip.classList.add("visible");
}

function hideTooltip() {
  if (tooltipEl) tooltipEl.classList.remove("visible");
}

// ═══════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════
function openModal(roleKey) {
  const data = ROLE_DATA[roleKey];
  if (!data) return;

  document.getElementById("modal-icon").textContent = data.icon;
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

  const skillsEl = document.getElementById("modal-skills");
  skillsEl.innerHTML = data.skills.map(s =>
    `<span class="tag tag-skill" style="background:${data.color}15;color:${data.color}">${s}</span>`
  ).join("");

  const toolsEl = document.getElementById("modal-tools");
  toolsEl.innerHTML = data.tools.map(t =>
    `<span class="tag tag-tool">${t}</span>`
  ).join("");

  document.getElementById("modal-daybar").innerHTML = buildDayBarHTML(data.typicalDay);

  const learningEl = document.getElementById("modal-learning");
  learningEl.innerHTML = data.learningPath.map((item, i) => `
    <div class="learn-step">
      <div class="learn-num" style="background:${data.color}20;color:${data.color}">${i+1}</div>
      <span class="learn-text">${item}</span>
    </div>
  `).join("");

  const box = document.getElementById("modal-box");
  box.style.borderColor = data.color;
  box.style.boxShadow = `0 20px 60px ${data.color}30`;

  document.getElementById("modal-overlay").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
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
        <h3>🎓 Workshop Guide</h3>
        <p>Welcome to <strong>From College to Corporate</strong>.<br/>
        This 120-minute workshop walks you through how data becomes business decisions and AI products inside a modern company.</p>
        <div class="nav-hints">
          <div class="section-label">Navigation</div>
          <div class="hint-row">
            <kbd>→</kbd> Next step<br/>
            <kbd>←</kbd> Previous<br/>
            <kbd>Space</kbd> Auto-play<br/>
            <kbd>R</kbd> Reset
          </div>
        </div>
        <div class="click-hint">Click any role node to learn about that career path. Hover for a quick preview.</div>
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
      ${["story","skills","day","career"].map(t => `
        <button class="panel-tab${state.activeTab===t?" active":""}" data-tab="${t}" style="${state.activeTab===t?`--tab-color:${color}`:""}">
          ${t}
        </button>`).join("")}
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

  // Tab click handlers
  if (role) {
    panel.querySelectorAll(".panel-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeTab = btn.dataset.tab;
        renderSidePanel();
      });
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
        <div class="section-label">Real Example</div>
        <div class="example-box" style="border-left-color:${color};background:${color}10">${story.example}</div>
        ${role ? `
          <div class="section-label">Output</div>
          <div style="margin-bottom:10px"><span class="output-badge" style="background:${color}">${role.output}</span></div>
        ` : ""}
        <div class="section-label">Next Stage</div>
        <p class="next-stage">→ ${story.next}</p>
      `;
    }
  }

  if (state.activeTab === "skills" && role) {
    div.innerHTML = `
      <div class="section-label">Responsibilities</div>
      ${role.responsibilities.map(r => `
        <div class="resp-item">
          <span class="resp-bullet" style="color:${color}">·</span>
          <span class="resp-text">${r}</span>
        </div>`).join("")}
      <div class="section-label" style="margin-top:12px">Skills Required</div>
      <div class="tag-group">
        ${role.skills.map(s => `<span class="tag tag-skill" style="background:${color}15;color:${color}">${s}</span>`).join("")}
      </div>
      <div class="section-label">Tools Used</div>
      <div class="tag-group">
        ${role.tools.map(t => `<span class="tag tag-tool">${t}</span>`).join("")}
      </div>
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
      ${role.learningPath.map((item, i) => `
        <div class="learn-step">
          <div class="learn-num" style="background:${color}20;color:${color}">${i+1}</div>
          <span class="learn-text">${item}</span>
        </div>`).join("")}
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
  return `
    <div class="day-bar-label">Typical Day</div>
    <div class="day-bar-track">${track}</div>
    ${legend}
  `;
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
function next() {
  if (state.step < TOTAL) { state.step++; state.activeTab = "story"; render(); }
}

function prev() {
  if (state.step > 0) { state.step--; state.activeTab = "story"; render(); }
}

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
      state.step++;
      state.activeTab = "story";
      render();
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

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight")  next();
    else if (e.key === "ArrowLeft")  prev();
    else if (e.key === " ")  { e.preventDefault(); toggleAuto(); }
    else if (e.key === "r" || e.key === "R")  reset();
    else if (e.key === "Escape") closeModal();
  });

  render();
});
