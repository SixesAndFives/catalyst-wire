import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { ServicesSection } from "@/components/services-section"
import { MissionSection } from "@/components/mission-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <ServicesSection />
        <MissionSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
