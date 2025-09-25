import React from 'react';
import RevealAnimation from './ui/RevealAnimation';
import { MapPin, Calendar, Building2, ExternalLink } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Mobile Application Tester",
      company: "Pivot DevOps",
      companyUrl: "https://www.linkedin.com/company/pivot-devops/posts/?feedView=all",
      duration: "1 month",
      location: "Remote",
      description: "Conducted comprehensive testing of mobile applications to ensure quality, functionality, and user experience across different devices and platforms.",
      responsibilities: [
        "Assisted in testing Android and iOS mobile applications to ensure functionality, usability, and performance.",
        "Designed and executed manual test cases, documented results, and reported defects using tools such as Excel And Google sheet.",
        "Conducted regression, functional, and UI testing to identify and resolve issues before production release.",
        "Collaborated with developers and QA team members in an Agile environment to improve product quality.",
        "Prepared detailed bug reports and provided feedback for enhancing user experience.",
        "Gained hands-on experience in mobile app testing methodologies, test documentation, and defect tracking."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-emerald-50/40 to-teal-50/30">
      <div className="section-container">
        <RevealAnimation>
          <h2 className="section-title text-center">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle text-center mx-auto">
            My professional journey in software testing and quality assurance
          </p>
        </RevealAnimation>

        <div className="mt-12 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <RevealAnimation key={index} animation="fade-in-up" delay={200}>
              <div className="glass bg-gradient-to-br from-white/95 to-emerald-50/80 p-8 rounded-2xl shadow-md border border-emerald-100/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-3px]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                      {experience.title}
                    </h3>
                    <div className="flex items-center mb-2">
                      <Building2 className="w-5 h-5 text-emerald-600 mr-2" />
                      <a 
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors duration-200"
                      >
                        {experience.company}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-muted-foreground mt-2 md:mt-0">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">{experience.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-emerald-700">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, i) => (
                      <RevealAnimation key={i} animation="fade-in-right" delay={300 + i * 100}>
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-3 mt-1">•</span>
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      </RevealAnimation>
                    ))}
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

export default ExperienceSection;