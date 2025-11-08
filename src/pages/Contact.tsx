import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import GlassCard from "@/components/GlassCard";
import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@aiccc.gov.in",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 11 2345 6789",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Central Construction Division, New Delhi - 110001",
      color: "text-accent",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for any queries regarding construction
            terminology or project information
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <GlassCard key={index} delay={index * 0.1}>
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-lg bg-primary/10 ${info.color} flex-shrink-0`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {info.details}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  );
                })}
              </div>

              <GlassCard>
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">
                      Monday - Friday:
                    </strong>{" "}
                    9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong className="text-foreground">Saturday:</strong> 10:00
                    AM - 2:00 PM
                  </p>
                  <p>
                    <strong className="text-foreground">Sunday:</strong> Closed
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="glass"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="glass"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="glass"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    required
                    className="glass resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full btn-glow">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* ===== Glassmorphic Footer with Profile & Quote ===== */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mb-10 mt-4 max-w-6xl rounded-[2rem] border border-white/15 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-6 md:p-10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          {/* Image bubble */}
          <div className="relative flex-shrink-0">
            <img
              src="https://res.cloudinary.com/dswrgvg3c/image/upload/v1762595674/Screenshot_2025-09-17_172233-removebg-preview_shtkbb.png"
              alt="Kesava Masanam"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/70 bg-white/30 shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <span className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-primary to-transparent" />
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              <strong>Designed and Developed by</strong>
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground">
              <strong>Kesava Masanam</strong> is a pro vibe coder with a passion
              for AI development and innovation. With deep expertise in crafting
              smart tools, he knows how to make AI dance to the rhythm of
              natural language. Always eager to share knowledge, Kesava blends
              tech mastery with creativity to build next-gen AI experiences.
            </p>

            <p className="mt-6 text-right italic text-primary text-lg md:text-xl font-signature">
              — Kesava Masanam
            </p>
            <p className="mt-6 text-right italic text-primary text-lg md:text-xl font-signature">
              See my other works{" "}
              <a
                href="https://smartportfolio-ai.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center underline hover:text-accent transition-colors"
              >
                <ExternalLink className="w-5 h-5 ml-1" />
              </a>
            </p>
          </div>
        </div>

        {/* soft ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </motion.footer>
    </Layout>
  );
};

export default Contact;
