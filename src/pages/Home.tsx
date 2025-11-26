import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GlassCard from "@/components/GlassCard";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-construction.jpg";

const Home = () => {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              AICCC Construction Terminology
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Amaravati Integrated Command control Center - Your comprehensive guide to construction terminology and standards
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="btn-glow">
                  Learn More
                </Button>
              </Link>
              <Link to="/maps">
                <Button size="lg" variant="outline" className="glass">
                  View Maps
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terminology Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Construction Terminology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore comprehensive terminology across different construction domains including Building, Bridge, Road, Culvert Construction, and Flood Mitigation
            </p>
            <Link to="/terminology">
              <Button size="lg" className="btn-glow">
                View All Terminology
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Government Project Cycle Overview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <GlassCard className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Government Project Construction Cycle
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Understanding the complete lifecycle of government construction projects from planning to completion, including tender processes, execution phases, quality control, and project handover procedures.
            </p>
            <Link to="/project-cycle">
              <Button size="lg" className="btn-glow">
                Explore Project Cycle
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
