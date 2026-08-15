export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[min(100vw,600px)] w-[min(100vw,600px)] -translate-y-1/2 translate-x-1/3 rounded-full bg-gradient-to-br from-primary/15 via-transparent to-accent/10 blur-3xl animate-orb-drift"></div>
      <div className="absolute inset-0 grid-bg opacity-35"></div>
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="animate-in">
          <div className="section-eyebrow mb-3">About us</div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy md:text-5xl">
            Merge Steel — <span className="text-gradient">Structural detailing</span> experts
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70 md:text-lg">
            Merge Steel was established in <strong className="font-semibold text-navy">2018</strong> to provide high-quality structural steel detailing services. We deliver precision and discipline to our detailing customers: well-defined processes, strict quality, and dependable schedules.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70 md:text-lg">
            Each assignment is managed by a dedicated team headed by a project manager, supported by checkers, modelers, editors, and detailers to ensure accuracy and timely delivery.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3 text-sm leading-relaxed text-navy/80 md:text-base">
              <span className="mt-2 h-1 w-4 shrink-0 rounded-full bg-primary" style={{ transformOrigin: "left center", transform: "scaleX(1)" }}></span>
              Structured detailing processes — every assignment is led by a project manager with checkers, modelers, editors, and detailers.
            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-navy/80 md:text-base">
              <span className="mt-2 h-1 w-4 shrink-0 rounded-full bg-primary" style={{ transformOrigin: "left center", transform: "scaleX(1)" }}></span>
              Strict quality gates, clear schedules, and traceable approvals from input review through fabrication release.
            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-navy/80 md:text-base">
              <span className="mt-2 h-1 w-4 shrink-0 rounded-full bg-primary" style={{ transformOrigin: "left center", transform: "scaleX(1)" }}></span>
              Advanced technology utilization for clash detection and seamless BIM coordination.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
