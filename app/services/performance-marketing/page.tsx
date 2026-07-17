import { type Metadata } from "next";
import { services } from "@/lib/data/services";
import ServicePage from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Performance Marketing for Healthcare Clinics — Meta & Google Ads",
  description: "Healthcare-specific Meta and Google Ads strategies that turn ad spend into measurable appointment bookings. Stop wasting budget on clicks that never convert.",
  alternates: { canonical: "https://autovaternow.com/services/performance-marketing" },
};

export default function PerformanceMarketingPage() {
  const service = services.find((s) => s.slug === "performance-marketing")!;
  return <ServicePage service={service} />;
}
