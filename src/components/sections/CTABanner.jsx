import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Animate from '@/components/ui/Animate'

export default function CTABanner() {
  return (
    <section className="relative bg-gold-500 overflow-hidden">
      {/* Full bleed — no max-width container */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(17,24,39,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.6) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
      />
      {/* Decorative circles */}
      <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-navy/10 pointer-events-none" />
      <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-navy/10 pointer-events-none" />

      <div className="relative py-24 px-4 sm:px-8 text-center">
        <Animate variant="fade-up">
          <p className="font-heading font-bold text-xs tracking-widest uppercase text-navy/60 mb-4">
            Ready to get started?
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-navy tracking-tight leading-tight mb-4">
            Precision in Every Solution.
          </h2>
          <p className="text-navy/65 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Intelligent Solutions. Lasting Impact. — Let's build your technology foundation today. First consultation is always free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-heading font-bold text-sm tracking-wider px-8 py-4 rounded transition-all hover:bg-navy/90 hover:-translate-y-0.5 hover:shadow-xl">
              Book a free consultation <ArrowRight size={16} />
            </Link>
            <Link to="/services"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy font-heading font-bold text-sm tracking-wider px-8 py-4 rounded transition-all hover:bg-navy/10">
              View all services
            </Link>
          </div>
        </Animate>
      </div>
    </section>
  )
}
