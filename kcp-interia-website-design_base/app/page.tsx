import { DivineBackground } from "@/components/ui/divine-background"
import { TopNavbar } from "@/components/navigation/top-navbar"
import { BottomNavPill } from "@/components/navigation/bottom-nav-pill"
import { HeroSection } from "@/components/home/hero-section"
import { TrustCards } from "@/components/home/trust-cards"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <DivineBackground variant="vibrant" />
      <TopNavbar />
      
      <HeroSection />
      <TrustCards />
      
      <BottomNavPill />
    </main>
  )
}
