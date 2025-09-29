import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// 💡 Idea-based components (placeholders – add when ready)
import HoverCards from "@/components/ui/HoverCards";       // Idea 5
import ContactForm from "@/components/ui/ContactForm";     // Idea 6
import Testimonials from "@/components/ui/Testimonials";   // Idea 10
import TerminalAbout from "@/components/ui/TerminalAbout"; // Idea 13
import GameHub from "@/components/ui/GameHub";             // Idea 18

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
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />

      {/* Extra idea-based sections */}
      <HoverCards />        {/* Idea 5 */}
      <ContactForm />       {/* Idea 6 */}
      <Testimonials />      {/* Idea 10 */}
      <TerminalAbout />     {/* Idea 13 */}
      <GameHub />           {/* Idea 18 */}

      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
