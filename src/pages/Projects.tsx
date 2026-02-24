import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { allProjects } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Our Complete <span className="text-secondary">Work Gallery</span>
                        </h1>
                        <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
                            A collection of our completed furnishing and infrastructure
                            projects delivered with precision and quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProjects.map((project, i) => (
                            <ProjectCard key={`${project.title}-${i}`} project={project} index={i} />
                        ))}
                    </div>
                </div>
            </main >

            <Footer />
        </div >
    );
};

export default Projects;
