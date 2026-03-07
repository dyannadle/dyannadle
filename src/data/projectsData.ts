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
    duration: "4 months ",
    responsibilities: [
      "Architected a distributed microservices infrastructure using Spring Boot (Auth/Portfolio), FastAPI (AI/ML Lab), and React 18, achieving sub-40ms execution latency for high-frequency workflows.",
      "Developed a local-first predictive engine executing 5 parallel models (LSTM, ARIMA, Prophet, Linear, TFT) in-browser via Promise.allSettled, delivering 30-day forecasts with 95% confidence intervals.",
      "Engineered a RAG (Retrieval-Augmented Generation) Financial Advisor integrating ChromaDB vector storage and Gemini/Ollama LLMs to provide grounded, real-time insights from global news and portfolio context.",
      "Integrated a Quantitative Optimization layer using scipy SLSQP to solve the Mean-Variance Efficient Frontier, enabling automated portfolio rebalancing and risk-adjusted alpha generation.",
      "Developed 'The Vault' Academy, a gamified learning ecosystem with interactive Order Flow/Volatility simulators and a persistent XP-based achievement system for investor certification.",
      "Containerized the entire stack (PostgreSQL, Redis, ChromaDB, 3+ Backends) using Docker and Docker Compose to ensure institutional-grade observability through Prometheus and Grafana dashboards."
    ],
    tools: ["React 18", "TypeScript", "Spring Boot", "FastAPI", "PyTorch", "ChromaDB", "PostgreSQL", "Redis", "Docker", "Prometheus", "Tailwind CSS"],
    image: "/lovable-uploads/Fintech.png", // Representative image from the project
    category: "AI/ML Project",
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
    category: "Full-Stack EdTech / AI Learning, AI/ML Project, Other ",
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
    category: "Automation Project",
    github: "https://github.com/dyannadle/Flipkart-Automation"
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
    category: "Game Development, AI/ML Project",
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
    category: "AI/ML Project, Other",
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
    category: "AI/ML Project, Game Development",
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
    category: "AI/ML Project",
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
    category: "AI/ML Project",
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
  'Other',
];
