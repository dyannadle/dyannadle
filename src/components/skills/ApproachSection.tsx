
import React from 'react';
import RevealAnimation from '@/components/ui/RevealAnimation';

const ApproachSection: React.FC = () => {
  return (
    <RevealAnimation animation="fade-in-up" delay={400}>
      <div className="mt-6 glass p-6 rounded-xl shadow-sm">
        <h4 className="text-xl font-semibold mb-3">My Approach</h4>
        <p className="text-muted-foreground mb-4">
          I bring a methodical and detail-oriented approach to software testing, ensuring comprehensive test coverage and quality assurance. My goal is to identify and resolve issues early in the development lifecycle, minimizing risks and enhancing the overall user experience. I follow a structured testing process, including test planning, execution, defect reporting, and regression testing, to ensure that software meets the highest quality standards.
        </p>
        <p className="text-muted-foreground mb-4">
          I am dedicated to continuous learning and stay updated with industry best practices, emerging testing methodologies, and automation tools. I actively explore new frameworks, bug-tracking systems, and AI-driven testing approaches to enhance my efficiency and effectiveness in software testing.
        </p>
        <p className="text-muted-foreground">
          Beyond my professional interests, I have a strong passion for investing in mutual funds and the stock market. I am eagerly learning about market trends, technical analysis, and investment strategies to make informed financial decisions. My analytical mindset and attention to detail, which I apply in software testing, also help me in evaluating <span className="font-medium">market risks, portfolio diversification, and long-term investment opportunities</span>.
        </p>
      </div>
    </RevealAnimation>
  );
};

export default ApproachSection;
