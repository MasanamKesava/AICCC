import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X
} from "lucide-react";
import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";

const MapDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // --- Replace images with your Cloudinary URLs when ready ---
  const mapData: Record<
    string,
    {
      title: string;
      images: string[];           // first is shown
      description: string;
      features: string[];
      specifications: string;
    }
  > = {
    "amaravati-master-plan": {
      title: "Amaravati Master Plan",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626314/Amaravati-concept-handbook_modified-10_k9at5y.jpg",
      ],
      description:
        "Comprehensive master plan integrating land-use, mobility, utilities, blue–green networks and government districts.",
      features: [
        "217 sq km planned development",
        "Mixed-use & TOD nodes",
        "Green belt & ecological buffers",
        "Integrated multimodal network",
        "Smart city backbone (ICC/IoT)"
      ],
      specifications: "Scale 1:50,000 · Projection WGS84 · 2024",
    },

    connectivity: {
      title: "Connectivity",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626077/Amaravati-concept-handbook_modified-11_hpsvjh.jpg",
      ],
      description:
        "Hierarchical road and transit connectivity stitching regional gateways, CBDs, neighborhoods and logistics nodes.",
      features: [
        "8-lane urban expressways",
        "Primary/secondary/tertiary grid",
        "Ring & radial corridors",
        "Transit hubs with PnR",
        "Bicycle + pedestrian network"
      ],
      specifications: "Design speed 60–100 km/h · Lane 3.5–3.75m",
    },

    "traffic-transportation": {
      title: "Traffic & Transportation",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626076/Amaravati-concept-handbook_modified-16_kgiqio.jpg",
      ],
      description:
        "Multi-modal mobility with metro, BRTS, city buses and ITS for safe and efficient people movement.",
      features: [
        "Metro corridors (Phase I 50 km)",
        "BRTS dedicated lanes",
        "ITS: adaptive signals & ATMS",
        "EV charging network",
        "Park-and-ride facilities"
      ],
      specifications: "Stops 200+ · ITS signals 150+",
    },

    "water-supply": {
      title: "Water Supply & Fire Fighting System",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626077/Amaravati-concept-handbook_modified-21_tyqkik.jpg",
      ],
      description:
        "Potable water network with treatment plants, service reservoirs and hydrant grid for firefighting.",
      features: [
        "WTP capacity 200 MLD",
        "750 km distribution network",
        "Hydrants every ~100m on arterials",
        "UGR + ESR redundancy",
        "SCADA-based monitoring"
      ],
      specifications: "Supply 150 LPCD · Pressure 10–17 m",
    },

    "water-waste": {
      title: "Water Waste Management",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626076/Amaravati-concept-handbook_modified-24_wy21ly.jpg",
      ],
      description:
        "Separate sewerage with STPs and tertiary reuse for landscaping and non-potable demand.",
      features: [
        "680 km gravity sewers",
        "STPs total 150 MLD",
        "Tertiary reuse (40%)",
        "Pumping stations with backup",
        "Odor control systems"
      ],
      specifications: "Extended aeration + tertiary treatment",
    },

    "storm-water": {
      title: "Storm Water Management",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626076/Amaravati-concept-handbook_modified-27_irphr8.jpg",
      ],
      description:
        "City-wide drainage for 1-in-50-year storms using roadside drains, culverts, basins and bio-swales.",
      features: [
        "500 km storm drain network",
        "Retention/detention basins",
        "Permeable pavements (select)",
        "Bio-swales & green infrastructure",
        "Real-time flood monitoring"
      ],
      specifications: "Return period 50-yr · Target drain time <30 min",
    },

    power: {
      title: "Power",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626076/Amaravati-concept-handbook_modified-31_mk64os.jpg",
      ],
      description:
        "Reliable electrical distribution via grid and local substations, underground cabling in core areas.",
      features: [
        "132/33 kV grid substations",
        "33/11 kV distribution substations",
        "Smart metering for consumers",
        "UG cabling in CBD",
        "RE integration & N-1 reliability"
      ],
      specifications: "Total load ~800 MW · Loss target <8%",
    },

    "solid-waste": {
      title: "Solid Waste Management",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626075/Amaravati-concept-handbook_modified-34_ybyxhs.jpg",
      ],
      description:
        "End-to-end system from source segregation to processing with MRFs and waste-to-energy.",
      features: [
        "Door-to-door segregated collection",
        "WTE plant ~10 MW",
        "Material recovery facilities",
        "Composting for organics",
        "Engineered sanitary landfill"
      ],
      specifications: "500 TPD · Recovery ~60% · Landfill ~20%",
    },

    "gas-distribution": {
      title: "Gas Distribution",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626075/Amaravati-concept-handbook_modified-39_l1pjch.jpg",
      ],
      description:
        "City gas network for domestic, commercial and industrial users with SCADA-based safety.",
      features: [
        "City Gate Station 20,000 SCMD",
        "Medium pressure network 4–7 kg/cm²",
        "LP distribution ~21 mbar",
        "SCADA leak monitoring",
        "Strategic ESVs & isolation"
      ],
      specifications: "Network ~250 km · 50,000+ connections",
    },

    ict: {
      title: "ICT (Information & Communication Technology)",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626075/Amaravati-concept-handbook_modified-43_zspftk.jpg",
      ],
      description:
        "Fiber backbone, data centers and IoT sensor fabric enabling smart city operations.",
      features: [
        "1,000 km fiber backbone",
        "Tier-III data centers (redundant)",
        "City Wi-Fi in public areas",
        "IoT sensors for operations",
        "Integrated Command & Control"
      ],
      specifications: "Backbone 10 Gbps · 500+ hotspots · 10k+ sensors",
    },

    "district-cooling": {
      title: "District Cooling",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626077/Amaravati-concept-handbook_modified-47_gk8mxo.jpg",
      ],
      description:
        "Centralized chilled water plants for large districts to cut electricity consumption vs individual HVAC.",
      features: [
        "Central plant 50,000 TR",
        "Chilled water distribution",
        "ETS at consumer buildings",
        "Thermal energy storage",
        "Central SCADA optimization"
      ],
      specifications: "Network 25 km · COP ≥ 5.5",
    },

    "safety-security": {
      title: "Safety & Security",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626075/Amaravati-concept-handbook_modified-50_itzuze.jpg",
      ],
      description:
        "24/7 city safety using CCTV, ANPR, emergency boxes and integrated response centers.",
      features: [
        "2,000+ CCTV cameras",
        "Emergency call boxes (500m grid)",
        "ANPR at key junctions",
        "Police & fire station network",
        "Central monitoring (ICCC)"
      ],
      specifications: "Coverage ~90% public realm · Response <5 min",
    },

    "disaster-management": {
      title: "Disaster Management",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626075/Amaravati-concept-handbook_modified-53_xugzph.jpg",
      ],
      description:
        "Preparedness and resilience via early warning, evacuation corridors, shelters and EOC.",
      features: [
        "Flood & storm early warning",
        "Marked evacuation routes",
        "50 emergency shelters",
        "Relief supply warehouses",
        "Emergency Ops Center w/ backup"
      ],
      specifications: "Shelter capacity 100k · 15 primary routes",
    },

    "green-spaces": {
      title: "Green Spaces & Parks",
      images: [
        "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=2400&q=80&auto=format&fit=crop",
      ],
      description:
        "Parks and green corridors ensuring minimum 15% green cover and equitable access to recreation.",
      features: [
        "Central Park 100 ha",
        "Neighborhood parks (≤500m access)",
        "Linear green corridors",
        "Botanical & themed gardens",
        "Sports & play grounds"
      ],
      specifications: "Total ~3000 ha · 500k+ trees",
    },

    "social-infrastructure": {
      title: "Social Infrastructure",
      images: [
        "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=2400&q=80&auto=format&fit=crop",
      ],
      description:
        "Schools, hospitals, community facilities and cultural venues planned for equitable service delivery.",
      features: [
        "Primary schools ≤500m",
        "Secondary schools ~1 km grid",
        "Hospitals 20+ (500 beds each)",
        "Community centers per neighborhood",
        "Libraries & cultural hubs"
      ],
      specifications: "Schools 200+ · Hospitals 20+ · Centers 50+",
    },
  };

  const current = mapData[id || ""];
  const ids = Object.keys(mapData);
  const idx = ids.indexOf(id || "");

  const [showFull, setShowFull] = useState(false);
  const [detailIdx, setDetailIdx] = useState(0);
  const [imgRatio, setImgRatio] = useState<number | null>(null); // naturalWidth / naturalHeight

  const detailSlides = useMemo(() => {
    if (!current) return [];
    return [
      { title: "Overview", body: current.description },
      { title: "Key Features", list: current.features.slice(0, 8) },
      { title: "Specifications", body: current.specifications },
      {
        title: "Compliance",
        body: "Follow applicable codes and environment safeguards; use latest sanctioned drawings for works."
      },
      {
        title: "Notes",
        body: "Maps are indicative; verify boundaries and utilities with updated authoritative datasets."
      }
    ];
  }, [current]);

  const goPrevDetail = () =>
    setDetailIdx((i) => (i - 1 + detailSlides.length) % detailSlides.length);
  const goNextDetail = () =>
    setDetailIdx((i) => (i + 1) % detailSlides.length);

  if (!current) {
    return (
      <Layout>
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Map Not Found</h1>
          <Link to="/maps">
            <Button><ArrowLeft className="w-4 h-4 mr-2" />Back to Maps</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const imageUrl = current.images[0];

  return (
    <Layout>
      <div className="container mx-auto px-px py-3">
        <div className="mb-3">
          <Link to="/maps">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Maps
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 h-[90vh]">
          {/* LEFT — full image, no padding, object-contain; scales by real ratio */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 flex items-center justify-center"
          >
            <GlassCard className="relative w-full h-full p-0 overflow-hidden flex items-center justify-center bg-white dark:bg-neutral-950">
              <div className="absolute top-4 left-4 rounded-xl bg-muted/70 px-4 py-1.5 text-lg font-semibold z-10">
                {current.title}
              </div>

              <img
                src={imageUrl}
                alt={current.title}
                className={`object-contain ${imgRatio && imgRatio >= 1 ? "w-full h-auto" : "h-full w-auto"} max-w-full max-h-full`}
                onLoad={(e) => {
                  const img = e.currentTarget;
                  const ratio = img.naturalWidth / img.naturalHeight;
                  setImgRatio(ratio || 1);
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://placehold.co/1800x1100?text=Map+Image";
                }}
              />

              {/* ONLY “View Full Size” (no download, no map navigation buttons) */}
              <div className="absolute top-4 right-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9"
                  title="View Full Size"
                  onClick={() => setShowFull(true)}
                >
                  <Maximize2 className="w-4 h-4" />
                </Button>
              </div>
            </GlassCard>
          </motion.div>

          {/* RIGHT — large details card with smooth animation + drag/swipe */}
          <motion.aside
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 flex items-center"
          >
            <GlassCard className="relative w-full h-full p-6 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold">Details</h3>
                <div className="text-xs text-muted-foreground">
                  {detailIdx + 1} / {detailSlides.length}
                </div>
              </div>

              {/* Arrows inside details card + swipe/drag to change */}
              <button
                onClick={goPrevDetail}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center"
                aria-label="Previous detail"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goNextDetail}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center"
                aria-label="Next detail"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={detailIdx}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) goNextDetail();
                      else if (info.offset.x > 50) goPrevDetail();
                    }}
                    className="select-none"
                  >
                    <div className="prose dark:prose-invert max-w-none leading-relaxed">
                      <h4 className="mt-0">{detailSlides[detailIdx]?.title}</h4>
                      {"list" in (detailSlides[detailIdx] || {}) ? (
                        <ul>
                          {(detailSlides[detailIdx] as any).list.map((t: string, i: number) => (
                            <li key={i}>{t}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{(detailSlides[detailIdx] as any).body}</p>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-3 flex justify-center gap-1.5">
                {detailSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setDetailIdx(i)}
                    className={`h-1.5 rounded-full transition ${
                      i === detailIdx ? "bg-primary w-6" : "bg-foreground/20 w-2"
                    }`}
                    aria-label={`Go to detail ${i + 1}`}
                  />
                ))}
              </div>
            </GlassCard>
          </motion.aside>
        </div>
      </div>

      {/* Full-size modal */}
      <AnimatePresence>
        {showFull && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFull(false)}
          >
            <motion.div
              className="relative w-full max-w-7xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <GlassCard className="p-0 overflow-hidden">
                <div className="relative bg-black">
                  <img
                    src={imageUrl}
                    alt={`${current.title} — full size`}
                    className="w-full h-auto object-contain max-h-[92vh]"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-3 right-3 h-9 w-9"
                    onClick={() => setShowFull(false)}
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default MapDetail;
