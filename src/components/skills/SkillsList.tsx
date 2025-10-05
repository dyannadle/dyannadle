import React from 'react';
import RevealAnimation from '@/components/ui/RevealAnimation';
import SkillItem from './SkillItem';
import { SkillItemType } from '@/data/skillsData';

interface SkillsListProps {
  title: string;
  skills: SkillItemType[];
  delay?: number;
  className?: string;
}

const SkillsList: React.FC<SkillsListProps> = ({ title, skills, delay = 0, className = "" }) => {
  return (
    <RevealAnimation animation="fade-in-up" delay={delay}>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className={`glass p-8 rounded-xl shadow-sm ${className}`}>
        {skills.map((skill, index) => (
          <SkillItem 
            key={index} 
            name={skill.name} 
            level={skill.level} 
            index={index} 
            description={skill.description}
            version={skill.version}
          />
        ))}
      </div>
    </RevealAnimation>
  );
};

export default SkillsList;
