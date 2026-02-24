import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/stuti-infra-logo.jpeg";

const navItems = [
  { name: "Home", path: "/", type: "page" },
  { name: "About", path: "/about", type: "page" },
  { name: "Services", path: "services", type: "section" },
  { name: "Projects", path: "/projects", type: "page" },
  { name: "Process", path: "process", type: "section" },
  { name: "Testimonials", path: "testimonials", type: "section" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToTop = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-end gap-6 bg-primary text-primary-foreground px-8 py-2 text-sm font-body">
        <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Phone size={14} /> +977 9713309341
        </a>
        <a href="mailto:stutiinfra2@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Mail size={14} /> stutiinfra2@gmail.com
        </a>
      </div>
      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled || !isHomePage ? "top-0 bg-primary shadow-xl" : "top-0 md:top-[36px] bg-transparent"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8 py-3">
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
            <img src={logo} alt="Stuti Infra" className="h-12 w-12 rounded-full object-cover" />
            <span className="text-primary-foreground font-display text-xl font-bold tracking-wide">
              Stuti <span className="text-secondary">Infra</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.type === "page" ? (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={item.name === "Home" ? scrollToTop : undefined}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium tracking-wider uppercase font-body"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.name}
                  to={`/#${item.path}`}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault();
                      const element = document.getElementById(item.path);
                      if (element) {
                        const navbarHeight = 90;
                        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                        window.scrollTo({ top: targetPosition, behavior: "smooth" });
                        // Update hash without jump
                        window.history.pushState(null, "", `/#${item.path}`);
                      }
                    }
                  }}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium tracking-wider uppercase font-body"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden lg:inline-flex bg-secondary text-secondary-foreground px-6 py-2.5 rounded font-body text-sm font-semibold hover:bg-secondary/90 transition-colors"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-primary/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  item.type === "page" ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        setIsOpen(false);
                        if (item.name === "Home") scrollToTop({ preventDefault: () => { } } as any);
                      }}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium tracking-wider uppercase font-body py-2"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      key={item.name}
                      to={`/#${item.path}`}
                      onClick={(e) => {
                        setIsOpen(false);
                        if (isHomePage) {
                          e.preventDefault();
                          const element = document.getElementById(item.path);
                          if (element) {
                            const navbarHeight = 90;
                            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                            window.scrollTo({ top: targetPosition, behavior: "smooth" });
                            window.history.pushState(null, "", `/#${item.path}`);
                          }
                        }
                      }}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium tracking-wider uppercase font-body py-2"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <Link
                  to="/contact"
                  className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded font-body text-sm font-semibold text-center mt-2"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
