import React from 'react';
import { getTechIcon } from './TechIcons';
import { SkillItemType } from '@/data/skillsData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SkillsCloudProps {
    skills: SkillItemType[];
}

const SkillsCloud: React.FC<SkillsCloudProps> = ({ skills }) => {
    return (
        <div className="relative w-full max-w-5xl mx-auto py-20 px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {skills.filter(skill => !skill.excludeFromCloud).map((skill, index) => {
                    const Icon = getTechIcon(skill.name);
                    // Randomize animation delay for a more organic feel
                    const delay = Math.random() * 2;
                    const duration = 3 + Math.random() * 2;

                    return (
                        <TooltipProvider key={skill.name}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <div
                                        className="group relative flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-110 cursor-pointer"
                                        style={{
                                            animation: `float ${duration}s ease-in-out infinite`,
                                            animationDelay: `${delay}s`
                                        }}
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Icon Container */}
                                        <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 shadow-lg group-hover:border-blue-500/50 group-hover:shadow-blue-500/20 transition-all duration-300">
                                            <Icon className="w-full h-full transition-transform duration-300" />
                                        </div>

                                        {/* Label (optional, can be hidden if relying solely on tooltip) */}
                                        <span className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side="top" className="bg-slate-900 text-white border-slate-800">
                                    <div className="text-center">
                                        <p className="font-bold">{skill.name}</p>
                                        {skill.description && (
                                            <p className="text-xs text-slate-400 max-w-[200px] mt-1">{skill.description}</p>
                                        )}
                                        <div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillsCloud;
