import React from "react";
import { ArrowRight, Github, Download } from "lucide-react";
import RevealAnimation from "./ui/RevealAnimation";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
  className="min-h-screen flex items-center bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 -z-10" />

      {/* Floating/blurred shapes */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl -z-10 animate-float" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-pink-400/10 blur-3xl -z-10 animate-float" />
      <div className="absolute right-1/3 bottom-1/4 w-56 h-56 rounded-full bg-teal-400/10 blur-3xl -z-10 animate-float" />

      {/* Decorative shapes */}
      <div className="absolute left-10 top-20 w-12 h-12 rounded-lg border-2 rotate-12 border-blue-300/70 -z-5 animate-float" />
      <div className="absolute right-10 bottom-20 w-20 h-20 rounded-full border-2 border-purple-300/70 -z-5 animate-float" />
      <div className="absolute right-20 top-1/3 w-10 h-10 bg-gradient-to-br rounded-md from-blue-400/30 to-purple-400/30 -z-5 animate-float" />
      <div className="absolute left-20 bottom-1/2 w-8 h-8 border-2 rotate-45 border-indigo-300/70 -z-5 animate-float" />
      <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-gradient-to-br rounded-full from-indigo-400/20 to-blue-400/20 -z-5 animate-float" />

      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Role Badge */}  
          <RevealAnimation animation="fade-in-down" delay={100}>
            <div
              className="mx-auto w-full max-w-2xl py-2 px-6 mb-5 text-sm font-semibold tracking-wider text-white uppercase rounded-full shadow-lg from-blue-600/90 to-purple-600/90 bg-gradient-to-r text-center"
              role="status"
              aria-label="Role"
            >
              SOFTWARE TESTER
            </div>
          </RevealAnimation>

          {/* Avatar + Name */}
          <RevealAnimation animation="fade-in-up" delay={200}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">

              {/* Name */}
              <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 md:text-5xl lg:text-6xl">
                Hi, I'm <span className="text-blue-600">Deepak Yannadle</span>
              </h1>
            </div>
          </RevealAnimation>

          {/* Intro paragraph */}
          <RevealAnimation animation="fade-in-up" delay={300}>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl text-muted-foreground">
              I’m a passionate Software Tester who loves ensuring that software not only works but
              works flawlessly. With a strong foundation in manual testing, SDLC, STLC, and SQL, I
              specialize in creating and executing test strategies that uncover hidden issues and
              improve user experience. I’ve worked with tools like JIRA, Postman, and Selenium, and
              I’m continuously sharpening my skills in automation frameworks, cloud testing, and
              performance engineering. My goal is to blend precision in manual testing with the power
              of automation and modern QA practices to deliver high-quality, reliable, and
              user-focused software solutions.
            </p>
          </RevealAnimation>

          {/* CTA Buttons */}
          <RevealAnimation animation="fade-in-up" delay={500}>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="flex gap-2 items-center py-3 px-6 text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md transition transform hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
              >
                Contact Me
                <ArrowRight size={18} className="ml-1" />
              </a>
              <a
                href="https://github.com/dyannadle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center py-3 px-6 bg-secondary text-secondary-foreground rounded-lg shadow-md transition transform hover:bg-secondary/80 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center py-3 px-6 bg-card text-card-foreground rounded-lg border border-border shadow-md transition transform hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:-translate-y-1 hover:scale-105"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#about"
                className="py-3 px-6 rounded-lg border bg-background/80 backdrop-blur-sm border-border shadow-md transition transform hover:shadow-lg hover:-translate-y-1 hover:scale-105"
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
