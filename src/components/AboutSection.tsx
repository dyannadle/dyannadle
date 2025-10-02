
import React from 'react';
import RevealAnimation from './ui/RevealAnimation';
import { Briefcase, FileCheck, Database, Code } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200/30 rounded-full blur-xl animate-float animation-delay-500"></div>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealAnimation animation="fade-in-right">
            <div className="glass bg-gradient-to-br from-white/95 to-blue-50/80 p-8 rounded-2xl shadow-md border border-blue-100/50">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6 rounded-full"></div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a dedicated software tester with a focus on ensuring quality through comprehensive testing methodologies.
                </p>
                <p>
                  With experience in manual testing, requirement analysis, test planning, and defect reporting, I bring a meticulous approach to software quality assurance.
                </p>
                <p>
                  My skills include creating test plans, writing detailed test scenarios, developing test cases to ensure comprehensive testing, and reporting test case results for tracking and analysis.
                </p>
                <p>
                  I'm passionate about improving software quality and ensuring that products meet the highest standards before reaching users.
                </p>
              </div>
            </div>
          </RevealAnimation>
          
          <RevealAnimation animation="fade-in-left">
              <div className="space-y-6">
                <RevealAnimation animation="fade-in-up" delay={100}>
                  <div className="glass bg-gradient-to-r from-white/95 to-blue-50/80 p-6 rounded-2xl card-hover border border-blue-100/50 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-3px] hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                    <Briefcase className="text-blue-600" size={20} />
                  </div>
                  <a href="#experience" className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer">
                    Experience
                  </a>
                </div>
                <p className="text-muted-foreground">
                  Professional experience as a Mobile Application Tester at Pivot DevOps, specializing in manual testing, test case design, and defect reporting for mobile applications. Skilled in creating comprehensive test documentation, executing regression and functional testing, and ensuring software quality through meticulous testing methodologies in an Agile environment.
                </p>
                  </div>
                </RevealAnimation>
                
                <RevealAnimation animation="fade-in-up" delay={200}>
                  <div className="glass bg-gradient-to-r from-white/95 to-blue-50/80 p-6 rounded-2xl card-hover border border-blue-100/50 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-3px] hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-3">
                    <FileCheck className="text-purple-600" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Documentation</h3>
                </div>
                <p className="text-muted-foreground">
                  Experienced in creating and maintaining comprehensive documentation including Test Plans, Test Scenarios, and Test Cases.
                </p>
                  </div>
                </RevealAnimation>
                
                <RevealAnimation animation="fade-in-up" delay={300}>
                  <div className="glass bg-gradient-to-r from-white/95 to-blue-50/80 p-6 rounded-2xl card-hover border border-blue-100/50 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-3px] hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-3">
                    <Code className="text-indigo-600" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Testing Skills</h3>
                </div>
                <p className="text-muted-foreground">
                  Proficient in manual testing, including test case design, execution, defect tracking, and regression testing to ensure software reliability. Skilled in Unit Testing, verifying individual components function correctly. 
                  Experienced in functional and integration testing, with expertise in bug tracking tools like JIRA.
                </p>
                <p className="text-muted-foreground mt-2">
                  I have foundational knowledge in automation testing and am currently mastering Selenium, PyTest, and other advanced frameworks to enhance testing efficiency, scalability, and test coverage in modern software development.
                </p>
                  </div>
                </RevealAnimation>
              </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
