
import React from 'react';
import RevealAnimation from './ui/RevealAnimation';
import RippleEffect from './ui/RippleEffect';
import StaggeredAnimation from './ui/StaggeredAnimation';
import ParallaxSection from './ui/ParallaxSection';
import InteractiveBackground from './ui/InteractiveBackground';
import ParticleSystem from './ui/ParticleSystem';
import FloatingElements from './ui/FloatingElements';
import { Briefcase, FileCheck, Database, Code } from 'lucide-react';
import { ABOUT_DATA } from '@/data/aboutData';
import { UI_TEXT } from '@/data/uiConstants';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: parallaxRef, offset } = useParallax(0.3);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden"
    >
      {/* Particle System Background */}
      <ParticleSystem
        particleCount={50}
        colors={['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']}
        speed={0.5}
        size={{ min: 1, max: 3 }}
        className="-z-10"
      />

      {/* Floating Elements */}
      <FloatingElements
        count={8}
        className="-z-10"
      />

      {/* Animated background elements */}
      <div
        ref={parallaxRef}
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float animate-morph-blob"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      ></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200/30 rounded-full blur-xl animate-float animation-delay-500 animate-particle-float"></div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <RevealAnimation animation="fade-in-right">
            <div className="glass p-8 md:p-10 rounded-3xl shadow-2xl border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
                {ABOUT_DATA.title}
                <span className="block h-1.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></span>
              </h2>

              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                {ABOUT_DATA.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation animation="fade-in-left">
            <div className="space-y-6">
              <RevealAnimation animation="fade-in-up" delay={100}>
                <RippleEffect rippleColor="rgba(59, 130, 246, 0.3)">
                  <div className="glass p-6 md:p-8 rounded-2xl card-hover border border-white/5 hover:border-blue-400/30 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4 backdrop-blur-md">
                        <Briefcase className="text-blue-400" size={24} />
                      </div>
                      <a href="#experience" className="text-xl font-semibold text-white hover:text-blue-300 transition-colors">
                        {ABOUT_DATA.cards.experience.title}
                      </a>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {ABOUT_DATA.cards.experience.content}
                    </p>
                  </div>
                </RippleEffect>
              </RevealAnimation>

              <RevealAnimation animation="fade-in-up" delay={200}>
                <RippleEffect rippleColor="rgba(147, 51, 234, 0.3)">
                  <div className="glass p-6 md:p-8 rounded-2xl card-hover border border-white/5 hover:border-purple-400/30 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mr-4 backdrop-blur-md">
                        <FileCheck className="text-purple-400" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{ABOUT_DATA.cards.documentation.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {ABOUT_DATA.cards.documentation.content}
                    </p>
                  </div>
                </RippleEffect>
              </RevealAnimation>

              <RevealAnimation animation="fade-in-up" delay={300}>
                <RippleEffect rippleColor="rgba(99, 102, 241, 0.3)">
                  <div className="glass p-6 md:p-8 rounded-2xl card-hover border border-white/5 hover:border-indigo-400/30 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mr-4 backdrop-blur-md">
                        <Code className="text-indigo-400" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{ABOUT_DATA.cards.testingSkills.title}</h3>
                    </div>
                    <div className="text-gray-400 leading-relaxed space-y-2">
                      {Array.isArray(ABOUT_DATA.cards.testingSkills.content) ? (
                        ABOUT_DATA.cards.testingSkills.content.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))
                      ) : (
                        <p>{ABOUT_DATA.cards.testingSkills.content}</p>
                      )}
                    </div>
                  </div>
                </RippleEffect>
              </RevealAnimation>

              <RevealAnimation animation="fade-in-up" delay={400}>
                <RippleEffect rippleColor="rgba(20, 184, 166, 0.3)">
                  <div className="glass p-6 md:p-8 rounded-2xl card-hover border border-white/5 hover:border-teal-400/30 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mr-4 backdrop-blur-md">
                        <Database className="text-teal-400" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{ABOUT_DATA.cards.softSkills.title}</h3>
                    </div>
                    <ul className="space-y-3 text-gray-400">
                      {ABOUT_DATA.cards.softSkills.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-teal-400 mr-2 mt-1">•</span>
                          <span><strong className="text-gray-300">{item.label}:</strong> {item.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RippleEffect>
              </RevealAnimation>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
