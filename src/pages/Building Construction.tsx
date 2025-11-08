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

export default function BuildingConstruction() {
  // ALL CARDS (your full list)
  const terms: Term[] = useMemo(
    () => [
      { title: "Aggregate", desc: "Coarse or medium-grained materials like sand, crushed stone, gravel, or recycled concrete used in foundations, concrete mixes, railroads, and road bases.", wiki: "Aggregate_(composite)" },
      { title: "All-in-rate", desc: "Overall costs necessary to complete a project, including direct and indirect costs.", wiki: "Cost_estimation_in_project_management" },
      { title: "Appraisal", desc: "Professional opinion on a property’s value to compare options before building.", wiki: "Real_estate_appraisal" },
      { title: "Apprentice", desc: "Trainee learning a skilled construction trade under an experienced craft professional.", wiki: "Apprenticeship" },
      { title: "Architect of Record", desc: "Licensed architect whose name is on permits; ensures code compliance and paperwork.", wiki: "Architect" },
      { title: "As-builts", desc: "Final drawings reflecting actual constructed conditions versus design plans.", wiki: "As-built_drawing" },
      { title: "AWP (advanced work packaging)", desc: "Construction-first planning framework aligning engineering to field sequencing.", wiki: "Advanced_work_packaging" },
      { title: "Back Charge", desc: "Post-completion charge to another party for costs like correcting defective work.", wiki: "Back_charge" },
      { title: "Backfilling", desc: "Replacing and compacting excavated soil around foundations or utilities.", wiki: "Backfilling" },
      { title: "Base estimate", desc: "Preliminary estimate with overhead/profit and design fees; excludes risk/inflation.", wiki: "Cost_estimate" },
      { title: "Beam", desc: "Horizontal member carrying loads to supports; spans openings and supports slabs.", wiki: "Beam_(structure)" },
      { title: "Bearing capacity", desc: "Soil’s capacity to safely carry structural loads without shear failure.", wiki: "Bearing_capacity" },
      { title: "Best value method", desc: "Procurement balancing cost, quality, schedule, and sustainability.", wiki: "Best_value_procurement" },
      { title: "Bid", desc: "Contractor proposal to undertake a scope at a price after estimation.", wiki: "Bid_tender" },
      { title: "Bid leveling", desc: "Normalizing bids to comparable scope for fair evaluation.", wiki: "Tendering" },
      { title: "Bid-hit ratio", desc: "Ratio of successful bids to total bids (win-rate).", wiki: "Bid_tender" },
      { title: "Bid Package", desc: "Documents defining scope, specs, drawings, and general conditions for bidders.", wiki: "Procurement" },
      { title: "Bid Selection", desc: "Choosing the winning bidder per evaluation criteria.", wiki: "Procurement" },
      { title: "Bid Solicitation", desc: "Inviting bids via IFB/RFP/RFQ to compete for work.", wiki: "Request_for_proposal" },
      { title: "BIM (building information modeling)", desc: "Data-rich digital representation of a facility’s physical/functional attributes.", wiki: "Building_information_modeling" },
      { title: "Blocking", desc: "Short lumber pieces inserted to join/fill/reinforce framing.", wiki: "Framing_(construction)" },
      { title: "Blueprints", desc: "Construction drawings/specifications guiding permits and construction.", wiki: "Blueprint" },
      { title: "BOQ (bill of quantities)", desc: "Document itemizing materials, labor, equipment and associated costs.", wiki: "Bill_of_quantities" },
      { title: "Box crib", desc: "Temporary timber structure used for stabilization and lifting.", wiki: "Cribbing_(construction)" },
      { title: "Builder’s risk insurance", desc: "Insurance covering loss/damage during construction.", wiki: "Builder%27s_risk_insurance" },
      { title: "Building engineer", desc: "Engineer focused on building systems, operation, and constructability.", wiki: "Building_engineering" },
      { title: "Building line", desc: "Setback line beyond which building is restricted.", wiki: "Setback_(land_use)" },
      { title: "CAD (computer-aided design)", desc: "Software tools to model and document projects.", wiki: "Computer-aided_design" },
      { title: "Cant", desc: "Beveled or oblique edge/line, often at corners.", wiki: "Bevel" },
      { title: "Cantilever", desc: "Member fixed at one end and free at the other carrying loads.", wiki: "Cantilever" },
      { title: "Casework", desc: "Fabrication/installation of cabinets, shelves, and boxed storage.", wiki: "Casework_(woodworking)" },
      { title: "Catastrophic failure", desc: "Sudden structural failure at ultimate stress; progressive and unrecoverable.", wiki: "Structural_failure" },
      { title: "Caulking", desc: "Sealant application at joints to block moisture/air.", wiki: "Caulking" },
      { title: "Change Order", desc: "Contract amendment adjusting scope, cost, and/or time.", wiki: "Change_order" },
      { title: "Civil engineering", desc: "Design, construction, and maintenance of infrastructure and built environments.", wiki: "Civil_engineering" },
      { title: "Clash detection", desc: "Automatic detection of model conflicts to reduce rework.", wiki: "Building_information_modeling" },
      { title: "Closeout", desc: "Process to complete, document, and hand over the project.", wiki: "Project_closeout" },
      { title: "CMAR (construction management at risk)", desc: "Delivery method with CM committing to a GMP based on documents.", wiki: "Construction_management" },
      { title: "Conceptual estimate", desc: "Early estimate using concept metrics before detailed drawings.", wiki: "Cost_estimate" },
      { title: "Concrete Cover", desc: "Clear distance from reinforcing steel to exterior concrete surface.", wiki: "Reinforced_concrete" },
      { title: "Concrete slab", desc: "Flat horizontal structural element supported by beams/columns.", wiki: "Concrete_slab" },
      { title: "Construction build out", desc: "Fit-out to bring shell to occupancy readiness.", wiki: "Tenant_improvements" },
      { title: "Construction estimate", desc: "Forecast of costs for project elements and work packages.", wiki: "Cost_estimate" },
      { title: "Construction management software", desc: "Software for schedule, cost, docs, and coordination.", wiki: "Construction_software" },
      { title: "Contract formation", desc: "Offer, acceptance, consideration — forming a binding contract.", wiki: "Contract" },
      { title: "Cost codes", desc: "Standardized codes to track and report job costs.", wiki: "Cost_engineering" },
      { title: "Cost-plus contract", desc: "Owner pays actual costs plus a fee or percentage.", wiki: "Cost-plus_contract" },
      { title: "Cross bracing", desc: "X-shaped bracing to increase lateral stability.", wiki: "Braced_frame" },
      { title: "Cut and fill", desc: "Balancing excavation and embankment in earthworks.", wiki: "Cut_and_fill" },
      { title: "Daily report", desc: "End-of-day site log to align stakeholders and prevent errors.", wiki: "Construction_management" },
      { title: "Damp proofing", desc: "Moisture control applied to floors/walls/interiors.", wiki: "Damp_proofing" },
      { title: "Dead Load", desc: "Permanent static load from self-weight and fixed elements.", wiki: "Dead_load" },
      { title: "Design-bid-build", desc: "Sequential delivery: design complete before construction bid/award.", wiki: "Design%E2%80%93bid%E2%80%93build" },
      { title: "Design-build", desc: "Single entity holds both design and construction contract.", wiki: "Design%E2%80%93build" },
      { title: "Diagrid", desc: "Diagonal grid structural system for facades/roofs.", wiki: "Diagrid" },
      { title: "Drawings", desc: "Pictorial/graphical representations of dimensions and details.", wiki: "Architectural_drawing" },
      { title: "Drywall", desc: "Gypsum board panels for interior walls and ceilings.", wiki: "Drywall" },
      { title: "Elevation", desc: "Orthographic projection of a building’s exterior face.", wiki: "Elevation_(view)" },
      { title: "Encasement", desc: "Covering used to contain or protect building components.", wiki: "Encapsulation_(hazard_control)" },
      { title: "Falsework", desc: "Temporary support of structures until self-supporting.", wiki: "Falsework" },
      { title: "FF&E", desc: "Furniture, fixtures, and equipment not permanently attached.", wiki: "FF%26E" },
      { title: "Fieldwork order", desc: "Instruction to perform work outside the original scope.", wiki: "Work_order" },
      { title: "Floor plan", desc: "Plan view of a building’s layout from above.", wiki: "Floor_plan" },
      { title: "Footing", desc: "Foundation element transmitting loads to soil.", wiki: "Foundation_(engineering)" },
      { title: "Foreman", desc: "On-site leader organizing labor and reporting progress.", wiki: "Foreman" },
      { title: "General contractor", desc: "Entity responsible for overall coordination and execution.", wiki: "General_contractor" },
      { title: "Girder", desc: "Primary horizontal support carrying beams and loads.", wiki: "Girder" },
      { title: "GMP (guaranteed maximum price)", desc: "Contract cap — owner won’t pay beyond agreed maximum.", wiki: "Guaranteed_maximum_price" },
      { title: "HVAC", desc: "Heating, ventilation, and air conditioning systems.", wiki: "HVAC" },
      { title: "IFB (invitation for bid)", desc: "Formal solicitation to submit bids for a project.", wiki: "Invitation_for_bid" },
      { title: "ILD (integrated labor delivery)", desc: "Labor brought in at design stage for better outcomes.", wiki: "Lean_construction" },
      { title: "IPD (integrated project delivery)", desc: "Multi-party contract aligning incentives and risks.", wiki: "Integrated_project_delivery" },
      { title: "Job costing", desc: "Accounting method tracking actual task-level costs.", wiki: "Job_costing" },
      { title: "Job walk", desc: "Pre-bid site visit to inform accurate proposals.", wiki: "Job_walk" },
      { title: "Joint", desc: "Separation between elements allowing movement without damage.", wiki: "Expansion_joint" },
      { title: "Joist", desc: "Parallel horizontal members supporting floors/ceilings.", wiki: "Joist" },
      { title: "Journeyperson", desc: "Skilled tradesperson post-apprenticeship; not yet master.", wiki: "Journeyman" },
      { title: "Lean construction", desc: "Method reducing waste and maximizing value/flow.", wiki: "Lean_construction" },
      { title: "Lease-leaseback", desc: "Owner leases site to developer who builds and returns it.", wiki: "Lease-leaseback" },
      { title: "Lien", desc: "Legal claim for unpaid work properly performed.", wiki: "Mechanic%27s_lien" },
      { title: "Lift slab construction", desc: "Casting slabs on ground and jacking them into place.", wiki: "Lift-slab_construction" },
      { title: "Live load", desc: "Variable, transient load from occupancy and use.", wiki: "Live_load" },
      { title: "Low bid procurement", desc: "Award to the lowest responsive, responsible bidder.", wiki: "Competitive_bidding" },
      { title: "Lump-sum contracts", desc: "Fixed total price agreed before work begins.", wiki: "Lump_sum" },
      { title: "Load-bearing wall", desc: "Wall carrying loads from roof/floors to foundation.", wiki: "Load-bearing_wall" },
      { title: "Lookout (architecture)", desc: "Cantilevered roof member supporting overhang.", wiki: "Lookout_(architecture)" },
      { title: "MEP", desc: "Mechanical, electrical, and plumbing systems.", wiki: "Mechanical,_electrical,_and_plumbing" },
      { title: "Moling", desc: "Trenchless method for laying pipes using a pneumatic mole.", wiki: "Trenchless_technology" },
      { title: "Monocrete construction", desc: "Method using pre-made concrete wall panels bolted together.", wiki: "Precast_concrete" },
      { title: "Mortar", desc: "Mix of binder, sand, and water used to bond masonry.", wiki: "Mortar_(masonry)" },
      { title: "Negotiated procurement", desc: "Owner and contractor negotiate terms collaboratively.", wiki: "Contract" },
      { title: "NIC (not in contract)", desc: "Item noted as excluded from the contract scope.", wiki: "Contract" },
      { title: "NTE (not-to-exceed)", desc: "Spending limit the contractor cannot exceed.", wiki: "Contract" },
      { title: "OCO (owner change order)", desc: "Owner-initiated scope amendment with cost/schedule impact.", wiki: "Change_order" },
      { title: "Particleboard", desc: "Panel made from wood particles and resin — plywood alternative.", wiki: "Particle_board" },
      { title: "Pay applications", desc: "Billing package submitted for progress payments.", wiki: "Progress_billing" },
      { title: "Penalty clause", desc: "Contract provision specifying sums for breach.", wiki: "Liquidated_damages" },
      { title: "Performance gap", desc: "Difference between designed and actual performance.", wiki: "Performance_gap" },
      { title: "Plywood", desc: "Sheets made from thin veneers glued with alternating grain.", wiki: "Plywood" },
      { title: "PO (purchase order)", desc: "Order authorizing goods/services for a project.", wiki: "Purchase_order" },
      { title: "Precast concrete", desc: "Concrete elements cast off-site and transported to site.", wiki: "Precast_concrete" },
      { title: "Project manager", desc: "Leads planning, execution, budget, monitoring, and control.", wiki: "Project_manager" },
      { title: "Public-private-partnership", desc: "Contract where private entity helps deliver public projects.", wiki: "Public%E2%80%93private_partnership" },
      { title: "Punch list", desc: "List of incomplete/deficient items before final acceptance.", wiki: "Punch_list" },
      { title: "Purlin", desc: "Horizontal roof member supporting rafters/deck.", wiki: "Purlin" },
      { title: "PVC (poly vinyl chloride)", desc: "Common plastic used in pipes, frames, flooring, cables, roofing.", wiki: "Polyvinyl_chloride" },
      { title: "Quantity takeoff", desc: "Detailed measurement of materials, equipment, and labor.", wiki: "Quantity_surveyor" },
      { title: "Rafter", desc: "Sloped structural member supporting the roof deck.", wiki: "Rafter" },
      { title: "Reinforced concrete", desc: "Concrete with steel to resist tension and shear.", wiki: "Reinforced_concrete" },
      { title: "RFI (request for information)", desc: "Formal request seeking clarification of documents.", wiki: "Request_for_information" },
      { title: "RFP (request for proposal)", desc: "Public request seeking detailed proposals from vendors.", wiki: "Request_for_proposal" },
      { title: "RFQ (request for quote)", desc: "Invitation to vendors/subs for price quotations.", wiki: "Request_for_quotation" },
      { title: "RFT (request for tender)", desc: "Sealed bid invitation to suppliers for services.", wiki: "Request_for_tender" },
      { title: "Rough-in", desc: "Stage with MEP lines installed but not connected.", wiki: "Rough-in" },
      { title: "Rubblization", desc: "Breaking concrete in place to reuse as base.", wiki: "Rubblization" },
      { title: "Schedule of values", desc: "List of work items with their allocated values.", wiki: "Construction_management" },
      { title: "Scope creep", desc: "Uncontrolled expansion of project requirements over time.", wiki: "Scope_creep" },
      { title: "Scope of work (SOW)", desc: "Documented tasks, deliverables, and milestones.", wiki: "Statement_of_work" },
      { title: "Section drawing", desc: "Slice view showing interior details along a plane.", wiki: "Section_(technical_drawing)" },
      { title: "Shiplap", desc: "Overlapping wooden boards used on exteriors/interiors.", wiki: "Shiplap" },
      { title: "Shop drawings", desc: "Fabrication/installation drawings submitted for review.", wiki: "Shop_drawing" },
      { title: "Shoring", desc: "Temporary support for excavations or building repairs.", wiki: "Shoring" },
      { title: "Skirting", desc: "Trim covering wall-floor joint; protects and decorates.", wiki: "Baseboard" },
      { title: "Slack time", desc: "Schedule float between tasks available without delay.", wiki: "Float_(project_management)" },
      { title: "Soil investigation", desc: "Geotechnical studies to determine soil properties.", wiki: "Site_investigation" },
      { title: "Soil stockpile", desc: "Topsoil removed and stored for later landscaping.", wiki: "Stockpile" },
      { title: "Specifications", desc: "Documents detailing scope, quality, and materials.", wiki: "Specification_(technical_standard)" },
      { title: "Staking", desc: "Survey layout marking where construction will occur.", wiki: "Construction_set_out" },
      { title: "Studs", desc: "Vertical framing members in walls.", wiki: "Wall_stud" },
      { title: "Subcontract", desc: "Bringing outside parties to perform specialized tasks.", wiki: "Subcontractor" },
      { title: "Subcontractor", desc: "Vendor hired by GC to perform portions of work.", wiki: "Subcontractor" },
      { title: "Submittals", desc: "Documents sent for approval of equipment/materials/work.", wiki: "Submittal_(construction)" },
      { title: "Subfloor", desc: "Layer beneath finished floor providing structural surface.", wiki: "Subfloor" },
      { title: "Superstructure", desc: "Portion of a building above ground level.", wiki: "Superstructure" },
      { title: "Target value design", desc: "Lean practice aligning design to a target cost.", wiki: "Lean_construction" },
      { title: "Tender", desc: "Offer to undertake work at a stated price.", wiki: "Tendering" },
      { title: "Thin-shell structure", desc: "Curved lightweight shell carrying membrane stresses.", wiki: "Shell_structure" },
      { title: "Tie (cavity wall)", desc: "Connector joining inner and outer leaves of cavity wall.", wiki: "Wall_tie" },
      { title: "Time and materials (T&M)", desc: "Contract paying for actual time and materials used.", wiki: "Time_and_materials" },
      { title: "Topping out", desc: "Ceremony when a structure reaches maximum height.", wiki: "Topping_out" },
      { title: "Trusses", desc: "Triangulated members used in roofs/towers/bridges.", wiki: "Truss" },
      { title: "Underpinning", desc: "Strengthening/deepening existing foundations.", wiki: "Underpinning" },
      { title: "Unit price contracts", desc: "Pricing by measurable units when scope is uncertain.", wiki: "Unit_price" },
      { title: "VDC (Virtual design and construction)", desc: "Integrated modeling of product/organization/process.", wiki: "Virtual_design_and_construction" },
      { title: "Veneer", desc: "Thin layer (wood/stone/steel) over a framed wall.", wiki: "Veneer_(wood)" },
      { title: "VIF (verify in field)", desc: "Instruction to check conditions on site.", wiki: "Building_information_modeling" },
      { title: "Voided Biaxial Slab", desc: "RC slab with voids to reduce weight; often BubbleDeck.", wiki: "BubbleDeck" },
      { title: "Wall Stud", desc: "Vertical framing member supporting wall/partition.", wiki: "Wall_stud" },
      { title: "Warping", desc: "Change in timber flatness from uneven moisture.", wiki: "Warping" },
      { title: "Zoning", desc: "Land-use regulation controlling use, height, and setbacks.", wiki: "Zoning" },
      { title: "Summary", desc: "Understanding these terms helps across engineering, estimation, and architecture.", wiki: "Construction" },
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
          <h1 className="text-4xl font-bold mb-6">Building Terminology</h1>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Explore key building construction terms. Images are fetched from Wikipedia/Wikimedia with smart fallbacks.
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
