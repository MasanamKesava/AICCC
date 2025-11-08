"use client";

import { useMemo } from "react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import { useThumbnails } from "@/hooks/useThumbnails";

type Term = {
  title: string;
  desc: string;
  wiki?: string;     // allow empty/undefined
  image?: string;    // optional manual override
};

const SAMPLE_IMAGE = "https://placehold.co/800x500?text=Bridge+Term";

// short helper
function twoLine(text: string, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const i = cut.lastIndexOf(" ");
  return (i > 0 ? cut.slice(0, i) : cut).trim() + "…";
}

export default function BridgeConstruction() {

  // 🔤 Alphabetical Bridge Terminology
  const terms: Term[] = useMemo(
    () => [
      {
        title: "Abutment",
        desc: "A substructure of stone, concrete, brick or timber supporting the ends of a single span bridge (or the extreme ends of a multi-span) and usually retaining the approach embankment.",
        wiki: "Abutment",
      },
      {
        title: "After-the-fact Permit",
        desc: "A Coast Guard designation for a bridge permit issued after the bridge has been completed.",
        wiki: "",
      },
      {
        title: "Anchor Span",
        desc: "The outermost span of a cantilever system that counterbalances the cantilever arm and transfers loads to the abutment.",
        wiki: "Anchor_span",
      },
      {
        title: "Anchorage Block",
        desc: "A massive end structure that secures suspension bridge cables; functionally akin to abutments on beam bridges.",
        wiki: "Anchorage_(structural_engineering)",
      },
      {
        title: "Approach",
        desc: "The part of the bridge that carries traffic from the land to the main superstructure.",
        wiki: "Bridge",
      },
      {
        title: "Approach Span",
        desc: "The span(s) connecting the abutment to the main span(s).",
        wiki: "Bridge_span",
      },
      {
        title: "Aqueduct",
        desc: "An open or enclosed channel or pipe that carries water; sometimes carried by a bridge and may also carry boats.",
        wiki: "Aqueduct_(water_supply)",
      },
      {
        title: "Arch",
        desc: "A curved structural member spanning an opening, carrying loads primarily in compression.",
        wiki: "Arch",
      },
      {
        title: "Arch Barrel",
        desc: "The curved inner (intrados) surface of an arch across the full width of the structure.",
        wiki: "Arch",
      },
      {
        title: "Arch Bridge",
        desc: "A bridge whose primary load path is an arch; may be deck, through, or tied arch forms.",
        wiki: "Arch_bridge",
      },
      {
        title: "Awards",
        desc: "Projects authorized to proceed with construction after bids have been received and accepted.",
        wiki: "",
      },
      {
        title: "Bascule Bridge",
        desc: "A movable ‘see-saw’ bridge with counterweights that raise one or two leaves around a trunnion to clear navigation.",
        wiki: "Bascule_bridge",
      },
      {
        title: "Beam",
        desc: "A horizontal member resisting bending; girders are large beams, and trusses can act as deeper, lighter ‘beams’.",
        wiki: "Beam_(structure)",
      },
      {
        title: "Beam Bridge",
        desc: "A bridge where beams support the deck; ends supported on piers or abutments.",
        wiki: "Beam_bridge",
      },
      {
        title: "Bearing",
        desc: "A device at supports that allows controlled rotation/translation due to loads, shrinkage, or temperature.",
        wiki: "Bridge_bearing",
      },
      {
        title: "Bed Timbers",
        desc: "Sacrificial timbers placed between a pier/abutment top and the underside of a truss to protect main members from rot.",
        wiki: "",
      },
      {
        title: "Bedrock",
        desc: "Solid rock underlying soil or overburden; often a foundation stratum.",
        wiki: "Bedrock",
      },
      {
        title: "Bent",
        desc: "A transverse substructure frame (columns + cap) supporting vertical loads; end-bents form part of abutments.",
        wiki: "Bent_(structural_engineering)",
      },
      {
        title: "Bid Opening",
        desc: "The formal opening of contractor bids by a transportation agency.",
        wiki: "",
      },
      {
        title: "Bowstring Truss",
        desc: "A truss with a curved top chord and straight bottom chord meeting at each end.",
        wiki: "Bowstring_arch_bridge",
      },
      {
        title: "Box Girder Bridge",
        desc: "Bridge with hollow box-section girders (steel or prestressed concrete), common for flyovers and elevated rail.",
        wiki: "Box_girder_bridge",
      },
      {
        title: "Brace",
        desc: "A member (often diagonal) that stiffens a frame or truss against lateral or torsional loads.",
        wiki: "Bracing_(structural)",
      },
      {
        title: "Brace-Ribbed Arch",
        desc: "An arch with parallel chords connected by open webbing; also called a trussed arch.",
        wiki: "",
      },
      {
        title: "Bridge Condition Ratings",
        desc: "Numeric scores (0–9) for deck, superstructure, and substructure from safety inspections; low ratings can trigger ‘structurally deficient’ status.",
        wiki: "",
      },
      {
        title: "Bridge Deck",
        desc: "The roadway/pedestrian surface (including shoulders) that carries traffic loads.",
        wiki: "Bridge_deck",
      },
      {
        title: "Cable",
        desc: "A tension element (often wire rope) spanning towers and anchorages in suspension systems; hangers attach to the deck.",
        wiki: "Suspension_bridge",
      },
      {
        title: "Cable-Stayed Bridge",
        desc: "Deck directly supported by stays from one or more towers; no main cable over towers or massive end anchorages.",
        wiki: "Cable-stayed_bridge",
      },
      {
        title: "Caisson",
        desc: "A large watertight box (often reinforced concrete) used to build deep foundations below water; later becomes the pier base.",
        wiki: "Caisson_(engineering)",
      },
      {
        title: "Camber",
        desc: "An intentional upward curvature built into a member to offset expected deflection.",
        wiki: "Camber_(engineering)",
      },
      {
        title: "Camelback Truss",
        desc: "A polygonal (curved profile) top-chord truss with straight bottom chord meeting at ends.",
        wiki: "",
      },
      {
        title: "Cantilever",
        desc: "A projecting member fixed at one end; in bridges, arms project from piers to support a central suspended span.",
        wiki: "Cantilever_bridge",
      },
      {
        title: "Cast-in-Place",
        desc: "Concrete poured into formwork on site to cure in its final position.",
        wiki: "Cast-in-place_concrete",
      },
      {
        title: "Castellated Girder",
        desc: "An I-girder cut in a zigzag and rewelded to increase depth (and strength) with minimal weight increase.",
        wiki: "Castellated_beam",
      },
      {
        title: "Catenary",
        desc: "Curve of a uniform flexible cable hanging under its own weight; approximates suspension cable profile.",
        wiki: "Catenary",
      },
      {
        title: "Catwalks",
        desc: "Temporary footways used by crews to spin main cables and attach hangers.",
        wiki: "",
      },
      {
        title: "Centering",
        desc: "Temporary falsework supporting an arch during construction.",
        wiki: "Falsework",
      },
      {
        title: "Chord",
        desc: "Either principal longitudinal member of a truss (top or bottom), linked by web members.",
        wiki: "Truss",
      },
      {
        title: "Closed Spandrel Deck Arch",
        desc: "Arch bridge with solid fill between arch and deck; loads transfer via fill to the arch.",
        wiki: "Arch_bridge",
      },
      {
        title: "Column",
        desc: "A vertical compression member supporting loads from above.",
        wiki: "Column",
      },
      {
        title: "Column Cross Brace",
        desc: "Transverse brace between main longitudinal members/columns to enhance stability.",
        wiki: "",
      },
      {
        title: "Compression Member",
        desc: "A member primarily in compression (e.g., some truss diagonals, end posts).",
        wiki: "Compression_member",
      },
      {
        title: "Condition Ratings",
        desc: "NBIS ratings (0–9) comparing a bridge’s components to ‘as new’ condition.",
        wiki: "",
      },
      {
        title: "Continuous Span Beam Bridge",
        desc: "Multiple spans continuous over supports, reducing mid-span moments and increasing efficiency.",
        wiki: "Continuous_beam",
      },
      {
        title: "Crown",
        desc: "Roadway: the high centerline to shed water; Arch: the top (keystone region).",
        wiki: "",
      },
      {
        title: "Culvert",
        desc: "A drain/pipe/channel allowing water to pass under a road or embankment.",
        wiki: "Culvert",
      },
      {
        title: "Damping",
        desc: "Energy dissipation that reduces vibrations and returns the system toward equilibrium.",
        wiki: "Damping",
      },
      {
        title: "Dead Load",
        desc: "The permanent static load from the structure’s self-weight and fixtures.",
        wiki: "Dead_load",
      },
      {
        title: "Deck",
        desc: "The roadway surface of a bridge, including shoulders and sidewalks.",
        wiki: "Bridge_deck",
      },
      {
        title: "Deck Bridge",
        desc: "A bridge in which the primary supporting members are beneath the roadway.",
        wiki: "",
      },
      {
        title: "Deck Plate Girder",
        desc: "Bridge using built-up plate girders (I-shape from plates) carrying a deck on top, often with cross-bracing.",
        wiki: "Plate_girder",
      },
      {
        title: "Deck Truss",
        desc: "A truss configuration where the deck is supported on top of the truss.",
        wiki: "Truss_bridge",
      },
      {
        title: "Deck Truss Cantilever Bridge",
        desc: "Cantilevered deck trusses support a central suspended span without meeting in the middle.",
        wiki: "Cantilever_bridge",
      },
      {
        title: "Deflection",
        desc: "The displacement of a member or system under load.",
        wiki: "Deflection_(engineering)",
      },
      {
        title: "Diaphragm",
        desc: "Cross-frames or bracing between main girders that distribute loads and provide stability.",
        wiki: "Diaphragm_(structural_engineering)",
      },
      {
        title: "Diagonal",
        desc: "A sloping member in trusses/bracing systems carrying tension or compression.",
        wiki: "Truss",
      },
      {
        title: "Diversion Channel",
        desc: "A temporary bypass channel to route water around a work site.",
        wiki: "",
      },
      {
        title: "Downstream Face",
        desc: "The side of a bridge facing away from oncoming water flow.",
        wiki: "",
      },
      {
        title: "EIS (Environmental Impact Statement)",
        desc: "A comprehensive study of social, economic, and environmental impacts for federally-assisted projects.",
        wiki: "Environmental_impact_statement",
      },
      {
        title: "Embankment",
        desc: "Angled earth grading forming approaches or retaining soils.",
        wiki: "Embankment_(transportation)",
      },
      {
        title: "End Post",
        desc: "The outermost compression member at the end of a truss.",
        wiki: "Truss_bridge",
      },
      {
        title: "Expansion Joint",
        desc: "A device allowing controlled movement between bridge segments due to temperature, shrinkage, and loads.",
        wiki: "Expansion_joint",
      },
      {
        title: "Extrados",
        desc: "The outer curve/surface of an arch.",
        wiki: "Extrados",
      },
      {
        title: "Eye Bar",
        desc: "A tension member with an enlarged ‘eye’ at each end to accept a pin connection.",
        wiki: "Eyebar",
      },
      {
        title: "Fatigue",
        desc: "Damage accumulation in materials from repeated stress cycles, possibly leading to fracture.",
        wiki: "Fatigue_(material)",
      },
      {
        title: "FHWA",
        desc: "Federal Highway Administration — administers the Federal-Aid Highway Program.",
        wiki: "Federal_Highway_Administration",
      },
      {
        title: "Fill",
        desc: "Earth/stone material used to build embankments or fill closed spandrels.",
        wiki: "Fill_(construction)",
      },
      {
        title: "Fixed Arch",
        desc: "An arch with fixed (moment-resisting) bearings; compare with two-hinged/three-hinged arches.",
        wiki: "Arch_bridge",
      },
      {
        title: "Fixed-span Bridge",
        desc: "A bridge without a movable/draw span.",
        wiki: "",
      },
      {
        title: "Floor Beam",
        desc: "A transverse member supporting the deck and distributing loads to main girders/trusses.",
        wiki: "Floor_beam",
      },
      {
        title: "Flutter",
        desc: "Self-excited aeroelastic vibration that can grow to large amplitudes.",
        wiki: "Flutter_(aerodynamics)",
      },
      {
        title: "Flyover",
        desc: "An overpass carrying one roadway over another at a higher level.",
        wiki: "Overpass",
      },
      {
        title: "Footing",
        desc: "The enlarged foundation element bearing on soil/rock or piles, usually below grade.",
        wiki: "Foundation_(engineering)",
      },
      {
        title: "Force",
        desc: "Any action that changes or tends to change the state of rest or motion of a body.",
        wiki: "Force",
      },
      {
        title: "Forms",
        desc: "Temporary molds used to shape placed concrete.",
        wiki: "Formwork",
      },
      {
        title: "Formwork",
        desc: "Complete system (molds, supports, hardware, bracing) that carries fresh concrete loads safely.",
        wiki: "Formwork",
      },
      {
        title: "Fracture-Critical",
        desc: "A non-redundant structural system where failure of a key member could lead to collapse.",
        wiki: "Fracture-critical_member",
      },
      {
        title: "Full-Depth Replacement of Concrete Deck",
        desc: "Repair method removing deteriorated concrete to base and replacing with new concrete.",
        wiki: "",
      },
      {
        title: "Functionally Obsolete",
        desc: "A bridge not meeting current geometric standards (lanes, shoulders, clearances) but not necessarily unsafe.",
        wiki: "",
      },
      {
        title: "Gabion",
        desc: "A galvanized wire basket filled with stones for abutments or retaining walls.",
        wiki: "Gabion",
      },
      {
        title: "Girder",
        desc: "A large primary beam (often built-up steel or prestressed concrete) supporting deck/Stringers.",
        wiki: "Girder",
      },
      {
        title: "Girder Bridge",
        desc: "Common bridge type using I-girders or box girders; includes π- and T-shaped variants.",
        wiki: "Girder_bridge",
      },
      {
        title: "Glu-lam Freespan",
        desc: "Glued-laminated timber bridges capable of freespan >100 ft for overpasses or ravines.",
        wiki: "Glued_laminated_timber",
      },
      {
        title: "Gross Vehicle Weight (GVW)",
        desc: "Curb weight plus payload; relevant to bridge live load limits.",
        wiki: "Gross_vehicle_weight_rating",
      },
      {
        title: "Gusset Plate",
        desc: "A plate that connects and transfers forces among truss members at a joint.",
        wiki: "Gusset_plate",
      },
      {
        title: "Hanger",
        desc: "A vertical tension member suspending deck from a cable or arch.",
        wiki: "Suspension_bridge",
      },
      {
        title: "Haunch",
        desc: "The thickened portion of a beam near its supports (or where a flange meets web) that increases strength at critical points; often seen in bridge beams with haunch-flange transitions.",
        wiki: "Haunch_(engineering)",
        image: "/assets/Haunch.png",
      },

      {
        title: "Haunched Girder",
        desc: "A girder with increased depth near supports; deck fillets/haunches can add dead load but little strength.",
        wiki: "",
      },
      {
        title: "Headwall",
        desc: "The retaining face at an abutment end, keeping approach soils in place and limiting erosion.",
        wiki: "Retaining_wall",
      },
      {
        title: "Hinged Arch",
        desc: "Two-hinged (at springings) or three-hinged (adds crown hinge) arch allowing rotation at hinges.",
        wiki: "Arch_bridge",
      },
      {
        title: "Humpback",
        desc: "Profile with steep approaches leading to a relatively high crest over the deck.",
        wiki: "",
      },
      {
        title: "Impost",
        desc: "The bearing surface at the springing of an arch receiving the vertical reaction.",
        wiki: "Impost",
      },
      {
        title: "Intrados",
        desc: "The inner curve/surface of an arch (arch barrel).",
        wiki: "Intrados",
      },
      {
        title: "Jersey Barrier",
        desc: "A low concrete safety barrier shaped to redirect vehicles back to their lane.",
        wiki: "Jersey_barrier",
      },
      {
        title: "Joint",
        desc: "A connection between adjacent parts; may be rigid, pinned, or roller; often includes expansion joints.",
        wiki: "Structural_joint",
      },
      {
        title: "Keystone",
        desc: "The top wedge-shaped voussoir at the crown locking an arch.",
        wiki: "Keystone_(architecture)",
      },
      {
        title: "Knee Brace",
        desc: "A short diagonal brace connecting a deck/floor beam to a main beam to prevent buckling.",
        wiki: "",
      },
      {
        title: "Lag",
        desc: "Crosspieces connecting centering ribs for arch construction.",
        wiki: "",
      },
      {
        title: "Lateral Bracing",
        desc: "Members arranged to stabilize a structure laterally (e.g., deck, top-chord lateral systems).",
        wiki: "Bracing_(structural)",
      },
      {
        title: "Lattice",
        desc: "A gridwork of small members; used decoratively or as a laced/trussed system.",
        wiki: "Lattice",
      },
      {
        title: "Letting Date",
        desc: "The scheduled date for bid opening by the agency.",
        wiki: "",
      },
      {
        title: "Lift Span",
        desc: "The movable portion of a vertical-lift bridge that raises vertically to clear navigation.",
        wiki: "Vertical-lift_bridge",
      },
      {
        title: "Live Load",
        desc: "Variable loads such as vehicles, wind, water, or seismic actions.",
        wiki: "Live_load",
      },
      {
        title: "Load",
        desc: "Forces or deformations applied to a structure from gravity, environment, or usage.",
        wiki: "Structural_load",
      },
      {
        title: "Load Posted",
        desc: "Status when a bridge is restricted below legal load limits due to capacity; requires posting signs.",
        wiki: "",
      },
      {
        title: "Lower Chord",
        desc: "The bottom longitudinal chord of a truss.",
        wiki: "Truss",
      },
      {
        title: "Main Beam",
        desc: "A primary beam supporting spans and bearing directly on columns/walls.",
        wiki: "",
      },
      {
        title: "Main Span",
        desc: "The longest span between principal supports; used to compare bridges.",
        wiki: "Bridge_span",
      },
      {
        title: "Member",
        desc: "An individual structural element (angle, plate, built-up shape) forming part of a frame or truss.",
        wiki: "Structural_member",
      },
      {
        title: "Movable Bridge",
        desc: "A bridge whose deck moves to clear navigation: swing, bascule, or vertical lift.",
        wiki: "Moveable_bridge",
      },
      {
        title: "Obligation Authority",
        desc: "The maximum federal funds that can be obligated in a fiscal year; controls spending rate.",
        wiki: "",
      },
      {
        title: "Open Spandrel Deck Arch",
        desc: "Arch bridge with open verticals/columns between arch and deck.",
        wiki: "Arch_bridge",
      },
      {
        title: "Oscillation",
        desc: "Periodic motion about an equilibrium (described by amplitude, frequency, and phase).",
        wiki: "Oscillation",
      },
      {
        title: "Parabola",
        desc: "Mathematical curve; inverted parabola approximates an arch shape under uniform load.",
        wiki: "Parabola",
      },
      {
        title: "Parapet",
        desc: "A low wall/rail along the deck edge to protect users.",
        wiki: "Parapet",
      },
      {
        title: "Pier",
        desc: "An intermediate vertical substructure supporting superstructure spans between abutments.",
        wiki: "Pier_(architecture)",
      },
      {
        title: "Pile",
        desc: "A long slender foundation element driven/placed into the ground to carry loads to competent strata.",
        wiki: "Pile_(foundation)",
      },
      {
        title: "Pile Bent",
        desc: "A row/cluster of piles connected by a cap to form a bent.",
        wiki: "",
      },
      {
        title: "Pile Driver",
        desc: "Machine that repeatedly drops a weight to drive piles to required capacity.",
        wiki: "Pile_driver",
      },
      {
        title: "Pile-Supported Bridge",
        desc: "A structure supported by piles at regular intervals; can be built to great lengths/heights.",
        wiki: "",
      },
      {
        title: "Pin",
        desc: "A cylindrical bar used in pin-connected trusses through eyebar holes or gusset plates.",
        wiki: "Pin_joint",
      },
      {
        title: "Pony Truss",
        desc: "Truss where the deck is near the top chord but there’s no cross-bracing above the roadway.",
        wiki: "Pony_truss_bridge",
      },
      {
        title: "Portal",
        desc: "The framed opening at the end of a through truss; also a tunnel entrance.",
        wiki: "Portal_(architecture)",
      },
      {
        title: "Post",
        desc: "A vertical compression member in a truss, perpendicular to the bottom chord.",
        wiki: "Truss",
      },
      {
        title: "Pre-Cast Girder",
        desc: "A factory-cast girder (often prestressed) transported and erected by crane.",
        wiki: "Prestressed_concrete",
      },
      
      {
        title: "Public Hearing",
        desc: "A meeting held to solicit public comments on proposed projects.",
        wiki: "",
      },
      {
        title: "Pylon",
        desc: "A tall tower supporting stays or cables in cable-stayed/suspension bridges.",
        wiki: "Pylon_(architecture)",
      },
      {
        title: "Railing",
        desc: "Fence-like construction at deck edges to protect vehicles and pedestrians.",
        wiki: "Guard_rail",
      },
      {
        title: "Range of Stress",
        desc: "Difference between minimum and maximum stress in a member over a cycle.",
        wiki: "",
      },
      
      {
        title: "Redundancy",
        desc: "Having more load paths than necessary so single failures don’t cause collapse.",
        wiki: "Structural_redundancy",
      },
      {
        title: "Redundant Member",
        desc: "A member that makes a structure statically indeterminate and lowers stresses in the determinate base system.",
        wiki: "",
      },
      {
        title: "Reinforced Concrete",
        desc: "Concrete with embedded steel bars/mesh to resist tension.",
        wiki: "Reinforced_concrete",
      },
      {
        title: "Reinforcement",
        desc: "Adding capacity to a member (e.g., rebar in concrete, gusset plates at truss joints).",
        wiki: "Reinforcement_(engineering)",
      },
      {
        title: "Resonance",
        desc: "Large vibration when forcing frequency matches a structure’s natural frequency.",
        wiki: "Resonance",
      },
      {
        title: "Retractile Draw Bridge",
        desc: "A draw span that slides horizontally (longitudinally/diagonally) from closed to open.",
        wiki: "Moveable_bridge",
      },
      {
        title: "Revet",
        desc: "To cover an embankment with stone or other material to prevent erosion.",
        wiki: "Riprap",
      },
      {
        title: "Revetment",
        desc: "A protective facing of stones/masonry to resist erosion on banks/embankments.",
        wiki: "Revetment",
      },
      {
        title: "Rib",
        desc: "One of several parallel arch members along the bridge length, especially on metal arches.",
        wiki: "",
      },
      {
        title: "Rigid",
        desc: "Describes components that resist deformation under load.",
        wiki: "",
      },
      {
        title: "Rigidity",
        desc: "A structure’s resistance to shape change under load.",
        wiki: "Rigidity_(mechanics)",
      },
      {
        title: "Rigid Frame",
        desc: "A frame with moment-resisting joints (no hinges).",
        wiki: "Rigid_frame",
      },
      {
        title: "Rigid Frame Bridge",
        desc: "Bridge where deck and piers are monolithic and act as a single rigid unit.",
        wiki: "Rigid_frame_bridge",
      },
      {
        title: "Rigid Frame Pier",
        desc: "A pier with multiple columns and a monolithic cap acting as a frame.",
        wiki: "",
      },
      {
        title: "Rip Rap",
        desc: "Placed rock/gabions to protect banks, beds, and shores from erosion and scour.",
        wiki: "Riprap",
      },
      {
        title: "Rivet",
        desc: "A pre-1970s hot-driven fastener forming a second head in place to clamp parts together.",
        wiki: "Rivet",
      },
      {
        title: "Riveted Connection",
        desc: "Rigid connection assembled with rivets; increases joint strength by clamping action.",
        wiki: "Rivet",
      },
      {
        title: "Riveted Joint",
        desc: "A joint united by rivets through predrilled or punched holes.",
        wiki: "Rivet",
      },
      {
        title: "Rocker Bearing",
        desc: "Bearing allowing expansion/contraction via rocking motion.",
        wiki: "",
      },
      {
        title: "Rocker Bent",
        desc: "A bent with a hinge/articulation to accommodate longitudinal movement.",
        wiki: "",
      },
      {
        title: "Roller",
        desc: "Steel cylinder providing longitudinal movement by rolling contact.",
        wiki: "Roller_bearing",
      },
      {
        title: "Roller Bearing",
        desc: "One or more rollers housed to permit longitudinal movement of the superstructure.",
        wiki: "Roller_bearing",
      },
      {
        title: "Roller Nest",
        desc: "A group of rollers facilitating thermal/superimposed longitudinal movements.",
        wiki: "",
      },
      {
        title: "Rolling Lift Bridge",
        desc: "Bascule that rolls on girders during operation (Scherzer type).",
        wiki: "Scherzer_rolling_lift_bridge",
      },
      {
        title: "Segmental Arch",
        desc: "An arch with a circular arc less than a semicircle (flatter than Roman semicircular).",
        wiki: "Arch",
      },
      {
        title: "Shaft",
        desc: "A vertical load-bearing element transferring loads via end bearing and skin friction.",
        wiki: "Deep_foundation",
      },
      {
        title: "Shear",
        desc: "An internal action causing adjacent material layers to slide relative to each other.",
        wiki: "Shear_stress",
      },
      {
        title: "Shoefly",
        desc: "A temporary bridge used while the main structure is under construction.",
        wiki: "",
      },
      {
        title: "Silt",
        desc: "Fine sediment particles about 0.00016–0.0024 inches in diameter.",
        wiki: "Silt",
      },
      {
        title: "Simple Span",
        desc: "A span with ends supported at two points and no continuity over supports.",
        wiki: "Simply_supported_beam",
      },
      {
        title: "Skew",
        desc: "Non-perpendicular alignment between superstructure and substructure; defined by an acute skew angle.",
        wiki: "Skew_(bridge)",
      },
      {
        title: "Span",
        desc: "The distance between supports, or a specific bridge unit spanning between supports.",
        wiki: "Bridge_span",
      },
      {
        title: "Spandrel",
        desc: "The triangular area between the arch and deck; ‘closed’ encloses fill, ‘open’ uses columns/walls.",
        wiki: "Spandrel_(architecture)",
      },
      {
        title: "Specifications",
        desc: "Documents defining materials and construction requirements for a bridge.",
        wiki: "Specification_(technical_standard)",
      },
      {
        title: "Splice Plate",
        desc: "A plate used to join two girder segments; usually riveted/bolted.",
        wiki: "Splice",
      },
      {
        title: "Springer",
        desc: "The first voussoir resting on the impost at the arch springing.",
        wiki: "",
      },
      {
        title: "Stanchion",
        desc: "A larger vertical post supporting a railing (smaller ones are balusters).",
        wiki: "Stanchion",
      },
      {
        title: "Stay",
        desc: "A diagonal brace (often a cable in stayed bridges) minimizing movement.",
        wiki: "Cable-stayed_bridge",
      },
      {
        title: "Steel Stringers",
        desc: "Longitudinal beams supporting the deck and resting on abutments/bents.",
        wiki: "",
      },
      {
        title: "Stiff",
        desc: "Describes elements with high resistance to deformation.",
        wiki: "",
      },
      {
        title: "Stiffener",
        desc: "An angle/plate attached to a web to prevent local buckling.",
        wiki: "Stiffener",
      },
      {
        title: "Stringer",
        desc: "Longitudinal deck-supporting beam spanning between floor beams or bents.",
        wiki: "Stringer_(construction)",
      },
      {
        title: "Structurally Deficient & Sufficiency Rating",
        desc: "An overall 0–100 rating (FHWA formula) for condition/serviceability/essentiality; low ratings and poor components may trigger weight posting and funding eligibility.",
        wiki: "",
      },
      {
        title: "Strut",
        desc: "A compression member resisting axial load (often in bracing).",
        wiki: "Strut",
      },
      {
        title: "Substructure",
        desc: "All parts supporting the superstructure: abutments/end-bents, piers/bents, footings, piling.",
        wiki: "Bridge",
      },
      {
        title: "Superstructure",
        desc: "All components spanning the obstacle: deck, main structural members, parapets/rails, sidewalks, lighting, drainage.",
        wiki: "Bridge",
      },
      {
        title: "Suspended Span",
        desc: "A simple beam hung between the free ends of cantilever arms of adjacent spans.",
        wiki: "Cantilever_bridge",
      },
      {
        title: "Suspenders (Hangers)",
        desc: "Tension members hanging the deck from a main cable or arch.",
        wiki: "Suspension_bridge",
      },
      {
        title: "Suspension",
        desc: "Temporary halting of a company/individual’s ability to bid/participate in proceedings.",
        wiki: "",
      },
      {
        title: "Suspension Bridge",
        desc: "A bridge whose deck hangs from cables draped over towers and anchored at both ends.",
        wiki: "Suspension_bridge",
      },
      {
        title: "Swing Bridge",
        desc: "A movable bridge that rotates horizontally about a pivot pier to open a navigation channel.",
        wiki: "Swing_bridge",
      },
      {
        title: "Tension",
        desc: "A pulling (axial) force that stretches a member.",
        wiki: "Tension_(mechanics)",
      },
      {
        title: "Tension Member",
        desc: "Any member carrying axial tension (e.g., eyebars, some truss diagonals).",
        wiki: "Tension_(mechanics)",
      },
      {
        title: "Through Truss",
        desc: "A truss configuration with traffic passing through; top chords cross-braced above roadway.",
        wiki: "Truss_bridge",
      },
      {
        title: "Tie",
        desc: "A tension element connecting components (e.g., the tie in a tied arch).",
        wiki: "Tie_(structure)",
      },
      {
        title: "Tied Arch",
        desc: "An arch with a tension tie across the springings to resist horizontal thrust.",
        wiki: "Tied-arch_bridge",
      },
      {
        title: "Timber Freespan",
        desc: "Timber spans up to ~26 ft, often for small creek crossings.",
        wiki: "",
      },
      {
        title: "Torsion",
        desc: "A twisting action producing shear stresses around a member’s axis.",
        wiki: "Torsion_(mechanics)",
      },
      {
        title: "Tower",
        desc: "A tall pier/frame supporting suspension cables or stayed cables.",
        wiki: "Bridge_tower",
      },
      {
        title: "Trestle",
        desc: "A structure of short spans on multiple bents, common in rail/viaducts.",
        wiki: "Trestle_bridge",
      },
      {
        title: "Truss",
        desc: "A framework of members forming triangles to efficiently carry loads.",
        wiki: "Truss",
      },
      {
        title: "Trussed Arch",
        desc: "A curved truss forming an arch-like load path.",
        wiki: "",
      },
      {
        title: "Two-Hinged & Three-Hinged Arches",
        desc: "Arch types with hinge(s) at springings and sometimes at crown; three-hinged eases foundation movement but deflects more.",
        wiki: "Arch_bridge",
      },
      {
        title: "U-Bolt",
        desc: "A U-shaped rod with threaded ends and nuts for clamping components.",
        wiki: "U-bolt",
      },
      {
        title: "Ultimate Strength",
        desc: "The maximum stress a material can withstand before fracture.",
        wiki: "Ultimate_tensile_strength",
      },
      {
        title: "Ultrasonic Testing",
        desc: "Nondestructive testing using high-frequency sound waves to detect flaws.",
        wiki: "Ultrasonic_testing",
      },
      {
        title: "Underpass",
        desc: "The lower facility at a grade-separated crossing.",
        wiki: "Underpass",
      },
      {
        title: "Uniform Load",
        desc: "A constant load per unit length over a member.",
        wiki: "Load_distribution_(structural)",
      },
      {
        title: "Unit Stress",
        desc: "Stress per unit area (e.g., MPa), typically axial stress.",
        wiki: "Stress_(mechanics)",
      },
      {
        title: "Uplift",
        desc: "A negative reaction tending to lift a member or foundation.",
        wiki: "Uplift_(geology)",
      },
      {
        title: "Upper Chord",
        desc: "The top chord of a truss.",
        wiki: "Truss",
      },
      {
        title: "Upstream Face",
        desc: "The side of a bridge facing into the oncoming water flow.",
        wiki: "",
      },
      {
        title: "Vault",
        desc: "An enclosing roof formed by a series of adjacent arches.",
        wiki: "Vault_(architecture)",
      },
      {
        title: "Vertical Curve",
        desc: "A crest or sag curve in the roadway profile for smooth grade transitions.",
        wiki: "Vertical_curve",
      },
      {
        title: "Vertical Lift Bridge",
        desc: "A movable bridge whose span is lifted vertically by machinery at each end.",
        wiki: "Vertical-lift_bridge",
      },
      {
        title: "Viaduct",
        desc: "A long multi-span structure, often concrete, carrying a roadway/railway across a wide area.",
        wiki: "Viaduct",
      },
      {
        title: "Void",
        desc: "An unfilled space in concrete; can indicate honeycombing/defects.",
        wiki: "Concrete#Void",
      },
      {
        title: "Voussoir",
        desc: "A wedge-shaped block used to form an arch.",
        wiki: "Voussoir",
      },
      {
        title: "Voussoir Arch",
        desc: "An arch constructed from wedge-shaped voussoirs transferring load to abutments.",
        wiki: "Voussoir",
      },
      {
        title: "Waterway",
        desc: "The available width for water passage beneath a bridge.",
        wiki: "Waterway",
      },
      {
        title: "Wearing Surface",
        desc: "Topmost layer of roadway receiving traffic wear (wearing course).",
        wiki: "Pavement_(road)",
      },
      {
        title: "Web",
        desc: "The vertical plate of an I-girder or the system connecting chords in a truss.",
        wiki: "I-beam",
      },
      {
        title: "Web Members",
        desc: "Intermediate truss members (usually vertical or inclined) connecting chords.",
        wiki: "Truss",
      },
      {
        title: "Web Plate",
        desc: "The plate forming the web of a plate girder or built-up member.",
        wiki: "Plate_girder",
      },
      {
        title: "Web Stiffener",
        desc: "A small member attached to a web to prevent local buckling.",
        wiki: "Stiffener",
      },
      {
        title: "Weephole",
        desc: "A drainage hole through a retaining wall to relieve water pressure.",
        wiki: "Weep_hole",
      },
      {
        title: "Weigh in Motion (WIM)",
        desc: "Equipment that measures truck axle loads while in motion.",
        wiki: "Weigh_in_motion",
      },
      {
        title: "Weld",
        desc: "A fused joint between metals made by heat/pressure.",
        wiki: "Welding",
      },
      {
        title: "Wheel Guard",
        desc: "A raised curb along traffic lanes to protect structures beyond the roadway edge.",
        wiki: "",
      },
      {
        title: "Wheel Load",
        desc: "The portion of a vehicle load transmitted through one wheel to the structure.",
        wiki: "",
      },
      {
        title: "Wichert Truss",
        desc: "A 1930 deck-arch-like cantilever truss (E. M. Wichert) recognizable by an open diamond panel above each pier.",
        wiki: "",
      },
      {
        title: "Wire Rope",
        desc: "Steel cable composed of twisted wire strands.",
        wiki: "Wire_rope",
      },
      {
        title: "Working Stress",
        desc: "Stress in a member under service/design load; used in allowable stress design.",
        wiki: "Allowable_stress_design",
      },
      {
        title: "X-Bracing",
        desc: "Cross bracing arranged in an ‘X’ to stiffen bents or piles.",
        wiki: "Cross_bracing",
      },
      {
        title: "Yield",
        desc: "Permanent deformation when stress exceeds elastic limit.",
        wiki: "Yield_(engineering)",
      },
      {
        title: "Yield Stress",
        desc: "Stress at which noticeable plastic deformation begins under slowly increasing load.",
        wiki: "Yield_strength",
      },
    ],
    []
  );
// Build a list for the thumbnail hook:
  // - use t.wiki if present; otherwise fall back to the title
  // - if t.image is provided, it takes precedence (no fetch needed)
  const fetchList = useMemo(
    () =>
      terms.map((t) => ({
        key: t.title,
        query: (t.wiki && t.wiki.trim().length > 0) ? t.wiki : t.title,
        fixed: t.image, // manual overrides (e.g., /assets/Haunch.png)
      })),
    [terms]
  );

  // Centralized image fetching with multi-source fallbacks
  const thumbs = useThumbnails(fetchList, SAMPLE_IMAGE);

  return (
    <Layout>
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Bridge Construction Terminology</h1>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Explore essential terms from the Glossary of Bridge Terms. Images are fetched via Wikipedia/Wikimedia, with smart fallbacks.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {terms.map((t, i) => (
              <GlassCard key={t.title + i} delay={0.05 * (i % 6)} className="overflow-hidden h-full">
                <div className="relative h-40 w-full overflow-hidden rounded-lg">
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