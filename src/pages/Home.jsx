import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyUs from '@/components/sections/WhyUs'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Team from '@/components/sections/Team'
import CTABanner from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid preview={true} />
      <WhyUs />
      <Process />
      <Testimonials />
      <Team limit={4} />
      <CTABanner />
    </>
  )
}
