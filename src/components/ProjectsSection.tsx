// React and Hooks
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import RevealAnimation from './ui/RevealAnimation';
import { ProjectCardSkeleton } from './ui/ProjectCardSkeleton';

// Icons
import { Github, Star, StarOff, Clock, X, Image as ImageIcon, Loader2, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

// Import project data
import { Project, projects, filters } from '../data/projectsData';
import { UI_TEXT } from '@/data/uiConstants';

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
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [touchDistance, setTouchDistance] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && content.type === 'image') {
      setImageLoading(true);
      setImageError(false);
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  }, [isOpen, content.type]);

  // Mouse wheel zoom
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (content.type === 'image' && imageContainerRef.current?.contains(e.target as Node)) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setZoom((prev) => Math.max(0.5, Math.min(5, prev + delta)));
      }
    };

    if (isOpen && content.type === 'image') {
      window.addEventListener('wheel', handleWheel, { passive: false });
      return () => window.removeEventListener('wheel', handleWheel);
    }
  }, [isOpen, content.type]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (!isOpen || content.type !== 'image') return;

      switch (e.key) {
        case '+':
        case '=':
          e.preventDefault();
          setZoom((prev) => Math.min(5, prev + 0.25));
          break;
        case '-':
        case '_':
          e.preventDefault();
          setZoom((prev) => Math.max(0.5, prev - 0.25));
          break;
        case '0':
          e.preventDefault();
          setZoom(1);
          setPan({ x: 0, y: 0 });
          break;
        case 'ArrowUp':
          e.preventDefault();
          setPan((prev) => ({ ...prev, y: prev.y + 50 }));
          break;
        case 'ArrowDown':
          e.preventDefault();
          setPan((prev) => ({ ...prev, y: prev.y - 50 }));
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setPan((prev) => ({ ...prev, x: prev.x + 50 }));
          break;
        case 'ArrowRight':
          e.preventDefault();
          setPan((prev) => ({ ...prev, x: prev.x - 50 }));
          break;
      }
    };

    if (isOpen && content.type === 'image') {
      window.addEventListener('keydown', handleKeyboard);
      return () => window.removeEventListener('keydown', handleKeyboard);
    }
  }, [isOpen, content.type]);

  // Touch handlers for pinch-to-zoom
  const getTouchDistance = (touches: React.TouchList) => {
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      setTouchDistance(getTouchDistance(e.touches));
    } else if (e.touches.length === 1 && zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const currentDistance = getTouchDistance(e.touches);
      const scale = currentDistance / touchDistance;
      setZoom((prev) => Math.max(0.5, Math.min(5, prev * scale)));
      setTouchDistance(currentDistance);
    } else if (e.touches.length === 1 && isDragging && zoom > 1) {
      e.preventDefault();
      setPan({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTouchDistance(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(5, prev + 0.25));
  const handleZoomOut = () => setZoom((prev) => Math.max(0.5, prev - 0.25));
  const handleZoomReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  if (!isOpen || !content.project) return null;

  const { project } = content;
  const isImage = content.type === 'image';
  const title = isImage ? `${UI_TEXT.projects.modal.imagePrefix} ${project.title}` : `${UI_TEXT.projects.modal.detailsPrefix} ${project.title}`;

  console.log('Rendering Modal:', { type: content.type, project: project.title });

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 z-[9999]"
      onClick={onClose}
    >
      <div
        className={`${isImage
          ? 'glass p-2 rounded-2xl shadow-2xl max-w-4xl lg:max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col border border-white/10'
          : 'glass rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10'
          }`}
        onClick={(e) => e.stopPropagation()}
        style={{ opacity: 1, visibility: 'visible' }}
      >
        <header className="flex justify-between items-center p-6 border-b border-white/5 bg-white/5 shrink-0">
          <h2 className="text-xl font-bold text-white truncate pr-4">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label={UI_TEXT.projects.modal.close}
          >
            <X size={24} />
          </button>
        </header>

        {isImage && (
          <div
            ref={imageContainerRef}
            className="p-4 flex items-center justify-center h-full bg-black/40 relative overflow-hidden rounded-xl"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
              touchAction: 'none'
            }}
          >
            {imageLoading && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="animate-spin text-blue-400" size={48} />
              </div>
            )}
            {imageError ? (
              <div className="text-center p-8">
                <div className="text-red-500 mb-4">
                  <X size={64} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {UI_TEXT.projects.modal.failedLoad}
                </h3>
                <p className="text-gray-400">
                  {UI_TEXT.projects.modal.failedLoadDesc}
                </p>
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className={`max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl ${imageLoading ? 'opacity-0' : 'opacity-100 animate-fade-in'
                  }`}
                style={{
                  transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                  transformOrigin: 'center center',
                  userSelect: 'none',
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                }}
                draggable={false}
              />
            )}

            {/* Zoom Controls */}
            {!imageLoading && !imageError && (
              <div className="absolute bottom-6 right-6 flex flex-col gap-2 glass p-2 rounded-lg border border-white/10">
                <button
                  onClick={handleZoomIn}
                  disabled={zoom >= 5}
                  className="p-2 rounded-lg hover:bg-white/10 text-gray-300 transition-colors"
                >
                  <ZoomIn size={20} />
                </button>
                <button
                  onClick={handleZoomReset}
                  className="p-2 rounded-lg hover:bg-white/10 text-gray-300 transition-colors"
                >
                  <Maximize2 size={20} />
                </button>
                <button
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  className="p-2 rounded-lg hover:bg-white/10 text-gray-300 transition-colors"
                >
                  <ZoomOut size={20} />
                </button>
              </div>
            )}
          </div>
        )}

        {!isImage && (
          <div className="p-8 overflow-y-auto h-full space-y-6 text-gray-300 bg-black/40">
            <p className="text-lg italic font-medium border-l-4 border-blue-500 pl-4 text-white">
              {project.description}
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 border-b border-white/10 pb-2">
              {UI_TEXT.projects.card.keyResponsibilities}
            </h3>
            <ul className="list-disc list-outside ml-5 space-y-3">
              {project.responsibilities.map((r, i) => (
                <li key={i} className="leading-relaxed">{r}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 border-b border-white/10 pb-2">
              {UI_TEXT.projects.card.techStack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t, i) => (
                <span
                  key={i}
                  className="text-sm px-4 py-1.5 bg-white/5 text-blue-200 border border-white/10 rounded-full font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10 mt-6">
              <button
                onClick={() => onViewImage(project)}
                className="flex items-center gap-2 font-semibold text-black bg-white hover:bg-gray-200 px-6 py-3 rounded-full transition-all"
              >
                <ImageIcon size={20} /> {UI_TEXT.projects.card.viewImage}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};

// --- MAIN SHOWCASE COMPONENT ---
const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState(UI_TEXT.projects.filters.all);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState<ModalContent>({ type: null, project: null });
  const [showAllTools, setShowAllTools] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

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

  // Simulate loading on filter change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filtered =
    activeFilter === UI_TEXT.projects.filters.all
      ? projects
      : activeFilter === UI_TEXT.projects.filters.favorites
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
      className="relative overflow-hidden font-sans"
    >
      <div className="section-container">
        <RevealAnimation>
          <h2 className="section-title text-center text-white">
            {UI_TEXT.projects.title.split(' ')[0]} <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-amber-400">{UI_TEXT.projects.title.split(' ')[1]}</span>
          </h2>
          <p className="section-subtitle text-center mx-auto text-gray-400 mb-12">
            {UI_TEXT.projects.subtitle}
          </p>
        </RevealAnimation>

        {/* Filter buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`capitalize px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === f
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                : 'glass text-gray-300 hover:bg-white/10 hover:border-white/20'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {isLoading ? (
              // Show skeletons
              Array.from({ length: 6 }).map((_, idx) => (
                <motion.div
                  key={`skeleton-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <ProjectCardSkeleton />
                </motion.div>
              ))
            ) : (
              // Show actual projects
              filtered.map((p, idx) => (
                <RevealAnimation key={p.title} animation="fade-in-up" delay={idx * 100}>
                  <motion.div
                    className="glass-dark rounded-xl relative overflow-hidden group h-full flex flex-col hover:border-primary/50 transition-colors duration-300"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className="h-52 overflow-hidden relative cursor-pointer"
                      onClick={() => openModal('image', p)}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.15] group-hover:rotate-[1deg]"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            e.currentTarget.src = UI_TEXT.projects.images.placeholder;
                        }}
                      />
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(p.title);
                      }}
                      className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 shadow-lg hover:scale-125 transition z-10"
                      aria-label={UI_TEXT.projects.card.star}
                    >
                      {favorites.includes(p.title) ? (
                        <Star size={24} fill="#FBBF24" color="#FBBF24" />
                      ) : (
                        <StarOff size={24} color="#4B5563" />
                      )}
                    </button>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3
                        onClick={() => openModal('description', p)}
                        className="text-2xl font-bold mb-3 cursor-pointer text-white hover:text-blue-400 transition-colors"
                      >
                        {p.title}
                      </h3>
                      <div className="inline-flex items-center gap-1 mb-3 px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-semibold w-fit">
                        <Clock size={14} /> {p.duration}
                      </div>
                      <p className="text-gray-300 mb-4 text-sm flex-1">{p.description}</p>

                      <button
                        onClick={() => openModal('image', p)}
                        className="w-full mb-4 flex items-center justify-center gap-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2.5 rounded-lg shadow-lg transition-all hover:scale-105"
                      >
                        <ImageIcon size={18} /> {UI_TEXT.projects.card.viewImage}
                      </button>

                      <div className="mt-auto">
                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">{UI_TEXT.projects.card.toolsUsed}</h4>
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
                              {showAllTools[p.title] ? UI_TEXT.projects.card.showLess : `+${p.tools.length - 4} ${UI_TEXT.projects.card.showMore}`}
                            </button>
                          )}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </RevealAnimation>
              ))
            )}
          </AnimatePresence>
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
