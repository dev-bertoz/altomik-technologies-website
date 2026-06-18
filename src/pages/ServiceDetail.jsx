import { useParams, Link, Navigate } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'
import { ArrowLeft, Check, ArrowRight, MessageSquare } from 'lucide-react'
import { SERVICES_DATA } from '@/components/sections/ServicesGrid'
import ServiceIcon from '@/components/ui/ServiceIcon'
import CTABanner from '@/components/sections/CTABanner'
import Animate from '@/components/ui/Animate'

const SERVICE_DETAILS = {
  consulting: {
    tagline: 'Your technology, always running.',
    heroSub: 'Managed IT support tailored for East African SMEs — from day-to-day helpdesk to strategic technology advisory.',
    whatWeOffer: [
      { title: '24/7 Helpdesk & Support', desc: 'Round-the-clock support for your team. When something breaks, we fix it fast — minimum disruption, maximum uptime.' },
      { title: 'Network Management', desc: 'Proactive monitoring, configuration, and management of your entire network infrastructure, on-site or remote.' },
      { title: 'IT Audits & Strategy', desc: 'A comprehensive review of your technology estate with a clear roadmap for improvement and cost optimisation.' },
      { title: 'Vendor Management', desc: 'We manage your relationships with software vendors, ISPs, and hardware suppliers on your behalf.' },
      { title: 'User Device Management', desc: 'Provisioning, patching, and managing laptops, desktops, and mobile devices across your entire organisation.' },
      { title: 'Technology Procurement', desc: 'We source and procure hardware and software at competitive prices, ensuring you get the right tools for the job.' },
    ],
    process: [
      { step: '1', title: 'IT Audit', desc: 'We assess your current environment — hardware, software, network, and security posture.' },
      { step: '2', title: 'Onboarding', desc: 'We document your systems, set up monitoring, and establish support channels.' },
      { step: '3', title: 'Active Support', desc: 'Your team gets access to our helpdesk and our engineers begin proactive management.' },
      { step: '4', title: 'Monthly Reviews', desc: 'Regular reporting on incidents, performance, and technology recommendations.' },
    ],
    faqs: [
      { q: 'What response time can we expect?', a: 'Critical issues: under 1 hour. Standard issues: under 4 hours. General queries: same business day.' },
      { q: 'Do you support remote teams?', a: 'Yes — we support both on-site and fully remote teams across East Africa using remote management tools.' },
      { q: 'Is there a minimum contract period?', a: 'We offer flexible monthly rolling contracts as well as discounted annual agreements.' },
    ],
  },
  software: {
    tagline: 'Software that solves real problems.',
    heroSub: 'Custom web and mobile applications, ERP systems, and SaaS products — built for scale, performance, and your business.',
    whatWeOffer: [
      { title: 'Web Applications', desc: 'Full-stack web apps built with modern frameworks — React, Next.js, Node.js — designed for performance and scale.' },
      { title: 'Mobile Apps (iOS & Android)', desc: 'Native and cross-platform mobile applications using React Native, with full backend integration.' },
      { title: 'ERP & CRM Systems', desc: 'Custom enterprise resource planning and customer relationship management systems tailored to your workflows.' },
      { title: 'SaaS Products', desc: 'End-to-end SaaS product development — from architecture and MVP to launch and ongoing iteration.' },
      { title: 'API Development & Integration', desc: 'RESTful and GraphQL APIs, third-party integrations (payment gateways, SMS, logistics APIs, and more).' },
      { title: 'Local API Integrations', desc: 'Specialists in Kenya-specific integrations: Lipa Na Mpesa, KRA eTIMS, SHA, Bulk SMS, Bulk WhatsApp, and SEO Dashboards — so your software is market-ready from day one.', integrations: ['Lipa Na Mpesa', 'KRA eTIMS', 'Bulk SMS', 'Bulk WhatsApp', 'SEO Dashboards', 'SHA Integration'] },
      { title: 'Legacy System Modernisation', desc: 'Migrate and modernise legacy systems without disrupting business operations.' },
    ],
    process: [
      { step: '1', title: 'Discovery & Scoping', desc: 'We understand your requirements, define scope, and produce a detailed technical specification.' },
      { step: '2', title: 'Design & Architecture', desc: 'UI/UX design and system architecture — reviewed and approved by you before a single line of code is written.' },
      { step: '3', title: 'Agile Development', desc: 'Iterative sprints with regular demos. You see the product being built, not just the final result.' },
      { step: '4', title: 'Testing & Deployment', desc: 'Rigorous QA, staging environment testing, and smooth production deployment with zero-downtime releases.' },
    ],
    faqs: [
      { q: 'How long does a typical project take?', a: 'MVP projects: 6–12 weeks. Full enterprise applications: 3–6 months. We provide detailed timelines in every proposal.' },
      { q: 'Who owns the source code?', a: 'You do — 100%. All source code and IP are transferred to you at project completion.' },
      { q: 'Do you provide post-launch support?', a: 'Yes. All projects include a 3-month post-launch support period. Extended support plans available.' },
    ],
  },
  cybersecurity: {
    tagline: 'Security that never sleeps.',
    heroSub: 'Proactive cybersecurity for East African SMEs — threat assessments, penetration testing, monitoring, and staff training.',
    whatWeOffer: [
      { title: 'Security Audits', desc: 'A comprehensive assessment of your digital estate — identifying vulnerabilities before attackers do.' },
      { title: 'Penetration Testing', desc: 'Authorised ethical hacking to test your defences. We attack your systems so criminals cannot.' },
      { title: 'Staff Security Training', desc: 'Human error causes 90% of breaches. We train your team to recognise and resist social engineering and phishing.' },
      { title: 'Incident Response', desc: '24/7 incident response — if you are breached, we help you contain the damage, recover, and prevent recurrence.' },
      { title: 'Compliance Guidance', desc: "Navigate Kenya's Data Protection Act, ISO 27001, and PCI-DSS with expert advisory support." },
      { title: 'Continuous Monitoring', desc: 'SIEM-powered 24/7 monitoring and alerting so threats are caught in real time.' },
    ],
    process: [
      { step: '1', title: 'Security Assessment', desc: 'We audit your current security posture — systems, processes, and people.' },
      { step: '2', title: 'Risk Prioritisation', desc: 'We rank findings by severity and business impact and produce a clear remediation roadmap.' },
      { step: '3', title: 'Remediation & Hardening', desc: 'We implement security controls, patch vulnerabilities, and harden your environment.' },
      { step: '4', title: 'Ongoing Monitoring', desc: 'Continuous monitoring, quarterly assessments, and regular staff training to maintain your posture.' },
    ],
    faqs: [
      { q: 'Do you work with businesses that have already been breached?', a: 'Yes. Incident response is one of our core services. Contact us immediately if you suspect a breach.' },
      { q: 'What compliance standards do you support?', a: 'Kenya Data Protection Act 2019, ISO 27001, PCI-DSS, and SOC 2 readiness.' },
      { q: 'How often should a penetration test be done?', a: 'We recommend at minimum annually, and after any major system changes or incidents.' },
    ],
  },
  cloud: {
    tagline: 'Your infrastructure, elevated.',
    heroSub: 'Cloud strategy, migration, and fully managed cloud operations on AWS, Azure, and Google Cloud.',
    whatWeOffer: [
      { title: 'Cloud Strategy & Architecture', desc: 'We design cloud architectures that are secure, cost-efficient, and aligned to your business goals.' },
      { title: 'Cloud Migration', desc: 'Lift-and-shift, re-platforming, or full re-architecture — we handle migrations of any complexity with zero downtime.' },
      { title: 'Managed Cloud Operations', desc: 'Ongoing management of your cloud environment — monitoring, patching, scaling, and cost optimisation.' },
      { title: 'Cost Optimisation', desc: 'We audit your cloud spend and implement rightsizing and reserved instances — typically 20–40% reduction.' },
      { title: 'Disaster Recovery', desc: 'Cloud-based backup and disaster recovery solutions ensuring your business can recover from any outage.' },
      { title: 'Hybrid Cloud Setup', desc: 'Connecting on-premises infrastructure with cloud services for a seamless hybrid environment.' },
    ],
    process: [
      { step: '1', title: 'Cloud Readiness Assessment', desc: 'Evaluate your current infrastructure and define the optimal cloud strategy.' },
      { step: '2', title: 'Architecture Design', desc: 'Design the target cloud architecture — reviewed and approved before migration begins.' },
      { step: '3', title: 'Migration Execution', desc: 'Phased migration with comprehensive testing at each stage. Zero production downtime.' },
      { step: '4', title: 'Managed Operations', desc: 'Ongoing cloud management, monitoring, security, and monthly cost reporting.' },
    ],
    faqs: [
      { q: 'Which cloud platforms do you support?', a: 'AWS, Microsoft Azure, and Google Cloud Platform. We are platform-agnostic and recommend based on your needs.' },
      { q: 'Will migration cause downtime?', a: 'We design migrations to achieve zero production downtime using blue-green deployments and phased rollouts.' },
      { q: 'Can you manage our existing cloud environment?', a: 'Yes — we take over management of existing AWS, Azure, or GCP environments and optimise from day one.' },
    ],
  },
  ai: {
    tagline: 'Intelligence built into your business.',
    heroSub: 'AI-powered analytics, automation, and intelligent integrations that give your team an unfair competitive advantage.',
    whatWeOffer: [
      { title: 'Business Intelligence Dashboards', desc: 'Real-time dashboards connecting all your data sources — giving leadership the insights to make faster, better decisions.' },
      { title: 'Process Automation', desc: 'Identify and automate repetitive workflows — from document processing to reporting — saving hours every week.' },
      { title: 'AI Model Integration', desc: 'Integrate large language models, computer vision, and ML models into your products and internal tools.' },
      { title: 'Data Pipelines & Warehousing', desc: 'Build the data infrastructure that makes analytics and AI possible — ETL pipelines, data lakes, and warehouses.' },
      { title: 'Predictive Analytics', desc: 'Forecast demand, churn, and business performance using machine learning models trained on your data.' },
      { title: 'Chatbots & Conversational AI', desc: 'Intelligent customer-facing and internal chatbots powered by modern LLMs, trained on your business context.' },
    ],
    process: [
      { step: '1', title: 'Data Discovery', desc: 'We audit your existing data — quality, structure, and availability — to establish AI/analytics feasibility.' },
      { step: '2', title: 'Use Case Definition', desc: 'We identify the highest-value AI and analytics use cases for your specific business and prioritise them.' },
      { step: '3', title: 'Build & Integrate', desc: 'We build and integrate the solution — dashboards, models, or automation flows — iteratively with your team.' },
      { step: '4', title: 'Monitor & Improve', desc: 'AI systems improve over time. We monitor performance, retrain models, and continuously deliver more value.' },
    ],
    faqs: [
      { q: 'Do we need a lot of data to get started?', a: "Not necessarily. We assess your data and identify what's actionable today — even smaller datasets can drive significant value." },
      { q: 'Can you integrate with our existing tools?', a: 'Yes. We integrate with common business tools including Google Workspace, Microsoft 365, Xero, QuickBooks, and more.' },
      { q: 'What is the ROI on AI projects?', a: 'Varies by use case, but our clients typically see 3–10x ROI within 12 months from process automation alone.' },
    ],
  },
  webdesign: {
    tagline: 'Designs that convert and inspire.',
    heroSub: 'Beautiful, fast, conversion-focused websites and digital interfaces — designed for your brand, built for your users.',
    whatWeOffer: [
      { title: 'Corporate Websites', desc: 'Professional, brand-aligned websites that make the right first impression with every visitor.' },
      { title: 'E-commerce Websites', desc: 'Fully functional online stores with M-Pesa integration, inventory management, and smooth checkout flows.' },
      { title: 'Landing Pages', desc: 'High-converting single-page designs built to turn visitors into leads or customers.' },
      { title: 'UI/UX Design', desc: 'User research, wireframing, and interface design that puts your users first and your conversion rate second.' },
      { title: 'Wireframing & Prototyping', desc: 'Interactive prototypes you can test with real users before investing in full development.' },
      { title: 'Website Redesign', desc: 'Transform an outdated website into a modern, fast, and effective digital presence.' },
    ],
    process: [
      { step: '1', title: 'Discovery', desc: 'We learn about your brand, goals, audience, and competition before designing anything.' },
      { step: '2', title: 'Wireframes', desc: 'Low-fidelity wireframes to agree on structure and content hierarchy before visual design begins.' },
      { step: '3', title: 'Visual Design', desc: 'Full high-fidelity designs in Figma, reviewed and refined with your team.' },
      { step: '4', title: 'Build & Launch', desc: 'Pixel-perfect development and a smooth handoff or deployment by our engineering team.' },
    ],
    faqs: [
      { q: 'Do you build on WordPress or custom code?', a: 'Both — we recommend based on your needs. Complex or unique requirements get custom builds; content-heavy sites often suit WordPress.' },
      { q: 'Is M-Pesa integration included?', a: 'Yes — M-Pesa Daraja API integration is available on all e-commerce and payment-enabled projects.' },
      { q: 'Do you handle hosting?', a: 'Yes. We can manage hosting, domain, SSL, and ongoing maintenance as part of a support retainer.' },
    ],
  },
  mobile: {
    tagline: 'Apps your users will love.',
    heroSub: 'Native and cross-platform Android & iOS apps built for performance, usability, and real business impact.',
    whatWeOffer: [
      { title: 'Android Development', desc: 'Native Android apps built in Kotlin/Java or cross-platform using React Native — optimised for the diverse Android device landscape in East Africa.' },
      { title: 'iOS Development', desc: 'Polished iOS applications built to Apple standards, from concept through App Store submission.' },
      { title: 'Cross-Platform Apps', desc: 'One codebase, two platforms — React Native apps that deliver near-native performance on both Android and iOS.' },
      { title: 'M-Pesa & Payment Integration', desc: 'Full Daraja API integration, in-app purchases, and payment gateway connectivity built directly into your app.' },
      { title: 'Push Notifications', desc: 'Intelligent push notification systems to keep your users engaged and informed.' },
      { title: 'App Store Submission', desc: 'We handle the full submission process for both Google Play and Apple App Store, including compliance and review.' },
    ],
    process: [
      { step: '1', title: 'Requirements & Scope', desc: 'Define features, target platform, and user journeys before any design or development begins.' },
      { step: '2', title: 'UI/UX Design', desc: 'Mobile-first interface designs optimised for touch, performance, and your target users.' },
      { step: '3', title: 'Development & Testing', desc: 'Agile development with device testing on real Android and iOS hardware across multiple screen sizes.' },
      { step: '4', title: 'Launch & Support', desc: 'App store submission, launch support, and ongoing maintenance and feature updates.' },
    ],
    faqs: [
      { q: 'Should we build native or cross-platform?', a: 'For most SME use cases, React Native cross-platform is the best balance of cost, speed, and quality. We will advise based on your specific needs.' },
      { q: 'How long does app development take?', a: 'A standard MVP mobile app takes 8–14 weeks from kickoff to app store submission.' },
      { q: 'Can you add M-Pesa payments to an existing app?', a: 'Yes — we can integrate M-Pesa Daraja API into any existing Android or iOS application.' },
    ],
  },
  digital: {
    tagline: 'Growth you can measure.',
    heroSub: 'Data-driven digital marketing, SEO, and social strategy that gets your business found — and your visitors converted.',
    whatWeOffer: [
      { title: 'Search Engine Optimisation (SEO)', desc: 'Technical SEO, content strategy, and link building that gets your website ranking on Google for the searches that matter.' },
      { title: 'Google Ads (PPC)', desc: 'Targeted Google Search and Display campaigns that deliver qualified traffic with measurable ROI.' },
      { title: 'Meta Ads (Facebook & Instagram)', desc: 'Audience-targeted social advertising on Facebook and Instagram, managed for maximum conversion.' },
      { title: 'Social Media Management', desc: 'Content creation, scheduling, and community management across LinkedIn, Facebook, Instagram, and X.' },
      { title: 'Email Marketing', desc: 'Campaign design, list management, and automated email sequences that nurture leads and retain customers.' },
      { title: 'Analytics & Reporting', desc: 'Monthly performance reports with clear metrics — traffic, leads, conversions, and ROI — so you always know what is working.' },
    ],
    process: [
      { step: '1', title: 'Audit & Strategy', desc: 'We audit your current online presence and build a tailored digital marketing strategy.' },
      { step: '2', title: 'Setup & Launch', desc: 'Campaigns, tracking, and analytics set up correctly from day one.' },
      { step: '3', title: 'Optimise', desc: 'Continuous A/B testing, bid management, and content refinement to improve performance every month.' },
      { step: '4', title: 'Report & Scale', desc: 'Monthly reporting with clear KPIs, and scaling budget into what is working.' },
    ],
    faqs: [
      { q: 'How long before we see results from SEO?', a: 'SEO typically takes 3–6 months to show significant results. Paid advertising (Google/Meta Ads) can generate results within days.' },
      { q: 'What budget do we need for ads?', a: 'We recommend a minimum of KES 30,000/month in ad spend for meaningful results, plus our management fee.' },
      { q: 'Do you create the content too?', a: 'Yes — copywriting, graphic design, and video scripts are available as part of our full-service packages.' },
    ],
  },
  graphic: {
    tagline: 'Design that tells your story.',
    heroSub: 'Professional brand identities, logos, and marketing visuals that make your business impossible to ignore.',
    whatWeOffer: [
      { title: 'Logo Design & Brand Identity', desc: 'From concept to final files — logos designed to work across print, digital, and signage, with full brand guidelines.' },
      { title: 'Brand Style Guidelines', desc: 'A complete brand manual covering colour palettes, typography, logo usage, and tone of voice so your brand is consistent everywhere.' },
      { title: 'Social Media Graphics', desc: 'Post templates, story designs, cover images, and ad creatives sized and optimised for every platform.' },
      { title: 'Marketing Materials', desc: 'Flyers, posters, brochures, and event materials designed for print and digital distribution.' },
      { title: 'Email & Newsletter Templates', desc: 'On-brand HTML email templates and newsletter designs that work across all major email clients.' },
      { title: 'Packaging & Label Design', desc: 'Product packaging and label designs that stand out on the shelf and communicate your brand clearly.' },
    ],
    process: [
      { step: '1', title: 'Discovery', desc: 'We learn about your brand, audience, and design preferences through a brief questionnaire and call.' },
      { step: '2', title: 'Concepts', desc: 'We present 2–3 initial design concepts for your review and feedback.' },
      { step: '3', title: 'Refinement', desc: 'We refine your chosen concept based on feedback until it is exactly right.' },
      { step: '4', title: 'Final Delivery', desc: 'All final files delivered in every format you need — PNG, SVG, PDF, and editable source files.' },
    ],
    faqs: [
      { q: 'How many revision rounds are included?', a: 'All packages include at least 3 revision rounds. We keep going until you are happy.' },
      { q: 'What file formats will I receive?', a: 'You receive all source files (AI/PSD) plus export-ready PNG, SVG, PDF, and JPEG formats.' },
      { q: 'Can you match an existing brand style?', a: 'Absolutely — if you have existing brand elements, we design within and extend your current identity.' },
    ],
  },
  profile: {
    tagline: 'Your business, beautifully presented.',
    heroSub: 'Compelling company profiles, brochures, and corporate documents that open doors and close deals.',
    whatWeOffer: [
      { title: 'Company Profile Design & Writing', desc: 'Full design and copywriting for a professional company profile that captures your story, services, and credibility.' },
      { title: 'Corporate Brochures', desc: 'Tri-fold, bi-fold, or multi-page brochures that communicate your value proposition clearly and professionally.' },
      { title: 'Pitch Deck Design', desc: 'Investor-ready and client pitch decks that are visually compelling and structured to persuade.' },
      { title: 'Annual Reports', desc: 'End-of-year reports combining data visualisation, narrative, and design to communicate your results.' },
      { title: 'Product & Service Catalogues', desc: 'Detailed catalogues for your product range or service offerings, designed for both print and digital distribution.' },
      { title: 'Capability Statements', desc: 'One-page and multi-page capability statements for tenders, RFPs, and government contracts.' },
    ],
    process: [
      { step: '1', title: 'Brief & Content', desc: 'We gather information about your company, services, and objectives — and help you write the content if needed.' },
      { step: '2', title: 'Structure & Layout', desc: 'We propose a document structure and layout approach for your approval.' },
      { step: '3', title: 'Design', desc: 'Full design using your brand colours, fonts, and imagery.' },
      { step: '4', title: 'Delivery', desc: 'Print-ready PDF and editable source files delivered, ready to send or print.' },
    ],
    faqs: [
      { q: 'Do you write the content or do I provide it?', a: 'Either — we can work with content you provide, or offer a full copywriting service as part of the package.' },
      { q: 'Can I print the profile myself?', a: 'Yes — we deliver print-ready PDF files you can print anywhere, or we can arrange professional printing for you.' },
      { q: 'How long does it take?', a: 'A standard company profile takes 5–7 business days from receiving all content and brand assets.' },
    ],
  },
  print: {
    tagline: 'Your brand, printed to perfection.',
    heroSub: 'High-quality print and branded merchandise — designed professionally, produced fast, delivered to your door.',
    whatWeOffer: [
      { title: 'Business Cards', desc: 'Premium business cards in a range of finishes — matte, gloss, soft-touch, and spot UV — that make a lasting first impression.' },
      { title: 'Flyers & Brochures', desc: 'Full-colour A4, A5, and DL flyers and brochures printed on quality stock for marketing campaigns and events.' },
      { title: 'Letterheads & Envelopes', desc: 'Branded stationery sets that bring professionalism to every piece of correspondence you send.' },
      { title: 'Vehicle Branding & Signage', desc: 'Car wraps, van graphics, office signage, and outdoor banners — designed and produced for maximum impact.' },
      { title: 'Banners & Pull-up Stands', desc: 'Exhibition banners, pull-up stands, and event signage that carry your brand into every room.' },
      { title: 'Branded Merchandise', desc: 'T-shirts, polo shirts, mugs, pens, notebooks, and corporate gifts printed with your brand for staff and clients.' },
    ],
    process: [
      { step: '1', title: 'Order & Brief', desc: 'Tell us what you need — quantity, size, finish, and any design requirements.' },
      { step: '2', title: 'Design', desc: 'We create or adapt your design to production-ready artwork, then send a digital proof for approval.' },
      { step: '3', title: 'Print Production', desc: 'Your order goes to print with our trusted print partners, on schedule.' },
      { step: '4', title: 'Delivery', desc: 'Printed items collected or delivered directly to you within the agreed turnaround time.' },
    ],
    faqs: [
      { q: 'What is the minimum order quantity for business cards?', a: 'We print from as few as 50 cards. Larger quantities bring the unit cost down significantly.' },
      { q: 'How long does print production take?', a: 'Standard business cards: 2–3 business days. Banners and signage: 3–5 days. Rush options available.' },
      { q: 'Can I provide my own design files?', a: 'Yes — if you have print-ready artwork, we check it and send directly to print. No design fee charged.' },
    ],
  },
}

function FAQ({ items, dark }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <Animate key={i} variant="fade-up" delay={i * 80}>
          <div className={`border rounded-xl p-5 transition-colors hover:border-gold-500/25 ${dark ? 'bg-navy-700 border-white/8' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MessageSquare size={11} className="text-gold-500" />
              </div>
              <div>
                <p className={`font-heading font-bold text-sm mb-2 ${dark ? 'text-white' : 'text-navy'}`}>{item.q}</p>
                <p className={`text-sm leading-relaxed ${dark ? 'text-white/50' : 'text-slate-500'}`}>{item.a}</p>
              </div>
            </div>
          </div>
        </Animate>
      ))}
    </div>
  )
}

export default function ServiceDetail() {
  const { dark } = useTheme()
  const { id } = useParams()
  const service = SERVICES_DATA.find((s) => s.id === id)
  const detail = SERVICE_DETAILS[id]

  if (!service || !detail) return <Navigate to="/services" replace />

  const others = SERVICES_DATA.filter((s) => s.id !== id).slice(0, 4)

  return (
    <>
      {/* Back nav */}
      <div className={`pt-20 pb-0 px-4 sm:px-6 lg:px-8 border-b ${dark ? 'bg-navy border-white/8' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto py-4">
          <Link to="/services" className={`inline-flex items-center gap-2 text-sm font-heading font-medium transition-colors hover:text-gold-500 ${dark ? 'text-white/50' : 'text-slate-400'}`}>
            <ArrowLeft size={14} /> Back to Services
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className={`${dark ? 'bg-navy' : 'bg-white'} pb-16 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">
            <Animate variant="fade-right">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-500">
                  <ServiceIcon type={service.id} className="w-6 h-6" />
                </div>
                {service.tag && (
                  <span className="bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                )}
              </div>
              <h1 className={`font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
                {service.title}
              </h1>
              <p className="text-gold-500 font-heading font-semibold text-lg mb-4 italic">
                "{detail.tagline}"
              </p>
              <p className={`text-base leading-relaxed mb-8 max-w-lg ${dark ? 'text-white/55' : 'text-slate-500'}`}>
                {detail.heroSub}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get a quote <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className={`inline-flex items-center gap-2 border font-heading font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg transition-all hover:border-gold-500 hover:text-gold-500 ${dark ? 'border-white/20 text-white' : 'border-slate-300 text-navy'}`}>
                  Book consultation
                </Link>
              </div>
            </Animate>

            {/* Pricing card */}
            <Animate variant="fade-left">
              <div className={`border border-gold-500/20 rounded-2xl p-8 ${dark ? 'bg-navy-700' : 'bg-slate-50'}`}>
                <p className="font-heading font-bold text-xs tracking-widest uppercase text-gold-500 mb-2">Pricing</p>
                <p className={`font-heading font-extrabold text-3xl mb-1 ${dark ? 'text-white' : 'text-navy'}`}>{service.pricing}</p>
                <p className={`text-sm mb-6 ${dark ? 'text-white/35' : 'text-slate-400'}`}>Tailored to your specific requirements</p>
                <div className="space-y-3 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-gold-500" />
                      </div>
                      <span className={`text-sm ${dark ? 'text-white/65' : 'text-slate-600'}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary w-full justify-center text-xs tracking-widest">
                  Request a Proposal
                </Link>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-[#0a0f1a]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Animate variant="fade-up">
              <p className="section-tag flex justify-center">What's included</p>
              <h2 className={`font-heading font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
                Everything in {service.title}
              </h2>
            </Animate>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {detail.whatWeOffer.map(({ title, desc, integrations }, i) => (
              <Animate key={title} variant="fade-up" delay={i * 80}>
                <div className={`border rounded-xl p-6 transition-all duration-200 group h-full flex flex-col hover:border-gold-500/30 ${dark ? 'bg-navy-700 border-white/8 hover:bg-navy-600' : 'bg-white border-slate-200 hover:shadow-md'}`}>
                  <div className="w-2 h-2 rounded-full bg-gold-500 mb-4 group-hover:scale-125 transition-transform" />
                  <h3 className={`font-heading font-bold mb-2 ${dark ? 'text-white' : 'text-navy'}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-white/50' : 'text-slate-500'}`}>{desc}</p>
                  {integrations && (
                    <div className={`mt-4 pt-4 border-t flex flex-wrap gap-1.5 ${dark ? 'border-white/8' : 'border-slate-100'}`}>
                      {integrations.map((name) => (
                        <span key={name} className="bg-gold-500/10 border border-gold-500/25 text-gold-500 text-[10px] font-heading font-bold tracking-wide px-2.5 py-1 rounded-full">
                          {name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-navy' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Animate variant="fade-up">
              <p className="section-tag flex justify-center">How we work</p>
              <h2 className={`font-heading font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
                Our {service.title} process
              </h2>
            </Animate>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.process.map(({ step, title, desc }, i) => (
              <Animate key={step} variant="fade-up" delay={i * 100}>
                <div className="text-center group">
                  <div className={`w-12 h-12 rounded-full border-2 border-gold-500/30 flex items-center justify-center font-heading font-extrabold text-gold-500 text-lg mb-4 mx-auto group-hover:border-gold-500 transition-colors ${dark ? 'bg-[#0a0f1a]' : 'bg-white'}`}>
                    {step}
                  </div>
                  <h3 className={`font-heading font-bold mb-2 ${dark ? 'text-white' : 'text-navy'}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-white/45' : 'text-slate-500'}`}>{desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-[#0a0f1a]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Animate variant="fade-right">
              <p className="section-tag">FAQs</p>
              <h2 className={`font-heading font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
                Common questions
              </h2>
              <p className={`leading-relaxed mb-6 ${dark ? 'text-white/50' : 'text-slate-500'}`}>
                Have a question not answered here?{' '}
                <Link to="/contact" className="text-gold-500 font-medium hover:underline">Get in touch</Link>.
              </p>
              <Link to="/contact" className={`inline-flex items-center gap-2 border font-heading font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg transition-all hover:border-gold-500 hover:text-gold-500 ${dark ? 'border-white/20 text-white' : 'border-slate-300 text-navy'}`}>
                Talk to our team <ArrowRight size={15} />
              </Link>
            </Animate>
            <FAQ items={detail.faqs} dark={dark} />
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className={`py-14 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-navy' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <Animate variant="fade-up">
            <h3 className={`font-heading font-bold text-lg mb-7 text-center ${dark ? 'text-white' : 'text-navy'}`}>Explore other services</h3>
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((s, i) => (
              <Animate key={s.id} variant="fade-up" delay={i * 70}>
                <Link to={`/services/${s.id}`}
                  className={`group flex items-center gap-3 border rounded-xl p-4 transition-all ${dark ? 'bg-navy-700 border-white/8 hover:border-gold-500/30 hover:bg-navy-600' : 'bg-white border-slate-200 hover:border-gold-500/30'}`}>
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/15 flex items-center justify-center text-gold-500 flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <ServiceIcon type={s.id} className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-heading font-bold text-sm group-hover:text-gold-500 transition-colors truncate ${dark ? 'text-white' : 'text-navy'}`}>{s.title}</p>
                    <p className={`text-xs truncate ${dark ? 'text-white/35' : 'text-slate-400'}`}>{s.pricing}</p>
                  </div>
                  <ArrowRight size={13} className={`group-hover:text-gold-500 flex-shrink-0 transition-colors ${dark ? 'text-white/20' : 'text-slate-300'}`} />
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
