
import React from 'react';
import RevealAnimation from '@/components/ui/RevealAnimation';
import { UI_TEXT } from '@/data/uiConstants';

const ApproachSection: React.FC = () => {
  return (
    <RevealAnimation animation="fade-in-up" delay={400}>
      <div className="mt-6 glass p-8 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
        <h4 className="text-xl font-semibold mb-4 text-white">{UI_TEXT.skills.approach.title}</h4>
        <p className="text-gray-300 mb-4 leading-relaxed font-light text-lg">
          {UI_TEXT.skills.approach.p1}
        </p>
        <p className="text-gray-300 mb-4 leading-relaxed font-light text-lg">
          {UI_TEXT.skills.approach.p2}
        </p>
        <p className="text-gray-300 leading-relaxed font-light text-lg">
          {UI_TEXT.skills.approach.p3}<span className="font-medium text-blue-300">{UI_TEXT.skills.approach.p3_highlight}</span>.
        </p>
      </div>
    </RevealAnimation>
  );
};

export default ApproachSection;
