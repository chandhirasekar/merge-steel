export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-28" style={{ background: "linear-gradient(180deg, oklch(0.97 0.012 248) 0%, oklch(1 0 0) 100%)" }}>
      <div className="absolute inset-0 grid-bg opacity-35"></div>
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[min(90vw,52rem)] -translate-x-1/2 rounded-full bg-primary/[0.1] blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-accent/15 blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div>
            <div className="mb-10 text-left animate-in">
              <div className="section-eyebrow mb-3">Contact</div>
              <h2 className="text-3xl font-bold tracking-tight text-navy md:text-5xl">Start a <span className="text-gradient">conversation</span></h2>
              <p className="mt-4 text-navy/65 text-lg">Call, email, or visit our Trichy office. We reply within one business day for project inquiries.</p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card px-5 py-5 shadow-sm animate-in">
                <div className="text-xs font-semibold uppercase tracking-wide text-navy/45">Phone</div>
                <a href="tel:+918667299312" className="mt-2 block font-display text-base font-semibold text-navy underline-offset-4 hover:text-primary hover:underline">+91 86672 99312</a>
              </div>
              <div className="rounded-lg border border-border bg-card px-5 py-5 shadow-sm animate-in" style={{ animationDelay: "100ms" }}>
                <div className="text-xs font-semibold uppercase tracking-wide text-navy/45">Email</div>
                <a href="mailto:mergesteeltrichy@gmail.com" className="mt-2 block font-display text-base font-semibold text-navy underline-offset-4 hover:text-primary hover:underline">mergesteeltrichy@gmail.com</a>
              </div>
              <div className="rounded-lg border border-border bg-card px-5 py-5 shadow-sm sm:col-span-2 animate-in" style={{ animationDelay: "200ms" }}>
                <div className="text-xs font-semibold uppercase tracking-wide text-navy/45">Address</div>
                <div className="mt-2 font-display text-base font-semibold leading-snug text-navy">No. 302, Gowri Krishna Residence, D-1, 7th Cross East, Thillai Nagar, Trichy 620018</div>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="neon-border rounded-2xl bg-card p-6 shadow-xl md:p-8 animate-in" style={{ animationDelay: "300ms" }}>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-navy">Full name</span>
                  <input type="text" required className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-navy outline-none ring-offset-background transition-shadow placeholder:text-navy/40 focus:border-primary focus:ring-2 focus:ring-primary/20" name="name" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-navy">Work email</span>
                  <input type="email" required className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-navy outline-none ring-offset-background transition-shadow placeholder:text-navy/40 focus:border-primary focus:ring-2 focus:ring-primary/20" name="email" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-navy">Company</span>
                  <input type="text" required className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-navy outline-none ring-offset-background transition-shadow placeholder:text-navy/40 focus:border-primary focus:ring-2 focus:ring-primary/20" name="company" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-navy">Project type</span>
                  <input type="text" required className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-navy outline-none ring-offset-background transition-shadow placeholder:text-navy/40 focus:border-primary focus:ring-2 focus:ring-primary/20" name="type" />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-navy">Project details</span>
                <textarea rows={5} required className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-navy outline-none ring-offset-background transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20"></textarea>
              </label>
              
              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-navy/55">Encrypted in transit. NDAs available on request.</p>
                <button type="submit" className="magnetic-btn rounded-lg px-8 py-3 text-sm font-semibold sm:shrink-0" tabIndex={0}>Submit inquiry</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
