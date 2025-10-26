// React and Hooks
import React, { useState, useCallback, Fragment, useEffect, useRef } from 'react';

// --- START RevealAnimation Component (From uploaded RevealAnimation.tsx) ---
// Note: This requires a utility function `cn` which is assumed to be present.
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'blur-in' | 'zoom-in' | 'flip-in';
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
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, hasAnimated]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'fade-in-up':
        return 'animate-fade-in-up';
      case 'fade-in-down':
        return 'animate-fade-in-down';
      case 'fade-in-left':
        return 'animate-fade-in-left';
      case 'fade-in-right':
        return 'animate-fade-in-right';
      case 'blur-in':
        return 'animate-blur-in';
      case 'zoom-in':
        return 'animate-zoom-in';
      case 'flip-in':
        return 'animate-flip-in';
      default:
        return 'animate-fade-in';
    }
  };
  
  // NOTE: This assumes Tailwind CSS animations like 'animate-fade-in-up' are defined elsewhere (e.g., in a CSS file).
  // Without external CSS definitions, the animation will default to an immediate display.
  // We'll keep the styles to allow for animation if the environment supports them.
  return (
    <div
      ref={ref}
      className={cn(
        getAnimationClass(),
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        ...style,
        opacity: isVisible || !once ? 1 : 0, // Ensure initial opacity is set if not animating
        transform: isVisible || !once ? 'none' : 'translateY(20px)', // Sample initial transform for smooth start
        transition: 'opacity 0ms, transform 0ms', // Transition controlled by animation
      }}
    >
      {children}
    </div>
  );
};
// --- END RevealAnimation Component ---


// Icons (StarOutline replaced with StarOff to fix the import error)
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

// --- PROJECT DATA (Using the data provided in the previous turn) ---
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

// --- MODAL COMPONENT ---

const ProjectModal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
    if (!isOpen || !content.project) return null;

    const { project } = content;
    const isImage = content.type === 'image';
    const isDescription = content.type === 'description';

    const title = isImage ? `Image: ${project.title}` : `Details: ${project.title}`;

    // Conditional classes for the modal body and content based on type
    const modalBodyClasses = isImage 
      ? "p-2 flex items-center justify-center h-full"
      : "p-6 overflow-y-auto max-h-[75vh]"; // Standard scrollable description view

    const modalContentClasses = isImage
        ? "bg-white rounded-xl shadow-2xl max-w-4xl lg:max-w-6xl w-full max-h-[98vh] overflow-hidden transform transition-all duration-300 scale-100 animate-in fade-in zoom-in-95 flex flex-col"
        : "bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100 animate-in fade-in zoom-in-95";

    return (
        // Modal Overlay
        <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-[1000] backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose} // Close on clicking the backdrop
        >
            {/* Modal Content Box */}
            <div 
                className={modalContentClasses}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
            >
                <header className="flex justify-between items-center p-4 border-b border-gray-200 flex-shrink-0">
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-500 hover:text-red-500 p-1 rounded-full hover:bg-red-50 transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </header>

                <div className={modalBodyClasses}>
                    {isImage && (
                        <div className="flex justify-center items-center h-full w-full">
                            <img 
                                src={project.image} 
                                alt={`Full view of ${project.title}`} 
                                // FIX: Adjusted max-h to 90vh for maximum fit within viewport
                                className="w-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl border border-gray-100"
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = "https://placehold.co/800x600/E0E7FF/3730A3?text=Image+Unavailable";
                                }}
                            />
                        </div>
                    )}
                    
                    {isDescription && (
                        <div className="space-y-6 text-gray-700">
                            {/* Short Description */}
                            <p className="text-lg italic font-medium border-l-4 border-blue-500 pl-4">{project.description}</p>
                            
                            {/* Responsibilities */}
                            <h3 className="text-2xl font-semibold mb-3 text-blue-600 border-b pb-1">Key Responsibilities</h3>
                            <ul className="list-disc list-outside ml-5 space-y-2">
                                {project.responsibilities.map((resp, i) => (
                                    <li key={i} className="leading-relaxed">{resp}</li>
                                ))}
                            </ul>


                                  {/* Search + Filter UI */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search projects by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border dark:border-gray-700 dark:bg-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-inner w-full sm:max-w-xs focus:ring-2 focus:ring-blue-500"
          />

          <div className='flex flex-wrap justify-center gap-2'>
            {filters.map((cat) => (
              <button
                key={cat}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors shadow-sm
                  ${filter === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/50"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200 hover:bg-blue-100 hover:text-blue-600"
                  }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>


                            {/* Tools Used */}
                            <h3 className="text-xl font-semibold mb-3 text-blue-600 border-b pb-1">Technology Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium shadow-sm">
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 pt-4 border-t mt-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-primary hover:text-blue-700 font-semibold transition-colors bg-blue-50 px-4 py-2 rounded-lg"
                                        aria-label={`View GitHub repository for ${project.title}`}
                                    >
                                        <Github size={20} />
                                        View Code on GitHub
                                    </a>
                                )}
                                {project.paperPublished && (
                                    <a
                                        href={project.paperPublished}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-primary hover:text-blue-700 font-semibold transition-colors bg-green-50 px-4 py-2 rounded-lg"
                                        aria-label={`View published paper for ${project.title}`}
                                    >
                                        View Published Paper
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- MAIN SHOWCASE COMPONENT ---

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [favoritedProjects, setFavoritedProjects] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    type: null,
    project: null,
  });
  const [showAllTools, setShowAllTools] = useState<{ [key: string]: boolean }>({});

  // Filter projects based on activeFilter and favorites
  const filteredProjects = activeFilter === 'All'
    ? projects
    : activeFilter === 'Favorites'
    ? projects.filter((project) => favoritedProjects.includes(project.title))
    : projects.filter((project) => project.category.includes(activeFilter));

  const toggleFavorite = useCallback((title: string) => {
    setFavoritedProjects((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  }, []);

  const openModal = (type: 'image' | 'description', project: Project) => {
    setModalContent({ type, project });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Clear content slightly after closing for smooth transition
    setTimeout(() => setModalContent({ type: null, project: null }), 300);
  };


  return (
    <section id="projects"
      className="min-h-screen pt-16 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-gray-900 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-center mb-10 leading-relaxed">
          Showcasing my work across AI/ML, automation, game development, and testing. Click the image to zoom in, or click the title for the full details.
        </p>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`capitalize px-4 py-2 rounded-full border-2 transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base
                ${activeFilter === filter 
                    ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-lg shadow-blue-500/50' 
                    : 'text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-blue-400'}`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <RevealAnimation key={project.title}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden group border border-gray-200 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-300/50">
                
                {/* Image - Clickable for Image Modal */}
                <div 
                  onClick={() => openModal('image', project)} 
                  role="button" 
                  tabIndex={0} 
                  aria-label={`View full image for ${project.title}`} 
                  className="cursor-pointer h-52 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/400x208/F0F4FF/4F46E5?text=Project+Image";
                    }}
                  />
                </div>

                {/* Favorite button */}
                <button
                  onClick={() => toggleFavorite(project.title)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg text-gray-700 hover:text-red-500 transition-all duration-300 hover:scale-110"
                  aria-label={`Toggle favorite for ${project.title}`}
                >
                  {favoritedProjects.includes(project.title) ? (
                    <Star size={24} fill="#FBBF24" color="#FBBF24" />
                  ) : (
                    <StarOff size={24} color="#4B5563" /> // FIX: Changed StarOutline to StarOff
                  )}
                </button>

                {/* Content */}
                <div className="p-6">
                  {/* Title - Clickable for Description Modal */}
                  <h3 
                    className="text-2xl font-bold mb-3 text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => openModal('description', project)} 
                    role="button" 
                    tabIndex={0} 
                    aria-label={`View full details for ${project.title}`}
                  >
                    {project.title}
                  </h3>
                  
                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-1 mb-3 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold shadow-sm">
                    <Clock size={14} className="flex-shrink-0" />
                    {project.duration}
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <h4 className="font-semibold mb-2 text-gray-800">Tools Used:</h4>
                  <ul className="flex flex-wrap gap-2 text-xs font-medium">
                    {/* Show limited tools, with expand button */}
                    {(showAllTools[project.title] ? project.tools : project.tools.slice(0, 4)).map((tool, i) => (
                      <li
                        key={i}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full whitespace-nowrap shadow-inner"
                      >
                        {tool}
                      </li>
                    ))}
                    {project.tools.length > 4 && (
                      <button
                        className="text-blue-600 hover:text-blue-700 underline text-xs ml-2 mt-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowAllTools((prev) => ({ ...prev, [project.title]: !prev[project.title] }));
                        }}
                      >
                        {showAllTools[project.title] ? 'Show Less' : `+${project.tools.length - 4} More`}
                      </button>
                    )}
                  </ul>

                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
      
      {/* Project Modal (Handles both image zoom and full text) */}
      {isModalOpen && (
        <ProjectModal 
            isOpen={isModalOpen} 
            onClose={closeModal} 
            content={modalContent} 
        />
      )}
    </section>
  );
};

export default ProjectsSection;
