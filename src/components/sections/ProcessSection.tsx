import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { processSteps as steps } from "@/constants/process";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">How We Work</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Our Process</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-secondary/30 relative overflow-hidden h-full min-h-[160px]"
            >
              <div className="absolute bottom-0 right-2">
                <span className="text-8xl font-display font-bold text-secondary/5 group-hover:text-secondary/10 transition-colors leading-none select-none">
                  {step.num}
                </span>
              </div>
              <div className="relative z-10">
                <h4 className="font-display text-xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">
                  {step.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
