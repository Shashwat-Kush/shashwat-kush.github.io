export const siteConfig = {
  name: "Shashwat Kushwaha",
  title: "Incoming Analyst @ Deloitte | Data & ML",
  description:
    "Portfolio of Shashwat Kushwaha — data analytics, machine learning, and systems. Featured: an end-to-end movie recommendation engine with a live demo.",
  accentColor: "#8b5cf6",
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
    "SQL",
    "Machine Learning",
    "FastAPI",
    "Docker",
    "Microsoft Excel",
    "Operations Management",
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
        "Event-driven system for detecting financial fraud in real time. Streams transactions through Kafka, trains XGBoost models tracked in MLflow, serves predictions through a FastAPI microservice, and monitors for data drift with Evidently AI.",
      link: "https://github.com/Shashwat-Kush/fraud-detection",
      skills: ["Python", "Kafka", "XGBoost", "FastAPI", "MLflow", "Docker"],
    },
    {
      name: "Automated Daily News Digest",
      description:
        "A fully automated pipeline that sends a morning email covering business, economics, and tech. Built with an LLM API for summarization, Gmail SMTP for delivery, and GitHub Actions for scheduling.",
      link: "https://github.com/Shashwat-Kush",
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
      bullets: [],
    },
    {
      company: "Vidyasagar Hall of Residence, IIT Kharagpur",
      title: "Hall President",
      dateRange: "Aug 2024 - Aug 2025",
      bullets: [],
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
      bullets: [],
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
      bullets: [],
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
