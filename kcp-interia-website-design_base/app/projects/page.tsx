"use client"

import { useState } from "react"
import { DivineBackground } from "@/components/ui/divine-background"
import { TopNavbar } from "@/components/navigation/top-navbar"
import { BottomNavPill } from "@/components/navigation/bottom-nav-pill"
import { GlassCard } from "@/components/ui/glass-card"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "Homes", "Offices", "Farmhouses", "Vacation", "Commercial"]

const projects = [
  {
    id: 1,
    title: "Serene Living Villa",
    category: "Homes",
    description: "A modern family home with traditional Indian elements",
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "Tech Hub Office",
    category: "Offices",
    description: "Contemporary workspace for a growing startup",
    year: "2024",
    featured: false,
  },
  {
    id: 3,
    title: "Heritage Farmhouse",
    category: "Farmhouses",
    description: "Rustic charm meets modern luxury",
    year: "2023",
    featured: true,
  },
  {
    id: 4,
    title: "Coastal Retreat",
    category: "Vacation",
    description: "Beach-inspired vacation home",
    year: "2023",
    featured: false,
  },
  {
    id: 5,
    title: "Urban Studio Apartment",
    category: "Homes",
    description: "Maximizing space in city living",
    year: "2024",
    featured: false,
  },
  {
    id: 6,
    title: "Artisan Workshop",
    category: "Commercial",
    description: "Creative space for craftsmen",
    year: "2023",
    featured: true,
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <main className="relative min-h-screen">
      <DivineBackground />
      <TopNavbar />

      <section className="px-4 pt-28 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-peacock bg-peacock/10 rounded-full">
              Our Work
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              Crafted{" "}
              <span className="text-peacock">Spaces</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the homes and spaces we have had the privilege to design
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-peacock text-ivory"
                    : "bg-ivory/60 text-foreground/70 hover:bg-ivory hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <GlassCard
                key={project.id}
                hover
                className={cn(
                  "group cursor-pointer overflow-hidden",
                  project.featured && "md:col-span-2 lg:col-span-1"
                )}
              >
                {/* Project Image Placeholder */}
                <div className="aspect-[4/3] -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 bg-gradient-to-br from-peacock/10 via-gold/5 to-lotus/10 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-ivory/50 backdrop-blur-sm flex items-center justify-center">
                      <span className="font-serif text-xl text-peacock">{project.id}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  {project.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-foreground text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                  <div className="absolute inset-0 bg-peacock/0 group-hover:bg-peacock/10 transition-colors duration-500" />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-peacock transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.description}
                    </p>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <div className="p-2 rounded-full bg-peacock/10 text-peacock group-hover:bg-peacock group-hover:text-ivory transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <BottomNavPill />
    </main>
  )
}
