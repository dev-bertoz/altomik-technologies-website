import SectionWrapper from '@/components/ui/SectionWrapper'
import ContactForm from '@/components/sections/ContactForm'
import { useTheme } from '@/context/ThemeContext'

export default function Contact() {
  const { dark } = useTheme()
  return (
    <>
      <section className={`${dark ? 'bg-navy' : 'bg-white'} pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-7xl mx-auto relative">
          <p className="section-tag">Contact us</p>
          <h1 className={`font-heading font-extrabold text-4xl md:text-5xl tracking-tight max-w-xl leading-tight ${dark ? 'text-white' : 'text-navy'}`}>
            Let's start a conversation
          </h1>
        </div>
      </section>

      <SectionWrapper className={dark ? 'bg-[#0a0f1a]' : 'bg-white'}>
        <ContactForm />
      </SectionWrapper>

      <div className={`${dark ? 'bg-navy' : 'bg-white'} py-10 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className={`rounded-2xl border h-52 flex items-center justify-center overflow-hidden relative ${dark ? 'bg-navy-700 border-gold-500/15' : 'bg-slate-50 border-slate-200'}`}>
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />
            <div className="relative text-center">
              <p className={`text-sm font-heading tracking-wider mb-1 ${dark ? 'text-white/30' : 'text-slate-400'}`}>NAIROBI, KENYA</p>
              <p className={`text-xs ${dark ? 'text-white/20' : 'text-slate-300'}`}>Serving East Africa & Beyond</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
