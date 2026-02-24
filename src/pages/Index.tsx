import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/layout/Footer";

import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { LAYOUT_CONSTANTS } from "@/constants/layout";

const Index = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (location.hash) {
        const targetId = location.hash.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
          const navbarHeight = LAYOUT_CONSTANTS.NAVBAR_HEIGHT;
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
