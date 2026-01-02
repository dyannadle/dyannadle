import React, { useEffect, useState } from 'react';
import {
    Code, Database, Server, Globe, Cpu, Cloud, Terminal,
    Layers, Box, GitBranch, Command, Hash
} from 'lucide-react';

const techStack = [
    { icon: Code, label: "React" },
    { icon: Hash, label: "TypeScript" },
    { icon: Server, label: "Node.js" },
    { icon: Layers, label: "Next.js" },
    { icon: Box, label: "Tailwind" },
    { icon: Database, label: "MongoDB" },
    { icon: Cloud, label: "AWS" },
    { icon: Globe, label: "Web" },
    { icon: Terminal, label: "Bash" },
    { icon: GitBranch, label: "Git" },
    { icon: Command, label: "DevOps" },
    { icon: Cpu, label: "AI/ML" },
];

const LiveBackground: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        // Generate random starting positions for tech items
        const newItems = techStack.map((tech, i) => ({
            ...tech,
            id: i,
            // Spread them out more to cover the whole page
            left: Math.random() * 90,
            top: Math.random() * 90,
            duration: 25 + Math.random() * 20, // Slower, majestic float
            delay: Math.random() * 5,
            directionX: Math.random() > 0.5 ? 1 : -1,
            directionY: Math.random() > 0.5 ? 1 : -1,
        }));
        setItems(newItems);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
            {/* Dark gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-0" />

            {/* Primary Glowing Orb */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-float"
                style={{ animationDuration: '15s' }}
            />

            {/* Secondary Purple Orb */}
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-600/20 blur-[100px] mix-blend-screen animate-float"
                style={{ animationDuration: '18s', animationDelay: '2s', animationDirection: 'reverse' }}
            />

            {/* Accent Orb */}
            <div
                className="absolute top-[40%] left-[60%] w-[25vw] h-[25vw] rounded-full bg-blue-500/15 blur-[80px] mix-blend-screen animate-pulse-slow"
                style={{ animationDuration: '12s', animationDelay: '1s' }}
            />

            {/* Animated Mesh Grid - Subtle */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] animate-pulse" />

            {/* Floating Tech Stack Items */}
            {items.map((item) => (
                <div
                    key={item.id}
                    className="absolute flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/30 font-semibold text-lg whitespace-nowrap shadow-lg"
                    style={{
                        left: `${item.left}%`,
                        top: `${item.top}%`,
                        animation: `float-drift ${item.duration}s infinite linear alternate`,
                        animationDelay: `${item.delay}s`,
                    }}
                >
                    <item.icon size={24} />
                    <span>{item.label}</span>
                </div>
            ))}

            <style>{`
        @keyframes float-drift {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(80px, 60px) rotate(3deg);
          }
          50% {
            transform: translate(0, 120px) rotate(-2deg);
          }
          75% {
            transform: translate(-80px, 60px) rotate(2deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
        </div>
    );
};

export default LiveBackground;
