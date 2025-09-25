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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {categories.map((category, index) => (
        <RevealAnimation
          key={index}
          animation="fade-in-up"
          delay={100 * index}
          className="p-6 rounded-xl shadow-sm glass card-hover"
        >
          <h4 className="mb-3 text-lg font-semibold">{category.title}</h4>
          {category.items.map((subSection, subIndex) => (
            <div key={subIndex} className="mb-4">
              <h5 className="mb-2 font-medium text-md">
                {subSection.subTitle}
              </h5>
              <ul className="space-y-2">
                {subSection.skills.map((skill: string, skillIndex: number) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="mr-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-muted-foreground cursor-help">
                            {skill}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          align="start"
                          className="max-w-xs border-blue-200 shadow-2xl"
                          sideOffset={10}
                        >
                          <p className="text-xs leading-relaxed">
                            {subSection.descriptions[skillIndex]}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealAnimation>
      ))}
    </div>
  );
};

export default SkillCategories;
