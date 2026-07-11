export const siteConfig = {
  name: "Shashwat Kushwaha",
  title: "Incoming Analyst @ Deloitte | Data & ML",
  description: "Portfolio website of Shashwat Kushwaha",
  accentColor: "#1d4ed8",
  social: {
    email: "shashwatkush002@gmail.com",
    linkedin: "https://www.linkedin.com/in/shashwatkushwaha-",
    github: "https://github.com/Shashwat-Kush",
  },
  aboutMe:
    "I'm a final-year Industrial and Systems Engineering student at IIT Kharagpur, working across data analytics, machine learning, and operations. I've done deep learning research at the University of Kent and IISER Kolkata, worked as a Data Analyst at Atomberg Technologies, and I'm about to start as an analyst at Deloitte. Outside of coursework I build things: automation pipelines, ML projects, and the occasional poker bot.", // TODO: rewrite in your own voice if this doesn't sound like you
  skills: ["Python", "SQL", "Machine Learning", "Microsoft Excel", "Operations Management", "GitHub Actions"],
  projects: [
    {
      name: "Automated Daily News Digest",
      description:
        "A fully automated pipeline that sends a morning email covering business, economics, and tech. Built with Groq's free-tier API for summarization, Gmail SMTP for delivery, and GitHub Actions for scheduling.",
      link: "https://github.com/Shashwat-Kush", // TODO: point to the actual repo
      skills: ["Python", "Groq API", "GitHub Actions", "Gmail SMTP"],
    },
    {
      name: "Real-Time Fraud Detection & MLOps Pipeline",
      description:
        "Event-driven system for detecting financial fraud in real time. Streams transactions through Kafka, trains XGBoost models tracked in MLflow, serves predictions through a FastAPI microservice, and monitors for data drift with Evidently AI.",
      link: "https://github.com/Shashwat-Kush/fraud-detection",
      skills: ["Python", "Kafka", "XGBoost", "FastAPI", "MLflow", "Docker"],
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
      bullets: [
        "TODO: add 2-3 bullets once you're settled into the role",
      ],
    },
    {
      company: "Atomberg Technologies",
      title: "Data Analyst",
      dateRange: "May 2025 - Jul 2025",
      bullets: [
        "TODO: add 1-2 bullets on what you actually worked on",
      ],
    },
    {
      company: "Vidyasagar Hall of Residence, IIT Kharagpur",
      title: "Hall President",
      dateRange: "Aug 2024 - Aug 2025",
      bullets: [
        "TODO: add 1-2 bullets on scope/impact",
      ],
    },
    {
      company: "Optima, IIT Kharagpur",
      title: "Advisor",
      dateRange: "May 2024 - Jul 2025",
      bullets: [
        "TODO: add 1-2 bullets on scope/impact",
      ],
    },
    {
      company: "University of Kent",
      title: "Deep Learning Researcher",
      dateRange: "May 2024 - Jul 2024",
      bullets: [
        "TODO: add 1-2 bullets on the research focus",
      ],
    },
    {
      company: "IISER Kolkata",
      title: "Deep Learning Researcher",
      dateRange: "Jan 2024 - Jun 2024",
      bullets: [
        "TODO: add 1-2 bullets on the research focus",
      ],
    },
    {
      company: "Optima, IIT Kharagpur",
      title: "Head of Finance",
      dateRange: "Sep 2023 - Apr 2024",
      bullets: [
        "TODO: add 1-2 bullets on scope/impact",
      ],
    },
    {
      company: "Vidyasagar Hall of Residence, IIT Kharagpur",
      title: "Secretary, Technology",
      dateRange: "Oct 2022 - Apr 2023",
      bullets: [
        "TODO: add 1-2 bullets on scope/impact",
      ],
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
