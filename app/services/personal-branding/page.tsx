import { type Metadata } from "next";
import { services } from "@/lib/data/services";
import ServicePage from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Personal Branding & Content Creation for Doctors",
  description: "Build doctor authority that patients trust before they ever book an appointment. Short-form video, social content, and thought leadership for healthcare professionals.",
  alternates: { canonical: "https://autovaternow.com/services/personal-branding" },
};

export default function PersonalBrandingPage() {
  const service = services.find((s) => s.slug === "personal-branding")!;
  return <ServicePage service={service} />;
}
