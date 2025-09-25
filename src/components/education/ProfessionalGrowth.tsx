
import React from 'react';
import RevealAnimation from '../ui/RevealAnimation';
import { Sparkles, GraduationCap, BookOpen, Trophy } from 'lucide-react';

const ProfessionalGrowth: React.FC = () => {
  return (
    <RevealAnimation animation="fade-in-up" delay={200}>
      <div className="glass bg-gradient-to-br from-white/95 to-blue-50/95 p-6 rounded-xl shadow-md mt-6 border border-blue-100/70 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
        <div className="flex items-center mb-4">
          <GraduationCap className="text-blue-600 mr-3" size={24} />
          <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Professional Growth</h4>
        </div>
        <div className="text-muted-foreground space-y-4">
          <div className="flex items-start">
            <BookOpen className="text-blue-500/70 mt-1 mr-3 flex-shrink-0" size={18} />
            <p>
              I am committed to continuous learning and professional development, ensuring I stay updated with the latest advancements in software testing. I actively explore new testing methodologies, automation frameworks, and cloud-based solutions to enhance software quality and efficiency.
            </p>
          </div>
          <div className="flex items-start">
            <Trophy className="text-purple-500/70 mt-1 mr-3 flex-shrink-0" size={18} />
            <p>
              By engaging in hands-on projects, certifications, and industry research, I strive to deepen my expertise in manual and automation testing, performance testing, and cloud infrastructure management. My goal is to leverage cutting-edge tools and best practices to deliver high-quality, reliable, and scalable software solutions.
            </p>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default ProfessionalGrowth;
