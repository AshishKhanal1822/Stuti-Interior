import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/stuti-infra-logo.jpeg";

import { contactInfo } from "@/constants/contact";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getLink = (item: string) => {
    const id = item.toLowerCase();
    if (id === "home") return isHomePage ? "#home" : "/";
    return isHomePage ? `#${id}` : `/#${id}`;
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Stuti Infra" className="h-12 w-12 rounded-full object-cover" />
              <span className="font-display text-xl font-bold">
                Stuti <span className="text-secondary">Infra</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Transforming spaces into unique, stylish environments tailored to individual preferences and budgets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-secondary">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Projects"].map((item) => (
                <a
                  key={item}
                  href={getLink(item)}
                  className="text-primary-foreground/60 hover:text-secondary transition-colors font-body text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-secondary">Services</h4>
            <div className="flex flex-col gap-2">
              {["Interior Design", "Space Planning", "3D Visualization", "Turnkey Projects", "Renovation"].map((s) => (
                <span key={s} className="text-primary-foreground/60 font-body text-sm">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-secondary">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm">
                <Phone size={14} className="text-secondary" /> {contactInfo.phone}
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm">
                <Mail size={14} className="text-secondary" /> {contactInfo.email}
              </div>
              <div className="flex items-start gap-2 text-primary-foreground/60 font-body text-sm">
                <MapPin size={14} className="text-secondary mt-1 flex-shrink-0" /> {contactInfo.address}
              </div>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href={contactInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={contactInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  <Facebook size={20} />
                </a>
                {contactInfo.socials.linkedin !== "#" && (
                  <a
                    href={contactInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/60 hover:text-secondary transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                )}
                {/* TikTok icon replaced with a generic social path if needed, keeping current SVG as a placeholder or secondary social */}
                <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6">
        <p className="text-center text-primary-foreground/40 font-body text-sm">
          © 2025 Stuti Infra. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
