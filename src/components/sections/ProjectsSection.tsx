import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { featuredProjects } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";

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
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} featured={true} />
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
