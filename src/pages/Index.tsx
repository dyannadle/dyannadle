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
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
