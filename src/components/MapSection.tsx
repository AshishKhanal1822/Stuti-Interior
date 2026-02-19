import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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
                        <span>Kathmandu, Nepal</span>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625951923!2d85.29111863945312!3d27.70903994216506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
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
