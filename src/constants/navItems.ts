export type NavItem = {
    name: string;
    path: string;
    type: "page" | "section";
};

export const navItems: NavItem[] = [
    { name: "Home", path: "/", type: "page" },
    { name: "About", path: "/about", type: "page" },
    { name: "Services", path: "services", type: "section" },
    { name: "Projects", path: "/projects", type: "page" },
    { name: "Process", path: "process", type: "section" },
    { name: "Testimonials", path: "testimonials", type: "section" },
];
