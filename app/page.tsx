import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTAButton from "@/components/ui/CTAButton";
import StatCard from "@/components/ui/StatCard";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import BlogCard from "@/components/ui/BlogCard";
import {
  Search, Target, TrendingUp, Globe, Bot,
  CheckCircle, ArrowRight, ChevronRight,
  Stethoscope, Activity, Shield, Zap,
  BarChart3, Users, Star, Clock
} from "lucide-react";
import { blogPosts } from "@/lib/data/blog-posts";

export const metadata: Metadata = {
  title: "AutovateNow — Full-Stack Digital Marketing for Healthcare Clinics",
  description:
    "AutovateNow is the full-stack growth partner for modern healthcare practices — combining SEO, personal branding, performance ads, website design, and AI automation under one roof. Based in Bengaluru, India.",
  alternates: { canonical: "https://autovaternow.com" },
};

const services = [
  {
    icon: <Search size={22} />,
    title: "Advanced SEO & GEO",
    description:
      "Get found on Google and cited by ChatGPT, Gemini, and AI Overviews. We structure your clinic's content for both traditional search and AI-generated recommendations.",
    href: "/services/advanced-seo-geo",
  },
  {
    icon: <Target size={22} />,
    title: "Personal Branding",
    description:
      "Doctor-led short-form video, social content, and thought-leadership that builds trust and turns views into verified patient enquiries.",
    href: "/services/personal-branding",
    featured: true,
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Performance Marketing",
    description:
      "Healthcare-specific Meta and Google Ads that target high-intent local patients — turning every rupee into measurable appointment bookings.",
    href: "/services/performance-marketing",
  },
  {
    icon: <Globe size={22} />,
    title: "Website Design",
    description:
      "Fast, mobile-first, SEO-structured websites built for healthcare practices — designed to build trust and drive bookings from day one.",
    href: "/services/healthcare-website-design",
  },
  {
    icon: <Bot size={22} />,
    title: "Automations & AI Agents",
    description:
      "WhatsApp bots, voice agents, and lead-nurturing workflows so your front desk focuses on patients — not phone tag.",
    href: "/services/automations-ai-agents",
  },
];

const specialties = [
  {
    name: "Dermatology & Skin Clinics",
    href: "/who-we-help/dermatology-skin-clinics",
    icon: <Star size={20} />,
    desc: "Skin, hair, cosmetics & trichology. Content-first authority building with proven results.",
    highlight: "Case study: 2.1M+ views",
  },
  {
    name: "Dental Clinics",
    href: "/who-we-help/dental-clinics",
    icon: <Shield size={20} />,
    desc: "General dentistry to implants and orthodontics. Local SEO and ads for chair fill.",
    highlight: "",
  },
  {
    name: "General Surgeons",
    href: "/who-we-help/general-surgeons",
    icon: <Activity size={20} />,
    desc: "Laparoscopic, bariatric and general surgery. Referral authority and patient acquisition.",
    highlight: "",
  },
];

const differentiators = [
  {
    icon: <Stethoscope size={24} />,
    title: "Healthcare-Specific Expertise",
    desc: "We work exclusively with clinics, hospitals, and healthcare professionals. Every strategy, content piece, and ad we produce is designed around how patients actually make healthcare decisions.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Full-Funnel, Not Fragmented",
    desc: "Most agencies do one thing. We integrate SEO, content, ads, web, and automation into one coherent growth system — so every channel reinforces the others.",
  },
  {
    icon: <Activity size={24} />,
    title: "Data-Driven Reporting",
    desc: "No vanity metrics. We track what matters — enquiry volume, cost per lead, and patient acquisition — and report transparently every month.",
  },
  {
    icon: <Zap size={24} />,
    title: "Automation-Backed Efficiency",
    desc: "We build digital infrastructure, not just campaigns. Automation tools ensure every lead is followed up, every patient is nurtured, and every opportunity is captured.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We audit your current digital presence — website, SEO, social, ads — and map exactly where the growth gaps are.",
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    desc: "We build a custom 90-day growth strategy covering every channel relevant to your specialty and goals.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our team executes across all agreed channels simultaneously — content, SEO, ads, web, and automation.",
  },
  {
    num: "04",
    title: "Reporting & Optimisation",
    desc: "Monthly performance reviews with clear data, and continuous optimisation to improve results over time.",
  },
];

export default function HomePage() {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            name: "AutovateNow",
            description:
              "Full-stack digital marketing growth partner for healthcare clinics — SEO, branding, ads, websites, and automation.",
            url: "https://autovaternow.com",
            logo: "https://autovaternow.com/images/logo.png",
            email: "lohith.l@autovatenow.com",
            telephone: "+91-9885407925",
            address: {
              "@type": "PostalAddress",
              addressLocality: "E-city, Bengaluru",
              addressRegion: "Karnataka",
              addressCountry: "IN",
            },
            areaServed: "India",
            serviceType: [
              "Healthcare SEO",
              "Medical Digital Marketing",
              "Doctor Personal Branding",
              "Healthcare Website Design",
              "Medical Automation",
            ],
          }),
        }}
      />

      <Header />

      <main>
        {/* ── HERO ── */}
        <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-border">
          {/* Background pattern (Medical Crosses) */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M18 10h4v8h8v4h-8v8h-4v-8h-8v-4h8v-8z' fill='%23E2E8F0' fill-opacity='0.5'/%3E%3C/svg%3E\")" }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Copy */}
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-blue-light rounded-full text-xs font-semibold text-brand-blue mb-6 border border-brand-blue/20">
                  <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                  Healthcare Growth Partner · Bengaluru, India
                </div>

                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.25rem] text-brand-blue-dark leading-tight mb-6">
                  The full-stack growth partner for{" "}
                  <span className="text-brand-blue">modern healthcare</span>{" "}
                  practices.
                </h1>

                <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl">
                  SEO, personal branding, performance ads, website design, and AI automation — integrated under one roof, built specifically for clinics, hospitals, and healthcare professionals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <CTAButton href="/book-a-growth-session" variant="blue" size="lg" id="hero-primary-cta">
                    Book a Growth Session
                  </CTAButton>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-blue font-medium text-base transition-colors py-2"
                  >
                    See Case Studies <ChevronRight size={16} />
                  </Link>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-4">
                  {[
                    "Healthcare-Specialist Agency",
                    "India-Based Team",
                    "No Lock-In Contracts",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle size={14} className="text-brand-blue flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Proof visual */}
              <div className="relative animate-fade-up animate-delay-200">
                <div className="relative">
                  {/* Main image frame */}
                  <div className="bg-white backdrop-blur-sm border border-border rounded-2xl p-4 overflow-hidden shadow-card">
                    <div className="bg-surface-gray rounded-xl aspect-[4/3] flex items-center justify-center relative">
                      <Image
                        src="/images/hero-section.jpeg"
                        alt="AutovateNow Healthcare Marketing"
                        fill
                        className="object-cover rounded-xl"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />

                      {/* Floating stat cards */}
                      <div className="absolute -top-3 -left-3 animate-float">
                        <StatCard
                          value="2.1M+"
                          label="Instagram Views"
                          subtext="Aura Cutisurg · 45 days"
                          variant="white"
                          className="shadow-float"
                        />
                      </div>
                      <div className="absolute -bottom-3 -right-3 animate-float animate-delay-300">
                        <StatCard
                          value="57 Leads"
                          label="Messaging Conversations"
                          subtext="₹2,004 total ad spend"
                          variant="gold"
                          className="shadow-cta"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Side stat */}
                  <div className="absolute -right-4 top-1/3 animate-float animate-delay-200 hidden xl:block">
                    <StatCard
                      value="₹34.95"
                      label="Cost per Lead"
                      variant="blue"
                      className="shadow-float"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section className="bg-surface-gray border-y border-border py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold text-text-muted uppercase tracking-widest mb-8">
              Trusted by Healthcare Professionals Across India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              {[
                { name: "Google Partner", src: "/images/badges/google-partner-badge.png" },
                { name: "Meta Business Partner", src: "/images/badges/meta-business-partner.webp" },
                { name: "Healthcare Specialist", src: "/images/badges/Healthcare%20Specialist%20badge.avif" },
                { name: "Clutch Verified", src: "/images/badges/Clutch%20Verified%20badge.svg" },
                { name: "HIPAA-Aware Practice", src: "/images/badges/HIPAA-Aware%20Practice.jpg" },
              ].map((badge) => (
                <div
                  key={badge.name}
                  className="bg-white rounded-xl border border-border shadow-card p-3 flex items-center justify-center h-20 sm:h-24 w-36 sm:w-48 md:w-52 transition-all duration-300 hover:shadow-card-hover hover:border-brand-blue"
                >
                  <div className="relative w-full h-full transition-all duration-300">
                    <Image
                      src={badge.src}
                      alt={badge.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES OVERVIEW ── */}
        <section id="services" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="What We Do"
              title="Five integrated services. One growth system."
              subtitle="We don't offer fragmented point solutions. Every service we deliver is designed to work together — amplifying results across all channels."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <ServiceCard
                  key={s.href}
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  href={s.href}
                  featured={s.featured}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE HELP ── */}
        <section id="who-we-help" className="py-20 lg:py-28 bg-surface-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Specialties We Serve"
              title="Built for your specialty. Not adapted from a generic template."
              subtitle="We understand the unique patient journey, regulatory context, and competitive landscape of each healthcare specialty we serve."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
                  <h3 className="font-heading font-bold text-lg text-text-primary group-hover:text-brand-blue transition-colors mb-2">{s.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">{s.desc}</p>
                  {s.highlight && (
                    <div className="inline-block px-3 py-1 bg-brand-gold-light text-brand-gold-dark text-xs font-semibold rounded-full mb-3">
                      {s.highlight}
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 text-sm text-brand-blue font-semibold group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <CTAButton href="/who-we-help" variant="outline" id="view-all-specialties-btn">
                View All Specialties
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ── CASE STUDY HIGHLIGHT: AURA CUTISURG ── */}
        <section id="case-study-highlight" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-brand-blue-dark to-brand-blue rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: Story */}
                <div className="p-10 lg:p-14">
                  <div className="inline-block px-3 py-1 bg-white/15 rounded-full text-xs font-semibold text-blue-200 mb-6">
                    Case Study · Bangalore
                  </div>
                  <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4">
                    Aura Cutisurg Clinic
                  </h2>
                  <p className="text-blue-100 text-base leading-relaxed mb-8">
                    A Bangalore skin, hair, cosmetics and surgery clinic. Zero meaningful digital presence. Within 45 days: 2.1 million Instagram views, a viral reel approaching 1M views, and 57 direct patient leads from ₹2,004 in ad spend.
                  </p>
                  {/* Key Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { v: "2.1M+", l: "Instagram Views" },
                      { v: "57", l: "Patient Leads" },
                      { v: "₹2,004", l: "Ad Spend" },
                    ].map((stat) => (
                      <div key={stat.l} className="text-center p-4 bg-white/10 rounded-xl">
                        <div className="font-heading font-bold text-2xl text-brand-gold mb-1">{stat.v}</div>
                        <div className="text-xs text-blue-200">{stat.l}</div>
                      </div>
                    ))}
                  </div>
                  <CTAButton href="/case-studies/aura-cutisurg-clinic" variant="gold" id="case-study-cta">
                    Read Full Case Study
                  </CTAButton>
                </div>

                {/* Right: Proof Gallery */}
                <div className="p-8 lg:p-10 flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    <div className="relative rounded-xl overflow-hidden col-span-2 aspect-video bg-white/10">
                      <Image
                        src="/images/case-studies/insta-dashboard.png"
                        alt="Aura Cutisurg Instagram account insights showing 2,120,632 views"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative rounded-xl overflow-hidden aspect-square bg-white/10">
                      <Image
                        src="/images/case-studies/reel-1.jpg"
                        alt="Aura Cutisurg viral reel screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative rounded-xl overflow-hidden aspect-square bg-white/10">
                      <Image
                        src="/images/case-studies/meta-ads.png"
                        alt="Meta Ads dashboard showing 57 leads at ₹34.95 per lead"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY AUTOVATERNOW ── */}
        <section id="differentiators" className="py-20 lg:py-28 bg-surface-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Why AutovateNow"
              title="Healthcare marketing is different. We're built for it."
              subtitle="Most digital agencies adapt general-market playbooks for healthcare. We start from healthcare first — the patient decision journey, YMYL content standards, and the trust that clinical authority requires."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentiators.map((d) => (
                <div key={d.title} className="bg-white rounded-2xl border border-border p-8 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center text-brand-blue mb-5">
                    {d.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text-primary mb-3">{d.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="process" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our Process"
              title="Foundation first. Then growth at scale."
              subtitle="We don't start with tactics — we start with a thorough audit and strategy before any execution begins."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Connector line (desktop) */}
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-blue-light via-brand-blue to-brand-blue-light" />

              {steps.map((step, i) => (
                <div key={step.num} className="relative bg-white rounded-2xl border border-border p-6 text-center hover:shadow-card-hover transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center mx-auto mb-5 relative z-10 shadow-[0_0_0_6px_#EBF2FF]">
                    <span className="font-heading font-bold text-xl text-white">{step.num}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="py-16 bg-surface-gray">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="section-divider" />
              <p className="text-sm font-semibold text-text-muted uppercase tracking-widest">What Clients Say</p>
            </div>
            <TestimonialCard
              quote="[PLACEHOLDER — Real testimonial from Aura Cutisurg or another AutovateNow client. This section will display an authentic doctor quote once collected.]"
              name="Dr. [Name]"
              title="Specialist"
              clinic="[Clinic Name], Bangalore"
              variant="light"
            />
          </div>
        </section>

        {/* ── BLOG PREVIEW ── */}
        <section id="blog-preview" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <SectionHeader
                eyebrow="Insights"
                title="Healthcare marketing insights from our team"
                align="left"
                className="mb-0"
              />
              <CTAButton href="/blog" variant="outline" className="hidden md:inline-flex flex-shrink-0">
                View All Posts
              </CTAButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {previewPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  image={post.image}
                />
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <CTAButton href="/blog" variant="outline" id="mobile-blog-cta">
                View All Posts
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section id="final-cta" className="bg-cta-gradient py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-semibold text-blue-200 mb-6 border border-white/20">
              <Clock size={12} />
              Limited availability — we work with select healthcare practices
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Ready to build a digital practice that{" "}
              <span className="text-brand-gold">actually grows?</span>
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free growth session with our team. We'll audit your current digital presence, identify the highest-impact gaps, and outline a clear strategy — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/book-a-growth-session" variant="gold" size="lg" id="final-cta-btn">
                Book a Free Growth Session
              </CTAButton>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-white font-medium text-base transition-colors py-2 justify-center"
              >
                See our results first <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
