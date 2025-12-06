
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
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: parallaxRef, offset } = useParallax(0.3);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealAnimation animation="fade-in-right">
            <div className="glass bg-gradient-to-br from-white/95 to-blue-50/80 p-8 rounded-2xl shadow-md border border-blue-100/50 interactive-card">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent animate-text-shimmer">{ABOUT_DATA.title}</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6 rounded-full animate-width-expand"></div>

              <div className="space-y-4 text-muted-foreground">
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
                  <div className="glass bg-gradient-to-r from-white/95 to-blue-50/80 p-6 rounded-2xl card-hover border border-blue-100/50 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px] hover:scale-105 hover:border-primary/30 hover-shine icon-bounce">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3 animate-bounce-gentle">
                        <Briefcase className="text-blue-600" size={20} />
                      </div>
                      <a href="#experience" className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer animate-magnetic">
                        {ABOUT_DATA.cards.experience.title}
                      </a>
                    </div>
                    <p className="text-muted-foreground">
                      {ABOUT_DATA.cards.experience.content}
                    </p>
                  </div>
                </RippleEffect>
              </RevealAnimation>

              <RevealAnimation animation="fade-in-up" delay={200}>
                <RippleEffect rippleColor="rgba(147, 51, 234, 0.3)">
                  <div className="glass bg-gradient-to-r from-white/95 to-blue-50/80 p-6 rounded-2xl card-hover border border-blue-100/50 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px] hover:scale-105 hover:border-secondary/30 hover-shine icon-bounce">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-3 animate-bounce-gentle">
                        <FileCheck className="text-purple-600" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{ABOUT_DATA.cards.documentation.title}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {ABOUT_DATA.cards.documentation.content}
                    </p>
                  </div>
                </RippleEffect>
              </RevealAnimation>

              <RevealAnimation animation="fade-in-up" delay={300}>
                <RippleEffect rippleColor="rgba(99, 102, 241, 0.3)">
                  <div className="glass bg-gradient-to-r from-white/95 to-blue-50/80 p-6 rounded-2xl card-hover border border-blue-100/50 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px] hover:scale-105 hover:border-accent/30 hover-shine icon-bounce">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-3 animate-bounce-gentle">
                        <Code className="text-indigo-600" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{ABOUT_DATA.cards.testingSkills.title}</h3>
                    </div>
                    {Array.isArray(ABOUT_DATA.cards.testingSkills.content) ? (
                      ABOUT_DATA.cards.testingSkills.content.map((paragraph, idx) => (
                        <p key={idx} className={`text-muted-foreground ${idx > 0 ? 'mt-2' : ''}`}>
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-muted-foreground">{ABOUT_DATA.cards.testingSkills.content}</p>
                    )}
                    <p className="text-muted-foreground mt-2">
                    </p>
                  </div>
                </RippleEffect>
              </RevealAnimation>

              <RevealAnimation animation="fade-in-up" delay={400}>
                <RippleEffect rippleColor="rgba(20, 184, 166, 0.3)">
                  <div className="glass bg-gradient-to-r from-white/95 to-blue-50/80 p-6 rounded-2xl card-hover border border-blue-100/50 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px] hover:scale-105 hover:border-success/30 hover-shine icon-bounce">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mr-3 animate-bounce-gentle">
                        <Database className="text-teal-600" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">{ABOUT_DATA.cards.softSkills.title}</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {ABOUT_DATA.cards.softSkills.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-teal-600 mr-2 font-bold">•</span>
                          <span><strong>{item.label}:</strong> {item.description}</span>
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
