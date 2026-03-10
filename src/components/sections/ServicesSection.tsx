import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

import { serviceTabs as localTabs } from "@/constants/services";
import { useSanityServices } from "@/hooks/useSanity";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("furnishing");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { services: sanityTabs, loading } = useSanityServices();
  const tabs = sanityTabs.length > 0
    ? sanityTabs.map(s => ({
      id: s.id.current,
      label: s.label,
      items: s.items
    }))
    : localTabs;

  // Set default active tab if sanity data loads and activeTab isn't in it
  useEffect(() => {
    if (tabs.length > 0 && !tabs.find(t => t.id === activeTab)) {
      setActiveTab(tabs[0].id);
    }
  }, [tabs, activeTab]);

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
          className={`grid gap-6 max-w-5xl mx-auto ${activeItems.length === 6
            ? "grid-cols-1 md:grid-cols-3"
            : activeItems.length === 5 || activeItems.length === 4
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            }`}
        >
          {activeItems.map((item, i) => (
            <motion.div
              key={item.num || i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`border border-primary-foreground/10 rounded-lg p-6 hover:border-secondary/50 transition-all group text-center ${activeItems.length === 5 && i === 4
                ? "md:col-span-2 md:max-w-sm md:mx-auto w-full"
                : ""
                }`}
            >
              <span className="text-secondary font-display text-3xl font-bold">{item.num}</span>
              <h4 className="font-display text-lg font-bold mt-3 group-hover:text-secondary transition-colors duration-300">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
