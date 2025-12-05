// Data for skills section

export interface SkillItemType {
  name: string;
  level: number;
  description?: string;
  version?: string;
  excludeFromCloud?: boolean;
  excludeFromList?: boolean;
}

export const technicalSkills: SkillItemType[] = [
  {
    name: "SQL",
    level: 85,
    description:
      "A language used to store, retrieve, and manipulate data in relational databases.",
  },
  {
    name: "Manual Testing",
    level: 90,
    description:
      "A process where testers manually execute test cases to identify bugs in software.",
  },
  {
    name: "JIRA",
    level: 80,
    description:
      "A popular tool for tracking bugs, managing projects, and handling agile workflows.",
    version: "v9.x",
  },
  {
    name: "Basic JAVA",
    level: 70,
    description:
      "A widely used programming language known for its object-oriented principles and platform independence.",
  },
  {
    name: "CI/CD",
    level: 75,
    description:
      "Continuous Integration and Continuous Delivery testing practices.",
    excludeFromList: true,
  },
  {
    name: "Jenkins",
    level: 70,
    description:
      "An open source automation server which enables developers around the world to reliably build, test, and deploy their software.",
    excludeFromList: true,
  },
  {
    name: "Rest API",
    level: 80,
    description:
      "Designing and testing Representational State Transfer (REST) Application Programming Interfaces.",
    excludeFromList: true,
  },
  {
    name: "Test Automation",
    level: 75,
    description:
      "Using software tools to execute pre-scripted tests on a software application before it is released into production.",
  },
  {
    name: "Test case writing",
    level: 95,
    description:
      "Creating detailed, clear and effective test cases covering all aspects of software functionality.",
    excludeFromCloud: true,
  },
  {
    name: "Test plan creation",
    level: 85,
    description:
      "Developing comprehensive test plans that outline testing scope, approach, resources and schedule.",
    excludeFromCloud: true,
  },
  {
    name: "Test scenarios creation",
    level: 90,
    description:
      "Developing comprehensive test scenarios that cover all aspects of software functionality.",
    excludeFromCloud: true,
  },
  {
    name: "Bugzilla",
    level: 75,
    description:
      "An open-source bug tracking system used to report, manage, and fix defects.",
  },
  {
    name: "Selenium",
    level: 70,
    description:
      "A powerful automation testing tool for web applications across different browsers.",
    version: "v4.x",
  },
  {
    name: "Maven",
    level: 65,
    description:
      "A build automation and project management tool for Java-based applications.",
    version: "v3.9.x",
  },
  {
    name: "Postman",
    level: 80,
    description:
      "A tool used for API development and testing, enabling sending requests and validating responses.",
    version: "v11.x",
  },
  {
    name: "API Testing",
    level: 85,
    description:
      "Testing the functionality, reliability, and security of APIs using tools like Postman or REST Assured.",
  },
  {
    name: "Cypress",
    level: 70,
    description:
      "A next-generation front end testing tool built for the modern web.",
    version: "v13.x",
  },
  {
    name: "AI in Testing",
    level: 60,
    description:
      "Applying AI and machine learning techniques to enhance test case generation, defect prediction, and test coverage analysis.",
  },
  {
    name: "Basic Python",
    level: 65,
    description:
      "A versatile and easy-to-learn language, often used in automation and AI testing scenarios.",
  },
  {
    name: "ML Basics",
    level: 55,
    description:
      "Understanding machine learning fundamentals such as models, training, and evaluation.",
  },
];

export const otherSkills: SkillItemType[] = [
  {
    name: "MySQL",
    level: 80,
    description:
      "A widely used open-source relational database management system known for its speed and reliability.",
    version: "v8.x",
  },
  {
    name: "Linux",
    level: 75,
    description:
      "An open-source operating system known for its stability, security, and flexibility.",
  },
  {
    name: "Windows",
    level: 90,
    description:
      "A user-friendly operating system developed by Microsoft, widely used in personal and enterprise environments.",
  },
  {
    name: "Microsoft Office",
    level: 85,
    description:
      "A suite of productivity applications, including Word, Excel, and PowerPoint, used for document creation, data analysis, and presentations.",
  },

  {
    name: "Verification & Validation",
    level: 85,
    description:
      "Ensuring software meets specifications and fulfills its intended purpose.",
  },
  {
    name: "No SQL",
    level: 60,
    description:
      "A non-relational database system designed for handling large-scale, unstructured, or semi-structured data efficiently.",
  },
  {
    name: "Version Control (Git)",
    level: 80,
    description:
      "Managing code versions and collaboration using tools like Git and GitHub.",
  },
  {
    name: "Agile Methodologies",
    level: 85,
    description:
      "Working within iterative development frameworks like Scrum or Kanban to ensure continuous delivery.",
  },
];

export const manualTestingSkills = [
  "Test Case Design & Execution",
  "Test Plan and Scenario Creation",
  "Defect Tracking & Reporting",
  "Functional & Regression Testing",
  "Integration & System Testing",
  "User Experience (UX) Testing",
];

export const automationTestingSkills = [
  "Selenium & WebDriver",
  "PyTest & Unit Testing",
  "TestNG & JUnit",
  "CI/CD Integration",
  "Postman & API Testing",
  "Cypress for Front-end Testing",
  "AI-based Test Automation",
  "REST Assured (API automation)",
];

export const skillTooltips: Record<string, string> = {
  "Test Case Design & Execution": "Creating and running structured test cases.",
  "Test Plan and Scenario Creation":
    "Developing comprehensive test documentation.",
  "Defect Tracking & Reporting":
    "Identifying and logging bugs using tools like JIRA.",
  "Functional & Regression Testing":
    "Ensuring software functionality remains intact after changes.",
  "Integration & System Testing":
    "Verifying seamless interaction between components.",
  "User Experience (UX) Testing":
    "Evaluating software from an end-user perspective.",
  "Selenium & WebDriver": "Automating browser-based testing.",
  "PyTest & Unit Testing": "Writing and executing automated test scripts.",
  "TestNG & JUnit": "Frameworks for structured test execution.",
  "CI/CD Integration": "Implementing tests in DevOps pipelines.",
  "Postman & API Testing":
    "Testing RESTful APIs for correctness and performance using Postman.",
  "Cypress for Front-end Testing":
    "Modern automation tool for fast and reliable UI testing.",
  "AI-based Test Automation":
    "Using machine learning and AI to optimize and generate tests.",
  "REST Assured (API automation)":
    "Java library used for automating REST API tests.",
};

export interface SkillSubsection {
  subTitle: string;
  skills: string[];
  descriptions: string[];
}

export interface SkillCategory {
  title: string;
  items: SkillSubsection[];
  descriptions?: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Software Testing",
    items: [
      {
        subTitle: "Manual Testing",
        skills: manualTestingSkills,
        descriptions: [
          "Creating and running structured test cases.",
          "Developing comprehensive test documentation.",
          "Identifying and logging bugs using tools like JIRA.",
          "Ensuring software functionality remains intact after changes.",
          "Verifying seamless interaction between components.",
          "Evaluating software from an end-user perspective.",
        ],
      },
      {
        subTitle: "Automation Testing",
        skills: automationTestingSkills,
        descriptions: [
          "Automating browser-based testing.",
          "Writing and executing automated test scripts.",
          "Frameworks for structured test execution.",
          "Implementing tests in DevOps pipelines.",
          "Testing RESTful APIs for correctness and performance using Postman.",
          "Modern automation tool for fast and reliable UI testing.",
          "Using machine learning and AI to optimize and generate tests.",
          "Java library used for automating REST API tests.",
        ],
      },
    ],
  },
  {
    title: "Technical Skills",
    items: [
      {
        subTitle: "",
        skills: [
          "SQL",
          "Basic JAVA",
          "Manual Testing",
          "JIRA",
          "Bugzilla",
          "Selenium",
          "Maven",
          "Postman",
          "API Testing",
          "Cypress",
        ],
        descriptions: [
          "A language used to store, retrieve, and manipulate data in relational databases.",
          "A widely used programming language known for its object-oriented principles and platform independence.",
          "A process where testers manually execute test cases to identify bugs in software.",
          "A popular tool for tracking bugs, managing projects, and handling agile workflows.",
          "An open-source bug tracking system used to report, manage, and fix defects.",
          "A powerful automation testing tool for web applications across different browsers.",
          "A build automation and project management tool for Java-based applications.",
          "A tool used for API development and testing, enabling sending requests and validating responses.",
          "Testing the functionality, reliability, and security of APIs using tools like Postman or REST Assured.",
          "A next-generation front end testing tool built for the modern web.",
        ],
      },
    ],
  },
  {
    title: "OS & Databases",
    items: [
      {
        subTitle: "",
        skills: ["MySQL", "Linux", "Windows", "No SQL"],
        descriptions: [
          "A widely used open-source relational database management system known for its speed and reliability.",
          "An open-source operating system known for its stability, security, and flexibility.",
          "A user-friendly operating system developed by Microsoft, widely used in personal and enterprise environments.",
          "A non-relational database system designed for handling large-scale, unstructured, or semi-structured data efficiently.",
        ],
      },
    ],
  },
  {
    title: "Documentation",
    items: [
      {
        subTitle: "",
        skills: [
          "Microsoft Office",
          "Test documentation",
          "SRS writing",
          "Google Sheets",
        ],
        descriptions: [
          "A suite of productivity applications, including Word, Excel, and PowerPoint, used for document creation, data analysis, and presentations.",
          "A collection of documents that outline the testing process, including test plans, cases, reports, and results.",
          "The process of creating a Software Requirement Specification (SRS) document that defines the system's functional and non-functional requirements.",
          "A web-based application for creating, sharing, and collaborating on spreadsheets.",
        ],
      },
    ],
  },
  {
    title: "AI & Emerging Tech",
    items: [
      {
        subTitle: "",
        skills: ["AI in Testing", "ML Basics", "Basic Python"],
        descriptions: [
          "Applying AI to automate and enhance software testing processes.",
          "Basic concepts of machine learning including models, data training, and evaluation.",
          "Python scripting for test automation and data analysis tasks.",
        ],
      },
    ],
  },
];
