// ProjectsSection.tsx
import React, { useState, useEffect } from "react";
import { Github, Clock, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Correct Project Interface
interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  duration: string;
  responsibilities: string[];
  techStack: string[];
  github?: string;
}

// ✅ Fixed Project Data (Your Data, Correctly Mapped)
const projects: Project[] = [
  {
    title: "E-commerce Site Automation (Flipkart)",
    shortDescription: "Automated core user flows of Flipkart using Selenium framework.",
    longDescription:
      "Developed a robust automation framework using Selenium and Python to validate critical business flows on the Flipkart platform.",
    duration: "2 months",
    responsibilities: [
      "Implemented Page Object Model framework.",
      "Automated product search, filters, cart, and checkout flow.",
      "Generated HTML automation reports.",
      "Managed test data in Excel.",
      "Executed regression testing runs."
    ],
    techStack: ["Selenium", "Python", "PyTest", "HTML Reports"],
    imageUrl: "/lovable-uploads/Flipkart.png",
    github: "https://github.com/dyannadle/Flipkart-Automation",
  },

  {
    title: "Echoes of the Past (AI Detective Game)",
    shortDescription: "Procedural narrative game powered by Gemini AI.",
    longDescription:
      "A detective mystery game that generates conclusions dynamically using AI based on clues collected during gameplay.",
    duration: "2 weeks",
    responsibilities: [
      "Created procedural room and clue generation system.",
      "Integrated Gemini 2 API for narrative interpretation.",
      "Designed UI & game interaction flow.",
      "Implemented text-based gameplay and logs."
    ],
    techStack: ["HTML", "JavaScript", "TailwindCSS", "Google Gemini API"],
    imageUrl: "/lovable-uploads/Echo.png",
    github: "https://github.com/dyannadle/Games",
  },

  {
    title: "Front Accounting ERP Testing",
    shortDescription: "Manual testing of ERP modules with detailed documentation.",
    longDescription:
      "Conducted structured manual testing for accounting, inventory, and payroll modules with comprehensive reporting and defect tracking.",
    duration: "2 months",
    responsibilities: [
      "Designed test plans & scripts.",
      "Performed UAT testing.",
      "Tracked bugs and verified fixes.",
      "Analyzed workflow specifications."
    ],
    techStack: ["Manual Testing", "Excel", "Bug Tracking", "UAT"],
    imageUrl: "/lovable-uploads/2b88fb76-449e-419a-aaa8-ec1ff1fb3dfd.png",
    github: "https://github.com/dyannadle/Manual-Projects",
  },

  {
    title: "Food Recipe Generation from Images",
    shortDescription: "AI model that generates recipes from food images.",
    longDescription:
      "Deep learning-based pipeline combining CNN vision encoder and RNN/NLP decoder to generate structured recipes.",
    duration: "4 months",
    responsibilities: [
      "Built CNN feature extractor model.",
      "Developed LSTM-based recipe generator.",
      "Performed dataset preprocessing and tuning."
    ],
    techStack: ["PyTorch", "Transformers", "CNN", "LSTM"],
    imageUrl: "/lovable-uploads/71a0f015-985f-4444-81ed-1937b2cd2a1d.png",
    github: "https://github.com/dyannadle/Recipe-Generator",
  },
];

export default function ProjectsSection() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [popup, setPopup] = useState<{ project: Project; type: "image" | "details" } | null>(null);

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 relative cursor-pointer"
            >
              <button
                className="absolute top-3 right-3"
                onClick={(e) => {
                  e.stopPropagation();
                  setFavoriteIds((prev) =>
                    prev.includes(p.title) ? prev.filter((id) => id !== p.title) : [...prev, p.title]
                  );
                }}
              >
                <Star
                  size={22}
                  className={
                    favoriteIds.includes(p.title)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-400"
                  }
                />
              </button>

              <div onClick={() => setPopup({ project: p, type: "image" })}>
                <img src={p.imageUrl} className="w-full h-48 rounded-xl object-cover" />
              </div>

              <h3
                className="mt-4 text-lg font-semibold hover:text-blue-600"
                onClick={() => setPopup({ project: p, type: "details" })}
              >
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{p.shortDescription}</p>

              <div className="text-xs text-gray-500 flex items-center mt-2">
                <Clock size={14} className="mr-1" /> {p.duration}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {popup && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-6"
              onClick={() => setPopup(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg shadow-2xl relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="absolute top-3 right-3 text-gray-400 text-xl" onClick={() => setPopup(null)}>
                  ✕
                </button>

                {popup.type === "image" ? (
                  <img src={popup.project.imageUrl} className="rounded-xl max-h-[380px] w-full object-cover" />
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">{popup.project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{popup.project.longDescription}</p>

                    <h4 className="font-semibold text-sm">Responsibilities</h4>
                    <ul className="list-disc ml-5 text-sm">
                      {popup.project.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-sm">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {popup.project.techStack.map((t) => (
                        <span key={t} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>

                    {popup.project.github && (
                      <a
                        href={popup.project.github}
                        target="_blank"
                        className="text-blue-600 flex items-center gap-1 text-sm"
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
