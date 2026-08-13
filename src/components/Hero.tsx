import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden from-blue-50 to-white bg-gradient-to-br">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute -left-[20%] top-[10%] h-[min(80vw,520px)] w-[min(80vw,520px)] rounded-full bg-primary/20 blur-[100px] animate-orb-drift"></div>
      <div className="pointer-events-none absolute -right-[15%] bottom-[5%] h-[min(70vw,480px)] w-[min(70vw,480px)] rounded-full bg-accent/25 blur-[90px] animate-orb-drift-reverse"></div>
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl animate-blink-soft"></div>
      
      {/* Grids and scans */}
      <div className="absolute inset-0 grid-bg opacity-55"></div>
      
      {/* The 3D graphic block */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [perspective:1400px] opacity-[0.32] md:opacity-[0.38]">
        <div className="relative h-[min(640px,92vw)] w-[min(640px,92vw)] max-h-[92vw] max-w-[92vw]" style={{ transformStyle: "preserve-3d" }}>
          {/* SVGs from the DOM */}
          <div className="absolute inset-0 [transform-style:preserve-3d] animate-spin-slow">
            <svg viewBox="0 0 600 600" className="h-full w-full">
              <defs>
                <linearGradient id="beam" x1="0" x2="1">
                  <stop offset="0" stopColor="#0A4DFF" stopOpacity="0.9"></stop>
                  <stop offset="1" stopColor="#7DD3FC" stopOpacity="0.6"></stop>
                </linearGradient>
                <filter id="glow"><feGaussianBlur stdDeviation="3"></feGaussianBlur></filter>
              </defs>
              <g stroke="url(#beam)" strokeWidth="1.5" fill="none" filter="url(#glow)">
                <polygon points="300,80 480,180 480,420 300,520 120,420 120,180"></polygon>
                <polygon points="300,140 430,210 430,390 300,460 170,390 170,210" opacity="0.6"></polygon>
                <polygon points="300,200 380,240 380,360 300,400 220,360 220,240" opacity="0.4"></polygon>
                <line x1="300" y1="80" x2="300" y2="520"></line>
                <line x1="120" y1="180" x2="480" y2="420"></line>
                <line x1="480" y1="180" x2="120" y2="420"></line>
                <line x1="120" y1="300" x2="480" y2="300"></line>
                <line x1="170" y1="210" x2="170" y2="390"></line>
                <line x1="430" y1="210" x2="430" y2="390"></line>
              </g>
              <g fill="#0A4DFF">
                <circle cx="300" cy="80" r="4"></circle><circle cx="480" cy="180" r="4"></circle><circle cx="480" cy="420" r="4"></circle><circle cx="300" cy="520" r="4"></circle><circle cx="120" cy="420" r="4"></circle><circle cx="120" cy="180" r="4"></circle><circle cx="300" cy="300" r="4"></circle><circle cx="170" cy="210" r="4"></circle><circle cx="430" cy="210" r="4"></circle><circle cx="170" cy="390" r="4"></circle><circle cx="430" cy="390" r="4"></circle>
              </g>
            </svg>
          </div>
          <div className="absolute inset-[10%] sm:inset-12 animate-spin-slow [animation-direction:reverse] [animation-duration:45s]">
            <svg viewBox="0 0 400 400" className="h-full w-full opacity-70">
              <g stroke="#6EB6FF" strokeWidth="1" fill="none">
                <circle cx="200" cy="200" r="180" strokeDasharray="4 8"></circle>
                <circle cx="200" cy="200" r="140" strokeDasharray="2 6"></circle>
                <polygon points="200,40 360,140 360,260 200,360 40,260 40,140"></polygon>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pt-32 pb-24 text-center sm:pt-36 lg:pt-44 lg:max-w-5xl animate-in">
        <div className="glass-blue inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm">
          <span className="h-2 w-2 rounded-full bg-primary"></span>
          Structural detailing — Trichy
        </div>
        <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-navy md:text-6xl lg:text-[4.25rem]">
          <span className="text-navy">Steel Wave.</span> Engineering precision through{" "}
          <span className="text-gradient relative inline-block">
            advanced steel detailing
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left rounded-full bg-gradient-to-r from-primary via-accent to-primary/30" style={{ transform: "scaleX(1)" }}></span>
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy/65 md:text-lg">
          Structural steel detailing services — delivering fabrication-ready drawings with strict rigor on every assignment.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="#services" className="magnetic-btn inline-flex touch-manipulation items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold">
            View capabilities
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
          </Link>
          <Link href="#workflow" className="inline-flex touch-manipulation items-center rounded-md border border-border bg-background/90 px-7 py-3.5 text-sm font-semibold text-navy shadow-sm backdrop-blur-sm transition-colors active:bg-secondary hover:bg-secondary/50">
            Our process
          </Link>
        </div>
      </div>
    </section>
  );
}
