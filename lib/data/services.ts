export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  heroDesc: string;
  painPoints: string[];
  solutions: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "advanced-seo-geo",
    title: "Advanced SEO & GEO",
    shortTitle: "SEO & GEO",
    tagline: "Get found on Google AND cited by AI search engines",
    description: "We combine advanced medical SEO with Generative Engine Optimization (GEO) — structuring your clinic's content so it ranks on traditional search and gets recommended by ChatGPT, Gemini, and AI Overviews when patients ask health questions.",
    icon: "🔍",
    heroDesc: "Advanced SEO & GEO for healthcare clinics means optimising your practice's online presence to rank in Google's traditional search results AND appear in AI-generated answers from ChatGPT, Gemini, and AI Overviews — so patients find your clinic whether they search by browser or by asking an AI.",
    painPoints: [
      "Your clinic doesn't appear on page one of Google for your core treatments",
      "Competitors with lower quality care outrank you because they invested in SEO",
      "When patients ask AI tools like ChatGPT 'best dermatologist in Bangalore', your name never appears",
      "Your Google Business Profile is incomplete or not optimised for local search",
      "You're spending on ads but getting no long-term organic growth",
      "Content on your site is outdated, thin, and not structured for search intent",
    ],
    solutions: [
      { title: "Medical SEO Audit & Strategy", desc: "Full technical and content audit of your clinic's online presence with a 12-month growth roadmap." },
      { title: "GEO Content Architecture", desc: "We structure your content with answer-first blocks and FAQ schema so AI models cite your clinic in responses." },
      { title: "Local SEO & Google Business", desc: "Optimise your GMB profile, build local citations, and dominate local pack results in your city." },
      { title: "Healthcare Blog & Content", desc: "Monthly doctor-led content targeting high-intent patient queries and building topical authority." },
      { title: "Schema Markup & Technical SEO", desc: "Implement MedicalOrganisation, FAQPage, and Service schema for rich results and AI indexing." },
    ],
    stats: [
      { value: "2.1M+", label: "Instagram views for Aura Cutisurg" },
      { value: "1.57M+", label: "Accounts reached organically" },
      { value: "99.8%", label: "Views from Reels (content-first approach)" },
    ],
    faqs: [
      { q: "How long does healthcare SEO take to show results?", a: "Most clinics see initial traction in 3-4 months, with significant organic traffic growth by month 6-9. Unlike paid ads, SEO compounds over time — every piece of content we create continues working for you long after publication." },
      { q: "What is GEO (Generative Engine Optimisation) for clinics?", a: "GEO (Generative Engine Optimisation) is the practice of structuring your clinic's online content so that AI tools like ChatGPT, Google Gemini, and Perplexity reference and recommend your practice when patients ask health questions. This includes answer-first content blocks, FAQ schema, and explicit entity definitions." },
      { q: "Do you handle Google Business Profile optimisation?", a: "Yes. Google Business Profile is one of the most high-impact local SEO assets for any clinic. We audit, optimise, and maintain your profile including categories, services, Q&As, review management, and regular posts." },
      { q: "Can SEO help me compete with large hospital chains?", a: "Absolutely. Specialist clinics with a clear niche and strong educational content regularly outrank large hospital chains in specific treatment and specialty searches. Our strategy focuses on hyper-local, condition-specific content where independent clinics have a natural advantage." },
      { q: "Is your SEO approach specific to healthcare?", a: "Yes. Healthcare SEO requires adherence to YMYL (Your Money or Your Life) content guidelines set by Google. We ensure all content is medically accurate, E-E-A-T compliant (Experience, Expertise, Authoritativeness, Trustworthiness), and never makes unsubstantiated claims." },
    ],
  },
  {
    slug: "personal-branding",
    title: "Personal Branding & Content Creation",
    shortTitle: "Personal Branding",
    tagline: "Build authority your patients trust before they ever book an appointment",
    description: "We create short-form video, social content, and thought-leadership pieces that position your doctors as go-to experts — turning views into verified patient enquiries.",
    icon: "🎯",
    heroDesc: "Personal branding for healthcare professionals means systematically building your digital reputation as a trusted medical expert through educational content, video, and social media — so patients choose you over competitors based on perceived authority and trust, before they've even contacted your clinic.",
    painPoints: [
      "Patients choose competitors because they appear more credible and expert online",
      "Your social media is inconsistent, generic, and not generating enquiries",
      "You have deep expertise but no strategy to communicate it online",
      "Video content feels overwhelming — you don't know where to start",
      "Your clinic brand feels impersonal, like it could belong to anyone",
      "You're posting without a content strategy, so posts don't build on each other",
    ],
    solutions: [
      { title: "Doctor-Led Content Strategy", desc: "A content calendar built around your medical expertise, patient FAQs, and seasonal health topics." },
      { title: "Short-Form Video Production", desc: "Script, shoot, edit and publish high-quality Reels and Shorts that educate and convert." },
      { title: "Thought Leadership Content", desc: "LinkedIn articles, carousels, and blog posts that establish you as a go-to expert in your specialty." },
      { title: "Visual Brand Identity", desc: "Consistent templates, colour palettes, and brand voice guidelines for all channels." },
      { title: "Analytics & Performance Reporting", desc: "Monthly reports tracking reach, engagement, follower growth, and enquiry attribution." },
    ],
    stats: [
      { value: "2.1M+", label: "Views for Aura Cutisurg in ~45 days" },
      { value: "~1M", label: "Views on a single viral reel" },
      { value: "30+", label: "Short-form pieces created in 45 days" },
    ],
    faqs: [
      { q: "Does personal branding really bring in new patients?", a: "Yes, and the data proves it. Aura Cutisurg Clinic generated 2.1M+ Instagram views and 57 direct patient enquiries through content alone, with only ₹2,004 in supplementary paid spend. Educational doctor-led content builds trust before a patient ever contacts the clinic." },
      { q: "I'm not comfortable on camera — can you still help?", a: "Absolutely. We work with doctors at all comfort levels. We start with a structured coaching session, use simple teleprompter setups, and handle all the scripting and editing. Many of our most effective reels feature doctors at a desk, not in elaborate setups." },
      { q: "How many pieces of content do you produce per month?", a: "Content output is scoped to your package. Entry-level packages include 8-12 pieces monthly. Full-scale authority-building packages include 20-30+ pieces including Reels, carousels, stories, and long-form content." },
      { q: "What platforms do you focus on?", a: "We prioritise Instagram and YouTube Shorts for discovery and reach, LinkedIn for B2B referral networks, and Facebook for local community engagement. Platform prioritisation is always aligned with where your target patient demographic is most active." },
      { q: "Will you need the doctor present for every shoot?", a: "Not always. We design a batch-shooting model — one focused shoot session per month covers 2-4 weeks of content. Between shoots, we create supporting content (carousels, infographics, testimonial posts) that doesn't require doctor presence." },
    ],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortTitle: "Paid Ads",
    tagline: "Stop wasting ad spend on clicks that never become patients",
    description: "Our healthcare-specific Meta and Google Ads strategies target high-intent local searches and demographics, turning every rupee/dollar into measurable appointment bookings.",
    icon: "📈",
    heroDesc: "Performance marketing for healthcare clinics means running scientifically structured Meta (Instagram/Facebook) and Google Ads campaigns that target patients actively searching for your treatments — optimised for appointment bookings, not just clicks or impressions.",
    painPoints: [
      "You've run ads before but got clicks with no real patient bookings",
      "Your cost per lead is too high to justify the ad spend",
      "You're not sure whether Meta Ads or Google Ads is better for your clinic",
      "Your ad creative looks generic and doesn't build trust",
      "You have no way to track which ads are actually generating patients",
      "Ad agencies keep spending your budget without transparent reporting",
    ],
    solutions: [
      { title: "Healthcare-Specific Ad Strategy", desc: "Campaign structure built around patient intent, treatment-level targeting, and local catchment areas." },
      { title: "Trust-First Ad Creative", desc: "Doctor-featured ad creatives, social proof formats, and educational hooks that convert sceptical patients." },
      { title: "Conversion-Optimised Landing Pages", desc: "Dedicated pages for each campaign that remove friction and drive appointment actions." },
      { title: "Budget Efficiency Management", desc: "Rigorous A/B testing, negative keyword management, and daily bid optimisation to maximise ROI." },
      { title: "Transparent Performance Reporting", desc: "Weekly dashboards showing spend, leads, cost per lead, and estimated patient acquisition cost." },
    ],
    stats: [
      { value: "57", label: "Messaging leads for Aura Cutisurg" },
      { value: "₹34.95", label: "Cost per messaging conversation" },
      { value: "₹2,004", label: "Total ad spend to achieve results" },
    ],
    faqs: [
      { q: "What's the minimum ad budget for a healthcare clinic in India?", a: "We recommend a minimum of ₹15,000-₹20,000 per month in ad spend for meaningful data and results. Below this threshold, campaigns don't generate enough volume to optimise effectively. Our management fee is separate from the media spend." },
      { q: "Meta Ads or Google Ads — which is better for my clinic?", a: "It depends on your specialty. Google Ads work well for high-intent searches like 'laparoscopic surgeon near me' or 'best dermatologist Bangalore'. Meta Ads excel for building awareness, retargeting, and specialties where patients need education before booking (cosmetics, weight management, etc.). Most clinics benefit from both." },
      { q: "How do you measure actual patient appointments from ads?", a: "We set up conversion tracking via WhatsApp click events, form submissions, call tracking, and, where possible, CRM integration. This allows us to tie ad spend directly to enquiry volume and patient pipeline." },
      { q: "Do healthcare ads have special restrictions on platforms?", a: "Yes. Meta and Google have healthcare advertising policies. We are experienced in creating compliant ads that don't make prohibited health claims, use proper disclaimers, and stay within platform guidelines — avoiding account suspensions." },
      { q: "How long before we see results from paid ads?", a: "Paid ads can generate enquiries within days of launch. However, 2-4 weeks of campaign data is needed before meaningful optimisation. We consider 90 days a full performance cycle for stable, optimised results." },
    ],
  },
  {
    slug: "healthcare-website-design",
    title: "Healthcare Website Design",
    shortTitle: "Website Design",
    tagline: "Your website is your clinic's first impression — make it convert",
    description: "We design fast, mobile-first, SEO-structured websites built specifically for healthcare practices, designed to build trust and drive appointment bookings from day one.",
    icon: "🌐",
    heroDesc: "Healthcare website design means building a clinical-grade digital presence for your practice — a fast-loading, mobile-optimised site with the right trust signals, SEO structure, and conversion elements to turn website visitors into booked appointments.",
    painPoints: [
      "Your current website looks outdated and doesn't inspire trust in new patients",
      "The site loads slowly on mobile, where most of your patients browse",
      "Visitors can't easily find what they need and leave without booking",
      "Your site isn't optimised for search, so you don't rank for your treatments",
      "There's no clear call-to-action guiding patients toward an appointment",
      "The website was built by a generic agency with no healthcare expertise",
    ],
    solutions: [
      { title: "Healthcare-Focused UX Design", desc: "Patient-centred information architecture that guides visitors from condition awareness to appointment booking." },
      { title: "Mobile-First Development", desc: "Built for the 80%+ of healthcare searches happening on mobile, with fast load times and tap-friendly UI." },
      { title: "Trust Architecture", desc: "Doctor credentials, certifications, patient count, and social proof integrated into every key page." },
      { title: "SEO-Structured Build", desc: "Technical SEO foundations built in from day one: schema markup, page speed, Core Web Vitals compliance." },
      { title: "Appointment Conversion Elements", desc: "Strategic CTAs, WhatsApp integration, contact forms, and booking widgets to maximise conversion." },
    ],
    stats: [
      { value: "< 2s", label: "Target page load time on mobile" },
      { value: "100%", label: "Mobile-responsive across all devices" },
      { value: "Core", label: "Web Vitals compliant build" },
    ],
    faqs: [
      { q: "How is a healthcare website different from a regular business site?", a: "Healthcare websites must build trust at a much higher level — patients are making decisions about their health. This means emphasising doctor credentials, certifications, patient outcomes, and clear, accurate treatment information. It also means adhering to Google's YMYL content standards and medical accuracy requirements." },
      { q: "How long does it take to build a clinic website?", a: "A standard 8-12 page clinic website takes 3-5 weeks from approved design to launch. More complex multi-specialty hospital sites may take 6-10 weeks. We work in clear sprints: design approval → development → content → QA → launch." },
      { q: "Do you provide website hosting and maintenance?", a: "Yes, we offer optional hosting on high-performance servers and ongoing maintenance packages that include monthly security updates, content updates, performance monitoring, and priority support." },
      { q: "Can you redesign my existing website without losing my SEO rankings?", a: "Yes. We conduct a full SEO audit before any migration, preserve all ranking URLs, implement 301 redirects where needed, and rebuild the site's authority signals. SEO continuity is a standard part of our redesign process." },
      { q: "Will patients be able to book appointments directly from the website?", a: "Yes. We integrate appointment scheduling, WhatsApp chat, contact forms, and, where available, direct links to your practice management system. Reducing friction between a patient's visit and their first booking is a core design goal." },
    ],
  },
  {
    slug: "automations-ai-agents",
    title: "Automations & AI Agents",
    shortTitle: "AI Automation",
    tagline: "Never miss a lead again",
    description: "From voice agents and WhatsApp automation to chatbots and lead-nurturing workflows, we automate the busywork so your front desk can focus on patients — not phone tag.",
    icon: "🤖",
    heroDesc: "Healthcare automation and AI agents means deploying intelligent digital systems — WhatsApp bots, voice agents, and automated follow-up workflows — that handle patient enquiries, appointment reminders, lead nurturing, and FAQs around the clock, without adding staff.",
    painPoints: [
      "Leads from ads and social media go cold because follow-up is delayed",
      "Your front desk is overwhelmed with repetitive WhatsApp and phone enquiries",
      "Patients ask the same FAQs hundreds of times, consuming team time",
      "No-shows and missed appointments cost you revenue and slot efficiency",
      "After-hours enquiries are lost because there's no one available to respond",
      "Patient data and enquiry tracking is scattered across WhatsApp, phone notes, and spreadsheets",
    ],
    solutions: [
      { title: "WhatsApp Automation & Chatbot", desc: "Intelligent WhatsApp bots that handle enquiries, send appointment reminders, and qualify patient leads 24/7." },
      { title: "Voice AI Agent", desc: "AI-powered voice agents that answer calls, capture enquiry details, and route to the right team member." },
      { title: "Lead Nurturing Workflows", desc: "Automated email and WhatsApp sequences that keep potential patients engaged from first enquiry to confirmed booking." },
      { title: "Appointment Reminder Systems", desc: "Automated reminders that reduce no-shows and allow easy rescheduling via WhatsApp." },
      { title: "CRM Integration & Reporting", desc: "Connect all touchpoints into a unified patient pipeline with clear visibility on lead status and conversion." },
    ],
    stats: [
      { value: "24/7", label: "Automated patient enquiry handling" },
      { value: "< 2min", label: "Average first-response time with automation" },
      { value: "40%+", label: "Typical reduction in missed enquiries" },
    ],
    faqs: [
      { q: "Is WhatsApp automation HIPAA/DPDP compliant for Indian clinics?", a: "For the Indian market, we follow DPDP (Digital Personal Data Protection) Act 2023 guidelines. Our automation workflows are designed to capture only necessary enquiry data (name, contact, treatment interest) without collecting sensitive health information in automated flows. We advise on all compliance requirements specific to your setup." },
      { q: "Can the WhatsApp bot handle complex medical questions?", a: "Our bots are designed for enquiry handling, appointment scheduling, FAQs, and lead qualification — not medical diagnosis. For complex clinical questions, the bot flags and routes to a human team member. This keeps the automation within ethical and safe boundaries." },
      { q: "How long does it take to set up clinic automation?", a: "A standard WhatsApp automation setup takes 2-3 weeks including workflow design, bot training, testing, and handover. More complex systems with voice agents and CRM integration take 4-6 weeks." },
      { q: "Will the automation replace our reception team?", a: "No — it enhances them. Automation handles the repetitive, high-volume enquiries so your team can focus on higher-value patient interactions. Most clinics find that automation reduces enquiry overload while actually improving the patient experience through faster, consistent responses." },
      { q: "Can automation work with our existing booking system?", a: "Yes, in most cases. We integrate with common practice management and booking systems. Where direct integration isn't available, we build bridge workflows to ensure smooth data flow." },
    ],
  },
];
