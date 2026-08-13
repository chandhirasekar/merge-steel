export default function Workflow() {
  return (
    <section id="workflow" className="relative overflow-hidden bg-navy py-24 text-white md:py-28" style={{ background: "linear-gradient(180deg, oklch(0.16 0.05 255) 0%, oklch(0.14 0.045 255) 100%)" }}>
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.14]"></div>
      <div className="absolute inset-x-0 top-0 h-[2px] overflow-hidden opacity-70">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent" style={{ width: "40%" }}></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center md:mb-14 animate-in">
          <div className="section-eyebrow mb-3 text-white/50">Workflow</div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">The Steel Wave <span className="text-gradient">pipeline</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
            Seven coordinated stages — from clarity on inputs to verified release for fabrication — with traceable checks and approvals at each step.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 top-[2.1rem] hidden h-px overflow-hidden lg:block">
            <div className="h-full bg-gradient-to-r from-transparent via-primary/80 to-transparent shadow-[0_0_20px_oklch(0.55_0.24_264_/_0.5)]" style={{ transformOrigin: "left center", transform: "scaleX(1)" }}></div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-7 lg:gap-5">
            {[
              { title: "Structural input review", desc: "Review structural sets, scope, and documents so the job starts with clarity — fewer gaps, less rework." },
              { title: "Job study & RFI", desc: "Deep job study and timely RFIs so missing information is addressed before modeling and fabrication." },
              { title: "Tekla modeling", desc: "Build an accurate 3D model as the single source of truth for detailing, coordination, and deliverables." },
              { title: "Detailing & drawings", desc: "Develop shop and erection outputs — assemblies, parts, BOM, NC/DXF — aligned with fabrication and field needs." },
              { title: "Checking (QA)", desc: "Model, connection, clash, and BOM checks so packages are complete and compliant before submission." },
              { title: "Submission & approval", desc: "Track submissions, respond to comments, and manage revisions until consultants approve for release." },
              { title: "Fabrication release & verification", desc: "Issue verified drawings to the shop and complete final checks for smooth fabrication and erection." }
            ].map((step, idx) => (
              <div key={idx} className="text-center animate-in">
                <div className="relative mx-auto mb-4 h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]">
                  <div className="absolute inset-0 rounded-full border border-primary/40"></div>
                  <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-white/[0.08] font-display text-sm font-bold text-white shadow-[0_0_30px_-5px_oklch(0.55_0.24_264_/_0.4)] backdrop-blur-sm md:text-base">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="font-display text-sm font-semibold leading-snug md:text-base">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/45">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
