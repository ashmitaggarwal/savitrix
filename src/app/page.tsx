import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { AIMarquee } from '@/components/AIMarquee'
import { PortfolioSection } from '@/components/PortfolioSection'
import { PipelineSection } from '@/components/PipelineSection'
import { StatsSection } from '@/components/StatsSection'
import { CapabilitiesSection } from '@/components/CapabilitiesSection'
import { MissionSection } from '@/components/MissionSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AIMarquee />
        <PortfolioSection />
        <StatsSection />
        <PipelineSection />
        <CapabilitiesSection />
        <MissionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
