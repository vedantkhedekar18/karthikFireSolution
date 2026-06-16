import { ScrollAnimationProvider } from '@/components/scroll-animation-provider'
import Header from '@/components/header'
import Hero from '@/components/hero'
import FacilityMap from '@/components/facility-map'
import Services from '@/components/services'
import WhyChoose from '@/components/why-choose'
import MissionVision from '@/components/mission-vision'
import CoreValues from '@/components/core-values'
import Certifications from '@/components/certifications'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <ScrollAnimationProvider />
      <main className="bg-black">
        <Header />
        <Hero />
        <FacilityMap />
        <Services />
        <WhyChoose />
        <MissionVision />
        <CoreValues />
        <Certifications />
        <Footer />
      </main>
    </>
  )
}
