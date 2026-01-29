"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Briefcase, Heart, MessageCircle, Phone } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Favourites", href: "/design-evolution", icon: Heart },
  { name: "WhatsApp", href: "https://wa.me/", icon: MessageCircle, external: true },
  { name: "Contact", href: "/contact", icon: Phone },
]

export function BottomNavPill() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:bottom-6">
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-3 rounded-full",
          "bg-ivory/80 backdrop-blur-xl border border-ivory-dark/50",
          "shadow-lg shadow-peacock/10"
        )}
      >
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          if (item.external) {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-3 rounded-full transition-all duration-300",
                  "hover:bg-peacock/10 hover:scale-110",
                  "text-foreground/60 hover:text-peacock"
                )}
                aria-label={item.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                "hover:bg-peacock/10 hover:scale-110",
                isActive
                  ? "bg-peacock text-ivory"
                  : "text-foreground/60 hover:text-peacock"
              )}
              aria-label={item.name}
            >
              <Icon className="w-5 h-5" />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
