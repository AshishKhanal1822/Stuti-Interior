import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: 1, title: "Analysis", desc: "Determining needs and understanding your vision." },
  { num: 2, title: "Space Planning", desc: "Developing functional diagrams and layouts." },
  { num: 3, title: "Concept Design", desc: "Creating conceptual design plans or moodboards." },
  { num: 4, title: "3D Modeling", desc: "Prototypes building, visualization & rendering." },
  { num: 5, title: "Cost Estimation", desc: "Detailed budgeting and cost planning." },
  { num: 6, title: "Execution", desc: "Execute at site as per design & specification." },
];

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
              className="bg-card rounded-lg p-8 shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-secondary/30 relative overflow-hidden"
            >
              <span className="text-6xl font-display font-bold text-muted/20 group-hover:text-secondary/20 transition-colors absolute -top-2 right-2">
                {step.num}
              </span>
              <div className="relative z-10">
                <h4 className="font-display text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-muted-foreground font-body text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
