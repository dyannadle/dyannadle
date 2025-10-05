import React from "react";
import RevealAnimation from "@/components/ui/RevealAnimation";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { SkillCategory, skillTooltips } from "@/data/skillsData";

interface SkillCategoriesProps {
  categories: SkillCategory[];
}

const SkillCategories: React.FC<SkillCategoriesProps> = ({ categories }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map((category, index) => (
          <RevealAnimation
            key={index}
            animation="fade-in-up"
            delay={100 * index}
            className="group p-6 rounded-2xl shadow-lg bg-white/90 backdrop-blur-sm border border-blue-100/50 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in"
          >
            <h4 className="mb-4 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">{category.title}</h4>
            {category.items.map((subSection, subIndex) => (
              <div key={subIndex} className="mb-4">
                {subSection.subTitle && (
                  <h5 className="mb-2 font-semibold text-md text-gray-700">
                    {subSection.subTitle}
                  </h5>
                )}
                <ul className="space-y-2">
                  {subSection.skills.map((skill: string, skillIndex: number) => (
                    <li key={skillIndex} className="flex items-center group/item">
                      <span className="mr-2 w-2 h-2 bg-blue-600 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-gray-700 cursor-help hover:text-blue-600 transition-colors duration-300 font-medium">
                            {skill}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          align="start"
                          className="max-w-xs border-blue-200 shadow-2xl bg-white/98 backdrop-blur-sm animate-fade-in"
                          sideOffset={10}
                        >
                          <p className="text-xs leading-relaxed text-gray-800">
                            {subSection.descriptions[skillIndex]}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </RevealAnimation>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SkillCategories;
