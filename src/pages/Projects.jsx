import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, MonitorPlay } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import Animate from '@/components/ui/Animate'
import CTABanner from '@/components/sections/CTABanner'

const PROJECTS = [
  {
    id: 'law-erp',
    title: 'Altomik Law ERP',
    category: 'ERP System',
    categoryColor: 'text-blue-400',
    categoryBg: 'bg-blue-500/10 border-blue-500/25',
    shortDesc: 'A comprehensive legal practice management system built for law firms — handling case management, client billing, document storage, and court deadline tracking in one unified platform.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'M-Pesa API', 'KRA eTIMS'],
    status: 'Delivered',
    highlight: 'Reduces admin time by 60% for legal practices',
    demo: true,
  },
  {
    id: 'sacco-erp',
    title: 'Altomik Sacco ERP',
    category: 'ERP System',
    categoryColor: 'text-emerald-400',
    categoryBg: 'bg-emerald-500/10 border-emerald-500/25',
    shortDesc: 'A full-featured SACCO management platform covering member registration, loan processing, share capital tracking, dividend calculation, and mobile money integration for seamless member transactions.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Lipa Na Mpesa', 'SMS API'],
    status: 'Delivered',
    highlight: 'End-to-end SACCO operations from one dashboard',
    demo: true,
  },
  {
    id: 'rental-erp',
    title: 'Altomik Rental Management System',
    category: 'ERP System',
    categoryColor: 'text-purple-400',
    categoryBg: 'bg-purple-500/10 border-purple-500/25',
    shortDesc: 'A property and rental management system for landlords and property managers — automating rent collection via M-Pesa, tracking tenant records, managing maintenance requests, and generating financial reports.',
    tech: ['React', 'Node.js', 'MySQL', 'Lipa Na Mpesa', 'WhatsApp API'],
    status: 'Delivered',
    highlight: 'Automated rent collection and tenant management',
    demo: true,
  },
  {
    id: 'websites',
    title: 'Website Projects',
    category: 'Web Design & Development',
    categoryColor: 'text-gold-500',
    categoryBg: 'bg-gold-500/10 border-gold-500/25',
    shortDesc: 'A portfolio of corporate websites, landing pages, and e-commerce stores built for clients across East Africa — responsive, fast, and designed to convert visitors into customers.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'WordPress', 'Shopify'],
    status: 'Ongoing',
    highlight: 'From corporate sites to full e-commerce platforms',
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    category: 'Print & Branding',
    categoryColor: 'text-orange-400',
    categoryBg: 'bg-orange-500/10 border-orange-500/25',
    shortDesc: 'Premium business card designs for professionals and businesses across Kenya — full-colour, double-sided, with finishes including matte, gloss, soft-touch, and spot UV. Designed and delivered.',
    tech: ['Adobe Illustrator', 'Photoshop', 'Print Production', 'Brand Guidelines'],
    status: 'Ongoing',
    highlight: '200+ cards designed and delivered to clients',
  },
  {
    id: 'company-profiles',
    title: 'Company Profiles',
    category: 'Graphic Design',
    categoryColor: 'text-red-400',
    categoryBg: 'bg-red-500/10 border-red-500/25',
    shortDesc: 'Professional company profiles, brochures, and corporate documents that tell compelling brand stories — designed for print and digital distribution, with full copywriting available.',
    tech: ['Adobe InDesign', 'Illustrator', 'Canva Pro', 'Copywriting'],
    status: 'Ongoing',
    highlight: 'Professional profiles that open doors and close deals',
  },
]

const CATEGORIES = ['All', 'ERP System', 'Web Design & Development', 'Print & Branding', 'Graphic Design']

export default function Projects() {
  const { dark } = useTheme()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className={`${dark ? 'bg-navy' : 'bg-white'} pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-7xl mx-auto text-center relative">
          <Animate variant="fade-up">
            <p className="section-tag flex justify-center">Our work</p>
            <h1 className={`font-heading font-extrabold text-4xl md:text-5xl tracking-tight max-w-3xl mx-auto leading-tight mb-5 ${dark ? 'text-white' : 'text-navy'}`}>
              Projects we're proud of
            </h1>
            <p className={`text-lg max-w-xl mx-auto leading-relaxed mb-8 ${dark ? 'text-white/55' : 'text-slate-500'}`}>
              From enterprise ERP systems to brand identities — a selection of work delivered for businesses across East Africa.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start your project <ArrowRight size={16} />
            </Link>
          </Animate>
        </div>
      </section>

      {/* Filter tabs */}
      <section className={`${dark ? 'bg-[#0a0f1a]' : 'bg-white'} px-4 sm:px-6 lg:px-8 pb-4 border-b ${dark ? 'border-white/8' : 'border-slate-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-heading font-semibold text-xs tracking-wider px-4 py-2 rounded-lg border transition-all ${
                  active === cat
                    ? 'bg-gold-500 border-gold-500 text-navy'
                    : dark
                      ? 'border-white/10 text-white/50 hover:border-gold-500/40 hover:text-white'
                      : 'border-slate-200 text-slate-500 hover:border-gold-500/40 hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className={`${dark ? 'bg-[#0a0f1a]' : 'bg-white'} py-16 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <Animate key={project.id} variant="fade-up" delay={i * 80}>
                <div className={`rounded-2xl border h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-gold-500/40 hover:-translate-y-1 hover:shadow-2xl ${dark ? 'bg-navy-700 border-white/8 hover:shadow-black/40' : 'bg-white border-slate-200 hover:shadow-slate-200'}`}>

                  {/* Card top colour band */}
                  <div className={`h-2 w-full bg-gradient-to-r from-gold-600 to-gold-400 opacity-80`} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Category + status */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`border text-xs font-heading font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${project.categoryBg} ${project.categoryColor}`}>
                        {project.category}
                      </span>
                      <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${
                        project.status === 'Delivered'
                          ? 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-400'
                          : 'bg-gold-500/10 border border-gold-500/25 text-gold-500'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`font-heading font-extrabold text-xl mb-3 ${dark ? 'text-white' : 'text-navy'}`}>
                      {project.title}
                    </h3>

                    {/* Highlight */}
                    <p className="text-gold-500 font-heading font-semibold text-xs tracking-wide mb-3 italic">
                      "{project.highlight}"
                    </p>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-5 flex-1 ${dark ? 'text-white/50' : 'text-slate-500'}`}>
                      {project.shortDesc}
                    </p>

                    {/* Tech stack */}
                    <div className={`pt-4 border-t ${dark ? 'border-white/8' : 'border-slate-100'}`}>
                      <p className={`text-[10px] font-heading font-bold tracking-widest uppercase mb-2.5 ${dark ? 'text-white/30' : 'text-slate-400'}`}>
                        Tech / Tools
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map(t => (
                          <span key={t} className={`border text-xs px-2.5 py-1 rounded-full font-body ${dark ? 'bg-white/5 border-white/10 text-white/55' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Request Demo button */}
                    {project.demo && (
                      <div className="mt-5">
                        <Link
                          to={`/contact?subject=Demo Request — ${encodeURIComponent(project.title)}`}
                          className="inline-flex items-center gap-2 w-full justify-center bg-gold-500/10 border border-gold-500/40 text-gold-500 hover:bg-gold-500 hover:text-navy font-heading font-bold text-xs tracking-widest uppercase px-4 py-3 rounded-lg transition-all duration-200"
                        >
                          <MonitorPlay size={14} />
                          Request a Demo
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className={`py-14 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-navy' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <Animate variant="fade-up">
            <h2 className={`font-heading font-extrabold text-2xl md:text-3xl mb-3 ${dark ? 'text-white' : 'text-navy'}`}>
              Have a project in mind?
            </h2>
            <p className={`mb-7 max-w-lg mx-auto ${dark ? 'text-white/50' : 'text-slate-500'}`}>
              Tell us what you need and we'll tell you how we can build it. First consultation is always free.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Start a project <ArrowRight size={16} />
              </Link>
              <Link to="/services" className={`inline-flex items-center gap-2 border font-heading font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg transition-all hover:border-gold-500 hover:text-gold-500 ${dark ? 'border-white/20 text-white' : 'border-slate-300 text-navy'}`}>
                View our services <ExternalLink size={15} />
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
