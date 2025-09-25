import React from 'react';
import RevealAnimation from './ui/RevealAnimation';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Front Accounting ERP",
      description:
        "Front Accounting (FA) is a professional web-based accounting system for ERP. Developed in PHP/Ajax using MySQL, targeted towards small and medium-sized enterprises.",
      responsibilities: [
        "Software requirement specification writing (SRS)",
        "Creating detailed test plan",
        "Writing test scenarios to cover various use cases",
        "Developing test cases to ensure comprehensive testing",
        "Reporting test case results for tracking and analysis"
      ],
      tools: ["Microsoft Excel"],
      image: "/lovable-uploads/2b88fb76-449e-419a-aaa8-ec1ff1fb3dfd.png",
    },
    {
      title: "Food Recipe Generation from Food Image",
      description:
        "Built a computer vision-based model that predicts ingredients and recipe steps from a food image using CNN, LSTM, and Transformers.",
      responsibilities: [
        "Processed and cleaned large-scale food image datasets",
        "Implemented deep learning models for image captioning",
        "Used PyTorch and NLP techniques for recipe generation"
      ],
      tools: ["PyTorch", "Transformers", "NLP", "CNN", "LSTM"],
      image: "/lovable-uploads/71a0f015-985f-4444-81ed-1937b2cd2a1d.png",
      github: "https://github.com/dyannadle/Recipe-Generator"
    },
    {
      title: "Maze Solver Game (AI + Pygame)",
      description:
        "Developed an interactive Pygame maze where the player navigates to the goal within 60 seconds. Maze is randomly generated but always solvable.",
      responsibilities: [
        "Implemented grid-based logic with scoring",
        "Used BFS for solvable maze generation",
        "Real-time updates and keyboard input handling"
      ],
      tools: ["Python", "Pygame", "NumPy"],
      image: "/lovable-uploads/c400b9cf-269a-4945-8688-165aa7894f4d.png",
      github: "https://github.com/dyannadle/Maze-Solver"
    },
    {
      title: "Text-to-Image Generator using Cloudflare Workers AI",
      description:
        "Built a Streamlit app integrating Cloudflare Workers AI for image generation, inpainting, and vision model inference.",
      responsibilities: [
        "Used pre-trained models for AI inference",
        "Integrated Cloudflare Workers for serverless deployment",
        "Designed clean and responsive UI using Streamlit"
      ],
      tools: ["Streamlit", "Cloudflare Workers AI", "Python"],
      image: "/lovable-uploads/a29f2c35-e89b-4321-9794-594f01dcd11d.png",
      github: "https://github.com/dyannadle/Image-Generator"
    },
    {
      title: "Attendance Management System using Face Recognition",
      description:
        "Face recognition-based attendance system using OpenCV and machine learning to automate student attendance and identity verification.",
      responsibilities: [
        "Trained facial recognition model using student datasets",
        "Integrated camera input with real-time detection",
        "Built desktop interface for admin attendance control"
      ],
      tools: ["OpenCV", "Python", "NumPy"],
      image: "/lovable-uploads/1dc83084-6bdb-42b4-9125-bf6af70db315.png",
      github: "https://github.com/dyannadle/Face-attendance"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-accent/30 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-blue-200/20 rounded-full blur-2xl animate-float animation-delay-400"></div>
      <div className="section-container">
        <RevealAnimation>
          <h2 className="section-title text-center">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle text-center mx-auto">
            Selected projects I've worked on as part of my software testing journey
          </p>
        </RevealAnimation>

        <div className="mt-12 grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <RevealAnimation 
              key={index} 
              animation="fade-in-up" 
              delay={index * 150}
              className="glass bg-white/95 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:scale-[1.01]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="p-6 lg:p-8 col-span-2">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {project.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="bg-secondary px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-blue-100 cursor-default">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.github && (
                    <div>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 hover:scale-105 hover:translate-x-1"
                      >
                        View on GitHub →
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="lg:h-auto flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="w-full h-60 lg:h-full max-h-60 lg:max-h-full rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                    ) : (
                      <div className="text-gray-400 text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">📁</span>
                        </div>
                        <p className="text-sm">Project Image</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation animation="fade-in-up" delay={300}>
          <div className="mt-12 glass bg-white/95 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Professional Skills Summary</h3>
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Strong grasp of <strong>Software Development Life Cycle (SDLC)</strong> and <strong>Software Testing Life Cycle (STLC)</strong>, including requirement analysis, test planning, test execution, defect reporting, and validation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Proficient in <strong>Manual Testing</strong>, including test case design, execution, and defect lifecycle management using tools like <strong>JIRA</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Skilled in <strong>Automation Testing</strong> using <strong>Selenium WebDriver</strong> with frameworks such as <strong>TestNG</strong>, <strong>Maven</strong>, and <strong>Cucumber</strong> for behavior-driven development (BDD).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Experience in <strong>API Testing</strong> with <strong>Postman</strong>, including REST API validation, scripting tests, and working with JSON/XML responses.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Familiar with <strong>Continuous Integration/Continuous Deployment (CI/CD)</strong> tools like <strong>Jenkins</strong> to automate test runs and reporting.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Capable of writing optimized <strong>SQL queries</strong> for data retrieval, verification, and database testing in tools like <strong>MySQL</strong> and <strong>pgAdmin</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Knowledge of <strong>Unit Testing</strong> using <strong>JUnit</strong> and <strong>TestNG</strong>, ensuring code correctness and reliability.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Exposure to <strong>Performance Testing tools</strong> like <strong>JMeter</strong> (basic) for load testing APIs or web apps.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <span>Strong understanding of <strong>Artificial Intelligence and Machine Learning concepts</strong>, including:</span>
                    <ul className="ml-4 mt-2 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">◦</span>
                        <span>Supervised & Unsupervised Learning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">◦</span>
                        <span>Deep Learning (CNN, RNN, LSTM)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">◦</span>
                        <span>Reinforcement Learning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">◦</span>
                        <span>Natural Language Processing (NLP)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">◦</span>
                        <span>Large Language Models (LLMs) and Prompt Engineering</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Hands-on with AI tools such as <strong>ChatGPT</strong>, <strong>Blackbox AI</strong>, <strong>Gemini</strong>, and <strong>Hugging Face Transformers</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Built and deployed ML applications using <strong>Streamlit</strong>, <strong>OpenCV</strong>, and cloud platforms like <strong>AWS</strong> and <strong>Google Cloud</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Comfortable working with <strong>Git/GitHub</strong> for version control and collaboration.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Strong soft skills: <strong>Problem Solving</strong>, <strong>Analytical Thinking</strong>, <strong>Team Collaboration</strong>, and <strong>Effective Communication</strong>.</span>
                </li>
              </ul>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProjectsSection;
