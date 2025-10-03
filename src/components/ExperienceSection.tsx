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
      description:
        "Conducted comprehensive testing of mobile applications to ensure quality, functionality, and user experience across different devices and platforms.",
      responsibilities: [
        "Assisted in testing Android and iOS mobile applications to ensure functionality, usability, and performance.",
        "Designed and executed manual test cases, documented results, and reported defects using tools such as Excel and Google Sheets.",
        "Conducted regression, functional, and UI testing to identify and resolve issues before production release.",
        "Collaborated with developers and QA team members in an Agile environment to improve product quality.",
        "Prepared detailed bug reports and provided feedback for enhancing user experience.",
        "Gained hands-on experience in mobile app testing methodologies, test documentation, and defect tracking.",
      ],
      achievements: [
        "Identified and reported 50+ critical bugs, improving app stability by 30%",
        "Reduced regression testing time by 25% through optimized test case design",
        "Achieved 95% test coverage across all mobile app features",
        "Successfully collaborated with cross-functional teams to deliver 3 app releases on time",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-emerald-300/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-teal-300/30 rounded-full blur-2xl animate-float animation-delay-300"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-green-300/20 rounded-full blur-xl animate-float animation-delay-600"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-lime-300/20 rounded-full blur-xl animate-float animation-delay-900"></div>
      
      <div className="section-container w-full text-center relative z-10">
        <RevealAnimation animation="zoom-in">
          <h2 className="section-title bg-gradient-to-r from-emerald-700 via-teal-600 to-green-600 bg-clip-text text-transparent">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="section-subtitle mx-auto text-gray-700">
            My professional journey in software testing and quality assurance
          </p>
        </RevealAnimation>

        <div className="mt-12 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <RevealAnimation key={index} animation="fade-in-up" delay={200}>
              <div
                className="glass bg-gradient-to-br from-white/95 to-emerald-50/80 
                p-8 rounded-2xl shadow-lg border border-emerald-100/50 
                hover:shadow-2xl transition-all duration-500 hover:translate-y-[-8px] hover:scale-[1.02] backdrop-blur-sm"
              >
                {/* Header row */}
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

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-emerald-700 flex items-center gap-2">
                    <span className="text-2xl">🏆</span> Key Achievements:
                  </h4>
                  <ul className="space-y-2 text-left">
                    {experience.achievements.map((achievement, i) => (
                      <RevealAnimation
                        key={i}
                        animation="fade-in-right"
                        delay={200 + i * 100}
                      >
                        <li className="flex items-start bg-emerald-50 p-3 rounded-lg">
                          <span className="text-emerald-600 mr-3 mt-1 text-lg">✓</span>
                          <span className="text-muted-foreground font-medium">
                            {achievement}
                          </span>
                        </li>
                      </RevealAnimation>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-emerald-700">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-left">
                    {experience.responsibilities.map((responsibility, i) => (
                      <RevealAnimation
                        key={i}
                        animation="fade-in-right"
                        delay={300 + i * 100}
                      >
                        <li className="flex items-start">
                          <span className="text-emerald-600 mr-3 mt-1">•</span>
                          <span className="text-muted-foreground">
                            {responsibility}
                          </span>
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
