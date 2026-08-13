"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Workflow", href: "#workflow" },
    { name: "3D Showcase", href: "#showcase" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
        isScrolled ? "top-6 px-4 sm:px-6" : "top-0 px-0"
      }`}
    >
      <div
        className={`w-full transition-all duration-500 flex items-center justify-between ${
          isScrolled
            ? "max-w-6xl rounded-full px-6 py-3 bg-white/90 backdrop-blur-xl shadow-lg border border-border"
            : "max-w-7xl rounded-none px-4 sm:px-6 py-5 bg-transparent border-transparent"
        }`}
      >
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link
            href="#top"
            className="flex min-w-0 shrink items-center outline-none ring-primary/30 focus-visible:ring-2 focus-visible:ring-offset-2 group"
          >
            {/* We will use a regular img tag to avoid Next.js Image optimization configuration issues with external URLs or missing local assets for now */}
            <img
              src="/steelwave-logo.png"
              alt="Steel Wave"
              className="h-12 w-auto md:h-16 object-contain object-left group-hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-8 px-8 py-2 transition-all duration-500 ${
            isScrolled ? "bg-transparent" : "bg-transparent"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-navy/70 hover:text-navy transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center gap-2">
          <Link
            href="#contact"
            className="magnetic-btn hidden rounded-full px-6 py-2.5 text-sm font-semibold md:inline-flex"
          >
            Request a quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden text-navy shrink-0 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full mt-4 left-4 right-4 bg-white border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-xl z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-navy py-2 border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="magnetic-btn w-full mt-4 rounded-xl px-5 py-3 text-center text-sm font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request a quote
          </Link>
        </div>
      )}
    </header>
  );
}
