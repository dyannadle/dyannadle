import React from 'react';
import RevealAnimation from './ui/RevealAnimation';
import SkillsList from './skills/SkillsList';
import SkillCategories from './skills/SkillCategories';
import ApproachSection from './skills/ApproachSection';
import { 
  technicalSkills, 
  otherSkills, 
  skillCategories
} from '@/data/skillsData';

const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      {/* Animated background elements */}
      <div className="absolute top-10 left-1/4 w-24 h-24 bg-indigo-300/30 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-purple-300/30 rounded-full blur-2xl animate-float animation-delay-300"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-blue-300/30 rounded-full blur-xl animate-float animation-delay-600"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl animate-float animation-delay-900"></div>

      <div className="section-container relative z-10">
        <RevealAnimation animation="zoom-in">
          <h2 className="section-title text-center bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="section-subtitle text-center mx-auto text-gray-700">
            Technical skills and competencies I've developed throughout my career
          </p>
        </RevealAnimation>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <RevealAnimation animation="fade-in-right" delay={100}>
            <div className="space-y-8">
              <SkillsList title="Technical Skills" skills={technicalSkills} />
              <SkillsList 
                title="Additional Skills" 
                skills={otherSkills} 
                delay={300}
                className="mt-8"
              />
            </div>
          </RevealAnimation>

          <RevealAnimation animation="fade-in-left" delay={200}>
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skill Categories</h3>
              <SkillCategories categories={skillCategories} />
              <ApproachSection />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
