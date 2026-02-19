import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const tabs = [
  {
    id: "design",
    label: "Designing & Planning",
    items: [
      { num: "01", title: "Space Planning" },
      { num: "02", title: "3D Visualization" },
      { num: "03", title: "Technical Details" },
      { num: "04", title: "Cost Estimation" },
    ],
  },
  {
    id: "build",
    label: "Build (Execution)",
    items: [
      { num: "01", title: "Full Supervision" },
      { num: "02", title: "Complete Build" },
    ],
  },
  {
    id: "turnkey",
    label: "Turnkey-Project Solutions",
    items: [{ num: "01", title: "Design + Build" }],
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("design");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const activeItems = tabs.find((t) => t.id === activeTab)?.items ?? [];

  return (
    <section id="services" className="section-padding bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Services</h2>
          <p className="text-primary-foreground/60 font-body max-w-xl mx-auto">
            We create designs that add value to your property with proper project planning.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded font-body text-sm font-medium transition-all ${activeTab === tab.id
                  ? "bg-secondary text-secondary-foreground"
                  : "border border-primary-foreground/20 text-primary-foreground/70 hover:border-secondary hover:text-secondary"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Items */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {activeItems.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="border border-primary-foreground/10 rounded-lg p-6 hover:border-secondary/50 transition-all group text-center"
            >
              <span className="text-secondary font-display text-3xl font-bold">{item.num}</span>
              <h4 className="font-display text-lg mt-3">{item.title}</h4>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default ServicesSection;
