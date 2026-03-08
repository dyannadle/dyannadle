export interface Project {
  title: string;
  description: string;
  duration: string;
  responsibilities: string[];
  tools: string[];
  image: string;
  category: string;
  github?: string;
  paperPublished?: string;
}

export const projects: Project[] = [

  {
    title: "Fintech Pro: Institutional AI Investment Ecosystem",
    description: "A high-conviction, end-to-end financial intelligence platform leveraging distributed microservices and advanced ML (LSTM, RAG, RL) for real-time portfolio optimization and institutional-grade market analysis.",
    duration: "4 months",
    responsibilities: [
      "Architected a distributed microservices ecosystem using Spring Boot (Auth/Portfolio), FastAPI (AI/ML Lab), and React 18, achieving sub-40ms execution latency for high-frequency workflows.",
      "Engineered a dual-backend architecture: Spring Boot for mission-critical Auth and Portfolio CRUD, and FastAPI for compute-intensive RAG and Optimization services.",
      "Integrated a Retrieval-Augmented Generation (RAG) Advisor using ChromaDB vector storage and Ollama for local LLM orchestration, ensuring 100% data privacy and security.",
      "Developed a Quantitative Optimization Layer using scipy SLSQP and PyTorch to solve the Mean-Variance Efficient Frontier and execute automated rebalancing logic.",
      "Implemented a full-stack observability suite with Prometheus and Grafana to track multi-container health, API latencies, and real-time system pulse.",
      "Systematized deployment through Docker and Docker Compose, managing a complex stack of 5+ services with persistent PostgreSQL, Redis, and ChromaDB volumes."
    ],
    tools: [
      "React 18 & Vite (Core SPA Framework)",
      "Tailwind CSS (Institutional Dashboard Styling)",
      "Spring Boot (User/Admin Microservices & JWT Auth)",
      "FastAPI (AI, Prediction, & Optimization Services)",
      "PostgreSQL 15 (Relational Data Persistence)",
      "Redis Stack (Real-time Market Data & Vector Indexing)",
      "ChromaDB (Dedicated Vector Store for RAG Advisor)",
      "Ollama (Local LLM Orchestration for Privacy-First AI)",
      "PyTorch & Stable Baselines3 (Neural Networks & RL Lab)",
      "Docker & Docker Compose (Containerized Multi-Service Orchestration)",
      "Prometheus & Grafana (Infrastructure Monitoring & Alerting)"
    ],
    image: "/lovable-uploads/Fintech.png",
    category: "Full-Stack AI/Fintech, AI/ML, Other, Python, Java",

    github: "https://github.com/dyannadle/fintech",
  },

  {
    title: "Virtuoso: Java Mastery Ecosystem",
    description: "A high-fidelity, end-to-end interactive learning platform for mastering Java, from core foundations to advanced enterprise architecture and system design.",
    duration: "2 months",
    responsibilities: [
      "Architected a comprehensive 80-module curriculum organized into 7 levels of mastery, spanning Core Java, Spring Boot, DevOps, and System Design.",
      "Developed an interactive trio-panel IDE featuring a file explorer, multi-tab editor, and real-time console with secure Piston API integration for code execution.",
      "Engineered 20+ dynamic visualizations using Framer Motion and React Flow to illustrate complex concepts like JVM memory models, Garbage Collection, and Concurrency.",
      "Implemented a persistent gamification engine with Supabase, tracking learning streaks, XP-based leveling, and milestone achievement badges.",
      "Optimized the frontend for high performance and reliability using React 18 and Vite, achieving a production-ready build with zero structural linting or type errors."
    ],
    tools: ["React 18", "TypeScript", "Vite", "Supabase", "Framer Motion", "Piston API", "React Flow", "Vanilla CSS"],
    image: "/lovable-uploads/Java learning platfrom.png",
    category: "Full-Stack EdTech / AI Learning, AI/ML Project, Java",
    Link: "https://java-learning-web.vercel.app/",
  }
  ,
  {
    title: "E-commerce Site Automation (Flipkart)",
    description: "Developed a robust automation framework using Selenium and Python to validate critical business flows on the Flipkart e-commerce platform.",
    duration: "2 months",
    responsibilities: [
      "Designed and implemented an end-to-end automation framework (Page Object Model) using Selenium WebDriver, Python, and pytest.",
      "Automated key e-commerce scenarios including user registration, product search, filter application, cart addition, and checkout process.",
      "Integrated logging and reporting (HTML reports) into the automation suite for easy test result analysis.",
      "Managed and maintained test data using CSV/Excel files to support various test cases.",
      "Conducted daily regression runs to ensure stability and detect defects early in the continuous integration pipeline."
    ],
    tools: ["Selenium WebDriver", "Java", "Java Script", "Page Object Model", "HTML Reporting"],
    image: "/lovable-uploads/Flipkart.png",
    category: "Automation Project, Java",
    github: "https://github.com/dyannadle/Flipkart-Automation"
  },

  {
    title: " Daily News Summarizer Bot",
    description: "A high-performance news intelligence engine that automates the aggregation, synthesis, and multi-channel delivery of global news using advanced LLM reasoning.",
    duration: "1 month",
    responsibilities: ["Architected an automated news intelligence pipeline by migrating from manual tracking to a Node.js-based autonomous bot using LangChain and Google Gemini.", "Developed a resilient RSS aggregation service to fetch and parse real-time data from diverse global news feeds (Hacker News, BBC Technology, etc.).", "Engineered a sophisticated summarization engine leveraging Gemini Pro and OpenAI fallbacks to synthesize complex news articles into concise, actionable briefs.", "Implemented a multi-channel notification system using the Telegraf framework to deliver real-time summaries directly to Telegram chats.", "Established a persistent knowledge archive by systematizing local Markdown logging to track historical news trends and maintain data integrity.", "Systematized scheduling workflows using node-cron to support multiple daily triggers, ensuring consistent information delivery and operational reliability."],
    tools: ["Node.js (Runtime Environment)", "TypeScript (Static Type Safety)", "LangChain (LLM Orchestration)", "Google Gemini (Generative AI & Summarization)", "OpenAI (Large Language Model Fallback)", "Telegraf (Telegram Bot Framework)", "RSS Parser (Data Fetching)", "node-cron (Task Scheduling Architecture)"],
    image: "/lovable-uploads/News_bot.png",
    category: "Full-Stack Node.js / AI/ML / Automation",
    github: "https://github.com/dyannadle/Daily-News-Summarizer-Bot",
  },

  {
    title: "SimpleBank: Modern Java Full-Stack Ecosystem",
    description: "A high-performance, secure personal banking platform featuring a sleek responsive UI, robust RESTful architecture, and real-time transaction tracking with localized Indian Rupee (₹) support.",
    duration: "1 month (March 2026 – Present)",
    responsibilities: [
      "Architected a full-stack banking ecosystem by migrating a legacy CLI application to a modern web-based architecture using Javalin (Server) and Vanilla JS (Client).",
      "Developed a secure REST API controller using Java 17 Records to handle account authentication, transaction processing, and history retrieval with high efficiency.",
      "Engineered a responsive, high-fidelity UI using CSS Grid/Flexbox and a Glassmorphism design system to ensure a premium user experience and smooth micro-animations.",
      "Implemented a robust persistence layer using H2 Database (SQL) to guarantee data integrity for concurrent deposit, withdrawal, and account creation operations.",
      "Localized the entire financial ecosystem to Indian Rupees (₹), ensuring consistent currency formatting across balance displays, transaction toasts, and history logs.",
      "Systematized deployment workflows using Maven for containerized-compatible builds and standalone JAR execution for easy environment migration."
    ],
    tools: [
      "Java 17 (Core Language & Records)",
      "Javalin (Lightweight Web Framework & REST API)",
      "Vanilla JS (SPA Logic & Asynchronous Fetch API)",
      "CSS3 (Glassmorphism & Responsive Design System)",
      "H2 Database (Relational SQL Persistence)",
      "Maven (Dependency Management & Build Orchestration)",
      "Jackson (JSON Data Binding)",
      "SLF4J (Backend Logging Infrastructure)"
    ],
    image: "/lovable-uploads/Banking System .png",
    category: "Full-Stack, Java, Fintech",
    github: "https://github.com/dyannadle/simple_banking_system",
  },

  {
    title: "Intelligent-SQL-Query-Agent",
    description: "A secure, privacy-first AI platform that enables offline conversations with PDF documents using Retrieval-Augmented Generation (RAG), high-fidelity OCR, and hybrid search capabilities.",
    duration: "1 Month (March 2026 – April 2026)",
    responsibilities: [
      "Engineered a privacy-centric RAG ecosystem by integrating LangChain and Ollama to facilitate secure, local-only AI interactions without external API dependencies.",
      "Architected a hybrid retrieval engine combining semantic vector search (FAISS) and keyword-based search (BM25) to maximize answer precision and context relevance.",
      "Developed a robust document processing pipeline featuring Tesseract OCR for scanned PDFs and pdfplumber for high-precision tabular data extraction.",
      "Designed a modern, responsive dashboard using Streamlit with real-time source citations, passage highlighting, and an interactive semantic retrieval explorer.",
      "Implemented advanced conversational memory and chat history persistence, allowing users to export entire AI-assisted sessions as professional PDF documents.",
      "Systematized ethical AI guardrails by integrating password-protected access and local environment configurations for secure multi-user deployment."
    ],
    tools: [
      "Python 3.10+ (Core Language)",
      "LangChain (RAG Orchestration)",
      "Ollama / Llama 3 (Large Language Model)",
      "FAISS (High-Performance Vector Database)",
      "HuggingFace (Local Sentence-Transformers)",
      "Streamlit (Interactive UI Framework)",
      "Tesseract OCR (Optical Character Recognition)",
      "pdfplumber (Tabular Data Extraction)"
    ],
    image: "/lovable-uploads/Chat With Pdf.png",
    category: "AI/ML, RAG, Python",
    github: "https://github.com/dyannadle/Intelligent-SQL-Query-Agent",
  },


  {
    title: "Echoes of the Past (AI Detective Game)",
    description: "A unique procedural narrative detective game using an integrated AI interpreter (Gemini 2.0 Flash) to generate story conclusions from fragmented clues.",
    duration: "2 weeks",
    responsibilities: [
      "Designed and implemented the core game logic in JavaScript, including movement between rooms and object interaction.",
      "Developed a procedural generation algorithm to create unique house layouts and dynamically place clues for each session.",
      "Integrated the Google Gemini API to analyze collected clues and generate concise, plausible narrative conclusions.",
      "Created a clean, text-based interface and persistent game log using HTML5 and Tailwind CSS for easy user exploration.",
      "Focused on creating a dynamic mystery where multiple clue combinations lead to varied AI interpretations."
    ],
    tools: ["HTML5: For the basic structure of the game.", "CSS3 (Tailwind CSS): For responsive and modern styling.", "JavaScript (ES6+): For all game logic, procedural generation, and interactivity.", "Google Gemini API (gemini-2.0-flash): Used for generating the narrative conclusion based on collected clues.", "Firebase SDK (Auth & Firestore): (Planned for future use, currently included for environment compatibility but not fully utilized for saving/loading game state in this version."],
    image: "/lovable-uploads/Echo.png",
    category: "Game Development, AI/ML Project, Python",
    github: "https://github.com/dyannadle/Games",
  },
  {
    title: "Front Accounting ERP Testing",
    description: "Comprehensive testing of professional web-based accounting system for ERP solutions using manual testing methodologies.",
    duration: "2 months",
    responsibilities: [
      "Developed detailed test plans, test cases, and test scripts based on ERP requirements and specifications.",
      "Executed end-to-end functional testing covering modules like accounting, inventory, and payroll to ensure system integrity.",
      "Coordinated and conducted User Acceptance Testing (UAT) with stakeholders to validate business workflows.",
      "Identified, logged, and tracked defects using bug tracking tools, ensuring timely resolution.",
      "Collaborated with developers and business analysts to clarify requirements and resolve issues."
    ],
    tools: ["Manual Testing", "Test Planning", "Microsoft Excel", "SRS Writing"],
    image: "/lovable-uploads/2b88fb76-449e-419a-aaa8-ec1ff1fb3dfd.png",
    category: "Testing Project",
    github: "https://github.com/dyannadle/Manual-Projects"
  },
  {
    title: "SnapCook AI: Cross-Modal Recipe Generation",
    description: "An end-to-end Inverse Cooking system leveraging Cross-Modal Transformers to transform food imagery into structured recipes and nutritional data.",
    duration: "4 months",
    responsibilities: [
      "Architected an Inverse Cooking pipeline using a CNN encoder and a Multi-head Attention Transformer for autoregressive recipe decoding.",
      "Optimized model convergence using customized loss functions, including SoftIoU for ingredient overlap and cardinality penalties to reduce hallucinations.",
      "Engineered a full-stack ecosystem with a React 18 frontend, Flask backend, and JWT-based authentication for secure, persistent data management.",
      "Developed a heuristic nutritional analytics engine mapping predicted ingredients to macro-nutrient profiles for real-time calorie estimation.",
      "Containerized the entire stack using Docker and Docker Compose to ensure scalable, environment-agnostic deployment to production servers."
    ],
    tools: ["PyTorch", "Transformers", "Flask", "React 18", "Docker", "JWT", "PostgreSQL"],
    image: "/lovable-uploads/Recipe Generation.png",
    category: "AI/ML Project, Other, Python",
    paperPublished: "/AI-Powered Recipe Generator from Food Images Using Deep Learning Published Paper.pdf",
    github: "https://github.com/dyannadle/Recipe-Generator",
  },

  {
    title: "Maze Solver Game",
    description: "Classic maze generation and solving game implemented in Python using the Pygame library.",
    duration: "1 month",
    responsibilities: [
      "Designed and implemented maze generation algorithms, including Recursive Backtracker, for random maze creation.",
      "Developed and integrated pathfinding algorithms such as A* search and Breadth-First Search for automated maze solving.",
      "Created a responsive graphical user interface with Pygame to visualize maze generation and solver's path dynamically.",
      "Implemented user controls for manual maze navigation and game state management.",
      "Conducted extensive testing and debugging to ensure smooth gameplay and accurate pathfinding."
    ],
    tools: ["Python", "Pygame", "Algorithms", "Data Structures"],
    image: "/lovable-uploads/c400b9cf-269a-4945-8688-165aa7894f4d.png",
    category: "AI/ML Project, Game Development, Python",
    github: "https://github.com/dyannadle/Maze-Solver",
  },
  {
    title: "Image Model Cloudflare Workers AI",
    description: "Streamlit application leveraging Cloudflare Workers AI to generate and manipulate images using AI models.",
    duration: "3 weeks",
    responsibilities: [
      "Developed AI-powered image generation features using Cloudflare Workers AI API integrated into Streamlit interface.",
      "Implemented REST API calls and handled asynchronous image processing requests efficiently.",
      "Managed environment configuration, dependencies, and deployment for seamless application performance.",
      "Optimized user experience through responsive UI design and error handling.",
      "Documented API usage and application setup for future maintenance."
    ],
    tools: ["Python", "Streamlit", "Cloudflare Workers AI", "Requests"],
    image: "/lovable-uploads/a29f2c35-e89b-4321-9794-594f01dcd11d.png",
    category: "AI/ML Project, Python",
    github: "https://github.com/dyannadle/Image-Generator"
  },
  {
    title: "Attendance System",
    description: "A Python-based face recognition attendance system using OpenCV for automatic detection and recording, with data storage in Excel and reporting features.",
    duration: "6 weeks",
    responsibilities: [
      "Designed and implemented a face recognition attendance system using OpenCV to detect and record attendance automatically.",
      "Integrated data storage using Pandas and Excel formats for easy report generation and record maintenance.",
      "Developed a user-friendly GUI with Tkinter to facilitate manual overrides and attendance review.",
      "Tested system accuracy under various lighting and environmental conditions to ensure reliability.",
      "Generated detailed attendance reports and analytics to assist management."
    ],
    tools: ["Python", "OpenCV", "Tkinter", "Pandas", "NumPy"],
    image: "/lovable-uploads/1dc83084-6bdb-42b4-9125-bf6af70db315.png",
    category: "AI/ML Project, Python",
    github: "https://github.com/dyannadle/Face-attendance"
  },
  {
    title: "Popular Web Series Page Functional Testing",
    description: "Manual and functional testing conducted for a mobile app page displaying trending web series,focusing on navigation, interaction, and content rendering validation.",
    duration: "2 weeks",
    responsibilities: [
      "Verified correct rendering of web series posters, titles, and platform badges (e.g., Netflix, Hotstar Specials) across devices.",
      "Tested search functionality rigorously to ensure accurate filtering and retrieval of web series based on user input.",
      "Validated responsiveness and visual state changes of filter buttons (Trending, Newest, Comedy) under different scenarios.",
      "Checked functionality and feedback of 'like/favorite' and 'share' buttons for each web series card to enhance UX.",
      "Ensured smooth vertical scrolling and lazy loading of additional content without performance issues.",
      "Confirmed clear visibility, accessibility compliance, and consistency across various screen sizes and resolutions."
    ],
    tools: ["Manual Testing", "Google Sheets", "Bug Tracking Software (JIRA)", "Specifications Document"],
    image: "/UI Testing.png",
    category: "Testing Project",
    github: "https://github.com/dyannadle/Manual-Testing--UI-Testing"
  }
];

export const filters = [
  'All',
  'Favorites',
  'Testing Project',
  'AI/ML Project',
  'Automation Project',
  'Game Development',
  'Java',
  'Python',
  'Other',
];
