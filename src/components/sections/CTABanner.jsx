import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Animate from '@/components/ui/Animate'

export default function CTABanner() {
  return (
    <section className="relative bg-gradient-to-br from-gold-600 to-gold-500 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: 'linear-gradient(rgba(17,24,39,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.8) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
      />
      {/* Decorative shapes */}
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-white/10 pointer-events-none blur-3xl" />
      <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-navy/15 pointer-events-none blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 pointer-events-none" />

      <div className="relative py-24 px-4 sm:px-8 text-center">
        <Animate variant="fade-up">
          <p className="font-heading font-bold text-xs tracking-widest uppercase text-navy/50 mb-4">
            Ready to get started?
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-navy tracking-tight leading-tight mb-5">
            Precision in Every Solution.
          </h2>
          <p className="text-navy/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Intelligent Solutions. Lasting Impact. — Let's build your technology foundation today. First consultation is always free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-lg transition-all hover:bg-navy-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy/40">
              Book a consultation <ArrowRight size={16} />
            </Link>
            <Link to="/services"
              className="inline-flex items-center gap-2 border-2 border-navy/30 text-navy font-heading font-bold text-sm tracking-wider px-8 py-4 rounded-lg transition-all hover:border-navy hover:bg-navy/10">
              View all services
            </Link>
          </div>
        </Animate>
      </div>
    </section>
  )
}
