import { type Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Shield, Activity, Stethoscope, Heart, Brain } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Healthcare Marketing by Specialty — Who We Help",
  description: "AutovateNow specialises in digital marketing for healthcare clinics. We serve dermatology, dental, surgical, and other specialty practices across India.",
  alternates: { canonical: "https://autovaternow.com/who-we-help" },
};

const specialties = [
  {
    name: "Dermatology & Skin Clinics",
    href: "/who-we-help/dermatology-skin-clinics",
    icon: <Star size={24} />,
    desc: "Skin, hair, cosmetics, trichology, and cosmetology practices. Content-first authority building with proven case study results.",
    highlight: "Case Study: 2.1M+ Instagram views for Aura Cutisurg Clinic",
  },
  {
    name: "Dental Clinics",
    href: "/who-we-help/dental-clinics",
    icon: <Shield size={24} />,
    desc: "General dentistry, orthodontics, implants, and cosmetic dentistry. Local SEO and targeted ads to fill your appointment book.",
    highlight: "",
  },
  {
    name: "General Surgeons",
    href: "/who-we-help/general-surgeons",
    icon: <Activity size={24} />,
    desc: "Laparoscopic, bariatric, and general surgery practices. Build referral authority and attract high-intent local patients.",
    highlight: "",
  },
];

const comingSoon = [
  { name: "Orthopaedic Clinics", icon: <Stethoscope size={20} /> },
  { name: "Cardiology Practices", icon: <Heart size={20} /> },
  { name: "Neurology Clinics", icon: <Brain size={20} /> },
  { name: "Gynaecology Practices", icon: <Activity size={20} /> },
  { name: "Ophthalmology Clinics", icon: <Star size={20} /> },
  { name: "Multi-Specialty Hospitals", icon: <Shield size={20} /> },
];

export default function WhoWeHelpPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-mid pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6">
            Healthcare practices we help grow
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
            We work exclusively with healthcare professionals. Our strategies are built around the specific patient journey, regulatory context, and competitive landscape of each specialty.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Current Specialties" title="Specialties we serve today" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {specialties.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white rounded-2xl border border-border p-6 hover:border-brand-blue hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                  <div className="w-14 h-14 rounded-2xl mb-5 transition-all duration-300 relative bg-gradient-to-br from-blue-400 via-brand-blue to-indigo-600 shadow-lg shadow-brand-blue/30 p-[1px]">
                    <div className="w-full h-full bg-gradient-to-br from-white/40 to-white/5 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/50 text-white shadow-[inset_0_2px_10px_rgba(255,255,255,0.7)] group-hover:from-white/50 transition-colors">
                      <span className="drop-shadow-md">
                        {s.icon}
                      </span>
                    </div>
                  </div>
                <h2 className="font-heading font-bold text-lg text-text-primary group-hover:text-brand-blue transition-colors mb-2">{s.name}</h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{s.desc}</p>
                {s.highlight && (
                  <div className="text-xs font-semibold text-brand-gold bg-brand-gold-light px-3 py-1.5 rounded-full inline-block mb-4">
                    {s.highlight}
                  </div>
                )}
                <div className="flex items-center gap-1.5 text-sm text-brand-blue font-semibold group-hover:gap-3 transition-all">
                  View specialty <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-surface-gray rounded-2xl border border-border p-8">
            <h3 className="font-heading font-bold text-lg text-text-primary mb-2">More specialties coming soon</h3>
            <p className="text-sm text-text-secondary mb-6">We're expanding our specialty-specific programmes. If your practice type isn't listed, get in touch — we likely have relevant experience and can help.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {comingSoon.map((s) => (
                <div key={s.name} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-border text-sm text-text-secondary">
                  <span className="text-text-muted">{s.icon}</span> {s.name}
                </div>
              ))}
            </div>
            <CTAButton href="/book-a-growth-session" variant="blue" id="who-we-help-cta">
              Discuss your specialty with us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
