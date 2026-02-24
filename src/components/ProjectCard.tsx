import { motion } from "framer-motion";
import { Project } from "@/constants/projects";

type ProjectCardProps = {
    project: Project;
    index: number;
    featured?: boolean;
};

const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
    return (
        <motion.div
            initial={featured ? { opacity: 0, y: 40 } : undefined}
            whileInView={featured ? { opacity: 1, y: 0 } : undefined}
            transition={featured ? { duration: 0.6, delay: index * 0.15 } : undefined}
            viewport={featured ? { once: true } : undefined}
            className={`group relative overflow-hidden rounded-xl shadow-lg cursor-pointer ${featured ? "rounded-lg" : ""
                }`}
        >
            <div className={`${featured ? "h-80" : "aspect-[4/5]"} overflow-hidden`}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className={`absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-500 flex items-end ${!featured ? "bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100" : ""
                }`}>
                <div className={`p-6 transition-transform duration-500 ${featured ? "translate-y-full group-hover:translate-y-0" : "p-8 translate-y-4 group-hover:translate-y-0"
                    }`}>
                    <p className="text-secondary font-body text-sm uppercase tracking-wider mb-1 italic">
                        {project.category}
                    </p>
                    <h3 className={`font-display font-bold ${featured ? "text-primary-foreground text-xl" : "text-white text-2xl"}`}>
                        {project.title}
                    </h3>
                    <div className="w-12 h-1 bg-secondary mt-4 transition-all duration-500 group-hover:w-full"></div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
