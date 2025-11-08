import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building, Construction, Droplets, Shield, Route, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import buildingImage from "@/assets/building-construction.jpg";
import bridgeImage from "@/assets/bridge-construction.jpg";
import culvertImage from "@/assets/culvert-construction.jpg";
import floodImage from "@/assets/flood-mitigation.jpg";
import roadImage from "@/assets/road-construction.jpg";

const Terminology = () => {
  const terminologies = [
    {
      icon: Building,
      title: "Building Construction",
      description:
        "Comprehensive terminology covering foundations, structural systems, load-bearing walls, RCC columns, beams, slabs, masonry work, and finishing materials used in building construction projects.",
      image: buildingImage,
      delay: 0.1,
      to: "/building-construction",
    },
    {
      icon: Construction,
      title: "Bridge Construction",
      description:
        "Technical terms related to bridge engineering including abutments, piers, girders, deck systems, cable-stayed structures, suspension systems, and modern bridge construction techniques.",
      image: bridgeImage,
      delay: 0.2,
      to: "/bridge-construction",
    },
    {
      icon: Route,
      title: "Road Construction",
      description:
        "Essential vocabulary for road infrastructure including pavement layers, base course, sub-base, asphalt mixtures, concrete roads, compaction techniques, and quality control measures.",
      image: roadImage,
      delay: 0.3,
      to: "/road-construction",
    },
    {
      icon: Droplets,
      title: "Culvert Construction",
      description:
        "Specialized vocabulary for culvert systems including box culverts, pipe culverts, slab culverts, drainage solutions, inlet/outlet structures, and hydraulic design considerations.",
      image: culvertImage,
      delay: 0.4,
      to: "/culvert-construction",
    },
    {
      icon: Shield,
      title: "Flood Mitigation",
      description:
        "Essential terms for flood control infrastructure including levees, retention basins, drainage channels, flood walls, pumping stations, and sustainable urban drainage systems.",
      image: floodImage,
      delay: 0.5,
      to: "/flood-mitigation",
    },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Construction Terminology
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore comprehensive terminology across different construction domains. Each category provides detailed technical vocabulary and industry-standard definitions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {terminologies.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard key={index} delay={item.delay} className="group h-full">
                  <Link to={item.to} className="block h-full focus:outline-none">
                    <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>

                        <span className="mt-4 inline-flex items-center text-primary underline underline-offset-4 hover:no-underline transition">
                          Explore
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terminology;
