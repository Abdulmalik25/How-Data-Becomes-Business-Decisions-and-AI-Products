const COLORS = {
  architect: "#334155",
  engineer: "#2563eb",
  analytics: "#0f9d78",
  mlGroup: "#ea580c",
  ai: "#7c3aed",
  outcomes: "#1e293b",
};

const ICONS = {
  architect: "M12 3l7 4v5c0 4.5-2.9 7.7-7 9-4.1-1.3-7-4.5-7-9V7l7-4zm0 4v10m-4-6h8",
  engineer: "M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4L21 6l-3-3-3.3 3.3z",
  analyst: "M4 18l5-5 4 4 7-9m-5 0h5v5",
  bi: "M5 20v-7m7 7V8m7 12V4M3 20h18",
  scientist: "M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3m-5 0h6M8 15h8",
  ml: "M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0-5v3m0 12v3M3 12h3m12 0h3M5 5l2 2m10 10l2 2m0-14l-2 2M7 17l-2 2",
  ai: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z",
  stakeholders: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 21c.4-4 2.5-6 5-6s4.6 2 5 6m-2-6c2.7 0 5.4 2 6 6",
};

const ROLE_DATA = {
  architect: {
    title: "Data Architect",
    color: COLORS.architect,
    icon: "architect",
    question: "How should the data ecosystem be designed, governed, and scaled?",
    work: "Defines architecture, data models, governance rules, security standards, platform strategy, and long-term scalability patterns across the full ecosystem.",
    skills: ["Data Modeling", "Governance", "Security", "Cloud Architecture", "Platform Strategy", "System Design"],
    tools: ["Snowflake", "Databricks", "BigQuery", "AWS/GCP/Azure", "Terraform", "Draw.io"],
    output: "Architecture principles, data models, standards, governance patterns, and platform blueprints.",
    beginner: "The Data Architect designs the map everyone else builds on.",
    sits: "Cross-cutting: guides sources, pipelines, platforms, analytics, ML, AI, and governance.",
    fit: "You think in systems and want to design the blueprint everyone else builds on.",
    workMix: [
      { label: "Architecture", pct: 35, color: COLORS.architect },
      { label: "Governance", pct: 25, color: "#475569" },
      { label: "Stakeholders", pct: 25, color: "#64748b" },
      { label: "Standards", pct: 15, color: "#94a3b8" },
    ],
    learningPath: ["SQL and data modeling", "Cloud data platforms", "Governance and security", "System design", "Architecture documentation"],
  },
  engineer: {
    title: "Data Engineer",
    color: COLORS.engineer,
    icon: "engineer",
    question: "How do we collect, move, validate, and store data reliably?",
    work: "Builds ingestion, orchestration, validation, transformation, storage, and automation across batch, streaming, CDC, and lakehouse or warehouse layers.",
    skills: ["SQL", "Python", "ETL/ELT", "Orchestration", "Data Quality", "Cloud Storage"],
    tools: ["Airflow", "Spark", "Kafka", "dbt", "Snowflake", "Databricks"],
    output: "Reliable pipelines, clean datasets, and business-ready data layers.",
    beginner: "The Data Engineer makes sure data arrives safely, on time, and in usable shape.",
    sits: "Owns the pipeline/platform zone from sources through Bronze, Silver, Gold, and often semantic-ready layers.",
    fit: "You like writing code that moves and shapes data reliably behind the scenes.",
    workMix: [
      { label: "Pipelines", pct: 40, color: COLORS.engineer },
      { label: "Data Quality", pct: 25, color: "#3b82f6" },
      { label: "Cloud Ops", pct: 20, color: "#60a5fa" },
      { label: "Automation", pct: 15, color: "#93c5fd" },
    ],
    learningPath: ["SQL", "Python", "Orchestration", "Spark or warehouse ELT", "Cloud fundamentals"],
  },
  analyst: {
    title: "Data Analyst",
    color: COLORS.analytics,
    icon: "analyst",
    question: "What happened, why did it happen, and what should the business do?",
    work: "Queries trusted data, investigates trends, explains drivers, frames business questions, and turns findings into recommendations.",
    skills: ["SQL", "Excel", "Statistics", "Business Analysis", "Data Storytelling", "Python basics"],
    tools: ["SQL", "Excel", "Power BI", "Tableau", "Looker", "Python/pandas"],
    output: "Reports, analysis, insights, recommendations, and decision support.",
    beginner: "The Data Analyst explains what the numbers mean for the business.",
    sits: "Works mainly from Gold data, semantic metrics, KPIs, and business context.",
    fit: "You enjoy digging into why something happened and explaining it clearly.",
    workMix: [
      { label: "Analysis", pct: 40, color: COLORS.analytics },
      { label: "SQL", pct: 25, color: "#14b88f" },
      { label: "Communication", pct: 25, color: "#5eead4" },
      { label: "Reporting", pct: 10, color: "#99f6e4" },
    ],
    learningPath: ["Excel", "SQL", "Statistics", "Dashboard basics", "Business communication"],
  },
  bi: {
    title: "BI Developer",
    color: COLORS.analytics,
    icon: "bi",
    question: "How are we performing, and how can teams monitor it every day?",
    work: "Builds dashboards, KPI systems, semantic models, reporting automation, access-controlled views, and self-serve business intelligence experiences.",
    skills: ["Power BI/Tableau", "SQL", "DAX or calculated fields", "Semantic Modeling", "UX for Dashboards", "Data Modeling"],
    tools: ["Power BI", "Tableau", "Looker", "SQL Server", "DAX Studio", "dbt Metrics"],
    output: "Dashboards, KPI systems, semantic models, and automated reporting.",
    beginner: "The BI Developer turns trusted data into dashboards teams can use every day.",
    sits: "Works mainly from Gold data, semantic layers, KPIs, and stakeholder reporting needs.",
    fit: "You like building dashboards and making performance visible.",
    workMix: [
      { label: "Dashboards", pct: 40, color: COLORS.analytics },
      { label: "Semantic Models", pct: 25, color: "#14b88f" },
      { label: "SQL Prep", pct: 20, color: "#5eead4" },
      { label: "Training", pct: 15, color: "#99f6e4" },
    ],
    learningPath: ["SQL", "Power BI or Tableau", "Data modeling", "DAX/calculations", "Dashboard UX"],
  },
  scientist: {
    title: "Data Scientist",
    color: COLORS.mlGroup,
    icon: "scientist",
    question: "What is likely to happen next, and what patterns can we model?",
    work: "Explores Silver and Gold data, feature data, event logs, experiments, and external data to build statistical models, forecasts, segments, and predictive insights.",
    skills: ["Python", "Statistics", "Machine Learning", "Experimentation", "Feature Engineering", "Causal Thinking"],
    tools: ["Python", "scikit-learn", "Jupyter", "SQL", "MLflow", "PyTorch/TensorFlow"],
    output: "Predictive models, forecasts, experiments, segments, and statistical insights.",
    beginner: "The Data Scientist uses data to predict, test, and discover patterns.",
    sits: "Works across Silver, Gold, feature data, event logs, experiments, and external datasets.",
    fit: "You are drawn to statistics, prediction, experimentation, and patterns.",
    workMix: [
      { label: "Exploration", pct: 25, color: COLORS.mlGroup },
      { label: "Modeling", pct: 35, color: "#f97316" },
      { label: "Experiments", pct: 20, color: "#fb923c" },
      { label: "Communication", pct: 20, color: "#fdba74" },
    ],
    learningPath: ["Python", "Statistics", "Machine learning", "Experimentation", "Feature engineering"],
  },
  ml: {
    title: "ML Engineer",
    color: COLORS.mlGroup,
    icon: "ml",
    question: "How do we deploy, monitor, retrain, and serve models reliably?",
    work: "Turns models into production services with APIs, CI/CD, containers, monitoring, feature pipelines, retraining workflows, and reliability practices.",
    skills: ["Python", "APIs", "Docker", "CI/CD", "Model Monitoring", "MLOps"],
    tools: ["FastAPI", "Docker", "Kubernetes", "MLflow", "Cloud ML Services", "Monitoring tools"],
    output: "Production ML APIs, model serving systems, monitoring, and retraining pipelines.",
    beginner: "The ML Engineer makes models work safely for real users and real systems.",
    sits: "Connects data science models to production applications, APIs, and monitoring loops.",
    fit: "You want models running in production, not just notebooks.",
    workMix: [
      { label: "Deployment", pct: 35, color: COLORS.mlGroup },
      { label: "APIs/CI-CD", pct: 25, color: "#f97316" },
      { label: "Monitoring", pct: 25, color: "#fb923c" },
      { label: "Retraining", pct: 15, color: "#fdba74" },
    ],
    learningPath: ["Python", "APIs", "Docker", "CI/CD", "MLOps and monitoring"],
  },
  ai: {
    title: "AI Engineer",
    color: COLORS.ai,
    icon: "ai",
    question: "How do we build useful AI products with company data and LLMs?",
    work: "Builds LLM applications using RAG, vector databases, tool calling, agents, evaluations, guardrails, APIs, deployment, and monitoring.",
    skills: ["Python", "LLM APIs", "RAG", "Vector Databases", "Tool Calling", "Evaluation"],
    tools: ["OpenAI/LLM APIs", "LangChain/LlamaIndex", "Vector DBs", "FastAPI", "Eval frameworks", "Observability"],
    output: "Chatbots, RAG apps, copilots, agents, AI workflows, and AI products.",
    beginner: "The AI Engineer turns company knowledge and LLMs into usable AI software.",
    sits: "Uses Gold data, documents, APIs, knowledge sources, vector databases, and LLMs.",
    fit: "You want to build AI-powered products and workflows.",
    workMix: [
      { label: "AI Apps", pct: 35, color: COLORS.ai },
      { label: "RAG/Agents", pct: 25, color: "#8b5cf6" },
      { label: "Evaluations", pct: 25, color: "#a78bfa" },
      { label: "Deployment", pct: 15, color: "#c4b5fd" },
    ],
    learningPath: ["Python and APIs", "LLM fundamentals", "RAG and vector search", "Tool calling/agents", "Evaluations and guardrails"],
  },
};

const STAKEHOLDER_DATA = {
  title: "Business Stakeholders / Consumers",
  color: COLORS.outcomes,
  icon: "stakeholders",
  question: "Who receives the value from the data ecosystem?",
  work: "Executives, managers, product teams, sales, marketing, operations, and customers use the outputs created by data practitioners.",
  output: "Better decisions, revenue growth, cost saving, automation, and better customer experience.",
  beginner: "They are not a data practitioner role; they are the people and teams who benefit from the work.",
  sits: "At the end of the value chain, receiving dashboards, reports, predictions, recommendations, and AI products.",
};

const SECTION_DATA = {
  sources: {
    title: "Data Sources", color: COLORS.engineer, icon: "engineer", question: "Where does raw data originate?",
    work: "Applications, databases, APIs, CRM systems, payment systems, events, files, spreadsheets, and documents create operational data before it is prepared for business use.",
    output: "Raw source data ready for ingestion, validation, and storage.", beginner: "This is the starting point: data is created by real systems and user activity.", sits: "Before engineering pipelines, often owned by operational systems and application teams.",
    skills: ["Source Systems", "APIs", "Events", "Files", "Data Contracts", "Access Patterns"], tools: ["Databases", "SaaS APIs", "CRM", "Payment Systems", "Event Streams", "Object Storage"],
    workMix: [{ label: "Systems", pct: 35, color: COLORS.engineer }, { label: "APIs", pct: 25, color: "#3b82f6" }, { label: "Events", pct: 20, color: "#60a5fa" }, { label: "Files", pct: 20, color: "#93c5fd" }],
    learningPath: ["Identify source systems", "Understand structured vs unstructured data", "Learn APIs and events", "Document ownership and refresh patterns"],
  },
  ingestion: {
    title: "Ingestion & Orchestration", color: COLORS.engineer, icon: "engineer", question: "How does data move reliably from sources into the platform?",
    work: "Data Engineers build scheduled batch jobs, streaming pipelines, CDC feeds, validation checks, and orchestration workflows that keep data flowing consistently.",
    output: "Automated pipelines with monitoring, validation, and dependable refresh schedules.", beginner: "This is the transport system that moves data without manual copy-paste work.", sits: "Between source systems and the lakehouse or warehouse storage layers.",
    skills: ["ETL/ELT", "Orchestration", "Validation", "Batch", "Streaming", "CDC"], tools: ["Airflow", "Kafka", "Spark", "dbt", "Cloud Storage", "Warehouse Loads"], workMix: ROLE_DATA.engineer.workMix,
    learningPath: ["SQL and Python", "Batch ingestion", "Scheduling and retries", "Streaming or CDC", "Data quality checks"],
  },
  lakehouse: {
    title: "Lakehouse / Warehouse Layers", color: COLORS.engineer, icon: "engineer", question: "How does raw data become clean, trusted, and reusable?",
    work: "Bronze keeps raw data, Silver cleans and validates it, Gold organizes business-ready datasets, and the semantic layer standardizes metrics, KPIs, and reusable logic.",
    output: "Trusted data layers for analytics, BI, ML, and AI products.", beginner: "This is where messy raw data becomes something people and systems can trust.", sits: "At the center of the ecosystem, after ingestion and before downstream use cases.",
    skills: ["Data Modeling", "SQL", "Data Quality", "Transformations", "Semantic Metrics", "Governance"], tools: ["Snowflake", "Databricks", "BigQuery", "dbt", "Spark", "Catalogs"], workMix: ROLE_DATA.engineer.workMix,
    learningPath: ["Bronze/Silver/Gold patterns", "Dimensional modeling", "Data quality rules", "Metric definitions", "Documentation and lineage"],
  },
  analyticsBranch: {
    title: "Analytics/BI Branch", color: COLORS.analytics, icon: "bi", question: "How does trusted data become insight and reporting?",
    work: "Data Analysts and BI Developers use Gold data and semantic metrics to create reports, dashboards, KPI systems, insights, and business recommendations.",
    output: "Dashboards, reports, KPIs, insights, recommendations, and decision support.", beginner: "This branch explains what happened and what the business should do next.", sits: "Downstream of Gold datasets and semantic metrics, before business decisions.",
    skills: ["SQL", "Dashboard UX", "Business Analysis", "KPI Design", "Storytelling", "Data Modeling"], tools: ["Power BI", "Tableau", "Looker", "Excel", "SQL", "dbt Metrics"], workMix: ROLE_DATA.bi.workMix,
    learningPath: ["SQL", "KPI definitions", "Power BI or Tableau", "Business analysis", "Communication"],
  },
  mlBranch: {
    title: "Machine Learning Branch", color: COLORS.mlGroup, icon: "scientist", question: "How does data become prediction and automation?",
    work: "Data Scientists build models using Silver, Gold, feature, event, experimental, and external data; ML Engineers deploy, serve, monitor, and retrain models in production.",
    output: "Predictive models, experiments, forecasting, segmentation, ML APIs, monitoring, and retraining workflows.", beginner: "This branch moves from analysis into prediction and production model systems.", sits: "Downstream of trusted data, feature data, event logs, experiments, and model deployment systems.",
    skills: ["Statistics", "Python", "Feature Engineering", "Modeling", "APIs", "MLOps"], tools: ["scikit-learn", "Jupyter", "MLflow", "FastAPI", "Docker", "Monitoring"], workMix: ROLE_DATA.scientist.workMix,
    learningPath: ["Statistics", "Python ML", "Feature engineering", "Model evaluation", "APIs and MLOps"],
  },
  aiBranch: {
    title: "AI Products Branch", color: COLORS.ai, icon: "ai", question: "How does company knowledge become AI software?",
    work: "AI Engineers combine Gold data, documents, APIs, vector databases, LLMs, evaluations, guardrails, tool calling, and deployment patterns to build usable AI products.",
    output: "Chatbots, RAG apps, copilots, agents, AI workflows, and AI products.", beginner: "This branch turns trusted data and knowledge sources into interactive AI experiences.", sits: "Downstream of data products, document stores, APIs, LLMs, vector databases, and application systems.",
    skills: ["Python", "LLM APIs", "RAG", "Vector Search", "Tool Calling", "Evaluation"], tools: ["OpenAI/LLM APIs", "LangChain/LlamaIndex", "Vector DBs", "FastAPI", "Eval Frameworks", "Observability"], workMix: ROLE_DATA.ai.workMix,
    learningPath: ["LLM fundamentals", "RAG and retrieval", "Tool calling and agents", "Evals and guardrails", "Deployment and monitoring"],
  },
};
const ROLE_ORDER = ["architect", "engineer", "analyst", "bi", "scientist", "ml", "ai"];

const MOBILE_STEPS = [
  { key: "sources", title: "1. Where data begins", color: COLORS.engineer, text: "Apps, databases, APIs, CRM, payments, events, files, spreadsheets, and documents create raw source data." },
  { key: "ingestion", title: "2. How data is collected", color: COLORS.engineer, role: "engineer", text: "Ingestion collects data through batch jobs, streaming pipelines, CDC, scheduling, and validation checks." },
  { key: "engineer", title: "3. How data is engineered", color: COLORS.engineer, role: "engineer", text: "Data Engineers automate movement, quality checks, orchestration, and storage so data becomes reliable." },
  { key: "lakehouse", title: "4. How data becomes Bronze/Silver/Gold/Semantic", color: COLORS.engineer, text: "Bronze keeps raw data, Silver cleans and validates it, Gold prepares business-ready data, and the semantic layer defines trusted KPIs and reusable logic." },
  { key: "analyticsBranch", title: "5. How Analytics/BI uses it", color: COLORS.analytics, roles: ["analyst", "bi"], text: "Data Analysts and BI Developers turn trusted Gold data and semantic metrics into dashboards, reports, KPIs, insights, and recommendations." },
  { key: "mlBranch", title: "6. How Machine Learning uses it", color: COLORS.mlGroup, roles: ["scientist", "ml"], text: "Data Scientists model patterns from Silver, Gold, feature, event, and external data; ML Engineers deploy APIs, monitoring, CI/CD, and retraining workflows." },
  { key: "aiBranch", title: "7. How AI Products use it", color: COLORS.ai, role: "ai", text: "AI Engineers combine Gold data, documents, APIs, vector databases, LLMs, tool calling, agents, evaluations, guardrails, and deployment patterns." },
  { key: "stakeholders", title: "8. How business teams benefit", color: COLORS.outcomes, role: "stakeholders", text: "Executives, managers, product teams, sales, marketing, operations, and customers use the outputs for decisions, growth, savings, automation, and better experiences." },
];

const QUIZ_QUESTIONS = [
  {
    text: "Which sounds most like a good day at work?",
    options: [
      { label: "Designing how systems fit together", scores: { architect: 3, engineer: 1 } },
      { label: "Writing code that moves data reliably", scores: { engineer: 3, ml: 1 } },
      { label: "Explaining what the numbers mean", scores: { analyst: 3, bi: 1 } },
      { label: "Building dashboards people check daily", scores: { bi: 3, analyst: 1 } },
    ],
  },
  {
    text: "What's more exciting to you?",
    options: [
      { label: "Predicting what happens next", scores: { scientist: 3, ml: 1 } },
      { label: "Shipping a model to real users", scores: { ml: 3, engineer: 1 } },
      { label: "Building an AI product from scratch", scores: { ai: 3, ml: 1 } },
      { label: "Setting standards for the platform", scores: { architect: 3, engineer: 1 } },
    ],
  },
  {
    text: "Pick a tool you'd enjoy getting good at:",
    options: [
      { label: "SQL + Excel", scores: { analyst: 3, bi: 1 } },
      { label: "Power BI / Tableau", scores: { bi: 3, analyst: 1 } },
      { label: "Python + scikit-learn", scores: { scientist: 3, ml: 1 } },
      { label: "LLM APIs / Vector DBs", scores: { ai: 3 } },
    ],
  },
];

let quizAnswers = [];
let lastFocusedEl = null;
let tooltipEl = null;

function iconSVGString(key, size = 20, color = "#111827") {
  const d = ICONS[key] || ICONS.analyst;
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true"><path d="${d}" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function getDetailData(key) {
  return key === "stakeholders" ? STAKEHOLDER_DATA : ROLE_DATA[key];
}

function getSectionData(key) {
  return SECTION_DATA[key];
}
function setModalLabels(isStakeholder) {
  const labels = document.querySelectorAll("#modal-body .section-label");
  const roleLabels = [
    "Question this role answers",
    "Day-to-day work",
    "Output they create",
    "Beginner explanation",
    "Where they sit",
    "Tools / skills involved",
    "Common tools",
    "Work mix",
    "Learning path",
  ];
  const stakeholderLabels = [
    "Who they are",
    "What they receive",
    "Business value",
    "Important distinction",
    "Where they sit",
    "Typical consumers",
    "Outputs received",
    "Value mix",
    "How to explain it",
  ];
  const next = isStakeholder ? stakeholderLabels : roleLabels;
  labels.forEach((label, index) => {
    if (next[index]) label.textContent = next[index];
  });
}

function setSectionModalLabels() {
  const labels = document.querySelectorAll("#modal-body .section-label");
  const next = [
    "Question this area answers",
    "Work happening here",
    "Output created",
    "Beginner explanation",
    "Where it sits",
    "Tools / skills involved",
    "Common tools",
    "Activity mix",
    "What to learn next",
  ];
  labels.forEach((label, index) => {
    if (next[index]) label.textContent = next[index];
  });
}

function buildDayBarHTML(items = []) {
  if (!items.length) return "";
  const track = items.map(i => `<div class="day-bar-segment" style="width:${i.pct}%;background:${i.color}"></div>`).join("");
  const legend = items.map(i => `
    <div class="day-bar-legend-row">
      <div class="day-bar-swatch" style="background:${i.color}"></div>
      <span class="day-bar-text">${i.label}</span>
      <span class="day-bar-pct" style="color:${i.color}">${i.pct}%</span>
    </div>`).join("");
  return `<div class="day-bar-label">Work mix</div><div class="day-bar-track">${track}</div>${legend}`;
}

function openDetail(key) {
  const data = getDetailData(key);
  if (!data) return;
  const isStakeholder = key === "stakeholders";
  lastFocusedEl = document.activeElement;
  setModalLabels(isStakeholder);

  document.getElementById("modal-icon").innerHTML = iconSVGString(data.icon, 30, data.color);
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-question").textContent = data.question;
  document.getElementById("modal-what").textContent = isStakeholder ? data.work : data.question;
  document.getElementById("modal-why").textContent = data.work;

  const exBox = document.getElementById("modal-example");
  exBox.textContent = data.output;
  exBox.style.borderLeftColor = data.color;
  exBox.style.background = `${data.color}12`;

  const beginnerEl = document.getElementById("modal-salary");
  beginnerEl.textContent = data.beginner;
  beginnerEl.style.color = data.color;
  document.getElementById("modal-hires").textContent = data.sits;

  const skills = isStakeholder
    ? ["Executives", "Managers", "Product Teams", "Sales", "Marketing", "Operations", "Customers"]
    : data.skills;
  const tools = isStakeholder
    ? ["Dashboards", "Reports", "KPIs", "Predictions", "Recommendations", "AI Products"]
    : data.tools;
  document.getElementById("modal-skills").innerHTML = skills.map(s => `<span class="tag tag-skill" style="background:${data.color}15;color:${data.color}">${s}</span>`).join("");
  document.getElementById("modal-tools").innerHTML = tools.map(t => `<span class="tag tag-tool">${t}</span>`).join("");
  document.getElementById("modal-daybar").innerHTML = isStakeholder
    ? buildDayBarHTML([
        { label: "Decisions", pct: 30, color: COLORS.outcomes },
        { label: "Automation", pct: 25, color: "#475569" },
        { label: "Growth", pct: 25, color: "#64748b" },
        { label: "Experience", pct: 20, color: "#94a3b8" },
      ])
    : buildDayBarHTML(data.workMix);
  document.getElementById("modal-learning").innerHTML = (isStakeholder
    ? ["They consume outputs; they are not a practitioner role.", "They ask questions, make decisions, and use products built from data.", "They close the loop by giving feedback to data teams."]
    : data.learningPath
  ).map((item, index) => `<div class="learn-step"><div class="learn-num" style="background:${data.color}20;color:${data.color}">${index + 1}</div><span class="learn-text">${item}</span></div>`).join("");

  const box = document.getElementById("modal-box");
  box.style.borderColor = data.color;
  box.style.boxShadow = `0 20px 60px ${data.color}25`;
  document.getElementById("modal-overlay").classList.remove("hidden");
  document.getElementById("modal-close").focus();
}

function openSectionDetail(key) {
  const data = getSectionData(key);
  if (!data) return;
  lastFocusedEl = document.activeElement;
  setSectionModalLabels();

  document.getElementById("modal-icon").innerHTML = iconSVGString(data.icon, 30, data.color);
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-question").textContent = data.question;
  document.getElementById("modal-what").textContent = data.question;
  document.getElementById("modal-why").textContent = data.work;

  const exBox = document.getElementById("modal-example");
  exBox.textContent = data.output;
  exBox.style.borderLeftColor = data.color;
  exBox.style.background = `${data.color}12`;

  const beginnerEl = document.getElementById("modal-salary");
  beginnerEl.textContent = data.beginner;
  beginnerEl.style.color = data.color;
  document.getElementById("modal-hires").textContent = data.sits;
  document.getElementById("modal-skills").innerHTML = data.skills.map(s => `<span class="tag tag-skill" style="background:${data.color}15;color:${data.color}">${s}</span>`).join("");
  document.getElementById("modal-tools").innerHTML = data.tools.map(t => `<span class="tag tag-tool">${t}</span>`).join("");
  document.getElementById("modal-daybar").innerHTML = buildDayBarHTML(data.workMix);
  document.getElementById("modal-learning").innerHTML = data.learningPath.map((item, index) => `<div class="learn-step"><div class="learn-num" style="background:${data.color}20;color:${data.color}">${index + 1}</div><span class="learn-text">${item}</span></div>`).join("");

  const box = document.getElementById("modal-box");
  box.style.borderColor = data.color;
  box.style.boxShadow = `0 20px 60px ${data.color}25`;
  document.getElementById("modal-overlay").classList.remove("hidden");
  document.getElementById("modal-close").focus();
}

function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
  if (lastFocusedEl && lastFocusedEl.focus) lastFocusedEl.focus();
}

function ensureTooltip() {
  if (!tooltipEl) tooltipEl = document.getElementById("ecosystem-tooltip");
  return tooltipEl;
}

function showTooltip(key, target) {
  const data = getDetailData(key);
  const tooltip = ensureTooltip();
  if (!data || !tooltip || !target) return;
  const isStakeholder = key === "stakeholders";
  tooltip.innerHTML = `
    <strong style="color:${data.color}">${iconSVGString(data.icon, 16, data.color)} ${data.title}</strong>
    <span>${isStakeholder ? data.output : data.question}</span>
  `;
  const rect = target.getBoundingClientRect();
  const shell = document.querySelector(".ecosystem-shell").getBoundingClientRect();
  tooltip.style.left = `${Math.min(Math.max(rect.left - shell.left, 12), shell.width - 300)}px`;
  tooltip.style.top = `${Math.max(rect.top - shell.top - 86, 12)}px`;
  tooltip.classList.add("visible");
}

function showSectionTooltip(key, target) {
  const data = getSectionData(key);
  const tooltip = ensureTooltip();
  if (!data || !tooltip || !target) return;
  tooltip.innerHTML = `
    <strong style="color:${data.color}">${iconSVGString(data.icon, 16, data.color)} ${data.title}</strong>
    <span>${data.question}</span>
  `;
  const rect = target.getBoundingClientRect();
  const shell = document.querySelector(".ecosystem-shell").getBoundingClientRect();
  tooltip.style.left = `${Math.min(Math.max(rect.left - shell.left, 12), shell.width - 300)}px`;
  tooltip.style.top = `${Math.max(rect.top - shell.top - 86, 12)}px`;
  tooltip.classList.add("visible");
}

function hideTooltip() {
  const tooltip = ensureTooltip();
  if (tooltip) tooltip.classList.remove("visible");
}

function renderMobileStory() {
  const wrap = document.getElementById("ecosystem-mobile");
  if (!wrap) return;
  wrap.innerHTML = MOBILE_STEPS.map((step, index) => {
    const roles = step.roles || (step.role ? [step.role] : []);
    const buttons = roles.map(key => {
      const data = getDetailData(key);
      return `<button class="mobile-role-link js-detail" type="button" data-detail="${key}" style="--step-color:${data.color}">${data.title}</button>`;
    }).join("");
    return `
      <article class="mobile-step-card${index === 0 ? " is-open" : ""}" style="--step-color:${step.color}" data-mobile-step="${step.key}">
        <span class="mobile-step-line"></span>
        <button class="mobile-step-toggle" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
          <h3>${step.title}</h3>
        </button>
        <div class="mobile-step-body">
          <p>${step.text}</p>
          ${buttons ? `<div class="mobile-role-row">${buttons}</div>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

function getMapNodeData(node) {
  if (!node) return null;
  const roleKey = node.dataset.detail;
  const sectionKey = node.dataset.section;
  const key = roleKey || sectionKey;
  const data = roleKey ? getDetailData(roleKey) : getSectionData(sectionKey);
  if (!data) return null;
  return { key, data, flowGroup: node.dataset.flowGroup || key };
}

function updateMapDetail(data) {
  const panel = document.getElementById("map-detail-panel");
  if (!panel || !data) return;
  panel.style.setProperty("--panel-color", data.color);
  document.getElementById("map-detail-title").textContent = data.title;
  document.getElementById("map-detail-question").textContent = data.question;
  document.getElementById("map-detail-work").textContent = data.work;
  document.getElementById("map-detail-output").textContent = data.output;
  document.getElementById("map-detail-beginner").textContent = data.beginner;
}

let currentFlowGroup = null;

function setActiveFlow(group) {
  currentFlowGroup = group;
  document.querySelectorAll(".js-map-node").forEach(node => {
    node.classList.toggle("is-active", !!group && (node.dataset.flowGroup === group || node.dataset.mapKey === group));
  });
  document.querySelectorAll(".flow-path").forEach(path => {
    path.classList.toggle("is-active", !!group && (path.dataset.flow === group || (group === "engineer" && ["ingestion", "lakehouse"].includes(path.dataset.flow))));
  });
}

function setupMapInteractions() {
  const nodes = document.querySelectorAll(".js-map-node");
  if (!nodes.length) return;
  const setHoverVisualState = (node, isHovered) => {
    node.classList.toggle("is-hovered", isHovered);
  };
  const activateFromIntentionalClick = node => {
    const payload = getMapNodeData(node);
    if (!payload) return;
    updateMapDetail(payload.data);
    setActiveFlow(payload.flowGroup);
  };
  nodes.forEach(node => {
    node.addEventListener("mouseenter", () => {
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) setHoverVisualState(node, true);
    });
    node.addEventListener("mouseleave", () => setHoverVisualState(node, false));
    node.addEventListener("focus", () => setHoverVisualState(node, true));
    node.addEventListener("blur", () => setHoverVisualState(node, false));
    node.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      activateFromIntentionalClick(node);
    });
    node.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activateFromIntentionalClick(node);
      }
    });
  });
}

function setupMobileAccordions() {
  document.querySelectorAll(".mobile-step-card").forEach(card => {
    const toggle = card.querySelector(".mobile-step-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const isOpen = card.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });
}
function setupDiagramInteractions() {
  document.querySelectorAll(".js-detail:not(.js-map-node)").forEach(el => {
    const key = el.dataset.detail;
    el.addEventListener("click", () => openDetail(key));
    el.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDetail(key);
      }
    });
    el.addEventListener("mouseenter", () => {
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) showTooltip(key, el);
    });
    el.addEventListener("mouseleave", hideTooltip);
    el.addEventListener("focus", () => showTooltip(key, el));
    el.addEventListener("blur", hideTooltip);
  });

  document.querySelectorAll(".js-section-detail:not(.js-map-node)").forEach(el => {
    const key = el.dataset.section;
    el.addEventListener("click", event => {
      if (event.target.closest("button")) return;
      openSectionDetail(key);
    });
    el.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openSectionDetail(key);
      }
    });
    el.addEventListener("mouseenter", () => {
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) showSectionTooltip(key, el);
    });
    el.addEventListener("mouseleave", hideTooltip);
    el.addEventListener("focus", () => showSectionTooltip(key, el));
    el.addEventListener("blur", hideTooltip);
  });

  document.querySelectorAll(".layer-card").forEach(card => {
    card.addEventListener("click", () => {
      const tooltip = ensureTooltip();
      const shell = document.querySelector(".ecosystem-shell").getBoundingClientRect();
      const rect = card.getBoundingClientRect();
      tooltip.innerHTML = `<strong style="color:${COLORS.engineer}">${card.querySelector("strong").textContent}</strong><span>${card.dataset.story}</span>`;
      tooltip.style.left = `${Math.min(Math.max(rect.left - shell.left, 12), shell.width - 300)}px`;
      tooltip.style.top = `${Math.max(rect.top - shell.top - 82, 12)}px`;
      tooltip.classList.add("visible");
      window.setTimeout(hideTooltip, 2400);
    });
  });
}

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

function setupQuiz() {
  const wrap = document.getElementById("path-quiz");
  if (!wrap) return;
  quizAnswers = [];
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
      const qi = Number(btn.dataset.q);
      const oi = Number(btn.dataset.o);
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
    Object.entries(opt.scores).forEach(([role, value]) => {
      scores[role] = (scores[role] || 0) + value;
    });
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
    <button type="button" class="btn btn-primary" id="quiz-explore-btn">Explore ${role.title}</button>
  `;
  resultEl.classList.add("visible");
  document.getElementById("quiz-explore-btn").addEventListener("click", () => openDetail(winner));
}

function setupShare() {
  const btn = document.getElementById("btn-share");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const shareData = {
      title: document.title,
      text: "An interactive tour of how raw data becomes business decisions and AI products.",
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        const original = btn.textContent;
        btn.textContent = "Link copied!";
        window.setTimeout(() => { btn.textContent = original; }, 2000);
      }
    } catch (error) {
      // User cancelled the native share dialog.
    }
  });
}

// ═══════════════════════════════════════════════════════
// DYNAMIC CONNECTORS
// Paths are computed from the *actual* rendered position of each card,
// not hardcoded coordinates — this is what guarantees they stay aligned
// regardless of column widths, content length, or viewport.
// ═══════════════════════════════════════════════════════
const SVG_NS = "http://www.w3.org/2000/svg";

function prefersReducedMotionNow() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function rectRelativeTo(stageRect, el) {
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return {
    left: r.left - stageRect.left,
    right: r.right - stageRect.left,
    top: r.top - stageRect.top,
    bottom: r.bottom - stageRect.top,
    cx: r.left - stageRect.left + r.width / 2,
    cy: r.top - stageRect.top + r.height / 2,
  };
}

function addFlowPath(layer, id, fromRect, toRect, cls, flow) {
  if (!fromRect || !toRect) return null;
  const midX = (fromRect.right + toRect.left) / 2;
  const d = `M ${fromRect.right} ${fromRect.cy} C ${midX} ${fromRect.cy}, ${midX} ${toRect.cy}, ${toRect.left} ${toRect.cy}`;
  const path = document.createElementNS(SVG_NS, "path");
  path.setAttribute("id", id);
  path.setAttribute("d", d);
  path.setAttribute("class", `flow-path ${cls}`);
  path.setAttribute("data-flow", flow);
  layer.appendChild(path);
  return path;
}

function spawnAmbientParticle(layer, pathId, dotClass, dur, delay) {
  if (!document.getElementById(pathId)) return;
  const circle = document.createElementNS(SVG_NS, "circle");
  circle.setAttribute("r", "4");
  circle.setAttribute("class", `flow-dot ${dotClass}`);
  const anim = document.createElementNS(SVG_NS, "animateMotion");
  anim.setAttribute("dur", `${dur}s`);
  anim.setAttribute("repeatCount", "indefinite");
  anim.setAttribute("begin", `${delay}s`);
  const mpath = document.createElementNS(SVG_NS, "mpath");
  mpath.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#${pathId}`);
  anim.appendChild(mpath);
  circle.appendChild(anim);
  layer.appendChild(circle);
}

function computeConnectors() {
  const svg = document.getElementById("flow-svg");
  const stage = document.querySelector(".map-stage");
  const connLayer = document.getElementById("connector-layer");
  const particleLayer = document.getElementById("particle-layer");
  if (!svg || !stage || !connLayer || !particleLayer) return;

  const stageRect = stage.getBoundingClientRect();
  const w = Math.round(stage.offsetWidth);
  const h = Math.round(stage.offsetHeight);
  if (!w || !h) return;
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  svg.setAttribute("width", w);
  svg.setAttribute("height", h);

  connLayer.innerHTML = "";
  particleLayer.innerHTML = "";

  const find = sel => rectRelativeTo(stageRect, stage.querySelector(sel));
  const ingestionRect = find('[data-node-id="ingestion"]');
  const platformRect = find('[data-node-id="platform"]');
  const analyticsBranchRect = find('[data-node-id="analyticsBranch"]');
  const mlBranchRect = find('[data-node-id="mlBranch"]');
  const aiBranchRect = find('[data-node-id="aiBranch"]');
  const outcomesRect = find('[data-node-id="stakeholders"]');

  for (let i = 1; i <= 9; i++) {
    const r = find(`[data-node-id="source-${i}"]`);
    addFlowPath(connLayer, `conn-source-${i}`, r, ingestionRect, "source-path", "sources");
  }
  addFlowPath(connLayer, "conn-ingestion-platform", ingestionRect, platformRect, "engineer-path", "ingestion");
  addFlowPath(connLayer, "conn-platform-analytics", platformRect, analyticsBranchRect, "analytics-path", "analyticsBranch");
  addFlowPath(connLayer, "conn-platform-ml", platformRect, mlBranchRect, "ml-path", "mlBranch");
  addFlowPath(connLayer, "conn-platform-ai", platformRect, aiBranchRect, "ai-path", "aiBranch");
  addFlowPath(connLayer, "conn-analytics-outcome", analyticsBranchRect, outcomesRect, "analytics-path", "stakeholders");
  addFlowPath(connLayer, "conn-ml-outcome", mlBranchRect, outcomesRect, "ml-path", "stakeholders");
  addFlowPath(connLayer, "conn-ai-outcome", aiBranchRect, outcomesRect, "ai-path", "stakeholders");

  if (!prefersReducedMotionNow()) {
    spawnAmbientParticle(particleLayer, "conn-source-3", "source-dot", 4.8, 0);
    spawnAmbientParticle(particleLayer, "conn-source-8", "source-dot", 5.4, 0.8);
    spawnAmbientParticle(particleLayer, "conn-ingestion-platform", "engineer-dot", 3.2, 0);
    spawnAmbientParticle(particleLayer, "conn-platform-analytics", "analytics-dot", 4.2, 0.2);
    spawnAmbientParticle(particleLayer, "conn-platform-ml", "ml-dot", 4.2, 0.5);
    spawnAmbientParticle(particleLayer, "conn-platform-ai", "ai-dot", 4.2, 0.9);
    spawnAmbientParticle(particleLayer, "conn-analytics-outcome", "analytics-dot", 3.6, 0.3);
    spawnAmbientParticle(particleLayer, "conn-ml-outcome", "ml-dot", 3.6, 0.6);
    spawnAmbientParticle(particleLayer, "conn-ai-outcome", "ai-dot", 3.6, 1.0);
  }

  // Re-apply whatever flow was highlighted before the rebuild (paths were wiped above)
  if (currentFlowGroup) setActiveFlow(currentFlowGroup);
}

function setupConnectorLifecycle() {
  computeConnectors();
  window.requestAnimationFrame(() => computeConnectors());
  window.addEventListener("load", computeConnectors);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(computeConnectors).catch(() => {});

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(computeConnectors, 150);
  });

  if (window.ResizeObserver) {
    const stage = document.querySelector(".map-stage");
    if (stage) {
      const ro = new ResizeObserver(() => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(computeConnectors, 100);
      });
      ro.observe(stage);
    }
  }
}

// ═══════════════════════════════════════════════════════
// MOVIE-STYLE TOUR CONTROLLER
// Reset / Prev / Next / Play All — highlights the active zone, emphasizes
// its connector, auto-scrolls the wide canvas to bring it into view, and
// updates the always-visible explanation bar.
// ═══════════════════════════════════════════════════════
const TOUR_STEPS = [
  { label: "Data Sources", flowGroup: "sources", scrollTo: '[data-node-id="source-1"]', detail: { type: "section", key: "sources" } },
  { label: "Ingestion & Orchestration", flowGroup: "ingestion", scrollTo: '[data-node-id="ingestion"]', detail: { type: "section", key: "ingestion" } },
  { label: "Bronze Layer", flowGroup: "ingestion", scrollTo: '[data-node-id="bronze"]', emphasizeNode: "bronze", detail: { type: "section", key: "lakehouse" } },
  { label: "Silver Layer", flowGroup: "ingestion", scrollTo: '[data-node-id="silver"]', emphasizeNode: "silver", detail: { type: "section", key: "lakehouse" } },
  { label: "Gold Layer", flowGroup: "ingestion", scrollTo: '[data-node-id="gold"]', emphasizeNode: "gold", detail: { type: "section", key: "lakehouse" } },
  { label: "Semantic Layer", flowGroup: "ingestion", scrollTo: '[data-node-id="semantic"]', emphasizeNode: "semantic", detail: { type: "section", key: "lakehouse" } },
  { label: "Analytics / BI Branch", flowGroup: "analyticsBranch", scrollTo: '[data-node-id="analyticsBranch"]', detail: { type: "section", key: "analyticsBranch" } },
  { label: "Machine Learning Branch", flowGroup: "mlBranch", scrollTo: '[data-node-id="mlBranch"]', detail: { type: "section", key: "mlBranch" } },
  { label: "AI Products Branch", flowGroup: "aiBranch", scrollTo: '[data-node-id="aiBranch"]', detail: { type: "section", key: "aiBranch" } },
  { label: "Business Outcomes", flowGroup: "stakeholders", scrollTo: '[data-node-id="stakeholders"]', detail: { type: "role", key: "stakeholders" } },
  { label: "Data Architect Zone", flowGroup: "architect", scrollTo: ".architect-ribbon", detail: { type: "role", key: "architect" } },
  { label: "Data Engineer Responsibility", flowGroup: "engineer", scrollTo: '[data-node-id="ingestion"]', detail: { type: "role", key: "engineer" } },
  { label: "Role Summary", flowGroup: null, scrollTo: ".roles-glance-card", detail: null },
  { label: "Final Recap", flowGroup: null, scrollTo: ".architect-ribbon", detail: null },
];
const TOUR_TOTAL = TOUR_STEPS.length;

const TOUR_INTRO_DETAIL = {
  title: "Interactive Tour",
  color: COLORS.engineer,
  question: "Use Next, Previous, Reset, or Play All to move through the ecosystem.",
  work: "The guided controls own this explanation panel. Hovering cards only gives a visual preview and will not change the active tour content.",
  output: "A stable step-by-step walkthrough from raw sources to business outcomes and AI products.",
  beginner: "Start with Next or Play All, then watch each section highlight in order.",
};

let tourStep = 0;
let tourAutoTimer = null;
let tourAutoPlaying = false;

function scrollStageTo(selector) {
  const scrollBox = document.getElementById("ecosystem-scroll");
  const target = selector && document.querySelector(selector);
  if (!scrollBox || !target) return;
  const boxRect = scrollBox.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const currentCenter = targetRect.left + targetRect.width / 2 - boxRect.left;
  const delta = currentCenter - boxRect.width / 2;
  const maxScroll = scrollBox.scrollWidth - scrollBox.clientWidth;
  const nextLeft = Math.max(0, Math.min(maxScroll, scrollBox.scrollLeft + delta));
  scrollBox.scrollTo({ left: nextLeft, behavior: prefersReducedMotionNow() ? "auto" : "smooth" });
}

function emphasizeLayerNode(nodeId) {
  document.querySelectorAll(".platform-layer.is-active").forEach(el => el.classList.remove("is-active"));
  if (!nodeId) return;
  const el = document.querySelector(`[data-node-id="${nodeId}"]`);
  if (el) el.classList.add("is-active");
}

function spawnTourEmphasisDot(flowGroup) {
  if (prefersReducedMotionNow() || !flowGroup) return;
  const path = document.querySelector(`#connector-layer .flow-path[data-flow="${flowGroup}"]`);
  const particleLayer = document.getElementById("particle-layer");
  if (!path || !particleLayer) return;
  const id = path.id;
  const circle = document.createElementNS(SVG_NS, "circle");
  circle.setAttribute("r", "6");
  circle.setAttribute("class", "tour-emphasis-dot");
  circle.setAttribute("fill", getComputedStyle(path).stroke || "#6366f1");
  const anim = document.createElementNS(SVG_NS, "animateMotion");
  anim.setAttribute("dur", "1.1s");
  anim.setAttribute("repeatCount", "1");
  const mpath = document.createElementNS(SVG_NS, "mpath");
  mpath.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#${id}`);
  anim.appendChild(mpath);
  circle.appendChild(anim);
  particleLayer.appendChild(circle);
  window.setTimeout(() => circle.remove(), 1300);
}

function renderTourStep() {
  const counter = document.getElementById("step-counter");
  const prevBtn = document.getElementById("btn-prev");
  const nextBtn = document.getElementById("btn-next");
  if (!counter || !prevBtn || !nextBtn) return;

  prevBtn.disabled = tourStep === 0;
  nextBtn.disabled = tourStep >= TOUR_TOTAL;
  counter.textContent = tourStep === 0 ? "Intro" : `${tourStep} / ${TOUR_TOTAL}`;

  if (tourStep === 0) {
    setActiveFlow(null);
    emphasizeLayerNode(null);
    document.querySelectorAll(".architect-ribbon.is-active").forEach(el => el.classList.remove("is-active"));
    updateMapDetail(TOUR_INTRO_DETAIL);
    return;
  }

  const step = TOUR_STEPS[tourStep - 1];
  setActiveFlow(step.flowGroup);
  emphasizeLayerNode(step.emphasizeNode || null);
  document.querySelector(".architect-ribbon").classList.toggle("is-active", step.flowGroup === "architect");

  if (step.detail) {
    const data = step.detail.type === "role" ? getDetailData(step.detail.key) : getSectionData(step.detail.key);
    if (data) updateMapDetail(data);
  }
  scrollStageTo(step.scrollTo);
  spawnTourEmphasisDot(step.flowGroup);
}

function tourNext() { if (tourStep < TOUR_TOTAL) { tourStep++; renderTourStep(); } }
function tourPrev() { if (tourStep > 0) { tourStep--; renderTourStep(); } }
function tourReset() {
  tourStep = 0;
  tourAutoPlaying = false;
  clearInterval(tourAutoTimer);
  tourAutoTimer = null;
  const autoBtn = document.getElementById("btn-auto");
  if (autoBtn) { autoBtn.textContent = "▶ Play All"; autoBtn.classList.remove("danger"); autoBtn.classList.add("dark"); }
  renderTourStep();
  const scrollBox = document.getElementById("ecosystem-scroll");
  if (scrollBox) scrollBox.scrollTo({ left: 0, behavior: prefersReducedMotionNow() ? "auto" : "smooth" });
}
function tourToggleAuto() {
  const autoBtn = document.getElementById("btn-auto");
  tourAutoPlaying = !tourAutoPlaying;
  if (tourAutoPlaying) {
    if (autoBtn) { autoBtn.textContent = "⏸ Pause"; autoBtn.classList.remove("dark"); autoBtn.classList.add("danger"); }
    tourAutoTimer = setInterval(() => {
      if (tourStep >= TOUR_TOTAL) { tourAutoPlaying = false; clearInterval(tourAutoTimer); if (autoBtn) { autoBtn.textContent = "▶ Play All"; autoBtn.classList.remove("danger"); autoBtn.classList.add("dark"); } return; }
      tourStep++;
      renderTourStep();
    }, 2600);
  } else {
    clearInterval(tourAutoTimer);
    tourAutoTimer = null;
    if (autoBtn) { autoBtn.textContent = "▶ Play All"; autoBtn.classList.remove("danger"); autoBtn.classList.add("dark"); }
  }
}

function setupTourControls() {
  const resetBtn = document.getElementById("btn-reset");
  const prevBtn = document.getElementById("btn-prev");
  const nextBtn = document.getElementById("btn-next");
  const autoBtn = document.getElementById("btn-auto");
  if (!resetBtn || !prevBtn || !nextBtn || !autoBtn) return;

  resetBtn.addEventListener("click", tourReset);
  prevBtn.addEventListener("click", tourPrev);
  nextBtn.addEventListener("click", tourNext);
  autoBtn.addEventListener("click", tourToggleAuto);

  window.addEventListener("keydown", event => {
    const overlayOpen = !document.getElementById("modal-overlay").classList.contains("hidden");
    if (overlayOpen) return;
    const tag = (document.activeElement && document.activeElement.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (event.key === "ArrowRight") tourNext();
    else if (event.key === "ArrowLeft") tourPrev();
    else if (event.key === " ") { event.preventDefault(); tourToggleAuto(); }
    else if (event.key === "r" || event.key === "R") tourReset();
  });

  renderTourStep();
}

document.addEventListener("DOMContentLoaded", () => {
  renderMobileStory();
  setupDiagramInteractions();
  setupMapInteractions();
  setupMobileAccordions();
  renderCompareTable();
  setupQuiz();
  setupShare();
  setupConnectorLifecycle();
  setupTourControls();

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", event => {
    if (event.target === document.getElementById("modal-overlay")) closeModal();
  });
  window.addEventListener("keydown", event => {
    if (event.key === "Escape" && !document.getElementById("modal-overlay").classList.contains("hidden")) closeModal();
  });
});
