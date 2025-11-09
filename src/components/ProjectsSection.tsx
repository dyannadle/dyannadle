// React and Hooks
import React, { useState, useCallback, useEffect, useRef } from 'react';

// --- START RevealAnimation Component ---
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | 'fade-in'
    | 'fade-in-up'
    | 'fade-in-down'
    | 'fade-in-left'
    | 'fade-in-right'
    | 'blur-in'
    | 'zoom-in'
    | 'flip-in';
  delay?: number;
  threshold?: number;
  duration?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  duration = 500,
  once = true,
  style = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) setIsVisible(false);
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, [threshold, once, hasAnimated]);

  const animationClass = !isVisible
    ? 'opacity-0'
    : {
        'fade-in': 'animate-fade-in',
        'fade-in-up': 'animate-fade-in-up',
        'fade-in-down': 'animate-fade-in-down',
        'fade-in-left': 'animate-fade-in-left',
        'fade-in-right': 'animate-fade-in-right',
        'blur-in': 'animate-blur-in',
        'zoom-in': 'animate-zoom-in',
        'flip-in': 'animate-flip-in',
      }[animation] ?? 'animate-fade-in';

  return (
    <div
      ref={ref}
      className={cn(animationClass, className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        ...style,
        opacity: isVisible || !once ? 1 : 0,
        transform: isVisible || !once ? 'none' : 'translateY(20px)',
      }}
    >
      {children}
    </div>
  );
};
// --- END RevealAnimation Component ---

// Icons
import { Github, Star, StarOff, Clock, X } from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface Project {
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

interface ModalContent {
  type: 'image' | 'description' | null;
  project: Project | null;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ModalContent;
}

// --- DATA ---
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

// categories
const filters = [
  'All',
  'Favorites',
  'Testing Project',
  'AI/ML Project',
  'Automation Project',
  'Game Development',
];

const ProjectModal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content.project) return null;
  const { project } = content;
  const isImage = content.type === 'image';
  const isDescription = content.type === 'description';
  const title = isImage ? `Image: ${project.title}` : `Details: ${project.title}`;

  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-lg flex items-center justify-center p-4 z-[1000]"
      onClick={onClose}
    >
      <div
        className={`${
          isImage
            ? 'bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl lg:max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col'
            : 'bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b dark:border-gray-700 border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 p-2 rounded-full transition-all hover:bg-red-50 dark:hover:bg-red-900/20"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </header>

        {isImage && (
          <div className="p-4 flex items-center justify-center h-full bg-gray-50 dark:bg-gray-900">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  'https://placehold.co/800x600/E0E7FF/3730A3?text=Image+Unavailable';
              }}
            />
          </div>
        )}

        {isDescription && (
          <div className="p-6 overflow-y-auto max-h-[75vh] space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg italic font-medium border-l-4 border-blue-500 pl-4 dark:text-gray-200">
              {project.description}
            </p>

            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-b dark:border-gray-700 pb-1">
              Key Responsibilities
            </h3>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {project.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 border-b dark:border-gray-700 pb-1">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4 border-t mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg"
                >
                  <Github size={20} /> View Code on GitHub
                </a>
              )}
              {project.paperPublished && (
                <a
                  href={project.paperPublished}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-green-600 hover:text-green-700 bg-green-50 px-4 py-2 rounded-lg"
                >
                  View Published Paper
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN SHOWCASE COMPONENT ---
const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState<ModalContent>({ type: null, project: null });
  const [showAllTools, setShowAllTools] = useState<Record<string, boolean>>({});

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && isModalOpen && closeModal();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isModalOpen]);

  const filtered =
    activeFilter === 'All'
      ? projects
      : activeFilter === 'Favorites'
      ? projects.filter((p) => favorites.includes(p.title))
      : projects.filter((p) => p.category.includes(activeFilter));

  const toggleFavorite = useCallback(
    (title: string) =>
      setFavorites((prev) =>
        prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
      ),
    []
  );

  const openModal = (type: 'image' | 'description', project: Project) => {
    setModal({ type, project });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModal({ type: null, project: null }), 300);
  };

  return (
    <section
      id="projects"
      className="min-h-screen pt-16 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-gray-900">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-center mb-10">
          Click an image to view it larger, or select a title for full details.
        </p>

        {/* Filter buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`capitalize px-4 py-2 rounded-full border-2 text-sm transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                  : 'text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-blue-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filtered.map((p, idx) => (
            <RevealAnimation key={p.title} animation="fade-in-up" delay={idx * 100}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden group border border-gray-200 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500">
                <div
                  onClick={() => openModal('image', p)}
                  role="button"
                  tabIndex={0}
                  className="cursor-pointer h-52 overflow-hidden"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.15] group-hover:rotate-[1deg]"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        'https://placehold.co/400x208/F0F4FF/4F46E5?text=Project+Image';
                    }}
                  />
                </div>

                <button
                  onClick={() => toggleFavorite(p.title)}
                  className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-lg hover:scale-125 transition"
                  aria-label="favorite"
                >
                  {favorites.includes(p.title) ? (
                    <Star size={24} fill="#FBBF24" color="#FBBF24" />
                  ) : (
                    <StarOff size={24} color="#4B5563" />
                  )}
                </button>

                <div className="p-6">
                  <h3
                    onClick={() => openModal('description', p)}
                    className="text-2xl font-bold mb-3 cursor-pointer hover:text-blue-600"
                  >
                    {p.title}
                  </h3>
                  <div className="inline-flex items-center gap-1 mb-3 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                    <Clock size={14} /> {p.duration}
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{p.description}</p>
                  <h4 className="font-semibold mb-2 text-gray-800">Tools Used:</h4>
                  <ul className="flex flex-wrap gap-2 text-xs">
                    {(showAllTools[p.title] ? p.tools : p.tools.slice(0, 4)).map((t, i) => (
                      <li key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                        {t}
                      </li>
                    ))}
                    {p.tools.length > 4 && (
                      <button
                        className="text-blue-600 underline text-xs ml-2 mt-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowAllTools((s) => ({ ...s, [p.title]: !s[p.title] }));
                        }}
                      >
                        {showAllTools[p.title] ? 'Show Less' : `+${p.tools.length - 4} More`}
                      </button>
                    )}
                  </ul>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>

      {isModalOpen && <ProjectModal isOpen={isModalOpen} onClose={closeModal} content={modal} />}
    </section>
  );
};

export default ProjectsSection;