import { motion } from "framer-motion";
import { FileCheck, Users, Target, Award } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import Layout from "@/components/Layout";

const About = () => {
  const projectPhases = [
    {
      phase: "Planning & Approval",
      description: "Initial project conception, feasibility studies, DPR preparation, and obtaining necessary approvals from competent authorities.",
      icon: Target,
    },
    {
      phase: "Tendering Process",
      description: "Preparation of tender documents, NIT publication, bid submission, technical and financial evaluation, and contract award.",
      icon: FileCheck,
    },
    {
      phase: "Execution & Monitoring",
      description: "Site mobilization, construction activities, quality control, progress monitoring, and adherence to specifications and timelines.",
      icon: Users,
    },
    {
      phase: "Completion & Handover",
      description: "Final inspection, quality testing, defect rectification, project documentation, and formal handover to authorities.",
      icon: Award,
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About AICCC
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All India Centralized Construction Classification - Standardizing construction terminology and practices across the nation
          </p>
        </motion.div>

        {/* Mission Statement */}
        <GlassCard className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            To provide a comprehensive, standardized reference for construction terminology that aids engineers, contractors, government officials, and stakeholders in understanding and implementing construction projects efficiently. We aim to bridge knowledge gaps and promote best practices in the construction industry.
          </p>
        </GlassCard>

        {/* Government Project Cycle */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Government Project Construction Cycle
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projectPhases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <GlassCard key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Key Features */}
        <GlassCard>
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Standardized Terms</h3>
              <p className="text-muted-foreground">
                Comprehensive glossary of construction terminology used across India
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Visual References</h3>
              <p className="text-muted-foreground">
                High-quality images and diagrams for better understanding
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Regional Mapping</h3>
              <p className="text-muted-foreground">
                Interactive maps showing construction zones and regions
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </Layout>
  );
};

export default About;
