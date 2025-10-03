import React from "react";
import RevealAnimation from "../ui/RevealAnimation";
import { EducationItemType } from "@/data/educationData";

interface EducationTimelineProps {
  educationData: EducationItemType[];
}

// Function to get favicon URL from a given website URL
const getFaviconUrl = (url: string): string => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch (error) {
    return "/default-favicon.png"; // fallback if URL is broken
  }
};

// EducationTimeline component to display education items in a timeline format

const EducationTimeline: React.FC<EducationTimelineProps> = ({
  educationData,
}) => {
  return (
    <RevealAnimation animation="fade-in-right">
      <div>
        <h3 className="mb-6 text-2xl font-bold">Education Timeline</h3>
        <div className="relative">
          {educationData.map((item, index) => (
            <div key={index} className="flex relative gap-6 pb-12 last:pb-0">
              {/* Timeline Line - extends from center of dot */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="flex justify-center items-center w-10 h-10 text-white bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-lg z-10 animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                {/* Connecting line - only show if not last item */}
                {index !== educationData.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 mt-2"></div>
                )}
              </div>
              
              {/* Content Card */}
              <div className="flex-1 p-6 rounded-xl border border-blue-100 shadow-lg glass bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-300">
                <h4 className="mb-1 text-xl font-semibold text-gray-800">{item.degree}</h4>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mb-2 font-medium text-blue-600 transition-all hover:text-blue-700 hover:gap-3 hover:underline"
                >
                  {item.institution}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="mb-3 text-sm text-gray-500 font-medium">{item.duration}</p>
                <p className="text-gray-600 leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default EducationTimeline;
