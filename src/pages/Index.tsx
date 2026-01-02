import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import RevealAnimation from "@/components/ui/RevealAnimation";
import SEO from "@/components/SEO";
import { Loader2 } from "lucide-react";

// Lazy load heavy sections
const AboutSection = React.lazy(() => import("@/components/AboutSection"));
const ExperienceSection = React.lazy(() => import("@/components/ExperienceSection"));
const EducationSection = React.lazy(() => import("@/components/EducationSection"));
const ProjectsSection = React.lazy(() => import("@/components/ProjectsSection"));
const SkillsSection = React.lazy(() => import("@/components/SkillsSection"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <Loader2 className="animate-spin text-primary" size={40} />
  </div>
);

const Index: React.FC = () => {
  return (
    <div className="overflow-x-hidden min-h-screen antialiased bg-background text-foreground">
      <SEO
        title="Deepak Yannadle | Software Tester & Developer"
        description="Portfolio of Deepak Yannadle, a Software Tester and Developer specializing in Automation, Manual Testing, and AI/ML projects."
      />
      <Navbar />
      <HeroSection />

      <div className="space-y-0">
        <Suspense fallback={<SectionLoader />}>
          <RevealAnimation animation="fade-in-up" duration={600}>
            <AboutSection />
          </RevealAnimation>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <RevealAnimation animation="fade-in-up" duration={600} delay={100}>
            <ProjectsSection />
          </RevealAnimation>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <RevealAnimation animation="fade-in-up" duration={600} delay={100}>
            <EducationSection />
          </RevealAnimation>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <RevealAnimation animation="fade-in-up" duration={600} delay={100}>
            <SkillsSection />
          </RevealAnimation>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <RevealAnimation animation="fade-in-up" duration={600} delay={100}>
            <ExperienceSection />
          </RevealAnimation>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
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
