import React from 'react';
import RevealAnimation from './ui/RevealAnimation';
import InteractiveBackground from './ui/InteractiveBackground';
import SkillsCloud from './skills/SkillsCloud';
import StaggeredAnimation from './ui/StaggeredAnimation';
import SkillsList from './skills/SkillsList';
import SkillCategories from './skills/SkillCategories';
import ApproachSection from './skills/ApproachSection';
import {
  technicalSkills,
  otherSkills,
  skillCategories
} from '@/data/skillsData';
import { UI_TEXT } from '@/data/uiConstants';

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center font-sans z-10"
    >
      {/* Interactive Background removed to show stars */}

      {/* Animated background elements */}
      <div className="absolute top-10 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float animate-morph-blob"></div>
      <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-secondary/20 rounded-full blur-2xl animate-float animation-delay-300 animate-glow-pulse"></div>

      <div className="section-container relative z-10">
        <RevealAnimation animation="zoom-in">
          <h2 className="section-title text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{UI_TEXT.skills.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="section-subtitle text-center mx-auto text-gray-400">
            {UI_TEXT.skills.subtitle}
          </p>
        </RevealAnimation>

        {/* New Interactive Cloud */}
        <div className="mt-8 mb-16">
          <RevealAnimation animation="fade-in-up" delay={100}>
            <SkillsCloud skills={[...technicalSkills, ...otherSkills]} />
          </RevealAnimation>
        </div>

        {/* Previous Detailed Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <RevealAnimation animation="fade-in-right" delay={100}>
            <div className="space-y-8">
              <StaggeredAnimation staggerDelay={150} animationClass="animate-fade-in-up">
                <SkillsList title={UI_TEXT.skills.sections.technical} skills={technicalSkills.filter(s => !s.excludeFromList)} />
                <SkillsList
                  title={UI_TEXT.skills.sections.additional}
                  skills={otherSkills}
                  delay={300}
                  className="mt-8"
                />
              </StaggeredAnimation>
            </div>
          </RevealAnimation>

          <RevealAnimation animation="fade-in-left" delay={200}>
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{UI_TEXT.skills.categories.title}</h3>
              <StaggeredAnimation staggerDelay={100} animationClass="animate-fade-in-left">
                <SkillCategories categories={skillCategories} />
                <ApproachSection />
              </StaggeredAnimation>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
