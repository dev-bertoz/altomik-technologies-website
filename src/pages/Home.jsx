import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyUs from '@/components/sections/WhyUs'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Partners from '@/components/sections/Partners'
import Team from '@/components/sections/Team'
import CTABanner from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <ServicesGrid preview={true} />
      <WhyUs />
      <Process />
      <Testimonials />
      <Team limit={4} />
      <CTABanner />
    </>
  )
}
