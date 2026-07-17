import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeader from "@/components/ui/SectionHeader";
import { type Service } from "@/lib/data/services";

export default function ServicePage({ service }: { service: Service }) {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@type": "Organization", name: "AutovateNow" },
            areaServed: "India",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
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
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-blue-100">{service.shortTitle}</span>
          </nav>
          <div className="text-4xl mb-6">{service.icon}</div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 leading-tight">
            {service.title}
          </h1>
          <p className="text-brand-gold font-semibold text-lg mb-6">{service.tagline}</p>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl">{service.description}</p>
          <CTAButton href="/book-a-growth-session" variant="gold" size="lg" id={`${service.slug}-hero-cta`}>
            Book a Growth Session
          </CTAButton>
        </div>
      </section>

      {/* Answer-First GEO Block */}
      <section className="py-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue-light rounded-2xl p-8 border-l-4 border-brand-blue">
            <p className="text-xs font-semibold text-brand-blue uppercase tracking-widest mb-3">What is {service.shortTitle} for healthcare clinics?</p>
            <p className="text-text-primary text-base leading-relaxed">{service.heroDesc}</p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 lg:py-20 bg-surface-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Challenge"
            title="What healthcare clinics struggle with"
            align="left"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {service.painPoints.map((p, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-border p-4">
                <div className="w-6 h-6 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs font-bold">✕</span>
                </div>
                <span className="text-sm text-text-secondary leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How We Help"
            title="How AutovateNow solves it"
            align="left"
          />
          <div className="space-y-4">
            {service.solutions.map((sol, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl border border-border p-6 hover:shadow-card-hover hover:border-brand-blue transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-text-primary mb-1.5">{sol.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Stats */}
      <section className="py-12 bg-brand-blue-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-blue-300 uppercase tracking-widest mb-8">Results we've delivered for healthcare clients</p>
          <div className="grid grid-cols-3 gap-6">
            {service.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-3xl text-brand-gold mb-2">{stat.value}</div>
                <div className="text-sm text-blue-200 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Case Study Callout */}
      <section className="py-16 bg-surface-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-border p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1">
              <div className="text-xs font-semibold text-brand-blue uppercase tracking-widest mb-2">Case Study · Aura Cutisurg Clinic, Bangalore</div>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                From zero digital presence to 2.1M+ views in 45 days
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                See how we built a complete digital growth system for a Bangalore dermatology and surgery clinic — from website and content to paid campaigns.
              </p>
            </div>
            <div className="flex-shrink-0">
              <CTAButton href="/case-studies/aura-cutisurg-clinic" variant="blue" id={`${service.slug}-casestudy-cta`}>
                Read Case Study
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title={`Common questions about our ${service.shortTitle} service`}
          />
          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-cta-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Ready to improve your {service.shortTitle.toLowerCase()}?
          </h2>
          <p className="text-blue-100 mb-8 text-base">
            Book a free growth consultation. We'll identify the specific gaps in your current approach and outline a clear strategy.
          </p>
          <CTAButton href="/book-a-growth-session" variant="gold" size="lg" id={`${service.slug}-final-cta`}>
            Book a Free Growth Session
          </CTAButton>
        </div>
      </section>
    </>
  );
}
