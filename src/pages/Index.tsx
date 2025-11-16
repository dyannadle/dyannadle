import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import AnimatedParticles from "@/components/AnimatedParticles";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import RevealAnimation from "@/components/ui/RevealAnimation";


const Index: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = "Deepak Yannadle | Software Tester";

    // Add a basic animation to the body on load
    document.body.classList.add("fade-in");

    return () => {
      document.body.classList.remove("fade-in");
    };
  }, []);

  return (
    <div className="overflow-x-hidden min-h-screen antialiased bg-background text-foreground">
      <AnimatedParticles />
      <Navbar />
      <HeroSection />
      <RevealAnimation animation="fade-in-up" duration={600}>
        <AboutSection />
      </RevealAnimation>
      <RevealAnimation animation="fade-in-up" duration={600} delay={100}>
        <ProjectsSection />
      </RevealAnimation>
      <RevealAnimation animation="fade-in-up" duration={600} delay={100}>
        <EducationSection />
      </RevealAnimation>
      <RevealAnimation animation="fade-in-up" duration={600} delay={100}>
        <SkillsSection />
      </RevealAnimation>
      <RevealAnimation animation="fade-in-up" duration={600} delay={100}>
        <ExperienceSection />
      </RevealAnimation>
      <RevealAnimation animation="fade-in-up" duration={600} delay={100}>
        <ContactSection />
      </RevealAnimation>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
