import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Team from '@/components/sections/Team'
import CTABanner from '@/components/sections/CTABanner'
import Animate from '@/components/ui/Animate'
import { useTheme } from '@/context/ThemeContext'

const VALUES = [
  { title: 'Innovation', emoji: '💡', desc: 'We continuously improve and think ahead — always looking for smarter, better ways to deliver results.' },
  { title: 'Excellence', emoji: '⭐', desc: 'We hold ourselves to the highest standard in everything we deliver — no half measures, no excuses.' },
  { title: 'Integrity', emoji: '🤝', desc: 'Honest, transparent relationships with every client. We say what we mean and deliver what we promise.' },
  { title: 'Security', emoji: '🔒', desc: 'Treating client data and systems with the utmost care and diligence — security is never an afterthought.' },
  { title: 'Client Success', emoji: '🚀', desc: 'Our success is measured by yours. We are invested in your outcomes, not just your invoice.' },
  { title: 'Bold Thinking', emoji: '🔥', desc: 'We challenge conventions and bring fresh perspectives — technology leadership requires courage.' },
]

function ValuesSlider({ dark }) {
  const sliderRef = useRef(null)
  const scroll = (dir) => { if (!sliderRef.current) return; sliderRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' }) }
  const fade = dark ? '#0a0f1a' : '#ffffff'

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none rounded-l-xl"
        style={{ background: `linear-gradient(to right, ${fade}, transparent)` }} />
      <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none rounded-r-xl"
        style={{ background: `linear-gradient(to left, ${fade}, transparent)` }} />
      <button onClick={() => scroll(-1)}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border shadow flex items-center justify-center transition-all hover:border-gold-500 hover:text-gold-500 ${dark ? 'bg-navy-700 border-white/15 text-white/50' : 'bg-white border-slate-200 text-slate-400'}`}>
        <ChevronLeft size={16} />
      </button>
      <button onClick={() => scroll(1)}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border shadow flex items-center justify-center transition-all hover:border-gold-500 hover:text-gold-500 ${dark ? 'bg-navy-700 border-white/15 text-white/50' : 'bg-white border-slate-200 text-slate-400'}`}>
        <ChevronRight size={16} />
      </button>
      <div ref={sliderRef} className="flex gap-4 overflow-x-auto scroll-smooth pb-2 px-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {VALUES.map(({ title, emoji, desc }) => (
          <div key={title}
            className={`flex-shrink-0 w-64 rounded-xl border p-6 transition-all duration-300 group hover:border-gold-500/30 ${dark ? 'bg-navy-700 border-white/8 hover:bg-navy-600' : 'bg-slate-50 border-slate-200 hover:bg-white'}`}>
            <div className="text-2xl mb-3">{emoji}</div>
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mb-3 group-hover:scale-125 transition-transform" />
            <h3 className={`font-heading font-bold mb-2 text-sm ${dark ? 'text-white' : 'text-navy'}`}>{title}</h3>
            <p className={`text-xs leading-relaxed ${dark ? 'text-white/45' : 'text-slate-500'}`}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const { dark } = useTheme()
  return (
    <>
      <section className={`${dark ? 'bg-navy' : 'bg-white'} pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <Animate variant="fade-up">
            <p className="section-tag flex justify-center">Our story</p>
            <h1 className={`font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-6 ${dark ? 'text-white' : 'text-navy'}`}>
              Elevating businesses through{' '}
              <span className="text-gold-500">precision technology</span>
            </h1>
            <p className={`text-lg leading-relaxed ${dark ? 'text-white/55' : 'text-slate-500'}`}>
              Altomik Technologies was founded on a simple belief: technology should accelerate growth, simplify complexity, and create lasting value. We combine innovation, expertise, and strategic thinking to build solutions that empower businesses to thrive in a rapidly evolving digital world.
            </p>
          </Animate>
        </div>
      </section>

      <SectionWrapper className={dark ? 'bg-[#0a0f1a]' : 'bg-white'}>
        <div className="max-w-4xl mx-auto">
          <Animate variant="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className={`rounded-2xl p-8 border border-gold-500/20 relative overflow-hidden ${dark ? 'bg-navy-700' : 'bg-slate-50'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)' }} />
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center mb-5">
                    <Target size={18} className="text-gold-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xs tracking-widest uppercase text-gold-500 mb-3">Mission</h3>
                  <p className={`font-body text-base leading-relaxed ${dark ? 'text-white/80' : 'text-slate-700'}`}>
                    To empower businesses through innovative, secure, and scalable technology solutions that drive sustainable growth and digital transformation.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-gold-500/8 p-8 border border-gold-500/25">
                <div className="w-10 h-10 rounded-lg bg-gold-500/15 border border-gold-500/25 flex items-center justify-center mb-5">
                  <Eye size={18} className="text-gold-500" />
                </div>
                <h3 className="font-heading font-bold text-xs tracking-widest uppercase text-gold-500 mb-3">Vision</h3>
                <p className={`font-body text-base leading-relaxed ${dark ? 'text-white/80' : 'text-slate-700'}`}>
                  To become a leading technology company recognized for delivering transformative digital solutions across Africa and beyond.
                </p>
              </div>
            </div>
          </Animate>

          <Animate variant="fade-up">
            <div className="text-center mb-6">
              <p className="section-tag flex justify-center">The name</p>
              <h2 className={`font-heading font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
                What's in a name?
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className={`leading-relaxed mb-4 ${dark ? 'text-white/55' : 'text-slate-500'}`}>
                  <strong className={dark ? 'text-white' : 'text-navy'}>Alto</strong> means high, elevated, above — reflecting our commitment to excellence and our promise to elevate every client we work with.
                </p>
                <p className={`leading-relaxed mb-4 ${dark ? 'text-white/55' : 'text-slate-500'}`}>
                  The <strong className={dark ? 'text-white' : 'text-navy'}>mik</strong> suffix is dynamic and forward-moving — conveying speed, innovation, and modernity.
                </p>
                <p className={`leading-relaxed mb-8 ${dark ? 'text-white/55' : 'text-slate-500'}`}>
                  Together: <em className="text-gold-500 font-medium">elevated technology, delivered with precision.</em>
                </p>
                <Link to="/contact" className={`inline-flex items-center gap-2 border font-heading font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg transition-all duration-200 hover:border-gold-500 hover:text-gold-500 ${dark ? 'border-white/20 text-white' : 'border-slate-300 text-navy'}`}>
                  Work with us <ArrowRight size={16} />
                </Link>
              </div>
              <div className={`rounded-2xl p-10 text-center border border-gold-500/15 relative overflow-hidden ${dark ? 'bg-navy-700' : 'bg-slate-50'}`}>
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="relative">
                  <div className={`text-5xl font-heading font-extrabold mb-2 ${dark ? 'text-white' : 'text-navy'}`}>
                    ALTO<span className="text-gold-500">MIK</span>
                  </div>
                  <div className="w-16 h-px bg-gold-500/40 mx-auto my-4" />
                  <p className={`text-sm italic ${dark ? 'text-white/35' : 'text-slate-400'}`}>"Elevated technology, delivered with precision."</p>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </SectionWrapper>

      <SectionWrapper className={dark ? 'bg-[#0a0f1a]' : 'bg-white'}>
        <div className="text-center mb-10">
          <Animate variant="fade-up">
            <p className="section-tag flex justify-center">What drives us</p>
            <h2 className={`font-heading font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
              Our core values
            </h2>
            <p className={`text-base max-w-lg mx-auto ${dark ? 'text-white/50' : 'text-slate-500'}`}>
              The principles that guide every decision, every project, and every client relationship.
            </p>
          </Animate>
        </div>
        <Animate variant="fade-up" delay={100}>
          <ValuesSlider dark={dark} />
        </Animate>
      </SectionWrapper>

      <div id="team"><Team /></div>
      <CTABanner />
    </>
  )
}
