
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
    <section id="skills" className="py-20 bg-gradient-to-b from-indigo-50/40 to-purple-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-1/4 w-24 h-24 bg-indigo-200/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-purple-200/20 rounded-full blur-2xl animate-float animation-delay-300"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-blue-200/20 rounded-full blur-xl animate-float animation-delay-600"></div>
      <div className="section-container">
        <RevealAnimation>
          <h2 className="section-title text-center">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle text-center mx-auto">
            Technical skills and competencies I've developed throughout my career
          </p>
        </RevealAnimation>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <RevealAnimation animation="fade-in-right" delay={100}>
            <div>
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
            <h3 className="text-2xl font-bold mb-6">Skill Categories</h3>
            <SkillCategories categories={skillCategories} />
            <ApproachSection />
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
