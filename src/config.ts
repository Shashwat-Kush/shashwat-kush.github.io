export const siteConfig = {
  name: "Shashwat Kushwaha",
  title: "Incoming Analyst @ Deloitte | Data & ML",
  description:
    "Portfolio of Shashwat Kushwaha — data analytics, machine learning, and systems. Featured: an end-to-end movie recommendation engine with a live demo.",
  accentColor: "#8b5cf6",
  resumeUrl: "/resume.pdf",
  social: {
    email: "shashwatkush002@gmail.com",
    linkedin: "https://www.linkedin.com/in/shashwatkushwaha-",
    github: "https://github.com/Shashwat-Kush",
  },
  aboutMe:
    "I'm a final-year Industrial and Systems Engineering student at IIT Kharagpur, working across data analytics, machine learning, and operations. I've done deep learning research at the University of Kent and IISER Kolkata, worked as a Data Analyst at Atomberg Technologies, and I'm about to start as an analyst at Deloitte. Outside of coursework I build things: recommendation engines, automation pipelines, and the occasional poker bot.",
  skills: [
    "Python",
    "PyTorch",
    "C++",
    "SQL",
    "Machine Learning",
    "XGBoost",
    "Kafka",
    "MLflow",
    "FastAPI",
    "Docker",
    "GitHub Actions",
  ],
  projects: [
    {
      name: "Movie Recommender — Two-Tower Retrieval + C++ HNSW + LLM Reranking",
      featured: true,
      description:
        "An end-to-end recommendation engine trained on 25M MovieLens ratings: a history-based two-tower model in PyTorch (in-batch softmax with logQ correction and ID-dropout), a from-scratch C++ HNSW index over the full catalog, and LLM reranking on Cerebras — served over FastAPI with an interactive demo site. Handles brand-new users and brand-new movies without retraining.",
      metrics: [
        { value: "9.5%", label: "recall@10 · 2× popularity baseline" },
        { value: "26,744", label: "movies in the C++ HNSW index" },
        { value: "68×", label: "cold-start improvement via ID-dropout" },
        { value: "~0.9s", label: "end-to-end retrieval + LLM rerank" },
      ],
      link: "https://movie-recommender-shashwat.vercel.app",
      linkLabel: "Live demo",
      repo: "https://github.com/Shashwat-Kush/movie-recommender",
      skills: ["PyTorch", "C++", "FastAPI", "Recommender Systems", "Next.js"],
    },
    {
      name: "Real-Time Fraud Detection & MLOps Pipeline",
      description:
        "Event-driven fraud detection on 6.3M PaySim transactions: stateful Kafka streaming, 24h leakage-safe rolling features, and XGBoost augmented with GraphSAGE account embeddings — served via FastAPI with an MLflow registry (champion/challenger) and Evidently drift monitoring. Built the GraphSAGE variant, caught temporal leakage that was inflating its scores, fixed it, and shipped the simpler class-weighted model on honest numbers.",
      metrics: [
        { value: "0.905", label: "AUC-PR on a <0.2% fraud rate" },
        { value: "94%", label: "of fraud caught at the operating threshold" },
        { value: "6.3M", label: "transactions streamed through Kafka" },
      ],
      link: "https://github.com/Shashwat-Kush/fraud-detection",
      linkLabel: "GitHub",
      skills: ["Python", "Kafka", "XGBoost", "GraphSAGE", "FastAPI", "MLflow", "Docker"],
    },
    {
      name: "Automated Daily News Digest",
      description:
        "A fully automated pipeline that sends a morning email covering business, economics, and tech. Built with an LLM API for summarization, Gmail SMTP for delivery, and GitHub Actions for scheduling.",
      skills: ["Python", "LLM APIs", "GitHub Actions", "Gmail SMTP"],
    },
    {
      name: "AI Pricing Engine",
      description:
        "A dynamic pricing engine with a Python backend and web frontend, built on notebook-driven experimentation for comparing pricing strategies across datasets.",
      link: "https://github.com/Shashwat-Kush/ai-pricing-engine",
      skills: ["Python", "Jupyter", "TypeScript"],
    },
    {
      name: "Poker Bot",
      description:
        "A web-based poker game with a rule-based AI opponent. Uses Monte Carlo simulation for hand equity and the treys library for hand evaluation, deployed as a Flask app.",
      link: "https://github.com/Shashwat-Kush/pokerBot",
      skills: ["Python", "Flask", "Monte Carlo Simulation"],
    },
  ],
  experience: [
    {
      company: "Deloitte",
      title: "Analyst (Incoming)",
      dateRange: "2026",
      bullets: [],
    },
    {
      company: "Atomberg Technologies",
      title: "Data Analyst",
      dateRange: "May 2025 - Jul 2025",
      bullets: [
        "Identified 22% volumetric wastage across 1,500+ SKUs via multi-level Pareto analysis, tracing it to 170+ non-standard box sizes.",
        "Designed a heuristic 3D pallet-packing algorithm at 83% accuracy, validated on 150+ operational test cases and projecting a 30% cut in pallet volume wastage.",
        "Built a Streamlit dashboard over 3,500+ bin locations with SQL-backed metrics and predictive alerts to prevent critical out-of-space events.",
      ],
    },
    {
      company: "Vidyasagar Hall of Residence, IIT Kharagpur",
      title: "Hall President",
      dateRange: "Aug 2024 - Aug 2025",
      bullets: [
        "Led a 26-member council serving 300+ residents and managed an INR 1.8M+ budget across 40+ annual events.",
        "Represented 16,000+ students as Student Senator, translating hall-level feedback into campus-wide academic policy initiatives.",
      ],
    },
    {
      company: "Optima, IIT Kharagpur",
      title: "Advisor",
      dateRange: "May 2024 - Jul 2025",
      bullets: [],
    },
    {
      company: "University of Kent",
      title: "Deep Learning Researcher",
      dateRange: "May 2024 - Jul 2024",
      bullets: [
        "Ran a comparative study of RAG vs. Representation Fine-Tuning (ReFT), curating an NLP dataset by scraping 50+ privacy policies with Python/BeautifulSoup.",
        "Drove a 10% uplift in retrieval with a sentence-window RAG pipeline (Groq API), then a further 10% gain by applying ReFT to the Llama 3-7B model.",
      ],
    },
    {
      company: "IISER Kolkata",
      title: "Deep Learning Researcher",
      dateRange: "Jan 2024 - Jun 2024",
      bullets: [],
    },
    {
      company: "Optima, IIT Kharagpur",
      title: "Head of Finance",
      dateRange: "Sep 2023 - Apr 2024",
      bullets: [
        "Founding member of the inaugural Optima fest; drove sponsorship and event strategy to draw 1,000+ attendees.",
        "Directed an INR 1.1M+ budget and secured 15+ industry partnerships, including Optym, Air India, and Delhivery.",
      ],
    },
    {
      company: "Vidyasagar Hall of Residence, IIT Kharagpur",
      title: "Secretary, Technology",
      dateRange: "Oct 2022 - Apr 2023",
      bullets: [],
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology, Kharagpur",
      degree: "B.Tech, Industrial and Systems Engineering",
      dateRange: "2021 - 2026",
      achievements: [
        "Hall President, Vidyasagar Hall of Residence (2024-25)",
        "Certified: Supervised Machine Learning (Regression & Classification), Advanced Learning Algorithms",
        "Certified: Python for Computer Vision with OpenCV and Deep Learning",
      ],
    },
  ],
};
