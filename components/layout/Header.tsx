"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import clsx from "clsx";

const services = [
  {
    name: "Advanced SEO & GEO",
    href: "/services/advanced-seo-geo",
    desc: "Rank on Google and get cited by AI search engines",
    icon: "🔍",
  },
  {
    name: "Personal Branding",
    href: "/services/personal-branding",
    desc: "Build doctor authority through content creation",
    icon: "🎯",
  },
  {
    name: "Performance Marketing",
    href: "/services/performance-marketing",
    desc: "Meta & Google Ads that convert to appointments",
    icon: "📈",
  },
  {
    name: "Healthcare Website Design",
    href: "/services/healthcare-website-design",
    desc: "Fast, mobile-first sites that build trust",
    icon: "🌐",
  },
  {
    name: "Automations & AI Agents",
    href: "/services/automations-ai-agents",
    desc: "WhatsApp, voice agents & lead nurturing workflows",
    icon: "🤖",
  },
];

const specialties = [
  {
    name: "Dermatology & Skin Clinics",
    href: "/who-we-help/dermatology-skin-clinics",
    desc: "Skin, hair, cosmetics & trichology practices",
  },
  {
    name: "Dental Clinics",
    href: "/who-we-help/dental-clinics",
    desc: "General dentistry, orthodontics & implants",
  },
  {
    name: "General Surgeons",
    href: "/who-we-help/general-surgeons",
    desc: "Laparoscopic, bariatric & general surgery",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const whoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (whoRef.current && !whoRef.current.contains(e.target as Node)) {
        setWhoOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_#E2E8F0]"
          : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="AutovateNow Home">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="AutovateNow logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading font-800 text-xl text-text-primary tracking-tight">
              Autovate<span className="text-brand-blue">Now</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                id="services-menu-btn"
                onClick={() => { setServicesOpen(!servicesOpen); setWhoOpen(false); }}
                className={clsx(
                  "flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  servicesOpen
                    ? "text-brand-blue bg-brand-blue-light"
                    : "text-text-secondary hover:text-brand-blue hover:bg-brand-blue-light"
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown size={15} className={clsx("transition-transform duration-200", servicesOpen && "rotate-180")} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-white rounded-2xl shadow-float border border-border p-4 animate-fade-in">
                  <div className="grid grid-cols-1 gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-gray transition-colors duration-150 group"
                      >
                        <span className="text-xl mt-0.5 flex-shrink-0">{s.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-text-primary group-hover:text-brand-blue transition-colors">{s.name}</div>
                          <div className="text-xs text-text-muted mt-0.5">{s.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-2 text-sm text-brand-blue font-medium hover:gap-3 transition-all"
                    >
                      View all services <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Who We Help Dropdown */}
            <div ref={whoRef} className="relative">
              <button
                id="who-we-help-menu-btn"
                onClick={() => { setWhoOpen(!whoOpen); setServicesOpen(false); }}
                className={clsx(
                  "flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  whoOpen
                    ? "text-brand-blue bg-brand-blue-light"
                    : "text-text-secondary hover:text-brand-blue hover:bg-brand-blue-light"
                )}
                aria-expanded={whoOpen}
                aria-haspopup="true"
              >
                Who We Help
                <ChevronDown size={15} className={clsx("transition-transform duration-200", whoOpen && "rotate-180")} />
              </button>

              {whoOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-float border border-border p-4 animate-fade-in">
                  <div className="space-y-1">
                    {specialties.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setWhoOpen(false)}
                        className="block p-3 rounded-xl hover:bg-surface-gray transition-colors duration-150 group"
                      >
                        <div className="text-sm font-semibold text-text-primary group-hover:text-brand-blue transition-colors">{s.name}</div>
                        <div className="text-xs text-text-muted mt-0.5">{s.desc}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <Link
                      href="/who-we-help"
                      onClick={() => setWhoOpen(false)}
                      className="flex items-center gap-2 text-sm text-brand-blue font-medium hover:gap-3 transition-all"
                    >
                      View all specialties <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {[
              { name: "Case Studies", href: "/case-studies" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "About", href: "/about" },
              { name: "Blog", href: "/blog" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-brand-blue hover:bg-brand-blue-light transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/book-a-growth-session"
              id="header-cta-btn"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-cta hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a Growth Session
              <ArrowRight size={14} />
            </Link>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-brand-blue hover:bg-brand-blue-light transition-all"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in overflow-y-auto max-h-[calc(100vh-72px)]">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <div className="px-3 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider">Services</div>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-gray text-sm text-text-secondary hover:text-brand-blue transition-colors"
              >
                <span>{s.icon}</span> {s.name}
              </Link>
            ))}
            <div className="px-3 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider mt-2">Who We Help</div>
            {specialties.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg hover:bg-surface-gray text-sm text-text-secondary hover:text-brand-blue transition-colors"
              >
                {s.name}
              </Link>
            ))}
            <div className="border-t border-border pt-3 mt-3 space-y-1">
              {[
                { name: "Case Studies", href: "/case-studies" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-brand-blue hover:bg-brand-blue-light transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/book-a-growth-session"
              onClick={() => setMobileOpen(false)}
              id="mobile-cta-btn"
              className="block mt-3 w-full text-center px-5 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold rounded-xl transition-all"
            >
              Book a Growth Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
