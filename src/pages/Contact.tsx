import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassCard from "@/components/GlassCard";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [nextUrl, setNextUrl] = useState<string>("");

  // Build _next URL (absolute) and handle ?sent=1 toast on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      // where to redirect after FormSubmit
      url.search = ""; // base clean URL
      const base = url.toString().replace(/\/?$/, ""); // normalize
      setNextUrl(`${base}?sent=1`);

      // show toast if we have sent=1
      const hasSent = new URL(window.location.href).searchParams.get("sent") === "1";
      if (hasSent) {
        setShowToast(true);
        // remove the ?sent=1 without reloading
        const clean = new URL(window.location.href);
        clean.searchParams.delete("sent");
        window.history.replaceState({}, "", clean.toString());
        // auto-hide toast
        const t = setTimeout(() => setShowToast(false), 3000);
        return () => clearTimeout(t);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    { icon: Mail, title: "Email", details: "masanamkesava@gmail.com", color: "text-primary" },
    { icon: Phone, title: "Phone", details: "9059086142", color: "text-secondary" },
    { icon: MapPin, title: "Address", details: "Mangalagiri, Andhra Pradesh", color: "text-accent" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for any queries regarding construction
            terminology or project information
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <GlassCard key={i}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-primary/10 ${info.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.details}</p>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <GlassCard>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            <form
              action="https://formsubmit.co/masanamkesava@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Hidden inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* Redirect back to this same page with ?sent=1 */}
              {nextUrl && <input type="hidden" name="_next" value={nextUrl} />}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">
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
        </div>
      </div>

      {/* ✅ Bottom-right toast shown ONLY after successful submit (via ?sent=1) */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-[9999]"
          >
            <div className="flex items-center gap-3 rounded-xl bg-green-600 text-white px-4 py-3 shadow-lg backdrop-blur-md border border-white/10">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium text-sm">
                Message sent successfully!
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mb-10 mt-4 max-w-6xl rounded-[2rem] border border-white/15 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-6 md:p-10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          <img
            src="https://res.cloudinary.com/dswrgvg3c/image/upload/v1762595674/Screenshot_2025-09-17_172233-removebg-preview_shtkbb.png"
            alt="Kesava Masanam"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/70 bg-white/30 shadow-lg"
          />
          <div className="text-center md:text-left">
            <p className="text-base md:text-lg text-foreground">
              <strong>Designed and Developed by</strong> 
            </p>
            <p>Kesava Masanam is a pro vibe coder with a passion for AI development and innovation. With deep expertise in crafting smart tools, he knows how to make AI dance to the rhythm of natural language. Always eager to share knowledge, Kesava blends tech mastery with creativity to build next-gen AI experiences.
              <br />            
            </p>
            <p className="mt-4 text-right italic text-primary text-lg md:text-xl font-signature">
              — Kesava Masanam
            </p>
            <p className="mt-4 text-right text-primary text-lg md:text-xl font-signature">
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
      </motion.footer>
    </Layout>
  );
};

export default Contact;
