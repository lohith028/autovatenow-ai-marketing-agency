import { type Metadata } from "next";
import SpecialtyPage, { type SpecialtyData } from "@/components/templates/SpecialtyPage";

export const metadata: Metadata = {
  title: "Digital Marketing for Dental Clinics in India",
  description: "Specialist digital marketing for dental clinics — general dentistry, orthodontics, implants, and cosmetic dentistry. Local SEO, Google Ads, and content to fill your appointment book.",
  alternates: { canonical: "https://autovaternow.com/who-we-help/dental-clinics" },
};

const data: SpecialtyData = {
  slug: "dental-clinics",
  title: "Dental Clinics",
  heroDesc:
    "Digital marketing for dental clinics means dominating local search results, building a trusted online presence, and running targeted campaigns that consistently fill your appointment schedule — whether for routine cleanings, orthodontics, implants, or cosmetic dentistry.",
  painPoints: [
    "Your clinic doesn't appear in the local pack when patients search 'dentist near me'",
    "Competitor dental chains with bigger budgets outrank your independent practice",
    "High-value treatment enquiries (implants, orthodontics, veneers) are sporadic",
    "Patient reviews are sparse and you have no system to generate them consistently",
    "Your website looks outdated compared to corporate dental chains",
    "Ad spend produces clicks but not appointment bookings",
  ],
  keyServices: [
    {
      title: "Local SEO & Google Business Optimisation",
      desc: "Dominate local search results for 'dentist near me', '[area] dental clinic', and treatment-specific searches in your catchment area.",
      href: "/services/advanced-seo-geo",
    },
    {
      title: "Google Ads for Dental Clinics",
      desc: "Capture high-intent patients searching for dental implants, braces, teeth whitening, or emergency dental care in your location.",
      href: "/services/performance-marketing",
    },
    {
      title: "Trust-Building Website Design",
      desc: "A professional, mobile-fast website with clear treatment information, doctor credentials, patient reviews, and friction-free booking.",
      href: "/services/healthcare-website-design",
    },
    {
      title: "Patient Review & Reputation Management",
      desc: "Systematic processes to generate Google reviews, respond to feedback, and build a 5-star digital reputation.",
      href: "/services/advanced-seo-geo",
    },
  ],
  faqs: [
    {
      q: "What's the most effective digital marketing channel for dental clinics?",
      a: "For most dental clinics, Google Search Ads and local SEO produce the best ROI because patients searching 'dentist near me' or 'dental implants [city]' are actively in-market. Meta Ads work well for cosmetic dentistry (veneers, whitening, Invisalign) where visual before/after content drives high engagement.",
    },
    {
      q: "How do I compete with large dental chains in my city?",
      a: "Independent dental clinics have natural advantages in local SEO — you can target hyper-local neighbourhood keywords that chains cannot efficiently pursue across hundreds of locations. Combined with strong doctor branding (patients prefer a trusted individual practitioner) and genuine patient reviews, independent clinics regularly outperform chains for local searches.",
    },
    {
      q: "Can digital marketing help increase high-value treatment cases like implants?",
      a: "Yes. Dental implants, orthodontics, and cosmetic dentistry are among the highest-return digital marketing opportunities in dentistry. Patients research these procedures extensively online before committing. A combination of educational content, SEO for treatment-specific pages, and targeted ads consistently generates high-quality enquiries for these procedures.",
    },
    {
      q: "How important are Google reviews for dental clinics?",
      a: "Extremely important. Research shows patients read an average of 7+ reviews before choosing a dentist, and practices with 4.5+ star ratings significantly outperform those with lower ratings in click-through rate from search results. We implement systematic review generation as part of all dental client programmes.",
    },
  ],
};

export default function DentalPage() {
  return <SpecialtyPage data={data} />;
}
