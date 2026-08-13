import Image from "next/image";

export default function Showcase() {
  const projects = [
    {
      title: "High-Rise Frames",
      description: "Multi-storey moment frames detailed to AISC.",
      // Using placeholders since we don't have the real images
      image: "https://images.unsplash.com/photo-1541888081-3e44917a2ce1?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Steel Bridges",
      description: "Plate girders and trusses, weld-mapped.",
      image: "https://images.unsplash.com/photo-1473176766440-6218e8156db3?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "BIM Coordination",
      description: "Federated MEP-structure clash workflows.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Industrial Plants",
      description: "Pipe-racks, platforms, equipment supports.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="showcase" className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
          <div className="section-eyebrow">3D SHOWCASE</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Modeling that <span className="text-gradient">performs</span>
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Representative project types we detail—from high-rise moment frames to industrial facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl border border-border bg-[#f1f3f6] overflow-hidden transition-all hover:shadow-lg animate-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-[16/7] overflow-hidden relative">
                {/* Fallback layout for missing images if next/image isn't set up for remote domains */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-navy">{project.title}</h3>
                <p className="mt-2 text-navy/60">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
