// src/components/HoverCards.tsx
import React from "react";
import "./HoverCards.css";  // keep the styles here

const HoverCards: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="icon">📖</div>
        <div className="title">Testing Framework</div>
        <div className="tooltip">
          Learn about JUnit, TestNG, Selenium, Cypress, and Playwright. 
          Covers unit testing, integration testing, automation, and reporting.
        </div>
      </div>

      <div className="card">
        <div className="icon">🎯</div>
        <div className="title">Quality Assurance</div>
        <div className="tooltip">
          Explore QA processes: test planning, execution, bug tracking, and release readiness. 
          Includes manual, exploratory, and automated testing practices.
        </div>
      </div>

      <div className="card">
        <div className="icon">🌐</div>
        <div className="title">Cloud Technologies</div>
        <div className="tooltip">
          Dive into AWS, Azure, and GCP. 
          Learn about cloud storage, compute services, Docker, Kubernetes, and serverless apps.
        </div>
      </div>

      {/* Add the rest of your cards like above */}
    </div>
  );
};

export default HoverCards;
