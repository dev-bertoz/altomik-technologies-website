import SectionWrapper from '@/components/ui/SectionWrapper'
import ContactForm from '@/components/sections/ContactForm'

export default function Contact() {
  return (
    <>
      <section className="bg-navy pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-7xl mx-auto relative">
          <p className="section-tag">Contact us</p>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white tracking-tight max-w-xl leading-tight">
            Let's start a conversation
          </h1>
        </div>
      </section>

      <SectionWrapper className="bg-[#0a0f1a]">
        <ContactForm />
      </SectionWrapper>

      {/* Map placeholder */}
      <div className="bg-navy py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-navy-700 border border-gold-500/15 h-52 flex items-center justify-center overflow-hidden relative">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
   