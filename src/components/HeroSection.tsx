import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS, PARTICLE_COLORS } from "@/data/constants";
import { HERO_DATA } from "@/data/heroData";
import { UI_TEXT } from "@/data/uiConstants";
import { ArrowRight, Github, Eye } from "lucide-react";
import RevealAnimation from "./ui/RevealAnimation";
import TypewriterText from "./ui/TypewriterText";
import RotatingTypewriter from "./ui/RotatingTypewriter";
import ParticleSystem from "./ui/ParticleSystem";
import RippleEffect from "./ui/RippleEffect";
import ParallaxSection from "./ui/ParallaxSection";
import TypingAnimation from "./ui/TypingAnimation";
import { useMousePosition } from "../hooks/useScrollAnimation";
const PdfViewerModal = React.lazy(() => import("./PdfViewerModal"));

const HeroSection: React.FC = () => {
  const mousePosition = useMousePosition();
  const [nameTyped, setNameTyped] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [resumeData, setResumeData] = useState<string>("");

  const handleResumeClick = async () => {
    try {
      if (!resumeData) {
        const module = await import("@/data/pdfs/RESUME_BASE64");
        setResumeData(module.RESUME_BASE64);
      }
      setShowResumeModal(true);
    } catch (error) {
      console.error("Failed to load resume", error);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden z-10"
      aria-label="Hero section"
    >
      {/* Particle System Background - kept for additional layer if needed, or rely on StarryBackground */}


      {/* Background gradient removed */}

      {/* Floating/blurred shapes with parallax */}
      <ParallaxSection speed={0.3} direction="up" className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl -z-10 animate-float animate-morph-blob" />
      <ParallaxSection speed={0.2} direction="down" className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-secondary/10 blur-3xl -z-10 animate-float animate-morph-blob" />

      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Role Badge */}
          <RevealAnimation animation="fade-in-down" delay={100}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-blue-500/30 text-blue-200 text-sm font-medium tracking-wide mb-8 hover:bg-white/5 transition-colors"
              role="status"
              aria-label="Role"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <div className="relative h-6 w-56 flex items-center">
                <RotatingTypewriter
                  words={HERO_DATA.roles}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseTime={2000}
                />
              </div>
            </div>
          </RevealAnimation>

          {/* Avatar + Name with Typing Animation */}
          <RevealAnimation animation="fade-in-up" delay={200}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                {UI_TEXT.hero.greeting} <br className="hidden md:block" />
                <TypewriterText
                  text={HERO_DATA.name}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-gradient-shift"
                  speed={100}
                  startDelay={500}
                />
              </h1>
            </div>
          </RevealAnimation>

          {/* Intro paragraph */}
          <RevealAnimation animation="fade-in-up" delay={300}>
            <p className="mx-auto mb-12 max-w-2xl text-lg md:text-xl text-blue-100/80 leading-relaxed font-light">
              {HERO_DATA.description}
            </p>
          </RevealAnimation>

          {/* CTA Buttons */}
          <RevealAnimation animation="fade-in-up" delay={500}>
            <div className="flex flex-wrap gap-4 justify-center">
              <RippleEffect rippleColor="rgba(255, 255, 255, 0.3)">
                <motion.a
                  href="#contact"
                  className="flex gap-2 items-center py-3 px-8 text-black bg-white rounded-full font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all hover:scale-105"
                  whileTap={{ scale: 0.95 }}
                >
                  {HERO_DATA.cta.contact}
                  <ArrowRight size={18} />
                </motion.a>
              </RippleEffect>

              <RippleEffect rippleColor="rgba(255, 255, 255, 0.1)">
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center py-3 px-8 text-white glass rounded-full hover:bg-white/10 transition-all border-white/20 hover:border-white/40"
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  {HERO_DATA.cta.github}
                </motion.a>
              </RippleEffect>

              <RippleEffect rippleColor="rgba(255, 255, 255, 0.1)">
                <motion.button
                  onClick={handleResumeClick}
                  className="flex gap-2 items-center py-3 px-8 text-white glass rounded-full hover:bg-white/10 transition-all border-white/20 hover:border-white/40 cursor-pointer"
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={18} />
                  {HERO_DATA.cta.resume}
                </motion.button>
              </RippleEffect>
            </div>
          </RevealAnimation>
        </div>
      </div>

      <React.Suspense fallback={null}>
        {showResumeModal && (
          <PdfViewerModal
            isOpen={showResumeModal}
            onOpenChange={setShowResumeModal}
            pdfUrl={resumeData}
            title="My Resume"
          />
        )}
      </React.Suspense>

    </section>
  );
};

export default HeroSection;
