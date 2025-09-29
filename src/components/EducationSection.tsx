import React from "react";
import RevealAnimation from "./ui/RevealAnimation";
import { educationData } from "@/data/educationData";
import {
  GraduationCap,
  Award,
  BookOpen,
  Brain,
  Code,
  Database,
  Globe,
} from "lucide-react";

const EducationSection: React.FC = () => {
  // Colors for icons in education timeline
  const iconColors = ["bg-purple-500", "bg-emerald-500", "bg-blue-500", "bg-orange-500"];

  // Function to fetch favicon dynamically based on institution URL
  const getFaviconUrl = (url: string): string =>
    `https://www.google.com/s2/favicons?domain=${url}&sz=32`;

  // Certification list
  const certifications = [
    {
      name: "Certified Software Tester",
      institution: "Quastech",
      year: "2025",
      icon: "/logos/Quastech-logo.jpg.ico",
      link: "/Certificates/Certified Software Tester.pdf",
    },
    {
      name: "GenAI Powered Data Analytics",
      institution: "Coursera",
      year: "2025",
      icon: "/logos/coursera logo.svg",
      link: "/Certificates/GenAI Powered Data Analytics.pdf",
    },
    {
      name: "Google Associate Cloud Engineer",
      institution: "Google Cloud",
      year: "2024",
      icon: "/logos/google-cloud-storage.png",
      link: "/Certificates/Google_Associate_Cloud_Engineer_Certificate.pdf",
    },
    {
      name: "AWS Academy Introduction to Cloud",
      institution: "Amazon",
      year: "2024",
      icon: "/logos/AWS-Logo.png",
      link: "/Certificates/AWS Academy Introduction to Cloud.pdf",
    },
    {
      name: "Career Essentials in Generative AI",
      institution: "Microsoft & LinkedIn",
      year: "2024",
      icon: "/logos/linkedin-learning-logo.jpg",
      link: "/Certificates/Career Essentials in Generative AI.pdf",
    },
    {
      name: "Google AI Essentials",
      institution: "Coursera",
      year: "2024",
      icon: "/logos/coursera logo.svg",
      link: "/Certificates/Google AI Essentials.pdf",
    },
    {
      name: "What is Generative AI?",
      institution: "LinkedIn Learning",
      year: "2024",
      icon: "/logos/linkedin-learning-logo.jpg",
      link: "/Certificates/What is Generative AI.pdf",
    },
    {
      name: "Data Manipulation with pandas",
      institution: "DataCamp",
      year: "2023",
      icon: "/logos/DC.png",
      link: "/Certificates/Data Manipulation with pandas.pdf",
    },
    {
      name: "Value Added Course By SAP",
      institution: "SAP & Edunet",
      year: "2023",
      icon: "/",
      link: "/Certificates/Value Added Course By SAP.pdf",
    },
    {
      name: "Joining Data in SQL",
      institution: "DataCamp",
      year: "2023",
      icon: "/logos/DC.png",
      link: "/Certificates/Joining Data in SQL.pdf",
    },
    {
      name: "Introduction to Python",
      institution: "DataCamp",
      year: "2023",
      icon: "/logos/DC.png",
      link: "/Certificates/Introduction to Python.pdf",
    },
    {
      name: "Android App Development",
      institution: "Internshala",
      year: "2022",
      icon: "/logos/internshala-logo.jpg",
      link: "/Certificates/Android App Development.pdf",
    },
    {
      name: "Maharashtra State Certificate in IT",
      institution: "MS-CIT",
      year: "2019",
      icon: "/logos/logo-mscit.png",
      link: "/Certificates/Maharashtra State Certificate in IT.pdf",
    },
  ];

  // Continuous learning skill tags with tooltip
  const continuousLearningSkills = [
    { name: "Testing Framework", icon: <BookOpen size={20} /> },
    { name: "Quality Assurance", icon: <Award size={20} /> },
    { name: "Cloud Technologies", icon: <Globe size={20} /> },
    { name: "Development Process", icon: <Code size={20} /> },
    { name: "Data Science", icon: <Database size={20} /> },
    { name: "Certification", icon: <GraduationCap size={20} /> },
    { name: "Artificial Intelligence", icon: <Brain size={20} /> },
    { name: "Academic Growth", icon: <BookOpen size={20} /> },
  ];

  // Highlighted areas with tooltip info
  const highlightedAreas = [
    {
      name: "Advanced Testing Frameworks",
      description: "Covers Selenium, Cypress, Playwright, and other automation frameworks.",
    },
    {
      name: "AI in Software Testing",
      description: "Applying ML/AI for defect prediction, test optimization, and automation.",
    },
    {
      name: "Cloud Testing Strategies",
      description: "Testing apps in cloud platforms like AWS, Azure, and GCP.",
    },
    {
      name: "Performance Engineering",
      description: "Load, stress, and scalability testing to ensure system reliability.",
    },
    {
      name: "API Security Testing",
      description: "OWASP practices, Postman, and BurpSuite for secure APIs.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="section-container">
        {/* ---------- Header ---------- */}
        <RevealAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Academic Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My educational background and professional certifications that have built the foundation of
              my expertise in software testing and quality assurance.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ---------- Education Section ---------- */}
          <RevealAnimation animation="fade-in-right">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>

              <div className="space-y-6">
                {educationData.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${iconColors[index % iconColors.length]} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <GraduationCap className="text-white" size={20} />
                    </div>

                    {/* Card for each education entry */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <h4 className="font-bold text-lg text-gray-800 mb-1">{item.degree}</h4>

                      {/* ✅ Institution name with favicon and hyperlink */}
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={getFaviconUrl(item.url)}
                          alt={item.institution}
                          className="w-5 h-5 rounded"
                          onError={(e) => {
                            e.currentTarget.src = "/default-favicon.png"; // fallback icon
                          }}
                        />
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          {item.institution}
                        </a>
                      </div>

                      <p className="text-sm text-gray-500 mb-3">{item.duration}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>

          {/* ---------- Certifications Section ---------- */}
          <RevealAnimation animation="fade-in-left" delay={200}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Professional Certifications</h3>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  {certifications.length} Certifications
                </span>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <img src={cert.icon} alt={cert.institution} className="w-10 h-10 rounded-md" />
                    <div className="flex-1">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-800 text-sm hover:text-emerald-600"
                      >
                        {cert.name}
                      </a>
                      <p className="text-gray-500 text-xs">{cert.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-400 text-xs">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* ---------- Continuous Learning Section ---------- */}
        <RevealAnimation animation="fade-in-up" delay={400}>
          <div className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Brain className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Continuous Learning</h3>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              I am committed to continuous learning and professional development, regularly updating
              my skills and knowledge through various educational platforms including Coursera, DataCamp,
              LinkedIn Learning, and attending online conferences.
            </p>

            {/* Skills Grid with hover tooltips */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {continuousLearningSkills.map((skill, index) => (
                <div key={index} className="relative group">
                  <div
                    className="bg-white rounded-xl p-4 text-center shadow-sm border border-emerald-100 
                    transition-transform duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3 text-emerald-600">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                  </div>

                  {/* Tooltip for each skill */}
                  <div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 p-3 bg-gray-800 text-white 
                    rounded-lg text-sm opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                    transition-all duration-300 ease-out z-10"
                  >
                    {(() => {
                      switch (skill.name) {
                        case "Testing Framework":
                          return "Covers JUnit, TestNG, Selenium, Cypress, and Playwright for automation.";
                        case "Quality Assurance":
                          return "Focuses on software quality processes, test planning, and bug tracking.";
                        case "Cloud Technologies":
                          return "Learn AWS, Azure, and GCP basics, including compute and storage.";
                        case "Development Process":
                          return "Agile, Scrum, CI/CD pipelines, and DevOps practices.";
                        case "Data Science":
                          return "Python, Pandas, ML basics, and visualization tools.";
                        case "Certification":
                          return "ISTQB, AWS, Azure, and career-boosting certifications.";
                        case "Artificial Intelligence":
                          return "Intro to AI, ML, NLP, and real-world AI-powered apps.";
                        case "Academic Growth":
                          return "Research, projects, publishing, and continuous learning.";
                        default:
                          return "";
                      }
                    })()}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlighted areas with tooltip info */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {highlightedAreas.map((area, index) => (
                <div key={index} className="relative group">
                  <span className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium cursor-pointer">
                    • {area.name}
                  </span>
                  <div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 p-3 bg-white shadow-lg rounded-lg text-gray-600 text-sm 
                    opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                    transition-all duration-300 ease-out z-10"
                  >
                    {area.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default EducationSection;
