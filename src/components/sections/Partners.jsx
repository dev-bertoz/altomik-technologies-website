import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'
import Animate from '@/components/ui/Animate'

export const PARTNERS = [
  { id: 1, name: 'Savanna Logistics', abbr: 'SL', sector: 'Logistics' },
  { id: 2, name: 'Meridian Microfinance', abbr: 'MM', sector: 'Finance' },
  { id: 3, name: 'Coastal Trade Hub', abbr: 'CTH', sector: 'Trade' },
  { id: 4, name: 'AgriConnect Kenya', abbr: 'ACK', sector: 'Agriculture' },
  { id: 5, name: 'Nairobi Digital', abbr: 'ND', sector: 'Media' },
  { id: 6, name: 'SafariTech Group', abbr: 'STG', sector: 'Technology' },
  { id: 7, name: 'Pamoja Sacco', abbr: 'PS', sector: 'Finance' },
  { id: 8, name: 'EastPay Solutions', abbr: 'EP', sector: 'Fintech' },
]

const STATS = [
  { target: 20, suffix: '+', label: 'Active Clients' },
  { target: 5, suffix: '', label: 'Service Lines' },
  { target: 3, suffix: '', label: 'Countries Served' },
  { target: 98, suffix: '%', label: 'Client Retention' },
]

function StatCard({ target, suffix, label, inView }) {
  const count = useCountUp(target, 2000, inView)
  return (
    <div className="bg-white rounded-xl border border-gray-100 py-5 px-4 text-center">
      <div className="font-heading font-extrabold text-2xl text-navy mb-1">
        {count}{suffix}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  )
}

export default function Partners() {
  const { ref, inView } = useInView()

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Animate variant="fade-up">
          <p className="text-center font-heading font-bold text-xs tracking-widest uppercase text-gray-400 mb-10">
            Trusted by businesses across East Africa
          </p>
        </Animate>

        {/* Scrolling strip */}
        <div className="relative mb-14">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div className="flex gap-5 animate-marquee" style={{ width: 'max-content' }}>
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <div key={`${p.id}-${i}`}
                  className="flex-shrink-0 flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3.5 hover:border-gold-500/40 hover:shadow-sm transition-all duration-200 group">
                  <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-extrabold text-gold-500 text-[10px] tracking-tight">{p.abbr}</span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy text-sm group-hover:text-gold-600 transition-colors whitespace-nowrap">{p.name}</div>
                    <div className="text-gray-400 text-xs">{p.sector}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Count-up stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </section>
  )
}
