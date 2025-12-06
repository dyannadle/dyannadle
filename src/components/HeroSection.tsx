import React from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, PARTICLE_COLORS } from "@/data/constants";
import { HERO_DATA } from "@/data/heroData";
import { ArrowRight, Github, Download } from "lucide-react";
import RevealAnimation from "./ui/RevealAnimation";
import ParticleSystem from "./ui/ParticleSystem";
import RippleEffect from "./ui/RippleEffect";
import ParallaxSection from "./ui/ParallaxSection";
import { useMousePosition } from "../hooks/useScrollAnimation";
import { useLang } from "@/context/LangContext";

const HeroSection: React.FC = () => {
  const mousePosition = useMousePosition();
  const { t } = useLang();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* Particle System Background */}
      <ParticleSystem
        particleCount={80}
        colors={PARTICLE_COLORS.hero}
        speed={0.8}
        size={{ min: 1, max: 4 }}
        className="-z-10"
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 -z-10" />

      {/* Floating/blurred shapes with parallax */}
      <ParallaxSection speed={0.3} direction="up" className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl -z-10 animate-float animate-morph-blob" />
      <ParallaxSection speed={0.2} direction="down" className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl -z-10 animate-float animate-morph-blob" />
      <ParallaxSection speed={0.4} direction="left" className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-pink-400/10 blur-3xl -z-10 animate-float animate-particle-float" />
      <ParallaxSection speed={0.25} direction="right" className="absolute right-1/3 bottom-1/4 w-56 h-56 rounded-full bg-teal-400/10 blur-3xl -z-10 animate-float animate-glow-pulse" />

      {/* Decorative shapes */}
      <div className="absolute left-10 top-20 w-12 h-12 rounded-lg border-2 rotate-12 border-blue-300/70 -z-5 animate-float animate-border-dance" />
      <div className="absolute right-10 bottom-20 w-20 h-20 rounded-full border-2 border-purple-300/70 -z-5 animate-float animate-bounce-gentle" />
      <div className="absolute right-20 top-1/3 w-10 h-10 bg-gradient-to-br rounded-md from-blue-400/30 to-purple-400/30 -z-5 animate-float animate-magnetic" />
      <div className="absolute left-20 bottom-1/2 w-8 h-8 border-2 rotate-45 border-indigo-300/70 -z-5 animate-float animate-slide-in-bounce" />
      <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-gradient-to-br rounded-full from-indigo-400/20 to-blue-400/20 -z-5 animate-float animate-morph-blob" />

      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Role Badge */}
          <RevealAnimation animation="fade-in-down" delay={100}>
            <div
              className="mx-auto w-full max-w-2xl py-2 px-6 mb-5 text-sm font-semibold tracking-wider text-white uppercase rounded-full shadow-lg from-blue-600/90 to-purple-600/90 bg-gradient-to-r text-center"
              role="status"
              aria-label="Role"
            >
              {HERO_DATA.role}
            </div>
          </RevealAnimation>

          {/* Avatar + Name */}
          <RevealAnimation animation="fade-in-up" delay={200}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">

              {/* Name */}
              <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 md:text-5xl lg:text-6xl">
                Hi, I'm <span className="text-blue-600">{HERO_DATA.name}</span>
              </h1>
            </div>
          </RevealAnimation>

          {/* Intro paragraph */}
          <RevealAnimation animation="fade-in-up" delay={300}>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl text-muted-foreground">
              {HERO_DATA.description}
            </p>
          </RevealAnimation>

          {/* CTA Buttons */}
          <RevealAnimation animation="fade-in-up" delay={500}>
            <div className="flex flex-wrap gap-4 justify-center">
              <RippleEffect rippleColor="rgba(255, 255, 255, 0.3)">
                <motion.a
                  href="#contact"
                  className="flex gap-2 items-center py-3 px-6 text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md transition-colors hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {HERO_DATA.cta.contact}
                  <ArrowRight size={18} className="ml-1" />
                </motion.a>
              </RippleEffect>
              <RippleEffect rippleColor="rgba(255, 255, 255, 0.2)">
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center py-3 px-6 bg-gray-900 text-white rounded-lg shadow-md transition-colors hover:bg-gray-800 hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                  {HERO_DATA.cta.github}
                </motion.a>
              </RippleEffect>
              <RippleEffect rippleColor="rgba(59, 130, 246, 0.3)">
                <motion.a
                  href={SOCIAL_LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center py-3 px-6 bg-white text-gray-800 rounded-lg border shadow-md transition-colors hover:bg-gray-50 hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                  {HERO_DATA.cta.resume}
                </motion.a>
              </RippleEffect>
              <RippleEffect rippleColor="rgba(59, 130, 246, 0.2)">
                <motion.a
                  href="#about"
                  className="flex items-center justify-center py-3 px-6 rounded-lg border bg-white/80 backdrop-blur-sm border-gray-200 shadow-md transition-colors hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {HERO_DATA.cta.learnMore}
                </motion.a>
              </RippleEffect>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
