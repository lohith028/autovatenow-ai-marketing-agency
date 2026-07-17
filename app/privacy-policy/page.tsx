import { type Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — AutovateNow",
  description: "AutovateNow privacy policy. How we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-8 bg-surface-gray">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-bold text-3xl text-text-primary mb-2">Privacy Policy</h1>
            <p className="text-text-muted text-sm">Last updated: July 2026</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-healthcare">
            <h2>Who We Are</h2>
            <p>AutovateNow (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a digital marketing agency based in Bengaluru, Karnataka, India, specialising in healthcare marketing services. Our website is <a href="https://autovaternow.com">https://autovaternow.com</a>.</p>
            <h2>What Information We Collect</h2>
            <p>When you use our contact forms or book a consultation, we may collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Clinic or practice name</li>
              <li>Medical specialty</li>
              <li>Country / location</li>
            </ul>
            <p>We do <strong>not</strong> collect any Protected Health Information (PHI), patient medical records, or any sensitive health data from patients.</p>
            <h2>How We Use Your Information</h2>
            <p>Information collected through our forms is used solely to:</p>
            <ul>
              <li>Respond to your enquiry or consultation request</li>
              <li>Send relevant information about our services (where you have consented)</li>
              <li>Improve our services and website</li>
            </ul>
            <h2>Data Storage and Security</h2>
            <p>Your personal data is stored securely. We implement reasonable technical and organisational measures to protect against unauthorised access, loss, or misuse. We do not sell or share your personal data with third parties except where required for service delivery (e.g., email providers) or legal compliance.</p>
            <h2>India DPDP Act Compliance</h2>
            <p>We comply with India's Digital Personal Data Protection (DPDP) Act 2023. You have the right to access, correct, or request deletion of your personal data by contacting us at the details below.</p>
            <h2>Cookies</h2>
            <p>Our website may use basic cookies for analytics and functionality. We do not use advertising cookies or retargeting pixels on this site without disclosure.</p>
            <h2>Third-Party Services</h2>
            <p>Our website may include links to third-party services (Google Analytics, form tools). These services have their own privacy policies, which we encourage you to review.</p>
            <h2>Contact Us</h2>
            <address className="not-italic text-text-secondary leading-relaxed">
            <p>Email: <a href="mailto:lohith.l@autovatenow.com" className="text-brand-blue hover:underline">lohith.l@autovatenow.com</a><br />
            Phone: +91 9885407925<br />
            Location: E-city, Bengaluru, Karnataka, India</p>
            </address>
            <p className="text-xs text-text-muted mt-8">[PLACEHOLDER — Have this policy reviewed by a qualified legal professional before publishing to production. This is a preliminary draft for initial launch.]</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
