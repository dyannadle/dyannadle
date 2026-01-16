import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import RevealAnimation from "@/components/ui/RevealAnimation";
import SEO from "@/components/SEO";
import { Loader2 } from "lucide-react";

const AboutSection = React.lazy(() => import("@/components/AboutSection"));
const ExperienceSection = React.lazy(() => import("@/components/ExperienceSection"));
const EducationSection = React.lazy(() => import("@/components/EducationSection"));
const ProjectsSection = React.lazy(() => import("@/components/ProjectsSection"));
const SkillsSection = React.lazy(() => import("@/components/SkillsSection"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));

const Index: React.FC = () => {
  return (
    <div className="overflow-x-hidden min-h-screen antialiased text-foreground">
      <SEO
        title="Deepak Yannadle | Software Tester & Developer"
        description="Portfolio of Deepak Yannadle, a Software Tester and Developer specializing in Automation, Manual Testing, and AI/ML projects."
      />
      <Navbar />
      <HeroSection />

      <div className="space-y-0 relative z-10">
        <Suspense fallback={<div className="h-20" />}>
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
        </Suspense>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
