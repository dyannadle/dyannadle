import React from "react";
import RevealAnimation from "./ui/RevealAnimation";
import ParticleSystem from "./ui/ParticleSystem";
import FloatingElements from "./ui/FloatingElements";
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
  const iconColors = ["bg-purple-500", "bg-emerald-500", "bg-blue-500", "bg-orange-500"];

  const getFaviconUrl = (url: string): string =>
    `https://www.google.com/s2/favicons?domain=${url}&sz=32`;

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
    <section
      id="education"
      className="min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden"
    >
      {/* Particle System Background */}
      <ParticleSystem
        particleCount={40}
        colors={['#10b981', '#06b6d4', '#14b8a6', '#059669', '#0d9488']}
        speed={0.4}
        size={{ min: 1, max: 3 }}
        className="-z-10"
      />

      {/* Floating Elements */}
      <FloatingElements
        count={6}
        className="-z-10"
      />
      <div className="section-container">
        {/* ---------- Header ---------- */}
        <RevealAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Academic Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-secondary-foreground" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>

              <div className="space-y-6">
                {educationData.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 animate-fade-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                    <div
                      className={`w-12 h-12 ${iconColors[index % iconColors.length]} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg`}
                    >
                      <GraduationCap className="text-white" size={20} />
                    </div>

                    {/* Card for each education entry */}
                    <div
                      className="flex-1 bg-card/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-border 
                      hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                      <h4 className="font-bold text-lg text-card-foreground mb-1">{item.degree}</h4>

                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={getFaviconUrl(item.url)}
                          alt={item.institution}
                          className="w-5 h-5 rounded"
                          onError={(e) => {
                            e.currentTarget.src = "/default-favicon.png";
                          }}
                        />
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:underline"
                        >
                          {item.institution}
                        </a>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">{item.duration}</p>

                      {/* Render each detail as a bullet list */}
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        {item.details.map((detail: string, i: number) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
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
                <div className="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
                  <Award className="text-success-foreground" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Professional Certifications</h3>
                <span className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                  {certifications.length} Certifications
                </span>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-card/70 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:scale-102 animate-fade-in-left"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <img src={cert.icon} alt={cert.institution} className="w-10 h-10 rounded-md transition-transform duration-300 hover:scale-110" />
                    <div className="flex-1">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-card-foreground text-sm hover:text-primary transition-colors duration-200 story-link"
                      >
                        {cert.name}
                      </a>
                      <p className="text-muted-foreground text-xs">{cert.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-muted-foreground text-xs font-medium">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* ---------- Continuous Learning Section ---------- */}
        <RevealAnimation animation="fade-in-up" delay={400}>
          <div className="mt-16 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-pulse">
                <Brain className="text-primary-foreground" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Continuous Learning</h3>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              I am committed to continuous learning and professional development, regularly updating
              my skills and knowledge through various educational platforms including Coursera, DataCamp,
              LinkedIn Learning, and attending online conferences.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {continuousLearningSkills.map((skill, index) => (
                <div key={index} className="relative group animate-zoom-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div
                    className="bg-card/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md border border-border 
                    transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-2 cursor-pointer hover:border-primary/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3 text-primary group-hover:rotate-12 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors duration-200">{skill.name}</p>
                  </div>

                  {/* Tooltip */}
                  <div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 p-3 bg-popover text-popover-foreground border border-border
                    rounded-lg text-sm opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                    transition-all duration-300 ease-out z-10 shadow-lg"
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

            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {highlightedAreas.map((area, index) => (
                <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <span className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 inline-block">
                    • {area.name}
                  </span>
                  <div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 p-3 bg-popover backdrop-blur-sm shadow-xl rounded-lg text-popover-foreground text-sm border border-border
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
