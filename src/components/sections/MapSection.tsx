import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { contactInfo } from "@/constants/contact";

const MapSection = () => {
    return (
        <section className="bg-muted/20">
            {/* Header */}
            <div className="container mx-auto py-12 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-3">Find Us</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                        Our <span className="text-secondary">Location</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground font-body">
                        <MapPin size={16} className="text-secondary" />
                        <span>{contactInfo.address}</span>
                    </div>
                </motion.div>
            </div>

            {/* Full-width Map attached directly above footer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-[420px] grayscale hover:grayscale-0 transition-all duration-700"
            >
                <iframe
                    src={contactInfo.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </motion.div>
        </section>
    );
};

export default MapSection;
