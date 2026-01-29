import { DivineBackground } from "@/components/ui/divine-background"
import { TopNavbar } from "@/components/navigation/top-navbar"
import { BottomNavPill } from "@/components/navigation/bottom-nav-pill"
import { GlassCard } from "@/components/ui/glass-card"
import { FlipCard } from "@/components/ui/flip-card"
import { Heart, Eye, Palette, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Heart,
    front: "Passion",
    back: "Design beyond trends, we create timeless spaces",
  },
  {
    icon: Eye,
    front: "Empathy",
    back: "Homes shaped around your life, not the other way around",
  },
  {
    icon: Palette,
    front: "Craft",
    back: "Materials, light, and balance woven with intention",
  },
  {
    icon: Lightbulb,
    front: "Innovation",
    back: "We constantly seek better solutions to create measurable business impact",
  },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <DivineBackground variant="calm" />
      <TopNavbar />

      <section className="px-4 pt-28 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-peacock bg-peacock/10 rounded-full">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              The Heart Behind{" "}
              <span className="text-peacock">the Design</span>
            </h1>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <GlassCard className="flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                At KCP Interia, we believe that every home has a soul waiting to be revealed. 
                Founded over a decade ago, our journey began with a simple belief: spaces should 
                feel like extensions of the people who live in them.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                We do not just design interiors; we listen to dreams, understand lifestyles, 
                and translate emotions into living spaces. From the first sketch to the final 
                walkthrough, every decision is guided by empathy, craftsmanship, and an 
                unwavering commitment to excellence.
              </p>
              <blockquote className="border-l-4 border-gold pl-6 py-2">
                <p className="font-serif text-xl italic text-foreground">
                  {'"'}Design is not just what it looks like. Design is how it makes you feel.{'"'}
                </p>
                <cite className="text-sm text-muted-foreground mt-2 block">
                  — The KCP Philosophy
                </cite>
              </blockquote>
            </GlassCard>

            <GlassCard className="bg-gradient-to-br from-peacock/5 to-gold/5">
              <div className="aspect-[4/3] rounded-xl bg-ivory-dark/50 flex items-center justify-center mb-6 overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-peacock/10 flex items-center justify-center">
                    <span className="font-serif text-3xl text-peacock">KCP</span>
                  </div>
                  <p className="text-muted-foreground">Our Studio</p>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                A Decade of Dreams
              </h3>
              <p className="text-muted-foreground">
                From humble beginnings to designing homes across the region, 
                our growth is measured not in projects completed, but in families 
                who call our designs their home.
              </p>
            </GlassCard>
          </div>

          {/* Values Section */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our <span className="text-peacock">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <FlipCard
                  key={value.front}
                  className="h-48"
                  direction="vertical"
                  front={
                    <div className="flex flex-col items-center gap-4">
                      <div className="p-3 bg-gold/10 rounded-xl">
                        <Icon className="w-8 h-8 text-gold" />
                      </div>
                      <span className="font-serif text-2xl font-semibold text-foreground">
                        {value.front}
                      </span>
                    </div>
                  }
                  back={
                    <p className="text-lg leading-relaxed">
                      {value.back}
                    </p>
                  }
                />
              )
            })}
          </div>
        </div>
      </section>

      <BottomNavPill />
    </main>
  )
}
