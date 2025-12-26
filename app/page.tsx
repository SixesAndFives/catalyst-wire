import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { ServicesSection } from "@/components/services-section"
import { MissionSection } from "@/components/mission-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <ServicesSection />
      <MissionSection />
      <NewsletterSection />
    </>
  )
}
