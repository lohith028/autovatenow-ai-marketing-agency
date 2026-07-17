import { type Metadata } from "next";
import SpecialtyPage, { type SpecialtyData } from "@/components/templates/SpecialtyPage";

export const metadata: Metadata = {
  title: "Digital Marketing for Dermatology & Skin Clinics in India",
  description: "Specialist digital marketing for dermatology, trichology, and cosmetology clinics. SEO, Instagram content, and targeted ads to grow your skin clinic. Results: 2.1M+ views for Aura Cutisurg.",
  alternates: { canonical: "https://autovaternow.com/who-we-help/dermatology-skin-clinics" },
};

const data: SpecialtyData = {
  slug: "dermatology-skin-clinics",
  title: "Dermatology & Skin Clinics",
  heroDesc:
    "Digital marketing for dermatology and skin clinics means building a trusted, visible online presence that educates patients about skin, hair, and cosmetic treatments — and converts that trust into booked consultations. Dermatology is one of the highest-performing healthcare niches on social media, with visual content driving exceptional organic reach.",
  painPoints: [
    "Patients choose competitors because they appear more credible and expert online",
    "Instagram posts get low engagement because they're generic clinic promotions, not educational content",
    "Your website doesn't rank for treatment-specific searches like 'acne scar treatment Bangalore'",
    "You're not appearing when AI tools recommend dermatologists in your city",
    "Cosmetic treatment enquiries are inconsistent and unpredictable",
    "Competitor clinics with lower clinical quality outrank you because of SEO investment",
  ],
  keyServices: [
    {
      title: "Doctor-Led Content & Reels",
      desc: "Short-form video strategy featuring your doctors explaining skin conditions, treatments, and patient FAQs. The #1 driver of trust and patient enquiries in dermatology.",
      href: "/services/personal-branding",
    },
    {
      title: "Medical SEO & GEO",
      desc: "Rank for treatment-specific local searches and appear in AI recommendations for dermatology queries in your city.",
      href: "/services/advanced-seo-geo",
    },
    {
      title: "Performance Marketing",
      desc: "Instagram and Google Ads targeting patients actively searching for acne, pigmentation, hair fall, and cosmetic treatments in your area.",
      href: "/services/performance-marketing",
    },
    {
      title: "Clinic Website Design",
      desc: "A trust-first website that showcases your doctors' expertise, features before/after work (with consent), and converts visitors into bookings.",
      href: "/services/healthcare-website-design",
    },
  ],
  stats: [
    { value: "2.1M+", label: "Instagram views for Aura Cutisurg Clinic" },
    { value: "~1M", label: "Views on single viral doctor reel" },
    { value: "57", label: "Patient leads from \u20b92,004 ad spend" },
  ],
  showAuraCallout: true,
  faqs: [
    {
      q: "How does Instagram marketing work for a dermatology clinic?",
      a: "Dermatology is one of the strongest-performing healthcare niches on Instagram because skin transformation is inherently visual. Doctor-led educational Reels about common conditions (acne, hair fall, pigmentation, warts) consistently reach hundreds of thousands of non-followers organically. The key is educational content featuring the actual doctor — not generic stock imagery or clinic promotion posts.",
    },
    {
      q: "What search terms should a skin clinic rank for on Google?",
      a: "The highest-value search terms for dermatology clinics combine treatment and location: 'dermatologist in [city]', 'acne treatment [city]', 'hair fall treatment clinic [city]', 'best skin clinic for pigmentation [city]'. We prioritise treatment-specific, intent-driven searches over broad vanity terms.",
    },
    {
      q: "Can digital marketing help my cosmetic treatment revenue specifically?",
      a: "Yes. Cosmetic treatments (Botox, fillers, chemical peels, laser treatments) are among the highest-converting categories for digital marketing because patients are self-directed, research extensively, and make decisions without GP referral. Instagram, targeted ads, and a strong website work very well for cosmetic treatment enquiry generation.",
    },
    {
      q: "How long before we see patient enquiries from content marketing?",
      a: "With a structured content strategy, most dermatology clinics see meaningful engagement within 30 days and direct patient enquiries within 60-90 days. Aura Cutisurg Clinic achieved 2.1M+ views within 45 days of launching a structured doctor-led content programme.",
    },
    {
      q: "Is a trichology or cosmetology sub-specialty difficult to market?",
      a: "No — sub-specialties often have an advantage. Trichology (hair and scalp) and cosmetology content performs very well because the audience is highly engaged and the topics (hair fall, scalp conditions, cosmetic skin treatments) are perennial search and content interests.",
    },
  ],
};

export default function DermatologyPage() {
  return <SpecialtyPage data={data} />;
}
