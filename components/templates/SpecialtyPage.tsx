import Link from "next/link";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeader from "@/components/ui/SectionHeader";

export type SpecialtyData = {
  slug: string;
  title: string;
  heroDesc: string;
  painPoints: string[];
  keyServices: { title: string; desc: string; href: string }[];
  faqs: { q: string; a: string }[];
  showAuraCallout?: boolean;
  stats?: { value: string; label: string }[];
};

export default function SpecialtyPage({ data }: { data: SpecialtyData }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-mid pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/who-we-help" className="hover:text-white transition-colors">Who We Help</Link>
            <ChevronRight size={14} />
            <span className="text-blue-100">{data.title}</span>
          </nav>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Healthcare Digital Marketing for {data.title}
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl">{data.heroDesc}</p>
          <CTAButton href="/book-a-growth-session" variant="gold" size="lg" id={`${data.slug}-hero-cta`}>
            Book a Free Growth Session
          </CTAButton>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Challenge" title={`What ${data.title} practices struggle with online`} align="left" />
          <div className="grid sm:grid-cols-2 gap-4">
            {data.painPoints.map((p, i) => (
              <div key={i} className="flex items-start gap-3 bg-surface-gray rounded-xl border border-border p-4">
                <div className="w-6 h-6 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs font-bold">✕</span>
                </div>
                <span className="text-sm text-text-secondary leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 lg:py-20 bg-surface-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Approach" title={`The services that matter most for ${data.title}`} align="left" />
          <div className="space-y-4">
            {data.keyServices.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="flex items-start gap-4 bg-white rounded-2xl border border-border p-6 hover:shadow-card-hover hover:border-brand-blue transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue-light flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-blue transition-colors">
                  <CheckCircle size={16} className="text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-base text-text-primary group-hover:text-brand-blue transition-colors mb-1.5">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
                <ArrowRight size={16} className="text-brand-blue mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      {data.stats && (
        <section className="py-12 bg-brand-blue-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6">
              {data.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-bold text-3xl text-brand-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-blue-200 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Aura Callout */}
      {data.showAuraCallout && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-brand-blue-dark to-brand-blue rounded-2xl p-8 text-white">
              <div className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3">Featured Case Study</div>
              <h3 className="font-heading font-bold text-2xl mb-3">
                Aura Cutisurg Clinic, Bangalore
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Dr. S.R. Radhika's dermatology, trichology and cosmetology practice went from weak digital presence to 2.1M+ Instagram views, a viral 1M-view reel, and 57 patient leads — all with ₹2,004 in paid ad spend.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { v: "2.1M+", l: "Instagram Views" },
                  { v: "57", l: "Patient Leads" },
                  { v: "₹2,004", l: "Ad Spend" },
                ].map((s) => (
                  <div key={s.l} className="text-center p-3 bg-white/10 rounded-xl">
                    <div className="font-heading font-bold text-xl text-brand-gold">{s.v}</div>
                    <div className="text-xs text-blue-200 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <CTAButton href="/case-studies/aura-cutisurg-clinic" variant="gold" id={`${data.slug}-aura-cta`}>
                Read the Full Case Study
              </CTAButton>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-surface-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title={`Questions about digital marketing for ${data.title}`} />
          <FAQAccordion items={data.faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-cta-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Ready to grow your {data.title.toLowerCase()} practice?
          </h2>
          <p className="text-blue-100 mb-8 text-base">
            Book a free consultation. We'll review your current digital presence and outline a clear growth plan.
          </p>
          <CTAButton href="/book-a-growth-session" variant="gold" size="lg" id={`${data.slug}-final-cta`}>
            Book a Free Growth Session
          </CTAButton>
        </div>
      </section>
    </>
  );
}
