// ProjectsSection.tsx
import React, { useState, useEffect } from "react";
import { Github, Clock, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  } | null>(null);

  // Close popup on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setPopup(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="relative py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {sampleProjects.map((p) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 transition"
            >
              {/* Favorite Star */}
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
                  size={22}
                  className={
                    favoriteIds.includes(p.id)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-400"
                  }
                />
              </button>

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setPopup({ project: p, type: "image" })}
                className="cursor-pointer rounded-xl overflow-hidden"
              >
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
              </motion.div>

              {/* Title */}
              <h3
                onClick={() => setPopup({ project: p, type: "details" })}
                className="mt-4 text-lg font-semibold cursor-pointer hover:text-blue-600"
              >
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {p.shortDescription}
              </p>

              <div className="flex items-center text-xs text-gray-500 mt-2">
                <Clock size={14} className="mr-1" /> {p.duration}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Popup */}
        <AnimatePresence>
          {popup && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPopup(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-lg w-full relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setPopup(null)}
                  className="absolute top-3 right-3 text-lg text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>

                {popup.type === "image" ? (
                  <img
                    src={popup.project.imageUrl}
                    className="rounded-xl max-h-[350px] w-full object-cover"
                  />
                ) : (
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{popup.project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {popup.project.longDescription}
                    </p>

                    <h4 className="font-semibold text-sm">Key Responsibilities</h4>
                    <ul className="list-disc ml-5 text-sm">
                      {popup.project.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-sm">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {popup.project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {popup.project.github && (
                      <a
                        href={popup.project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 text-sm hover:underline"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
