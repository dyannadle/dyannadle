import React, { useState } from "react";
import { Github, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

const sampleProjects = [
  {
    title: "Project One",
    description: "This is a sample project description",
    image: "/images/project1.jpg",
    github: "https://github.com/",
    time: "2 weeks",
    rating: "4.5",
  },
  {
    title: "Project Two",
    description: "This is another project description",
    image: "/images/project2.jpg",
    github: "https://github.com/",
    time: "1 month",
    rating: "4.8",
  },
];

const ProjectsSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 py-10 grid gap-6 sm:grid-cols-2">
      {sampleProjects.map((project, index) => (
        <motion.div
          key={index}
          layout
          onClick={() => toggleExpand(index)}
          className="p-5 border rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-white"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{project.description}</p>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
            <span className="flex items-center gap-1"><Clock size={16} /> {project.time}</span>
            <span className="flex items-center gap-1"><Star size={16} /> {project.rating}</span>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={18} /> View Code
          </a>

          {expandedIndex === index && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 90 }}
              className="mt-4"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg border shadow-md hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsSection;
