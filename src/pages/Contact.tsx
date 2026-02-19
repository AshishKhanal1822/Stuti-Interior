import { useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
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
                        <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Let's Start Your <span className="text-secondary">Project</span>
                        </h1>
                        <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
                            Have a vision for your space? We're here to help you bring it to life.
                            Reach out to us through any of the channels below.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-10"
                        >
                            <div className="bg-muted/30 p-8 rounded-2xl border border-muted hover:border-secondary/30 transition-colors">
                                <h3 className="text-2xl font-display font-bold mb-8">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold text-lg mb-1">Phone</h4>
                                            <p className="text-muted-foreground font-body">+91 98765 43210</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold text-lg mb-1">Email</h4>
                                            <p className="text-muted-foreground font-body">info@stutiinfra.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold text-lg mb-1">Office Address</h4>
                                            <p className="text-muted-foreground font-body leading-relaxed">
                                                123 Design Street, Creative Plaza,<br />
                                                New Delhi, India - 110001
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-muted"
                        >
                            <h3 className="text-2xl font-display font-bold mb-8">Send a Message</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-body font-medium text-primary/70 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Jane Doe"
                                            className="w-full px-5 py-4 border border-border rounded-xl bg-muted/20 font-body text-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-body font-medium text-primary/70 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="jane@example.com"
                                            className="w-full px-5 py-4 border border-border rounded-xl bg-muted/20 font-body text-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-body font-medium text-primary/70 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Project Inquiry"
                                        className="w-full px-5 py-4 border border-border rounded-xl bg-muted/20 font-body text-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-body font-medium text-primary/70 ml-1">Your Message</label>
                                    <textarea
                                        placeholder="Tell us about your project..."
                                        rows={6}
                                        className="w-full px-5 py-4 border border-border rounded-xl bg-muted/20 font-body text-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-body font-bold text-lg hover:bg-primary/95 shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    Send Inquiry
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114825663366!2d77.206512!3d28.628223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xc36768ec5181747c!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
