import { DivineBackground } from "@/components/ui/divine-background"
import { TopNavbar } from "@/components/navigation/top-navbar"
import { BottomNavPill } from "@/components/navigation/bottom-nav-pill"
import { FlipCard } from "@/components/ui/flip-card"
import { Home, Building2, TreePine, Warehouse, Palmtree, Key, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Homes & Apartments",
    description: "Transform your living space into a sanctuary that reflects your personality and lifestyle. From cozy apartments to sprawling villas.",
    color: "peacock",
  },
  {
    icon: Building2,
    title: "Offices & Studios",
    description: "Create inspiring workspaces that boost productivity and reflect your brand identity. Modern, functional, and beautifully designed.",
    color: "gold",
  },
  {
    icon: TreePine,
    title: "Farmhouses",
    description: "Blend rustic charm with modern comfort. Our farmhouse designs celebrate nature while providing all contemporary amenities.",
    color: "lotus",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Workspaces",
    description: "Industrial spaces reimagined. We transform warehouses into functional, aesthetic environments for modern businesses.",
    color: "peacock",
  },
  {
    icon: Palmtree,
    title: "Vacation Homes",
    description: "Design your perfect getaway. Spaces that capture the essence of relaxation while maintaining style and comfort.",
    color: "gold",
  },
  {
    icon: Key,
    title: "Turnkey Interiors",
    description: "Complete end-to-end solutions. From concept to keys-in-hand, we handle everything so you can focus on what matters.",
    color: "lotus",
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "peacock":
      return { bg: "bg-peacock/10", text: "text-peacock", cardBg: "bg-peacock/90" }
    case "gold":
      return { bg: "bg-gold/10", text: "text-gold", cardBg: "bg-gold/90" }
    case "lotus":
      return { bg: "bg-lotus/10", text: "text-lotus", cardBg: "bg-lotus/90" }
    default:
      return { bg: "bg-peacock/10", text: "text-peacock", cardBg: "bg-peacock/90" }
  }
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <DivineBackground />
      <TopNavbar />

      <section className="px-4 pt-28 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-peacock bg-peacock/10 rounded-full">
              What We Design
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              Spaces That{" "}
              <span className="text-peacock">Inspire</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From intimate apartments to expansive farmhouses, we bring the same 
              passion and precision to every project we undertake.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              const colors = getColorClasses(service.color)
              return (
                <FlipCard
                  key={service.title}
                  className="h-72"
                  front={
                    <div className="flex flex-col items-center gap-4">
                      <div className={`p-4 ${colors.bg} rounded-2xl`}>
                        <Icon className={`w-10 h-10 ${colors.text}`} />
                      </div>
                      <span className="font-serif text-xl font-semibold text-foreground">
                        {service.title}
                      </span>
                      <p className="text-sm text-muted-foreground text-center line-clamp-2">
                        Hover to learn more
                      </p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col items-center gap-4">
                      <p className="text-base leading-relaxed text-center mb-2">
                        {service.description}
                      </p>
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-1 text-sm font-medium text-ivory/80 hover:text-ivory transition-colors"
                      >
                        View Projects
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  }
                />
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 rounded-2xl bg-ivory/60 backdrop-blur-xl border border-ivory-dark/50">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Have a unique project in mind?
              </h3>
              <p className="text-muted-foreground mb-6">
                We love challenges. Let us bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-peacock text-ivory font-medium rounded-xl transition-all duration-300 hover:bg-peacock-light hover:shadow-lg"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BottomNavPill />
    </main>
  )
}
