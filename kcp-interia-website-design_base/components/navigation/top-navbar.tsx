"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Cinzel } from "next/font/google"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Process", href: "/process" },
  { name: "Design Evolution", href: "/design-evolution" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
]

export function TopNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-2xl transition-all duration-500",
          "backdrop-blur-xl border border-ivory-dark/50",
          scrolled ? "bg-ivory/90 shadow-lg shadow-peacock/5" : "bg-ivory/60"
        )}
      >
        <div className="flex flex-col items-center gap-3">
          {/* Main Heading / Logo */}
          <Link href="/" className="flex items-center justify-center">
            <span
              className={cn(
                cinzel.className,
                "text-3xl font-semibold text-peacock tracking-wide"
              )}
            >
              KCP Interia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                  "hover:bg-peacock/10 hover:text-peacock",
                  pathname === item.href
                    ? "text-peacock"
                    : "text-foreground/70"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-peacock/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-peacock" />
            ) : (
              <Menu className="w-5 h-5 text-peacock" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-peacock/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setMobileMenuOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
          />
          <div className="absolute top-20 left-4 right-4 bg-ivory/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-ivory-dark/50">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                    "hover:bg-peacock/10 hover:text-peacock",
                    pathname === item.href
                      ? "bg-peacock/10 text-peacock"
                      : "text-foreground/70"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
