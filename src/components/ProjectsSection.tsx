import React, { useState } from 'react';
import RevealAnimation from './ui/RevealAnimation';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Testing Project', 'AI/ML Project', 'Automation Project', 'API Testing', 'Game Development'];
  
  const projects = [
    {
      title: "Front Accounting ERP Testing",
      description: "Comprehensive testing of professional web-based accounting system for ERP solutions using manual testing methodologies.",
      responsibilities: [
        "Advanced test planning and documentation",
        "End-to-end functional testing execution",
        "User acceptance testing coordination"
      ],
      tools: ["Manual Testing", "Test Planning", "Microsoft Excel", "SRS Writing"],
      image: "/lovable-uploads/2b88fb76-449e-419a-aaa8-ec1ff1fb3dfd.png",
      category: "Testing Project",
      github: "https://github.com/dyannadle/Manual-Projects"
    },
    {
      title: "Food Recipe Generation from Images",
      description: "AI-powered computer vision model that analyzes food images and generates detailed recipes using deep learning techniques.",
      responsibilities: [
        "Automated recipe generation pipeline",
        "Performance optimization testing",
        "Model accuracy validation"
      ],
      tools: ["PyTorch", "Transformers", "NLP", "CNN", "LSTM"],
      image: "/lovable-uploads/71a0f015-985f-4444-81ed-1937b2cd2a1d.png",
      category: "AI/ML Project",
      github: "https://github.com/dyannadle/Recipe-Generator"
    },
    {
      title: "Maze Solver Game",
      description: "Classic maze generation and solving game implemented in Python using the Pygame library.",
      responsibilities: [
       "Designed and implemented maze generation algorithms (e.g., Recursive Backtracker).",
        "Integrated pathfinding algorithms (e.g., A* search or BFS) for automated solving.",
        "Developed a visual game interface using Pygame to display the maze and solver's path.",
        "Managed logic for user interaction and game state (e.g., manual solving mode)."
      ],
      tools: ["Python", "Pygame", "Algorithms", "Data Structures"],
      image: "/lovable-uploads/c400b9cf-269a-4945-8688-165aa7894f4d.png",
      category: "AI/ML Project",
      Paper Punlished : null 
      github: "https://github.com/dyannadle/Maze-Solver"
    },
    
{
  title: "Image Model Cloudflare Workers AI",
  description: "Streamlit application leveraging Cloudflare Workers AI to generate and manipulate images using AI models.",
  responsibilities: [
    "Implemented AI-powered image generation",
    "Integrated Cloudflare Workers AI API with Streamlit",
    "Managed environment setup and dependencies"
  ],
  tools: ["Python", "Streamlit", "Cloudflare Workers AI", "Requests"],
  image: "/lovable-uploads/1dc83084-6bdb-42b4-9125-bf6af70db315.png",
  category: "AI/ML Project",
  github: "https://github.com/dyannadle/Image-Generator"
},
    
 {
  title: "Attendance System",
  description: "A Python-based face recognition attendance system using OpenCV for automatic detection and recording, with data storage in CSV/Excel and reporting features.",
  responsibilities: [
    "Designed and implemented face recognition-based attendance marking",
    "Integrated data storage and report generation using Pandas/CSV",
    "Built user interface with Tkinter for ease of use"
  ],
  tools: ["Python", "OpenCV", "Tkinter", "Pandas", "NumPy"],
  image: "/lovable-uploads/1dc83084-6bdb-42b4-9125-bf6af70db315.png",
  category: "AI/ML Project",
  github: "https://github.com/dyannadle/Face-attendance"
},
      {
  title: "Popular Web Series Page UI Testing",
  description: "Manual and functional UI testing conducted for a mobile app page displaying trending web series, focusing on navigation, interaction, and content rendering validation.",
  responsibilities: [
    "Verified correct rendering of web series posters, titles, and platform badges (e.g., Netflix, Hotstar Specials).",
    "Tested search functionality to ensure accurate filtering of web series based on user input.",
    "Validated the responsiveness and visual state changes of filter buttons (Trending, Newest, Comedy).",
    "Checked the working of 'like/favorite' and 'share' buttons for each web series card.",
    "Ensured smooth vertical scrolling and proper loading of additional content.",
    "Confirmed clear visibility and accessibility of all UI elements on different device sizes and screen resolutions."
  ],
  tools: ["Manual Testing", "Google sheet ", "Bug Tracking Software (JIRA)", "UI Specifications Document"]
        image :""
        category: "Testing Project",
  github: "https://github.com/dyannadle/Manual-Testing--UI-Testing"
}


      

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="section-container">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 mb-12 text-white">
          <RevealAnimation>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-emerald-50 max-w-2xl mx-auto">
                A showcase of my testing projects, automation frameworks, and quality assurance 
                work across different domains and technologies.
              </p>
            </div>
          </RevealAnimation>
        </div>

        {/* Filter Tags */}
        <RevealAnimation animation="fade-in-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </RevealAnimation>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <RevealAnimation 
              key={index} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:translate-y-[-4px]">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-24 h-24 bg-emerald-300 rounded-2xl flex items-center justify-center">
                        <span className="text-4xl text-emerald-700">📱</span>
                      </div>
                    </div>
                  )}
                  {/* Favorite/Star Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">⭐</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  {/* Key Responsibilities */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">My Responsibilities:</h4>
                    <ul className="space-y-1">
                      {project.responsibilities.slice(0, 2).map((item, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start">
                          <span className="text-emerald-500 mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.slice(0, 3).map((tool, i) => (
                      <span key={i} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-xs font-medium">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
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
