import { type Metadata } from "next";
import { services } from "@/lib/data/services";
import ServicePage from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Healthcare Automation & AI Agents for Clinics",
  description: "WhatsApp automation, voice AI agents, and lead-nurturing workflows for healthcare clinics. Never miss a patient lead again.",
  alternates: { canonical: "https://autovaternow.com/services/automations-ai-agents" },
};

export default function AutomationsPage() {
  const service = services.find((s) => s.slug === "automations-ai-agents")!;
  return <ServicePage service={service} />;
}
