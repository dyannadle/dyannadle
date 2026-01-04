import React, { useState, useEffect, useRef } from 'react';
import { Minimize2, Maximize2, X, Terminal as TerminalIcon, GripHorizontal } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/constants';
import { projects } from '@/data/projectsData';
import { certifications } from '@/data/educationData';

interface TerminalLine {
    type: 'input' | 'output' | 'error' | 'system';
    content: React.ReactNode;
}

const COMMANDS = {
    help: "Available commands: help, about, skills, contact, social, projects, certificates, resume, clear, date, whoami",
    about: "I am a Full Stack Developer passionate about building high-performance, scalable applications.",
    skills: "Java, SQL, Microservices, React, TypeScript, Node.js, Python, Docker, AWS, Kubernetes, Next.js",
    contact: `Email: ${SOCIAL_LINKS.email}`,
    matrix: "Wake up, Neo... The Matrix has you.",
    date: new Date().toString(),
    resume: "Click the link below to view/download my resume.",
    clear: "Cleared terminal history.",
};

const Terminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [history, setHistory] = useState<TerminalLine[]>([]);
    const [input, setInput] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const dragStartPos = useRef({ x: 0, y: 0 });

    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Boot Sequence
    useEffect(() => {
        if (isOpen && history.length === 0) {
            const bootLines = [
                "Initializing DevTerminal v2.0.4...",
                "Loading kernel modules...",
                "Mounting virtual filesystem...",
                "Connecting to secure server...",
                "Access granted.",
                "Welcome guest@portfolio."
            ];

            let delay = 0;
            bootLines.forEach((line, index) => {
                delay += 300 + Math.random() * 400;
                setTimeout(() => {
                    setHistory(prev => [...prev, { type: 'system', content: line }]);
                }, delay);
            });
            setTimeout(() => {
                setHistory(prev => [...prev, { type: 'system', content: 'Type "help" for instructions.' }]);
            }, delay + 500);
        }
    }, [isOpen]);

    // Auto-scroll
    useEffect(() => {
        if (isOpen && !isMinimized) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isOpen, isMinimized]);

    // Focus input
    useEffect(() => {
        if (isOpen && !isMinimized) {
            inputRef.current?.focus();
        }
    }, [isOpen, isMinimized]);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();

        if (cleanCmd === 'clear') {
            setHistory([]);
            return;
        }

        // Custom Handler for 'projects'
        if (cleanCmd === 'projects') {
            const projectList = (
                <div className="flex flex-col gap-1 mt-1 font-mono">
                    <div className="text-[#00E5FF] mb-2 border-b border-[#00E5FF]/30 pb-1 w-fit">Detected {projects.length} Projects:</div>
                    {projects.map((p, i) => (
                        <div key={i} className="flex items-start gap-2 pl-2">
                            <span className="text-green-500 mt-1">➜</span>
                            <div className="flex flex-col">
                                <a
                                    href={p.github || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-200 hover:text-white hover:underline transition-colors font-bold"
                                >
                                    {p.title}
                                </a>
                                <span className="text-xs text-gray-500">{p.category}</span>
                            </div>
                        </div>
                    ))}
                    <div className="text-gray-500 italic mt-2 text-xs">Click any project to view repository.</div>
                </div>
            );

            setHistory(prev => [
                ...prev,
                { type: 'input', content: cmd },
                { type: 'output', content: projectList }
            ]);
            return;
        }

        // Custom Handler for 'certificates'
        if (cleanCmd === 'certificates') {
            const certList = (
                <div className="flex flex-col gap-1 mt-1 font-mono">
                    <div className="text-[#00E5FF] mb-2 border-b border-[#00E5FF]/30 pb-1 w-fit">Found {certifications.length} Certificates:</div>
                    {certifications.map((c, i) => (
                        <div key={i} className="flex items-start gap-2 pl-2">
                            <span className="text-yellow-500 mt-1">➜</span>
                            <div className="flex flex-col">
                                <a
                                    href={c.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-200 hover:text-white hover:underline transition-colors font-bold"
                                >
                                    {c.name}
                                </a>
                                <span className="text-xs text-gray-500">{c.institution} | {c.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            );

            setHistory(prev => [
                ...prev,
                { type: 'input', content: cmd },
                { type: 'output', content: certList }
            ]);
            return;
        }

        // Custom Handler for 'social'
        if (cleanCmd === 'social') {
            const socialLinks = (
                <div className="flex flex-col gap-2 mt-1 font-mono pl-2">
                    <div className="flex items-center gap-2">
                        <span className="text-green-500">➜</span>
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline hover:text-white transition-colors">
                            GitHub Profile
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-500">➜</span>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline hover:text-white transition-colors">
                            LinkedIn Profile
                        </a>
                    </div>
                </div>
            );

            setHistory(prev => [
                ...prev,
                { type: 'input', content: cmd },
                { type: 'output', content: socialLinks }
            ]);
            return;
        }

        // Custom Handler for 'resume'
        if (cleanCmd === 'resume') {
            const resumeLink = (
                <div className="flex items-center gap-2 mt-1 font-mono pl-2">
                    <span className="text-green-500">➜</span>
                    <a
                        href={SOCIAL_LINKS.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00E5FF] hover:underline hover:text-white transition-colors font-bold"
                    >
                        Download Resume
                    </a>
                </div>
            );

            setHistory(prev => [
                ...prev,
                { type: 'input', content: cmd },
                { type: 'output', content: resumeLink }
            ]);
            return;
        }

        // Custom Handler for 'whoami'
        if (cleanCmd === 'whoami') {
            const ua = navigator.userAgent;
            let os = "Unknown-System";
            if (ua.indexOf("Win") !== -1) os = "Windows-Workstation";
            else if (ua.indexOf("Mac") !== -1) os = "Macintosh-Terminal";
            else if (ua.indexOf("Linux") !== -1) os = "Linux-Machine";
            else if (ua.indexOf("Android") !== -1) os = "Android-Device";
            else if (ua.indexOf("like Mac") !== -1) os = "iOS-Device";

            const browserInfo = `visitor@${os}`;

            setHistory(prev => [
                ...prev,
                { type: 'input', content: cmd },
                { type: 'output', content: browserInfo }
            ]);
            return;
        }

        let response: React.ReactNode = `Command not found: ${cleanCmd}. Type "help" for available commands.`;
        let type: TerminalLine['type'] = 'error';

        if (Object.keys(COMMANDS).includes(cleanCmd)) {
            // @ts-ignore
            response = COMMANDS[cleanCmd];
            type = 'output';
        } else if (cleanCmd === '') {
            response = '';
            type = 'output';
        }

        setHistory(prev => [
            ...prev,
            { type: 'input', content: cmd },
            { type, content: response }
        ]);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    // Drag Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        dragStartPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragStartPos.current.x,
                    y: e.clientY - dragStartPos.current.y
                });
            }
        };
        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-black/90 backdrop-blur-md border border-[#00E5FF]/50 rounded-full text-[#00E5FF] hover:bg-[#00E5FF]/20 transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:scale-110 group"
            >
                <TerminalIcon size={24} />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/90 text-xs px-2 py-1 rounded border border-[#00E5FF]/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-[#00E5FF]">
                    Open Terminal
                </span>
            </button>
        );
    }

    return (
        <div
            className={`fixed z-50 transition-shadow duration-300 ease-in-out border border-[#00E5FF]/40 bg-black/95 backdrop-blur-xl shadow-[0_0_40px_rgba(0,229,255,0.2)] font-mono overflow-hidden
                ${isMinimized ? 'h-12 w-72' : 'h-[500px] w-[90vw] md:w-[650px]'}
                rounded-lg
            `}
            style={{
                bottom: '24px',
                right: '24px',
                transform: `translate(${position.x}px, ${position.y}px)`,
                cursor: isDragging ? 'grabbing' : 'default'
            }}
        >
            {/* CRT Overlay Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[60] bg-[length:100%_2px,3px_100%] opacity-20" />

            {/* Header */}
            <div
                className="flex items-center justify-between px-4 py-2 bg-[#00E5FF]/10 border-b border-[#00E5FF]/20 select-none cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
            >
                <div className="flex items-center gap-2 text-[#00E5FF] text-sm font-bold tracking-wider">
                    <TerminalIcon size={14} />
                    <span>user@portfolio:~</span>
                </div>
                <div className="flex items-center gap-2">
                    <GripHorizontal size={14} className="text-[#00E5FF]/50 mr-2" />
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
                        className="p-1 hover:bg-[#00E5FF]/20 rounded text-[#00E5FF] transition-colors"
                    >
                        {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                        className="p-1 hover:bg-red-500/20 rounded text-red-400 transition-colors"
                    >
                        <X size={14} />
                    </button>
                </div>
            </div>

            {/* Content */}
            {!isMinimized && (
                <div
                    className="p-4 h-[calc(100%-3rem)] overflow-y-auto custom-scrollbar text-sm font-mono relative"
                    onClick={() => inputRef.current?.focus()}
                >
                    {history.map((line, i) => (
                        <div key={i} className="mb-2 break-words leading-relaxed animate-in fade-in duration-300">
                            {line.type === 'input' && (
                                <span className="text-green-500 font-bold mr-2">➜ ~</span>
                            )}
                            <span className={
                                line.type === 'input' ? 'text-white' :
                                    line.type === 'error' ? 'text-red-400' :
                                        line.type === 'system' ? 'text-cyan-400/80 italic' :
                                            'text-[#00E5FF] drop-shadow-[0_0_2px_rgba(0,229,255,0.5)]'
                            }>
                                {line.content}
                            </span>
                        </div>
                    ))}

                    <div className="flex items-center mt-2 group">
                        <span className="text-green-500 font-bold mr-2 group-focus-within:animate-pulse">➜ ~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 caret-[#00E5FF]"
                            autoFocus
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </div>
                    <div ref={bottomRef} />
                </div>
            )}
        </div>
    );
};

export default Terminal;
