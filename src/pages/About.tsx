import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const About = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
                        <h1 className="text-4xl md:text-7xl font-display font-bold mb-8">
                            Designing Spaces, <span className="text-secondary">Building Dreams.</span>
                        </h1>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-muted-foreground font-body text-xl leading-relaxed mb-8">
                                Stuti Infra was founded on the principle that every space has a story to tell.
                                We are more than just designers and builders; we are curators of environments
                                that inspire, comfort, and elevate human experience.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission & Vision Detailed */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-display font-bold mb-6 text-primary flex items-center gap-4">
                                    <span className="w-12 h-[2px] bg-secondary"></span> Our Mission
                                </h2>
                                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                                    To design and deliver personalized, functional, and innovative spaces that elevate living.
                                    We believe that great design should be accessible, sustainable, and reflective of the
                                    people who inhabit it. Our commitment to excellence drives every project we undertake,
                                    ensuring that we exceed client expectations through creative solutions and meticulous craftsmanship.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-display font-bold mb-6 text-primary flex items-center gap-4">
                                    <span className="w-12 h-[2px] bg-secondary"></span> Our Vision
                                </h2>
                                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                                    To become the ultimate benchmark in the architecture and interior design industry.
                                    We aspire to be recognized globally for our design excellence, commitment to
                                    sustainability, and client-centered creativity. Our goal is to shape
                                    inspiring spaces across residential, commercial, and hospitality sectors,
                                    leaving a lasting positive impact on the built environment.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <img src={about1} alt="Craftsmanship" className="rounded-2xl shadow-xl h-80 w-full object-cover" />
                            <img src={hero1} alt="Modern Design" className="rounded-2xl shadow-xl h-80 w-full object-cover mt-8" />
                            <img src={hero2} alt="Attention to Detail" className="rounded-2xl shadow-xl h-80 w-full object-cover -mt-8" />
                            <img src={about2} alt="Finished Space" className="rounded-2xl shadow-xl h-80 w-full object-cover" />
                        </motion.div>
                    </div>

                    {/* Stats/Values Section */}
                    <div className="bg-primary text-primary-foreground rounded-[2rem] p-12 md:p-20 mb-24">
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            <div>
                                <h3 className="text-5xl font-display font-bold text-secondary mb-4">10+</h3>
                                <p className="font-body text-sm uppercase tracking-[0.2em] opacity-80">Years of Excellence</p>
                            </div>
                            <div>
                                <h3 className="text-5xl font-display font-bold text-secondary mb-4">500+</h3>
                                <p className="font-body text-sm uppercase tracking-[0.2em] opacity-80">Projects Completed</p>
                            </div>
                            <div>
                                <h3 className="text-5xl font-display font-bold text-secondary mb-4">100%</h3>
                                <p className="font-body text-sm uppercase tracking-[0.2em] opacity-80">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold mb-12">Why Choose Stuti Infra?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Expert Architects", desc: "Our team consists of highly qualified professionals with years of industry experience." },
                                { title: "Sustainable Design", desc: "We prioritize eco-friendly materials and energy-efficient solutions in every project." },
                                { title: "End-to-End Service", desc: "From concept to completion, we handle every detail so you don't have to." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                    className="p-8 border border-muted rounded-2xl hover:border-secondary transition-colors"
                                >
                                    <h4 className="text-xl font-display font-bold mb-4 text-primary">{item.title}</h4>
                                    <p className="text-muted-foreground font-body">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;
