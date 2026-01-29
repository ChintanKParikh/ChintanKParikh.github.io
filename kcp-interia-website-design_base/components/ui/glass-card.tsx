import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 md:p-8",
        "bg-ivory/60 backdrop-blur-xl",
        "border border-ivory-dark/50",
        "shadow-xl shadow-peacock/5",
        hover && "transition-all duration-500 hover:shadow-2xl hover:shadow-peacock/10 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  )
}
