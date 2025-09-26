
import React from 'react';
import RevealAnimation from './ui/RevealAnimation';
import { educationData } from '@/data/educationData';
import { GraduationCap, Award, BookOpen, Brain, Code, Database, Globe } from 'lucide-react';

const EducationSection: React.FC = () => {
  const iconColors = [
    'bg-purple-500',
    'bg-emerald-500', 
    'bg-blue-500',
    'bg-orange-500'
  ];

  const certifications = [
    { name: 'Certified Software Tester', institution: 'Quastech', year: '2024', icon: '🏆' },
    { name: 'Google Associate Cloud Engineer', institution: 'Google Cloud', year: '2024', icon: '☁️' },
    { name: 'AWS Academy Introduction to Cloud', institution: 'Amazon', year: '2024', icon: '🚀' },
    { name: 'Career Essentials in Generative AI', institution: 'Microsoft & LinkedIn', year: '2024', icon: '🤖' },
    { name: 'Android App Development', institution: 'Internshala', year: '2023', icon: '📱' },
    { name: 'Data Manipulation with pandas', institution: 'DataCamp', year: '2023', icon: '🐼' },
    { name: 'Value Added Course By SAP', institution: 'SAP & Edunet', year: '2023', icon: '💼' },
    { name: 'Maharashtra State Certificate in IT', institution: 'Government', year: '2023', icon: '🎓' },
    { name: 'Joining Data in SQL', institution: 'DataCamp', year: '2023', icon: '🗄️' },
    { name: 'Google AI Essentials', institution: 'Google', year: '2024', icon: '🧠' },
    { name: 'What is Generative AI?', institution: 'LinkedIn Learning', year: '2024', icon: '✨' },
    { name: 'GenAI Powered Data Analytics', institution: 'Coursera', year: '2024', icon: '📊' }
  ];

  const continuousLearningSkills = [
    { name: 'Testing Framework', icon: <BookOpen size={20} /> },
    { name: 'Quality Assurance', icon: <Award size={20} /> },
    { name: 'Cloud Technologies', icon: <Globe size={20} /> },
    { name: 'Development Process', icon: <Code size={20} /> },
    { name: 'Data Science', icon: <Database size={20} /> },
    { name: 'Certification', icon: <GraduationCap size={20} /> },
    { name: 'Artificial Intelligence', icon: <Brain size={20} /> },
    { name: 'Academic Growth', icon: <BookOpen size={20} /> }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="section-container">
        {/* Header */}
        <RevealAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Academic Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My educational background and professional certifications that have built the foundation of 
              my expertise in software testing and quality assurance.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <RevealAnimation animation="fade-in-right">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>

              <div className="space-y-6">
                {educationData.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${iconColors[index % iconColors.length]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <GraduationCap className="text-white" size={20} />
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <h4 className="font-bold text-lg text-gray-800 mb-1">{item.degree}</h4>
                      <p className="font-medium text-gray-600 mb-2">{item.institution}</p>
                      <p className="text-sm text-gray-500 mb-3">{item.duration}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>

          {/* Professional Certifications Section */}
          <RevealAnimation animation="fade-in-left" delay={200}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Professional Certifications</h3>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  12 Certifications
                </span>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center text-lg">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm">{cert.name}</h4>
                      <p className="text-gray-500 text-xs">{cert.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-400 text-xs">{cert.year}</span>
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Continuous Learning Section */}
        <RevealAnimation animation="fade-in-up" delay={400}>
          <div className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Brain className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Continuous Learning</h3>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              I am committed to continuous learning and professional development, regularly updating 
              my skills and knowledge through various educational platforms including coursera, datacamp, 
              linkedin learning and attending online conferences.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {continuousLearningSkills.map((skill, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm border border-emerald-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3 text-emerald-600">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                </div>
              ))}
            </div>

            {/* Key Learning Areas */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {[
                'Advanced Testing Frameworks',
                'AI in Software Testing',
                'Cloud Testing Strategies', 
                'Performance Engineering',
                'API Security Testing'
              ].map((area, index) => (
                <span key={index} className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  • {area}
                </span>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default EducationSection;
