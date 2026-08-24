import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { BrandMarquee } from '@/components/BrandMarquee'
import { EditorialGallery } from '@/components/EditorialGallery'
import { StatsSection } from '@/components/StatsSection'
import { BrandGrid } from '@/components/BrandGrid'
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
        <EditorialGallery />
        <StatsSection />
        <BrandGrid />
        <MissionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
