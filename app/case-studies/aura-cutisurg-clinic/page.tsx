import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeader from "@/components/ui/SectionHeader";
import { CheckCircle, ChevronRight, TrendingUp, Users, Eye, MessageCircle, DollarSign, Award, Globe, Video, BarChart3 } from "lucide-react";

// Inline Instagram SVG
const Instagram = ({ size, className }: { size: number, className?: string }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

export const metadata: Metadata = {
  title: "Aura Cutisurg Clinic Case Study — 2.1M+ Views & 57 Leads | AutovateNow",
  description:
    "How AutovateNow helped Aura Cutisurg Clinic, Bangalore generate 2.1M+ Instagram views, 2 trending reels with 1 million views each, and 57 patient leads with ₹2,004 in ad spend. Full healthcare marketing case study.",
  alternates: { canonical: "https://autovaternow.com/case-studies/aura-cutisurg-clinic" },
};

const keyStats = [
  { icon: <Eye size={24} />, value: "2,120,632+", label: "Instagram Views", subtext: "Total account reach" },
  { icon: <Users size={24} />, value: "1,574,122", label: "Accounts Reached", subtext: "Non-followers: 98.5%" },
  { icon: <MessageCircle size={24} />, value: "57", label: "Patient Conversations", subtext: "Direct messaging leads" },
  { icon: <DollarSign size={24} />, value: "₹2,004.49", label: "Total Ad Spend", subtext: "₹34.95 per conversation" },
  { icon: <Video size={24} />, value: "~1M", label: "Single Reel Views", subtext: "Top-performing reel" },
  { icon: <TrendingUp size={24} />, value: "30+", label: "Content Pieces", subtext: "Created in 45 days" },
];

const challenges = [
  {
    title: "Weak digital foundation",
    desc: "No structured online presence across key platforms. Previous agency work had produced minimal visibility or patient engagement.",
  },
  {
    title: "Low visibility and poor enquiry generation",
    desc: "Despite being an established clinical practice, digital discoverability was poor. Organic reach was minimal and patient enquiries from digital channels were inconsistent.",
  },
  {
    title: "No authority-building content system",
    desc: "The clinic lacked a content strategy that positioned the doctors as trusted experts. Posting was irregular, generic, and not structured to build patient trust or drive enquiries.",
  },
];

const foundations = [
  "Strengthened digital presence across Instagram, Facebook, YouTube, and website",
  "Built a structured healthcare-focused content system around doctor-led education",
  "Established a stronger trust-building website presence for the clinic",
  "Started SEO foundation work for long-term discoverability in Bangalore",
  "Aligned branding and messaging around skin, hair, cosmetic, and surgical expertise",
];

const contentInsights = [
  { value: "2.1M+", label: "Total Views", icon: <Eye size={20} /> },
  { value: "1.57M+", label: "Accounts Reached", icon: <Users size={20} /> },
  { value: "99.8%", label: "Views from Reels", icon: <Video size={20} /> },
];

const whyItMatters = [
  {
    title: "Healthcare growth starts with the right digital foundation",
    desc: "Before investing in ads or viral content, the digital foundation — website, profiles, branding, content system — must be solid. Growth built on weak foundations is fragile.",
  },
  {
    title: "Doctor-led educational content builds trust faster than generic promotions",
    desc: "Patients don't trust clinic promotional posts. They trust doctors who demonstrate expertise. Real doctors explaining real medical concepts consistently outperform generic clinic content.",
  },
  {
    title: "Organic authority and paid ads work better together, not separately",
    desc: "Strong organic content reduces paid ad costs and improves ad performance. The Aura Cutisurg results — 57 leads from ₹2,004 — were only achievable because organic authority content was established first.",
  },
];

export default function AuraCasStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How AutovateNow Rebuilt Aura Cutisurg Clinic's Digital Foundation and Turned Content Into Reach, Authority, and Patient Leads",
            description:
              "Case study: Aura Cutisurg Clinic, Bangalore — 2.1M+ Instagram views, 57 patient leads, ₹2,004 ad spend",
            author: { "@type": "Organization", name: "AutovateNow" },
            publisher: { "@type": "Organization", name: "AutovateNow" },
            datePublished: "2026-07-01",
            dateModified: "2026-07-17",
          }),
        }}
      />

      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-mid pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              <ChevronRight size={14} />
              <span className="text-blue-100">Aura Cutisurg Clinic</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <div className="inline-block px-3 py-1.5 bg-white/10 rounded-full text-xs font-semibold text-blue-200 mb-6 border border-white/20">
                  Case Study · Bengaluru, India · Dermatology & Surgery
                </div>
                <h1 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4 leading-tight">
                  Aura Cutisurg Clinic Case Study
                </h1>
                <p className="text-blue-100 text-base leading-relaxed mb-8">
                  How a Bangalore skin, hair, cosmetics, and surgery clinic built digital authority, generated 2,120,632+ Instagram views, and produced 57 messaging leads with just ₹2,004.49 in ad spend. 2 videos got in trending with 1 million views each.
                </p>
                {/* 3 Floating stat cards */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { v: "2,120,632+", l: "Instagram Views" },
                    { v: "57 Leads", l: "Messages Started" },
                    { v: "₹2,004.49", l: "Total Ad Spend" },
                  ].map((s) => (
                    <div key={s.l} className="px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                      <div className="font-heading font-bold text-xl text-brand-gold">{s.v}</div>
                      <div className="text-xs text-blue-200 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
                <CTAButton href="/book-a-growth-session" variant="gold" size="lg" id="case-study-hero-cta">
                  Build this for your clinic
                </CTAButton>
              </div>

              {/* Right: Proof collage */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden col-span-2 aspect-video bg-white/10 shadow-float">
                  <Image
                    src="/images/case-studies/insta-dashboard.png"
                    alt="Aura Cutisurg Instagram account insights — 2,120,632 views dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue-dark/80 to-transparent p-3">
                    <span className="text-xs text-white font-semibold">Instagram Account Insights Dashboard</span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-white/10 shadow-float">
                  <Image
                    src="/images/case-studies/meta-ads.png"
                    alt="Meta Ads dashboard — 57 messaging conversations, ₹34.95 per lead"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue-dark/80 to-transparent p-3">
                    <span className="text-xs text-white font-semibold">Meta Ads Dashboard</span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-white/10 shadow-float">
                  <Image
                    src="/images/case-studies/insta-profile.png"
                    alt="Aura Cutisurg Instagram profile — 277 posts, 700 followers"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue-dark/80 to-transparent p-3">
                    <span className="text-xs text-white font-semibold">Instagram Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY STATS SUMMARY ── */}
        <section className="py-14 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {keyStats.map((stat) => (
                <div key={stat.label} className="text-center p-5 bg-white rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-light flex items-center justify-center text-brand-blue mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="font-heading font-bold text-xl text-brand-blue mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold text-text-primary mb-0.5">{stat.label}</div>
                  <div className="text-xs text-text-muted">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLINIC INFO ── */}
        <section className="py-12 bg-surface-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-border p-6">
                <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4">About the Client</div>
                <h2 className="font-heading font-bold text-lg text-text-primary mb-1">Aura Cutisurg Clinic</h2>
                <p className="text-sm text-text-secondary mb-4">Bengaluru, Karnataka, India</p>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-text-muted mb-1">Specialty</div>
                    <div className="text-sm text-text-primary">Skin · Hair · Cosmetics · Surgery · Bangalore</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-text-muted mb-1">Doctors</div>
                    <div className="text-sm text-text-primary">
                      <strong>Dr. S.R. Radhika</strong> — Dermatologist, Trichologist, Cosmetologist<br />
                      <strong>Dr. Sunil Kumar</strong> — Laparoscopic & General Surgeon
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-border p-6">
                <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4">Services Delivered</div>
                <ul className="space-y-2.5">
                  {[
                    "Doctor-led content creation & Reels",
                    "Instagram & social media strategy",
                    "Performance marketing (Meta Ads)",
                    "Website & brand presence strengthening",
                    "SEO foundation work",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <CheckCircle size={14} className="text-brand-blue mt-0.5 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE CHALLENGE ── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="The Challenge" title="Starting point: weak foundation, missed growth" align="left" />
            <p className="text-text-secondary leading-relaxed mb-8">
              Aura Cutisurg had previously worked with other agencies for around a year without meaningful visibility, patient enquiries, or digital momentum. The brand lacked a strong digital foundation, had limited authority-building content, and needed a better system across website, organic content, and performance marketing.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {challenges.map((c, i) => (
                <div key={i} className="bg-surface-gray rounded-2xl border border-border p-6">
                  <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                    <span className="text-red-400 font-bold text-sm">✗</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-text-primary mb-2">{c.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDATION WE BUILT ── */}
        <section className="py-16 lg:py-20 bg-surface-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Phase 1: Foundation" title="We fixed the fundamentals before scaling" align="left" />
            <p className="text-text-secondary leading-relaxed mb-8">
              AutovateNow first focused on fixing the fundamentals before scaling growth. No amount of ad spend delivers sustainable results on a weak digital foundation.
            </p>
            <div className="space-y-3 mb-10">
              {foundations.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-border p-4">
                  <CheckCircle size={18} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>

            {/* Website placeholder */}
            <div className="bg-white rounded-2xl border-2 border-dashed border-brand-blue/30 overflow-hidden">
              <div className="p-4 bg-brand-blue-light border-b border-brand-blue/20">
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-brand-blue" />
                  <span className="text-sm font-semibold text-brand-blue">Clinic Website Presence</span>
                </div>
              </div>
              <div className="relative aspect-video bg-surface-gray">
                <Image
                  src="/images/case-studies/clinic-website.png"
                  alt="Aura Cutisurg Clinic website screenshot"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-4 bg-brand-blue-light/50">
                <p className="text-xs text-brand-blue font-medium">Aura Cutisurg Clinic website — digital brand presence supporting trust and patient conversion</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── INSTAGRAM AUTHORITY ── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Phase 2: Authority" title="Building Instagram authority through doctor-led content" align="left" />
            <p className="text-text-secondary leading-relaxed mb-8">
              The goal was not random posting — it was building authority through educational healthcare content featuring real doctors. Every piece of content was designed to position Dr. Radhika and Dr. Sunil Kumar as trusted experts in their respective specialties.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {/* Profile screenshot */}
              <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-card">
                <div className="p-3 border-b border-border bg-surface-gray flex items-center gap-2">
                  <Instagram size={14} className="text-pink-500" />
                  <span className="text-xs font-semibold text-text-secondary">@aura_cutisurg_clinic · Profile</span>
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/case-studies/insta-profile.png"
                    alt="Aura Cutisurg Instagram profile showing 277 posts and 700 followers"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Profile stats + dashboard */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { v: "277", l: "Posts" },
                    { v: "700", l: "Followers" },
                    { v: "21.2K", l: "Views / 30 days" },
                  ].map((s) => (
                    <div key={s.l} className="bg-white rounded-xl border border-border p-4 text-center">
                      <div className="font-heading font-bold text-xl text-brand-blue">{s.v}</div>
                      <div className="text-xs text-text-muted mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-card">
                  <div className="p-3 border-b border-border bg-surface-gray flex items-center gap-2">
                    <BarChart3 size={14} className="text-brand-blue" />
                    <span className="text-xs font-semibold text-text-secondary">Professional Dashboard Insights</span>
                  </div>
                  <div className="relative aspect-video">
                    <Image
                      src="/images/case-studies/insta-dashboard.png"
                      alt="Instagram account insights dashboard — 2,120,632 views, 1,574,122 accounts reached"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Skin | Hair | Cosmetics | Surgery", desc: "Profile positioned around clinical expertise and Bangalore location" },
                { title: "Doctor-Featured Content", desc: "Dr. Radhika and Dr. Sunil Kumar visibly featured as the face of the brand" },
                { title: "Educational First", desc: "Every post designed to educate patients, not simply promote the clinic" },
              ].map((item) => (
                <div key={item.title} className="bg-surface-gray rounded-xl border border-border p-5">
                  <h3 className="font-heading font-semibold text-sm text-text-primary mb-2">{item.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTENT & VIRAL REELS ── */}
        <section className="py-16 lg:py-20 bg-surface-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Content Strategy" title="30+ pieces, 2.1M views, 2 trending videos with 1M views each" align="left" />
            <p className="text-text-secondary leading-relaxed mb-4">
              AutovateNow created short-form educational healthcare content designed to be simple, relatable, and highly shareable. Instead of generic clinic promotions, the strategy focused on doctor-led Reels around skincare, haircare, treatments, myths, and patient-interest topics.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              The result: content that resonated far beyond the existing follower base — with 98.5% of views coming from non-followers, and 2 videos got in trending with 1 million views each.
            </p>

            {/* Content Insight Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {contentInsights.map((s) => (
                <div key={s.label} className="bg-brand-blue-dark rounded-2xl p-5 text-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-gold mx-auto mb-3">
                    {s.icon}
                  </div>
                  <div className="font-heading font-bold text-2xl text-brand-gold mb-1">{s.value}</div>
                  <div className="text-sm text-blue-200">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Reel Gallery */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-card">
                <div className="p-3 border-b border-border bg-surface-gray flex items-center gap-2">
                  <Video size={14} className="text-pink-500" />
                  <span className="text-xs font-semibold text-text-secondary">Top Reel · ~997K Views · Jun 23</span>
                </div>
                <div className="relative aspect-[9/16] max-h-80">
                  <Image
                    src="/images/case-studies/reel-1.jpg"
                    alt="Viral reel — doctor-led educational content reaching 997K views"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="text-white">
                      <div className="text-xs font-semibold opacity-80">Views</div>
                      <div className="font-heading font-bold text-xl text-brand-gold">~997K</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-card">
                <div className="p-3 border-b border-border bg-surface-gray flex items-center gap-2">
                  <Video size={14} className="text-pink-500" />
                  <span className="text-xs font-semibold text-text-secondary">Top Reel · ~952K Views · Jul 4</span>
                </div>
                <div className="relative aspect-[9/16] max-h-80">
                  <Image
                    src="/images/case-studies/reel-2.png"
                    alt="Second viral reel — hair straightening educational content reaching 952K views"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="text-white">
                      <div className="text-xs font-semibold opacity-80">Views</div>
                      <div className="font-heading font-bold text-xl text-brand-gold">~952K</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PAID ADS RESULTS ── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Phase 3: Paid Amplification" title="57 patient conversations — ₹34.95 each" align="left" />
            <p className="text-text-secondary leading-relaxed mb-8">
              Once the authority content and foundation were in place, we tested paid promotion with a tightly controlled budget. Even with modest spend, the campaign produced direct messaging conversations at an efficient cost — demonstrating the value of pairing strong organic content with smart performance marketing.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Dashboard screenshot */}
              <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-card">
                <div className="p-3 border-b border-border bg-surface-gray flex items-center gap-2">
                  <TrendingUp size={14} className="text-brand-blue" />
                  <span className="text-xs font-semibold text-text-secondary">Meta Ads Manager — Campaign Results</span>
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/case-studies/meta-ads.png"
                    alt="Meta Ads dashboard showing 57 messaging conversations started at ₹34.95 per conversation with ₹1,992.29 spent"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                <div className="bg-brand-blue-dark rounded-2xl p-6 text-white">
                  <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-4">Campaign Details</div>
                  <div className="space-y-4">
                    {[
                      { label: "Campaign Objective", value: "Messaging Conversations" },
                      { label: "Platform", value: "Instagram (Meta Ads)" },
                      { label: "Total Amount Spent", value: "₹2,004.49" },
                      { label: "Conversations Started", value: "57" },
                      { label: "Cost per Conversation", value: "₹34.95" },
                      { label: "Opportunity Score", value: "100 / 100" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start justify-between gap-4 text-sm border-b border-white/10 pb-3 last:border-0 last:pb-0">
                        <span className="text-blue-300">{item.label}</span>
                        <span className="font-semibold text-white text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-gold-light rounded-xl border border-brand-gold/20 p-5">
                  <p className="text-sm text-text-primary leading-relaxed">
                    <strong className="text-brand-gold-dark">Key insight:</strong> The ₹34.95 cost per patient messaging conversation was only achievable because the organic content foundation had already built trust with the target audience. Cold traffic to a clinic with no organic content costs significantly more per lead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESULTS SUMMARY ── */}
        <section className="py-16 lg:py-20 bg-brand-blue-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-brand-gold" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Results Summary</span>
                <div className="w-6 h-px bg-brand-gold" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-white">
                What we delivered for Aura Cutisurg Clinic
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { v: "30+", l: "Content pieces in 45 days" },
                { v: "2,120,632+", l: "Instagram views" },
                { v: "1.57M+", l: "Accounts reached" },
                { v: "2", l: "Trending reels with 1M views each" },
                { v: "57", l: "Patient messages generated" },
                { v: "₹34.95", l: "Cost per patient conversation" },
              ].map((s) => (
                <div key={s.l} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                  <div className="font-heading font-bold text-2xl lg:text-3xl text-brand-gold mb-2">{s.v}</div>
                  <div className="text-sm text-blue-200">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY IT MATTERS ── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Key Takeaways" title="Why this case study matters for your clinic" />
            <div className="space-y-4">
              {whyItMatters.map((item, i) => (
                <div key={i} className="flex gap-5 bg-white rounded-2xl border border-border p-6 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-heading font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="py-12 bg-surface-gray">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-border p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl text-brand-blue/10 font-heading font-bold">"</div>
              <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4">Client Testimonial</div>
              <p className="text-text-secondary text-base italic leading-relaxed mb-6">
                "We've been working with Lohith for 45 days now, and he's truly an expert in marketing. From day one, he set up the right foundation, positioned our clinic apart from the crowd, and built a strong strategy focused on educating people and building authority. The results speak for themselves: 2.1+ million views and 10+ new patient visits. What I really value is that his agency handles everything end-to-end—SEO, content creation, performance marketing, and website development—so we didn’t have to worry about anything. He is transparent, humble, and genuinely committed. I highly recommend Lohith and AutovateNow to any doctor, clinic, or hospital owner looking to grow their digital presence."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue-light flex items-center justify-center font-heading font-bold text-brand-blue">
                  SR
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-text-primary">Dr. S.R. Radhika</div>
                  <div className="text-xs text-text-muted">Aura Cutisurg Clinic, Bengaluru</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-16 bg-cta-gradient">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Award size={40} className="text-brand-gold mx-auto mb-6" />
            <h2 className="font-heading font-bold text-3xl text-white mb-4">
              Want to build this kind of digital authority for your clinic?
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-8">
              We help healthcare brands combine SEO, content, ads, websites, and automation into one growth system. Book a free consultation and we'll review your current digital presence.
            </p>
            <CTAButton href="/book-a-growth-session" variant="gold" size="lg" id="case-study-final-cta">
              Book a Growth Session
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


