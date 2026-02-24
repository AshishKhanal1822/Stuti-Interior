import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^(98|97)\d{8}$/, "Phone must be 10 digits starting with 98 or 97"),
    subject: z.string().min(3, "Subject must be at least 3 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: data.name,
                    full_name: data.name,
                    email: data.email,
                    phone: data.phone,
                    subject: data.subject,
                    message: data.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            toast.success("Message sent successfully! We'll get back to you soon.");
            reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast.error("Failed to send message. Please email us directly at info@stutiinfra.com");
        }
    };

    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Let's Start Your <span className="text-secondary">Project</span>
                        </h1>
                        <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
                            Have a vision for your space? We're here to help you bring it to life.
                            Reach out to us through any of the channels below.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
                        {/* Contact Info */}
                        <div className="space-y-10">
                            <div className="bg-muted/30 p-8 rounded-2xl border border-muted hover:border-secondary/30 transition-colors">
                                <h3 className="text-2xl font-display font-bold mb-8">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold text-lg mb-1">Phone</h4>
                                            <p className="text-muted-foreground font-body">+977 9713309341</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold text-lg mb-1">Email</h4>
                                            <p className="text-muted-foreground font-body">stutiinfra2@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold text-lg mb-1">Office Address</h4>
                                            <p className="text-muted-foreground font-body leading-relaxed">
                                                Lagankhel Lalitpur, Nepal
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-muted">
                            <h3 className="text-2xl font-display font-bold mb-8">Send a Message</h3>
                            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-body font-medium text-primary/70 ml-1">Full Name</label>
                                        <input
                                            {...register("name")}
                                            type="text"
                                            placeholder="Jane Doe"
                                            className={`w-full px-5 py-4 border rounded-xl bg-muted/20 font-body text-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all ${errors.name ? "border-destructive" : "border-border"}`}
                                        />
                                        {errors.name && <p className="text-destructive text-xs ml-1 mt-1">{errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-body font-medium text-primary/70 ml-1">Email Address</label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            placeholder="jane@example.com"
                                            className={`w-full px-5 py-4 border rounded-xl bg-muted/20 font-body text-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all ${errors.email ? "border-destructive" : "border-border"}`}
                                        />
                                        {errors.email && <p className="text-destructive text-xs ml-1 mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-body font-medium text-primary/70 ml-1">Phone Number</label>
                                        <input
                                            {...register("phone")}
                                            type="tel"
                                            placeholder="98XXXXXXXX"
                                            className={`w-full px-5 py-4 border rounded-xl bg-muted/20 font-body text-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all ${errors.phone ? "border-destructive" : "border-border"}`}
                                        />
                                        {errors.phone && <p className="text-destructive text-xs ml-1 mt-1">{errors.phone.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-body font-medium text-primary/70 ml-1">Subject</label>
                                        <input
                                            {...register("subject")}
                                            type="text"
                                            placeholder="Project Inquiry"
                                            className={`w-full px-5 py-4 border rounded-xl bg-muted/20 font-body text-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all ${errors.subject ? "border-destructive" : "border-border"}`}
                                        />
                                        {errors.subject && <p className="text-destructive text-xs ml-1 mt-1">{errors.subject.message}</p>}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-body font-medium text-primary/70 ml-1">Your Message</label>
                                    <textarea
                                        {...register("message")}
                                        placeholder="Tell us about your project..."
                                        rows={6}
                                        className={`w-full px-5 py-4 border rounded-xl bg-muted/20 font-body text-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                                    />
                                    {errors.message && <p className="text-destructive text-xs ml-1 mt-1">{errors.message.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-body font-bold text-lg hover:bg-primary/95 shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
                                >
                                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Map */}
                    <div
                        className="w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8480285290725!2d85.32023319999999!3d27.660173199999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x624486311357dfb9%3A0xd3528e5cd3f0cbc1!2sBusiness%20Booster%20Nepal!5e0!3m2!1sen!2snp!4v1771492697448!5m2!1sen!2snp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </main >

            <Footer />
        </div >
    );
};

export default Contact;
