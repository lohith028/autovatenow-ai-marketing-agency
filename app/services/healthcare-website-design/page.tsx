import { type Metadata } from "next";
import { services } from "@/lib/data/services";
import ServicePage from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Healthcare Website Design for Clinics & Hospitals",
  description: "Fast, mobile-first, SEO-structured websites built specifically for healthcare practices. Build trust and drive appointment bookings from day one.",
  alternates: { canonical: "https://autovaternow.com/services/healthcare-website-design" },
};

export default function HealthcareWebDesignPage() {
  const service = services.find((s) => s.slug === "healthcare-website-design")!;
  return <ServicePage service={service} />;
}
