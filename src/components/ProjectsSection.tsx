// React and Hooks
import React, { useState, useCallback, useEffect, useRef } from "react";
import { Github, Star, StarOff, Clock, X } from "lucide-react";

// --- Utility Function ---
const cn = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// --- RevealAnimation Component ---
interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | "fade-in"
    | "fade-in-up"
    | "fade-in-down"
    | "fade-in-left"
    | "fade-in-right"
    | "blur-in"
    | "zoom-in"
    | "flip-in";
  delay?: number;
  threshold?: number;
  duration?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  className = "",
  animation = "fade-in-up",
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
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, [threshold, once, hasAnimated]);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "fade-in-up":
        return "animate-fade-in-up";
      case "fade-in-down":
        return "animate-fade-in-down";
      case "fade-in-left":
        return "animate-fade-in-left";
      case "fade-in-right":
        return "animate-fade-in-right";
      case "blur-in":
        return "animate-blur-in";
      case "zoom-in":
        return "animate-zoom-in";
      case "flip-in":
        return "animate-flip-in";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClass(), className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        ...style,
        opacity: isVisible || !once ? 1 : 0,
        transform: isVisible || !once ? "none" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
};

// --- Type Definitions ---
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

// --- Project Data ---
const projects: Project[] = [
  {
    title: "E-commerce Site Automation (Flipkart)",
    description:
      "Developed a robust automation framework using Selenium and Python to validate critical business flows on the Flipkart e-commerce platform.",
    duration: "2 months",
    responsibilities: [
      "Designed and implemented a Page Object Model framework.",
      "Automated key e-commerce flows like search, cart, and checkout.",
      "Integrated HTML reporting and CSV-based data management.",
      "Conducted regression runs for CI stability.",
    ],
    tools: [
      "Selenium WebDriver",
      "Java",
      "JavaScript",
      "Page Object Model",
      "HTML Reporting",
    ],
    image: "/lovable-uploads/Flipkart.png",
    category: "Automation Project",
    github: "https://github.com/dyannadle/Flipkart-Automation",
  },
  {
    title: "Echoes of the Past (AI Detective Game)",
    description:
      "A procedural narrative detective game that uses Google Gemini AI to infer story conclusions based on collected clues.",
    duration: "2 weeks",
    responsibilities: [
      "Built core game logic and movement in JavaScript.",
      "Implemented procedural generation and AI-driven narratives.",
      "Created responsive UI with Tailwind and HTML5.",
    ],
    tools: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript",
      "Google Gemini API",
      "Firebase SDK",
    ],
    image: "/lovable-uploads/Echo.png",
    category: "Game Development, AI/ML Project",
    github: "https://github.com/dyannadle/Games",
  },
  {
    title: "Front Accounting ERP Testing",
    description:
      "Comprehensive testing of a professional ERP accounting system using manual testing methodologies.",
    duration: "2 months",
    responsibilities: [
      "Created test cases for accounting and payroll modules.",
      "Executed UAT with stakeholders.",
      "Tracked bugs in JIRA and ensured timely fixes.",
    ],
    tools: ["Manual Testing", "Test Planning", "Excel", "SRS Writing"],
    image: "/lovable-uploads/ERP.png",
    category: "Testing Project",
    github: "https://github.com/dyannadle/Manual-Projects",
  },
];

// --- Filters ---
const filters = [
  "All",
  "Favorites",
  "Testing Project",
  "AI/ML Project",
  "Automation Project",
  "Game Development",
];

// --- Main Component ---
const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [favoritedProjects, setFavoritedProjects] = useState<string[]>([]);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllTools, setShowAllTools] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Filter logic
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : activeFilter === "Favorites"
      ? projects.filter((p) => favoritedProjects.includes(p.title))
      : projects.filter((p) => p.category.includes(activeFilter));

  const toggleFavorite = useCallback((title: string) => {
    setFavoritedProjects((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  }, []);

  const openImageModal = (project: Project) => {
    setSelectedProject(project);
    setIsImageModalOpen(true);
  };

  const openDetailsModal = (project: Project) => {
    setSelectedProject(project);
    setIsDetailsModalOpen(true);
  };

  const closeModals = () => {
    setIsImageModalOpen(false);
    setIsDetailsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="min-h-screen pt-16 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-gray-900 tracking-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Projects
          </span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10 leading-relaxed">
          Click on the image to view project image, or click the title for full
          details — both open popups without page scroll.
        </p>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`capitalize px-4 py-2 rounded-full border-2 transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base ${
                activeFilter === filter
                  ? "bg-blue-600 text-white border-blue-600 font-semibold shadow-lg shadow-blue-500/50"
                  : "text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-blue-400"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <RevealAnimation key={project.title}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden group border border-gray-200 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-300/50">
                {/* Image */}
                <div
                  onClick={() => openImageModal(project)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View image for ${project.title}`}
                  className="cursor-pointer h-52 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Favorite */}
                <button
                  onClick={() => toggleFavorite(project.title)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg text-gray-700 hover:text-red-500 transition-all duration-300 hover:scale-110"
                >
                  {favoritedProjects.includes(project.title) ? (
                    <Star size={24} fill="#FBBF24" color="#FBBF24" />
                  ) : (
                    <StarOff size={24} color="#4B5563" />
                  )}
                </button>

                {/* Content */}
                <div className="p-6">
                  <h3
                    onClick={() => openDetailsModal(project)}
                    className="text-2xl font-bold mb-3 text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
                  >
                    {project.title}
                  </h3>

                  <div className="inline-flex items-center gap-1 mb-3 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold shadow-sm">
                    <Clock size={14} />
                    {project.duration}
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <h4 className="font-semibold mb-2 text-gray-800">
                    Tools Used:
                  </h4>
                  <ul className="flex flex-wrap gap-2 text-xs font-medium">
                    {(showAllTools[project.title]
                      ? project.tools
                      : project.tools.slice(0, 4)
                    ).map((tool, i) => (
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
                          setShowAllTools((prev) => ({
                            ...prev,
                            [project.title]: !prev[project.title],
                          }));
                        }}
                      >
                        {showAllTools[project.title]
                          ? "Show Less"
                          : `+${project.tools.length - 4} More`}
                      </button>
                    )}
                  </ul>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>

      {/* IMAGE MODAL */}
      {isImageModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModals}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden p-4 max-w-4xl w-full flex justify-center items-center relative animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={closeModals}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/80 hover:bg-gray-200 transition"
            >
              <X size={20} />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="max-h-[80vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* DETAILS MODAL */}
      {isDetailsModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModals}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-3xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">
                {selectedProject.title}
              </h2>
              <button
                aria-label="Close"
                onClick={closeModals}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>

              <h3 className="text-lg font-semibold mb-2 text-blue-700">
                Key Responsibilities
              </h3>
              <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                {selectedProject.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2 text-purple-700">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline font-semibold flex items-center gap-2"
                  >
                    <Github size={18} /> View Code
                  </a>
                )}
                {selectedProject.paperPublished && (
                  <a
                    href={selectedProject.paperPublished}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline font-semibold"
                  >
                    View Paper
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
