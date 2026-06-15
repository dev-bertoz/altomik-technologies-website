import { useParams, Link, Navigate } from 'react-router-dom'
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
}

function FAQ({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <Animate key={i} variant="fade-up" delay={i * 80}>
          <div className="bg-navy-700 border border-white/8 rounded-xl p-5 hover:border-gold-500/25 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MessageSquare size={11} className="text-gold-500" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm mb-2">{item.q}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        </Animate>
      ))}
    </div>
  )
}

export default function ServiceDetail() {
  const { id } = useParams()
  const service = SERVICES_DATA.find((s) => s.id === id)
  const detail = SERVICE_DETAILS[id]

  if (!service || !detail) return <Navigate to="/services" replace />

  const others = SERVICES_DATA.filter((s) => s.id !== id).slice(0, 4)

  return (
    <>
      {/* Back nav */}
      <div className="bg-navy pt-20 pb-0 px-4 sm:px-6 lg:px-8 border-b border-white/8">
        <div className="max-w-7xl mx-auto py-4">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/50 hover:text-gold-500 text-sm font-heading font-medium transition-colors">
            <ArrowLeft size={14} /> Back to Services
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy pb-16 px-4 sm:px-6 lg:px-8">
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
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
                {service.title}
              </h1>
              <p className="text-gold-500 font-heading font-semibold text-lg mb-4 italic">
                "{detail.tagline}"
              </p>
              <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg">
                {detail.heroSub}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get a quote <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline-light">
                  Book free consultation
                </Link>
              </div>
            </Animate>

            {/* Pricing card */}
            <Animate variant="fade-left">
              <div className="bg-navy-700 border border-gold-500/20 rounded-2xl p-8">
                <p className="font-heading font-bold text-xs tracking-widest uppercase text-gold-500 mb-2">Pricing</p>
                <p className="font-heading font-extrabold text-3xl text-white mb-1">{service.pricing}</p>
                <p className="text-white/35 text-sm mb-6">Tailored to your specific requirements</p>
                <div className="space-y-3 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-gold-500" />
                      </div>
                      <span className="text-white/65 text-sm">{f}</span>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Animate variant="fade-up">
              <p className="section-tag flex justify-center">What's included</p>
              <h2 className="section-title">Everything in {service.title}</h2>
            </Animate>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {detail.whatWeOffer.map(({ title, desc, integrations }, i) => (
              <Animate key={title} variant="fade-up" delay={i * 80}>
                <div className="bg-navy-700 border border-white/8 rounded-xl p-6 hover:border-gold-500/30 hover:bg-navy-600 transition-all duration-200 group h-full flex flex-col">
                  <div className="w-2 h-2 rounded-full bg-gold-500 mb-4 group-hover:scale-125 transition-transform" />
                  <h3 className="font-heading font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  {integrations && (
                    <div className="mt-4 pt-4 border-t border-white/8 flex flex-wrap gap-1.5">
                      {integrations.map((name) => (
                        <span key={name} className="bg-gold-500/10 border border-gold-500/25 text-gold-400 text-[10px] font-heading font-bold tracking-wide px-2.5 py-1 rounded-full">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Animate variant="fade-up">
              <p className="section-tag flex justify-center">How we work</p>
              <h2 className="section-title">Our {service.title} process</h2>
            </Animate>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.process.map(({ step, title, desc }, i) => (
              <Animate key={step} variant="fade-up" delay={i * 100}>
                <div className="text-center group">
                  <div className="w-12 h-12 rounded-full bg-[#0a0f1a] border-2 border-gold-500/30 flex items-center justify-center font-heading font-extrabold text-gold-500 text-lg mb-4 mx-auto group-hover:border-gold-500 transition-colors">
                    {step}
                  </div>
                  <h3 className="font-heading font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Animate variant="fade-right">
              <p className="section-tag">FAQs</p>
              <h2 className="section-title">Common questions</h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Have a question not answered here?{' '}
                <Link to="/contact" className="text-gold-500 font-medium hover:underline">Get in touch</Link>.
              </p>
              <Link to="/contact" className="btn-outline-light inline-flex items-center gap-2">
                Talk to our team <ArrowRight size={15} />
              </Link>
            </Animate>
            <FAQ items={detail.faqs} />
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-7xl mx-auto">
          <Animate variant="fade-up">
            <h3 className="font-heading font-bold text-white text-lg mb-7 text-center">Explore other services</h3>
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((s, i) => (
              <Animate key={s.id} variant="fade-up" delay={i * 70}>
                <Link to={`/services/${s.id}`}
                  className="group flex