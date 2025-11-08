"use client";

import React, { useMemo } from "react";
const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => <div>{children}</div>;

/**
 * Local GlassCard fallback component to avoid missing module import.
 * Keeps the same props used by the page: children, className and delay.
 */
const GlassCard: React.FC<{ children?: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <div className={`glass-card ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

import { useThumbnails } from "@/hooks/useThumbnails";

type Term = {
  title: string;
  desc: string;
  wiki?: string;
  image?: string; // manual fixed image (optional)
};

const SAMPLE_IMAGE = "https://placehold.co/900x560?text=Culvert";

// small helper
function twoLine(text: string, max = 160) {
  if (!text) return "";
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const i = cut.lastIndexOf(" ");
  return (i > 0 ? cut.slice(0, i) : cut).trim() + "…";
}

export default function CulvertConstruction() {
  // ------------------------------
  // Section 1: Monzur Rahman content – Types of Culvert
  // ------------------------------
  const culvertTypes: Term[] = useMemo(
  () => [
    {
      title: "Pipe Culvert",
      desc:
        "Most common due to competitive cost and easy installation. Usually circular/elliptical/pipe-arch depending on site constraints.",
      wiki: "Culvert",
      image: "https://civiltoday.com/images/Article_Image/Pipe-culvert.jpg",
      width: 330,
      height: 247,
      renderedWidth: 329,
      renderedHeight: 176,
    },
    {
      title: "Pipe-Arch Culvert",
      desc:
        "Useful where headroom is limited and low-flow hydraulic efficiency is desirable; aesthetic, lightweight, and easy to install.",
      wiki: "Culvert",
      image: "https://civiltoday.com/images/Article_Image/Pipe-arch-culvert.jpg",
      width: 330,
      height: 247,
      renderedWidth: 329,
      renderedHeight: 176,
    },
    {
      title: "Box Culvert",
      desc:
        "RCC rectangular/square cells. Rigid frame action; economical on weak soils. Bottom slab spreads pressure—often no separate foundation.",
      wiki: "Reinforced_concrete",
      image: "https://civiltoday.com/images/Article_Image/Box-culvert.jpg",
      width: 330,
      height: 247,
      renderedWidth: 329,
      renderedHeight: 176,
    },
    {
      title: "Arch Culvert",
      desc:
        "Metal/masonry/RCC arch that can be built without diverting flow; maintains the natural bed—often termed a low-profile culvert.",
      wiki: "Arch",
      image: "https://civiltoday.com/images/Article_Image/Arch-culvert.jpg",
      width: 330,
      height: 247,
      renderedWidth: 329,
      renderedHeight: 176,
    },
    {
      title: "Bridge Culvert",
      desc:
        "Dual purpose — acts as both bridge and culvert. Typically rectangular, built on rivers/canals with pavement over culvert cells.",
      wiki: "Bridge",
      image: "https://civiltoday.com/images/Article_Image/Bridge-culvert.jpg",
      width: 330,
      height: 247,
      renderedWidth: 329,
      renderedHeight: 176,
    },
    {
      title: "Metal Box Culvert",
      desc:
        "Corrugated/structural plate metal alternative to small bridges; fast to install, durable, deformable, long service life.",
      wiki: "Corrugated_galvanised_iron",
      image: "https://civiltoday.com/images/Article_Image/Metal-Box-culvert.jpg",
      width: 330,
      height: 247,
      renderedWidth: 329,
      renderedHeight: 176,
    },
  ],
  []
);
  const culvertTypeAdvantages: Record<string, string[]> = {
    "Pipe Culvert": [
      "Any desired strength via mix, thickness & reinforcement",
      "Economical; easy to install",
      "Can resist tensile and compressive stresses",
    ],
    "Pipe-Arch Culvert": [
      "Works in limited headroom",
      "Improved hydraulic capacity at low flow",
      "Lightweight; easy to install; aesthetic profile",
    ],
    "Box Culvert": [
      "Rigid, monolithic action; very economical",
      "Suitable for weak soils; bottom slab reduces soil pressure",
      "Often no separate foundation required",
    ],
    "Arch Culvert": [
      "Cost savings & accelerated construction",
      "Greater hydraulic efficiency",
      "Pleasing aesthetics; design–build friendly",
    ],
    "Bridge Culvert": [
      "Allows traffic to pass over (multi-purpose)",
      "Strong foundation; robust system",
      "Effective for river/canal crossings",
    ],
    "Metal Box Culvert": [
      "Durable and deformable",
      "Short construction time; easy installation",
      "Long service life",
    ],
  };

  const culvertTypeFetchList = useMemo(
    () =>
      culvertTypes.map((t) => ({
        key: t.title,
        query: t.wiki || t.title,
        fixed: t.image,
      })),
    [culvertTypes]
  );
  const culvertTypeThumbs = useThumbnails(culvertTypeFetchList, SAMPLE_IMAGE);

  // ------------------------------
  // Section 2: Your A–Z culvert glossary (keep your full list here)
  // ------------------------------
  const terms: Term[] = useMemo(
    () => [
      { title: "Culvert", desc: "A structure that allows water to flow under a road, railway, or embankment—acting like a small bridge for drainage without disturbing the embankment.", wiki: "Culvert" },
      { title: "Inlet", desc: "The entry side where water enters the culvert. Designed to control flow and limit erosion/blockage.", wiki: "Inlet" },
      { title: "Outlet", desc: "The discharge end where water exits to the downstream channel. Should be protected to prevent scour.", wiki: "Outlet_(hydrology)" },
      { title: "Barrel", desc: "The enclosed waterway between inlet and outlet. May be circular, rectangular, or elliptical.", wiki: "Culvert" },
      { title: "Headwall", desc: "Retaining wall at culvert ends to prevent erosion and support the embankment; also braces the barrel.", wiki: "Headwall_(civil_engineering)" },
      { title: "Wing Wall", desc: "Angled extensions of the headwall that guide flow and retain adjacent soil.", wiki: "Retaining_wall" },
      { title: "Apron", desc: "Concrete/stone surface at inlet/outlet to dissipate energy and prevent undermining.", wiki: "Apron_(architecture)" },
      { title: "Cutoff Wall (Toe Wall)", desc: "Vertical wall at apron end to stop underseepage and protect foundations.", wiki: "Cutoff_wall" },
      { title: "Cushion", desc: "Compacted sand/granular layer below base slab to spread load and reduce settlement.", wiki: "Granular_material" },
      { title: "Invert Level", desc: "Lowest interior surface level of the barrel, setting gradient and flow direction.", wiki: "Culvert" },
      { title: "Bed Preparation", desc: "Leveling, compacting, and cleaning the base before foundation concrete for proper support.", wiki: "Subgrade" },
      { title: "Foundation", desc: "Base that transfers structural loads to ground—PCC, RCC, or masonry.", wiki: "Foundation_(engineering)" },
      { title: "Box Culvert", desc: "Rectangular/square RCC cell(s) used for medium–heavy flows; strong under road loads.", wiki: "Culvert#Box_culverts" },
      { title: "Pipe Culvert", desc: "Circular/elliptical RCC/steel pipes for small discharges under roads/paths.", wiki: "Culvert#Pipe_culverts" },
      { title: "Arch Culvert", desc: "Arched roof, often open bottom; preserves natural streambed when soil is strong.", wiki: "Culvert#Arch_culverts" },
      { title: "Cell", desc: "An individual opening in a multi-barrel culvert (e.g., double-cell = two passages).", wiki: "Culvert" },
      { title: "Haunch", desc: "Triangular region between bottom slab and wall in box culverts; strengthens corner for bending.", wiki: "Haunch_(engineering)" },
      { title: "Wing Span", desc: "Total length between outer ends of wing walls; indicates embankment retained.", wiki: "Retaining_wall" },
      { title: "Bearing Capacity", desc: "Soil’s ability to carry load without failure—critical for foundation design.", wiki: "Bearing_capacity" },
      { title: "Backfilling", desc: "Refilling around/over the culvert with proper compaction to prevent settlement/seepage.", wiki: "Backfilling" },
      { title: "Filter Media", desc: "Granular layers (sand/gravel) behind retaining walls for drainage and anti-clogging.", wiki: "Drainage#Subsurface_drainage" },
      { title: "Scour", desc: "Erosion of soil around foundations due to fast flows—may undermine the structure.", wiki: "Scour" },
      { title: "Weep Hole", desc: "Small openings in walls to relieve water pressure by draining trapped water.", wiki: "Weep_hole" },
      { title: "Reinforcement Cage", desc: "Tied steel bars placed before concreting to provide tensile strength and crack control.", wiki: "Rebar" },
      { title: "Center Line (CL)", desc: "Reference alignment of the culvert; components are laid symmetrically about it.", wiki: "Centerline" },
      { title: "Formwork / Shuttering", desc: "Temporary molds in wood/steel that shape fresh concrete until it sets.", wiki: "Formwork" },
      { title: "Concrete Grade", desc: "Mix strength designation (e.g., M25, M30); higher grades for slabs/walls/heavily loaded parts.", wiki: "Concrete" },
      { title: "Expansion Joint", desc: "Gap between sections to accommodate temperature movement and avoid cracking.", wiki: "Expansion_joint" },
      { title: "Wing Wall Return", desc: "Curved portion of wing wall turning into embankment for added lateral stability.", wiki: "Retaining_wall" },
      { title: "Subgrade", desc: "Compacted natural soil base for culvert/pavement; must be firm and even.", wiki: "Subgrade" },
      { title: "Embankment", desc: "Raised earth supporting road/railway over the culvert while flow passes beneath.", wiki: "Embankment_(transportation)" },
      { title: "Sump", desc: "Small pit at inlet to trap debris/silt before entering the culvert for better flow.", wiki: "Sump" },
      { title: "Dewatering", desc: "Pumping/means to remove water from site to create a dry work area.", wiki: "Dewatering" },
      { title: "Curing", desc: "Maintaining moisture/temperature in fresh concrete to achieve strength/durability.", wiki: "Curing_(concrete_construction)" },
      { title: "Head Loss", desc: "Loss of hydraulic energy due to friction, transitions, or obstructions within the barrel.", wiki: "Head_loss" },
      { title: "Parapet Wall", desc: "Low wall on top of culvert/wing walls for safety and vehicle containment.", wiki: "Parapet" },
      { title: "Flow Line", desc: "The path followed by water within the culvert, typically along the invert.", wiki: "Culvert" },
      { title: "Splay", desc: "Flare angle of wing walls guiding flow smoothly with reduced turbulence.", wiki: "Retaining_wall" },
      { title: "Dry Lean Concrete (DLC)", desc: "Lean concrete base layer under structural slab to improve support and reduce soil contact.", wiki: "Roller-compacted_concrete" },
      { title: "Bearing Stress", desc: "Contact stress at the foundation–soil interface; must be below allowable capacity.", wiki: "Bearing_(mechanics)" },
      { title: "PCC (Plain Cement Concrete)", desc: "Concrete without reinforcement; commonly used in foundations and bedding.", wiki: "Concrete" },
      { title: "RCC (Reinforced Cement Concrete)", desc: "Concrete with steel bars; resists both compressive and tensile forces.", wiki: "Reinforced_concrete" },
      { title: "RFI (Request for Inspection)", desc: "Contractor’s document asking the engineer to inspect work before next stage.", wiki: "Request_for_Information" },
      { title: "Raft Foundation", desc: "Thick mat slab spreading loads over a wide area—useful on soft soils.", wiki: "Raft_foundation" },
      { title: "Lean Concrete Bed", desc: "Lower-grade concrete layer below raft/base slab to level and isolate from soil.", wiki: "Blinding_concrete" },
      { title: "PCC Bed", desc: "Plain concrete layer below footings to provide uniform load transfer and a clean base.", wiki: "Concrete_footing" },
      { title: "Form Oil", desc: "Release agent on shuttering to prevent concrete sticking and improve finish.", wiki: "Release_agent" },
      { title: "Cover Block", desc: "Spacer ensuring required clear cover between reinforcement and formwork.", wiki: "Reinforced_concrete" },
      { title: "Centering", desc: "Accurate positioning of shuttering/supports before concreting to maintain geometry.", wiki: "Falsework" },
      { title: "Vibrating Compaction", desc: "Using vibrators during concreting to remove voids and densify the mix.", wiki: "Concrete_vibrator" },
      { title: "Haunch Reinforcement", desc: "Additional steel at haunches to resist bending/shear in box culverts.", wiki: "Haunch_(engineering)" },
      { title: "Keying", desc: "Creating interlocks between pours/layers so concrete acts monolithically.", wiki: "Construction_joint" },
      { title: "Flow Velocity", desc: "Speed of water through the culvert; excessive velocity risks outlet scour.", wiki: "Velocity" },
      { title: "Velocity Head", desc: "Kinetic energy component of flow expressed as height; used in energy equations.", wiki: "Bernoulli%27s_principle" },
      { title: "Energy Dissipation", desc: "Aprons, baffle blocks, or stilling basins to reduce outlet velocity/energy.", wiki: "Stilling_basin" },
      { title: "Baffle Blocks", desc: "Concrete blocks on aprons to break flow and protect downstream bed.", wiki: "Stilling_basin" },
      { title: "Wing Wall Pitching", desc: "Stone/concrete facing near wing wall base to prevent side erosion.", wiki: "Riprap" },
      { title: "G.I. Pipe Drain", desc: "Galvanized iron pipe used as temporary drain or as weep holes during works.", wiki: "Galvanization" },
      { title: "Level Datum", desc: "Reference elevation from which vertical measurements are taken.", wiki: "Datum_reference" },
      { title: "Bench Mark (BM)", desc: "Fixed point with known elevation for setting out levels.", wiki: "Benchmark_(surveying)" },
      { title: "Channelization", desc: "Shaping/lining approach and exit channels to guide flow efficiently.", wiki: "Channelization" },
      { title: "Gabion Structure", desc: "Stone-filled wire mesh cages for scour/erosion protection at outlets.", wiki: "Gabion" },
      { title: "Riprap", desc: "Rough stones placed to armor banks and prevent scour.", wiki: "Riprap" },
      { title: "Geotextile", desc: "Permeable fabric under riprap/filter media; allows water, retains soil.", wiki: "Geotextile" },
      { title: "Bedding Material", desc: "Sand/granular layer placed under pipes for support and uniform load distribution.", wiki: "Granular_material" },
      { title: "Joint Sealant", desc: "Material sealing expansion/construction joints to prevent leakage/debris ingress.", wiki: "Sealant" },
      { title: "Hydraulic Gradient Line (HGL)", desc: "Imaginary line showing total energy head along the culvert system.", wiki: "Hydraulic_head" },
      { title: "Silt Trap", desc: "Chamber trapping sediment before it enters the culvert to maintain flow.", wiki: "Sedimentation" },
      { title: "Headwater", desc: "Water level at inlet during flow; governs inlet control and capacity.", wiki: "Head_(water)" },
      { title: "Tailwater", desc: "Water level at outlet; influences discharge and backwater.", wiki: "Tailwater" },
      { title: "Manning’s Equation", desc: "Open-channel flow formula using slope, roughness (n), and hydraulic radius/area.", wiki: "Manning_formula" },
      { title: "Hydraulic Capacity", desc: "Maximum safe discharge through the culvert without overtopping.", wiki: "Hydraulic_head" },
      { title: "Back Pressure", desc: "Outlet/tailwater pressure that reduces flow efficiency.", wiki: "Back_pressure" },
      { title: "Flow Transition", desc: "Shift between subcritical and supercritical flow regimes through the culvert.", wiki: "Froude_number" },
      { title: "Cover Depth", desc: "Fill height over the top of the barrel; protects culvert and spreads traffic loads.", wiki: "Cover_(topography)" },
      { title: "Load Distribution", desc: "How traffic and embankment loads spread through structure/foundation.", wiki: "Structural_load" },
      { title: "Settlement", desc: "Vertical downward movement from soil consolidation/compaction.", wiki: "Soil_mechanics" },
      { title: "Differential Settlement", desc: "Unequal settlements causing cracks/misalignment; must be controlled.", wiki: "Settlement_(structural)" },
      { title: "Surface Drain", desc: "Open drain near culverts to collect/direct surface runoff away.", wiki: "Storm_drain" },
      { title: "Inspection Chamber", desc: "Accessible chamber near culverts for inspection and cleaning.", wiki: "Manhole" },
      { title: "Grouting", desc: "Injecting cement/chemical slurry into voids or cracks for strength and sealing.", wiki: "Grouting" },
      { title: "Traffic Load", desc: "Vehicle loads passing over the culvert that must be safely supported.", wiki: "Axle_load" },
      { title: "Earth Pressure", desc: "Lateral forces from retained soil acting on walls/wing walls.", wiki: "Earth_pressure" },
      { title: "Hydrostatic Pressure", desc: "Water pressure retained behind walls; relieved with weep holes/drainage.", wiki: "Hydrostatics" },
      { title: "Seepage Line", desc: "Boundary between saturated/unsaturated zones in soil; vital for filter design.", wiki: "Seepage" },
      { title: "Apron Length", desc: "Designed length of apron at inlet/outlet to prevent erosion—depends on velocity/soil.", wiki: "Stilling_basin" },
      { title: "Flood Flow", desc: "Peak flow during storm events; culverts are designed to pass safely.", wiki: "Flood" },
      { title: "Design Discharge", desc: "Calculated flow rate (m³/s) used for sizing the culvert.", wiki: "Runoff" },
      { title: "Catchment Area", desc: "Area contributing runoff to the inlet; larger catchments need higher capacity.", wiki: "Drainage_basin" },
      { title: "Drainage Alignment", desc: "Direction/path of flow guiding culvert placement for efficient drainage.", wiki: "Drainage" },
      { title: "Site Clearing", desc: "Removing vegetation/debris prior to excavation.", wiki: "Land_clearing" },
      { title: "Excavation", desc: "Removing soil to depth/width for foundation placement.", wiki: "Excavation_(engineering)" },
      { title: "Shoring", desc: "Temporary supports preventing trench/sidewall collapse.", wiki: "Shoring" },
      { title: "Bedding Compaction", desc: "Compact bedding layer to required density before laying pipes/slabs.", wiki: "Compaction_(geotechnical_engineering)" },
      { title: "Pipe Laying", desc: "Aligning and joining culvert pipes using collars/joints per line and level.", wiki: "Pipeline_transport" },
      { title: "Collar Joint", desc: "Concrete band around pipe joints for sealing and strength.", wiki: "Culvert" },
      { title: "Mortar Joint", desc: "Pipe joint filled with cement mortar to make watertight and stable.", wiki: "Mortar_(masonry)" },
      { title: "Haunch Filling", desc: "Filling/compacting material around pipe sides to provide lateral support.", wiki: "Culvert" },
      { title: "Final Trimming", desc: "Smoothing/leveling finished surface before pavement layers.", wiki: "Grader" },
      { title: "Finishing Works", desc: "Plastering, curing, painting, and cleaning prior to inspection/handover.", wiki: "Surface_finish" },
    ],
    []
  );

  const fetchList = useMemo(
    () =>
      terms.map((t) => ({
        key: t.title,
        query: t.wiki || t.title,
        fixed: t.image,
      })),
    [terms]
  );
  const thumbs = useThumbnails(fetchList, SAMPLE_IMAGE);

  return (
    <Layout>
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Intro / Author */}
          <h1 className="text-4xl font-bold mb-2">Culvert — Types, Details & Advantages</h1>
          <p className="text-sm text-muted-foreground mb-8">Monzur Rahman</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-12">
            {culvertTypes.map((t, i) => (
              <GlassCard key={t.title} delay={0.05 * (i % 6)} className="overflow-hidden h-full">
                <div className="relative h-44 w-full overflow-hidden rounded-lg">
                  <img
                    src={culvertTypeThumbs[t.title] || SAMPLE_IMAGE}
                    alt={t.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = SAMPLE_IMAGE;
                    }}
                  />
                </div>
                <div className="mt-4 px-1 pb-1">
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  <ul className="mt-3 list-disc pl-5 text-sm">
                    {(culvertTypeAdvantages[t.title] || []).map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Divider */}
          <hr className="my-10 opacity-30" />

          {/* A–Z Glossary */}
          <h2 className="text-3xl font-semibold mb-6">Culvert Construction A–Z</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            A consolidated A–Z of culvert parts, hydraulics & design notes, construction steps, and maintenance features — images fetched from Wikipedia/Wikimedia with smart fallbacks.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {terms.map((t, i) => (
              <GlassCard key={t.title + i} delay={0.05 * (i % 6)} className="overflow-hidden h-full">
                <div className="relative h-44 w-full overflow-hidden rounded-lg">
                  <img
                    src={t.image || thumbs[t.title] || SAMPLE_IMAGE}
                    alt={t.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = SAMPLE_IMAGE;
                    }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{twoLine(t.desc)}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
