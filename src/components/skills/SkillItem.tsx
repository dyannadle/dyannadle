import React from 'react';
import RevealAnimation from '@/components/ui/RevealAnimation';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Progress } from '@/components/ui/progress';
import { SkillItemType } from '@/data/skillsData';

interface SkillItemProps extends SkillItemType {
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, index, description, version }) => {
  return (
    <RevealAnimation
      animation="fade-in-right"
      delay={100 * index}
      className="mb-5 transition-transform duration-200 hover:translate-y-[-3px] hover:shadow-md p-2 rounded-md relative"
    >
      <div className="flex justify-between mb-1 items-center">
        <div className="flex items-center gap-2">
          {description ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="font-medium cursor-help text-gray-200 hover:text-blue-400 transition-colors duration-200"
                >
                  {name}
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={10}
                className="z-[9999] bg-slate-900 border border-slate-700 px-2 py-1 text-xs text-white rounded shadow-md"
              >
                <div>
                  <p>{description}</p>
                  {version && (
                    <p className="text-[10px] text-gray-400 mt-1">Version: {version}</p>
                  )}
                </div>
              </TooltipContent>
            </Tooltip>
          ) : (
            <span className="font-medium text-gray-200">{name}</span>
          )}

          {version && (
            <span className="text-xs px-2 py-0.5 bg-blue-900/40 text-blue-300 rounded-full font-semibold">
              {version}
            </span>
          )}
        </div>

        <span className="text-sm text-gray-400">{level}%</span>
      </div>

      <Progress value={level} className="w-full h-2.5" />
    </RevealAnimation>
  );
};

export default SkillItem;
