import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'
import Animate from '@/components/ui/Animate'
import { useTheme } from '@/context/ThemeContext'

const STATS = [
  { target: 20,  suffix: '+', label: 'Active Clients' },
  { target: 11,  suffix: '',  label: 'Service Lines' },
  { target: 98,  suffix: '%', label: 'Client Retention' },
]

function StatCard({ target, suffix, label, inView, dark }) {
  const count = useCountUp(target, 2000, inView)
  return (
    <div className={`rounded-xl border py-6 px-4 text-center transition-colors hover:border-gold-500/30 ${dark ? 'bg-navy-700 border-white/8' : 'bg-slate-50 border-slate-200'}`}>
      <div className="font-heading font-extrabold text-2xl text-gold-500 mb-1">{count}{suffix}</div>
      <div className={`text-sm ${dark ? 'text-white/45' : 'text-slate-500'}`}>{label}</div>
    </div>
  )
}

export default function StatsBar() {
  const { dark } = useTheme()
  const { ref, inView } = useInView()

  return (
    <section className={`${dark ? 'bg-[#0a0f1a]' : 'bg-white'} py-14 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <Animate variant="fade-up">
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} inView={inView} dark={dark} />
            ))}
          </div>
        </Animate>
      </div>
    </section>
  )
}
