import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { BrandMarquee } from '@/components/BrandMarquee'
import { PortfolioSection } from '@/components/PortfolioSection'
import { StatsSection } from '@/components/StatsSection'
import { IndustriesSection } from '@/components/IndustriesSection'
import { MissionSection } from '@/components/MissionSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <PortfolioSection />
        <StatsSection />
        <IndustriesSection />
        <MissionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
