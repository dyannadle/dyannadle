import React, { useState } from "react";
import { Github, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
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
const ProjectsSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 py-10 grid gap-6 sm:grid-cols-2">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          layout
          onClick={() => toggleExpand(index)}
          className="p-5 border rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-white"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{project.description}</p>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
            <span className="flex items-center gap-1"><Clock size={16} /> {project.time}</span>
            <span className="flex items-center gap-1"><Star size={16} /> {project.rating}</span>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={18} /> View Code
          </a>

          {expandedIndex === index && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 90 }}
              className="mt-4"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg border shadow-md hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsSection;
