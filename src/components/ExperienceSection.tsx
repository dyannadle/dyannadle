import React from 'react';
import { motion } from 'framer-motion';
import RevealAnimation from './ui/RevealAnimation';
import StaggeredAnimation from './ui/StaggeredAnimation';
import { MapPin, Calendar, Building2, ExternalLink } from 'lucide-react';

import { EXPERIENCES } from '@/data/experienceData';

const ExperienceSection: React.FC = () => {
  const experiences = EXPERIENCES;

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
          <p className="section-subtitle mx-auto text-muted-foreground">
            My professional journey in software testing and quality assurance
          </p>
        </RevealAnimation>

        <div className="mt-12 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <RevealAnimation key={index} animation="fade-in-up" delay={200}>
              <motion.div
                className="glass bg-gradient-to-br from-white/95 to-emerald-50/80 
                p-8 rounded-2xl shadow-lg border border-emerald-100/50 
                backdrop-blur-sm"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
                  <StaggeredAnimation 
                    staggerDelay={100} 
                    direction="right" 
                    duration={500} 
                    distance={30}
                    className="space-y-2"
                  >
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start bg-emerald-50 p-3 rounded-lg">
                        <span className="text-emerald-600 mr-3 mt-1 text-lg">✓</span>
                        <span className="text-muted-foreground font-medium">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </StaggeredAnimation>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-emerald-700">
                    Key Responsibilities:
                  </h4>
                  <StaggeredAnimation 
                    staggerDelay={80} 
                    direction="left" 
                    duration={400} 
                    distance={25}
                    className="space-y-2"
                  >
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start list-none">
                        <span className="text-emerald-600 mr-3 mt-1">•</span>
                        <span className="text-muted-foreground">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </StaggeredAnimation>
                </div>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
