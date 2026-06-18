import SectionWrapper from '@/components/ui/SectionWrapper'
import Animate from '@/components/ui/Animate'
import { useTheme } from '@/context/ThemeContext'

const STEPS = [
  { num: '1', title: 'Discovery Call', desc: 'We listen first. Understand your goals, constraints, and current setup before recommending anything.' },
  { num: '2', title: 'Audit & Proposal', desc: 'We assess your environment and deliver a clear, costed proposal — no vague estimates, no surprises.' },
  { num: '3', title: 'Execution', desc: 'We deliver on scope, on time. Regular updates, full transparency, and a direct line to our team.' },
  { num: '4', title: 'Ongoing Support', desc: 'We stay with you. Managed support, monitoring, and a partner for every technology decision ahead.' },
]

export default function Process() {
  const { dark } = useTheme()
  return (
    <SectionWrapper className={dark ? 'bg-navy' : 'bg-white'} id="process">
      <div className="text-center mb-14">
        <Animate variant="fade-up">
          <p className="section-tag flex justify-center">How it works</p>
          <h2 className={`font-heading font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
            From conversation to solution
          </h2>
          <p className={`text-base leading-relaxed max-w-xl mx-auto ${dark ? 'text-white/50' : 'text-slate-500'}`}>
            Our engagement process is straightforward — no jargon, no surprises, just results.
          </p>
        </Animate>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        {STEPS.map(({ num, title, desc }, i) => (
          <Animate key={num} variant="fade-up" delay={i * 120}>
            <div className="text-center group">
              <div className={`w-16 h-16 rounded-full border-2 border-gold-500/30 flex items-center justify-center mx-auto mb-5 font-heading font-extrabold text-xl text-gold-500 group-hover:border-gold-500 group-hover:scale-110 transition-all duration-300 relative z-10 shadow-lg ${dark ? 'bg-[#0a0f1a] shadow-black/30' : 'bg-white shadow-slate-200'}`}>
                {num}
              </div>
              <h3 className={`font-heading font-bold text-base mb-2 ${dark ? 'text-white' : 'text-navy'}`}>{title}</h3>
              <p className={`text-sm leading-relaxed ${dark ? 'text-white/45' : 'text-slate-500'}`}>{desc}</p>
            </div>
          </Animate>
        ))}
      </div>
    </SectionWrapper>
  )
}
