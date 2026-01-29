"use client"

import { useState } from "react"
import { DivineBackground } from "@/components/ui/divine-background"
import { TopNavbar } from "@/components/navigation/top-navbar"
import { BottomNavPill } from "@/components/navigation/bottom-nav-pill"
import { GlassCard } from "@/components/ui/glass-card"
import { cn } from "@/lib/utils"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    project: "Villa Serenity",
    type: "Home",
    quote: "KCP Interia did not just design our home; they understood our soul. Every corner reflects who we are as a family. Walking in feels like a warm embrace.",
    rating: 5,
    year: "2024",
  },
  {
    id: 2,
    name: "Anil Kapoor",
    project: "Tech Hub Office",
    type: "Office",
    quote: "Our workspace transformation has been nothing short of magical. Employee satisfaction soared, and clients are always impressed. Best investment we made.",
    rating: 5,
    year: "2024",
  },
  {
    id: 3,
    name: "Meera & Vijay",
    project: "Heritage Farmhouse",
    type: "Farmhouse",
    quote: "They preserved the heritage of our ancestral land while making it livable for modern times. The attention to detail is extraordinary.",
    rating: 5,
    year: "2023",
  },
  {
    id: 4,
    name: "Dr. Sunita Reddy",
    project: "Coastal Retreat",
    type: "Vacation Home",
    quote: "Every visit to our beach home feels like a vacation from the moment we step in. KCP understood exactly what we needed - peace and beauty.",
    rating: 5,
    year: "2023",
  },
  {
    id: 5,
    name: "The Mehta Family",
    project: "Urban Living Apartment",
    type: "Home",
    quote: "In a compact space, they created wonders. Smart storage, beautiful aesthetics, and somehow it feels spacious. We are forever grateful.",
    rating: 5,
    year: "2024",
  },
  {
    id: 6,
    name: "Artisan Collective",
    project: "Creative Workshop",
    type: "Commercial",
    quote: "Our craft space now inspires creativity at every turn. The blend of functionality and aesthetics is perfect for our artisans.",
    rating: 5,
    year: "2023",
  },
]

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="relative min-h-screen">
      <DivineBackground variant="calm" />
      <TopNavbar />

      <section className="px-4 pt-28 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-gold bg-gold/10 rounded-full">
              Happy Customers
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              Words That{" "}
              <span className="text-peacock">Warm Our Hearts</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nothing means more to us than the happiness of the families and businesses we serve
            </p>
          </div>

          {/* Featured Testimonial Carousel */}
          <div className="relative mb-16">
            <GlassCard className="max-w-3xl mx-auto">
              <div className="text-center">
                <Quote className="w-12 h-12 mx-auto mb-6 text-gold/50" />
                
                <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-balance">
                  {'"'}{testimonials[currentIndex].quote}{'"'}
                </p>

                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                <h4 className="font-serif text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].project} • {testimonials[currentIndex].type}
                </p>
              </div>
            </GlassCard>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-ivory/80 backdrop-blur-sm border border-ivory-dark/50 text-foreground/70 hover:text-peacock hover:bg-ivory transition-all duration-300 hidden md:block"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-ivory/80 backdrop-blur-sm border border-ivory-dark/50 text-foreground/70 hover:text-peacock hover:bg-ivory transition-all duration-300 hidden md:block"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-6 md:hidden">
              <button
                type="button"
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-ivory/80 backdrop-blur-sm border border-ivory-dark/50 text-foreground/70 hover:text-peacock"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-ivory/80 backdrop-blur-sm border border-ivory-dark/50 text-foreground/70 hover:text-peacock"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentIndex === index
                      ? "bg-peacock w-6"
                      : "bg-peacock/30 hover:bg-peacock/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* All Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <GlassCard key={testimonial.id} hover className="h-full">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-gold/30" />
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-6 line-clamp-4">
                  {'"'}{testimonial.quote}{'"'}
                </p>

                <div className="mt-auto pt-4 border-t border-ivory-dark/50">
                  <h4 className="font-serif font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.project} • {testimonial.year}
                  </p>
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
