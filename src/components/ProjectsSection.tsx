import React, { useEffect, useState } from "react";
import { Github, Clock, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  tools: string;
  description: string;
  imageUrl: string;
  duration: string;
  responsibilities: string[];
  techStack: string[];
  category: string;
  github?: string;
}

const projects: Project[] = [

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
    tools: ["HTML5: For the basic structure of the game.",
"CSS3 (Tailwind CSS): For responsive and modern styling.",
"JavaScript (ES6+): For all game logic, procedural generation, and interactivity.",
"Google Gemini API (gemini-2.0-flash): Used for generating the narrative conclusion based on collected clues.",
"Firebase SDK (Auth & Firestore): (Planned for future use, currently included for environment compatibility but not fully utilized for saving/loading game state in this version."],
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
    title: "Food Recipe Generation from Images",
    description: "AI-powered computer vision model that analyzes food images and generates detailed recipes using deep learning techniques.",
    duration: "4 months",
    responsibilities: [
      "Designed and implemented an automated pipeline for generating recipes from food images using convolutional and recurrent neural networks.",
      "Performed extensive performance optimization and hyperparameter tuning to improve model accuracy and efficiency.",
      "Validated model predictions against labeled datasets to ensure recipe relevance and correctness.",
      "Collaborated on dataset collection and preprocessing to enhance training data quality.",
      "Documented model architecture and results for academic publication."
    ],
    tools: ["PyTorch", "Transformers", "NLP", "CNN", "LSTM"],
    image: "/lovable-uploads/71a0f015-985f-4444-81ed-1937b2cd2a1d.png",
    category: "AI/ML Project",
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
    title: "Popular Web Series Page UI Testing",
    description: "Manual and functional UI testing conducted for a mobile app page displaying trending web series,focusing on navigation, interaction, and content rendering validation.",
    duration: "2 weeks",
    responsibilities: [
      "Verified correct rendering of web series posters, titles, and platform badges (e.g., Netflix, Hotstar Specials) across devices.",
      "Tested search functionality rigorously to ensure accurate filtering and retrieval of web series based on user input.",
      "Validated responsiveness and visual state changes of filter buttons (Trending, Newest, Comedy) under different scenarios.",
      "Checked functionality and feedback of 'like/favorite' and 'share' buttons for each web series card to enhance UX.",
      "Ensured smooth vertical scrolling and lazy loading of additional content without performance issues.",
      "Confirmed clear visibility, accessibility compliance, and UI consistency across various screen sizes and resolutions."
    ],
    tools: ["Manual Testing", "Google Sheets", "Bug Tracking Software (JIRA)", "UI Specifications Document"],
    image: "UI Testing.png",
    category: "Testing Project",
    github: "https://github.com/dyannadle/Manual-Testing--UI-Testing"
  }
];

const filters = [
  'All',
  'Favorites',
  'Testing Project',
  'AI/ML Project',
  'Automation Project',
  'API Testing',
  'Game Development',
];


export default function ProjectsSection() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [popup, setPopup] = useState<{
    project: Project;
    x: number;
    y: number;
  } | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("favoriteProjects");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favoriteProjects", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const filtered = sampleProjects.filter((p) =>
    (filter === "All" ? true : p.category === filter) &&
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handlePopup = (
    e: React.MouseEvent,
    project: Project
  ) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPopup({
      project,
      x: rect.left + rect.width / 2,
      y: rect.top + window.scrollY + rect.height + 10,
    });
  };

  return (
    <section className="relative py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          My Projects
        </h2>

        {/* Search + Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border dark:border-gray-700 dark:bg-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-sm"
          />

          {["All", "Automation", "AI Project"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border dark:border-gray-700 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              {/* Favorite Star */}
              <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3">
                <Star
                  size={22}
                  className={
                    favorites.includes(p.id)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-400"
                  }
                />
              </button>

              {/* Image */}
              <div onClick={(e) => handlePopup(e, p)}>
                <img src={p.imageUrl} alt={p.title} className="w-full h-48 object-cover" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold dark:text-white">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{p.shortDescription}</p>

                <div className="flex items-center text-xs text-gray-500 mt-3">
                  <Clock size={14} className="mr-1" /> {p.duration}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Popup */}
        <AnimatePresence>
          {popup && (
            <motion.div
              className="fixed z-[999] floating-popup"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{
                left: popup.x,
                top: popup.y,
                transform: "translate(-50%, 0)",
              }}
            >
              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-2xl p-5 w-[26rem]">
                <button className="absolute top-2 right-3"
                  onClick={() => setPopup(null)}
                >
                  ✕
                </button>

                <h3 className="text-xl font-bold mb-2 dark:text-white">{popup.project.title}</h3>
                <p className="text-sm dark:text-gray-300">{popup.project.longDescription}</p>

                <a
                  href={popup.project.github}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm hover:underline"
                >
                  <Github size={14} /> GitHub Repository
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
