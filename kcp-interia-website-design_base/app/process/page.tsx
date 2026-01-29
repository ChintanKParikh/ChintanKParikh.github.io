import { DivineBackground } from "@/components/ui/divine-background"
import { TopNavbar } from "@/components/navigation/top-navbar"
import { BottomNavPill } from "@/components/navigation/bottom-nav-pill"
import { GlassCard } from "@/components/ui/glass-card"
import { MessageCircle, Lightbulb, PenTool, Hammer, Sparkles, Key } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    description: "We begin with a conversation. Understanding your lifestyle, preferences, dreams, and practical needs forms the foundation of every project.",
    duration: "1-2 days",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Concept Development",
    description: "Our designers translate your vision into initial concepts. Mood boards, space planning, and preliminary sketches bring ideas to life.",
    duration: "1-2 weeks",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Detailed Design",
    description: "Once the direction is set, we dive deep. Detailed drawings, 3D renders, material selections, and precise specifications are prepared.",
    duration: "2-4 weeks",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Execution",
    description: "Our trusted craftsmen and partners bring the designs to reality. We oversee every detail, ensuring quality at every step.",
    duration: "4-12 weeks",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Styling & Finishing",
    description: "The magic touches. Furniture placement, art curation, accessories, and final adjustments that make a house feel like home.",
    duration: "1-2 weeks",
  },
  {
    number: "06",
    icon: Key,
    title: "Handover",
    description: "The moment of joy. We walk you through your transformed space, ensuring everything exceeds expectations.",
    duration: "1 day",
  },
]

export default function ProcessPage() {
  return (
    <main className="relative min-h-screen">
      <DivineBackground />
      <TopNavbar />

      <section className="px-4 pt-28 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-peacock bg-peacock/10 rounded-full">
              How We Work
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              From Thought to{" "}
              <span className="text-peacock">Home</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our design process is thoughtful, transparent, and collaborative. 
              Here is how we transform your vision into reality.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-peacock via-gold to-lotus hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="relative">
                    <GlassCard hover className="md:ml-20">
                      {/* Step Number - Desktop */}
                      <div className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-peacock text-ivory items-center justify-center font-serif font-semibold text-sm">
                        {step.number}
                      </div>

                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex items-center gap-4 md:hidden">
                          <span className="w-10 h-10 rounded-full bg-peacock text-ivory flex items-center justify-center font-serif font-semibold text-sm">
                            {step.number}
                          </span>
                          <h3 className="font-serif text-xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                        </div>

                        <div className="hidden md:block p-3 bg-gold/10 rounded-xl shrink-0">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>

                        <div className="flex-1">
                          <h3 className="hidden md:block font-serif text-xl font-semibold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                          <span className="inline-block mt-3 text-sm text-peacock font-medium">
                            Duration: {step.duration}
                          </span>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <GlassCard className="inline-block">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Ready to begin your journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let us start with a conversation about your dream space.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-peacock text-ivory font-medium rounded-xl transition-all duration-300 hover:bg-peacock-light hover:shadow-lg"
              >
                Schedule a Discovery Call
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      <BottomNavPill />
    </main>
  )
}
