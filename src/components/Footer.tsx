import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 md:grid md:grid-cols-12 md:gap-10 md:py-14 animate-in">
        <div className="md:col-span-4">
          <div className="flex items-start gap-3">
            <img 
              src="/steelwave-logo.png" 
              alt="Steel Wave" 
              width={520} 
              height={120} 
              className="h-20 w-auto max-w-[420px] object-contain object-left sm:h-24 sm:max-w-[500px] lg:h-[120px] lg:max-w-[560px]" 
              loading="lazy" 
              decoding="async"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy/60">
            Authorized Tekla training and structural steel detailing — placement-focused programs and fabrication-grade deliverables from our team in Trichy.
          </p>
        </div>
        <div className="mt-10 md:col-span-3 md:mt-0">
          <div className="text-xs font-semibold uppercase tracking-wide text-navy/45">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-navy/70">
            <li><Link href="#about" className="transition-colors hover:text-navy">About</Link></li>
            <li><Link href="#services" className="transition-colors hover:text-navy">Services</Link></li>
            <li><Link href="#workflow" className="transition-colors hover:text-navy">Workflow</Link></li>
            <li><Link href="#contact" className="transition-colors hover:text-navy">Contact</Link></li>
          </ul>
        </div>
        <div className="mt-10 md:col-span-5 md:mt-0">
          <div className="text-xs font-semibold uppercase tracking-wide text-navy/45">Steel Wave — Trichy</div>
          <ul className="mt-3 space-y-3 text-sm text-navy/75">
            <li><span className="text-navy/50">Phone:</span> <a href="tel:+918667299312" className="font-medium text-navy hover:text-primary">+91 86672 99312</a></li>
            <li><span className="text-navy/50">Email:</span> <a href="mailto:steelwavetrichy@gmail.com" className="font-medium text-navy hover:text-primary">steelwavetrichy@gmail.com</a></li>
            <li className="leading-relaxed"><span className="text-navy/50">Address:</span> No. 302, Gowri Krishna Residence, D-1, 7th Cross East, Thillai Nagar, Trichy 620018, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-navy/45">
        © 2026 Steel Wave. Tekla training & structural detailing. All rights reserved.
      </div>
    </footer>
  );
}
