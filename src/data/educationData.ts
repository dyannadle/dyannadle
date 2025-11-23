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
    name: "Certified Software Tester",
    institution: "Quastech",
    year: "2025",
    icon: "/logos/Quastech-logo.jpg.ico",
    link: "/Certificates/Certified Software Tester.pdf",
  },
  {
    name: "GenAI Powered Data Analytics",
    institution: "Coursera",
    year: "2025",
    icon: "/logos/coursera logo.svg",
    link: "/Certificates/GenAI Powered Data Analytics.pdf",
  },
  {
    name: "Google Associate Cloud Engineer",
    institution: "Google Cloud",
    year: "2024",
    icon: "/logos/google-cloud-storage.png",
    link: "/Certificates/Google_Associate_Cloud_Engineer_Certificate.pdf",
  },
  {
    name: "AWS Academy Introduction to Cloud",
    institution: "Amazon",
    year: "2024",
    icon: "/logos/AWS-Logo.png",
    link: "/Certificates/AWS Academy Introduction to Cloud.pdf",
  },
  {
    name: "Career Essentials in Generative AI",
    institution: "Microsoft & LinkedIn",
    year: "2024",
    icon: "/logos/linkedin-learning-logo.jpg",
    link: "/Certificates/Career Essentials in Generative AI.pdf",
  },
  {
    name: "Google AI Essentials",
    institution: "Coursera",
    year: "2024",
    icon: "/logos/coursera logo.svg",
    link: "/Certificates/Google AI Essentials.pdf",
  },
  {
    name: "What is Generative AI?",
    institution: "LinkedIn Learning",
    year: "2024",
    icon: "/logos/linkedin-learning-logo.jpg",
    link: "/Certificates/What is Generative AI.pdf",
  },
  {
    name: "Data Manipulation with pandas",
    institution: "DataCamp",
    year: "2023",
    icon: "/logos/DC.png",
    link: "/Certificates/Data Manipulation with pandas.pdf",
  },
  {
    name: "Value Added Course By SAP",
    institution: "SAP & Edunet",
    year: "2023",
    icon: "/",
    link: "/Certificates/Value Added Course By SAP.pdf",
  },
  {
    name: "Joining Data in SQL",
    institution: "DataCamp",
    year: "2023",
    icon: "/logos/DC.png",
    link: "/Certificates/Joining Data in SQL.pdf",
  },
  {
    name: "Introduction to Python",
    institution: "DataCamp",
    year: "2023",
    icon: "/logos/DC.png",
    link: "/Certificates/Introduction to Python.pdf",
  },
  {
    name: "Android App Development",
    institution: "Internshala",
    year: "2022",
    icon: "/logos/internshala-logo.jpg",
    link: "/Certificates/Android App Development.pdf",
  },
  {
    name: "Maharashtra State Certificate in IT",
    institution: "MS-CIT",
    year: "2019",
    icon: "/logos/logo-mscit.png",
    link: "/Certificates/Maharashtra State Certificate in IT.pdf",
  },
];

export const continuousLearningSkills = [
  { name: "Testing Framework", iconKey: "BookOpen" },
  { name: "Quality Assurance", iconKey: "Award" },
  { name: "Cloud Technologies", iconKey: "Globe" },
  { name: "Development Process", iconKey: "Code" },
  { name: "Data Science", iconKey: "Database" },
  { name: "Certification", iconKey: "GraduationCap" },
  { name: "Artificial Intelligence", iconKey: "Brain" },
  { name: "Academic Growth", iconKey: "BookOpen" },
];

export const highlightedAreas = [
  {
    name: "Advanced Testing Frameworks",
    description: "Covers Selenium, Cypress, Playwright, and other automation frameworks.",
  },
  {
    name: "AI in Software Testing",
    description: "Applying ML/AI for defect prediction, test optimization, and automation.",
  },
  {
    name: "Cloud Testing Strategies",
    description: "Testing apps in cloud platforms like AWS, Azure, and GCP.",
  },
  {
    name: "Performance Engineering",
    description: "Load, stress, and scalability testing to ensure system reliability.",
  },
  {
    name: "API Security Testing",
    description: "OWASP practices, Postman, and BurpSuite for secure APIs.",
  },
];
