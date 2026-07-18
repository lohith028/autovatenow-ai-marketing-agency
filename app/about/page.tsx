import { type Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import { CheckCircle, Target, Shield, BarChart3, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About AutovateNow — Healthcare Digital Marketing Agency, Bengaluru",
  description: "AutovateNow is a Bengaluru-based full-stack digital marketing growth partner for healthcare clinics and hospitals. Learn about our mission, approach, and founder.",
  alternates: { canonical: "https://autovaternow.com/about" },
};

const values = [
  { icon: <Target size={20} />, title: "Foundation-First", desc: "We fix the fundamentals before we scale. No growth without a solid digital foundation." },
  { icon: <BarChart3 size={20} />, title: "Data-Driven", desc: "Every decision is grounded in real data. We report clearly and honestly on what's working." },
  { icon: <Shield size={20} />, title: "Healthcare-Specific", desc: "We work exclusively in healthcare. No generic templates, no guesswork." },
  { icon: <Zap size={20} />, title: "Efficiency at Scale", desc: "Automation and AI tools let us deliver more value without proportional overhead." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-mid pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6">About AutovateNow</h1>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
              The full-stack growth partner for modern healthcare practices — SEO, branding, ads, websites, and automation, under one roof.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="section-divider mb-6" style={{ margin: 0, marginBottom: '1.5rem' }} />
                <h2 className="font-heading font-bold text-3xl text-text-primary mb-6">
                  Why we exist
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Healthcare professionals spend years mastering their craft. But in a world where patients search Google before they call a clinic, and ask ChatGPT before they book a consultation, clinical excellence alone is not enough to grow a practice.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  AutovateNow was founded to bridge this gap — to give clinics, hospitals, and individual doctors the same quality of digital marketing that large healthcare corporations have access to, built specifically around how patients actually discover and choose healthcare providers.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We're not a generalist agency that happens to take healthcare clients. We are a healthcare-specialist growth partner that has built our entire approach around the unique patient journey, regulatory context, and trust requirements of medical practice marketing.
                </p>
              </div>
              <div className="bg-surface-gray rounded-2xl border border-border p-8">
                <div className="text-xs font-semibold text-brand-blue uppercase tracking-widest mb-4">Our positioning</div>
                <blockquote className="font-heading font-bold text-xl text-text-primary leading-snug italic">
                  &ldquo;The full-stack growth partner for modern healthcare practices — SEO, branding, ads, websites, and automation, under one roof.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 lg:py-20 bg-surface-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="The Team" title="Built by practitioners, not generalists" align="left" />
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 relative h-80 md:h-auto min-h-[350px]">
                  <Image 
                    src="/images/lohith-profile.jpg" 
                    alt="Lohith - Founder" 
                    fill 
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="w-full md:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-heading font-bold text-3xl text-text-primary mb-2">Lohith</h3>
                  <p className="text-base text-brand-blue font-semibold mb-6">Founder — Digital Marketing Expert & AI Automation Specialist</p>
                  <p className="text-text-secondary text-base leading-relaxed mb-4">
                    With years of experience in digital marketing and a deep specialization in the healthcare sector, I founded AutovateNow to bridge the gap between clinical excellence and modern patient acquisition.
                  </p>
                  <p className="text-text-secondary text-base leading-relaxed">
                    AutovateNow is built on a conviction that healthcare practices deserve the same sophisticated, data-driven digital marketing that large corporates have — without the fragmentation of dealing with five different agencies for five different channels. We integrate SEO, personal branding, ads, and AI automation to deliver measurable, sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Our Approach" title="How we work" />
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl border border-border p-6 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl mb-4 transition-all duration-300 relative bg-gradient-to-br from-brand-gold to-orange-500 shadow-lg shadow-brand-gold/30 p-[1px]">
                    <div className="w-full h-full bg-gradient-to-br from-white/40 to-white/5 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/50 text-white shadow-[inset_0_2px_10px_rgba(255,255,255,0.7)] group-hover:from-white/50 transition-colors">
                      <span className="drop-shadow-md">
                        {v.icon}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-base text-text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Healthcare-Specific */}
        <section className="py-16 bg-surface-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-blue-dark rounded-2xl p-10 text-white">
              <h2 className="font-heading font-bold text-2xl mb-4">Why we only work with healthcare</h2>
              <p className="text-blue-100 leading-relaxed mb-4">
                Healthcare marketing is fundamentally different from other industries. Patients make decisions with higher stakes, longer deliberation, and greater need for trust. Google's YMYL (Your Money or Your Life) guidelines apply strict quality standards to healthcare content. AI tools like ChatGPT cite medical sources based on demonstrated expertise, not just keyword density.
              </p>
              <p className="text-blue-100 leading-relaxed mb-6">
                By specialising exclusively in healthcare, we've built deep knowledge of what works — and critically, what to avoid — in medical marketing. We don't have to learn your industry while billing you for it.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  "Healthcare-specific content strategy",
                  "YMYL-compliant content creation",
                  "Patient journey expertise",
                  "Medical regulatory awareness",
                  "Doctor authority building",
                  "Healthcare platform policies",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-blue-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-cta-gradient">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl text-white mb-4">Ready to grow your healthcare practice?</h2>
            <p className="text-blue-100 mb-8">Book a free growth consultation. No commitment, no jargon — just clarity on what your practice needs to grow.</p>
            <CTAButton href="/book-a-growth-session" variant="gold" size="lg" id="about-final-cta">Book a Free Growth Session</CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
