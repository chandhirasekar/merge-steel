import { 
  ClipboardList, 
  FileQuestion, 
  Layers, 
  GitBranch, 
  FileText, 
  Building2, 
  ShieldCheck, 
  ScanSearch, 
  ListChecks, 
  Send, 
  Factory, 
  BadgeCheck 
} from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Structural input review",
    description: "Gain a complete picture before execution. We review structural sets, scope sheets, and project requirements for accuracy from day one.",
  },
  {
    icon: FileQuestion,
    title: "Job study & RFI preparation",
    description: "Avoid delays by addressing issues early. We conduct a thorough job study to surface missing or unclear information and raise RFIs.",
  },
  {
    icon: Layers,
    title: "Tekla 3D modeling",
    description: "A precise Tekla model is the foundation of every project. We build each element to match engineering intent in a coordinated environment.",
  },
  {
    icon: GitBranch,
    title: "Detailing workflow",
    description: "We convert approved design intent into a standardized detailing pipeline — turning concepts into fabrication-ready outputs.",
  },
  {
    icon: FileText,
    title: "Shop drawings",
    description: "Fabrication-grade drawings verified against design — including assembly and part drawings, bills of materials, NC files, and DXF outputs.",
  },
  {
    icon: Building2,
    title: "Erection drawings",
    description: "Field packages that show how the steel goes together on site — marking plans, assembly sequencing, and bolt locations.",
  },
  {
    icon: ShieldCheck,
    title: "Quality assurance (checking)",
    description: "Multi-stage checking so drawings are accurate and code-aligned before fabrication: model and GA review, connection checks.",
  },
  {
    icon: ScanSearch,
    title: "Clash detection",
    description: "Structured coordination checks to minimize clashes between structural steel and adjacent systems — resolving issues in the model.",
  },
  {
    icon: ListChecks,
    title: "BOM verification",
    description: "Auditable BOMs matched to the model — validating quantities, member marks, weights, and material grades so procurement stays aligned.",
  },
  {
    icon: Send,
    title: "Drawing submission & approval",
    description: "We manage submission and approval end to end: packages prepared to project standards, active tracking of review status.",
  },
  {
    icon: Factory,
    title: "Fabrication release",
    description: "Only verified, coordinated drawings are released for fabrication — clear packages for the shop, fewer surprises on site.",
  },
  {
    icon: BadgeCheck,
    title: "Final drawing verification",
    description: "Last-line verification before issue — dimensions, connections, and materials checked; design vs. detailing coordination confirmed.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-24 md:py-28">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-primary/[0.08] blur-3xl"></div>
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent/12 blur-3xl"></div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14 animate-in">
          <div className="section-eyebrow mb-3">Services</div>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-5xl">
            A full <span className="text-gradient">detailing stack</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 md:text-lg">
            From structural review and Tekla modeling through checking, approvals, and fabrication release — one connected process for students, fabricators, and project teams.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const num = (i + 1).toString().padStart(2, "0");
            return (
              <div key={i} className="group neon-border relative flex flex-col overflow-hidden rounded-xl bg-card p-5 transition-shadow duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 touch-manipulation">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="relative flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs tabular-nums text-navy/35">{num}</span>
                </div>
                <h3 className="relative mt-4 font-display text-base font-semibold leading-snug text-navy">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-navy/65">
                  {service.description}
                </p>
                <div className="relative mt-4 h-px w-0 bg-gradient-to-r from-primary to-accent opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-80"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
