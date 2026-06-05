import SectionWrapper from '@/components/ui/SectionWrapper'
import ContactForm from '@/components/sections/ContactForm'

export default function Contact() {
  return (
    <>
      <section className="bg-navy pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="section-tag">Contact us</p>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white tracking-tight max-w-xl leading-tight">
            Let's start a conversation
          </h1>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <ContactForm />
      </SectionWrapper>

      {/* Map placeholder */}
      <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-navy border border-gold-500/15 h-52 flex items-center justify-center overflow-hidden relative">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="relative text-center">
              <p className="text-white/30 text-sm font-heading tracking-wider mb-1">NAIROBI, KENYA</p>
              <p className="text-white/20 text-xs">Serving East Africa & Beyond</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
