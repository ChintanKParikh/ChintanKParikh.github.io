"use client"

import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowRight, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-32">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-peacock/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <GlassCard className="max-w-4xl w-full text-center relative z-10">
        {/* Decorative element */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />

        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-peacock bg-peacock/10 rounded-full">
          Premium Interior Design
        </span>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight text-balance">
          Making Homes.{" "}
          <span className="text-peacock">Making Dreams.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          10+ years of crafting homes, studios, offices & soulful spaces. 
          Where every design tells a story and every space feels like home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-peacock text-ivory font-medium rounded-xl transition-all duration-300 hover:bg-peacock-light hover:shadow-lg hover:shadow-peacock/20 hover:-translate-y-0.5"
          >
            View Our Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-ivory/80 text-foreground font-medium rounded-xl border border-ivory-dark/50 transition-all duration-300 hover:bg-ivory hover:shadow-lg hover:shadow-peacock/10 hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            Book a Consultation
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-ivory-dark/50 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gold rounded-full" />
            Trusted by 100+ families
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-peacock rounded-full" />
            End-to-end delivery
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-lotus rounded-full" />
            Client-first approach
          </div>
        </div>
      </GlassCard>
    </section>
  )
}
