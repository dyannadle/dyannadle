import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
// Tailwind `cn` utility
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

// -------------------- RevealAnimation Component --------------------
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

function RevealAnimation({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  duration = 500,
  once = true,
  style = {},
}: RevealAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

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

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, [threshold, once, hasAnimated]);

  const animationClass = useMemo(() => {
    if (!isVisible) return 'opacity-0';
    const map: Record<string, string> = {
      'fade-in': 'animate-fade-in',
      'fade-in-up': 'animate-fade-in-up',
      'fade-in-down': 'animate-fade-in-down',
      'fade-in-left': 'animate-fade-in-left',
      'fade-in-right': 'animate-fade-in-right',
      'blur-in': 'animate-blur-in',
      'zoom-in': 'animate-zoom-in',
      'flip-in': 'animate-flip-in',
    };
    return map[animation] || 'animate-fade-in';
  }, [animation, isVisible]);

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
        transition: 'opacity 300ms ease, transform 300ms ease',
      }}
    >
      {children}
    </div>
  );
}

// -------------------- Icons --------------------
import { Github, Star, StarOff, Clock, X } from 'lucide-react';

// -------------------- Types --------------------
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

// -------------------- Data --------------------
const projects: Project[] = [
  {
    title: 'E-commerce Site Automation (Flipkart)',
    description:
      'Developed a robust automation framework using Selenium and Python to validate critical business flows on the Flipkart e-commerce platform.',
    duration: '2 months',
    responsibilities: [
      'Designed and implemented an end-to-end automation framework (Page Object Model) using Selenium WebDriver, Python, and pytest.',
      'Automated key e-commerce scenarios including user registration, product search, filter application, cart addition, and checkout process.',
      'Integrated logging and reporting (HTML reports) into the automation suite for easy test result analysis.',
      'Managed and maintained test data using CSV/Excel files to support various test cases.',
      'Conducted daily regression runs to ensure stability and detect defects early in the continuous integration pipeline.',
    ],
    tools: ['Selenium WebDriver', 'Java', 'Java Script', 'Page Object Model', 'HTML Reporting'],
    image: '/lovable-uploads/Flipkart.png',
    category: 'Automation Project',
    github: 'https://github.com/dyannadle/Flipkart-Automation',
  },
  {
    title: 'Echoes of the Past (AI Detective Game)',
    description:
      'A unique procedural narrative detective game using an integrated AI interpreter (Gemini 2.0 Flash) to generate story conclusions from fragmented clues.',
    duration: '2 weeks',
    responsibilities: [
      'Designed and implemented the core game logic in JavaScript, including movement between rooms and object interaction.',
      'Developed a procedural generation algorithm to create unique house layouts and dynamically place clues for each session.',
      'Integrated the Google Gemini API to analyze collected clues and generate concise, plausible narrative conclusions.',
      'Created a clean, text-based interface and persistent game log using HTML5 and Tailwind CSS for easy user exploration.',
      'Focused on creating a dynamic mystery where multiple clue combinations lead to varied AI interpretations.',
    ],
    tools: [
      'HTML5: For the basic structure of the game.',
      'CSS3 (Tailwind CSS): For responsive and modern styling.',
      'JavaScript (ES6+): For all game logic, procedural generation, and interactivity.',
      'Google Gemini API (gemini-2.0-flash): Used for generating the narrative conclusion based on collected clues.',
      'Firebase SDK (Auth & Firestore): (Planned for future use, currently included for environment compatibility but not fully utilized for saving/loading game state in this version.',
    ],
    image: '/lovable-uploads/Echo.png',
    category: 'Game Development, AI/ML Project',
    github: 'https://github.com/dyannadle/Games',
  },
  {
    title: 'Front Accounting ERP Testing',
    description:
      'Comprehensive testing of professional web-based accounting system for ERP solutions using manual testing methodologies.',
    duration: '2 months',
    responsibilities: [
      'Developed detailed test plans, test cases, and test scripts based on ERP requirements and specifications.',
      'Executed end-to-end functional testing covering modules like accounting, inventory, and payroll to ensure system integrity.',
      'Coordinated and conducted User Acceptance Testing (UAT) with stakeholders to validate business workflows.',
      'Identified, logged, and tracked defects using bug tracking tools, ensuring timely resolution.',
      'Collaborated with developers and business analysts to clarify requirements and resolve issues.',
    ],
    tools: ['Manual Testing', 'Test Planning', 'Microsoft Excel', 'SRS Writing'],
    image: '/lovable-uploads/2b88fb76-449e-419a-aaa8-ec1ff1fb3dfd.png',
    category: 'Testing Project',
    github: 'https://github.com/dyannadle/Manual-Projects',
  },
  {
    title: 'Food Recipe Generation from Images',
    description:
      'AI-powered computer vision model that analyzes food images and generates detailed recipes using deep learning techniques.',
    duration: '4 months',
    responsibilities: [
      'Designed and implemented an automated pipeline for generating recipes from food images using convolutional and recurrent neural networks.',
      'Performed extensive performance optimization and hyperparameter tuning to improve model accuracy and efficiency.',
      'Validated model predictions against labeled datasets to ensure recipe relevance and correctness.',
      'Collaborated on dataset collection and preprocessing to enhance training data quality.',
      'Documented model architecture and results for academic publication.',
    ],
    tools: ['PyTorch', 'Transformers', 'NLP', 'CNN', 'LSTM'],
    image: '/lovable-uploads/71a0f015-985f-4444-81ed-1937b2cd2a1d.png',
    category: 'AI/ML Project',
    paperPublished: '/AI-Powered Recipe Generator from Food Images Using Deep Learning Published Paper.pdf',
    github: 'https://github.com/dyannadle/Recipe-Generator',
  },
  {
    title: 'Maze Solver Game',
    description:
      "Classic maze generation and solving game implemented in Python using the Pygame library.",
    duration: '1 month',
    responsibilities: [
      'Designed and implemented maze generation algorithms, including Recursive Backtracker, for random maze creation.',
      "Developed and integrated pathfinding algorithms such as A* search and Breadth-First Search for automated maze solving.",
      'Created a responsive graphical user interface with Pygame to visualize maze generation and solver\'s path dynamically.',
      'Implemented user controls for manual maze navigation and game state management.',
      'Conducted extensive testing and debugging to ensure smooth gameplay and accurate pathfinding.',
    ],
    tools: ['Python', 'Pygame', 'Algorithms', 'Data Structures'],
    image: '/lovable-uploads/c400b9cf-269a-4945-8688-165aa7894f4d.png',
    category: 'AI/ML Project, Game Development',
    github: 'https://github.com/dyannadle/Maze-Solver',
  },
  {
    title: 'Image Model Cloudflare Workers AI',
    description:
      'Streamlit application leveraging Cloudflare Workers AI to generate and manipulate images using AI models.',
    duration: '3 weeks',
    responsibilities: [
      'Developed AI-powered image generation features using Cloudflare Workers AI API integrated into Streamlit interface.',
      'Implemented REST API calls and handled asynchronous image processing requests efficiently.',
      'Managed environment configuration, dependencies, and deployment for seamless application performance.',
      'Optimized user experience through responsive UI design and error handling.',
      'Documented API usage and application setup for future maintenance.',
    ],
    tools: ['Python', 'Streamlit', 'Cloudflare Workers AI', 'Requests'],
    image: '/lovable-uploads/a29f2c35-e89b-4321-9794-594f01dcd11d.png',
    category: 'AI/ML Project',
    github: 'https://github.com/dyannadle/Image-Generator',
  },
  {
    title: 'Attendance System',
    description:
      'A Python-based face recognition attendance system using OpenCV for automatic detection and recording, with data storage in Excel and reporting features.',
    duration: '6 weeks',
    responsibilities: [
      'Designed and implemented a face recognition attendance system using OpenCV to detect and record attendance automatically.',
      'Integrated data storage using Pandas and Excel formats for easy report generation and record maintenance.',
      'Developed a user-friendly GUI with Tkinter to facilitate manual overrides and attendance review.',
      'Tested system accuracy under various lighting and environmental conditions to ensure reliability.',
      'Generated detailed attendance reports and analytics to assist management.',
    ],
    tools: ['Python', 'OpenCV', 'Tkinter', 'Pandas', 'NumPy'],
    image: '/lovable-uploads/1dc83084-6bdb-42b4-9125-bf6af70db315.png',
    category: 'AI/ML Project',
    github: 'https://github.com/dyannadle/Face-attendance',
  },
  {
    title: 'Popular Web Series Page UI Testing',
    description:
      'Manual and functional UI testing conducted for a mobile app page displaying trending web series,focusing on navigation, interaction, and content rendering validation.',
    duration: '2 weeks',
    responsibilities: [
      'Verified correct rendering of web series posters, titles, and platform badges (e.g., Netflix, Hotstar Specials) across devices.',
      'Tested search functionality rigorously to ensure accurate filtering and retrieval of web series based on user input.',
      'Validated responsiveness and visual state changes of filter buttons (Trending, Newest, Comedy) under different scenarios.',
      "Checked functionality and feedback of 'like/favorite' and 'share' buttons for each web series card to enhance UX.",
      'Ensured smooth vertical scrolling and lazy loading of additional content without performance issues.',
      'Confirmed clear visibility, accessibility compliance, and UI consistency across various screen sizes and resolutions.',
    ],
    tools: ['Manual Testing', 'Google Sheets', 'Bug Tracking Software (JIRA)', 'UI Specifications Document'],
    image: 'UI Testing.png',
    category: 'Testing Project',
    github: 'https://github.com/dyannadle/Manual-Testing--UI-Testing',
  },
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

// -------------------- Modal Component --------------------
function ProjectModal({ isOpen, onClose, content }: ModalProps) {
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !content.project) return null;

  const { project } = content;
  const isImage = content.type === 'image';
  const isDescription = content.type === 'description';
  const title = isImage ? `Image: ${project.title}` : `Details: ${project.title}`;

  const modalBodyClasses = isImage
    ? 'p-2 flex items-center justify-center h-full'
    : 'p-6 overflow-y-auto max-h-[75vh]';

  const modalContentClasses = isImage
    ? 'bg-white rounded-xl shadow-2xl max-w-4xl lg:max-w-6xl w-full max-h-[98vh] overflow-hidden transform transition-all duration-300 scale-100 animate-in fade-in zoom-in-95 flex flex-col'
    : 'bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100 animate-in fade-in zoom-in-95';

  return (
    <div
      role="dialog"
      aria-labelledby={titleId}
      aria-modal="true"
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-[1000] backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className={modalContentClasses}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-gray-200 flex-shrink-0">
          <h2 id={titleId} className="text-xl font-bold text-gray-800">
            {title}
          </h2>
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
                className="w-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl border border-gray-100"
                onError={(e) => {
                  const src = e.currentTarget.src || '';
                  if (src.includes('placehold.co')) return;
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/800x600/E0E7FF/3730A3?text=Image+Unavailable';
                }}
              />
            </div>
          )}

          {isDescription && (
            <div className="space-y-6 text-gray-700">
              <p id="modal-description" className="text-lg italic font-medium border-l-4 border-blue-500 pl-4">
                {project.description}
              </p>

              <h3 className="text-2xl font-semibold mb-3 text-blue-600 border-b pb-1">Key Responsibilities</h3>
              <ul className="list-disc list-outside ml-5 space-y-2">
                {project.responsibilities.map((resp, i) => (
                  <li key={`${project.title}-resp-${i}`} className="leading-relaxed">
                    {resp}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-blue-600 border-b pb-1">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span key={`${project.title}-modal-tool-${i}`} className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium shadow-sm">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold transition-colors bg-blue-50 px-4 py-2 rounded-lg"
                    aria-label={`View GitHub repository for ${project.title}`}>
                    <Github size={20} />
                    View Code on GitHub
                  </a>
                )}

                {project.paperPublished && (
                  <a
                    href={project.paperPublished}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold transition-colors bg-green-50 px-4 py-2 rounded-lg"
                    aria-label={`View published paper for ${project.title}`}>
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
}

// -------------------- Main ProjectsSection --------------------
export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [favoritedProjects, setFavoritedProjects] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({ type: null, project: null });
  const [showAllTools, setShowAllTools] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    if (activeFilter === 'Favorites')
      return projects.filter((p) => favoritedProjects.includes(p.title));
    return projects.filter((p) => p.category.includes(activeFilter));
  }, [activeFilter, favoritedProjects]);

  const toggleFavorite = useCallback((title: string) => {
    setFavoritedProjects((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]));
  }, []);

  const openModal = useCallback((type: 'image' | 'description', project: Project) => {
    setModalContent({ type, project });
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    // Clear content after transition
    setTimeout(() => setModalContent({ type: null, project: null }), 300);
  }, []);

  return (
    <section id="projects" className="min-h-screen pt-16 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-gray-900 tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-center mb-10 leading-relaxed">
          Showcasing my work across AI/ML, automation, game development, and testing. Click the image to zoom in, or click the title for the full details.
        </p>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <RevealAnimation key={project.title}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden group border border-gray-200 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-300/50">
                <div
                  onClick={() => openModal('image', project)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View full image for ${project.title}`}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal('image', project)}
                  className="cursor-pointer h-52 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const src = e.currentTarget.src || '';
                      if (src.includes('placehold.co')) return;
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://placehold.co/400x208/F0F4FF/4F46E5?text=Project+Image';
                    }}
                  />
                </div>

                <button
                  onClick={() => toggleFavorite(project.title)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg text-gray-700 hover:text-red-500 transition-all duration-300 hover:scale-110"
                  aria-label={`Toggle favorite for ${project.title}`}
                >
                  {favoritedProjects.includes(project.title) ? (
                    <Star size={24} fill="#FBBF24" color="#FBBF24" />
                  ) : (
                    <StarOff size={24} color="#4B5563" />
                  )}
                </button>

                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-3 text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => openModal('description', project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal('description', project)}
                    aria-label={`View full details for ${project.title}`}
                  >
                    {project.title}
                  </h3>

                  <div className="inline-flex items-center gap-1 mb-3 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold shadow-sm">
                    <Clock size={14} className="flex-shrink-0" />
                    {project.duration}
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <h4 className="font-semibold mb-2 text-gray-800">Tools Used:</h4>
                  <div className="flex items-start gap-2">
                    <ul className="flex flex-wrap gap-2 text-xs font-medium">
                      {(showAllTools[project.title] ? project.tools : project.tools.slice(0, 4)).map((tool, i) => (
                        <li key={`${project.title}-tool-${i}`} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full whitespace-nowrap shadow-inner">
                          {tool}
                        </li>
                      ))}
                    </ul>

                    {project.tools.length > 4 && (
                      <div className="ml-2 mt-1">
                        <button
                          className="text-blue-600 hover:text-blue-700 underline text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowAllTools((prev) => ({ ...prev, [project.title]: !prev[project.title] }));
                          }}
                        >
                          {showAllTools[project.title] ? 'Show Less' : `+${project.tools.length - 4} More`}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>

      {isModalOpen && <ProjectModal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />}
    </section>
  );
}
