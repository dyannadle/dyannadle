// React and Hooks
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// --- START RevealAnimation Component ---
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | 'fade-in'
    | 'fade-in-up'
    | 'fade-in-down'
    | 'fade-in-left'
    | 'fade-in-right'
    | 'blur-in'
    | 'zoom-in'
    | 'flip-in';
  delay?: number;
  threshold?: number;
  duration?: number;
  once?: boolean;
  style?: React.CSSProperties;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  duration = 500,
  once = true,
  style = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) setIsVisible(false);
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, [threshold, once, hasAnimated]);

  const animationClass = !isVisible
    ? 'opacity-0'
    : {
        'fade-in': 'animate-fade-in',
        'fade-in-up': 'animate-fade-in-up',
        'fade-in-down': 'animate-fade-in-down',
        'fade-in-left': 'animate-fade-in-left',
        'fade-in-right': 'animate-fade-in-right',
        'blur-in': 'animate-blur-in',
        'zoom-in': 'animate-zoom-in',
        'flip-in': 'animate-flip-in',
      }[animation] ?? 'animate-fade-in';

  return (
    <div
      ref={ref}
      className={cn(animationClass, className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        ...style,
        opacity: isVisible || !once ? 1 : 0,
        transform: isVisible || !once ? 'none' : 'translateY(20px)',
      }}
    >
      {children}
    </div>
  );
};
// --- END RevealAnimation Component ---

// Icons
import { Github, Star, StarOff, Clock, X, Image as ImageIcon, Loader2 } from 'lucide-react';

// Import project data
import { Project, projects, filters } from '../data/projectsData';

interface ModalContent {
  type: 'image' | 'description' | null;
  project: Project | null;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ModalContent;
  onViewImage: (project: Project) => void;
}

const ProjectModal: React.FC<ModalProps> = ({ isOpen, onClose, content, onViewImage }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isOpen && content.type === 'image') {
      setImageLoading(true);
      setImageError(false);
    }
  }, [isOpen, content.type]);

  if (!isOpen || !content.project) return null;
  
  const { project } = content;
  const isImage = content.type === 'image';
  const isDescription = content.type === 'description';
  const title = isImage ? `Image: ${project.title}` : `Details: ${project.title}`;

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-lg flex items-center justify-center p-4 z-[1000]"
      onClick={onClose}
    >
      <div
        className={`${
          isImage
            ? 'bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl lg:max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col'
            : 'bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b dark:border-gray-700 border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 p-2 rounded-full transition-all hover:bg-red-50 dark:hover:bg-red-900/20"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </header>

        {isImage && (
          <div className="p-4 flex items-center justify-center h-full bg-gray-50 dark:bg-gray-900 relative">
            {imageLoading && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <Loader2 className="animate-spin text-blue-600 dark:text-blue-400" size={48} />
              </div>
            )}
            {imageError ? (
              <div className="text-center p-8">
                <div className="text-red-500 mb-4">
                  <X size={64} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Failed to Load Image
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The image could not be loaded. Please try again later.
                </p>
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className={`max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all ${
                  imageLoading ? 'opacity-0' : 'opacity-100 animate-fade-in'
                }`}
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageLoading(false);
                  setImageError(true);
                }}
              />
            )}
          </div>
        )}

        {isDescription && (
          <div className="p-6 overflow-y-auto max-h-[75vh] space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg italic font-medium border-l-4 border-blue-500 pl-4 dark:text-gray-200">
              {project.description}
            </p>

            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 border-b dark:border-gray-700 pb-1">
              Key Responsibilities
            </h3>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {project.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 border-b dark:border-gray-700 pb-1">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t mt-4">
              <button
                onClick={() => onViewImage(project)}
                className="flex items-center gap-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-5 py-2.5 rounded-lg shadow-lg transition-all hover:scale-105"
              >
                <ImageIcon size={20} /> View Full Image
              </button>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:text-blue-300 px-4 py-2 rounded-lg transition-colors"
                >
                  <Github size={20} /> View Code on GitHub
                </a>
              )}
              {project.paperPublished && (
                <a
                  href={project.paperPublished}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-green-600 hover:text-green-700 bg-green-50 dark:bg-green-900/30 dark:text-green-400 dark:hover:text-green-300 px-4 py-2 rounded-lg transition-colors"
                >
                  View Published Paper
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

// --- MAIN SHOWCASE COMPONENT ---
const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState<ModalContent>({ type: null, project: null });
  const [showAllTools, setShowAllTools] = useState<Record<string, boolean>>({});

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && isModalOpen && closeModal();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isModalOpen]);

  const filtered =
    activeFilter === 'All'
      ? projects
      : activeFilter === 'Favorites'
      ? projects.filter((p) => favorites.includes(p.title))
      : projects.filter((p) => p.category.includes(activeFilter));

  const toggleFavorite = useCallback(
    (title: string) =>
      setFavorites((prev) =>
        prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
      ),
    []
  );

  const openModal = (type: 'image' | 'description', project: Project) => {
    setModal({ type, project });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModal({ type: null, project: null }), 300);
  };

  const handleViewImage = (project: Project) => {
    setModal({ type: 'image', project });
  };

  return (
    <section
      id="projects"
      className="min-h-screen pt-16 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-4xl mx-auto text-center mb-10">
          Click the "View Image" button to see project screenshots, or select a title for full details.
        </p>

        {/* Filter buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`capitalize px-4 py-2 rounded-full border-2 text-sm transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                  : 'text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filtered.map((p, idx) => (
            <RevealAnimation key={p.title} animation="fade-in-up" delay={idx * 100}>
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden group border border-gray-200 dark:border-gray-700 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500">
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.15] group-hover:rotate-[1deg]"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        'https://placehold.co/400x208/F0F4FF/4F46E5?text=Project+Image';
                    }}
                  />
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(p.title);
                  }}
                  className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 shadow-lg hover:scale-125 transition z-10"
                  aria-label="favorite"
                >
                  {favorites.includes(p.title) ? (
                    <Star size={24} fill="#FBBF24" color="#FBBF24" />
                  ) : (
                    <StarOff size={24} color="#4B5563" />
                  )}
                </button>

                <div className="p-6">
                  <h3
                    onClick={() => openModal('description', p)}
                    className="text-2xl font-bold mb-3 cursor-pointer text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {p.title}
                  </h3>
                  <div className="inline-flex items-center gap-1 mb-3 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">
                    <Clock size={14} /> {p.duration}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{p.description}</p>
                  
                  <button
                    onClick={() => openModal('image', p)}
                    className="w-full mb-4 flex items-center justify-center gap-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2.5 rounded-lg shadow-lg transition-all hover:scale-105"
                  >
                    <ImageIcon size={18} /> View Full Image
                  </button>

                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Tools Used:</h4>
                  <ul className="flex flex-wrap gap-2 text-xs">
                    {(showAllTools[p.title] ? p.tools : p.tools.slice(0, 4)).map((t, i) => (
                      <li key={i} className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
                        {t}
                      </li>
                    ))}
                    {p.tools.length > 4 && (
                      <button
                        className="text-blue-600 dark:text-blue-400 underline text-xs ml-2 mt-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowAllTools((s) => ({ ...s, [p.title]: !s[p.title] }));
                        }}
                      >
                        {showAllTools[p.title] ? 'Show Less' : `+${p.tools.length - 4} More`}
                      </button>
                    )}
                  </ul>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={modal}
          onViewImage={handleViewImage}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
