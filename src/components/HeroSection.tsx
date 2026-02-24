import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.2,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.1,
  }),
};

const contentVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-primary">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 120, damping: 20 },
            opacity: { duration: 0.6, ease: "easeInOut" },
            scale: { duration: 1.5, ease: "easeOut" }
          }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center h-full container mx-auto px-4 md:px-8">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 20 },
              opacity: { duration: 0.5 }
            }}
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
              transition={{ delay: 0.3 }}
              className="text-primary-foreground/80 text-lg md:text-xl font-body mb-8 max-w-xl"
            >
              {slides[current].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="inline-flex bg-secondary text-secondary-foreground px-8 py-4 rounded font-body font-semibold text-lg hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/30"
              >
                Hire the Best Interior Designer
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4">
        <button
          onClick={prev}
          className="w-14 h-14 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:border-secondary transition-all rounded-full group bg-primary/20 backdrop-blur-sm"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={24} />
        </button>
        <button
          onClick={next}
          className="w-14 h-14 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:border-secondary transition-all rounded-full group bg-primary/20 backdrop-blur-sm"
        >
          <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-700 ${i === current ? "w-12 bg-secondary" : "w-6 bg-primary-foreground/20 hover:bg-primary-foreground/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

