"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  ClipboardCheck,
  Coins,
  Construction,
  FileCheck2,
  FileText,
  Hammer,
  Landmark,
  LayoutGrid,
  Map,
  MessageSquare,
  Package,
  Search,
  ShieldCheck,
  TrendingUp,
  Truck,
  Users,
  Users2,
  Workflow,
  Building2,
  Building,
  GitBranch,
  Wrench,
  History,
} from "lucide-react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import { useMemo, useState, useRef, useEffect } from "react";

/**
 * AICCC — Training Library (VIEW-ONLY)
 * Sections rendered as flash-card grids with scrollable bodies.
 * No export / download features included.
 *
 * Sections (original + integrated):
 * 1) Minutes of Meeting (MOMs)
 * 2) Communication Etiquettes
 * 3) Construction Project Lifecycle — Overview ✅ (NEW)
 * 4) Key Roles & Responsibilities ✅ (NEW)
 * 5) 4Ms of Construction Resources ✅ (NEW)
 * 6) Stages & Phases of Construction ✅ (NEW)
 * 7) Life Cycle of a Typical Government Project
 * 8) Construction Sequence of Roads
 * 9) Construction Sequence of High-Rise Buildings
 * 10) Overview of Construction Project Management
 * 11) Project Scheduling (includes PERT/CPM relationships)
 * 12) Hindrances in Construction Projects ✅ (NEW)
 * 13) PMC & Contractor — Work Stages ✅ (NEW)
 * 14) Construction Management Tools & Documents ✅ (NEW)
 * 15) Practical Example — Water Supply Project ✅ (NEW)
 */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

// ────────────────────────────────────────────────────────────────────────────────
// Reusable bits
// ────────────────────────────────────────────────────────────────────────────────

function SectionHeader({
  k,
  title,
  subtitle,
}: {
  k: number;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary grid place-items-center font-bold">
        {k}
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">{title}</h2>
        {subtitle ? <p className="text-muted-foreground mt-1">{subtitle}</p> : null}
      </div>
    </div>
  );
}

import { type LucideIcon } from "lucide-react";

type CardItem = {
  Icon?: LucideIcon;
  title: string;
  desc?: string;
  list?: string[];
};

function LearnCard({
  Icon,
  title,
  desc,
  list,
}: {
  Icon?: LucideIcon;
  title: string;
  desc?: string;
  list?: string[];
}) {
  return (
    <GlassCard className="h-full">
      <div className="flex items-start gap-4 mb-2">
        <div className="p-3 rounded-xl bg-primary/10 text-primary">{Icon ? <Icon className="w-6 h-6" /> : null}</div>
        <h3 className="text-lg md:text-xl font-semibold leading-snug">{title}</h3>
      </div>
      {desc ? <p className="text-muted-foreground mb-2 whitespace-pre-line">{desc}</p> : null}
      {Array.isArray(list) && list.length > 0 ? (
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          {list.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : null}
    </GlassCard>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// Main
// ────────────────────────────────────────────────────────────────────────────────

export default function AICCCTrainingLibrary() {
  // ========================= 1) Minutes of Meeting (MOMs) =========================
  const momCards = useMemo(
    () => [
      {
        Icon: FileText,
        title: "What are MOMs?",
        desc:
          "Minutes of Meeting (MOMs) are official written records summarizing discussions, decisions, and agreed action points. They capture what was discussed, who attended, and what needs to be done, by whom, and by when.",
      },
      {
        Icon: BookOpenCheck,
        title: "Purpose of MOMs",
        list: [
          "Capture meeting discussions, decisions, and responsibilities",
          "Serve as an official record of events and agreements",
          "Ensure accountability and follow-up on action items",
          "Facilitate transparency among stakeholders",
        ],
      },
      {
        Icon: TrendingUp,
        title: "Importance of MOMs",
        list: [
          "Acts as a formal reference for future meetings",
          "Provides accountability and clarity of assigned tasks",
          "Prevents miscommunication or misunderstandings",
          "Helps in tracking project or operational progress",
          "Demonstrates professionalism and organizational discipline",
        ],
      },
      {
        Icon: FileCheck2,
        title: "Key Components of MOM",
        list: [
          "Meeting Title and Date",
          "Attendees and Absentees",
          "Agenda Points",
          "Discussion Summary",
          "Decisions Taken",
          "Action Items with Responsible Persons and Deadlines",
        ],
      },
      {
        Icon: CalendarCheck,
        title: "MOM Writing Process",
        list: [
          "Before Meeting – Prepare agenda and note objectives",
          "During Meeting – Record key points, decisions, and assigned actions",
          "After Meeting – Draft, review, and circulate MOM for confirmation",
          "Follow-Up – Track completion of action points",
        ],
      },
      {
        Icon: ClipboardList,
        title: "Example MOM Template",
        desc:
          "Date: ____________\nMeeting Title: ____________\nAttendees: ____________\n\nAgenda | Discussion Summary | Action Item | Responsible | Deadline\n-------|--------------------|-------------|-------------|---------\n1. | | | |\n2. | | | |",
      },
      {
        Icon: ClipboardCheck,
        title: "Sample MOM (Filled Example)",
        desc:
          "Date: 12 Oct 2025\nMeeting Title: Project Review – Solar Plant Site\nAttendees: Project Manager, QA Engineer, Site Incharge\n\nAgenda | Discussion | Action Item | Responsible | Deadline\n1. Quality Issues | Discussed corrosion rectification | Submit revised schedule | QA Engineer | 18 Oct 2025\n2. Procurement | Delay in anti-rust coating supply | Follow-up with vendor | Procurement Lead | 20 Oct 2025",
      },
      {
        Icon: ShieldCheck,
        title: "Do’s & Don’ts",
        list: [
          "✅ Be clear and concise; use bullet points; verify names, dates, and tasks; share MOM promptly",
          "❌ Don’t include personal opinions; don’t omit key decisions; don’t delay circulation; avoid vague language",
        ],
      },
      {
        Icon: AlertTriangle,
        title: "Common Mistakes to Avoid",
        list: [
          "Missing key decisions or tasks",
          "Using ambiguous terms like ‘soon’ or ‘ASAP’",
          "Not updating MOM after changes",
          "Forgetting to share MOM with all participants",
          "Poor formatting or inconsistent layout",
        ],
      },
      {
        Icon: CheckCircle2,
        title: "Conclusion & Key Takeaways",
        list: [
          "MOMs are essential tools for effective communication",
          "They ensure accountability and follow-up",
          "Professional MOMs strengthen project management and reporting",
          "Remember: A good MOM reflects a productive meeting.",
        ],
      },
    ],
    []
  );

  // ========================= 2) Communication Etiquettes (AICCC) =========================
  const commCards = [
    {
      Icon: Landmark,
      title: "Professional Communication Framework",
      list: [
        "AICCC (Amaravathi Integrated Construction Command Centre)",
        "Protocol for calls, follow-ups, documentation, and escalation",
      ],
    },
    {
      Icon: CalendarCheck,
      title: "Objective of the Call",
      list: [
        "Ensure timely progress updates from Contractors and PMCs",
        "Track delays and identify root causes",
        "Maintain clear communication between site teams and Government",
        "Strengthen relationships while maintaining accountability",
        "Record accurate status for daily and weekly reporting",
      ],
    },
    {
      Icon: Users,
      title: "Role of the Project Coordinator",
      list: [
        "Act as a communication bridge between AICCC management and site teams",
        "Follow up politely but firmly for updates",
        "Record responses systematically in the tracker",
        "Escalate critical issues promptly",
        "Maintain professionalism at all times",
      ],
    },
    {
      Icon: ClipboardList,
      title: "Call Preparation Checklist",
      list: [
        "Review last update and current project status",
        "Keep project code/name, contact details, and last remarks ready",
        "Prepare specific questions on work progress and delays",
        "Ensure call log sheet or CRM is open",
        "Keep escalation contact handy for urgent issues",
      ],
    },
    {
      Icon: MessageSquare,
      title: "Sample Script — Progress Check",
      desc:
        "“Good morning/afternoon [Name], this is [Your Name] calling from AICCC.\nI’m following up on the current progress for [Project Name]. Could you please share the latest update on:\n• Work completed this week\n• Pending activities\n• Any site issues or material delays?\nThank you — I’ll record this for our weekly progress review.”",
    },
    {
      Icon: MessageSquare,
      title: "Sample Script — Delay Follow-Up",
      desc:
        "“Hello [Name], this is [Your Name] from AICCC.\nWe noticed there’s a delay in [specific activity]. Could you please confirm the reason and revised expected completion date?\nIf any support is needed from our end to resolve this, please let me know so I can inform the concerned department.\nWe appreciate your cooperation in keeping the schedule on track.”",
    },
    {
      Icon: MessageSquare,
      title: "Sample Script — Escalation",
      desc:
        "“Hi [Name], this is [Your Name] from AICCC.\nAs per our previous discussion, [specific work/item] is still pending beyond the expected timeline.\nI’ll need to update relevant ‘Authority’ accordingly. Could you please share an immediate action plan or any support needed to close this?\nWe value your prompt response on this matter.”",
    },
    {
      Icon: FileCheck2,
      title: "Call Documentation",
      list: [
        "Record every call (date, time, person, summary)",
        "Update remarks in Excel/CRM within 10 minutes after the call",
        "Categorize follow-ups: Progress / Delay / Escalation / Closed",
        "Highlight unresolved issues for management review",
      ],
    },
    {
      Icon: BookOpenCheck,
      title: "Communication Etiquette — Do’s & Don’ts",
      list: [
        "✅ Greet and introduce yourself clearly; polite but confident tone; listen actively; verify information; thank them",
        "❌ Avoid informal small talk; don’t promise resolutions you can’t deliver; never leave calls undocumented",
      ],
    },
  ];

  // ========================= 3) NEW — Construction Project Lifecycle (from user) =========================
  const lifecycleCards = [
    {
      Icon: LayoutGrid,
      title: "🏗️ Lifecycle — Phases",
      list: [
        "A) Pre-Construction",
        "B) Construction (Execution)",
        "C) Post-Construction",
      ],
    },
    {
      Icon: Search,
      title: "A. Pre-Construction — Concept & Feasibility",
      list: [
        "Identify need; surveys; financial feasibility",
        "Environmental clearance; early stakeholder inputs",
      ],
    },
    {
      Icon: FileText,
      title: "A. Pre-Construction — Planning & Design",
      list: [
        "Prepare DPR (Detailed Project Report)",
        "Architectural drawings & structural design",
        "Obtain statutory approvals",
      ],
    },
    {
      Icon: ClipboardList,
      title: "A. Pre-Construction — Tendering & Procurement",
      list: [
        "Tender docs: BOQ, specs, drawings",
        "Float tender (open/limited/e-tender)",
        "Evaluate bids; award to L1 (lowest)",
        "Contract signing (EPC/Item-rate/Turnkey)",
      ],
    },
    {
      Icon: Hammer,
      title: "B. Construction — Mobilization",
      list: [
        "Deploy the 4Ms: manpower, machinery, materials, money",
        "Site layout, safety plan, lab/QC setup, benchmarks",
      ],
    },
    {
      Icon: Workflow,
      title: "B. Construction — Execution",
      list: [
        "Earthwork → foundation → superstructure → finishes → MEP → commissioning",
      ],
    },
    {
      Icon: TrendingUp,
      title: "B. Construction — Monitoring & Control",
      list: [
        "PMC supervises time/quality/cost",
        "Engineer-in-Charge certifies work",
        "DPRs, MBs, RA bills",
      ],
    },
    {
      Icon: CheckCircle2,
      title: "C. Post-Construction",
      list: [
        "Testing & commissioning; performance validation",
        "Handover: as-builts, O&M manuals",
        "Defects Liability Period (≈1 year); final closure",
      ],
    },
  ];

  // ========================= 4) NEW — Key Roles & Responsibilities (from user) =========================
  const rolesCards = [
    {
      Icon: Users2,
      title: "PMC — Project Management Consultant",
      list: [
        "Acts as client’s representative",
        "Ensures quality, safety, timelines",
        "Prepares progress reports; evaluates variations; audits",
        "Coordinates stakeholders; reviews designs; approves materials; monitors bills",
      ],
    },
    {
      Icon: Users,
      title: "Contractor",
      list: [
        "Executes per drawings/specs/contract",
        "Arranges 4Ms; prepares schedules & safety systems",
        "Submits RA bills; manages subcontractors & logistics",
      ],
    },
    {
      Icon: Landmark,
      title: "Other Stakeholders",
      list: [
        "Owner/Client — funds & scope",
        "Consultants — design/structural approvals",
        "Engineer-in-Charge/Department — supervises & certifies",
        "Suppliers/Vendors — materials & equipment",
      ],
    },
  ];

  // ========================= 5) NEW — 4Ms of Construction Resources (from user) =========================
  const fourMCards = [
    {
      Icon: Users,
      title: "Manpower",
      desc: "Labourers, engineers, supervisors, managers\nExamples: masons, carpenters, welders, site engineers",
    },
    {
      Icon: Truck,
      title: "Machinery",
      desc: "Tools & equipment required\nExamples: excavators, cranes, batching plants",
    },
    {
      Icon: Package,
      title: "Materials",
      desc: "Consumables and construction inputs\nExamples: cement, sand, steel, aggregates",
    },
    {
      Icon: Coins,
      title: "Money",
      desc: "Project funds & cash flow\nExamples: budgeting, billing, mobilization advance",
    },
  ];

  // ========================= 6) NEW — Stages & Phases of Construction (from user) =========================
  const stagePhaseCards = [
    { Icon: Search, title: "Planning", list: ["Scope, survey, design brief"] },
    { Icon: FileText, title: "Design", list: ["Drawings, approvals, estimates"] },
    { Icon: ClipboardList, title: "Procurement", list: ["Tender, vendor selection, contract"] },
    { Icon: Construction, title: "Construction", list: ["Site setup, structure, finishing works"] },
    { Icon: CheckCircle2, title: "Commissioning", list: ["Testing, rectification, certification"] },
    { Icon: FileCheck2, title: "Closure", list: ["Final payment, documentation, handover"] },
  ];

  // ========================= 7) Govt Project Life Cycle (original) =========================
  const govLifeCards = [
    { Icon: Landmark, title: "Introduction", list: ["Govt projects form state infrastructure foundation", "AP Departments: APCRDA, ADCL, R&B, Panchayat Raj, Irrigation"] },
    { Icon: LayoutGrid, title: "Overview — Stages", list: ["1) Conceptualization", "2) Feasibility & DPR", "3) Administrative Approval & Financial Sanction (AA & FS)", "4) Tendering & Procurement", "5) Execution & Supervision", "6) Completion & Handover", "7) Operation & Maintenance"] },
    { Icon: History, title: "Stage 1: Conceptualization", list: ["Need identified by Departments/local bodies", "Alignment with development goals/Vision 2029", "Preliminary surveys and rough cost estimates", "Approval for DPR preparation"] },
    { Icon: FileText, title: "Stage 2: Feasibility Study & DPR", list: ["Tech/financial/environmental feasibility", "DPR: design, BOQ, specs, cost analysis", "Review by engineers/consultants", "Submission to Planning Dept/State Committee"] },
    { Icon: ClipboardCheck, title: "Stage 3: AA & FS", list: ["DPR vetted by Finance & Planning", "Administrative Sanction (AS) by Department", "Financial Sanction (FS) by Finance Dept"] },
    { Icon: ClipboardList, title: "Stage 4: Tendering & Procurement", list: ["Tender docs: drawings, BOQ, conditions", "e-Tendering via AP e-Procurement", "Technical bid eval → financial opening", "Letter of Acceptance (LoA) & Agreement"] },
    { Icon: Hammer, title: "Stage 5: Execution & Supervision", list: ["Site handover & mobilization", "Monitored by Dept Engineers/PMC", "Quality control via QCR & 3rd-party checks", "Periodic progress review meetings"] },
    { Icon: CheckCircle2, title: "Stage 6: Completion & Handover", list: ["Inspection & testing by Department", "Final completion report", "Defect Liability Period (DLP) observed", "Handover to User Dept/Local Authority"] },
    { Icon: Wrench, title: "Stage 7: O&M", list: ["Routine/annual maintenance", "Performance audits (State Audit/CAG)", "Feedback loop to improve future planning"] },
  ];

  // ========================= 8) Road Construction Sequence (original) =========================
  const roadCards = [
    { Icon: Map, title: "Overview of Road Construction", list: ["Follows IRC & MoRTH standards", "Classes: NH, SH, MDR, Rural Roads"] },
    { Icon: Search, title: "Preliminary Works & Surveying", list: ["Topographic/contour survey", "Soil investigation & CBR test", "Alignment marking (total station)", "DPR & approvals"] },
    { Icon: Construction, title: "Site Preparation & Setting Out", list: ["Clearing & grubbing", "Removal of topsoil", "Set centerline & benchmarks", "Barricading & traffic management"] },
    { Icon: Package, title: "Earthwork in Embankment", list: ["Material per MoRTH Sec 300", "Layer-wise fill (200–250 mm)", "95% MDD (Proctor)", "Side slope protection & turfing"] },
    { Icon: Package, title: "Subgrade Preparation", list: ["Dress/level to profile", "97% MDD; CBR > 8% (highways)", "Density & moisture QC"] },
    { Icon: Package, title: "Granular Sub-Base (GSB)", list: ["Grading as per MoRTH Table 400-1", "Spread/mix/compact in 150–200 mm layers", "Compaction at OMC"] },
    { Icon: Construction, title: "Wet Mix Macadam (WMM)", list: ["Plant-mixed; paver-laid", "Compacted by vibratory roller", "Thickness per design (~250 mm)", "Surface tolerance ±10 mm"] },
    { Icon: Construction, title: "Prime & Tack Coats", list: ["Prime: emulsion SS-1 on GSB", "Tack: on WMM/DBM before overlay", "MoRTH 503: 0.25–0.3 kg/m²", "Ensure clean & dry surface"] },
    { Icon: Construction, title: "DBM — Dense Bituminous Macadam", list: ["Binder: VG-30/VG-40", "Hot-mix, lay at 140–160°C", "Compaction to 98% density", "Thickness 50–100 mm"] },
    { Icon: Construction, title: "BC — Bituminous Concrete", list: ["Wearing course; nominal aggregate 13–19 mm", "VG-30/40 or modified bitumen", "Compaction to 98% density"] },
    { Icon: LayoutGrid, title: "Flexible vs Rigid Pavement", list: ["Flexible: bituminous, cheaper, shorter life", "Rigid: CC base, higher cost, long life, low maintenance"] },
    { Icon: Building, title: "Rigid Pavement Sequence", list: ["Subgrade & DLC prep", "Reinforcement placement", "PQC via slipform paver", "Dowel/tie bars; curing & joints"] },
    { Icon: Package, title: "DLC Sub-base", list: ["Thickness 150–200 mm", "Cement > 150 kg/m³", "Paver & roller compaction", "7-day curing before PQC"] },
    { Icon: Building, title: "PQC (M40–M50)", list: ["Panels with dowels at joints", "Needle/surface vibrators", "Continuous curing × 14 days"] },
    { Icon: ClipboardCheck, title: "Joint Formation & Sealing", list: ["Cut joints within 12 hours", "Seal with polysulphide/silicone", "Load transfer via dowels", "Prevent cracking & water ingress"] },
    { Icon: Truck, title: "Shoulders, Drainage & Furniture", list: ["Shoulders: granular/paved, slope 2.5%", "Surface/subsurface drains; perforated pipes", "Signs/guardrails/thermoplastic markings", "Barriers as per IRC:67"] },
    { Icon: BookOpenCheck, title: "Quality Control & Testing", list: ["Field density (sand replacement/core cutter)", "CBR, gradation, bitumen content", "Marshall Stability & cube strength", "QA/QC record keeping"] },
    { Icon: ShieldCheck, title: "Safety & Traffic Management", list: ["Diversion plan, PPE, signage", "Regular toolbox talks", "Follow IRC:SP:55"] },
    { Icon: CheckCircle2, title: "Completion & Maintenance", list: ["Final finishing & markings", "Joint inspection & approval", "Crack/pothole maintenance; periodic overlays"] },
  ];

  // ========================= 9) High-Rise Building Sequence (original) =========================
  const highriseCards = [
    { Icon: Building2, title: "Structural Systems", list: ["RCC framed (most common)", "Steel/Composite (IT parks/metros)", "Trade-offs: cost, speed, seismic performance"] },
    { Icon: ClipboardList, title: "Planning & Approvals", list: ["Land acquisition; local approvals", "Environmental clearances", "NOCs: Fire/Airport/Environment/Water/PCB"] },
    { Icon: Search, title: "Site Preparation & Surveying", list: ["Topographic & grid survey", "Site fencing & access roads", "Soil investigation: SPT, bore logs, SBC", "Camps, site office, utilities setup"] },
    { Icon: Construction, title: "Excavation & Earth Retention", list: ["Open-cut with stabilization", "Shoring: sheet pile, soldier pile, shotcrete", "Dewatering: sump/well points; PCB-compliant disposal"] },
    { Icon: Package, title: "Foundations (India)", list: ["Pile: bored cast-in-situ, under-reamed", "Raft for tower/podium", "Pile load tests (IS 2911)", "Tremie concreting, rebar lowering"] },
    { Icon: Hammer, title: "Basement Construction", list: ["Retaining + waterproof membrane", "Raft casting, pedestals, column starters", "Basement slab, backfilling, water-proof testing"] },
    { Icon: Building2, title: "RCC Frame Construction", list: ["Column-beam-slab cycle; Mivan/aluminium formwork", "7-day floor cycles with planning", "Core/shear walls via jumpform"] },
    { Icon: Construction, title: "Steel Structures", list: ["IS 800; bolted connections", "Crane erection; alignment & torque tests", "Deck slab with shear connectors"] },
    { Icon: ClipboardList, title: "Formwork & Lifting", list: ["Plywood/props for small works", "Mivan/aluminium for repetitive floors", "Jumpform/self-climbing for cores", "Tower cranes, hoists, pump lines/boom placers"] },
    { Icon: Package, title: "Masonry & Partitions", list: ["AAC/CLC blocks", "Mortar, curing, lintel & sill casting", "Fire-rated separations for offices"] },
    { Icon: Construction, title: "MEP Services", list: ["Plumbing, HVAC, Electrical, Fire", "Risers/duct routing", "Testing: IS 2065 (plumbing), IS 1646 (fire)"] },
    { Icon: Building, title: "Façade & External Finishes", list: ["Curtain wall/ACP/glass (offices)", "Plaster/paint/balcony rails (residential)", "Façade anchoring safety; cradle access"] },
    { Icon: Building, title: "Interior Finishes (Residential)", list: ["Flooring (vitrified/marble), painting", "Doors/windows fitting", "Bathroom waterproofing (IS 3067)", "Kitchen, joinery, false ceilings"] },
    { Icon: Building, title: "Interior Finishes (Commercial)", list: ["Raised flooring, grid ceiling", "HVAC diffusers", "Data cabling, server room, BMS", "Lighting & final finishes"] },
    { Icon: Map, title: "External Development", list: ["Compound wall, kerbs, road paving, drainage", "STP, OHT, sump", "Landscaping & external lighting"] },
    { Icon: BookOpenCheck, title: "Quality Control", list: ["QA/QC lab, cube tests, NDTs", "Slump/rebar checks", "IS 10262 mix designs; material approvals", "Stage-wise inspections & documentation"] },
    { Icon: ShieldCheck, title: "Safety Management", list: ["PPE, scaffolding, height work permits", "Lifting plans, crane inspection, fire safety", "Emergency response & mock drills"] },
    { Icon: CheckCircle2, title: "Testing, Commissioning & Handover", list: ["MEP T&C reports", "Snag rectification", "As-builts & O&M manuals", "Joint walkthrough; Occupancy Certificate"] },
    { Icon: TrendingUp, title: "Summary & Discussion", list: ["Flow: Planning → Substructure → Superstructure → Finishes → Handover", "Success: safety, coordination, cycle time optimization"] },
  ];

  // ========================= 10) Construction Project Management (Overview) (original) =========================
  const cpmCards = [
    { Icon: FileText, title: "Introduction", desc: "CPM involves planning, coordination, and control from inception to completion—delivering scope within schedule and budget while meeting quality and safety standards." },
    { Icon: TrendingUp, title: "Key Objectives", list: ["Deliver within scope, time, budget", "Ensure quality compliance", "Enhance stakeholder satisfaction", "Promote safety & sustainability", "Achieve operational efficiency"] },
    { Icon: LayoutGrid, title: "Project Life Cycle", list: ["1) Initiation", "2) Planning", "3) Execution", "4) Monitoring & Control", "5) Closure"] },
    { Icon: Users, title: "Stakeholders", list: ["Client/Owner", "Project Manager/PMC", "Architect & Design Consultants", "Contractors & Subcontractors", "Suppliers & Vendors", "Government/Statutory Bodies", "End Users/Community"] },
    { Icon: ClipboardList, title: "Key Functions", list: ["Scope", "Schedule", "Cost", "Quality", "Resource & Procurement", "Risk", "Communication & Documentation"] },
    { Icon: CalendarCheck, title: "Planning Tools & Techniques", list: ["Work Breakdown Structure (WBS)", "CPM & PERT", "Gantt Charts", "MS Project, Primavera, BIM Integration"] },
    { Icon: BookOpenCheck, title: "Monitoring & Control", list: ["Track progress vs plan", "Earned Value Management (EVM)", "Change control", "Continuous reporting to stakeholders"] },
    { Icon: AlertTriangle, title: "Challenges", list: ["Cost overruns (estimation errors)", "Schedule delays (design/procurement)", "Multi-stakeholder coordination", "Unforeseen site conditions", "Regulatory/environmental compliance"] },
    { Icon: ShieldCheck, title: "Role of Project Manager", list: ["Leadership & coordination", "Decision-making & problem-solving", "Documentation & records", "Safety, quality & risk oversight"] },
    { Icon: CheckCircle2, title: "Case Example — Solar Plant", list: ["Planning: design finalization, stakeholder engagement", "Execution: logistics & resource scheduling", "Monitoring: timely completion with quality parameters"] },
    { Icon: BookOpenCheck, title: "Summary & Takeaways", list: ["Integrates multiple disciplines", "Structured planning/coordination/control drive success", "Trends: digitalization, BIM, AI-based monitoring", "Continuous learning & adaptation"] },
  ];

  // ========================= 11) Project Scheduling (original + PERT/CPM ties) =========================
  const schedulingIntro = [
    { Icon: FileText, title: "Introduction to Scheduling", list: ["Defines timeline for activities and milestones", "Ensures planning, monitoring, and control", "Coordinates resources; tracks progress; forecasts completion"] },
    { Icon: TrendingUp, title: "Importance in Construction", list: ["Optimizes resource utilization", "Identifies delays/risks early", "Aids stakeholder communication", "Forms baseline for progress measurement"] },
    { Icon: LayoutGrid, title: "Work Breakdown Structure (WBS)", list: ["Hierarchical decomposition of scope", "Deliverables → work packages", "Responsibility & cost tracking", "Example: L1 Project → L2 Substructure → L3 Footings"] },
    { Icon: ClipboardCheck, title: "WBS ↔ Schedule Relationship", list: ["Each WBS element maps to scheduled tasks", "Provides structure for cost/progress control", "Ensures logical sequencing & complete coverage", "Foundation for L1–L3 and beyond"] },
    { Icon: CalendarCheck, title: "L1 / L2 / L3 Schedules", list: ["L1: High-level phases & milestones (management view)", "L2: Discipline/package-wise breakdown with milestones", "L3: Detailed activities, durations, dependencies (daily/weekly control)", "Linked to resources, manpower, and cost systems"] },
  ];

  const schedulingRels = [
    { code: "FS", name: "Finish-to-Start", Icon: GitBranch, example: "Foundation must finish before column casting starts.", note: "Most common dependency; prevents rework." },
    { code: "SS", name: "Start-to-Start", Icon: GitBranch, example: "Excavation and rebar cutting can start together.", note: "Enables overlap to accelerate delivery; watch resource loading." },
    { code: "FF", name: "Finish-to-Finish", Icon: GitBranch, example: "Electrical and plumbing finishing together.", note: "Synchronizes completions for area handover dates." },
    { code: "SF", name: "Start-to-Finish (rare)", Icon: GitBranch, example: "Backup generator commissioning depends on main supply start.", note: "Used sparingly; model carefully." },
  ];

  const schedulingCtrl = [
    { Icon: ClipboardList, title: "Leads, Lags & Examples", desc: "Leads/lags modify activity overlap.\nExample: Plastering (SS + 2 days) with Masonry → plastering starts 2 days after masonry begins." },
    { Icon: ClipboardCheck, title: "Integration & Control", list: ["Integrate schedule with procurement, cost & resources", "Update progress → drive reporting & corrective actions", "Variance analysis to identify deviations", "Tools: MS Project, Primavera P6, Excel dashboards"] },
  ];

  // ========================= 12) NEW — Hindrances in Construction Projects (from user) =========================
  const hindranceCards = [
    { Icon: AlertTriangle, title: "Technical", desc: "Examples: design errors, scope change, site mismatch\nImpact: delays, rework" },
    { Icon: Coins, title: "Financial", desc: "Examples: late payment, cost overrun\nImpact: cash flow issues" },
    { Icon: Landmark, title: "Administrative", desc: "Examples: delayed approvals, poor coordination\nImpact: work stoppage" },
    { Icon: Map, title: "Environmental", desc: "Examples: rain, floods, extreme weather\nImpact: site downtime" },
    { Icon: History, title: "Legal / Land", desc: "Examples: court cases, encroachments\nImpact: halted progress" },
    { Icon: Users2, title: "Manpower / Labor", desc: "Examples: shortage, strikes\nImpact: reduced productivity" },
    { Icon: Package, title: "Material Supply", desc: "Examples: shortage, poor quality\nImpact: delays, quality compromise" },
  ];

  // ========================= 13) NEW — PMC & Contractor Work Stages (from user) =========================
  const pmcContractorFlowCards = [
    { Icon: Workflow, title: "Pre-Construction", desc: "PMC: design review, tender evaluation, mobilization check\nContractor: resource mobilization, site setup" },
    { Icon: Construction, title: "Construction", desc: "PMC: supervision, progress reporting, quality check\nContractor: execution, daily reporting, safety compliance" },
    { Icon: FileCheck2, title: "Billing Stage", desc: "PMC: certify measurements, approve RA bills\nContractor: prepare MB, submit bills" },
    { Icon: CheckCircle2, title: "Testing & Handover", desc: "PMC: approve testing, monitor DLP\nContractor: perform testing, submit as-built drawings" },
  ];

  // ========================= 14) NEW — Construction Management Tools & Documents (from user) =========================
  const toolsDocsCards = [
    { Icon: ClipboardList, title: "Planning", list: ["Project charter", "Work Breakdown Structure (WBS)", "Gantt chart"] },
    { Icon: ShieldCheck, title: "Quality", list: ["QA/QC plan", "Inspection reports"] },
    { Icon: Coins, title: "Cost Control", list: ["BOQ", "Estimates", "RA bills", "Budget tracking"] },
    { Icon: AlertTriangle, title: "Safety", list: ["Safety manual", "Tool Box Talks", "PPE records"] },
    { Icon: MessageSquare, title: "Communication", list: ["Progress reports", "MOMs (Minutes of Meetings)"] },
  ];

  // ========================= 15) NEW — Practical Example (Water Supply Project) (from user) =========================
  const waterExampleCards = [
    { Icon: Search, title: "Pre-Construction", list: ["DPR → Tender → Contractor Appointment"] },
    { Icon: Workflow, title: "Construction", list: ["Excavation → Pipe Laying → Jointing → Testing"] },
    { Icon: CheckCircle2, title: "Post-Construction", list: ["Commissioning → Handover → DLP"] },
  ];

  // ========================= Build sections (WITH NEW INSERTS) =========================
  const sections = useMemo(
    () => [
      { id: "moms", title: "Minutes of Meeting (MOMs)", subtitle: "Effective documentation for productive meetings", cards: momCards },
      { id: "comm-etiquette", title: "Communication Etiquettes", subtitle: "AICCC — professional communication framework", cards: commCards },

      // NEW inserts based on user's data
      { id: "lifecycle-overview", title: "Construction Project Lifecycle — Overview", subtitle: "Pre → Execution → Post with control gates", cards: lifecycleCards },
      { id: "roles", title: "Key Roles & Responsibilities", subtitle: "PMC, Contractor & other stakeholders", cards: rolesCards },
      { id: "4ms", title: "The 4Ms of Construction Resources", subtitle: "Manpower · Machinery · Materials · Money", cards: fourMCards },
      { id: "stages-phases", title: "Stages & Phases of Construction", subtitle: "Planning, Design, Procurement, Construction, Commissioning, Closure", cards: stagePhaseCards },

      { id: "govt-life-cycle", title: "Life Cycle of a Typical Government Project", subtitle: "From concept to commissioning (AP context)", cards: govLifeCards },
      { id: "roads-sequence", title: "Construction Sequence of Roads", subtitle: "As per IRC & MoRTH guidelines", cards: roadCards },
      { id: "highrise-sequence", title: "Construction Sequence of High-Rise Buildings", subtitle: "Office & residential projects — training module", cards: highriseCards },
      { id: "cpm-overview", title: "Overview of Construction Project Management", subtitle: "Comprehensive academic perspective", cards: cpmCards },
      {
        id: "project-scheduling",
        title: "Project Scheduling",
        subtitle: "WBS, L1–L3, relationships, integration & control",
        cards: [
          ...schedulingIntro,
          ...schedulingRels.map((r) => ({ Icon: r.Icon, title: `${r.code} — ${r.name}`, desc: `${r.note}\nExample: ${r.example}` })),
          ...schedulingCtrl,
        ],
      },

      // NEW hindrances + PMC/Contractor flow + tools + example
      { id: "hindrances", title: "Hindrances in Construction Projects", subtitle: "Typical blockers, their examples and impact", cards: hindranceCards },
      { id: "pmc-contractor-flow", title: "PMC & Contractor — Work Stages", subtitle: "Who does what at each stage", cards: pmcContractorFlowCards },
      { id: "tools-docs", title: "Construction Management Tools & Documents", subtitle: "Planning · Quality · Cost · Safety · Communication", cards: toolsDocsCards },
      { id: "water-example", title: "Practical Example — Water Supply Project", subtitle: "End-to-end snapshot", cards: waterExampleCards },
    ],
    [momCards, commCards, lifecycleCards, rolesCards, fourMCards, stagePhaseCards, govLifeCards, roadCards, highriseCards, cpmCards, schedulingIntro, schedulingRels, schedulingCtrl, hindranceCards, pmcContractorFlowCards, toolsDocsCards, waterExampleCards]
  );

  // Nav indicator
  const [active, setActive] = useState(0);
  const total = sections.length;
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
              <br /> Perfect for AICCC coordinators, site engineers, and project managers.
            </p>
          </motion.div>

          {/* Tab Nav */}
          <nav className="mb-6 sticky top-20 z-30" role="tablist" aria-label="Sections">
            <div className="relative rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-black shadow-[0_0_20px_rgba(0,255,255,.35),0_0_40px_rgba(59,130,246,.25)] ring-1 ring-cyan-300/30 backdrop-blur overflow-x-auto">
              <motion.div
                className="absolute top-0 bottom-0 rounded-xl pointer-events-none"
                animate={{ left: indicator.left, width: indicator.width }}
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
                style={{
                  background: "linear-gradient(90deg, rgba(255,255,255,.95) 0%, rgba(0,255,255,.35) 100%)",
                  boxShadow: "0 0 18px rgba(0,255,255,.6), 0 0 36px rgba(59,130,246,.35)",
                }}
              />
              <div className="flex items-center gap-2 px-3 py-2">
                {sections.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    role="tab"
                    aria-selected={i === active}
                    ref={(el) => (tabRefs.current[i] = el as HTMLButtonElement)}
                    className={`relative z-10 whitespace-nowrap px-4 py-2 rounded-xl text-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 ${
                      i === active ? "text-slate-900 bg-white/80" : "text-cyan-50/90 hover:text-white"
                    }`}
                  >
                    {i + 1}. {s.title}
                  </button>
                ))}
              </div>
            </div>
          </nav>
{/* Scrollable grid wrapper for big content */}
<div className="relative">
  <div className="scroll-container grid md:grid-cols-2 lg:grid-cols-3 gap-6 pr-2 max-h-[72vh] overflow-y-auto">
    {sections[active].cards.map((c: any, idx: number) => (
      <LearnCard key={idx} Icon={c.Icon} title={c.title} desc={c.desc} list={c.list} />
    ))}
  </div>
</div>

{/* Pager */}
<div className="flex items-center justify-between gap-3 mt-6">
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
        </div>
      </section>
    </Layout>
  );
}