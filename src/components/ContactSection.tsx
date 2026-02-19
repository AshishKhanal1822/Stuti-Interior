import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Contact Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-secondary" size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold mb-1">Phone</h4>
                <p className="text-muted-foreground font-body">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-secondary" size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold mb-1">Email</h4>
                <p className="text-muted-foreground font-body">info@stutiinfra.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-secondary" size={20} />
              </div>
              <div>
                <h4 className="font-display font-bold mb-1">Address</h4>
                <p className="text-muted-foreground font-body">India</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-border rounded bg-transparent font-body text-sm focus:border-secondary focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-border rounded bg-transparent font-body text-sm focus:border-secondary focus:outline-none transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-border rounded bg-transparent font-body text-sm focus:border-secondary focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 border border-border rounded bg-transparent font-body text-sm focus:border-secondary focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground py-3 rounded font-body font-semibold hover:bg-secondary/90 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
