"use client"

import { useState } from "react"
import { DivineBackground } from "@/components/ui/divine-background"
import { TopNavbar } from "@/components/navigation/top-navbar"
import { BottomNavPill } from "@/components/navigation/bottom-nav-pill"
import { GlassCard } from "@/components/ui/glass-card"
import { cn } from "@/lib/utils"
import { Heart, Lightbulb, Sparkles, Clock } from "lucide-react"

const tabs = [
  { id: "favourites", label: "Client Favourites", icon: Heart },
  { id: "new", label: "New Ideas", icon: Lightbulb },
  { id: "concepts", label: "Concepts", icon: Sparkles },
  { id: "recent", label: "Recently Implemented", icon: Clock },
]

const items = {
  favourites: [
    { id: 1, title: "Floating Staircase Design", category: "Architecture", likes: 234 },
    { id: 2, title: "Hidden Storage Solutions", category: "Functionality", likes: 189 },
    { id: 3, title: "Indoor Garden Walls", category: "Biophilic", likes: 312 },
    { id: 4, title: "Warm Wood & Brass Accents", category: "Materials", likes: 276 },
  ],
  new: [
    { id: 5, title: "Smart Home Integration", category: "Technology", likes: 45 },
    { id: 6, title: "Modular Living Spaces", category: "Flexibility", likes: 67 },
    { id: 7, title: "Sustainable Materials", category: "Eco-Friendly", likes: 89 },
    { id: 8, title: "Multi-generational Homes", category: "Family", likes: 56 },
  ],
  concepts: [
    { id: 9, title: "Zen Meditation Corners", category: "Wellness", likes: 123 },
    { id: 10, title: "Open Kitchen Islands", category: "Social", likes: 156 },
    { id: 11, title: "Home Office Pods", category: "Work", likes: 98 },
    { id: 12, title: "Artisan Craft Spaces", category: "Hobby", likes: 87 },
  ],
  recent: [
    { id: 13, title: "Villa Serenity - Main Living", category: "Completed 2024", likes: 445 },
    { id: 14, title: "Tech Hub - Collaboration Zone", category: "Completed 2024", likes: 234 },
    { id: 15, title: "Coastal Retreat - Master Suite", category: "Completed 2024", likes: 312 },
    { id: 16, title: "Heritage Home - Kitchen", category: "Completed 2024", likes: 289 },
  ],
}

export default function DesignEvolutionPage() {
  const [activeTab, setActiveTab] = useState("favourites")

  return (
    <main className="relative min-h-screen">
      <DivineBackground variant="vibrant" />
      <TopNavbar />

      <section className="px-4 pt-28 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-lotus bg-lotus/10 rounded-full">
              Living Gallery
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              Design{" "}
              <span className="text-peacock">Evolution</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A living showcase of our ideas, concepts, and client favorites. 
              This is where inspiration meets reality.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-peacock text-ivory shadow-lg shadow-peacock/20"
                      : "bg-ivory/60 text-foreground/70 hover:bg-ivory hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items[activeTab as keyof typeof items].map((item) => (
              <GlassCard key={item.id} hover className="group cursor-pointer">
                {/* Image Placeholder */}
                <div className="aspect-video -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 bg-gradient-to-br from-peacock/10 via-gold/5 to-lotus/10 flex items-center justify-center relative overflow-hidden rounded-t-2xl">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-ivory/50 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-peacock" />
                    </div>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                  </div>
                  <div className="absolute inset-0 bg-peacock/0 group-hover:bg-peacock/5 transition-colors duration-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-peacock transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-lotus">
                    <Heart className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{item.likes}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              This gallery is updated regularly with new ideas and completed projects.
            </p>
          </div>
        </div>
      </section>

      <BottomNavPill />
    </main>
  )
}
