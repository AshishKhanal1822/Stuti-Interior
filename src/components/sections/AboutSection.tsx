import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { aboutContent } from "@/constants/about";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">About Us</p>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            {aboutContent.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img src={aboutContent.images.about1} alt="Our Mission" className="rounded-lg shadow-2xl w-full max-w-md" />
            <img
              src={aboutContent.images.about2}
              alt="Our Vision"
              className="absolute -bottom-8 -right-4 md:-right-8 w-48 md:w-64 rounded-lg shadow-2xl border-4 border-background"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-secondary font-display text-lg mb-3">Our Mission</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>
            <div>
              <h3 className="text-secondary font-display text-lg mb-3">Our Vision</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {aboutContent.vision}
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded font-body font-semibold hover:bg-primary/90 transition-colors"
            >
              More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
