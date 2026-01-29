"use client"

import React from "react"

import { useState } from "react"
import { DivineBackground } from "@/components/ui/divine-background"
import { TopNavbar } from "@/components/navigation/top-navbar"
import { BottomNavPill } from "@/components/navigation/bottom-nav-pill"
import { GlassCard } from "@/components/ui/glass-card"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98490 77702",
    href: "tel:+919849077702",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kcpinteria@gmail.com",
    href: "mailto:hello@kcpinteria.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat, 10am - 7pm",
    href: "#",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <main className="relative min-h-screen">
      <DivineBackground />
      <TopNavbar />

      <section className="px-4 pt-28 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-peacock bg-peacock/10 rounded-full">
              Start a Project
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              Let us Create{" "}
              <span className="text-peacock">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every great design begins with a conversation. Tell us about your vision, 
              and let us bring it to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <GlassCard>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-peacock/10 flex items-center justify-center">
                      <Send className="w-8 h-8 text-peacock" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We will get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: "", email: "", phone: "", projectType: "", message: "" })
                      }}
                      className="text-peacock font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-ivory/50 border border-ivory-dark/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-peacock/50 focus:border-peacock transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-ivory/50 border border-ivory-dark/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-peacock/50 focus:border-peacock transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-ivory/50 border border-ivory-dark/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-peacock/50 focus:border-peacock transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-ivory/50 border border-ivory-dark/50 text-foreground focus:outline-none focus:ring-2 focus:ring-peacock/50 focus:border-peacock transition-all"
                        >
                          <option value="">Select a type</option>
                          <option value="home">Home / Apartment</option>
                          <option value="office">Office / Studio</option>
                          <option value="farmhouse">Farmhouse</option>
                          <option value="vacation">Vacation Home</option>
                          <option value="commercial">Commercial Space</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Tell Us About Your Vision
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-ivory/50 border border-ivory-dark/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-peacock/50 focus:border-peacock transition-all resize-none"
                        placeholder="Share your ideas, inspirations, requirements, or simply say hello..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-peacock text-ivory font-medium rounded-xl transition-all duration-300 hover:bg-peacock-light hover:shadow-lg hover:shadow-peacock/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-ivory/30 border-t-ivory rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </GlassCard>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <GlassCard>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-peacock/5 transition-colors group"
                      >
                        <div className="p-2 bg-peacock/10 rounded-lg group-hover:bg-peacock/20 transition-colors">
                          <Icon className="w-5 h-5 text-peacock" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium text-foreground">{info.value}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </GlassCard>

              <GlassCard className="bg-gradient-to-br from-peacock/5 to-gold/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Quick Chat
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Prefer WhatsApp? Send us a message directly for faster response.
                </p>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <BottomNavPill />
    </main>
  )
}
