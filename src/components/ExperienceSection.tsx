import React from 'react';
import { motion } from 'framer-motion';
import RevealAnimation from './ui/RevealAnimation';
import { MapPin, Calendar, Building2, ExternalLink } from 'lucide-react';

import { EXPERIENCES } from '@/data/experienceData';
import { UI_TEXT } from '@/data/uiConstants';

const ExperienceSection: React.FC = () => {
  const experiences = EXPERIENCES;

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center overflow-hidden z-10"
    >
      {/* Animated background elements */}
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-secondary/10 rounded-full blur-2xl animate-float animation-delay-300"></div>

      <div className="section-container w-full text-center relative z-10">
        <RevealAnimation animation="zoom-in">
          <h2 className="section-title bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">{UI_TEXT.experience.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="section-subtitle mx-auto text-gray-400">
            {UI_TEXT.experience.subtitle}
          </p>
        </RevealAnimation>

        <div className="mt-12 max-w-4xl mx-auto flex flex-col gap-10">
          {experiences.map((experience, index) => (
            <RevealAnimation key={index} animation="fade-in-up" delay={200}>
              <motion.div
                className="glass-dark p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-md hover:border-primary/50 text-left"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {experience.title}
                    </h3>
                    <div className="flex items-center mb-2">
                      <Building2 className="w-5 h-5 text-primary mr-2" />
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-primary/90 hover:text-primary flex items-center gap-1 transition-colors duration-200"
                      >
                        {experience.company}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end text-gray-400 mt-2 md:mt-0">
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
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-secondary flex items-center gap-2">
                    <span className="text-2xl">🏆</span> {UI_TEXT.experience.achievements}
                  </h4>
                  <ul className="space-y-2 text-left">
                    {experience.achievements.map((achievement, i) => (
                      <RevealAnimation
                        key={i}
                        animation="fade-in-right"
                        delay={200 + i * 100}
                      >
                        <li className="flex items-start bg-white/5 p-4 rounded-xl border border-white/5 hover:border-primary/20 transition-colors">
                          <span className="text-blue-400 mr-3 mt-1 text-lg">✓</span>
                          <span className="text-gray-300 font-medium leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      </RevealAnimation>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-secondary">
                    {UI_TEXT.experience.responsibilities}
                  </h4>
                  <ul className="space-y-2 text-left">
                    {experience.responsibilities.map((responsibility, i) => (
                      <RevealAnimation
                        key={i}
                        animation="fade-in-right"
                        delay={300 + i * 100}
                      >
                        <li className="flex items-start">
                          <span className="text-primary mr-3 mt-1">•</span>
                          <span className="text-gray-400">
                            {responsibility}
                          </span>
                        </li>
                      </RevealAnimation>
                    ))}
                  </ul>
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
