export interface EducationItemType {
  degree: string;
  institution: string;
  duration: string;
  details: string;
  url: string;
}

export const educationData: EducationItemType[] = [
  {
    degree: "Software Testing Training",
    institution: "Quastech, Borivali",
    duration: "August 2024 - June 2025",
    details: "Successfully completed manual testing training and currently learning automation testing, including various tools and frameworks.",
    url: 'https://www.quastech.in/', 
  },
  {
    degree: "Bachelor of Engineering",
    institution: "Universal College of Engineering",
    duration: "2022 - 2025",
    details: "Completed a Bachelor's degree in Engineering, focusing on building a strong technical foundation in Artifical Inteligence and Machine Learning.",
    url: 'https://universalcollegeofengineering.edu.in/',
  },
  {
    degree: "Diploma",
    institution: "Viva Institute of Technology",
    duration: "2019 - 2022",
    details: "Completed a technical diploma, gaining practical skills and knowledge in technology and engineering principles.",
    url: 'https://www.viva-technology.org/New/',
  },
  {
    degree: "SSC",
    institution: "Holy Paradise High School, Vasai",
    duration: "Completed in 2019",
    details: "Completed secondary school education with a focus on science and mathematics.",
    url: 'https://holyparadiseschool.com/',
  },
];
