
import React from 'react';
import RevealAnimation from './ui/RevealAnimation';
import EducationTimeline from './education/EducationTimeline';
import CertificationsSection from './education/CertificationsSection';
import ProfessionalGrowth from './education/ProfessionalGrowth';
import { educationData } from '@/data/educationData';
const EducationSection: React.FC = () => {

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-purple-100/50 to-blue-100/50">
      <div className="section-container">
        <RevealAnimation>
          <h2 className="section-title text-center">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle text-center mx-auto">My academic journey and professional certifications</p>
        </RevealAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Education Timeline */}
          <EducationTimeline educationData={educationData} />

          {/* Certifications */}
          <div>
            <CertificationsSection />
            <ProfessionalGrowth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
