import { type Metadata } from "next";
import { services } from "@/lib/data/services";
import ServicePage from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Advanced SEO & GEO for Healthcare Clinics",
  description: "Get found on Google AND cited by ChatGPT, Gemini, and AI Overviews. AutovateNow combines medical SEO with Generative Engine Optimization for clinics and hospitals across India.",
  alternates: { canonical: "https://autovaternow.com/services/advanced-seo-geo" },
};

export default function AdvancedSEOPage() {
  const service = services.find((s) => s.slug === "advanced-seo-geo")!;
  return <ServicePage service={service} />;
}
