export default function Testimonials() {
  const testimonials = [
    {
      quote: "Merge Steel's Tekla models are the cleanest we've handed to fabrication in a decade.",
      author: "M. Halverson",
      title: "VP Engineering, Northbridge Steel"
    },
    {
      quote: "Clash detection caught issues other firms missed — saved weeks on the high-rise.",
      author: "S. Patel",
      title: "Project Director, Vertex EPC"
    },
    {
      quote: "Fabrication release is genuinely turnkey. Drawings land, the shop runs.",
      author: "R. Okafor",
      title: "Operations Lead, Ironcast Fab"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-[100px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-primary/5 blur-[100px]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
          <div className="section-eyebrow">TESTIMONIALS</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Trusted by <span className="text-gradient">engineering leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="neon-border relative flex flex-col justify-between rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-md animate-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div>
                <svg className="h-8 w-8 text-primary/30 mb-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-navy/80 text-[15px] leading-relaxed relative z-10 font-medium">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="pt-6 mt-8 border-t border-border">
                <p className="font-bold text-navy">{testimonial.author}</p>
                <p className="text-sm text-navy/60 mt-0.5">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
