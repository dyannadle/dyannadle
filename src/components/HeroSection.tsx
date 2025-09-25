import React from "react";
import { ArrowRight, Github, Download, ChevronDown } from "lucide-react";
import RevealAnimation from "./ui/RevealAnimation";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="flex overflow-hidden relative items-center pt-20 pb-16 min-h-screen"
    >
      {/* Enhanced background with multiple colors and particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 -z-10"></div>

      {/* Animated floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl -z-10 animate-float animation-delay-500"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-pink-400/10 blur-3xl -z-10 animate-float animation-delay-700"></div>
      <div className="absolute right-1/3 bottom-1/4 w-56 h-56 rounded-full bg-teal-400/10 blur-3xl -z-10 animate-float animation-delay-300"></div>

      {/* Enhanced decorative geometric shapes */}
      <div className="absolute left-10 top-20 w-12 h-12 rounded-lg border-2 rotate-12 border-blue-300/70 -z-5 animate-float"></div>
      <div className="absolute right-10 bottom-20 w-20 h-20 rounded-full border-2 border-purple-300/70 -z-5 animate-float animation-delay-500"></div>
      <div className="absolute right-20 top-1/3 w-10 h-10 bg-gradient-to-br rounded-md from-blue-400/30 to-purple-400/30 -z-5 animate-float animation-delay-700"></div>
      <div className="absolute left-20 bottom-1/2 w-8 h-8 border-2 rotate-45 border-indigo-300/70 -z-5 animate-float animation-delay-200"></div>
      <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-gradient-to-br rounded-full from-indigo-400/20 to-blue-400/20 -z-5 animate-float animation-delay-600"></div>

      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          <RevealAnimation animation="fade-in-down" delay={100}>
            <div className="inline-block flex justify-center items-center py-2 px-6 mb-5 text-xs font-medium tracking-wider text-white uppercase bg-gradient-to-r rounded-full shadow-lg from-blue-600/90 to-purple-600/90">
              SOFTWARE TESTER
            </div>
          </RevealAnimation>

          <RevealAnimation animation="fade-in-up" delay={200}>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-blue-600">Deepak Yannadle</span>
            </h1>
          </RevealAnimation>

          <RevealAnimation animation="fade-in-up" delay={300}>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl text-muted-foreground">
              A passionate software tester with expertise in manual testing,
              SDLC, STLC, and SQL. Skilled in designing and executing
              comprehensive test strategies to ensure software reliability,
              functionality, and performance. Committed to delivering
              high-quality solutions through meticulous defect analysis, test
              automation learning, and continuous process improvement.
            </p>
          </RevealAnimation>

          <RevealAnimation animation="fade-in-up" delay={500}>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="flex gap-2 items-center py-3 px-6 text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md transition-all duration-300 transform hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:scale-105 hover:translate-y-[-3px]"
              >
                Contact Me
                <ArrowRight size={18} className="ml-1 animate-pulse" />
              </a>
              <a
                href="https://github.com/dyannadle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center py-3 px-6 bg-gray-900 text-white rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-800 hover:shadow-lg hover:scale-105 hover:translate-y-[-3px]"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://drive.google.com/file/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center py-3 px-6 bg-white rounded-lg border shadow-md transition-all duration-300 transform hover:bg-gray-50 hover:shadow-lg hover:scale-105 border-foreground/10 hover:translate-y-[-3px]"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#about"
                className="py-3 px-6 rounded-lg border shadow-md transition-all duration-300 transform hover:shadow-lg hover:scale-105 bg-white/80 backdrop-blur-sm border-foreground/10 hover:translate-y-[-3px]"
              >
                Learn More
              </a>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
