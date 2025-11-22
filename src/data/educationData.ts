export interface EducationItemType {
  degree: string;
  institution: string;
  duration: string;
  details: string[];
  url: string;
}

export const educationData: EducationItemType[] = [
  {
    degree: "Software Testing Training",
    institution: "Quastech, Borivali",
    duration: "August 2024 - June 2025",
    details: [
      "Completed Manual Testing (SDLC, STLC, test case design, defect life cycle, requirement analysis).",
      "Currently learning Automation Testing with Selenium WebDriver, TestNG, Maven, and frameworks (POM, DDT).",
      "Hands-on experience with JIRA for defect management, SQL for database testing, and Postman for API testing.",
      "Strengthening analytical and problem-solving skills through real-time projects.",
    ],
    url: "https://www.quastech.in/",
  },
  {
    degree: "Bachelor of Engineering",
    institution: "Universal College of Engineering",
    duration: "2022 - 2025",
    details: [
      "Specialization: Artificial Intelligence & Machine Learning (AI/ML).",
      "Coursework: Data Structures, DBMS, Computer Networks, Operating Systems, Deep Learning, NLP.",
      "Academic projects applying ML techniques to real-world datasets and hackathon participation.",
      "Proficient in Python, Java, and C++ with exposure to cloud platforms and Git/GitHub.",
    ],
    url: "https://universalcollegeofengineering.edu.in/",
  },
  {
    degree: "Diploma",
    institution: "Viva Institute of Technology",
    duration: "2019 - 2022",
    details: [
      "Studied core subjects: Computer Programming, Digital Electronics, Software Development.",
      "Gained hands-on experience in C, C++, Java, and MySQL.",
      "Completed mini-projects and seminars, enhancing teamwork and leadership skills.",
      "Built strong technical and practical foundation in computer engineering concepts.",
    ],
    url: "https://www.viva-technology.org/New/",
  },
  {
    degree: "SSC",
    institution: "Holy Paradise High School, Vasai",
    duration: "Completed in 2019",
    details: [
      "Focused on core subjects: Mathematics, Science, and English.",
      "Achieved strong academic results, building a solid analytical base.",
      "Participated in science exhibitions and inter-school competitions.",
      "Developed communication, logical reasoning, and teamwork skills.",
    ],
    url: "https://holyparadiseschool.com/",
  },
];

export const certifications = [
  {
    name: "ISTQB Foundation Level",
    institution: "ISTQB",
    year: "2024",
    link: "https://www.istqb.org/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/ISTQB_Logo.png"
  },
  {
    name: "Selenium WebDriver with Java",
    institution: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png"
  },
  {
    name: "Postman API Testing",
    institution: "Udemy",
    year: "2024",
    link: "https://www.postman.com/",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
  }
];

export const continuousLearningSkills = [
  { name: "Testing Framework", iconKey: "Code" },
  { name: "Quality Assurance", iconKey: "Award" },
  { name: "Cloud Technologies", iconKey: "Globe" },
  { name: "Development Process", iconKey: "Brain" },
  { name: "Data Science", iconKey: "Database" },
  { name: "Certification", iconKey: "Award" },
  { name: "Artificial Intelligence", iconKey: "Brain" },
  { name: "Academic Growth", iconKey: "GraduationCap" }
];

export const highlightedAreas = [
  { name: "Manual Testing", description: "Expertise in manual test execution." },
  { name: "Automation Testing", description: "Proficient in Selenium and Cypress." },
  { name: "API Testing", description: "Experienced with Postman and REST Assured." },
  { name: "Database Testing", description: "Strong SQL skills for data validation." }
];
