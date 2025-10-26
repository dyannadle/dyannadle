import React, { useEffect, useState } from "react";
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
  category: string;
  github?: string;
}

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Site Automation (Flipkart)",
    shortDescription: "Developed UI automation test suite.",
    longDescription:
      "A test automation framework using Selenium and Python to automate critical purchase workflows on Flipkart.",
    imageUrl: "/images/flipkart.png",
    duration: "2 months",
    responsibilities: [
      "Developed end-to-end UI test cases",
      "Implemented Page Object Model",
      "Generated test result reports",
    ],
    techStack: ["Selenium", "Java", "Page Object Model"],
    category: "Automation",
    github: "https://github.com/example/flipkart",
  },
  {
    id: "2",
    title: "Echoes of the Past (AI Detective Game)",
    shortDescription: "AI powered mystery role-play.",
    longDescription:
      "An interactive detective game powered by Gemini AI that dynamically generates clues and story elements.",
    imageUrl: "/images/game.png",
    duration: "2 weeks",
    responsibilities: [
      "Prompt engineering for dynamic game logic",
      "State management for storyline progression",
    ],
    techStack: ["React", "Gemini API", "JavaScript"],
    category: "AI Project",
    github: "https://github.com/example/game",
  },
];

export default function ProjectsSection() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [popup, setPopup] = useState<{
    project: Project;
    x: number;
    y: number;
  } | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("favoriteProjects");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favoriteProjects", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const filtered = sampleProjects.filter((p) =>
    (filter === "All" ? true : p.category === filter) &&
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handlePopup = (
    e: React.MouseEvent,
    project: Project
  ) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPopup({
      project,
      x: rect.left + rect.width / 2,
      y: rect.top + window.scrollY + rect.height + 10,
    });
  };

  return (
    <section className="relative py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          My Projects
        </h2>

        {/* Search + Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border dark:border-gray-700 dark:bg-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-sm"
          />

          {["All", "Automation", "AI Project"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border dark:border-gray-700 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              {/* Favorite Star */}
              <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3">
                <Star
                  size={22}
                  className={
                    favorites.includes(p.id)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-400"
                  }
                />
              </button>

              {/* Image */}
              <div onClick={(e) => handlePopup(e, p)}>
                <img src={p.imageUrl} alt={p.title} className="w-full h-48 object-cover" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold dark:text-white">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{p.shortDescription}</p>

                <div className="flex items-center text-xs text-gray-500 mt-3">
                  <Clock size={14} className="mr-1" /> {p.duration}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Popup */}
        <AnimatePresence>
          {popup && (
            <motion.div
              className="fixed z-[999] floating-popup"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{
                left: popup.x,
                top: popup.y,
                transform: "translate(-50%, 0)",
              }}
            >
              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-2xl p-5 w-[26rem]">
                <button className="absolute top-2 right-3"
                  onClick={() => setPopup(null)}
                >
                  ✕
                </button>

                <h3 className="text-xl font-bold mb-2 dark:text-white">{popup.project.title}</h3>
                <p className="text-sm dark:text-gray-300">{popup.project.longDescription}</p>

                <a
                  href={popup.project.github}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm hover:underline"
                >
                  <Github size={14} /> GitHub Repository
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
import React, { useEffect, useState } from "react";
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
  category: string;
  github?: string;
}

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Site Automation (Flipkart)",
    shortDescription: "Developed UI automation test suite.",
    longDescription:
      "A test automation framework using Selenium and Python to automate critical purchase workflows on Flipkart.",
    imageUrl: "/images/flipkart.png",
    duration: "2 months",
    responsibilities: [
      "Developed end-to-end UI test cases",
      "Implemented Page Object Model",
      "Generated test result reports",
    ],
    techStack: ["Selenium", "Java", "Page Object Model"],
    category: "Automation",
    github: "https://github.com/example/flipkart",
  },
  {
    id: "2",
    title: "Echoes of the Past (AI Detective Game)",
    shortDescription: "AI powered mystery role-play.",
    longDescription:
      "An interactive detective game powered by Gemini AI that dynamically generates clues and story elements.",
    imageUrl: "/images/game.png",
    duration: "2 weeks",
    responsibilities: [
      "Prompt engineering for dynamic game logic",
      "State management for storyline progression",
    ],
    techStack: ["React", "Gemini API", "JavaScript"],
    category: "AI Project",
    github: "https://github.com/example/game",
  },
];

export default function ProjectsSection() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [popup, setPopup] = useState<{
    project: Project;
    x: number;
    y: number;
  } | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("favoriteProjects");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favoriteProjects", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const filtered = sampleProjects.filter((p) =>
    (filter === "All" ? true : p.category === filter) &&
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handlePopup = (
    e: React.MouseEvent,
    project: Project
  ) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPopup({
      project,
      x: rect.left + rect.width / 2,
      y: rect.top + window.scrollY + rect.height + 10,
    });
  };

  return (
    <section className="relative py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          My Projects
        </h2>

        {/* Search + Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border dark:border-gray-700 dark:bg-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-sm"
          />

          {["All", "Automation", "AI Project"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border dark:border-gray-700 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              {/* Favorite Star */}
              <button onClick={() => toggleFavorite(p.id)} className="absolute top-3 right-3">
                <Star
                  size={22}
                  className={
                    favorites.includes(p.id)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-400"
                  }
                />
              </button>

              {/* Image */}
              <div onClick={(e) => handlePopup(e, p)}>
                <img src={p.imageUrl} alt={p.title} className="w-full h-48 object-cover" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold dark:text-white">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{p.shortDescription}</p>

                <div className="flex items-center text-xs text-gray-500 mt-3">
                  <Clock size={14} className="mr-1" /> {p.duration}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Popup */}
        <AnimatePresence>
          {popup && (
            <motion.div
              className="fixed z-[999] floating-popup"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{
                left: popup.x,
                top: popup.y,
                transform: "translate(-50%, 0)",
              }}
            >
              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-2xl p-5 w-[26rem]">
                <button className="absolute top-2 right-3"
                  onClick={() => setPopup(null)}
                >
                  ✕
                </button>

                <h3 className="text-xl font-bold mb-2 dark:text-white">{popup.project.title}</h3>
                <p className="text-sm dark:text-gray-300">{popup.project.longDescription}</p>

                <a
                  href={popup.project.github}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm hover:underline"
                >
                  <Github size={14} /> GitHub Repository
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
