import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useSanityProjects } from "@/hooks/useSanity";
import { urlFor } from "@/lib/sanityClient";
import { allProjects } from "@/constants/projects"; // fallback

const Projects = () => {
    const { projects: sanityProjects, loading } = useSanityProjects();

    // Use Sanity data if available, otherwise fall back to local constants
    const projectsToShow = sanityProjects.length > 0
        ? sanityProjects.map((p) => ({
            image: urlFor(p.image).width(800).url(),
            title: p.title,
            category: p.category,
        }))
        : allProjects;

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

                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="aspect-[4/5] bg-muted animate-pulse rounded-xl" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectsToShow.map((project, i) => (
                                <ProjectCard key={`${project.title}-${i}`} project={project} index={i} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Projects;
