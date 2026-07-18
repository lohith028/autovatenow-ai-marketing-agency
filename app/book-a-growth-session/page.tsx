"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Send } from "lucide-react";

const specialties = [
  "Dermatology / Skin Clinic",
  "Dental Clinic",
  "General / Laparoscopic Surgery",
  "Gynaecology",
  "Orthopaedics",
  "Ophthalmology",
  "Multi-Specialty Hospital",
  "Other Specialty",
];

const services = [
  "Advanced SEO & GEO",
  "Personal Branding & Content",
  "Performance Marketing (Ads)",
  "Healthcare Website Design",
  "Automations & AI Agents",
  "Full-Stack Growth Package",
  "Not sure yet",
];

export default function BookAGrowthSessionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("https://hook.us2.make.com/rl9cieq1yog3yaf88rr65a1e2twre1ls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-mid pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
              Book a Free Growth Session
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Tell us about your practice. We'll review your current digital presence and come back with a clear, honest assessment of what's needed to grow.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_360px] gap-10">
              {/* Form */}
              <div className="bg-white rounded-2xl border border-border p-8 shadow-card">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-text-primary mb-3">We've received your request!</h2>
                    <p className="text-text-secondary leading-relaxed">
                      Our team will review your details and reach out within 1 business day to schedule your growth session. Check your email for a confirmation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} id="growth-session-form">
                    <h2 className="font-heading font-bold text-xl text-text-primary mb-6">Your details</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="name">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Dr. / Your name"
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-surface-gray placeholder:text-text-muted"
                        />
                      </div>
                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@yourclinic.com"
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-surface-gray placeholder:text-text-muted"
                        />
                      </div>
                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="phone">Phone Number *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+91 98XXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-surface-gray placeholder:text-text-muted"
                        />
                      </div>
                      {/* Clinic Name */}
                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="clinic-name">Clinic / Hospital Name *</label>
                        <input
                          id="clinic-name"
                          name="clinicName"
                          type="text"
                          required
                          placeholder="Your clinic name"
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-surface-gray placeholder:text-text-muted"
                        />
                      </div>
                      {/* Specialty */}
                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="specialty">Medical Specialty *</label>
                        <select
                          id="specialty"
                          name="specialty"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-surface-gray"
                        >
                          <option value="">Select your specialty</option>
                          {specialties.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      {/* Country */}
                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="country">Country</label>
                        <select
                          id="country"
                          name="country"
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-surface-gray"
                        >
                          <option value="India">India</option>
                          <option value="UAE">UAE</option>
                          <option value="Singapore">Singapore</option>
                          <option value="UK">UK</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      {/* Services */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="service-interest">Service you're most interested in</label>
                        <select
                          id="service-interest"
                          name="serviceInterest"
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-surface-gray"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-text-primary mb-1.5" htmlFor="message">Tell us briefly about your current situation</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="E.g. We're a dermatology clinic in Bangalore with no social media presence and we'd like to generate more patient enquiries online..."
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-surface-gray placeholder:text-text-muted resize-none"
                        />
                      </div>
                    </div>

                    <div className="mt-2 text-xs text-text-muted">
                      We do not collect any patient health information (PHI). This form captures only contact and business details.
                    </div>

                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-cta hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} /> Book My Free Growth Session
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Sidebar Trust */}
              <div className="space-y-5">
                <div className="bg-surface-gray rounded-2xl border border-border p-6">
                  <h3 className="font-heading font-bold text-base text-text-primary mb-4">What happens next?</h3>
                  <ol className="space-y-4">
                    {[
                      { n: "1", t: "We review your details", d: "Within 1 business day, our team reviews your clinic's current digital presence." },
                      { n: "2", t: "We schedule a call", d: "We reach out to confirm a 30-45 minute growth session at a time that suits you." },
                      { n: "3", t: "You get a clear plan", d: "We walk you through your digital gaps and outline a practical growth strategy — no obligation." },
                    ].map((step) => (
                      <li key={step.n} className="flex gap-3">
                        <div className="w-7 h-7 rounded-full bg-brand-blue flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{step.n}</div>
                        <div>
                          <div className="text-sm font-semibold text-text-primary">{step.t}</div>
                          <div className="text-xs text-text-secondary mt-0.5 leading-relaxed">{step.d}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-white rounded-2xl border border-border p-6">
                  <h3 className="font-heading font-bold text-base text-text-primary mb-4">This session is free because:</h3>
                  <ul className="space-y-3">
                    {[
                      "We only work with practices where we're confident we can deliver results",
                      "The audit helps us understand your specific challenges before proposing anything",
                      "We believe in showing value before asking for commitment",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <CheckCircle size={14} className="text-brand-blue mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-gold-light rounded-xl border border-brand-gold/20 p-5 text-center">
                  <div className="font-heading font-bold text-sm text-brand-gold-dark mb-1">No commitment required</div>
                  <p className="text-xs text-text-secondary">The growth session is 100% free with no obligation to proceed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
