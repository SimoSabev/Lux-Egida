import { AboutSection } from "@/components/about-section"
import { CrossSectorSection } from "@/components/cross-sector-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NetworkSection } from "@/components/network-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { PrivateCircleSection } from "@/components/private-circle-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <AboutSection />
        <CrossSectorSection />
        <PrivateCircleSection />
        <NetworkSection />
      </main>
      <Footer />
    </div>
  )
}
