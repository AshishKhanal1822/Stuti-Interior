import { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const allProjects = [
    { image: project1, title: "Luxury Restaurant", category: "Hospitality" },
    { image: project2, title: "Modern Apartment", category: "Residential" },
    { image: project3, title: "Grand Hotel Lobby", category: "Hospitality" },
    { image: project4, title: "Spa Bathroom", category: "Residential" },
    { image: hero1, title: "Premium Master Bedroom", category: "Residential" },
    { image: hero2, title: "Executive Office Suite", category: "Commercial" },
    { image: hero3, title: "Modern Kitchen Island", category: "Residential" },
    { image: about1, title: "Boutique Retail Space", category: "Commercial" },
    { image: about2, title: "Chic Cafe Interior", category: "Hospitality" },
    { image: project1, title: "Urban Penthouse", category: "Residential" },
    { image: project2, title: "Minimalist Studio", category: "Residential" },
    { image: project3, title: "Classic Library", category: "Residential" },
];

const Projects = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Our Complete <span className="text-secondary">Work Gallery</span>
                        </h1>
                        <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
                            Explore our extensive portfolio of residential and commercial interior design projects.
                            Each space is crafted with passion and precision.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProjects.map((project, i) => (
                            <motion.div
                                key={`${project.title}-${i}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                            >
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                                    <div className="p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-secondary font-body text-xs uppercase tracking-widest mb-2 italic">
                                            {project.category}
                                        </p>
                                        <h3 className="text-white font-display text-2xl font-bold">
                                            {project.title}
                                        </h3>
                                        <div className="w-12 h-1 bg-secondary mt-4 transition-all duration-500 group-hover:w-full"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Projects;
