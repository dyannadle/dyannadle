// src/components/HoverCards.tsx
import React from "react";
import "./HoverCards.css"; // keep the styles here

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

      <div className="card">
        <div className="icon">🔧</div>
        <div className="title">DevOps Tools</div>
        <div className="tooltip">
          Understand CI/CD with Jenkins, GitHub Actions, and GitLab CI. 
          Covers infrastructure as code, monitoring, and containerization.
        </div>
      </div>

      <div className="card">
        <div className="icon">🛠️</div>
        <div className="title">Build Tools</div>
        <div className="tooltip">
          Learn about Maven, Gradle, and npm. 
          Focuses on dependency management, build automation, and project configuration.
        </div>
      </div>

      <div className="card">
        <div className="icon">🔒</div>
        <div className="title">Security Testing</div>
        <div className="tooltip">
          Covers OWASP Top 10, penetration testing, and vulnerability scanning. 
          Learn to secure applications and data against threats.
        </div>
      </div>

      <div className="card">
        <div className="icon">⚙️</div>
        <div className="title">API Testing</div>
        <div className="tooltip">
          Focus on REST and SOAP APIs using Postman and REST Assured. 
          Learn about API validation, performance testing, and security.
        </div>
      </div>

      <div className="card">
        <div className="icon">📊</div>
        <div className="title">Performance Testing</div>
        <div className="tooltip">
          Explore JMeter and Gatling for load, stress, and endurance testing. 
          Learn to analyze performance metrics and optimize applications.
        </div>
      </div>

      <div className="card">
        <div className="icon">🧩</div>
        <div className="title">Test Management</div>
        <div className="tooltip">
          Learn to use JIRA, TestRail, and Zephyr for test case management, 
          defect tracking, and reporting.
        </div>
      </div>

      <div className="card">
        <div className="icon">🤖</div>
        <div className="title">AI in Testing</div>
        <div className="tooltip">
          Discover AI-powered testing tools like Testim and Applitools. 
          Learn about test generation, maintenance, and visual testing.
        </div>
      </div>
    </div>
  );
};

export default HoverCards;
