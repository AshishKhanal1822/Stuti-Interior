import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

export type Project = {
    image: string;
    title: string;
    category: string;
};

export const allProjects: Project[] = [
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

export const featuredProjects = allProjects.slice(0, 4);
