import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        // Direct jump to section
        const top = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top, behavior: "auto" });
      } else {
        // Fallback for slower rendering components
        const timer = setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const t = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: t, behavior: "auto" });
          }
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
