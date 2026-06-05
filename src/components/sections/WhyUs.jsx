import SectionWrapper from '@/components/ui/SectionWrapper'
import Animate from '@/components/ui/Animate'

const REASONS = [
  { num: '01', title: 'East Africa Expertise', desc: 'Deep understanding of local markets, regulations, and infrastructure. We know the terrain and tailor solutions for the region.' },
  { num: '02', title: 'Full-Service Partner', desc: 'One team for everything — no vendor fragmentation, no finger-pointing. A single accountable technology partner.' },
  { num: '03', title: 'SME-Focused Pricing', desc: 'Enterprise quality at prices designed for growing businesses. We grow when you grow — our interests are aligned.' },
  { num: '04', title: 'Security by Default', desc: 'Cybersecurity is baked into everything we build — not bolted on as an afterthought. Your data is safe with us.' },
]

export default function WhyUs() {
  return (
    <SectionWrapper className="bg-navy" id="why">
      <div className="text-center mb-14">
        <Animate variant="fade-up">
          <p className="section-tag justify-center flex">Why Altomik</p>
          <h2 className="section-title-light">Built different. Proven results.</h2>
          <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">
            Enterprise-grade technology delivered with the speed and flexibility your business actually needs.
          </p>
        </Animate>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {REASONS.map(({ num, title, desc }, i) => (
          <Animate key={num} variant="fade-up" delay={i * 100}>
            <div className="border border-gold-500/15 rounded-xl p-6 hover:border-gold-500/40 hover:bg-white/3 transition-all duration-300 group h-full">
              <div className="font-heading font-extrabold text-4xl text-gold-500/20 group-hover:text-gold-500/30 transition-colors leading-none mb-5">{num}</div>
              <h3 className="font-heading font-bold text-white text-base mb-3">{title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
            </div>
          </Animate>
        ))}
      </div>
    </SectionWrapper>
  )
}
