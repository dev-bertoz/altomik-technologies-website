import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import ServiceIcon from '@/components/ui/ServiceIcon'
import CTABanner from '@/components/sections/CTABanner'
import { SERVICES_DATA } from '@/components/sections/ServicesGrid'
import Animate from '@/components/ui/Animate'

function PageHero() {
  return (
    <section className="bg-navy pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Animate variant="fade-up">
          <p className="section-tag flex justify-center">What we offer</p>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white tracking-tight max-w-3xl mx-auto leading-tight mb-5">
            End-to-end IT services for ambitious businesses
          </h1>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Eight service lines. One team. One accountable partner who knows your business inside out.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Book a free consultation <ArrowRight size={16} />
          </Link>
        </Animate>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHero />

      {/* All services grid — fully clickable */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Animate variant="fade-up">
              <p className="section-tag flex justify-center">All services</p>
              <h2 className="section-title">Choose a service to explore</h2>
              <p className="text-gray-500 text-base max-w-lg mx-auto">
                Click any service below to see full details, pricing, what's included, and our process.
              </p>
            </Animate>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES_DATA.map((service, i) => (
              <Animate key={service.id} variant="fade-up" delay={i * 70}>
                <Link
                  to={`/services/${service.id}`}
                  className="group bg-white rounded-xl border border-gray-100 p-6 hover:bg-navy transition-all duration-300 hover:shadow-xl block h-full"
                >
                  {service.tag && (
                    <div className="mb-3">
                      <span className="bg-gold-500/10 border border-gold-500/30 text-gold-500 text-[10px] font-heading font-bold tracking-widest uppercase px-2 py-0.5 rounded-full">
                        {service.tag}
                      </span>
                    </div>
                  )}
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 mb-4 group-hover:bg-gold-500/15 transition-all">
                    <ServiceIcon type={service.id} className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-navy group-hover:text-white transition-colors mb-2 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed group-hover:text-white/50 transition-colors mb-4">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-gold-500 font-heading font-bold text-[10px] tracking-wider uppercase">
                      {service.pricing}
                    </span>
                    <ArrowRight size={13} className="text-gray-300 group-hover:text-gold-500 transition-colors" />
                  </div>
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Feature highlights per service */}
      {SERVICES_DATA.map((service, index) => {
        const isEven = index % 2 === 0
        return (
          <div key={service.id} className={`py-14 px-4 sm:px-6 lg:px-8 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <Animate variant={isEven ? 'fade-right' : 'fade-left'} className={isEven ? '' : 'lg:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500">
                      <ServiceIcon type={service.id} className="w-5 h-5" />
                    </div>
                    {service.tag && (
                      <span className="bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-navy mb-3 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.fullDesc}</p>
                  <ul className="space-y-2.5 mb-7">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                          <Check size={11} className="text-gold-500" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-5">
                    <span className="font-heading font-bold text-gold-500 text-sm">{service.pricing}</span>
                    <Link to={`/services/${service.id}`} className="inline-flex items-center gap-1.5 text-navy font-heading font-bold text-sm hover:text-gold-500 transition-colors">
                      Full details <ArrowRight size={14} />
                    </Link>
                  </div>
                </Animate>

                <Animate variant={isEven ? 'fade-left' : 'fade-right'} className={isEven ? '' : 'lg:order-1'}>
                  <div className="rounded-2xl bg-navy border border-gold-500/15 p-10 flex flex-col items-center justify-center min-h-[240px] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5"
                      style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                    />
                    <div className="relative w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-500 mb-3">
                      <ServiceIcon type={service.id} className="w-8 h-8" />
                    </div>
                    <p className="text-white/30 text-sm font-heading tracking-wider relative">{service.title}</p>
                  </div>
                </Animate>
              </div>
            </div>
          </div>
        )
      })}

      <CTABanner />
    </>
  )
}
