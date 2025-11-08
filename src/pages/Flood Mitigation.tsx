"use client";

import { useMemo } from "react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import { useThumbnails } from "@/hooks/useThumbnails";

type Term = {
  title: string;
  desc: string;
  wiki: string; // Wikipedia page title (best effort)
  image?: string; // optional manual override
};

const WIKI_FALLBACK =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Wikipedia-logo.png/240px-Wikipedia-logo.png";

// Trim to ~2 lines without requiring a plugin
function twoLine(text: string, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const i = cut.lastIndexOf(" ");
  return (i > 0 ? cut.slice(0, i) : cut).trim() + "…";
}

export default function FloodMitigation() {
  // ALL CARDS (flood mitigation terms)
  const terms: Term[] = useMemo(
    () => [
      { title: "Levee", desc: "Raised embankment along a river to keep floodwaters from spilling into adjacent land.", wiki: "Levee" },
      { title: "Floodwall", desc: "Reinforced concrete or masonry wall that blocks floodwaters in urban areas.", wiki: "Flood_wall" },
      { title: "Retention Basin", desc: "Permanent pool that stores stormwater and releases it slowly to reduce peak flows.", wiki: "Detention_basin" },
      { title: "Detention Basin", desc: "Normally dry basin that temporarily detains runoff during storms and drains afterward.", wiki: "Detention_basin" },
      { title: "Floodway", desc: "Designated corridor that safely conveys floodwater with minimal damage to development.", wiki: "Floodway" },
      { title: "Floodplain Zoning", desc: "Land-use rules restricting development in high-risk flood zones.", wiki: "Floodplain" },
      { title: "Culvert", desc: "Conduit under roads/railways that maintains water flow to prevent overtopping.", wiki: "Culvert" },
      { title: "Spillway", desc: "Controlled outlet from a dam/reservoir to safely release excess water.", wiki: "Spillway" },
      { title: "Check Dam", desc: "Small barrier across channels that slows flow, promotes infiltration, and reduces erosion.", wiki: "Check_dam" },
      { title: "Watershed Management", desc: "Integrated planning of land and water within a catchment to curb damaging runoff.", wiki: "Watershed_management" },
      { title: "Permeable Pavement", desc: "Paving that allows water to infiltrate, reducing runoff and recharging groundwater.", wiki: "Permeable_paving" },
      { title: "Green Infrastructure", desc: "Nature-based features (bioswales, rain gardens, wetlands) for stormwater control.", wiki: "Green_infrastructure" },
      { title: "Bioswale", desc: "Vegetated, shallow channel that slows, filters, and infiltrates stormwater.", wiki: "Bioswale" },
      { title: "Rain Garden", desc: "Shallow planted basin that captures and infiltrates roof/yard runoff.", wiki: "Rain_garden" },
      { title: "Wetland Restoration", desc: "Reinstating wetlands to store floodwater and enhance ecology.", wiki: "Wetland_conservation" },
      { title: "Rainwater Harvesting", desc: "Collecting and storing rainwater to lower stormwater loads.", wiki: "Rainwater_harvesting" },
      { title: "Early Warning System", desc: "Monitoring + alerts that warn communities ahead of floods.", wiki: "Flood_warning_system" },
      { title: "Stormwater Management", desc: "Planning and infrastructure to control runoff quantity and quality.", wiki: "Stormwater" },
      { title: "Embankment (Strengthening)", desc: "Reinforcing levees/banks (riprap, geotextiles) to prevent breaches.", wiki: "Embankment_(earthworks)" },
      { title: "Riprap", desc: "Layer of rock placed on banks/embankments to resist erosion.", wiki: "Riprap" },
      { title: "Geotextile", desc: "Permeable fabrics used for soil separation, filtration, and reinforcement.", wiki: "Geotextile" },
      { title: "Channelization", desc: "Reshaping/deepening channels to improve conveyance (with ecological care).", wiki: "Channelization" },
      { title: "Diversion Channel", desc: "Artificial channel that redirects floodwater around vulnerable areas.", wiki: "Water_diversion" },
      { title: "Flood Control", desc: "Overall set of measures to reduce the adverse impacts of floods.", wiki: "Flood_control" },
      { title: "Base Flood Elevation (BFE)", desc: "Computed water-surface height of the 1%-annual-chance flood.", wiki: "Base_flood_elevation" },
      { title: "Freeboard", desc: "Safety margin of height above predicted flood level for structures.", wiki: "Freeboard_(fluid_mechanics)" },
      { title: "Hydrograph", desc: "Curve showing river discharge vs. time during/after rainfall.", wiki: "Hydrograph" },
      { title: "Return Period", desc: "Average interval between floods of a given magnitude (e.g., 100-year).", wiki: "Return_period" },
      { title: "IDF Curve", desc: "Intensity–Duration–Frequency relation used for storm design.", wiki: "Intensity–duration–frequency_curve" },
      { title: "Floodproofing (Dry/Wet)", desc: "Building-level measures to keep water out or allow safe passage.", wiki: "Flood_proofing" },
      { title: "Backflow Preventer", desc: "Device that stops reverse flow into drains during surges.", wiki: "Backflow_prevention_device" },
      { title: "Silt Trap", desc: "Structure capturing sediment/debris before water enters main drainage/storage.", wiki: "Sediment_trap" },
      { title: "Floodplain Buyout", desc: "Acquiring properties in high-risk zones to restore natural floodplain function.", wiki: "Managed_retreat" },
      { title: "Setback Levee", desc: "Levee moved away from the river to widen floodplain and reduce stage.", wiki: "Levee#Setback_levees" },
      { title: "Two-Stage Ditch", desc: "Channel with benches that improve conveyance and habitat.", wiki: "Two-stage_ditch" },
      { title: "Retention–Detention Hybrids", desc: "Systems combining permanent pool with temporary storage for peaks.", wiki: "Detention_basin" },
      { title: "Flood Forecasting", desc: "Modeling and predicting river levels to inform response.", wiki: "Flood_forecasting" },
      { title: "Evacuation Route Planning", desc: "Designating safe corridors and signage for timely evacuation.", wiki: "Evacuation" },
      { title: "Flood Mapping", desc: "Delineating hazard and risk zones for planning and codes.", wiki: "Flood_risk_assessment" },
      { title: "Low Impact Development (LID)", desc: "Site-scale practices to mimic natural hydrology.", wiki: "Low-impact_development_(stormwater)" },
      { title: "Swale", desc: "Shallow, often vegetated channel for conveyance and infiltration.", wiki: "Swale_(landform)" },
      { title: "Detention Vault", desc: "Underground structure that temporarily stores stormwater.", wiki: "Stormwater" },
      { title: "Infiltration Trench", desc: "Gravel-filled trench that stores and infiltrates runoff.", wiki: "Infiltration_basin" },
      { title: "Porous Media Filter", desc: "Sand/biomedia filters that remove pollutants from runoff.", wiki: "Sand_filter" },
      { title: "Living Shoreline", desc: "Nature-based bank protection using plants and natural materials.", wiki: "Living_shorelines" },
      { title: "Flood Resilience", desc: "Capacity of systems to withstand, adapt to, and recover from floods.", wiki: "Disaster_resilience" },
      { title: "Design Storm", desc: "Hypothetical storm used for sizing drainage and storage.", wiki: "Design_storm" },
      { title: "Overland Flow Path", desc: "Planned surface route for excess runoff when systems surcharge.", wiki: "Surface_runoff" },
      { title: "Cutoff Wall", desc: "Subsurface barrier that reduces seepage under levees/dams.", wiki: "Cutoff_(geotechnical_engineering)" },
      { title: "Relief Well", desc: "Well that lowers pore pressure and prevents uplift/breach.", wiki: "Relief_well" },
      { title: "Spur/Dyne (Groin)", desc: "Structure projecting into a river to deflect flow from banks.", wiki: "Groynes" },
      { title: "Flood Storage Area", desc: "Land intentionally used to store floodwater and lower peaks.", wiki: "Floodplain" },
      { title: "Managed Realignment", desc: "Reconfiguring defenses to create space for water and habitats.", wiki: "Managed_realignment" },
      { title: "Levee Overtopping Protection", desc: "Armoring crest/landside to resist erosion during overtopping.", wiki: "Levee" },
      { title: "Emergency Spillway", desc: "Auxiliary spillway used during extreme floods.", wiki: "Spillway" },
      { title: "Flood Safeguarding (Codes)", desc: "Building/code provisions for flood loads and siting.", wiki: "Building_code" },
      { title: "Flood Depth–Velocity Hazard", desc: "Combined metric for danger to people/structures.", wiki: "Flood_risk_assessment" },
      { title: "Debris Rack", desc: "Grate that prevents large debris from clogging culverts/intakes.", wiki: "Trash_rack" },
      { title: "Headworks", desc: "Intake/controls at canal or drainage system entry.", wiki: "Headworks" },
      { title: "Gate (Sluice/Slide)", desc: "Movable barrier controlling water flow in channels/structures.", wiki: "Sluice" },
    ],
    []
  );

  // Build a fetch list for the hook (uses wiki title if provided, else the term title)
  const fetchList = useMemo(
    () =>
      terms.map((t) => ({
        key: t.title,
        query: t.wiki || t.title,
        fixed: t.image, // if you ever add a hand-picked URL it will be used directly
      })),
    [terms]
  );

  // Centralized image fetching with smart fallbacks (Wikipedia → Commons → Openverse → Unsplash)
  const thumbs = useThumbnails(fetchList, WIKI_FALLBACK);

  return (
    <Layout>
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Flood Mitigation Terminology</h1>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Explore key flood mitigation terms. Images are fetched from Wikipedia/Wikimedia with smart fallbacks.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {terms.map((t, i) => (
              <GlassCard key={t.title + i} delay={0.05 * (i % 6)} className="overflow-hidden h-full">
                <div className="relative h-40 w-full overflow-hidden rounded-lg">
                  <img
                    src={t.image || thumbs[t.title] || WIKI_FALLBACK}
                    alt={t.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = WIKI_FALLBACK;
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
