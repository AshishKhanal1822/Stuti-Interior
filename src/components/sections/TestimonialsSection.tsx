import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { testimonials } from "@/constants/testimonials";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">What Our Clients Say</h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4"
            >
              <Quote className="mx-auto mb-6 text-secondary" size={48} />
              <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>
              <h4 className="font-display text-xl font-bold text-secondary">
                {testimonials[current].name}
              </h4>
              <p className="text-muted-foreground font-body text-sm">
                {testimonials[current].location}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
