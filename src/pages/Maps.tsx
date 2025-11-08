import { motion } from "framer-motion";
import { MapPin, Layers, Navigation } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import Layout from "@/components/Layout";

const Maps = () => {
  const zones = [
    { name: "Northern Zone", regions: ["Punjab", "Haryana", "Himachal Pradesh", "Jammu & Kashmir"], color: "from-blue-500 to-cyan-500" },
    { name: "Southern Zone", regions: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"], color: "from-green-500 to-emerald-500" },
    { name: "Eastern Zone", regions: ["West Bengal", "Odisha", "Bihar", "Jharkhand"], color: "from-yellow-500 to-orange-500" },
    { name: "Western Zone", regions: ["Maharashtra", "Gujarat", "Rajasthan", "Goa"], color: "from-purple-500 to-pink-500" },
    { name: "Central Zone", regions: ["Madhya Pradesh", "Chhattisgarh", "Uttarakhand"], color: "from-red-500 to-rose-500" },
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
            Regional Mapping
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore construction zones and regional classifications across India
          </p>
        </motion.div>

        {/* Zone Flowchart */}
        <div className="mb-16">
          <GlassCard className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Layers className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Construction Zone Hierarchy</h2>
            </div>
            <p className="text-muted-foreground">
              Zones → Regions → Villages - Hierarchical classification system
            </p>
          </GlassCard>

          {/* Flowchart Visualization */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid gap-6">
              {zones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${zone.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{zone.name}</h3>
                        <div className="flex flex-wrap gap-2">
                          {zone.regions.map((region, rIndex) => (
                            <span
                              key={rIndex}
                              className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                            >
                              {region}
                            </span>
                          ))}
                        </div>
                      </div>
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Village Level Classification */}
        <GlassCard className="mb-8">
          <div className="flex items-start gap-4">
            <Navigation className="w-12 h-12 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-3">Village Level Classification</h3>
              <p className="text-muted-foreground mb-4">
                Each region is further subdivided into districts and villages. Construction projects are classified and tracked at the village level for precise monitoring and resource allocation.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Districts Covered</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                  <div className="text-2xl font-bold text-secondary mb-1">6000+</div>
                  <div className="text-sm text-muted-foreground">Villages Mapped</div>
                </div>
                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="text-2xl font-bold text-accent mb-1">12000+</div>
                  <div className="text-sm text-muted-foreground">Active Projects</div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Interactive Map Placeholder */}
        <GlassCard>
          <h3 className="text-2xl font-bold mb-4 text-center">Interactive Map</h3>
          <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interactive map integration - Mapbox or Google Maps can be integrated here
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Contact admin to configure API keys for map services
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </Layout>
  );
};

export default Maps;
