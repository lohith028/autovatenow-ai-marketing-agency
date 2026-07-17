import { type Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Healthcare Marketing Case Studies — AutovateNow",
  description: "Real results for real healthcare practices. See how AutovateNow helped Aura Cutisurg Clinic generate 2.1M+ Instagram views and 57 patient leads with ₹2,004 in ad spend.",
  alternates: { canonical: "https://autovaternow.com/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-mid pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6">Case Studies</h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Real results from real healthcare practices. Every case study reflects a structured approach to digital growth — not vanity metrics, but measurable business outcomes.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured: Aura Cutisurg */}
          <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 mb-12">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-10 lg:p-12">
                <div className="inline-block px-3 py-1 bg-brand-gold-light text-brand-gold-dark text-xs font-semibold rounded-full mb-6">Featured Case Study</div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl text-text-primary mb-3 leading-tight">
                  Aura Cutisurg Clinic, Bangalore
                </h2>
                <p className="text-sm text-brand-blue font-semibold mb-4">Dermatology · Trichology · Cosmetology · General Surgery</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  From weak digital presence and poor agency experience to a structured growth system generating 2.1M+ Instagram views and 57 patient messaging leads with just ₹2,004 in ad spend.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { v: "2.1M+", l: "Instagram Views" },
                    { v: "57", l: "Patient Leads" },
                    { v: "₹2,004", l: "Ad Spend" },
                  ].map((s) => (
                    <div key={s.l} className="text-center p-3 bg-surface-gray rounded-xl">
                      <div className="font-heading font-bold text-xl text-brand-blue">{s.v}</div>
                      <div className="text-xs text-text-muted mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
                <CTAButton href="/case-studies/aura-cutisurg-clinic" variant="blue" id="case-study-hub-aura-cta">
                  Read Full Case Study
                </CTAButton>
              </div>
              <div className="relative bg-brand-blue-light min-h-[300px]">
                <Image
                  src="/images/case-studies/insta-profile.png"
                  alt="Aura Cutisurg Instagram profile showing 277 posts and 700 followers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Coming Soon Placeholder */}
          <div className="bg-surface-gray rounded-2xl border border-dashed border-border p-12 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-heading font-bold text-lg text-text-primary mb-2">More case studies coming soon</h3>
            <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
              We're documenting results from current client engagements. New case studies will be published as results compound.
            </p>
            <CTAButton href="/book-a-growth-session" variant="blue" id="case-studies-cta">
              Become our next case study
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
