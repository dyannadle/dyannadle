// React and Hooks
import React, { useState, useCallback } from 'react';

// Animation wrapper component
import RevealAnimation from './ui/RevealAnimation';
// Icons
import { Github } from 'lucide-react';

// Filters list (defined outside component to avoid recreation)
const filters = [
  'All',
  'Favorites',
  'Testing Project',
  'AI/ML Project',
  'Automation Project',
  'API Testing',
  'Game Development',
];

// Projects data (also outside component)
const projects = [
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
  const [activeFilter, setActiveFilter] = useState('All');
  const [favoritedProjects, setFavoritedProjects] = useState<string[]>([]);
  const [modalProject, setModalProject] = useState<typeof projects[0] | null>(null);
  const [fullDescription, setFullDescription] = useState(false); // Track if full description is shown
  const [showAllTools, setShowAllTools] = useState<{ [key: number]: boolean }>({});

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

  const closeModal = () => {
    setModalProject(null);
    setFullDescription(false); // Reset description state when modal is closed
  };

  // Full Description Logic
  const handleDescriptionClick = () => {
    setFullDescription((prev) => !prev);
  };

  return (
    <section id="projects"
  className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
>
      <div className="section-container">

        {/* Modal */}
        {modalProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
          >
            <div
              className="bg-white rounded-xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-3xl font-bold"
                aria-label="Close modal"
              >
                ×
              </button>

              {/* Full Image */}
              <div className="mb-4">
                <img
                  src={modalProject.image}
                  alt={modalProject.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <h2 id="modal-title" className="text-2xl font-bold mb-4 text-foreground">{modalProject.title}</h2>
              
              {/* Duration Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {modalProject.duration}
              </div>
              
              <p className="mb-4 text-muted-foreground">{modalProject.description}</p>

              {/* Show Full Description Button */}
              <button
                onClick={handleDescriptionClick}
                className="text-primary hover:text-primary/80 font-medium mb-4"
              >
                {fullDescription ? 'Show Less' : 'Show Full Description'}
              </button>

              {fullDescription && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Responsibilities:</h3>
                  <ul className="list-disc list-inside mb-4">
                    {modalProject.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  <h3 className="font-semibold mb-2">Tools Used:</h3>
                  <ul className="list-disc list-inside">
                    {modalProject.tools.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Github Link */}
              {modalProject.github && (
                <a
                  href={modalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-6 gap-2 hover:text-primary text-primary/80 font-semibold"
                  aria-label={`View GitHub repository for ${modalProject.title}`}
                >
                  <Github size={24} />
                  GitHub
                </a>
              )}

              {/* Paper Published Link (if exists) */}
              {modalProject.paperPublished && (
                <a
                  href={`/papers/${modalProject.paperPublished}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-sm text-gray-500 underline"
                  aria-label={`View published paper for ${modalProject.title}`}
                >
                  View Published Paper
                </a>
              )}
            </div>
          </div>
        )}

        {/* Header */}
        <h2 className="section-title text-foreground">Projects</h2>
        <p className="text-muted-foreground max-w-4xl mx-auto text-center mb-8 leading-relaxed">
          Showcasing my projects ranging from AI/ML, automation, game development, and manual testing.
          You can filter by category or favorites.
        </p>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`capitalize px-4 py-1 rounded-full border-2 transition-all duration-300 transform hover:scale-105
                ${activeFilter === filter ? 'bg-primary text-primary-foreground border-primary font-semibold shadow-lg animate-pulse' : 'text-foreground border-primary/50 hover:bg-primary hover:text-primary-foreground hover:shadow-md'}`}
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
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg relative overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image - Clickable */}
                <div onClick={() => setModalProject(project)} role="button" tabIndex={0} aria-label={`Open details for ${project.title}`} className="cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                    loading="lazy"
                  />
                </div>

                {/* Favorite button */}
                <button
                  onClick={() => toggleFavorite(project.title)}
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label={`Toggle favorite for ${project.title}`}
                >
                  {favoritedProjects.includes(project.title) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="none"
                      className="w-6 h-6 text-primary"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  )}
                </button>

                {/* Content */}
                <div className="p-6" onClick={() => setModalProject(project)} role="button" tabIndex={0} aria-label={`Open details for ${project.title}`}>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  
                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-1 mb-3 px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-semibold">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {project.duration}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                  <h4 className="font-semibold mb-2 text-foreground">Tools:</h4>
                  <ul className="flex flex-wrap gap-2 text-xs font-medium">
                    {(showAllTools[idx] ? project.tools : project.tools.slice(0, 4)).map((tool, i) => (
                      <li
                        key={i}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-lg whitespace-nowrap"
                      >
                        {tool}
                      </li>
                    ))}
                    {project.tools.length > 4 && (
                      <button
                        className="text-primary hover:text-primary/80 ml-2 underline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowAllTools((prev) => ({ ...prev, [idx]: !prev[idx] }));
                        }}
                      >
                        {showAllTools[idx] ? 'Show Less' : `+${project.tools.length - 4} More`}
                      </button>
                    )}
                  </ul>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
