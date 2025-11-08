import { motion } from "framer-motion";
import {
  AlertTriangle,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Coins,
  Construction,
  FileCheck2,
  FileText,
  Hammer,
  Package,
  Search,
  ShieldCheck,
  TrendingUp,
  Truck,
  Users,
  Users2,
  Wrench,
  Workflow,
  Building2,
  GitBranch,
  Link as LinkIcon,
} from "lucide-react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import { useMemo, useState, useRef, useEffect } from "react";

// ────────────────────────────────────────────────────────────────────────────────
// Government Project Construction Cycle — LEARNING PATH EDITION
// Card-based sections with step numbers, mini progress, and Next/Prev nav.
// Keeps your existing data but presents it as an easy-to-follow path.
// ────────────────────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

// Reusable: Section header
function SectionHeader({ k, title, subtitle }: { k: number; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary grid place-items-center font-bold">
        {k}
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">{title}</h2>
        {subtitle ? (
          <p className="text-muted-foreground mt-1">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

// Reusable: Learn step card
function LearnCard({ Icon, title, desc, list }: any) {
  return (
    <GlassCard className="h-full">
      <div className="flex items-start gap-4 mb-2">
        <div className="p-3 rounded-xl bg-primary/10 text-primary">
          {Icon ? <Icon className="w-6 h-6" /> : null}
        </div>
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      </div>
      {desc ? <p className="text-muted-foreground mb-2">{desc}</p> : null}
      {Array.isArray(list) ? (
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          {list.map((x: string, i: number) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : null}
    </GlassCard>
  );
}

// Tiny progress widget (based on which anchor is active)

const ProjectCycle = () => {
  // 1) Overview phases
  const phases = [
    {
      icon: Search,
      title: "Planning & Feasibility",
      description:
        "Needs definition, reconnaissance surveys, feasibility/viability, preliminary cost, environmental & social screening, stakeholder consultations, and in‑principle approvals.",
    },
    {
      icon: FileText,
      title: "Design & Documentation",
      description:
        "DPR, drawings (arch/struct/MEP), technical specs, BOQ, tender drawings, estimate, approvals/permits, and bid documents aligned to codes/standards.",
    },
    {
      icon: Users,
      title: "Tendering & Award",
      description:
        "Notice publication, pre‑bid meeting, RFI clarifications, tech & financial evaluation, negotiation if allowed, LoA, contract signing (EPC/Item‑rate/Turnkey).",
    },
    {
      icon: Hammer,
      title: "Execution & Monitoring",
      description:
        "Mobilization, site setup, method statements, ITPs, construction as per drawings, QA/QC, safety, inspections, progress tracking, measurement & billing.",
    },
    {
      icon: TrendingUp,
      title: "Quality Assurance & Control",
      description:
        "Material approvals, lab tests, field tests, hold/witness points, NCR & CAPA tracking, audit trails, compliance to IS/IRC/MoRTH or project specs.",
    },
    {
      icon: CheckCircle2,
      title: "Completion, Handover & DLP",
      description:
        "Testing & commissioning, snag closure, as‑built drawings, O&M manuals, completion certificate, handover, DLP maintenance & final closure.",
    },
  ];

  // 2) Roles & responsibilities
  const roles = [
    {
      icon: Building2,
      title: "Owner / Client",
      list: [
        "Defines scope & KPIs; secures funding & land.",
        "Approves designs, variations, time & cost extensions.",
        "Chairs high‑level reviews; accepts handover & closes project.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "PMC (Project Management Consultant)",
      list: [
        "Client’s representative for time‑cost‑quality‑safety.",
        "Reviews designs, approves submittals, manages ITPs & inspections.",
        "Certifies measurements/bills; manages risks, changes & reporting.",
      ],
    },
    {
      icon: Users2,
      title: "Design Consultants",
      list: [
        "Prepare DPR/drawings/specs, value engineering & IFC drawings.",
        "Resolve RFIs, site queries; issue revisions & as‑builts.",
      ],
    },
    {
      icon: Workflow,
      title: "Contractor (Main) & Subcontractors",
      list: [
        "Mobilize 4Ms; prepare WBS, schedules, method statements.",
        "Execute per drawings/specs; ensure QA/QC, EHS compliance.",
        "Maintain MBs, submit RA/final bills; DLP obligations.",
      ],
    },
    {
      icon: ClipboardList,
      title: "Engineer‑in‑Charge / Department",
      list: [
        "Day‑to‑day supervision with PMC; site orders & approvals.",
        "Measurement verification; milestones & penalties/bonuses.",
      ],
    },
    {
      icon: Truck,
      title: "Vendors & Suppliers",
      list: [
        "Supply approved materials/equipment as per specs & QA.",
        "Provide test certificates, warranties, delivery schedules.",
      ],
    },
  ];

  // 3) 4Ms — resources
  const fourMs = [
    {
      icon: Users,
      title: "Manpower",
      desc:
        "Skilled/unskilled labour, supervisors, site engineers, safety officers, QA/QC, planners, surveyors; productivity, training & deployment plans.",
    },
    {
      icon: Construction,
      title: "Machinery",
      desc:
        "Excavators, transit mixers, batching plants, cranes, scaffolding, formwork systems, testing equipment; uptime, preventive maintenance & spares.",
    },
    {
      icon: Package,
      title: "Materials",
      desc:
        "Cement, steel, aggregates, bricks/blocks, bitumen, pipes, MEP items; approvals, storage, traceability, test plans & vendor QC.",
    },
    {
      icon: Coins,
      title: "Money",
      desc:
        "Budgeting, mobilization advance, cash‑flow curves, RA bills, price adjustment/escalation, retention & securities, financial audits.",
    },
  ];

  // 4) Scheduling relationships
  const relationships = [
    {
      code: "FS",
      name: "Finish‑to‑Start",
      icon: GitBranch,
      example: "Foundation must finish before column casting starts.",
      note: "Most common dependency; controls sequence to avoid rework.",
    },
    {
      code: "SS",
      name: "Start‑to‑Start",
      icon: GitBranch,
      example: "Excavation and rebar cutting can start together.",
      note: "Enables overlap for faster delivery; watch resource loading.",
    },
    {
      code: "FF",
      name: "Finish‑to‑Finish",
      icon: GitBranch,
      example: "Electrical & plumbing finishes aligned to finishing works.",
      note: "Synchronizes completions to maintain area handover dates.",
    },
    {
      code: "SF",
      name: "Start‑to‑Finish (rare)",
      icon: GitBranch,
      example: "Shift handover in operations depends on next crew starting.",
      note: "Used sparingly; model with care in CPM tools.",
    },
  ];

  // 5) Hindrances (Risk Register categories)
  const hindrances = [
    {
      icon: AlertTriangle,
      title: "Technical",
      items: [
        "Design errors/omissions, utility clashes, unforeseen ground",
        "Inadequate surveys; scope creep; incompatible specs",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Administrative / Approvals",
      items: [
        "Delayed permits/NOCs, ROW issues, land acquisition",
        "Slow decisions/change approvals; interface conflicts",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Financial / Commercial",
      items: [
        "Delayed payments; price volatility; vendor insolvency",
        "Inaccurate estimates; inadequate contingencies",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Resources & Supply Chain",
      items: [
        "Labour shortage/strikes; low productivity",
        "Late deliveries; quality rejections; logistics constraints",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Environment, Health & Safety",
      items: [
        "Extreme weather; floods; heat stress; site accidents",
        "Non‑compliance with EHS leading to stoppages",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Legal / Contractual",
      items: [
        "Claims/disputes; third‑party litigation; encroachments",
        "Arbitration & penalties; force majeure events",
      ],
    },
  ];

  // 6) PMC vs Contractor — work stages matrix
  const workStages = [
    {
      stage: "Pre‑Construction",
      pmc: [
        "Design review & constructability; approvals plan",
        "Tender support & evaluation; kick‑off & mobilization checks",
      ],
      contractor: [
        "Mobilization (4Ms), site layout, temporary works",
        "Submittals: method statements, ITPs, drawings & samples",
      ],
    },
    {
      stage: "Construction",
      pmc: [
        "Supervision, inspections (hold/witness), DPRs, audits",
        "Progress reviews, risk & change control, measurement certs",
      ],
      contractor: [
        "Execute per IFC drawings/specs; QA/QC, EHS, logistics",
        "Maintain MBs, test records; submit RA bills; manage subs",
      ],
    },
    {
      stage: "Testing & Handover",
      pmc: [
        "Review test packs; punch list & closure; statutory clearances",
        "Certify completion; accept O&M manuals & as‑builts",
      ],
      contractor: [
        "Pre‑commissioning/commissioning; snag rectification",
        "Submit as‑builts, warranties; train O&M team",
      ],
    },
    {
      stage: "DLP & Close‑Out",
      pmc: [
        "Monitor DLP performance; verify defect rectification",
        "Recommend final payments; close contracts & archives",
      ],
      contractor: [
        "Attend defects; periodic checks as per contract",
        "Apply for securities release; demobilize site",
      ],
    },
  ];

  // 7) Key documents & registers (quick reference)
  const documents = [
    {
      icon: FileCheck2,
      title: "Planning & Design",
      list: [
        "Project Charter, Stakeholder Register, WBS",
        "DPR, IFC Drawings, Specs, BOQ, Cost Estimates",
        "Permits/NOCs, Environmental & Social Management Plan",
      ],
    },
    {
      icon: CalendarCheck,
      title: "Scheduling & Control",
      list: [
        "Baseline & Updated Schedules (Gantt/CPM)",
        "Look‑Ahead Plans, S‑Curves, Resource Histograms",
        "Risk Register, Change/Variation Register",
      ],
    },
    {
      icon: BookOpenCheck,
      title: "Quality & Safety",
      list: [
        "QA/QC Plan, ITPs, Checklists, Test Reports",
        "Site Order Book, NCR & CAPA Logs, Calibration Records",
        "Safety Plan, JSA/JHA, TBT records, Incident Logs",
      ],
    },
    {
      icon: Coins,
      title: "Commercial & Billing",
      list: [
        "Contract Agreement, Insurances, Bank Guarantees",
        "Measurement Books (MB), RA/Final Bills, Price Adjustments",
        "Reconciliations, Cash‑flow, Audit Files",
      ],
    },
  ];

  // Assemble the learning path sections
  const path = useMemo(
    () => [
      { id: "phases", title: "Pre‑, During‑ & Post‑Construction", subtitle: "Follow these milestones to understand the full lifecycle", cards: phases.map((p) => ({ Icon: p.icon, title: p.title, desc: p.description })) },
      { id: "roles", title: "Stakeholders & Roles", subtitle: "Who does what across the project?", cards: roles.map((r) => ({ Icon: r.icon, title: r.title, list: r.list })) },
      { id: "ms", title: "4Ms — Resources", subtitle: "Manpower, Machinery, Materials, Money", cards: fourMs.map((m) => ({ Icon: m.icon, title: m.title, desc: m.desc })) },
      { id: "schedule", title: "Scheduling Dependencies (CPM/PERT)", subtitle: "How activities relate and overlap", cards: relationships.map((rel) => ({ Icon: rel.icon, title: `${rel.code} — ${rel.name}`, desc: `${rel.note}\nExample: ${rel.example}` })) },
      { id: "hindrances", title: "Hindrances (Delay/Risk Library)", subtitle: "Watch‑outs & typical blockers", cards: hindrances.map((h) => ({ Icon: h.icon, title: h.title, list: h.items })) },
      { id: "stages", title: "PMC vs Contractor — Work Stages", subtitle: "Parallel responsibilities by stage", cards: workStages.map((ws) => ({ title: ws.stage, list: ["PMC: "+ws.pmc.join("; "), "Contractor: "+ws.contractor.join("; ")] })) },
      { id: "docs", title: "Key Documents & Registers", subtitle: "What to prepare, track and archive", cards: documents.map((d) => ({ Icon: d.icon, title: d.title, list: d.list })) },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const total = path.length;

  // Neon slider indicator logic for tab bar
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const [indicator, setIndicator] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const updateIndicator = () => {
    const el = tabRefs.current[active];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  };
  useEffect(() => {
    updateIndicator();
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  const go = (dir: 1 | -1) => () => setActive((i) => Math.min(Math.max(i + dir, 0), total - 1));

  return (
    <Layout>
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div {...fadeUp(0)} className="text-center mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Government Project Construction Cycle
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn the full journey in bite‑sized cards — phases, roles, 4Ms, dependencies, hindrances, PMC vs Contractor, and the key documents.
            </p>
          </motion.div>

          

          {/* Top step nav */}
<nav className="relative mb-6 sticky top-20 z-30" role="tablist" aria-label="Learning path sections">
<div className="relative rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-black shadow-[0_0_20px_rgba(0,255,255,.35),0_0_40px_rgba(59,130,246,.25)] ring-1 ring-cyan-300/30 backdrop-blur overflow-x-auto no-scrollbar">
<motion.div
className="absolute top-0 bottom-0 rounded-xl pointer-events-none"
animate={{ left: indicator.left, width: indicator.width }}
transition={{ type: 'spring', stiffness: 420, damping: 32 }}
style={{
background: 'linear-gradient(90deg, rgba(255,255,255,.95) 0%, rgba(0,255,255,.35) 100%)',
boxShadow: '0 0 18px rgba(0,255,255,.6), 0 0 36px rgba(59,130,246,.35)',
}}
/>
<div className="flex items-center gap-2 snap-x snap-mandatory px-3 py-2">
{path.map((s, i) => (
<button
key={s.id}
onClick={() => setActive(i)}
role="tab"
aria-selected={i === active}
ref={(el) => (tabRefs.current[i] = el as HTMLButtonElement)}
className={`relative z-10 snap-start whitespace-nowrap px-4 py-2 rounded-xl text-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 ${
i === active ? 'text-slate-900 bg-white/80' : 'text-cyan-50/90 hover:text-white'
}`}
>
{i + 1}. {s.title}
</button>
))}
</div>
</div>
</nav>

          {/* Active section */}
          <motion.div key={active} {...fadeUp(0.05)}>
            <SectionHeader k={active + 1} title={path[active].title} subtitle={path[active].subtitle} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {path[active].cards.map((c: any, idx: number) => (
                <LearnCard key={idx} {...c} />
              ))}
            </div>
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={go(-1)}
                disabled={active === 0}
                className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-50"
              >
                ← Previous
              </button>
              <button
                onClick={go(1)}
                disabled={active === total - 1}
                className="px-4 py-2 rounded-lg border border-primary bg-primary/90 text-white hover:bg-primary"
              >
                Next →
              </button>
            </div>
          </motion.div>

          {/* Footer note */}
          <motion.div {...fadeUp(0.08)} className="max-w-4xl mx-auto mt-12">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-2">Compliance & Transparency</h3>
              <p className="text-muted-foreground">
                Ensure adherence to codes and statutory approvals, maintain complete records (MBs, test certificates, site orders, RFIs), and conduct periodic audits. Track KPIs across time, cost, quality, and safety with clear escalation paths and issue logs.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectCycle;

// ────────────────────────────────────────────────────────────────────────────────
// Showcase-only: per-section Learning Path components
// Use these on separate routes or embed them anywhere in your site.
// Example: import { PhasesPath } from "./ProjectCycle";
// ────────────────────────────────────────────────────────────────────────────────

export function PhasesPath() {
  const cards = [
    { Icon: Search, title: "Planning & Feasibility", desc: "Needs, surveys, feasibility, prelim cost, E&S screening, approvals." },
    { Icon: FileText, title: "Design & Documentation", desc: "DPR, drawings/specs, BOQ, permits, bid docs to codes/standards." },
    { Icon: Users, title: "Tendering & Award", desc: "Notice, pre-bid, clarifications, tech/fin eval, LoA & contract." },
    { Icon: Hammer, title: "Execution & Monitoring", desc: "Mobilization, ITPs, QA/QC, EHS, measurements, billing, progress." },
    { Icon: TrendingUp, title: "Quality Assurance & Control", desc: "Lab/field tests, hold/witness, NCR/CAPA, audits, compliance." },
    { Icon: CheckCircle2, title: "Completion, Handover & DLP", desc: "Commissioning, snags, as-builts, O&M, completion, DLP closure." },
  ];
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Learning Path — Phases</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <LearnCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

export function RolesPath() {
  const cards = [
    { Icon: Building2, title: "Owner / Client", list: ["Scope/KPIs & funding","Approvals/variations","Final acceptance & closure"] },
    { Icon: ShieldCheck, title: "PMC", list: ["Time/Cost/Quality/Safety","Submittals & inspections","Certify MB/bills; risks & changes"] },
    { Icon: Users2, title: "Design Consultants", list: ["DPR/drawings/specs","RFIs & revisions","As-builts"] },
    { Icon: Workflow, title: "Contractor", list: ["Mobilize 4Ms, WBS & methods","Execute per IFC + QA/QC/EHS","MBs, RA bills, DLP"] },
    { Icon: ClipboardList, title: "Engineer-in-Charge", list: ["Daily supervision","Site orders/approvals","Verify measurements"] },
    { Icon: Truck, title: "Vendors/Suppliers", list: ["Spec-compliant supply","Test certs & warranties","Delivery plans"] },
  ];
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Learning Path — Roles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <LearnCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

export function ResourcesPath() {
  const cards = [
    { Icon: Users, title: "Manpower", desc: "Labour, engineers, QA/QC, safety, planners; deployment & productivity." },
    { Icon: Construction, title: "Machinery", desc: "Excavators, mixers, batching, cranes, formwork; uptime & PM." },
    { Icon: Package, title: "Materials", desc: "Cement, steel, aggregates, pipes, MEP; approvals, storage, tests." },
    { Icon: Coins, title: "Money", desc: "Budget, cash-flows, RA bills, escalation, retention, audits." },
  ];
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Learning Path — 4Ms</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <LearnCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

export function SchedulePath() {
  const cards = [
    { Icon: GitBranch, title: "FS — Finish to Start", desc: "B starts after A finishes. Ex: foundation → columns." },
    { Icon: GitBranch, title: "SS — Start to Start", desc: "B can start when A starts. Ex: excavation + rebar cutting." },
    { Icon: GitBranch, title: "FF — Finish to Finish", desc: "B finishes when A finishes. Ex: MEP finishes with interiors." },
    { Icon: GitBranch, title: "SF — Start to Finish", desc: "Rare: B can't finish until A starts. Shift handover." },
  ];
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Learning Path — Scheduling</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <LearnCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

export function HindrancesPath() {
  const cards = [
    { Icon: AlertTriangle, title: "Technical", list: ["Design omissions","Utility clashes","Unforeseen ground"] },
    { Icon: AlertTriangle, title: "Administrative", list: ["Permits/NOCs delays","ROW & land","Slow decisions"] },
    { Icon: AlertTriangle, title: "Financial", list: ["Payment delays","Price volatility","Vendor insolvency"] },
    { Icon: AlertTriangle, title: "Resources & Supply", list: ["Labour shortage","Late deliveries","Quality rejections"] },
    { Icon: AlertTriangle, title: "EHS / Environment", list: ["Weather/floods","Accidents","Non-compliance"] },
    { Icon: AlertTriangle, title: "Legal / Contract", list: ["Claims/litigation","Encroachments","Arbitration"] },
  ];
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Learning Path — Hindrances</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <LearnCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

export function StagesPath() {
  const cards = [
    { title: "Pre-Construction", list: ["PMC: Constructability, approvals, tender support, mobilization checks","Contractor: 4Ms mobilization, temp works, method/ITP submittals"] },
    { title: "Construction", list: ["PMC: Inspections, DPRs, risk/change, certify measurements","Contractor: Execute IFC, QA/QC & EHS, MBs/tests, RA bills"] },
    { title: "Testing & Handover", list: ["PMC: Test packs, punch list closure, clearances, completion","Contractor: Commissioning, snags, as-builts, O&M, training"] },
    { title: "DLP & Close-Out", list: ["PMC: Monitor DLP, verify rectifications, recommend final pay","Contractor: Attend defects, periodic checks, release securities"] },
  ];
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Learning Path — PMC vs Contractor</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {cards.map((c, i) => (
          <LearnCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

export function DocumentsPath() {
  const cards = [
    { Icon: FileCheck2, title: "Planning & Design", list: ["Charter, Stakeholder Register, WBS","DPR, Drawings, Specs, BOQ, Estimates","Permits/NOCs, ESMP"] },
    { Icon: CalendarCheck, title: "Scheduling & Control", list: ["Baseline/Updates, Look-ahead","S-curves, Resource histograms","Risk & Change registers"] },
    { Icon: BookOpenCheck, title: "Quality & Safety", list: ["QA/QC Plan, ITPs, Checklists, Tests","Site order, NCR/CAPA, Calibration","Safety plan, JSA/TBT, Incidents"] },
    { Icon: Coins, title: "Commercial & Billing", list: ["Agreement, Insurances/BGs","MBs, RA/Final, Price adjustments","Reconciliations, Cash-flow, Audits"] },
  ];
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Learning Path — Key Documents</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cards.map((c, i) => (
          <LearnCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}
