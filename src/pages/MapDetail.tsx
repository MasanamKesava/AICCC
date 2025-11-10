import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";

type Slide =
  | { title: string; body: string }
  | { title: string; list: string[] };

const MapDetail = () => {
  const { id } = useParams<{ id: string }>();

  // --- Replace images with your Cloudinary URLs when ready ---
  const mapData: Record<
    string,
    {
      title: string;
      images: string[]; // first is shown
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
        "Planned by APCRDA as a sustainable, globally competitive greenfield capital over ~217 km² across 25 revenue villages. Land acquired via land pooling, with a city grid organized around three major axes: (1) Civic axis (N–S), (2) NE recreational corridor, and (3) Krishna River waterfront axis.",
      features: [
        "217 km² across 25 revenue villages; land pooling exchanges agricultural land for developed plots",
        "Grid structure with 3 anchors: Civic (N–S), NE Recreational Corridor, Krishna waterfront axis",
        "Nine economic theme cities: Government, Finance, Tourism, Knowledge, Health, Electronics, Media, Justice, Sports",
        "Land-use zoning: Residential R1–R4, Commercial C1–C6, Industrial I1–I3, Institutional S1–S3, Open Space P1–P3",
        "≈60% of area as green/protected (parks, ecological reserves, riverfront promenades & buffers)",
        "Regional links via NH-16 & NH-65; Inner Ring Road; expressways with ring & radial corridors",
        "Transit-first: Metro corridors, BRT, city buses, pedestrian & cycle networks with P&R",
        "Seed Capital Area 16.94 km²: Secretariat, High Court & Assembly (Foster + Partners; Vaastu-informed)",
        "Urban design & zoning guidelines notified in 2024 to regulate form, street sections & public realm",
        "Green Master Plan: road green buffers, canal/reservoir landscaping; major parks incl. Sakhamuru (190 ac), Ananthavaram (35 ac), Malkapuram (21 ac)",
        "Modular 500×500 m walkable neighborhoods integrating existing settlements & daily amenities",
        "Population horizon ~4 million by 2050; vision of a ‘People’s Capital’—economic, inclusive, environmentally balanced",
      ],
      specifications: "Scale 1:50,000 · Projection WGS84 · 2024",
    },

    connectivity: {
      title: "Connectivity",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626077/Amaravati-concept-handbook_modified-11_hpsvjh.jpg",
      ],
      description:
        "Hierarchical multimodal connectivity stitching regional gateways, CBDs, neighborhoods and logistics nodes across the 7,325 km² AP Capital Region.",
      features: [
        "Road: ~316 km of major roads with 60 m & 50 m ROW; direct access to NH-9 / NH-16 (Hyderabad 273 km, Chennai 398 km).",
        "Rail: 5 junctions — Vijayawada (3 km), Krishna Canal (1 km), Guntur (30 km), Tenali (30 km), Gudivada (45 km).",
        "Air: Gannavaram International Airport ~25 km; domestic + international connectivity.",
        "Sea: Machilipatnam Port ~80 km enabling industrial & trade linkages via Bay of Bengal.",
        "Regional Node: Strategic proximity to Vijayawada, Guntur, Tenali, Hyderabad, Visakhapatnam, Chennai.",
      ],
      specifications: "Design speed 60–100 km/h · Lane 3.5–3.75 m · Grid-based hierarchy",
    },

    "traffic-transportation": {
      title: "Traffic & Transportation",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626076/Amaravati-concept-handbook_modified-16_kgiqio.jpg",
      ],
      description:
        "Grid of 16 E-roads (East–West) and 18 N-roads (North–South) linking the Seed Capital to NH-16 and the Chennai–Kolkata corridor.",
      features: [
        "E-11 priority: 7.5 km Neerukonda→Kuragallu + 4 km extension (front of AIIMS Mangalagiri) to NH-16 via Kuragallu–Navuluru–Mangalagiri.",
        "E-13 priority: 7.5 km Neerukonda→Navuluru + 2.5 km extension (rear of AIIMS) to NH-16 via Nidamarru–Yerrabalem–Navuluru.",
        "Design by Lee Associates; 30-year seamless connectivity vision.",
        "Other E-roads (E-5, E-7, E-9) to connect NH without land acquisition; E-15 via land pooling (slower).",
        "Approvals/Costs: E-8 (₹522.92 Cr), N-11 (₹419.85 Cr), N-15 (₹482.01 Cr), E-6 (₹452.96 Cr).",
        "Tenders: E-11 approved; E-15 to be tendered (~15 days window).",
        "Forest land use ~25 acres — permissions sought.",
        "Target speed 80–100 km/h; minimal disruption to private land.",
        "CRDA tenders approved ~₹22,000 Cr; ~₹20,000 Cr more expected.",
      ],
      specifications: "Transit-first street sections · ITS-ready corridors · P&R nodes",
    },

    "water-supply": {
      title: "Water Supply & Fire Fighting System",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626077/Amaravati-concept-handbook_modified-21_tyqkik.jpg",
      ],
      description:
        "24×7, 100% metered water supply with CPHEEO/WHO compliance; integrated WTPs, trunk mains, ring mains & district distribution centers.",
      features: [
        "Population horizon 2050: ~42 lakh; total demand ≈ 886 MLD (incl. losses).",
        "Sources: Prakasam Barrage ~383 MLD; proposed Vaikuntapuram Barrage ~503 MLD.",
        "Service level: 150 LPCD; unaccounted-for water <10%.",
        "Network: WTPs → trunk/transmission pipelines → ring mains → water management districts → property connections.",
        "Firefighting: hydrant grid integrated to distribution; pressure design 10–17 m; SCADA monitoring.",
        "State allocation: ≈8.16 TMC/yr net; ≈11.42 TMC incl. losses for 2050 horizon.",
      ],
      specifications: "CPHEEO & WHO benchmarks · Continuous 24×7 supply · Full metering",
    },

    "water-waste": {
      title: "Water Waste Management",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626076/Amaravati-concept-handbook_modified-24_wy21ly.jpg",
      ],
      description:
        "City-wide, climate-resilient systems for wastewater & solid waste — supported by World Bank and state initiatives (CLAP).",
      features: [
        "2031 master plan: water conservation lakes; integrated water supply; flood management with nature-based solutions & early warnings.",
        "World Bank support: resilient water supply, wastewater, stormwater drainage; city-level flood management.",
        "CLAP Mission: household segregation — blue (biodegradable), green (non-biodegradable), red (hazardous).",
        "Digital ops: scanners, GPS on collection trucks, Aadhaar-based attendance for sanitation workforce.",
        "DWCRA groups: mandated wet-waste composting onsite; 52 waste grading clusters across the state.",
        "Circular economy: 6R — Reduce, Refurbish, Reuse, Recycle, Redesign, Remanufacture.",
        "Waste-to-Energy: plants in Nellore, Rajahmundry, Kadapa, Kurnool.",
      ],
      specifications: "Extended aeration + tertiary reuse · Citywide digital monitoring",
    },

    "storm-water": {
      title: "Storm Water Management",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626076/Amaravati-concept-handbook_modified-27_irphr8.jpg",
      ],
      description:
        "Water-Sensitive City approach for a flood-prone plain impacted by Kondaveeti Vagu & Krishna River; multi-functional blue-green infrastructure.",
      features: [
        "Platform elevation ≥25 m AMSL; reinforced river bunds; detention in ponds; raw water conservation in reservoirs; green belts; controlled discharge to Krishna River.",
        "Alluvium + CRC for Water Sensitive Cities (with APCRDA): integrated stormwater & natural asset protection.",
        "Historic studies (2016): 1,000-year flood simulations planned; smart system for real-time gates & pump operations.",
        "Aug 2025 actions: ADC chairperson expedited operations — culverts kept open; silt/obstruction removal under bridges with heavy machinery; war-footing deployment.",
        "Developing Water Master Plan: principles, actions, roles for sustainable water management.",
      ],
      specifications: "Return period up to 1,000-yr modeling intent · Real-time controls",
    },

    power: {
      title: "Power",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626076/Amaravati-concept-handbook_modified-31_mk64os.jpg",
      ],
      description:
        "Reliable electrical distribution via grid and local substations; underground cabling in core; smart metering; N-1 reliability.",
      features: [
        "132/33 kV grid substations & 33/11 kV distribution substations.",
        "Smart metering rollout for consumers; UG cabling in CBD.",
        "Renewable energy integration targeting long-term 100% RE for citywide demand (policy horizon).",
      ],
      specifications: "Ultimate load ~2,700 MW (city horizon); near-term losses <8%",
    },

    "gas-distribution": {
      title: "Gas Distribution",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626075/Amaravati-concept-handbook_modified-39_l1pjch.jpg",
      ],
      description:
        "Statewide CGD build-out led by APGDC (JV: GAIL Gas Ltd. + AP Govt via APGIC), with IOC proposal for India’s first fully piped-gas capital.",
      features: [
        "APGDC mandate: city gas networks, LNG import terminal, regas, CGD expansion for PNG (domestic), CNG (transport), industrial users.",
        "Amaravati: IOC proposal to supply piped gas to all homes/institutions/commercial complexes; PNGRB delegation review & support.",
        "Target: 8 million PNG home connections across AP (long-term vision).",
        "State assures coordination for right-of-way & construction; SCADA-based safety & leak monitoring.",
      ],
      specifications: "City Gate Station & medium/low-pressure network · ESVs & isolation strategy",
    },

    ict: {
      title: "ICT (Information & Communication Technology)",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626075/Amaravati-concept-handbook_modified-43_zspftk.jpg",
      ],
      description:
        "Integrated digital trunk (utility tunnels), ICCC, 5G/IoT, blockchain land records; quantum & AI anchors for a tech-led urban economy.",
      features: [
        "Quantum Valley Tech Park (ops by Jan 2026): MoUs with IBM/TCS/L&T; IBM 156-qubit Quantum System Two; >100 quantum algos by 2026; 1,000 ‘effective’ qubits by 2029.",
        "Domestic quantum components: cryo-electronics, photonic packages, quantum chips; export target ₹5,000 Cr/yr by 2030.",
        "Investments: ~$1B; 100 quantum startups by 2030.",
        "Underground utility ducts: power/water/sewage/ICT; six-lane smart avenues with cycling/walking tracks; IoT furniture & city telemetry.",
        "Mana Amaravati app: landowner–investor marketplace; blockchain-secured real estate transactions.",
        "ICCC: e-governance, grievance redressal, real-time ops.",
        "Pi DATACENTERS: Asia’s largest Uptime TIER IV DC; secure cloud & data backbone.",
        "AI City Amaravati: autonomous mobility, smart grids, predictive governance; full 5G + IoT integration.",
        "Academia & skills: VIT-AP, SRM, IIT, IIM, NID, Amrita (22k+ students); 17k trained; 12k job target; IIT-M/TCS collabs.",
        "Sector nodes: Knowledge, Health, Finance, Justice Cities; 75 IT/ITES firms & 10 lakh workstations by 2034.",
        "Sustainability: 30% green/water area; 30% energy via RE (near-term) scaling up; solar on 1/3rd govt buildings.",
        "ADB/World Bank support via ASIIDP; 38 infra packages underway (roads, flood control, parks).",
      ],
      specifications: "Backbone 10+ Gbps · 500+ hotspots · 10k+ sensors (expandable) · ICCC uptime SLAs",
    },

    "district-cooling": {
      title: "District Cooling",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626077/Amaravati-concept-handbook_modified-47_gk8mxo.jpg",
      ],
      description:
        "India’s first district cooling PPP: APCRDA–Tabreed (30-yr concession), initially serving the Govt Complex — Secretariat, High Court, Assembly.",
      features: [
        "Contracted capacity: 20,000 RT (Phase-1, govt complex). BOOT model — build, own, operate, transfer.",
        "Efficiency: ~40–50% lower electricity vs. conventional cooling; significant CO₂/noise/maintenance reduction.",
        "Central chillers → insulated underground chilled-water network → ETS in buildings.",
        "Aligns with vision for high RE penetration (toward 100% RE by 2050 horizon); rooftop solar mandates on govt buildings.",
        "Tabreed’s first venture outside GCC; progress revived under 2025 capital program.",
        "Urban benefits: frees rooftops (green/solar), better air quality, lower heat-island impacts.",
        "Part of ‘District Energy in Cities’ initiative — global best practices for energy-efficient cities.",
      ],
      specifications: "Network ~25 km (build-out) · Target COP ≥5.5 · Resilient chilled-water ops",
    },

    "safety-security": {
      title: "Safety & Security",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626075/Amaravati-concept-handbook_modified-50_itzuze.jpg",
      ],
      description:
        "Policing, surveillance, flood resilience & safe urban design underpin a low-crime, high-visibility security posture.",
      features: [
        "Lower violent-crime incidence vs. major metros; focus on deterring petty/property crime with patrolling & CCTV.",
        "High-profile events (PM visit May 2025): 2,500+ police + paramilitary/SPG/Greyhounds/Octopus; sectorized airport security; BDS & K-9 units.",
        "Flood safety emphasis: reservoirs & canals safeguarded city during record inflows (11.43 lakh cusecs) — Minister (2024).",
        "Safe mobility: wide roads, protected bike lanes, pedestrian pathways; managed work-zone safety.",
        "Gated communities: 24×7 security, biometric access, pervasive CCTV.",
        "Public realm: well-lit spaces, community programs, neighborhood watches, safety workshops.",
        "Environmental safety: robust waste management; afforestation to curb pollution.",
        "Emergency response modernization: phased upgrades via ICCC; occasional latency during construction phases mitigated through SOPs.",
      ],
      specifications: "ICCC-integrated feeds (CCTV/ANPR) · Response-time targets <5 min (mature phase)",
    },

    "disaster-management": {
      title: "Disaster Management",
      images: [
        "https://res.cloudinary.com/dswrgvg3c/image/upload/v1762626075/Amaravati-concept-handbook_modified-53_xugzph.jpg",
      ],
      description:
        "Multi-layer, gravity-aided flood resilience validated on 100-year rainfall analyses; endorsed by World Bank & ADB.",
      features: [
        "Canals: Kondaveeti Vaagu (23.6 km), Pala Vaagu (16.7 km), Gravity Canal (8 km) to divert/attenuate floods.",
        "Reservoirs (>1 TMC total): Neerukonda (0.4), Krishnayapalem (0.1), Sakhamuru (0.1), Lam (0.3), Vaikuntapuram (0.2), Peda Parimi (0.2) TMC.",
        "Pump houses: Undavalli (12,350 cusecs), Vaikuntapuram (5,650), Gunadavalli (12,000) — >29,000 cusecs combined discharge into Krishna.",
        "Inspiration: Netherlands gravity systems — less power dependence; resilient under peak monsoon.",
        "Urban measures: elevated roads/causeways; redesigned crossings to avoid flood blockages.",
        "ICCC: weather feeds, level sensors, coordinated emergency response.",
        "Technical oversight: IISc, NIH, WAPCOS, Dutch experts; ₹2,163 Cr flood mgmt within ~₹15,000 Cr WB package.",
        "Proven in 2024 heavy rains — capital region protected (operational validation).",
      ],
      specifications: "Design return standards per node · Gravity-first with powered backup",
    },

    "green-spaces": {
      title: "Green Spaces & Parks",
      images: [
        "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=2400&q=80&auto=format&fit=crop",
      ],
      description:
        "City as a park: 60% land as green/water; central green spine (N–S) linking the Krishna River — governance set within landscape.",
      features: [
        "Central Green Spine: axial governance promenade (Assembly et al.) from river to city core.",
        "13 Urban Plazas (symbolizing 13 districts) encircled by open spaces.",
        "Blue-Green Plan: 9 lakes + 3 reservoirs (e.g., Krishnayapalem 71 ac, Neerukonda 158 ac).",
        "Community Parks: 497 parks across 1,602 acres in LPS zones (1–10 ac each).",
        "Major Parks: 190-ac Sakamuru, 21-ac Malkapuram, 31-ac Ananthavaram Lung Space, 200-ac Kurragallu Biodiversity Park.",
        "Avenue Plantations: 640 km trunk (1,420 ac) + 1,244 km LPS (709 ac); medians 450 km (445 ac); buffers 133.31 km (494 ac).",
        "Hillocks: 400 ac (Undavalli, Neerukonda, Ananthavaram) — restoration & erosion control.",
        "Riverfront: 22 km Krishna riverfront — trails, cycle tracks, cultural spaces.",
        "Drainage Greenways: 96.6 km (611 ac) along Kondaveeti Vaagu, Palavagu, Gravity Canal.",
        "Botanical/Medicinal planting; Singapore/Bengaluru models for design benchmarking.",
      ],
      specifications: "≥30% statutory green/water dedication · Heat-island mitigation targets",
    },

    "social-infrastructure": {
      title: "Social Infrastructure",
      images: [
        "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=2400&q=80&auto=format&fit=crop",
      ],
      description:
        "Socio-economic transition from agrarian belt to smart capital — inclusive growth, education/health anchors, digital governance.",
      features: [
        "Demography (2011 Amaravathi Mandal): pop 66,277; sex ratio 1,026♀/1,000♂; child sex ratio 998; literacy 63.16% (♂63.77%, ♀49.6%).",
        "Social composition: SC 28.1%, ST 5.2%; religion — Hindu 88.01%, Muslim 10.6%, Christian 1.21%.",
        "Rural baseline (2011): ~100% rural; agriculture heavy — 22,983 agri laborers, 5,502 cultivators.",
        "State demography shift (2025): declining TFR, aging, nuclearization; forthcoming ‘Demographic Management Policy’.",
        "AP 2024–25 Socio-Economic Survey: density 304/km² (India 382); Krishna dist 518/km²; literacy improving 62.07→67.35 (2001→2011).",
        "Urbanization: 24.13% (2001) → 29.47% (2011); Krishna dist 40.81% urban — growing peri-urban belt around Amaravati.",
        "Economy: GSDP ₹16.06 lakh Cr (2024–25), growth 12.94%; PCI ₹2.68 lakh (>India avg ₹2.00 lakh). Agri +15.86%; Services +11.70%.",
        "Swarna Andhra 2047: economy ₹305 lakh Cr; PCI ₹53.34 lakh via deep-tech agri, river interlinking, industrial modernization.",
        "Institutions: IIT, IIM, NID, VIT-AP, SRM; 5k+ EWS homes allotted; gender-inclusive schemes (e.g., Lakhpati Didi).",
        "Digital state: Mana Amaravati, e-Pragati — transparent land records, service delivery, citizen engagement.",
        "Revival under CM N. Chandrababu Naidu; focusing on inclusive growth & resilient urbanization.",
      ],
      specifications: "Education/health access grids · Affordable housing quotas · Digital public infrastructure",
    },
  };

  const current = mapData[id || ""];
  const [showFull, setShowFull] = useState(false);
  const [detailIdx, setDetailIdx] = useState(0);
  const [imgRatio, setImgRatio] = useState<number | null>(null); // naturalWidth / naturalHeight

  const detailSlides: Slide[] = useMemo(() => {
    if (!current) return [];

    // Expanded, card-specific slide decks
    if (current.title === "Amaravati Master Plan") {
      return [
        {
          title: "Overview",
          list: [
            "APCRDA master plan for a sustainable, globally competitive greenfield capital.",
            "City area ~217 km² across 25 revenue villages via Land Pooling Scheme (LPS).",
            "Three structuring axes: North–South Civic, NE Recreational Corridor, Krishna River waterfront.",
          ],
        },
        {
          title: "Theme Cities & Land Use",
          list: [
            "Nine theme cities: Government, Finance, Tourism, Knowledge, Health, Electronics, Media, Justice, Sports.",
            "Zoning: R1–R4 (residential), C1–C6 (commercial), I1–I3 (industrial), S1–S3 (institutional), P1–P3 (open space).",
            "≈60% area reserved as green/protected: parks, ecological reserves, water bodies, riverfronts.",
          ],
        },
        {
          title: "Mobility & Connectivity",
          list: [
            "NH-16/NH-65, Inner Ring Road, expressways with ring & radial corridors.",
            "Transit-first: Metro, BRT, city buses, pedestrian & cycle networks with P&R.",
          ],
        },
        {
          title: "Governance Core (Seed Capital)",
          list: [
            "Seed Capital Area 16.94 km² as central administrative hub.",
            "Govt Complex: Secretariat, High Court, Assembly — Foster + Partners; Vaastu-informed.",
            "Urban design & zoning guidelines notified in 2024 for built form & public realm.",
          ],
        },
        {
          title: "Sustainability",
          list: [
            "Green building, water conservation, stormwater management, RE integration.",
            "Green Master Plan: road buffers; canal/reservoir landscaping.",
            "Major parks: Sakhamuru (190 ac), Ananthavaram (35 ac), Malkapuram (21 ac).",
          ],
        },
        {
          title: "Urban Form & Neighborhoods",
          list: [
            "Modular 500×500 m walkable neighborhoods; integrated settlements.",
            "Daily amenities in short walking distance; blue-green corridors.",
          ],
        },
        {
          title: "Mandal & Settlements",
          list: [
            "Thullur mandal: Abbarajupalem, Ainavolu, Ananthavaram, Borupalem, Dondapadu, Kondarajupalem (de-populated), Lingayapalem (incl. Modugulankapalem hamlets), Malkapuram, Mandadam (Tallayapalem hamlets), Nekkallu, Nelapadu, Pitchikalapalem, Rayapudi, Sakhamuru, Thulluru, Uddandarayunipalem, Velagapudi, Venkatapalem.",
            "Mangalagiri mandal: Krishnayapalem, Nidamarru, Kuragallu (incl. Nerukonda hamlets), Nowlur (incl. Yerrabalem & Bethapudi hamlets).",
            "Tadepalle mandal: Penumaka, Tadepalle (M) (part) — Nulakapet, Dolas Nagar etc., Undavalli.",
          ],
        },
        {
          title: "Population & Vision",
          list: [
            "Population horizon: ~4 million by 2050.",
            "Vision: ‘People’s Capital’ — balancing economic growth, environmental protection & social inclusivity.",
          ],
        },
        {
          title: "Specifications",
          list: [
            "Scale 1:50,000 · Projection WGS84 · 2024.",
            "Mobility: Metro, BRT, IRR, expressways, pedestrian & cycle networks.",
          ],
        },
        {
          title: "Notes",
          body:
            "Maps are indicative; verify boundaries, rights-of-way, utilities, and water bodies with updated APCRDA datasets and statutory notifications. Full master plan and documents are available via the APCRDA portal.",
        },
      ];
    }

    if (current.title === "Connectivity") {
      return [
        {
          title: "Regional Position & Scale",
          list: [
            "AP Capital Region ≈ 7,325 km² centered on Amaravati.",
            "Central node for South India with road/rail/air/sea integration.",
          ],
        },
        {
          title: "Road Network",
          list: [
            "Major roads ≈316 km with 60 m & 50 m ROW.",
            "Direct links to NH-9/NH-16; Hyderabad 273 km, Chennai 398 km.",
          ],
        },
        {
          title: "Rail Network",
          list: [
            "Five junctions: Vijayawada (3 km), Krishna Canal (1 km), Guntur (30 km), Tenali (30 km), Gudivada (45 km).",
            "Direct access to national rail grid for passengers & freight.",
          ],
        },
        {
          title: "Air & Sea",
          list: [
            "Gannavaram International Airport ~25 km — domestic + international flights.",
            "Machilipatnam Port ~80 km for export-import and industrial linkages.",
          ],
        },
        {
          title: "Regional Hubs",
          list: [
            "Proximity to Vijayawada, Guntur, Tenali, Hyderabad, Visakhapatnam, Chennai.",
            "Amaravati as an accessible, integrated hub for admin/commercial/industrial growth.",
          ],
        },
        { title: "Specifications", body: "Design speeds 60–100 km/h · 3.5–3.75 m lane widths." },
      ];
    }

    if (current.title === "Traffic & Transportation") {
      return [
        {
          title: "Grid & Highway Links",
          list: [
            "16 East-West (E) + 18 North-South (N) roads forming a metropolitan grid.",
            "Seamless links to NH-16 & Chennai–Kolkata corridor.",
          ],
        },
        {
          title: "Priority E-Roads",
          list: [
            "E-11: 7.5 km Neerukonda→Kuragallu + 4 km extension via AIIMS (front) to NH-16 through Kuragallu–Navuluru–Mangalagiri.",
            "E-13: 7.5 km Neerukonda→Navuluru + 2.5 km extension via AIIMS (rear) to NH-16 through Nidamarru–Yerrabalem–Navuluru.",
          ],
        },
        {
          title: "Program & Costs",
          list: [
            "Designer: Lee Associates; 30-year vision.",
            "Other E-roads (E-5, E-7, E-9) NH connection without land acquisition; E-15 via land pooling.",
            "Approvals: E-8 ₹522.92 Cr; N-11 ₹419.85 Cr; N-15 ₹482.01 Cr; E-6 ₹452.96 Cr.",
            "Tenders: E-11 approved; E-15 tendering imminent (~15 days).",
          ],
        },
        {
          title: "Design & Policy",
          list: [
            "Forest land use ≈25 acres — permissions in process.",
            "Target 80–100 km/h; minimal private land impact.",
            "CRDA tenders ≈₹22,000 Cr approved; ~₹20,000 Cr pipeline.",
          ],
        },
        { title: "Specifications", body: "ITS-ready corridors, P&R integration, transit-first street design." },
      ];
    }

    if (current.title === "Water Supply & Fire Fighting System") {
      return [
        {
          title: "Demand & Service Levels",
          list: [
            "2050 demand ≈ 886 MLD (incl. treatment/transmission losses) for ~42 lakh population.",
            "Service: 24×7, 100% metered; 150 LPCD (CPHEEO/WHO); UFW <10%.",
          ],
        },
        {
          title: "Raw Water Sources",
          list: ["Prakasam Barrage ≈ 383 MLD.", "Proposed Vaikuntapuram Barrage ≈ 503 MLD."],
        },
        {
          title: "System Architecture",
          list: [
            "WTPs → trunk mains → transmission → ring mains → distribution centers → property connections.",
            "Hydrant grid integrated; SCADA-based monitoring.",
          ],
        },
        {
          title: "Allocations",
          list: [
            "~8.16 TMC annual requirement net; ~11.42 TMC incl. losses for 2050 horizon.",
            "Krishna basin source ensures renewable long-run supply.",
          ],
        },
        { title: "Specifications", body: "Pressure 10–17 m; pipeline redundancy; emergency storage design." },
      ];
    }

    if (current.title === "Water Waste Management") {
      return [
        {
          title: "Climate-Resilient Water Systems",
          list: [
            "Water conservation lakes; integrated water supply; nature-based flood solutions; early warning systems.",
            "World Bank support for city-wide water, wastewater, stormwater drainage & flood management.",
          ],
        },
        {
          title: "Solid Waste — CLAP Mission",
          list: [
            "Segregation at source: Blue (biodegradable), Green (non-biodegradable), Red (hazardous).",
            "Digital monitoring: scanners, GPS on trucks, Aadhaar-based workforce attendance.",
            "DWCRA groups: wet-waste composting; 52 waste grading clusters.",
            "Circular economy: 6R (Reduce/Refurbish/Reuse/Recycle/Redesign/Remanufacture).",
            "WTE plants: Nellore, Rajahmundry, Kadapa, Kurnool.",
          ],
        },
        { title: "Specifications", body: "Extended aeration + tertiary reuse · Citywide KPI dashboards." },
      ];
    }

    if (current.title === "Storm Water Management") {
      return [
        {
          title: "Context & Strategy",
          list: [
            "Flood-prone plain; inundation 2–3×/yr — Kondaveeti Vagu & Krishna River.",
            "Water-Sensitive Vision (Alluvium + CRC WSC, with APCRDA): multifunctional blue-green network.",
          ],
        },
        {
          title: "Structural Measures",
          list: [
            "City platform ≥25 m AMSL; reinforced bunds; detention/retention ponds; reservoirs; green belts.",
            "Controlled discharges to Krishna; real-time monitored gates & pumps.",
          ],
        },
        {
          title: "Recent Ops (Aug 2025)",
          list: [
            "ADC directed expedited flood ops; culverts open; silt removal under bridges; heavy machinery on war footing.",
            "Water Master Plan in development (design principles, actions, stakeholder roles).",
          ],
        },
        { title: "Specifications", body: "Flood modeling up to 1,000-yr intent; smart telemetry for hydromet events." },
      ];
    }

    if (current.title === "Gas Distribution") {
      return [
        {
          title: "Institutional Setup",
          list: [
            "APGDC JV: GAIL Gas Ltd. + AP Govt (APGIC).",
            "Mandate: LNG terminal, regas, pipeline transport, CGD networks for PNG/CNG/industrial.",
          ],
        },
        {
          title: "Amaravati Rollout",
          list: [
            "IOC proposal: India’s first fully piped-gas capital — homes/institutions/commercial complexes.",
            "PNGRB delegation reviewed progress; state ensures facilitation.",
            "Stretch target: 8 million PNG home connections statewide.",
          ],
        },
        { title: "Specifications", body: "SCADA safety; ESVs; medium/low pressure tiers; isolation strategy." },
      ];
    }

    if (current.title === "ICT (Information & Communication Technology)") {
      return [
        {
          title: "Digital Trunk & Governance",
          list: [
            "Underground utility ducts (power/water/sewage/ICT); six-lane smart avenues with active mobility.",
            "ICCC: real-time city ops; grievance redressal; e-governance.",
            "Mana Amaravati app + blockchain land records.",
          ],
        },
        {
          title: "Quantum & AI Anchors",
          list: [
            "Quantum Valley Tech Park (by Jan 2026): IBM 156-qubit system; >100 algos by 2026; 1,000 ‘effective’ qubits by 2029.",
            "Domestic quantum components; export target ₹5,000 Cr/yr by 2030; $1B investments; 100 startups.",
            "AI City: autonomous mobility, predictive governance, smart grids; full 5G/IoT.",
          ],
        },
        {
          title: "Data & Talent",
          list: [
            "Pi DATACENTERS — Uptime TIER IV: secure cloud/data backbone.",
            "Academia: VIT-AP, SRM, IIT, IIM, NID, Amrita (22k+ students); 17k trained; 12k jobs.",
            "Sector nodes: Knowledge/Health/Finance/Justice Cities; 75 IT/ITES firms; 10 lakh workstations by 2034.",
          ],
        },
        {
          title: "Sustainability & Programs",
          list: [
            "≥30% green/water; ≥30% energy via RE (rising to higher RE share by 2050).",
            "Solar on ≥1/3 govt buildings; 38 infra packages underway via ADB/WB support.",
          ],
        },
        { title: "Specifications", body: "10+ Gbps backbone; 500+ hotspots; 10k+ sensors (scalable); SLA’d uptime." },
      ];
    }

    if (current.title === "District Cooling") {
      return [
        {
          title: "PPP & Scope",
          list: [
            "APCRDA–Tabreed 30-yr concession (BOOT).",
            "Phase-1: 20,000 RT serving Secretariat, High Court, Assembly, govt offices.",
          ],
        },
        {
          title: "Benefits",
          list: [
            "~40–50% lower electricity vs. conventional AC; reduced CO₂, noise, maintenance.",
            "Frees rooftops for green/solar; better air quality; mitigates heat-island.",
          ],
        },
        {
          title: "Integration",
          list: [
            "Toward 100% RE horizon by 2050; public transport & EV infra leveraging RE.",
            "Part of District Energy in Cities global initiative.",
          ],
        },
        { title: "Specifications", body: "Network ~25 km; COP ≥5.5; resilient operations with central SCADA." },
      ];
    }

    if (current.title === "Safety & Security") {
      return [
        {
          title: "Policing & Crime",
          list: [
            "Lower violent crime vs. metros; focus on deterring petty/property crime.",
            "CCTV grid, patrolling, community policing; ANPR at key junctions.",
          ],
        },
        {
          title: "Event Security",
          list: [
            "PM visit (May 2025): 2,500+ police + paramilitary/SPG/Greyhounds/Octopus.",
            "Airport sectorization; bomb squads & K-9 deployment.",
          ],
        },
        {
          title: "Flood Safety & Urban Design",
          list: [
            "Reservoirs/canals protected city during record 11.43 lakh cusecs (2024).",
            "Wide roads, protected bike lanes, pedestrian paths; safe work-zone management.",
          ],
        },
        {
          title: "Community & Environment",
          list: [
            "Gated communities: 24×7 security, biometric access, CCTV.",
            "Well-lit public spaces; neighborhood watches; safety workshops.",
            "Waste mgmt & afforestation for environmental safety.",
          ],
        },
        { title: "Specifications", body: "ICCC-integrated feeds; response-time targets <5 min at maturity." },
      ];
    }

    if (current.title === "Disaster Management") {
      return [
        {
          title: "Design Basis & Validation",
          list: [
            "100-yr rainfall analytics; Dutch expertise; World Bank/ADB-linked funding.",
            "TCE designs; multi-layer gravity-aided approach.",
          ],
        },
        {
          title: "Hydraulic System",
          list: [
            "Canals: Kondaveeti (23.6 km), Pala (16.7 km), Gravity Canal (8 km).",
            "Reservoirs >1 TMC: Neerukonda (0.4), Krishnayapalem (0.1), Sakhamuru (0.1), Lam (0.3), Vaikuntapuram (0.2), Peda Parimi (0.2).",
            "Pumps: Undavalli (12,350 cusecs), Vaikuntapuram (5,650), Gunadavalli (12,000) — >29,000 cusecs combined.",
          ],
        },
        {
          title: "City Measures",
          list: [
            "Elevated roads/causeways; redesigned crossings.",
            "ICCC: weather/level sensors + emergency coordination.",
          ],
        },
        {
          title: "Governance & Capex",
          list: [
            "High-level technical oversight: IISc, NIH, WAPCOS.",
            "₹2,163 Cr flood mgmt within ~₹15,000 Cr WB package; 2024 heavy rains test passed.",
          ],
        },
        { title: "Specifications", body: "Gravity-first conveyance with powered redundancy; staged drawdown SOPs." },
      ];
    }

    if (current.title === "Green Spaces & Parks") {
      return [
        {
          title: "City-as-Park Structure",
          list: [
            "≥60% city area as green/water — inspired by Central Park & Lutyens’ Delhi.",
            "Central green spine (N–S) linking Krishna; governance set in landscape.",
          ],
        },
        {
          title: "Blue-Green Assets",
          list: [
            "9 lakes + 3 reservoirs (e.g., Krishnayapalem 71 ac, Neerukonda 158 ac).",
            "22 km Krishna riverfront; 96.6 km greened drainage corridors (611 ac).",
          ],
        },
        {
          title: "Parks & Plantations",
          list: [
            "497 community parks (1,602 ac) in LPS zones; 13 urban plazas.",
            "Major parks: Sakamuru 190 ac; Malkapuram 21 ac; Ananthavaram Lung Space 31 ac; Kurragallu Biodiversity 200 ac.",
            "Avenue: 640 km trunk (1,420 ac) + 1,244 km LPS (709 ac); medians 450 km (445 ac); buffers 133.31 km (494 ac).",
            "Hillocks: 400 ac restoration (Undavalli, Neerukonda, Ananthavaram).",
          ],
        },
        {
          title: "Policy & Outcomes",
          list: [
            "Medicinal/native species push; global models (Singapore/Bengaluru) for benchmarks.",
            "Heat-island mitigation, air-quality gains, equitable access to open space.",
          ],
        },
        { title: "Specifications", body: "≥30% statutory green/water; blue-green continuity requirements." },
      ];
    }

    if (current.title === "Social Infrastructure") {
      return [
        {
          title: "Baseline Demography (2011)",
          list: [
            "Population 66,277; sex ratio 1,026; child sex ratio 998.",
            "Literacy 63.16% (♂63.77%, ♀49.6%); SC 28.1%, ST 5.2%.",
            "Religion: Hindu 88.01%, Muslim 10.6%, Christian 1.21%.",
            "Predominantly rural; agriculture heavy (22,983 agri laborers; 5,502 cultivators).",
          ],
        },
        {
          title: "State Trends (2024–25)",
          list: [
            "AP density 304/km² (India 382); Krishna dist 518/km².",
            "Literacy rising: 62.07%→67.35% (2001→2011); urbanization 24.13%→29.47% (Krishna 40.81%).",
          ],
        },
        {
          title: "Economy",
          list: [
            "GSDP ₹16.06 lakh Cr (2024–25); growth 12.94%.",
            "Per capita ₹2.68 lakh (India ₹2.00 lakh).",
            "Agri +15.86% (horticulture, livestock, fisheries); Services +11.70%.",
            "Swarna Andhra 2047: economy ₹305 lakh Cr; PCI ₹53.34 lakh (deep-tech agri, river interlinking, industrial modernization).",
          ],
        },
        {
          title: "Institutions & Inclusion",
          list: [
            "IIT, IIM, NID, VIT-AP, SRM; 5k+ EWS houses; gender-inclusive schemes (Lakhpati Didi).",
            "Digital governance: Mana Amaravati, e-Pragati.",
          ],
        },
        {
          title: "Transition & Policy",
          list: [
            "Demographic Management Policy (announced Jan 2025): responds to TFR decline, aging, family change.",
            "Revived development under CM N. Chandrababu Naidu — push to complete capital core.",
          ],
        },
        { title: "Specifications", body: "Education/health grids; affordable housing quotas; digital public infra SLAs." },
      ];
    }

    // Fallback: generic (should not hit for known cards)
    return [
      { title: "Overview", body: current.description },
      { title: "Key Features", list: current.features.slice(0, 12) },
      { title: "Specifications", body: current.specifications },
      { title: "Notes", body: "Maps are indicative; verify with latest authoritative datasets." },
    ];
  }, [current]);

  const goPrevDetail = () =>
    setDetailIdx((i) => (i - 1 + detailSlides.length) % detailSlides.length);
  const goNextDetail = () => setDetailIdx((i) => (i + 1) % detailSlides.length);

  if (!current) {
    return (
      <Layout>
        <div className="container mx-auto py-20 text-center">
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
          {/* LEFT — full image */}
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

              {/* View Full Size */}
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

          {/* RIGHT — details */}
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

              {/* Arrows */}
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
                      <h4 className="mt-0">
                        {(detailSlides[detailIdx] as any)?.title}
                      </h4>
                      {"list" in (detailSlides[detailIdx] as any) ? (
                        <ul>
                          {(detailSlides[detailIdx] as any).list.map(
                            (t: string, i: number) => <li key={i}>{t}</li>
                          )}
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
