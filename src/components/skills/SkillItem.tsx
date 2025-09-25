
import React from 'react';
import RevealAnimation from '@/components/ui/RevealAnimation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Progress } from '@/components/ui/progress';
import { SkillItemType } from '@/data/skillsData';

interface SkillItemProps extends SkillItemType {
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, index, description }) => {
  return (
    <RevealAnimation 
      animation="fade-in-right" 
      delay={100 * index}
      className="mb-5 transition-transform duration-200 hover:translate-y-[-3px] hover:shadow-md p-2 rounded-md relative"
    >
      <div className="flex justify-between mb-1">
        {description ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="font-medium cursor-help">{name}</span>
              </TooltipTrigger>
              <TooltipContent 
                side="top" 
                align="start" 
                className="max-w-xs border-blue-200 shadow-2xl"
                sideOffset={10}
              >
                <p className="text-xs leading-relaxed">{description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <span className="font-medium">{name}</span>
        )}
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="w-full h-2.5" />
    </RevealAnimation>
  );
};

export default SkillItem;
