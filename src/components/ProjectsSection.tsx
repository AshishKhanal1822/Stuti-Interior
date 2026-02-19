import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { image: project1, title: "Luxury Restaurant", category: "Hospitality" },
  { image: project2, title: "Modern Apartment", category: "Residential" },
  { image: project3, title: "Grand Hotel Lobby", category: "Hospitality" },
  { image: project4, title: "Spa Bathroom", category: "Residential" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Get ready to <span className="text-secondary">impress.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Our Projects as the Best Interior Designer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-500 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-secondary font-body text-sm uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-primary-foreground font-display text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded font-body font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
