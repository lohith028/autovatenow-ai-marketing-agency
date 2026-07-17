import { type Metadata } from "next";
import SpecialtyPage, { type SpecialtyData } from "@/components/templates/SpecialtyPage";

export const metadata: Metadata = {
  title: "Digital Marketing for General Surgeons & Surgical Clinics in India",
  description: "Digital marketing for general and laparoscopic surgeons. Build referral authority, attract high-intent patients, and grow your surgical practice with specialist healthcare marketing.",
  alternates: { canonical: "https://autovaternow.com/who-we-help/general-surgeons" },
};

const data: SpecialtyData = {
  slug: "general-surgeons",
  title: "General Surgeons",
  heroDesc:
    "Digital marketing for general and laparoscopic surgeons means building credibility and visibility with both patients and referring doctors — positioning you as the trusted surgical expert in your region for conditions like hernias, gallstones, appendix, and bariatric procedures.",
  painPoints: [
    "Most surgical referrals still come through informal networks, not digital discovery",
    "Patients search for 'laparoscopic surgeon near me' and find your competitors first",
    "Your website doesn't communicate your surgical expertise with enough depth or trust",
    "You have no system for generating patient testimonials or outcome content",
    "Post-diagnosis patients can't easily find information about your specific procedures",
    "Your digital brand doesn't reflect the quality of your surgical outcomes",
  ],
  keyServices: [
    {
      title: "Medical SEO for Surgical Specialties",
      desc: "Rank for condition-specific searches: 'laparoscopic hernia repair [city]', 'gallstone surgery [city]', 'bariatric surgeon India'.",
      href: "/services/advanced-seo-geo",
    },
    {
      title: "Doctor Personal Branding & Authority Content",
      desc: "Educational content positioning you as the surgical expert patients trust. Procedure explainers, patient FAQs, and thought leadership build pre-appointment confidence.",
      href: "/services/personal-branding",
    },
    {
      title: "Google Ads for Surgical Procedures",
      desc: "Capture post-diagnosis patients actively searching for surgical solutions in your city. High-intent targeting for laparoscopic, bariatric, and general surgery procedures.",
      href: "/services/performance-marketing",
    },
    {
      title: "Patient-Converting Website",
      desc: "A surgical practice website that communicates expertise, features procedure information, and makes it simple for referred or searching patients to book.",
      href: "/services/healthcare-website-design",
    },
  ],
  faqs: [
    {
      q: "Can digital marketing increase surgical referrals from GPs and other doctors?",
      a: "Yes, though through different channels than patient-facing marketing. LinkedIn thought leadership, medical community content, and a strong website that other doctors can reference when explaining referrals all build your referral network. We help surgeons develop both patient-facing and professional-facing digital strategies.",
    },
    {
      q: "What digital marketing works best for laparoscopic surgery practices?",
      a: "Google Search Ads and local SEO work very well for laparoscopic surgery because patients are typically post-diagnosis and actively researching surgical options. Educational content explaining laparoscopic vs open surgery, recovery timelines, and procedure-specific FAQs is highly effective for both SEO and patient confidence-building.",
    },
    {
      q: "How do I build a digital presence without appearing to 'advertise' surgery aggressively?",
      a: "Educational content is the answer. Procedure explainers, patient FAQ videos, condition guides, and recovery information all build authority without aggressive selling. This approach aligns with medical ethics guidelines while being highly effective at attracting informed, pre-qualified patients.",
    },
    {
      q: "Is social media relevant for a surgical practice?",
      a: "Yes, though the strategy differs from cosmetic specialties. YouTube and LinkedIn perform strongly for surgical practices — procedure explainer videos and professional thought leadership reach both prospective patients and referring doctors. Educational short-form video on Instagram and Facebook also performs well for general surgical FAQs.",
    },
  ],
};

export default function GeneralSurgeonsPage() {
  return <SpecialtyPage data={data} />;
}
