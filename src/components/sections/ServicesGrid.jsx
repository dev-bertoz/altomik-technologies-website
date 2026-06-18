import { useTheme } from "@/context/ThemeContext"
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Animate from "@/components/ui/Animate";

export const SERVICES_DATA = [
  {
    id: "consulting",
    title: "IT Consulting & Support",
    shortDesc: "Managed IT support, helpdesk, network management, and technology audits. Your tech runs — always.",
    fullDesc: "We provide comprehensive IT support tailored for East African SMEs. From day-to-day helpdesk and network management to strategic IT audits and planning, we ensure your technology is always working for you.",
    features: ["24/7 Helpdesk Support","Network Management","IT Audits & Strategy","Vendor Management","System Monitoring"],
    pricing: "From KES 5,000/month",
    tag: "Most Popular",
  },
  {
    id: "software",
    title: "Software Development",
    shortDesc: "Custom web and mobile applications, ERP systems, and SaaS products built for scale and performance.",
    fullDesc: "From simple business tools to complex enterprise platforms, we build software that solves real problems. We specialise in local API integrations including M-Pesa, KRA eTIMS, SHA, and more — so your software is ready for the Kenyan market from day one.",
    features: ["Web Applications","Mobile Apps (iOS & Android)","ERP & CRM Systems","SaaS Products","API Development & Integration"],
    integrations: ["Lipa Na Mpesa","KRA eTIMS","Bulk SMS","Bulk WhatsApp","SEO Dashboards","SHA Integration"],
    pricing: "From KES 150,000/project",
    tag: null,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    shortDesc: "Threat assessments, penetration testing, security training, and ongoing monitoring to keep you safe.",
    fullDesc: "Cyber threats are growing. We protect your business with proactive security measures, regular assessments, and employee training.",
    features: ["Security Audits","Penetration Testing","Staff Security Training","Incident Response","Compliance Guidance"],
    pricing: "From KES 25,000/month",
    tag: null,
  },
  {
    id: "cloud",
    title: "Cloud Services",
    shortDesc: "Cloud strategy, migration, and managed services on AWS, Azure, and Google Cloud.",
    fullDesc: "Whether you are moving to the cloud for the first time or optimising an existing setup, we handle everything.",
    features: ["Cloud Strategy & Architecture","Migration Services","AWS / Azure / GCP","Cost Optimisation","Managed Cloud Operations"],
    pricing: "From KES 15,000/month",
    tag: null,
  },
  {
    id: "ai",
    title: "AI & Data Solutions",
    shortDesc: "Business intelligence dashboards, automation, and AI integrations that turn data into decisions.",
    fullDesc: "Unlock the power of your data. We build analytics dashboards, automate repetitive workflows, and integrate AI tools.",
    features: ["Business Intelligence Dashboards","Process Automation","AI Model Integration","Data Pipelines","Predictive Analytics"],
    pricing: "From KES 45,000/project",
    tag: "Fast Growing",
  },
  {
    id: "webdesign",
    title: "Web Design & UI/UX",
    shortDesc: "Stunning, conversion-focused websites and interfaces designed for your brand and your users.",
    fullDesc: "We design beautiful, fast, and user-friendly websites and digital interfaces that reflect your brand and convert visitors into customers.",
    features: ["Corporate & Landing Pages","E-commerce Websites","UI/UX Design","Wireframing & Prototyping","Website Redesign"],
    pricing: "From KES 25,000/project",
    tag: "Popular",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform Android & iOS apps that deliver seamless user experiences.",
    fullDesc: "We build high-performance mobile applications for Android and iOS using React Native and native frameworks — from concept to app store.",
    features: ["Android Development","iOS Development","Cross-Platform Apps","App Store Submission","Push Notifications & APIs"],
    pricing: "From KES 200,000/project",
    tag: null,
  },
  {
    id: "digital",
    title: "Digital Marketing & SEO",
    shortDesc: "Grow your online presence with targeted digital marketing, SEO, and social media strategy.",
    fullDesc: "We help businesses across East Africa get found online, attract the right audience, and turn clicks into customers through data-driven digital marketing.",
    features: ["Search Engine Optimisation (SEO)","Google & Meta Ads","Social Media Management","Email Marketing","Analytics & Reporting"],
    pricing: "From KES 15,000/month",
    tag: null,
  },
  {
    id: "graphic",
    title: "Graphic Design & Branding",
    shortDesc: "Professional logos, brand identities, social media graphics, and marketing materials that make your business stand out.",
    fullDesc: "Your brand is your first impression. We craft visual identities — from logos and brand guidelines to social media graphics and print-ready marketing materials — that communicate who you are and what you stand for.",
    features: ["Logo Design & Brand Identity","Brand Style Guidelines","Social Media Graphics","Marketing Materials (Flyers, Posters)","Email & Newsletter Templates"],
    pricing: "From KES 5,000/project",
    tag: null,
  },
  {
    id: "profile",
    title: "Company Profiles & Brochures",
    shortDesc: "Polished company profiles, brochures, pitch decks, and corporate documents that win clients and impress investors.",
    fullDesc: "A well-designed company profile opens doors. We design and write compelling company profiles, brochures, and corporate documents that tell your story, showcase your services, and leave a lasting impression on prospects and partners.",
    features: ["Company Profile Design & Writing","Corporate Brochures","Pitch Deck Design","Annual Reports","Product Catalogues"],
    pricing: "From KES 8,000/project",
    tag: null,
  },
  {
    id: "print",
    title: "Print & Branded Merchandise",
    shortDesc: "Business cards, flyers, letterheads, vehicle branding, banners, and branded merchandise — designed and delivered.",
    fullDesc: "From business cards that get kept to vehicle branding that turns heads, we handle design and print production for all your branded collateral. High-quality materials, fast turnaround, and designs that reflect your brand perfectly.",
    features: ["Business Cards","Flyers & Brochures","Letterheads & Envelopes","Vehicle Branding & Signage","Banners & Pull-up Stands","Branded Merchandise (T-shirts, Mugs, Pens)"],
    pricing: "From KES 3,500/order",
    tag: null,
  },
];

export default function ServicesGrid({ preview = false }) {
  const { dark } = useTheme()
  const services = preview ? SERVICES_DATA.slice(0, 3) : SERVICES_DATA;

  return (
    <SectionWrapper className={dark ? 'bg-[#0a0f1a]' : 'bg-white'} id="services">
      <div className="text-center mb-14">
        <Animate variant="fade-up">
          <p className="section-tag flex justify-center">What we do</p>
          <h2 className={`font-heading font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4 ${dark ? 'text-white' : 'text-navy'}`}>Full-spectrum IT services</h2>
          <p className={`text-base leading-relaxed max-w-xl mx-auto ${dark ? 'text-white/50' : 'text-slate-500'}`}>
            From day-to-day IT support to enterprise software — Altomik handles
            every layer of your technology stack.
          </p>
        </Animate>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <Animate key={service.id} variant="fade-up" delay={i * 80}>
            <Link
              to={`/services/${service.id}`}
              className={`group rounded-xl border p-7 hover:border-gold-500/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden block h-full ${dark ? 'bg-navy-700 border-white/8 hover:bg-navy-600 hover:shadow-black/40' : 'bg-white border-slate-200 hover:shadow-slate-100'}`}
            >
              {service.tag && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs font-heading font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>
              )}
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 mb-5 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-all">
                <ServiceIcon type={service.id} className="w-5 h-5" />
              </div>
              <h3 className={`font-heading font-bold text-lg group-hover:text-gold-400 transition-colors mb-3 ${dark ? 'text-white' : 'text-navy'}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-white/45' : 'text-slate-500'}`}>
                {service.shortDesc}
              </p>
              <div className={`flex items-center justify-between pt-4 border-t ${dark ? 'border-white/6' : 'border-slate-100'}`}>
                <div className="text-gold-500 font-heading font-bold text-xs tracking-wider uppercase">
                  {service.pricing}
                </div>
                <span className="inline-flex items-center gap-1 text-gold-500 text-xs font-heading font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          </Animate>
        ))}

        {preview && (
          <Animate variant="fade-up" delay={4 * 80}>
            <div className="col-span-full bg-gold-500/5 border border-gold-500/20 rounded-xl p-7 flex flex-col justify-center items-center text-center">
              <p className={`font-heading font-bold text-base mb-2 ${dark ? 'text-white' : 'text-navy'}`}>
                Not sure where to start?
              </p>
              <p className={`text-sm leading-relaxed mb-5 max-w-2xl ${dark ? 'text-white/50' : 'text-slate-500'}`}>
                Let's talk through your technology needs. First consultation is free.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gold-500 font-heading font-bold text-sm hover:gap-3 transition-all"
              >
                View all services <ArrowRight size={15} />
              </Link>
            </div>
          </Animate>
        )}
      </div>
    </SectionWrapper>
  );
}
