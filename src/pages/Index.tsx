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
  const location = useLocation();

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (location.hash) {
        const targetId = location.hash.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
          const navbarHeight = 90; // Approximate height of the fixed navbar
          const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "auto"
          });
        }
      }
    };

    // Run immediately
    handleScroll();

    // Also run after a short delay to account for dynamic content/images loading
    const timer = setTimeout(handleScroll, 100);
    return () => clearTimeout(timer);
  }, [location]);

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
