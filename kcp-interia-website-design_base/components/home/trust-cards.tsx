"use client"

import { FlipCard } from "@/components/ui/flip-card"
import { Clock, Home, Wrench, Heart } from "lucide-react"

const trustCards = [
  {
    icon: Clock,
    front: "10+ Years",
    back: "A decade of trust, craft, and lived-in design",
  },
  {
    icon: Home,
    front: "100+ Projects",
    back: "Homes, offices, studios, farmhouses & more",
  },
  {
    icon: Wrench,
    front: "End-to-End",
    back: "From concept to keys-in-hand delivery",
  },
  {
    icon: Heart,
    front: "Client-First",
    back: "Every design begins with listening",
  },
]

export function TrustCards() {
  return (
    <section className="px-4 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why Choose <span className="text-peacock">KCP Interia</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hover over each card to discover what makes us different
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card) => {
            const Icon = card.icon
            return (
              <FlipCard
                key={card.front}
                className="h-48"
                front={
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-peacock/10 rounded-xl">
                      <Icon className="w-8 h-8 text-peacock" />
                    </div>
                    <span className="font-serif text-2xl font-semibold text-foreground">
                      {card.front}
                    </span>
                  </div>
                }
                back={
                  <p className="text-lg leading-relaxed">
                    {card.back}
                  </p>
                }
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
