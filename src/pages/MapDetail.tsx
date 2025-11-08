import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";

const MapDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // ---------- DATA ----------
  const mapData: Record<string, any> = {
    "amaravati-master-plan": {
      title: "Amaravati Master Plan",
      images: ["https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626077/Amaravati-concept-handbook_modified-10_obf5cm.jpg"],
      description:
        "The Amaravati Master Plan represents a comprehensive urban planning framework designed to create a world-class capital city. The plan encompasses residential zones, commercial districts, government complexes, and recreational areas, all integrated with green corridors and sustainable infrastructure.",
      features: [
        "Total area: 217 sq km of planned development",
        "Mixed-use zoning for optimal land utilization",
        "Green belt and ecological preservation zones",
        "Integrated transportation network",
        "Smart city infrastructure backbone",
      ],
      specifications: "Scale: 1:50,000 | Projection: WGS84 | Year: 2024",
      facts: ["Phase-wise development clusters", "Transit-Oriented Development nodes"],
    },
    connectivity: {
      title: "Connectivity Network",
      images: ["https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1600&h=900&fit=crop"],
      description:
        "The connectivity infrastructure ensures seamless movement across the capital city with a hierarchical road network. Primary arterials connect major districts, while secondary roads provide access to neighborhoods and tertiary roads serve local areas.",
      features: [
        "8-lane expressways connecting to major highways",
        "Ring roads for efficient traffic distribution",
        "Grade-separated junctions at major intersections",
        "Dedicated bicycle lanes and pedestrian pathways",
        "Integration with metro and bus rapid transit",
      ],
      specifications: "Total Road Length: 850 km | Lane Width: 3.5m–3.75m | Design Speed: 60–100 kmph",
      facts: ["Freight logistics spines", "City–region gateway hierarchy"],
    },
    "traffic-transportation": {
      title: "Traffic & Transportation",
      images: ["https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=1600&h=900&fit=crop"],
      description:
        "Comprehensive traffic management and public transportation system designed to minimize congestion and provide sustainable mobility options. The system integrates intelligent traffic signals, real-time monitoring, and multi-modal transport facilities.",
      features: [
        "Metro rail network covering major corridors",
        "Bus Rapid Transit System (BRTS) with dedicated lanes",
        "Intelligent Traffic Management System (ITMS)",
        "Park-and-ride facilities at transit hubs",
        "Electric vehicle charging infrastructure",
      ],
      specifications: "Metro Length: 50 km (Phase I) | Bus Stops: 200+ | Traffic Signals: 150+ ITS-enabled",
      facts: ["Multimodal interchanges", "Last-mile feeder services"],
    },
    "water-supply": {
      title: "Water Supply & Fire Fighting System",
      images: ["https://images.unsplash.com/photo-1581093458791-9d42e44dc5c0?w=1600&h=900&fit=crop"],
      description:
        "Integrated water supply network with dual systems for potable water and fire fighting. The infrastructure includes water treatment plants, overhead reservoirs, and a comprehensive distribution network ensuring 24/7 supply.",
      features: [
        "Water Treatment Plant capacity: 200 MLD",
        "Distribution network: 750 km of pipelines",
        "Fire hydrants at 100m intervals on major roads",
        "Underground reservoirs for emergency backup",
        "SCADA system for real-time monitoring",
      ],
      specifications: "Supply: 150 LPCD | Pressure: 10–17 m | Fire Flow: 40–80 LPS per hydrant",
      facts: ["DMA-based control", "Non-revenue water reduction"],
    },
    "water-waste": {
      title: "Water Waste Management",
      images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&h=900&fit=crop"],
      description:
        "Modern sewerage system with Sewage Treatment Plants (STPs) ensuring environmental sustainability. The system includes separate sewers for domestic and industrial wastewater with tertiary treatment for water recycling.",
      features: [
        "Underground gravity sewer network: 680 km",
        "Sewage Treatment Plants: 150 MLD capacity",
        "Tertiary treatment for reuse in landscaping",
        "Pumping stations with backup power",
        "Odor control and monitoring systems",
      ],
      specifications: "Collection: Separate System | Treatment: Extended Aeration + Tertiary | Reuse: 40%",
      facts: ["Reuse to parks & medians", "Effluent quality per CPCB norms"],
    },
    "storm-water": {
      title: "Storm Water Management",
      images: ["https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1600&h=900&fit=crop"],
      description:
        "Comprehensive storm drainage system designed for 1-in-50-year rainfall events. The network includes roadside drains, underground culverts, retention basins, and flood control structures.",
      features: [
        "Storm drain network: 500 km",
        "Retention basins with 5 million m³ capacity",
        "Permeable pavements in low-traffic areas",
        "Bio-swales for natural filtration",
        "Real-time flood monitoring system",
      ],
      specifications:
        "Design Storm: 50-year return period | Runoff Coefficient: 0.6–0.8 | Drainage Time: <30 min",
      facts: ["Outfall strategy to main drains", "Blue–green corridors"],
    },
    power: {
      title: "Power Distribution Network",
      images: ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&h=900&fit=crop"],
      description:
        "Reliable electrical distribution system with underground cabling in core areas and overhead lines in peripheral zones. The network is designed for 99.9% uptime with redundant supply paths.",
      features: [
        "Grid substations: 132/33 kV capacity",
        "Distribution substations: 33/11 kV",
        "Smart meters for all consumers",
        "Underground cabling in city center",
        "Integration with renewable energy sources",
      ],
      specifications: "Total Load: 800 MW | Voltage: 11/33/132 kV | Loss Target: <8%",
      facts: ["Ring main redundancy", "DG backup for critical nodes"],
    },
    "solid-waste": {
      title: "Solid Waste Management",
      images: ["https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&h=900&fit=crop"],
      description:
        "Integrated waste management system with source segregation, collection, processing, and disposal. The system includes waste-to-energy plants and material recovery facilities.",
      features: [
        "Door-to-door collection system",
        "Waste-to-energy plant: 10 MW capacity",
        "Material Recovery Facility for recyclables",
        "Composting plant for organic waste",
        "Sanitary landfill for residual waste",
      ],
      specifications: "Generation: 500 TPD | Recovery: 60% | WtE Capacity: 300 TPD | Landfill: 20%",
      facts: ["GPS-tracked routes", "Inert & leachate control"],
    },
    "gas-distribution": {
      title: "Gas Distribution Network",
      images: ["https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=1600&h=900&fit=crop"],
      description:
        "Safe and efficient natural gas distribution network for residential, commercial, and industrial consumers. The system includes pressure regulation stations and leak detection systems.",
      features: [
        "City Gate Station: 20,000 SCMD capacity",
        "Medium pressure network: 4–7 kg/cm²",
        "Low pressure distribution: 21 mbar",
        "SCADA monitoring for leak detection",
        "Emergency shut-off valves at strategic points",
      ],
      specifications: "Network Length: 250 km | Connections: 50,000+ | Supply Pressure: 4–7 kg/cm²",
      facts: ["PRS siting buffers", "CNG station coverage"],
    },
    ict: {
      title: "ICT Infrastructure",
      images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&h=900&fit=crop"],
      description:
        "Advanced ICT infrastructure supporting smart city operations with fiber optic backbone, data centers, and IoT sensor networks. The system enables real-time city management and citizen services.",
      features: [
        "Fiber optic network: 1,000 km",
        "Tier III Data Centers with redundancy",
        "City-wide WiFi in public spaces",
        "IoT sensor network for city operations",
        "Integrated Command and Control Center",
      ],
      specifications: "Bandwidth: 10 Gbps backbone | WiFi Hotspots: 500+ | IoT Sensors: 10,000+",
      facts: ["Ring fiber topology", "Smart poles & edge nodes"],
    },
    "district-cooling": {
      title: "District Cooling System",
      images: ["https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=1600&h=900&fit=crop"],
      description:
        "Energy-efficient centralized cooling system serving commercial and government buildings. The system reduces individual building energy consumption by 30–40% compared to conventional HVAC.",
      features: [
        "Central cooling plant: 50,000 TR capacity",
        "Chilled water distribution network",
        "Energy Transfer Stations in buildings",
        "Thermal energy storage for peak shaving",
        "SCADA monitoring and optimization",
      ],
      specifications: "Capacity: 50,000 TR | Distribution: 25 km network | Efficiency: COP 5.5+",
      facts: ["Demand clusters & sub-stations", "Peak-load shifting via TES"],
    },
    "safety-security": {
      title: "Safety & Security Systems",
      images: ["https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&h=900&fit=crop"],
      description:
        "Comprehensive public safety infrastructure with CCTV surveillance, emergency call boxes, and integrated emergency response systems. The network ensures citizen safety 24/7.",
      features: [
        "CCTV cameras: 2,000+ networked units",
        "Emergency call boxes at 500m intervals",
        "Integrated Command and Control Center",
        "Police stations and fire stations network",
        "Automated Number Plate Recognition (ANPR)",
      ],
      specifications: "CCTV Coverage: 90% of public areas | Response Time: <5 minutes | Monitoring: 24/7",
      facts: ["PSAP coverage", "Patrol/response routes"],
    },
    "disaster-management": {
      title: "Disaster Management Infrastructure",
      images: ["https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=1600&h=900&fit=crop"],
      description:
        "Comprehensive disaster preparedness and response infrastructure including early warning systems, evacuation routes, emergency shelters, and relief supply storage.",
      features: [
        "Early Warning System for floods and storms",
        "Designated evacuation routes and assembly points",
        "Emergency shelters: 50 locations",
        "Relief supply warehouses strategically placed",
        "Emergency Operations Center with backup power",
      ],
      specifications: "Shelter Capacity: 100,000 persons | Evacuation Routes: 15 primary corridors",
      facts: ["Hazard overlays", "Continuity nodes"],
    },
    "green-spaces": {
      title: "Green Spaces & Parks",
      images: ["https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=1600&h=900&fit=crop"],
      description:
        "Extensive network of parks, gardens, and recreational spaces ensuring 15% green cover. The system includes neighborhood parks, district parks, and a central urban forest.",
      features: [
        "Central Park: 100 hectares with water bodies",
        "Neighborhood parks within 500m of all residences",
        "Green corridors along major roads",
        "Botanical gardens and arboretum",
        "Sports complexes and playgrounds",
      ],
      specifications:
        "Total Green Space: 3,000 hectares | Trees Planted: 500,000+ | Park Access: 500m radius",
      facts: ["Green–blue integration", "Linear parks & spines"],
    },
    "social-infrastructure": {
      title: "Social Infrastructure",
      images: ["https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=1600&h=900&fit=crop"],
      description:
        "Strategic distribution of schools, hospitals, community centers, and public facilities ensuring equitable access. The planning follows international standards for service delivery.",
      features: [
        "Primary schools within 500m of all residences",
        "Secondary schools at 1 km intervals",
        "Multi-specialty hospitals: 5,000 beds",
        "Community centers in each neighborhood",
        "Public libraries and cultural centers",
      ],
      specifications: "Schools: 200+ | Hospitals: 20+ (500 beds each) | Community Centers: 50+",
      facts: ["Service radius standards", "Equitable access mapping"],
    },
  };

  const currentMap = mapData[id || ""];
  const allMapIds = Object.keys(mapData);
  const currentIndex = allMapIds.indexOf(id || "");
  const prevMapId = currentIndex > 0 ? allMapIds[currentIndex - 1] : null;
  const nextMapId = currentIndex < allMapIds.length - 1 ? allMapIds[currentIndex + 1] : null;

  if (!currentMap) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Map Not Found</h1>
          <Link to="/maps">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Maps
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // ---------- RIGHT: Shuffle cards (drag or in-card arrows) ----------
  type Card = { key: string; title: string; content: JSX.Element };
  const cards: Card[] = useMemo(() => {
    const featureList = (
      <ul className="space-y-2">
        {currentMap.features.slice(0, 6).map((f: string, i: number) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start">
            <span className="text-primary mr-2">•</span>
            {f}
          </li>
        ))}
      </ul>
    );
    const factsList = (
      <ul className="space-y-2">
        {(currentMap.facts || []).length ? (
          currentMap.facts.map((f: string, i: number) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start">
              <span className="text-primary mr-2">•</span>
              {f}
            </li>
          ))
        ) : (
          <li className="text-sm text-muted-foreground">Context-specific notes will appear here.</li>
        )}
      </ul>
    );

    return [
      { key: "overview", title: "Overview", content: <p className="text-muted-foreground">{currentMap.description}</p> },
      { key: "features", title: "Key Features", content: featureList },
      { key: "specs", title: "Specifications", content: <p className="text-sm text-muted-foreground">{currentMap.specifications}</p> },
      { key: "facts", title: "Quick Facts", content: factsList },
      {
        key: "nav",
        title: "Navigation",
        content: (
          <div className="flex gap-3">
            {prevMapId && (
              <Button variant="outline" onClick={() => navigate(`/maps/${prevMapId}`)} className="inline-flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Previous Map
              </Button>
            )}
            {nextMapId && (
              <Button variant="outline" onClick={() => navigate(`/maps/${nextMapId}`)} className="ml-auto inline-flex items-center gap-2">
                Next Map
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        ),
      },
    ];
  }, [currentMap, navigate, nextMapId, prevMapId]);

  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-6, 0, 6]);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const threshold = 120;
    if (info.offset.x > threshold && index < cards.length - 1) setIndex(index + 1);
    else if (info.offset.x < -threshold && index > 0) setIndex(index - 1);
  };

  const toPrev = () => setIndex((i) => Math.max(0, i - 1));
  const toNext = () => setIndex((i) => Math.min(cards.length - 1, i + 1));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Back */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <Link to="/maps">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Maps
            </Button>
          </Link>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: Map (sticky, half screen feel) */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:sticky lg:top-24">
            <GlassCard className="p-0 overflow-hidden">
              <div className="relative w-full h-[80vh] bg-muted">
                <img
                  src={currentMap.images[0]}
                  alt={currentMap.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://placehold.co/1600x900?text=Map+Image";
                  }}
                />
              </div>
              <div className="px-4 py-3 text-sm text-muted-foreground border-t border-border">
                <div className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{currentMap.title}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* RIGHT: Shuffle Card Stack (buttons INSIDE active card) */}
          <div className="relative">
            <div className="relative h-[80vh]">
              <AnimatePresence initial={false}>
                {cards.map((card, i) => {
                  if (i < index - 1 || i > index + 2) return null;

                  const isActive = i === index;
                  const depth = i - index; // 0,1,2...
                  const translateY = depth * 12;
                  const scale = 1 - depth * 0.04;
                  const opacity = 1 - depth * 0.18;

                  return (
                    <motion.div
                      key={card.key}
                      layout
                      drag={isActive ? "x" : false}
                      style={{ x, rotate }}
                      onDragEnd={handleDragEnd}
                      dragConstraints={{ left: 0, right: 0 }}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity, y: translateY, scale, zIndex: 100 - depth }}
                      exit={{ opacity: 0, y: -20, scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    >
                      <GlassCard className="h-full relative flex flex-col">
                        <div className="mb-2 flex items-center justify-between">
                          <h2 className="text-xl font-semibold">{card.title}</h2>
                          <span className="text-xs text-muted-foreground">
                            {index + 1} / {cards.length}
                          </span>
                        </div>

                        <div className="overflow-y-auto pr-1 custom-scrollbar flex-1">
                          {card.content}
                        </div>

                        {/* In-card arrows (bottom-right) */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={toPrev}
                            disabled={index === 0}
                            aria-label="Previous card"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={toNext}
                            disabled={index === cards.length - 1}
                            aria-label="Next card"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Swipe hint (only on first card) */}
                        {isActive && index === 0 && (
                          <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
                            Tip: drag the card left/right or use arrows →
                          </div>
                        )}
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal scrollbar styling (optional) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(148,163,184,.25); border-radius: 999px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: rgba(148,163,184,.45); }
      `}</style>
    </Layout>
  );
};

export default MapDetail;
