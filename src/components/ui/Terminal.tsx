import React, { useState, useEffect, useRef } from "react";
import {
    Minimize2,
    Maximize2,
    X,
    Terminal as TerminalIcon,
    GripHorizontal,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/data/constants";
import { projects } from "@/data/projectsData";
import { certifications } from "@/data/educationData";

import { CERTIFICATES_MAP } from "@/data/pdfs/certificatesMap";
import { RESUME_BASE64 } from "@/data/pdfs/RESUME_BASE64";

interface TerminalLine {
    type: "input" | "output" | "error" | "system";
    content: React.ReactNode;
}

const openPdfViewer = (
    base64Data: string | undefined,
    title: string,
    fallbackLink: string,
) => {
    if (!base64Data) {
        window.open(fallbackLink, "_blank", "noopener,noreferrer");
        return;
    }

    try {
        // Convert Base64 to Blob
        const arr = base64Data.split(",");
        const mimeMatch = arr[0].match(/:(.*?);/);
        const mime = mimeMatch ? mimeMatch[1] : "application/pdf";
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        const blob = new Blob([u8arr], { type: mime });
        const blobUrl = URL.createObjectURL(blob);

        // Open Blob URL in new tab
        const newWindow = window.open("", "_blank");

        if (newWindow) {
            newWindow.document.write(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>${title}</title>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <style>
                            body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; background-color: #1a1a1a; font-family: system-ui, -apple-system, sans-serif; }
                            .header {
                                height: 50px;
                                background-color: #000;
                                color: #fff;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                px: 20px;
                                padding: 0 20px;
                                border-bottom: 1px solid #333;
                                box-shadow: 0 2px 10px rgba(0,0,0,0.5);
                            }
                            .title { font-weight: 600; font-size: 16px; color: #00E5FF; }
                            .close-btn { 
                                background: #333; color: #fff; border: none; padding: 6px 12px; 
                                border-radius: 4px; cursor: pointer; font-size: 12px;
                            }
                            .close-btn:hover { background: #444; }
                            iframe { width: 100%; height: calc(100% - 50px); border: none; display: block; }
                        </style>
                    </head>
                    <body>
                        <div class="header">
                            <span class="title">📄 ${title}</span>
                            <button class="close-btn" onclick="window.close()">Close</button>
                        </div>
                        <iframe src="${blobUrl}" type="application/pdf"></iframe>
                    </body>
                </html>
            `);
            newWindow.document.close();

            // Clean up Blob URL after a delay (enough time for new tab to load)
            setTimeout(() => URL.revokeObjectURL(blobUrl), 60000); // 1 minute delay
        } else {
            // Popup blocked, fallback to direct open or original link
            window.open(fallbackLink, "_blank", "noopener,noreferrer");
            URL.revokeObjectURL(blobUrl);
        }
    } catch (e) {
        console.error("Error opening PDF:", e);
        window.open(fallbackLink, "_blank", "noopener,noreferrer");
    }
};

const downloadBase64Pdf = (
    base64Data: string | undefined,
    filename: string,
    fallbackLink: string,
) => {
    if (!base64Data) {
        const a = document.createElement("a");
        a.href = fallbackLink;
        a.download = filename;
        a.target = "_blank";
        a.click();
        return;
    }

    try {
        const arr = base64Data.split(",");
        const mimeMatch = arr[0].match(/:(.*?);/);
        const mime = mimeMatch ? mimeMatch[1] : "application/pdf";
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        const blob = new Blob([u8arr], { type: mime });
        const blobUrl = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
    } catch (e) {
        console.error("Error downloading PDF:", e);
        const a = document.createElement("a");
        a.href = fallbackLink;
        a.download = filename;
        a.target = "_blank";
        a.click();
    }
};

const COMMANDS = {
    help: "Available commands: help, about, skills, contact, social, projects, certificates, resume, clear, date, whoami",
    about:
        "I am a Full Stack Developer passionate about building high-performance, scalable applications.",
    skills:
        "Java, SQL, Microservices, React, TypeScript, Node.js, Python, Docker, AWS, Kubernetes, Next.js",
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
    const [input, setInput] = useState("");
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
                "Welcome guest@portfolio.",
            ];

            let delay = 0;
            bootLines.forEach((line, index) => {
                delay += 300 + Math.random() * 400;
                setTimeout(() => {
                    setHistory((prev) => [...prev, { type: "system", content: line }]);
                }, delay);
            });
            setTimeout(() => {
                setHistory((prev) => [
                    ...prev,
                    { type: "system", content: 'Type "help" for instructions.' },
                ]);
            }, delay + 500);
        }
    }, [isOpen]);

    // Auto-scroll
    useEffect(() => {
        if (isOpen && !isMinimized) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
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

        if (cleanCmd === "clear") {
            setHistory([]);
            return;
        }

        // Custom Handler for 'projects'
        if (cleanCmd === "projects") {
            const projectList = (
                <div className="flex flex-col gap-1 mt-1 font-mono">
                    <div className="pb-1 mb-2 border-b text-[#00E5FF] border-[#00E5FF]/30 w-fit">
                        Detected {projects.length} Projects:
                    </div>
                    {projects.map((p, i) => (
                        <div key={i} className="flex gap-2 items-start pl-2">
                            <span className="mt-1 text-green-500">➜</span>
                            <div className="flex flex-col">
                                <a
                                    href={p.github || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-gray-200 transition-colors hover:text-white hover:underline"
                                >
                                    {p.title}
                                </a>
                                <span className="text-xs text-gray-500">{p.category}</span>
                            </div>
                        </div>
                    ))}
                    <div className="mt-2 text-xs italic text-gray-500">
                        Click any project to view repository.
                    </div>
                </div>
            );

            setHistory((prev) => [
                ...prev,
                { type: "input", content: cmd },
                { type: "output", content: projectList },
            ]);
            return;
        }

        // Custom Handler for 'certificates'
        if (cleanCmd === "certificates") {
            const certList = (
                <div className="flex flex-col gap-1 mt-1 font-mono">
                    <div className="pb-1 mb-2 border-b text-[#00E5FF] border-[#00E5FF]/30 w-fit">
                        Found {certifications.length} Certificates:
                    </div>
                    {certifications.map((c, i) => (
                        <div key={i} className="flex gap-2 items-start pl-2">
                            <span className="mt-1 text-yellow-500">➜</span>
                            <div className="flex flex-col">
                                <button
                                    onClick={() =>
                                        openPdfViewer(CERTIFICATES_MAP[c.name], c.name, c.link)
                                    }
                                    className="font-bold text-left text-gray-200 transition-colors hover:text-white hover:underline"
                                >
                                    {c.name}
                                </button>
                                <span className="text-xs text-gray-500">
                                    {c.institution} | {c.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            );

            setHistory((prev) => [
                ...prev,
                { type: "input", content: cmd },
                { type: "output", content: certList },
            ]);
            return;
        }

        // Custom Handler for 'social'
        if (cleanCmd === "social") {
            const socialLinks = (
                <div className="flex flex-col gap-2 pl-2 mt-1 font-mono">
                    <div className="flex gap-2 items-center">
                        <span className="text-green-500">➜</span>
                        <a
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-white hover:underline text-[#00E5FF]"
                        >
                            GitHub Profile
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-green-500">➜</span>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-white hover:underline text-[#00E5FF]"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>
            );

            setHistory((prev) => [
                ...prev,
                { type: "input", content: cmd },
                { type: "output", content: socialLinks },
            ]);
            return;
        }

        // Custom Handler for 'resume'
        if (cleanCmd === "resume") {
            const resumeOptions = (
                <div className="flex flex-col gap-2 pl-2 mt-1 font-mono">
                    <div className="flex gap-2 items-center">
                        <span className="text-green-500">➜</span>
                        <button
                            onClick={() =>
                                openPdfViewer(
                                    RESUME_BASE64,
                                    "Deepak Yannadle Resume",
                                    SOCIAL_LINKS.resume,
                                )
                            }
                            className="font-bold text-left transition-colors hover:text-white hover:underline text-[#00E5FF]"
                        >
                            View Resume
                        </button>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-green-500">➜</span>
                        <button
                            onClick={() =>
                                downloadBase64Pdf(
                                    RESUME_BASE64,
                                    "Deepak_Yannadle_Resume.pdf",
                                    SOCIAL_LINKS.resume,
                                )
                            }
                            className="font-bold text-left transition-colors hover:text-white hover:underline text-[#00E5FF]"
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
            );

            setHistory((prev) => [
                ...prev,
                { type: "input", content: cmd },
                { type: "output", content: resumeOptions },
            ]);
            return;
        }

        // Custom Handler for 'whoami'
        if (cleanCmd === "whoami") {
            const ua = navigator.userAgent;
            let os = "Unknown-System";
            if (ua.indexOf("Win") !== -1) os = "Windows-Workstation";
            else if (ua.indexOf("Mac") !== -1) os = "Macintosh-Terminal";
            else if (ua.indexOf("Linux") !== -1) os = "Linux-Machine";
            else if (ua.indexOf("Android") !== -1) os = "Android-Device";
            else if (ua.indexOf("like Mac") !== -1) os = "iOS-Device";

            const browserInfo = `visitor@${os}`;

            setHistory((prev) => [
                ...prev,
                { type: "input", content: cmd },
                { type: "output", content: browserInfo },
            ]);
            return;
        }

        let response: React.ReactNode = `Command not found: ${cleanCmd}. Type "help" for available commands.`;
        let type: TerminalLine["type"] = "error";

        if (Object.keys(COMMANDS).includes(cleanCmd)) {
            response = COMMANDS[cleanCmd];
            type = "output";
        } else if (cleanCmd === "") {
            response = "";
            type = "output";
        }

        setHistory((prev) => [
            ...prev,
            { type: "input", content: cmd },
            { type, content: response },
        ]);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleCommand(input);
            setInput("");
        }
    };

    // Drag Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        dragStartPos.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragStartPos.current.x,
                    y: e.clientY - dragStartPos.current.y,
                });
            }
        };
        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed right-6 bottom-6 z-50 p-4 rounded-full border transition-all hover:scale-110 bg-black/90 backdrop-blur-md border-[#00E5FF]/50 text-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.4)] group hover:bg-[#00E5FF]/20"
            >
                <TerminalIcon size={24} />
                <span className="absolute top-1/2 right-full py-1 px-2 mr-3 text-xs whitespace-nowrap rounded border opacity-0 transition-opacity -translate-y-1/2 pointer-events-none group-hover:opacity-100 bg-black/90 border-[#00E5FF]/30 text-[#00E5FF]">
                    Open Terminal
                </span>
            </button>
        );
    }

    return (
        <div
            className={`fixed z-50 transition-shadow duration-300 ease-in-out border border-[#00E5FF]/40 bg-black/95 backdrop-blur-xl shadow-[0_0_40px_rgba(0,229,255,0.2)] font-mono overflow-hidden
                ${isMinimized ? "h-12 w-72" : "h-[500px] w-[90vw] md:w-[650px]"}
                rounded-lg
            `}
            style={{
                bottom: "24px",
                right: "24px",
                transform: `translate(${position.x}px, ${position.y}px)`,
                cursor: isDragging ? "grabbing" : "default",
            }}
        >
            {/* CRT Overlay Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[60] bg-[length:100%_2px,3px_100%] opacity-20" />

            {/* Header */}
            <div
                className="flex justify-between items-center py-2 px-4 border-b select-none bg-[#00E5FF]/10 border-[#00E5FF]/20 cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
            >
                <div className="flex gap-2 items-center text-sm font-bold tracking-wider text-[#00E5FF]">
                    <TerminalIcon size={14} />
                    <span>user@portfolio:~</span>
                </div>
                <div className="flex gap-2 items-center">
                    <GripHorizontal size={14} className="mr-2 text-[#00E5FF]/50" />
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMinimized(!isMinimized);
                        }}
                        className="p-1 rounded transition-colors text-[#00E5FF] hover:bg-[#00E5FF]/20"
                    >
                        {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                        className="p-1 text-red-400 rounded transition-colors hover:bg-red-500/20"
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
                        <div
                            key={i}
                            className="mb-2 leading-relaxed break-words duration-300 animate-in fade-in"
                        >
                            {line.type === "input" && (
                                <span className="mr-2 font-bold text-green-500">➜ ~</span>
                            )}
                            <span
                                className={
                                    line.type === "input"
                                        ? "text-white"
                                        : line.type === "error"
                                            ? "text-red-400"
                                            : line.type === "system"
                                                ? "text-cyan-400/80 italic"
                                                : "text-[#00E5FF] drop-shadow-[0_0_2px_rgba(0,229,255,0.5)]"
                                }
                            >
                                {line.content}
                            </span>
                        </div>
                    ))}

                    <div className="flex items-center mt-2 group">
                        <span className="mr-2 font-bold text-green-500 group-focus-within:animate-pulse">
                            ➜ ~
                        </span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 placeholder-gray-600 text-white bg-transparent border-none outline-none caret-[#00E5FF]"
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
