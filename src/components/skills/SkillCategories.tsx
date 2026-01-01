import React from "react";
import RevealAnimation from "@/components/ui/RevealAnimation";
import {
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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {categories.map((category, index) => (
        <RevealAnimation
          key={index}
          animation="fade-in-up"
          delay={100 * index}
          className="group p-6 rounded-2xl glass border border-white/5 hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
        >
          <h4 className="mb-4 text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
            {category.title}
          </h4>

          {category.items.map((subSection, subIndex) => (
            <div key={subIndex} className="mb-4">
              {subSection.subTitle && (
                <h5 className="mb-2 font-semibold text-md text-gray-300">
                  {subSection.subTitle}
                </h5>
              )}

              <ul className="space-y-2">
                {subSection.skills.map((skill: string, skillIndex: number) => {
                  const description =
                    subSection.descriptions[skillIndex] ||
                    skillTooltips[skill] ||
                    "No description available";

                  return (
                    <li
                      key={skillIndex}
                      className="flex items-center group/item"
                    >
                      <span className="mr-2 w-2 h-2 bg-blue-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="text-left text-gray-300 cursor-help hover:text-blue-400 transition-colors duration-300 font-medium focus:outline-none"
                          >
                            {skill}
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" sideOffset={10} className="bg-slate-900 text-white border-slate-700">
                          <p className="max-w-xs text-balance leading-snug">
                            {description}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </RevealAnimation>
      ))}
    </div>
  );
};

export default SkillCategories;
