"use client";

import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";

type Term = {
  title: string;
  desc: string;
  wiki: string;
};

const SAMPLE_IMAGE = "https://placehold.co/800x500?text=Sample+Image";

function twoLine(text: string, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const i = cut.lastIndexOf(" ");
  return (i > 0 ? cut.slice(0, i) : cut).trim() + "…";
}

export default function RoadConstruction() {
  const [thumbs, setThumbs] = useState<Record<string, string>>({});

  // 🔤 Alphabetical Road Construction Terminology (curated, broad coverage)
  const terms: Term[] = useMemo(
    () => [
      {
        title: "AADT (Annual Average Daily Traffic)",
        desc: "Average daily vehicle count over a full year.",
        wiki: "Average_annual_daily_traffic",
      },
      {
        title: "Access Control",
        desc: "Limiting driveway and intersection access to preserve capacity/safety.",
        wiki: "Access_control_(transportation)",
      },
      {
        title: "Access Management",
        desc: "Planning entrances, medians, signals to optimize operations and safety.",
        wiki: "Access_management",
      },
      {
        title: "Access Road",
        desc: "Minor road providing entry to sites or highways.",
        wiki: "Frontage_road",
      },
      {
        title: "Adfreeze",
        desc: "Bond between soil and foundation in freezing conditions.",
        wiki: "Frost_heave",
      },
      {
        title: "Aggregate",
        desc: "Crushed stone, gravel, or sand used in road layers and mixes.",
        wiki: "Construction_aggregate",
      },
      {
        title: "Aggregate Base Course (ABC)",
        desc: "Compacted granular base supporting pavement.",
        wiki: "Road_surface#Base_course",
      },
      {
        title: "Aggregate Gradation",
        desc: "Particle size distribution of aggregates.",
        wiki: "Sieve_analysis",
      },
      {
        title: "Alignment (Horizontal/Vertical)",
        desc: "Plan and profile layout of the road centerline.",
        wiki: "Route_design",
      },
      {
        title: "Alligator Cracking",
        desc: "Interconnected asphalt cracks indicating structural failure.",
        wiki: "Pavement_distress",
      },
      {
        title: "Antistrip Agent",
        desc: "Additive improving asphalt moisture resistance.",
        wiki: "Asphalt_concrete",
      },
      {
        title: "Approach Road",
        desc: "Section leading to a structure or intersection.",
        wiki: "Road",
      },
      {
        title: "Arterial Road",
        desc: "High-capacity urban road for through movements.",
        wiki: "Arterial_road",
      },
      {
        title: "As-Built",
        desc: "Final drawings reflecting constructed conditions.",
        wiki: "As-built",
      },
      {
        title: "Asphalt",
        desc: "Bituminous binder for flexible pavements.",
        wiki: "Asphalt",
      },
      {
        title: "Asphalt Binder",
        desc: "Petroleum product binding aggregates in HMA.",
        wiki: "Asphalt",
      },
      {
        title: "Asphalt Concrete (HMA/BC)",
        desc: "Asphalt + aggregate mixture for surface/binder courses.",
        wiki: "Asphalt_concrete",
      },
      {
        title: "Asphalt Content",
        desc: "Percentage of binder in the mix by mass.",
        wiki: "Asphalt_concrete",
      },
      {
        title: "Asphalt Emulsion",
        desc: "Asphalt dispersed in water for cold applications.",
        wiki: "Asphalt_emulsion",
      },
      {
        title: "Auxiliary Lane",
        desc: "Lane for merging/weaving between ramps.",
        wiki: "Auxiliary_lane",
      },
      {
        title: "Backfill",
        desc: "Material used to refill excavations around works.",
        wiki: "Backfilling",
      },
      {
        title: "Backslope",
        desc: "Cut slope rising from the ditch to the natural ground.",
        wiki: "Cut_and_fill",
      },
      {
        title: "Ballast",
        desc: "Coarse aggregate layer providing drainage/support (often rail).",
        wiki: "Track_ballast",
      },
      {
        title: "Bank Protection",
        desc: "Measures to prevent erosion along channels.",
        wiki: "Riprap",
      },
      {
        title: "Base Course",
        desc: "Structural layer below surface course.",
        wiki: "Base_course",
      },
      {
        title: "Battering",
        desc: "Intentional slope on a wall/face for stability.",
        wiki: "Batter_(walls)",
      },
      {
        title: "Benching",
        desc: "Terracing slopes to improve stability and drainage.",
        wiki: "Terrace_(earthworks)",
      },
      {
        title: "Benkelman Beam",
        desc: "Device to measure pavement deflection under load.",
        wiki: "Benkelman_beam_deflection",
      },
      {
        title: "Berm",
        desc: "Shoulder/earth strip aiding drainage or separation.",
        wiki: "Berm",
      },
      {
        title: "Binder Course",
        desc: "Intermediate asphalt layer between base and surface.",
        wiki: "Asphalt_concrete",
      },
      {
        title: "Bitumen",
        desc: "Viscous hydrocarbon binder for paving.",
        wiki: "Bitumen",
      },
      {
        title: "Bituminous Macadam",
        desc: "Bitumen-bound crushed aggregate layer.",
        wiki: "Macadam",
      },
      {
        title: "Bleeding (Flushing)",
        desc: "Excess binder at surface creating smooth shiny film.",
        wiki: "Pavement_distress",
      },
      {
        title: "Borrow Pit",
        desc: "Excavation providing fill material.",
        wiki: "Borrow_pit",
      },
      {
        title: "Box Culvert",
        desc: "Rectangular concrete conduit carrying water under roads.",
        wiki: "Culvert",
      },
      {
        title: "Bridge Approach Slab",
        desc: "Slab transitioning from roadway embankment to bridge deck.",
        wiki: "Bridge",
      },
      {
        title: "Broom Finish",
        desc: "Textured concrete surface for skid resistance.",
        wiki: "Concrete_finisher",
      },
      {
        title: "C&D Waste",
        desc: "Construction and demolition waste from road works.",
        wiki: "Construction_and_demolition_waste",
      },
      {
        title: "Caliche",
        desc: "Natural calcium cemented soil used as base in arid areas.",
        wiki: "Caliche",
      },
      {
        title: "Camber / Crossfall",
        desc: "Transverse slope for drainage.",
        wiki: "Cross_slope",
      },
      {
        title: "Carriageway",
        desc: "Part of road used by moving traffic.",
        wiki: "Carriageway",
      },
      {
        title: "CBR (California Bearing Ratio)",
        desc: "Index of subgrade strength for design.",
        wiki: "California_bearing_ratio",
      },
      {
        title: "CD Works (Cross-Drainage)",
        desc: "Culverts/bridges conveying water across alignment.",
        wiki: "Culvert",
      },
      {
        title: "Centerline",
        desc: "Reference line defining road alignment.",
        wiki: "Road",
      },
      {
        title: "Central Median",
        desc: "Separator between opposing traffic streams.",
        wiki: "Median_strip",
      },
      {
        title: "Chip Seal (Surface Dressing)",
        desc: "Binder spray followed by chips to seal/improve texture.",
        wiki: "Surface_dressing",
      },
      {
        title: "CIR (Cold In-Place Recycling)",
        desc: "Mill and reuse asphalt in place without full heating.",
        wiki: "Asphalt_concrete#Recycling",
      },
      {
        title: "Cold Joint",
        desc: "Interface where asphalt lifts cooled before bonding.",
        wiki: "Asphalt_concrete",
      },
      {
        title: "Cold Planer (Milling Machine)",
        desc: "Machine removing asphalt to a set depth.",
        wiki: "Cold_planer",
      },
      {
        title: "Compaction",
        desc: "Densification of soil/aggregate/asphalt using energy.",
        wiki: "Soil_compaction",
      },
      {
        title: "Concrete Pavement (Rigid)",
        desc: "Portland cement concrete slab carrying loads.",
        wiki: "Concrete_pavement",
      },
      {
        title: "Concrete Saw Cut",
        desc: "Early-age joints to control cracking.",
        wiki: "Concrete_saw",
      },
      {
        title: "Constructability",
        desc: "Ease and practicality of building a design.",
        wiki: "Constructability",
      },
      {
        title: "Construction Joint",
        desc: "Planned interface between successive placements.",
        wiki: "Concrete#Joints",
      },
      {
        title: "Continuously Reinforced Concrete Pavement (CRCP)",
        desc: "Concrete with continuous steel—no regular transverse joints.",
        wiki: "Continuously_reinforced_concrete_pavement",
      },
      {
        title: "Corrugations (Washboarding)",
        desc: "Regular ripples on surfaces due to traffic.",
        wiki: "Washboarding",
      },
      {
        title: "Crash Barrier (W/Thrie-beam)",
        desc: "Roadside barrier redirecting errant vehicles.",
        wiki: "Traffic_barrier",
      },
      {
        title: "Crack and Seat",
        desc: "Crack old PCC, seat, then overlay with asphalt.",
        wiki: "Concrete_pavement",
      },
      {
        title: "Crack Sealing",
        desc: "Filling cracks to block water and debris.",
        wiki: "Crack_sealing",
      },
      {
        title: "Crest Curve",
        desc: "Convex vertical curve joining gradients.",
        wiki: "Vertical_curve",
      },
      {
        title: "Crown",
        desc: "Raised center facilitating drainage both sides.",
        wiki: "Cross_slope",
      },
      {
        title: "Culvert",
        desc: "Structure allowing water beneath roadway.",
        wiki: "Culvert",
      },
      {
        title: "Cut Section",
        desc: "Roadway formed by excavation below ground.",
        wiki: "Cut_and_fill",
      },
      {
        title: "Cutoff Wall",
        desc: "Wall preventing under-seepage or piping.",
        wiki: "Seepage",
      },
      {
        title: "Daylighting",
        desc: "Exposing cut slope to natural ground surface.",
        wiki: "Cut_and_fill",
      },
      {
        title: "DBM (Dense Bituminous Macadam)",
        desc: "Dense asphalt base/binder layer in IRC specs.",
        wiki: "Asphalt_concrete",
      },
      {
        title: "DCP (Dynamic Cone Penetrometer)",
        desc: "Field test estimating in-situ strength.",
        wiki: "Dynamic_cone_penetrometer",
      },
      {
        title: "Delineator",
        desc: "Retroreflective guide post showing alignment.",
        wiki: "Road_delineators",
      },
      {
        title: "Design Speed",
        desc: "Chosen speed for geometric design features.",
        wiki: "Design_speed",
      },
      {
        title: "Dewatering",
        desc: "Lowering groundwater to enable construction.",
        wiki: "Dewatering",
      },
      {
        title: "DLC (Dry Lean Concrete)",
        desc: "Lean concrete subbase under PCC pavement.",
        wiki: "Concrete_pavement#Base_layers",
      },
      {
        title: "Dowel Bar",
        desc: "Smooth bars for load transfer across joints.",
        wiki: "Dowel_bar",
      },
      {
        title: "Drainage Blanket",
        desc: "Free-draining layer to intercept water.",
        wiki: "Road_surface#Drainage",
      },
      {
        title: "Drainage Inlet (Catch Basin)",
        desc: "Structure capturing runoff into underground drains.",
        wiki: "Storm_drain",
      },
      {
        title: "Earthwork",
        desc: "Cutting, filling, transporting, and compaction of soil.",
        wiki: "Earthworks_(engineering)",
      },
      {
        title: "Easement",
        desc: "Right to use land for a public facility like a road.",
        wiki: "Easement",
      },
      {
        title: "Edge Drop-off",
        desc: "Vertical difference at pavement edge and shoulder.",
        wiki: "Pavement_distress",
      },
      {
        title: "Edge Line (Fog Line)",
        desc: "Pavement marking at outer edge of lane.",
        wiki: "Road_surface_marking",
      },
      {
        title: "Embankment",
        desc: "Raised earth structure supporting roadway.",
        wiki: "Embankment_(transportation)",
      },
      {
        title: "Emulsion Break",
        desc: "Separation of asphalt from water to set the coat.",
        wiki: "Asphalt_emulsion",
      },
      {
        title: "ESAL (Equivalent Single Axle Load)",
        desc: "Standardized measure of traffic load effects.",
        wiki: "Equivalent_single_axle_load",
      },
      {
        title: "Erosion Control",
        desc: "Measures preventing soil loss from slopes/ditches.",
        wiki: "Erosion_control",
      },
      {
        title: "Expansive Soil",
        desc: "Soil that swells/shrinks with moisture changes.",
        wiki: "Expansive_soil",
      },
      {
        title: "Expansion Joint",
        desc: "Joint accommodating temperature movement.",
        wiki: "Expansion_joint",
      },
      {
        title: "FDR (Full-Depth Reclamation)",
        desc: "Pulverize/stabilize in-place pavement and base.",
        wiki: "Full_depth_reclamation",
      },
      {
        title: "Feathering",
        desc: "Tapering asphalt thickness to match existing surface.",
        wiki: "Asphalt_concrete",
      },
      {
        title: "Fines",
        desc: "Particles passing 0.075 mm sieve.",
        wiki: "Sieve_analysis",
      },
      {
        title: "Flexible Pavement",
        desc: "Bituminous layers distributing load by grain contact.",
        wiki: "Flexible_pavement",
      },
      {
        title: "Floodway",
        desc: "Channel area reserved to carry flood flows.",
        wiki: "Floodway",
      },
      {
        title: "Fog Seal",
        desc: "Diluted emulsion sprayed for sealing/refreshing.",
        wiki: "Fog_seal",
      },
      {
        title: "Formation Level",
        desc: "Finished subgrade elevation.",
        wiki: "Subgrade",
      },
      {
        title: "Freeboard",
        desc: "Vertical clearance between water surface and structure.",
        wiki: "Freeboard",
      },
      {
        title: "Freeway",
        desc: "Fully access-controlled high-speed highway.",
        wiki: "Freeway",
      },
      {
        title: "Friction Course",
        desc: "Surface mix enhancing skid resistance/drainage.",
        wiki: "Open-graded_friction_course",
      },
      {
        title: "FWD (Falling Weight Deflectometer)",
        desc: "Device measuring deflection basin to back-calc moduli.",
        wiki: "Falling_weight_deflectometer",
      },
      {
        title: "Gabion",
        desc: "Rock-filled wire baskets for erosion control.",
        wiki: "Gabion",
      },
      {
        title: "Geocell",
        desc: "Honeycomb confinement system for soil reinforcement.",
        wiki: "Geocell",
      },
      {
        title: "Geogrid",
        desc: "Polymeric grid for reinforcement of bases/embankments.",
        wiki: "Geogrid",
      },
      {
        title: "Geomembrane",
        desc: "Impermeable geosynthetic for liners/caps.",
        wiki: "Geomembrane",
        image:
          "https://imgs.search.brave.com/UyWGaFVgRAYV3nirbGWueEJtGvnhTcQS5nQ0Vyeozss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDIwLzEx/L1RRL05ML1RJLzcx/ODU2ODkvaGRwZS1n/ZW9tZW1icmFuZS01/MDB4NTAwLmpwZWc",
      },
      {
        title: "Geotextile",
        desc: "Permeable fabric for separation/filtration/drainage.",
        wiki: "Geotextile",
      },
      {
        title: "Grade (Slope)",
        desc: "Longitudinal slope of a roadway.",
        wiki: "Grade_(slope)",
      },
      {
        title: "Grade Separation",
        desc: "Crossing at different elevations (over/under).",
        wiki: "Grade_separation",
      },
      {
        title: "Gradeline",
        desc: "Proposed profile elevation along centerline.",
        wiki: "Road",
      },
      {
        title: "Gravel Road",
        desc: "Unpaved road with compacted gravel.",
        wiki: "Gravel_road",
      },
      {
        title: "Guardrail",
        desc: "Roadside safety barrier redirecting vehicles.",
        wiki: "Traffic_barrier",
      },
      {
        title: "Haul Road",
        desc: "Temporary road for construction traffic.",
        wiki: "Construction",
      },
      {
        title: "Haunch (Pavement/Structure)",
        desc: "Thickening near supports or edges for strength/profile.",
        wiki: "Haunch_(engineering)",
      },
      {
        title: "Headwall",
        desc: "Concrete wall at culvert inlet/outlet.",
        wiki: "Culvert",
      },
      {
        title: "Hydrated Lime",
        desc: "Additive improving moisture resistance and stiffness.",
        wiki: "Lime_(material)",
      },
      {
        title: "Hydroseeding",
        desc: "Spraying seed/mulch/tackifier to vegetate slopes.",
        wiki: "Hydroseeding",
      },
      {
        title: "Impact Attenuator",
        desc: "Crash cushion reducing impact severity.",
        wiki: "Impact_attenuator",
      },
      {
        title: "Infiltration Trench",
        desc: "Stone-filled trench promoting stormwater infiltration.",
        wiki: "Infiltration_basin",
      },
      {
        title: "Intelligent Transportation Systems (ITS)",
        desc: "Tech for monitoring/control of traffic.",
        wiki: "Intelligent_transportation_system",
      },
      {
        title: "Interchange",
        desc: "Grade-separated junction with ramps.",
        wiki: "Interchange_(road)",
      },
      {
        title: "Intersection",
        desc: "At-grade crossing of roads.",
        wiki: "Intersection_(road)",
      },
      {
        title: "IRI (International Roughness Index)",
        desc: "Ride quality metric in m/km.",
        wiki: "International_Roughness_Index",
      },
      {
        title: "JPCP",
        desc: "Jointed Plain Concrete Pavement with transverse joints.",
        wiki: "Jointed_plain_concrete_pavement",
      },
      {
        title: "JRCP",
        desc: "Jointed Reinforced Concrete Pavement with distributed steel.",
        wiki: "Concrete_pavement",
      },
      {
        title: "Joint Sealant",
        desc: "Material sealing joints against water/debris.",
        wiki: "Sealant",
      },
      {
        title: "Kerb (Curb)",
        desc: "Raised edge separating carriageway and verge/footway.",
        wiki: "Curb",
      },
      {
        title: "Kerb Ramp (Curb Cut)",
        desc: "Sloped access for pedestrians/wheelchairs.",
        wiki: "Curb_cut",
      },
      {
        title: "Lane",
        desc: "Portion of carriageway for single line of traffic.",
        wiki: "Lane",
      },
      {
        title: "Lane Balance",
        desc: "Maintaining consistent number of lanes through merges/diverges.",
        wiki: "Highway_engineering",
      },
      {
        title: "Lay-by",
        desc: "Pull-off bay for stopping/rest.",
        wiki: "Parking#Lay-bys",
      },
      {
        title: "Lime Stabilization",
        desc: "Adding lime to improve clayey soils.",
        wiki: "Soil_stabilization",
      },
      {
        title: "Live Load",
        desc: "Traffic and transient loads on the facility.",
        wiki: "Live_load",
      },
      {
        title: "Longitudinal Joint",
        desc: "Joint parallel to roadway centerline.",
        wiki: "Pavement_(road)",
      },
      {
        title: "Longitudinal Slope",
        desc: "Slope along the direction of travel.",
        wiki: "Grade_(slope)",
      },
      {
        title: "Low-Volume Road",
        desc: "Road with relatively low daily traffic demand.",
        wiki: "Low-volume_road",
      },
      {
        title: "Mastic Asphalt",
        desc: "Very dense asphalt with high binder content for waterproofing.",
        wiki: "Mastic_asphalt",
      },
      {
        title: "MDD (Maximum Dry Density)",
        desc: "Peak density from Proctor test.",
        wiki: "Proctor_compaction_test",
      },
      {
        title: "Median",
        desc: "Separator between opposing carriageways.",
        wiki: "Median_strip",
      },
      {
        title: "Median Barrier",
        desc: "Barrier preventing cross-median collisions.",
        wiki: "Jersey_barrier",
      },
      {
        title: "Microsurfacing",
        desc: "Polymer-modified slurry for texture/rut correction.",
        wiki: "Microsurfacing",
      },
      {
        title: "Milled Surface",
        desc: "Textured surface after cold planning.",
        wiki: "Cold_planer",
      },
      {
        title: "Moisture Content",
        desc: "Water content of soil by mass.",
        wiki: "Moisture_content",
      },
      {
        title: "Moisture Susceptibility",
        desc: "Propensity of asphalt mix to lose strength when wet.",
        wiki: "Asphalt_concrete",
      },
      {
        title: "Motif (Pavement Marking)",
        desc: "Standard symbols/stripes on pavement.",
        wiki: "Road_surface_marking",
      },
      {
        title: "OGFC",
        desc: "Open-graded friction course improving drainage/skid.",
        wiki: "Open-graded_friction_course",
      },
      {
        title: "OMC (Optimum Moisture Content)",
        desc: "Moisture at which soil attains MDD.",
        wiki: "Proctor_compaction_test",
      },
      {
        title: "Overlay",
        desc: "New pavement layer placed over existing.",
        wiki: "Pavement_(road)#Maintenance",
      },
      {
        title: "Overpass",
        desc: "Bridge carrying a road over another facility.",
        wiki: "Overpass",
      },
      {
        title: "P-401 (FAA Asphalt Spec)",
        desc: "Common US spec for airport asphalt paving.",
        wiki: "Airport_pavement",
      },
      {
        title: "PCC (Portland Cement Concrete)",
        desc: "Concrete used for rigid pavements and structures.",
        wiki: "Portland_cement_concrete",
      },
      {
        title: "Pavement",
        desc: "Layered structure supporting wheel loads.",
        wiki: "Pavement_(road)",
      },
      {
        title: "Pavement Evaluation",
        desc: "Assessment of structural/functional condition.",
        wiki: "Pavement_management",
      },
      {
        title: "Pavement Failure",
        desc: "Breakdown of structural/functional performance.",
        wiki: "Pavement_distress",
      },
      {
        title: "Pavement Management System (PMS)",
        desc: "Tool for inventory, condition, M&R planning.",
        wiki: "Pavement_management",
      },
      {
        title: "Pavement Recycling",
        desc: "Reusing existing pavement materials.",
        wiki: "Asphalt_concrete#Recycling",
      },
      {
        title: "Paver (Asphalt Paver)",
        desc: "Machine placing asphalt at set width/thickness.",
        wiki: "Paver",
      },
      {
        title: "PCR (Patch Condition Rating)",
        desc: "Rating of patch quality on pavements.",
        wiki: "Pavement_condition_index",
      },
      {
        title: "PCI (Pavement Condition Index)",
        desc: "0–100 rating based on distress survey.",
        wiki: "Pavement_Condition_Index",
      },
      {
        title: "Penetration Grade Bitumen",
        desc: "Binder graded by needle penetration at 25 °C.",
        wiki: "Bitumen",
      },
      {
        title: "Percolation",
        desc: "Downward movement of water through soil.",
        wiki: "Percolation",
      },
      {
        title: "Permeability",
        desc: "Material’s ability to transmit water.",
        wiki: "Permeability_(earth_sciences)",
      },
      {
        title: "Phreatic Surface",
        desc: "Groundwater surface in soil.",
        wiki: "Water_table",
      },
      {
        title: "Pier (Road Drainage)",
        desc: "Intermediate support in a channel/bridge.",
        wiki: "Bridge_pier",
      },
      {
        title: "Pile Foundation",
        desc: "Deep foundation transferring load to deeper strata.",
        wiki: "Pile_(foundation)",
      },
      {
        title: "Pilot Car",
        desc: "Vehicle guiding traffic through work zones.",
        wiki: "Escort_vehicle",
      },
      {
        title: "Pipe Culvert",
        desc: "Circular/elliptical pipe carrying water.",
        wiki: "Culvert",
      },
      {
        title: "Pivot (Survey)",
        desc: "Temporary benchmark for elevation transfer.",
        wiki: "Benchmark_(surveying)",
      },
      {
        title: "Plasticity Index (PI)",
        desc: "Atterberg limit difference indicating plasticity.",
        wiki: "Atterberg_limits",
      },
      {
        title: "Plate Load Test",
        desc: "Field test of bearing capacity/modulus.",
        wiki: "Plate_load_test",
      },
      {
        title: "Plug Joint",
        desc: "Flexible joint accommodating movements in decks/slabs.",
        wiki: "Expansion_joint",
      },
      {
        title: "Pneumatic Tired Roller (PTR)",
        desc: "Kneading compaction with rubber tires.",
        wiki: "Compactor",
      },
      {
        title: "Polished Aggregate",
        desc: "Aggregate worn smooth reducing skid resistance.",
        wiki: "Skid_resistance",
      },
      {
        title: "Ponding",
        desc: "Standing water on the pavement surface.",
        wiki: "Flooding",
      },
      {
        title: "Porous Asphalt",
        desc: "Open mix allowing stormwater infiltration.",
        wiki: "Permeable_paving",
      },
      {
        title: "Portland Cement",
        desc: "Hydraulic binder for concrete.",
        wiki: "Portland_cement",
      },
      {
        title: "Posmac (Prime+Seal)",
        desc: "Two-step surface treatment (prime then seal).",
        wiki: "Surface_dressing",
      },
      {
        title: "Pothole",
        desc: "Localized bowl-shaped surface failure.",
        wiki: "Pothole",
      },
      {
        title: "Precast Concrete",
        desc: "Factory-made concrete elements assembled on site.",
        wiki: "Precast_concrete",
      },
      {
        title: "Prime Coat",
        desc: "Low-viscosity binder on granular base prior to asphalt.",
        wiki: "Prime_coat",
      },
      {
        title: "Proctor Test",
        desc: "Lab compaction test for OMC/MDD.",
        wiki: "Proctor_compaction_test",
      },
      {
        title: "PSR (Present Serviceability Rating)",
        desc: "Panel rating of ride quality.",
        wiki: "Pavement_condition_index",
      },
      {
        title: "PSI (Present Serviceability Index)",
        desc: "Calculated ride quality index.",
        wiki: "Pavement_condition_index",
      },
      {
        title: "Public ROW",
        desc: "Right-of-way owned/controlled by public agency.",
        wiki: "Right-of-way_(transportation)",
      },
      {
        title: "PVC (Point of Vertical Curvature)",
        desc: "Start of a vertical curve.",
        wiki: "Vertical_curve",
      },
      {
        title: "PVT (Point of Vertical Tangency)",
        desc: "End of a vertical curve.",
        wiki: "Vertical_curve",
      },
      {
        title: "PVMT (Pavement)",
        desc: "Abbrev. used in plans/schedules.",
        wiki: "Pavement_(road)",
      },
      {
        title: "Queue Warning",
        desc: "ITS measure alerting approaching drivers to slow traffic.",
        wiki: "Variable-message_sign",
      },
      {
        title: "Quarry",
        desc: "Site extracting stone for aggregates.",
        wiki: "Quarry",
      },
      {
        title: "RAP (Reclaimed Asphalt Pavement)",
        desc: "Processed old asphalt reused in new work.",
        wiki: "Reclaimed_asphalt_pavement",
      },
      {
        title: "RAS (Recycled Asphalt Shingles)",
        desc: "Shingles ground for binder contribution.",
        wiki: "Asphalt_shingle#Recycling",
      },
      {
        title: "Ravelling",
        desc: "Loss of aggregate from asphalt surface.",
        wiki: "Pavement_distress",
      },
      {
        title: "Retroreflectivity",
        desc: "Light returned toward source—night visibility.",
        wiki: "Retroreflector",
      },
      {
        title: "Riding Quality",
        desc: "Smoothness experienced by users (IRI).",
        wiki: "International_Roughness_Index",
      },
      {
        title: "Rigid Pavement",
        desc: "Concrete slab distributing load by flexure.",
        wiki: "Concrete_pavement",
      },
      {
        title: "Right-of-Way (ROW)",
        desc: "Land corridor for roadway and appurtenances.",
        wiki: "Right-of-way_(transportation)",
      },
      {
        title: "Riprap",
        desc: "Rock armor protecting slopes and channels.",
        wiki: "Riprap",
      },
      {
        title: "Road Kill",
        desc: "Wildlife-vehicle collision remains.",
        wiki: "Roadkill",
      },
      {
        title: "Roadbed",
        desc: "Prepared foundation of the pavement structure.",
        wiki: "Roadbed",
      },
      {
        title: "Roadbase",
        desc: "Granular or stabilized base layer for pavement.",
        wiki: "Road_surface#Base_course",
      },
      {
        title: "Road Diet",
        desc: "Lane reallocation to improve safety/operations.",
        wiki: "Road_diet",
      },
      {
        title: "Road Roller",
        desc: "Compaction equipment for soils/asphalt.",
        wiki: "Compactor",
      },
      {
        title: "Road Surface",
        desc: "Top layer supporting traffic.",
        wiki: "Road_surface",
      },
      {
        title: "Road User Cost",
        desc: "Costs borne by users (time, vehicle, crashes).",
        wiki: "Cost–benefit_analysis",
      },
      {
        title: "Roadway Width",
        desc: "Total width of lanes and shoulders.",
        wiki: "Carriageway",
      },
      {
        title: "Roughness",
        desc: "Irregularities affecting ride (IRI).",
        wiki: "International_Roughness_Index",
      },
      {
        title: "Rubblization",
        desc: "Breaking PCC into rubble for asphalt overlay.",
        wiki: "Rubblization",
      },
      {
        title: "Rumble Strip",
        desc: "Grooves/strips alerting inattentive drivers.",
        wiki: "Rumble_strip",
      },
      {
        title: "Rutting",
        desc: "Longitudinal depressions in wheel paths.",
        wiki: "Rutting",
      },
      {
        title: "Sag Curve (Vertical)",
        desc: "Concave curve between grades in valleys.",
        wiki: "Vertical_curve",
      },
      {
        title: "Sand Seal",
        desc: "Light application of binder and sand.",
        wiki: "Surface_dressing",
      },
      {
        title: "SBR/CRMB/PMB",
        desc: "Modified binders for performance (latex/rubber/polymer).",
        wiki: "Polymer-modified_bitumen",
      },
      {
        title: "Scour",
        desc: "Erosion at foundations due to water flow.",
        wiki: "Bridge_scour",
      },
      {
        title: "Seal Coat",
        desc: "Thin binder + fine aggregate protective treatment.",
        wiki: "Surface_dressing",
      },
      {
        title: "Service Road",
        desc: "Parallel road for local access.",
        wiki: "Frontage_road",
      },
      {
        title: "Setback",
        desc: "Required offset from property line/road edge.",
        wiki: "Building_line",
      },
      {
        title: "Settling Basin",
        desc: "Structure allowing sediment deposition.",
        wiki: "Sedimentation",
      },
      {
        title: "Shoulder",
        desc: "Edge strip for emergencies/support.",
        wiki: "Shoulder_(road)",
      },
      {
        title: "Shoulder Drop-off",
        desc: "Edge height difference hazardous to vehicles.",
        wiki: "Pavement_distress",
      },
      {
        title: "Side Drain",
        desc: "Drain running parallel to road to collect runoff.",
        wiki: "Drainage",
      },
      {
        title: "Side Slope",
        desc: "Transverse embankment or cut slope face.",
        wiki: "Cut_and_fill",
      },
      {
        title: "Sight Distance",
        desc: "Length visible to driver for stopping/passing.",
        wiki: "Stopping_sight_distance",
      },
      {
        title: "Silt Fence",
        desc: "Temporary sediment control barrier.",
        wiki: "Silt_fence",
      },
      {
        title: "Skid Resistance",
        desc: "Friction between tire and surface.",
        wiki: "Skid_resistance",
      },
      {
        title: "Slab Curling/Warpage",
        desc: "Up/down edge movement due to gradients.",
        wiki: "Concrete_pavement",
      },
      {
        title: "Slag Aggregate",
        desc: "Steel/iron manufacturing by-product used in mixes.",
        wiki: "Slag",
      },
      {
        title: "Slurry Seal",
        desc: "Cold-applied emulsion + fine aggregate thin overlay.",
        wiki: "Slurry_seal",
      },
      {
        title: "Slope Protection",
        desc: "Erosion control on embankments/cuts.",
        wiki: "Erosion_control",
      },
      {
        title: "SMAs (Stone Mastic Asphalt)",
        desc: "Gap-graded asphalt with stone skeleton and mastic.",
        wiki: "Stone_mastic_asphalt",
      },
      {
        title: "Softening Point (Ring-and-Ball)",
        desc: "Temperature where binder softens.",
        wiki: "Bitumen",
      },
      {
        title: "Soil Nailing",
        desc: "Reinforcing slopes/retaining walls with bars.",
        wiki: "Soil_nailing",
      },
      {
        title: "Soil Stabilization",
        desc: "Improving soil with additives or mechanical means.",
        wiki: "Soil_stabilization",
      },
      {
        title: "Sound Wall",
        desc: "Barrier reducing traffic noise to receivers.",
        wiki: "Noise_barrier",
      },
      {
        title: "Spall",
        desc: "Fragmentation/flaking of surface (concrete/asphalt).",
        wiki: "Spalling",
      },
      {
        title: "Speed Hump/Table/Cushion",
        desc: "Vertical deflections used for traffic calming.",
        wiki: "Speed_bump",
      },
      {
        title: "Spiral (Transition Curve)",
        desc: "Curve gradually increasing curvature.",
        wiki: "Spiral_easement",
      },
      {
        title: "Spot Improvement",
        desc: "Localized fix addressing a specific deficiency.",
        wiki: "Road",
      },
      {
        title: "Stabilized Base (CTB/ATB)",
        desc: "Base strengthened with cement/asphalt.",
        wiki: "Soil_stabilization",
      },
      {
        title: "Stakeout",
        desc: "Construction layout from plans using survey points.",
        wiki: "Construction_staking",
      },
      {
        title: "Standard Drawings",
        desc: "Agency details used repeatedly for works.",
        wiki: "Technical_drawing",
      },
      {
        title: "Standing Water",
        desc: "Ponding indicating drainage deficiency.",
        wiki: "Flooding",
      },
      {
        title: "Stormwater",
        desc: "Runoff from precipitation events.",
        wiki: "Stormwater",
      },
      {
        title: "Stringline",
        desc: "Taut line used to control alignment/elevation.",
        wiki: "String_(tools)",
      },
      {
        title: "Subbase",
        desc: "Granular layer between subgrade and base.",
        wiki: "Road_surface#Subbase_course",
      },
      {
        title: "Subgrade",
        desc: "Prepared natural soil supporting pavement.",
        wiki: "Subgrade",
      },
      {
        title: "Subsurface Drainage",
        desc: "Pipes/layers removing water from below pavement.",
        wiki: "Subsurface_drainage",
      },
      {
        title: "Superpave",
        desc: "Performance-based asphalt mix design system.",
        wiki: "Superpave",
      },
      {
        title: "Superelevation",
        desc: "Banking of roadway on horizontal curves.",
        wiki: "Superelevation",
      },
      {
        title: "Survey Bench Mark",
        desc: "Permanent reference for elevations.",
        wiki: "Benchmark_(surveying)",
      },
      {
        title: "Tack Coat",
        desc: "Light emulsion promoting bond between asphalt lifts.",
        wiki: "Tack_coat",
      },
      {
        title: "Temporary Traffic Control (TTC)",
        desc: "Devices/procedures for safe work-zone traffic.",
        wiki: "Traffic_cone",
      },
      {
        title: "Thermal Cracking",
        desc: "Transverse cracks from temperature cycling.",
        wiki: "Pavement_distress",
      },
      {
        title: "Thermoplastic Marking",
        desc: "Hot-applied long-life pavement marking.",
        wiki: "Road_surface_marking",
      },
      {
        title: "Tie Bar",
        desc: "Deformed steel across longitudinal joints to hold lanes together.",
        wiki: "Dowel_bar",
      },
      {
        title: "Tolerance",
        desc: "Permissible deviation from specified dimension.",
        wiki: "Engineering_tolerance",
      },
      {
        title: "Traffic Calming",
        desc: "Measures reducing speeds/volumes in neighborhoods.",
        wiki: "Traffic_calming",
      },
      {
        title: "Traffic Count Station",
        desc: "Installations collecting volume/class/speed data.",
        wiki: "Traffic_count",
      },
      {
        title: "Traffic Island",
        desc: "Raised area guiding and separating movements.",
        wiki: "Traffic_island",
      },
      {
        title: "Traffic Management Plan (TMP)",
        desc: "Plan to handle traffic during construction.",
        wiki: "Work_zone",
      },
      {
        title: "Transition Curve",
        desc: "Spiral connecting tangent and circular curves.",
        wiki: "Spiral_easement",
      },
      {
        title: "Transverse Joint",
        desc: "Joint perpendicular to centerline.",
        wiki: "Pavement_(road)",
      },
      {
        title: "Triaxial Test",
        desc: "Lab soil test for shear strength parameters.",
        wiki: "Triaxial_shear_test",
      },
      {
        title: "Truck Apron",
        desc: "Mountable inner ring at roundabouts for large trucks.",
        wiki: "Roundabout",
      },
      {
        title: "Turn Lane",
        desc: "Lane designated for turning movements.",
        wiki: "Turn_lane",
      },
      {
        title: "Underdrain",
        desc: "Perforated pipe collecting subsurface water.",
        wiki: "Subsurface_drainage",
      },
      {
        title: "Underpass",
        desc: "Facility passing beneath another.",
        wiki: "Underpass",
      },
      {
        title: "Uniform Load",
        desc: "Constant load per unit length.",
        wiki: "Load_distribution_(structural)",
      },
      {
        title: "Urban Collector",
        desc: "Street gathering local traffic to arterials.",
        wiki: "Road_classification",
      },
      {
        title: "UTM (Universal Transverse Mercator)",
        desc: "Map projection used for survey coordinates.",
        wiki: "Universal_Transverse_Mercator_coordinate_system",
      },
      {
        title: "Value Engineering (VE)",
        desc: "Methodical review to improve value/cost.",
        wiki: "Value_engineering",
      },
      {
        title: "VDF (Vehicle Damage Factor)",
        desc: "Axle load factor used in design traffic.",
        wiki: "Equivalent_single_axle_load",
      },
      {
        title: "Verge",
        desc: "Strip between carriageway and boundary, often vegetated.",
        wiki: "Road_verge",
      },
      {
        title: "Vertical Curve",
        desc: "Crest or sag curve in profile.",
        wiki: "Vertical_curve",
      },
      {
        title: "Vertical Drain",
        desc: "Wick drains accelerating consolidation.",
        wiki: "Prefabricated_vertical_drain",
      },
      {
        title: "Vibration Roller",
        desc: "Drum roller applying vibratory compaction.",
        wiki: "Compactor",
      },
      {
        title: "Viaduct",
        desc: "Long multi-span bridge carrying road over obstacles.",
        wiki: "Viaduct",
      },
      {
        title: "Visibility Splay",
        desc: "Triangle ensuring sight at junctions.",
        wiki: "Sight_distance",
      },
      {
        title: "Void Ratio",
        desc: "Measure of voids relative to solids in soil.",
        wiki: "Void_ratio",
      },
      {
        title: "Voussoir",
        desc: "Wedge block forming an arch (for arch culverts).",
        wiki: "Voussoir",
      },
      {
        title: "W-Beam Barrier",
        desc: "Corrugated steel guardrail standard.",
        wiki: "Jersey_barrier",
      },
      {
        title: "WBM (Water Bound Macadam)",
        desc: "Compacted broken stone with screenings and water.",
        wiki: "Macadam",
      },
      {
        title: "Wearing Course",
        desc: "Top asphalt layer in contact with traffic.",
        wiki: "Asphalt_concrete",
      },
      {
        title: "Weep Hole",
        desc: "Opening allowing water to escape retaining structures.",
        wiki: "Weep_hole",
      },
      {
        title: "Weigh-in-Motion (WIM)",
        desc: "System measuring axle/vehicle loads at speed.",
        wiki: "Weigh_in_motion",
      },
      {
        title: "Work Zone",
        desc: "Road section under active works and traffic control.",
        wiki: "Work_zone",
      },
      {
        title: "Workability (Concrete/Asphalt)",
        desc: "Ease of placement and compaction.",
        wiki: "Workability",
      },
      {
        title: "XPS Insulation",
        desc: "Extruded polystyrene used against frost in pavements.",
        wiki: "Expanded_polystyrene",
      },
      {
        title: "Yield Line (Concrete)",
        desc: "Plastic hinge pattern in slabs under load.",
        wiki: "Yield_line_theory",
      },
      {
        title: "Yield Strength (Steel)",
        desc: "Stress at onset of plastic deformation.",
        wiki: "Yield_strength",
      },
      {
        title: "Zebra Crossing",
        desc: "High-contrast pedestrian stripes on roadway.",
        wiki: "Pedestrian_crossing",
      },
      {
        title: "Zone of Influence",
        desc: "Region of soil affected by loading/excavation.",
        wiki: "Soil_mechanics",
      },
      {
        title: "Zoning Setback (ROW)",
        desc: "Required offset from road/lot line for builds.",
        wiki: "Zoning",
      },
    ],
    []
  );

  useEffect(() => {
    let alive = true;
    (async () => {
      const entries = await Promise.all(
        terms.map(async (t) => {
          try {
            const slug = t.wiki && t.wiki.trim().length > 0 ? t.wiki : t.title;
            const res = await fetch(
              `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
                slug
              )}`
            );
            if (!res.ok) throw new Error("no-thumb");
            const data = await res.json();
            const src: string | undefined = data?.thumbnail?.source;
            return [t.title, src || SAMPLE_IMAGE] as const;
          } catch {
            return [t.title, SAMPLE_IMAGE] as const;
          }
        })
      );
      if (alive) {
        const map: Record<string, string> = {};
        entries.forEach(([k, v]) => (map[k] = v));
        setThumbs(map);
      }
    })();
    return () => {
      alive = false;
    };
  }, [terms]);

  return (
    <Layout>
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            Road Construction Terminology
          </h1>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Explore essential road and highway engineering terms. These concise
            definitions cover pavement materials, design, construction,
            maintenance, drainage, traffic, and safety appurtenances—ideal for
            your terminology dictionary.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {terms.map((t, i) => (
              <GlassCard
                key={t.title + i}
                delay={0.05 * (i % 6)}
                className="overflow-hidden h-full"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-lg">
                  <img
                    src={thumbs[t.title] || SAMPLE_IMAGE}
                    alt={t.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = SAMPLE_IMAGE;
                    }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {twoLine(t.desc)}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
