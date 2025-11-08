import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Network,
  Car,
  Droplets,
  Trash2,
  CloudRain,
  Zap,
  Recycle,
  Flame,
  Cpu,
  Snowflake,
  Shield,
  AlertTriangle,
  Map,
  ArrowRight,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import Layout from "@/components/Layout";

const Maps = () => {
  const infrastructureCategories = [
    {
      id: "amaravati-master-plan",
      icon: Map,
      title: "Amaravati Master Plan",
      description: "Comprehensive master plan layout for the capital city development with zoning and land use patterns.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "connectivity",
      icon: Network,
      title: "Connectivity",
      description: "Road networks, highways, and transportation corridors connecting different zones of the city.",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "traffic-transportation",
      icon: Car,
      title: "Traffic & Transportation",
      description: "Traffic management systems, public transit routes, and transportation infrastructure.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "water-supply",
      icon: Droplets,
      title: "Water Supply & Fire Fighting System",
      description: "Integrated water distribution network and fire hydrant systems for emergency response.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: "water-waste",
      icon: Droplets,
      title: "Water Waste Management",
      description: "Sewerage systems, wastewater treatment plants, and drainage infrastructure.",
      color: "from-teal-500 to-green-600",
    },
    {
      id: "storm-water",
      icon: CloudRain,
      title: "Storm Water Management",
      description: "Storm drain networks, retention basins, and flood control systems.",
      color: "from-slate-500 to-blue-700",
    },
    {
      id: "power",
      icon: Zap,
      title: "Power",
      description: "Electrical grid, substations, transmission lines, and distribution networks.",
      color: "from-amber-500 to-yellow-600",
    },
    {
      id: "solid-waste",
      icon: Trash2,
      title: "Solid Waste Management",
      description: "Waste collection routes, transfer stations, and disposal facilities.",
      color: "from-lime-500 to-green-600",
    },
    {
      id: "gas-distribution",
      icon: Flame,
      title: "Gas Distribution",
      description: "Natural gas pipeline network and distribution infrastructure.",
      color: "from-orange-500 to-red-600",
    },
    {
      id: "ict",
      icon: Cpu,
      title: "ICT (Information & Communication Technology)",
      description: "Fiber optic networks, data centers, and smart city infrastructure.",
      color: "from-violet-500 to-purple-600",
    },
    {
      id: "district-cooling",
      icon: Snowflake,
      title: "District Cooling",
      description: "Centralized cooling system for efficient energy distribution.",
      color: "from-sky-500 to-cyan-600",
    },
    {
      id: "safety-security",
      icon: Shield,
      title: "Safety & Security",
      description: "Surveillance systems, emergency services, and public safety infrastructure.",
      color: "from-red-500 to-rose-600",
    },
    {
      id: "disaster-management",
      icon: AlertTriangle,
      title: "Disaster Management",
      description: "Emergency response systems, evacuation routes, and disaster preparedness infrastructure.",
      color: "from-orange-600 to-red-700",
    },
    {
      id: "green-spaces",
      icon: Building2,
      title: "Green Spaces & Parks",
      description: "Public parks, recreational areas, and urban green belt planning.",
      color: "from-green-600 to-emerald-700",
    },
    {
      id: "social-infrastructure",
      icon: Building2,
      title: "Social Infrastructure",
      description: "Schools, hospitals, community centers, and public facilities distribution.",
      color: "from-blue-600 to-indigo-700",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Infrastructure Maps
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore comprehensive infrastructure planning maps for Amaravati Capital City
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infrastructureCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/maps/${category.id}`}>
                  <GlassCard className="h-full group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {category.description}
                        </p>
                        <span className="inline-flex items-center text-primary text-sm font-medium">
                          View Map
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard className="text-center">
            <h3 className="text-2xl font-bold mb-3">Interactive Infrastructure Planning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each infrastructure system is carefully planned to support sustainable urban development
              and ensure efficient service delivery to all residents of Amaravati.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Maps;
