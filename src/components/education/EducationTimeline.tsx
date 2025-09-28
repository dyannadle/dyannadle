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
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:to-purple-600 before:z-0">
          {educationData.map((item, index) => (
            <div key={index} className="flex relative z-10 gap-6">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-10 h-10 text-white bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-md">
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
                <div className="w-0.5 h-full bg-gradient-to-b from-blue-600/30 to-purple-600/30"></div>
              </div>
              <div className="p-6 mb-10 rounded-xl border border-blue-100 shadow-sm glass bg-white/90 card-hover">
                <h4 className="mb-1 text-xl font-semibold">{item.degree}</h4>
                {(() => {
                  return (
<a
  href={item.url}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mb-2 font-medium text-blue-600 hover:underline"
>
  {item.institution}
</a>
                  );
                })()}
                <p className="mb-3 text-sm text-gray-500">{item.duration}</p>
                <p className="text-muted-foreground">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default EducationTimeline;
