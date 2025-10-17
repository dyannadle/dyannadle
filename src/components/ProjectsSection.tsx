// ProjectsSection.tsx
import React, { useState, useEffect } from "react";
import { Github, Clock, Star } from "lucide-react";

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  duration: string;
  responsibilities: string[];
  techStack: string[];
  github?: string;
  paperLink?: string;
}

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Site Automation",
    shortDescription: "Flipkart UI automation suite.",
    longDescription:
      "A Selenium-based automation project validating Flipkart shopping workflows, cart flow, and responsive design tests.",
    imageUrl: "/images/flipkart.png",
    duration: "Jan 2024 – Apr 2024",
    responsibilities: [
      "Developed end-to-end UI tests",
      "Integrated Jenkins CI",
      "Used POM for maintainability",
    ],
    techStack: ["Selenium", "Java", "TestNG"],
    github: "https://github.com/example/flipkart",
  },
  {
    id: "2",
    title: "AI Detective Game",
    shortDescription: "Text-based mystery using GPT API.",
    longDescription:
      "Interactive detective adventure where clues are generated dynamically by a language model based on player input.",
    imageUrl: "/images/game.png",
    duration: "Jul 2024 – Aug 2024",
    responsibilities: [
      "Prompt-engineered GPT responses",
      "Managed game state",
      "Deployed to Vercel",
    ],
    techStack: ["React", "OpenAI API", "TypeScript"],
    github: "https://github.com/example/game",
  },
];

export default function ProjectsSection() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [popup, setPopup] = useState<{
    project: Project;
    type: "image" | "details";
    x: number;
    y: number;
  } | null>(null);

  // close on click-outside or Esc
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".floating-popup")) setPopup(null);
    };
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setPopup(null);
    window.addEventListener("click", handle);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("click", handle);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handlePopup = (
    e: React.MouseEvent,
    project: Project,
    type: "image" | "details"
  ) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPopup({
      project,
      type,
      x: rect.left + rect.width / 2,
      y: rect.top + window.scrollY + rect.height + 10,
    });
  };

  return (
    <section className="relative py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          My Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {sampleProjects.map((p) => (
            <div
              key={p.id}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow hover:-translate-y-1 transition-transform duration-300 p-4"
            >
              {/* star */}
              <button
                onClick={() =>
                  setFavoriteIds((prev) =>
                    prev.includes(p.id)
                      ? prev.filter((id) => id !== p.id)
                      : [...prev, p.id]
                  )
                }
                className="absolute top-3 right-3"
              >
                <Star
                  size={20}
                  className={
                    favoriteIds.includes(p.id)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-400"
                  }
                />
              </button>

              {/* image */}
              <div
                onClick={(e) => handlePopup(e, p, "image")}
                className="cursor-pointer overflow-hidden rounded-xl"
              >
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* title */}
              <h3
                onClick={(e) => handlePopup(e, p, "details")}
                className="mt-4 text-lg font-semibold cursor-pointer hover:text-blue-600"
              >
                {p.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                {p.shortDescription}
              </p>
              <div className="flex items-center text-xs text-gray-500 mt-2">
                <Clock size={14} className="mr-1" /> {p.duration}
              </div>
            </div>
          ))}
        </div>

        {/* Floating popup */}
        {popup && (
          <div
            className="floating-popup fixed z-50 animate-fadeIn"
            style={{
              left: popup.x,
              top: popup.y,
              transform: "translate(-50%, 0)",
            }}
          >
            <div className="relative w-[28rem] bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
              <button
                onClick={() => setPopup(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>

              {popup.type === "image" ? (
                <img
                  src={popup.project.imageUrl}
                  alt={popup.project.title}
                  className="rounded-xl max-h-72 object-cover w-full"
                />
              ) : (
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">
                    {popup.project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {popup.project.longDescription}
                  </p>
                  <h4 className="text-sm font-semibold">Key Responsibilities</h4>
                  <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-200">
                    {popup.project.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                  <h4 className="text-sm font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {popup.project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {popup.project.github && (
                    <a
                      href={popup.project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 text-sm hover:underline"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* Tailwind animation helper */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeIn { from {opacity:0;transform:scale(0.95)} to {opacity:1;transform:scale(1)} }
.animate-fadeIn { animation: fadeIn 0.2s ease-out; }
`;
document.head.appendChild(style);
