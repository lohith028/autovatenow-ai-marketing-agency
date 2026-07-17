import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

// Simple SVG Icons for Socials
const Linkedin = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Instagram = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Youtube = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
const Facebook = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;

const services = [
  { name: "Advanced SEO & GEO", href: "/services/advanced-seo-geo" },
  { name: "Personal Branding", href: "/services/personal-branding" },
  { name: "Performance Marketing", href: "/services/performance-marketing" },
  { name: "Healthcare Website Design", href: "/services/healthcare-website-design" },
  { name: "Automations & AI Agents", href: "/services/automations-ai-agents" },
];

const specialties = [
  { name: "Dermatology & Skin Clinics", href: "/who-we-help/dermatology-skin-clinics" },
  { name: "Dental Clinics", href: "/who-we-help/dental-clinics" },
  { name: "General Surgeons", href: "/who-we-help/general-surgeons" },
];

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/book-a-growth-session" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      {/* Secondary CTA Band */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-blue-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-xl font-bold text-white">
              Ready to grow your healthcare practice?
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              Get a free growth consultation — no commitment required.
            </p>
          </div>
          <Link
            href="/book-a-growth-session"
            id="footer-cta-btn"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-cta hover:-translate-y-0.5 text-center w-full sm:w-auto"
          >
            Get a Free Growth Consultation <ArrowRight size={16} className="flex-shrink-0" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9 bg-white/10 rounded-lg p-1">
                <Image src="/images/logo.png" alt="AutovateNow" fill className="object-contain" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Autovate<span className="text-brand-gold">Now</span>
              </span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              The full-stack growth partner for modern healthcare practices — SEO, branding, ads, websites, and automation, under one roof.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/autovatenow/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/itslohith.ai/", label: "Instagram" },
                { icon: Youtube, href: "https://youtube.com/@autovatenow?si=x8cRPyplZfFdF3nU", label: "YouTube" },
                { icon: Facebook, href: "https://www.instagram.com/itslohith.ai/", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Who We Help + Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
              Who We Help
            </h3>
            <ul className="space-y-2.5 mb-6">
              {specialties.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/who-we-help"
                  className="text-sm text-brand-gold hover:text-brand-gold-dark transition-colors"
                >
                  View All Specialties →
                </Link>
              </li>
            </ul>

            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-blue-400 mb-0.5">Phone</div>
                  <a href="tel:+919885407925" className="text-sm text-blue-200 hover:text-white transition-colors">
                    +91 9885407925
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-blue-400 mb-0.5">Email</div>
                  <a href="mailto:lohith.l@autovatenow.com" className="text-sm text-blue-200 hover:text-white transition-colors">
                    lohith.l@autovatenow.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-blue-400 mb-0.5">Location</div>
                  <span className="text-sm text-blue-200 block">E-city, Bengaluru, Karnataka, India</span>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-xs text-blue-300 font-medium mb-1">Business Hours</div>
              <div className="text-sm text-blue-200">Mon – Sat: 9:00 AM – 7:00 PM IST</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-400">
            © {new Date().getFullYear()} AutovateNow. All rights reserved. Built for healthcare growth.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-blue-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-blue-700">·</span>
            <Link href="/book-a-growth-session" className="text-xs text-blue-400 hover:text-white transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
