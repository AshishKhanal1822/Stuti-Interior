import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "I am amazed by the transformation that Stuti Infra brought to my space. They took a dull and outdated space and turned it into a modern and inviting area that my family and I love spending time in.",
  },
  {
    name: "Rahul Gupta",
    location: "Delhi",
    text: "Working with Stuti Infra was an absolute pleasure! Their team truly understood my vision and transformed my space into a stunning and functional environment. The attention to detail exceeded my expectations.",
  },
  {
    name: "Anita Patel",
    location: "Ahmedabad",
    text: "I cannot express how thrilled I am with the results of my home renovation by Stuti Infra. From the initial consultation to the final reveal, their team guided me through every step with ease.",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    text: "Stuti Infra exceeded my expectations in every way possible. Their team's creativity and expertise in space planning and design transformed our restaurant into a stylish and functional space.",
  },
];

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
