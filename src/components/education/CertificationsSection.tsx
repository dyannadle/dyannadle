
import React from 'react';
import RevealAnimation from '../ui/RevealAnimation';
import DocumentLink from '../ui/DocumentLink';

// Hardcoded certificates with working URLs
const certifications = [
  {
    id: '1',
    name: 'Certified Software Tester',
    url: '/Certificates/Certified Software Tester.pdf'
  },
  {
    id: '2',
    name: 'GenAI Powered Data Analytics',
    url: 'https://coursera.org/share/genai-data-analytics',
    logo: '/logos/coursera logo.svg'
  },
  {
    id: '3',
    name: 'What is Generative AI?',
    url: 'https://www.linkedin.com/learning/certificates/what-is-generative-ai'
  },
  {
    id: '4',
    name: 'Google Associate Cloud Engineer Certified',
    url: 'https://drive.google.com/file/d/1264HBYFwJn2hielmLeqIQ6mwuw1xiF82/view?usp=sharing'
  },
  {
    id: '5',
    name: 'AWS Academy Introduction to Cloud Semester 1',
    url: 'https://drive.google.com/file/d/1V4kZTfRGMuiNX8EgfCH5OIve33ARMFpc/view?usp=sharing'
  },
  {
    id: '6',
    name: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
    url: 'https://www.linkedin.com/learning/certificates/career-essentials-generative-ai'
  },
  {
    id: '7',
    name: 'Android App Development (Internshala)',
    url: 'https://drive.google.com/file/d/1mn_Kofwt28w-9pJJ4YAbRgsVmF9EtEQu/view?usp=sharing'
  },
  {
    id: '8',
    name: 'Data Manipulation with pandas',
    url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/cd59e8a9f5ab385b6365d171197638cbbfc3779d'
  },
  {
    id: '9',
    name: 'Value Added Course By SAP & Edunet Foundation',
    url: 'https://drive.google.com/file/d/1W3XMOJbD5yXVgNkZOgfIiXsosat9RL6L/view?usp=sharing',
    logo: '/logos/DC.png'
  },
  {
    id: '10',
    name: 'Maharashtra State Certificate in Information Technology',
    url: 'https://drive.google.com/file/d/1OkTsdMm37YPMsQo6PpGr-vO1mr84Q2ue/view?usp=sharing'
  },
  {
    id: '11',
    name: 'Joining Data in SQL',
    url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/db32e486e40d449b2c91cb5586520d496f27d86d'
  },
  {
    id: '12',
    name: 'Google AI Essentials',
    url: 'https://coursera.org/share/be83f8383585447f5608a601680f8f05',
    logo: '/logos/coursera logo.svg'
  }
];

const CertificationsSection: React.FC = () => {
  return (
    <RevealAnimation animation="fade-in-left" delay={100}>
      <div>
        <RevealAnimation animation="fade-in-down" delay={200}>
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h3>
        </RevealAnimation>
        
        <div className="glass bg-gradient-to-br from-white/95 to-blue-50/80 p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <DocumentLink
                key={cert.id}
                name={cert.name}
                url={cert.url}
                delay={300 + (index * 50)}
                logo={cert.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default CertificationsSection;
