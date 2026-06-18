import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Animate from '@/components/ui/Animate'
import { useTheme } from '@/context/ThemeContext'

export const TESTIMONIALS = [
  { id: 1, name: 'Sarah Mwangi', role: 'CEO', company: 'Savanna Logistics Ltd', location: 'Nairobi, Kenya', initials: 'SM', color: 'bg-blue-600', text: 'Altomik transformed how we operate. They built us a custom fleet management system that cut our fuel costs by 22% in the first quarter alone. The team is professional, responsive, and genuinely invested in our success.', service: 'Software Development', rating: 5 },
  { id: 2, name: 'David Otieno', role: 'IT Manager', company: 'Meridian Microfinance', location: 'Kisumu, Kenya', initials: 'DO', color: 'bg-emerald-600', text: "We were hit by a ransomware attack before Altomik. After their cybersecurity overhaul, we have had zero incidents in 18 months. Their team's knowledge of East African threat landscapes is exceptional.", service: 'Cybersecurity', rating: 5 },
  { id: 3, name: 'Amina Hassan', role: 'Founder', company: 'Coastal Trade Hub', location: 'Mombasa, Kenya', initials: 'AH', color: 'bg-purple-600', text: 'Moving our entire operation to the cloud felt daunting. Altomik made it seamless. Zero downtime during migration, 40% reduction in IT costs, and our team can now work from anywhere. Best decision we made.', service: 'Cloud Services', rating: 5 },
  { id: 4, name: 'James Kiprotich', role: 'Operations Director', company: 'AgriConnect Kenya', location: 'Eldoret, Kenya', initials: 'JK', color: 'bg-orange-600', text: "Altomik's IT consulting retainer is incredible value. They handle everything — our servers, our networks, our software licences. I can focus on the business instead of worrying about technology. Highly recommend.", service: 'IT Consulting', rating: 5 },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold-500 fill-gold-500" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { dark } = useTheme()
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = useCallback((i) => {
    if (transitioning || i === current) return
    setTransitioning(true)
    setTimeout(() => { setCurrent(i); setTransitioning(false) }, 300)
  }, [transitioning, current])

  const next = useCallback(() => goTo((current + 1) % TESTIMONIALS.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), [current, goTo])

  useEffect(() => {
    const t = setTimeout(next, 7000)
    return () => clearTimeout(t)
  }, [current, next])

  const t = TESTIMONIALS[current]

  return (
    <SectionWrapper className={dark ? 'bg-navy overflow-hidden' : 'bg-white overflow-hidden'} id="testimonials">
      <div className="text-center mb-14">
        <Animate variant="fade-up">
          <p className="section-tag flex justify-center">Client voices</p>
          <h2 className={`font-heading font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
            What our clients say
          </h2>
          <p className={`text-base leading-relaxed max-w-lg mx-auto ${dark ? 'text-white/50' : 'text-slate-500'}`}>
            Real results from real businesses across East Africa.
          </p>
        </Animate>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <Animate variant="fade-right" className="lg:col-span-2">
          <div
            className={`border rounded-2xl p-8 md:p-10 relative overflow-hidden transition-opacity duration-300 ${dark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}
            style={{ opacity: transitioning ? 0 : 1 }}
          >
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={64} className="text-gold-500 fill-gold-500" />
            </div>
            <StarRating count={t.rating} />
            <blockquote className={`text-lg md:text-xl leading-relaxed font-body mt-5 mb-8 relative z-10 ${dark ? 'text-white' : 'text-navy'}`}>
              "{t.text}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-heading font-bold text-white text-sm flex-shrink-0`}>
                {t.initials}
              </div>
              <div>
                <div className={`font-heading font-bold ${dark ? 'text-white' : 'text-navy'}`}>{t.name}</div>
                <div className={`text-sm ${dark ? 'text-white/50' : 'text-slate-500'}`}>{t.role}, {t.company}</div>
                <div className={`text-xs mt-0.5 ${dark ? 'text-white/30' : 'text-slate-400'}`}>{t.location}</div>
              </div>
              <div className="ml-auto hidden sm:block">
                <span className="bg-gold-500/10 border border-gold-500/25 text-gold-500 text-xs font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-5">
            <button onClick={prev} className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:border-gold-500 hover:text-gold-500 ${dark ? 'border-white/20 text-white/50' : 'border-slate-200 text-slate-400'}`}>
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-gold-500' : `w-2 h-2 hover:opacity-60 ${dark ? 'bg-white/20' : 'bg-slate-300'}`}`}
                />
              ))}
            </div>
            <button onClick={next} className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:border-gold-500 hover:text-gold-500 ${dark ? 'border-white/20 text-white/50' : 'border-slate-200 text-slate-400'}`}>
              <ChevronRight size={16} />
            </button>
          </div>
        </Animate>

        <Animate variant="fade-left">
          <div className="flex flex-col gap-4">
            {TESTIMONIALS.map((item, i) => (
              <button key={item.id} onClick={() => goTo(i)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                  i === current
                    ? 'bg-gold-500/10 border-gold-500/40'
                    : dark ? 'bg-white/3 border-white/8 hover:bg-white/6' : 'bg-slate-50 border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center font-heading font-bold text-white text-xs flex-shrink-0`}>
                    {item.initials}
                  </div>
                  <div>
                    <div className={`font-heading font-bold text-sm ${i === current ? 'text-gold-400' : dark ? 'text-white/80' : 'text-navy'}`}>{item.name}</div>
                    <div className={`text-xs ${dark ? 'text-white/40' : 'text-slate-400'}`}>{item.company}</div>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed line-clamp-2 ${dark ? 'text-white/40' : 'text-slate-400'}`}>{item.text}</p>
              </button>
            ))}
          </div>
        </Animate>
      </div>
    </SectionWrapper>
  )
}
