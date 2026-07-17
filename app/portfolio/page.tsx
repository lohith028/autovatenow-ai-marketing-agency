import { type Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTAButton from "@/components/ui/CTAButton";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — AutovateNow Healthcare Marketing",
  description: "AutovateNow portfolio — website designs, social media campaigns, and branding work for healthcare clinics. Coming soon.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-mid">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8">
              <Clock size={36} className="text-brand-gold" />
            </div>
            <h1 className="font-heading font-bold text-4xl text-white mb-4">Portfolio</h1>
            <p className="text-brand-gold font-semibold text-lg mb-4">Coming Soon</p>
            <p className="text-blue-100 leading-relaxed mb-8">
              We're building a comprehensive portfolio showcasing our website designs, social media campaigns, content work, and branding projects for healthcare clients. Check back soon — or see our case studies for real results in the meantime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/case-studies" variant="gold" id="portfolio-case-studies-link">See Case Studies</CTAButton>
              <CTAButton href="/book-a-growth-session" variant="outline" id="portfolio-cta">Book a Consultation</CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
