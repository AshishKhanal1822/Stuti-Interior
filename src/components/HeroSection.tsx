import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Transform Your Space with",
    highlight: "Interior Design",
    description: "Our passion is creating interior spaces that inspire, elevate, and seamlessly turn ordinary places into remarkable havens of comfort and beauty.",
  },
  {
    image: hero2,
    title: "Discover the Art of",
    highlight: "Creating Spaces that Inspire",
    description: "The art of harmonizing colors, textures, and materials, as we craft personalized designs tailored to your unique vision.",
  },
  {
    image: hero3,
    title: "Transform Your Space,",
    highlight: "Transform Your Life",
    description: "Let us expertly transform your space into a reflection of your unique personality and lifestyle.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center h-full container mx-auto px-4 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
              {slides[current].title}
              <br />
              <span className="text-secondary">{slides[current].highlight}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-primary-foreground/80 text-lg md:text-xl font-body mb-8 max-w-xl"
            >
              {slides[current].description}
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="inline-flex bg-secondary text-secondary-foreground px-8 py-4 rounded font-body font-semibold text-lg hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/30"
            >
              Hire the Best Interior Designer
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-3">
        <button
          onClick={prev}
          className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:border-secondary transition-all rounded"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:border-secondary transition-all rounded"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-secondary" : "w-4 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
