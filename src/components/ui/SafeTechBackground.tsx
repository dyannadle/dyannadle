import React, { useEffect, useRef, useState } from 'react';

// Mapped directly from src/data/skillsData.ts
const TECH_ICONS = [
    // Core & Languages
    { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },

    // Testing & Automation
    { name: "Selenium", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
    { name: "Cypress", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" },
    { name: "Postman", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "JIRA", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
    { name: "Jenkins", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },

    // Tools & Platforms
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Windows", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" },
    { name: "Maven", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },

    // Databases
    { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },

    // Extras
    { name: "Manual Testing", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" },
    { name: "Test Automation", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/robotframework/robotframework-original.svg" },
    { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Office", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "Agile", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg" }
];

interface IconData {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    rotation: number;
    rotationSpeed: number;
    scale: number;
    icon: { name: string, url: string };
}

const SafeTechBackground = () => {
    const requestRef = useRef<number>();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Use References for animation state to avoid Re-renders
    const iconStateRef = useRef<IconData[]>([]);
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

    // 1. Initialize State Logic (Once)
    useEffect(() => {
        const count = TECH_ICONS.length;
        const newIcons: IconData[] = [];

        for (let i = 0; i < count; i++) {
            newIcons.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                vx: (Math.random() - 0.5) * 0.05,
                vy: (Math.random() - 0.5) * 0.05,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.1,
                scale: 0.8 + Math.random() * 0.4,
                icon: TECH_ICONS[i]
            });
        }
        iconStateRef.current = newIcons;
    }, []);

    // 2. Starry Background Canvas Logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles: { x: number, y: number, size: number, opacity: number, speed: number }[] = [];
        const particleCount = 150;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2,
                opacity: Math.random(),
                speed: Math.random() * 0.2 + 0.1
            });
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#FFFFFF';

            particles.forEach(p => {
                ctx.globalAlpha = p.opacity;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                p.opacity += (Math.random() - 0.5) * 0.05;
                if (p.opacity < 0.1) p.opacity = 0.1;
                if (p.opacity > 1) p.opacity = 1;

                p.y -= p.speed;
                if (p.y < 0) p.y = height;
            });
            requestAnimationFrame(drawParticles);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        const animationId = requestAnimationFrame(drawParticles);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    // 3. Icon Animation Loop (Direct DOM Manipulation)
    useEffect(() => {
        const animate = () => {
            const icons = iconStateRef.current;

            for (let i = 0; i < icons.length; i++) {
                const icon = icons[i];
                const el = iconRefs.current[i];

                if (!el) continue;

                // Move
                icon.x += icon.vx;
                icon.y += icon.vy;
                icon.rotation += icon.rotationSpeed;

                // Bounce
                if (icon.x < 0 || icon.x > 100) icon.vx *= -1;
                if (icon.y < 0 || icon.y > 100) icon.vy *= -1;

                // Collision Detection (Separation)
                for (let j = 0; j < icons.length; j++) {
                    if (i === j) continue;
                    const other = icons[j];
                    const dx = icon.x - other.x;
                    const dy = icon.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 15) { // 15% separation
                        const angle = Math.atan2(dy, dx);
                        const force = 0.005; // Gentle push
                        icon.vx += Math.cos(angle) * force;
                        icon.vy += Math.sin(angle) * force;
                    }
                }

                // Dampen
                if (Math.abs(icon.vx) > 0.05) icon.vx *= 0.95;
                if (Math.abs(icon.vy) > 0.05) icon.vy *= 0.95;

                // Apply style directly to DOM element (No React Render!)
                el.style.left = `${icon.x}%`;
                el.style.top = `${icon.y}%`;
                el.style.transform = `translate(-50%, -50%) rotate(${icon.rotation}deg) scale(${icon.scale})`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-[#050A14] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#050A14] via-[#0a0f1e] to-black" />

            {/* Starry Background */}
            <canvas ref={canvasRef} className="absolute inset-0 opacity-60" style={{ mixBlendMode: 'screen' }} />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #00E5FF 1px, transparent 1px), linear-gradient(to bottom, #00E5FF 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
                    animation: 'grid-move 20s linear infinite'
                }}
            />

            <style>{`@keyframes grid-move { 0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); } 100% { transform: perspective(500px) rotateX(60deg) translateY(4rem) translateZ(-200px); } }`}</style>

            {/* Icons Layer */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {TECH_ICONS.map((icon, i) => (
                    <div
                        key={i}
                        ref={(el) => iconRefs.current[i] = el}
                        className="absolute will-change-transform flex items-center justify-center"
                        style={{
                            // Initial positions (updated by JS immediately)
                            left: '50%',
                            top: '50%',
                            opacity: 0.15,
                        }}
                    >
                        <img
                            src={icon.url}
                            alt={icon.name}
                            style={{ width: '150px', height: '150px' }}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Ticker */}
            <div className="absolute top-20 left-0 w-full overflow-hidden opacity-30 pointer-events-none transform -rotate-2 bg-gradient-to-r from-transparent via-[#00E5FF]/10 to-transparent py-2">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-12 px-4 text-sm font-mono text-[#00E5FF]">
                            <span>BTC <span className="text-green-400">▲ 2.4%</span></span>
                            <span>ETH <span className="text-green-400">▲ 1.8%</span></span>
                            <span>AI_IDX <span className="text-green-400">▲ 5.2%</span></span>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { animation: marquee 20s linear infinite; }`}</style>

            {/* Detailed Fintech Graph Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-96 pointer-events-none opacity-40">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 300">
                    {/* Grid Lines */}
                    <path d="M0,50 L1200,50 M0,100 L1200,100 M0,150 L1200,150 M0,200 L1200,200 M0,250 L1200,250" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.1" />
                    <path d="M200,0 L200,300 M400,0 L400,300 M600,0 L600,300 M800,0 L800,300 M1000,0 L1000,300" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.1" />

                    {/* Secondary Trend Line (Pink Dotted) */}
                    <path
                        d="M0,200 Q150,250 300,180 T600,200 T900,150 T1200,220"
                        fill="none"
                        stroke="#FF00AA"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                        strokeDasharray="5,5"
                    />

                    {/* Primary Market Graph (Blue) */}
                    <path
                        d="M0,250 L50,240 L100,260 L150,220 L200,280 L250,200 L300,220 L350,180 L400,240 L450,160 L500,200 L550,140 L600,180 L650,130 L700,170 L750,120 L800,160 L850,100 L900,120 L950,50 L1000,90 L1050,40 L1100,60 L1150,20 L1200,40 V300 H0 Z"
                        fill="url(#graphGradient)"
                        stroke="#00E5FF"
                        strokeWidth="2"
                    />

                    <defs>
                        <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};
export default SafeTechBackground;
