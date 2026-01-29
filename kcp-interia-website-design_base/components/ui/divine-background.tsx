"use client"

import { cn } from "@/lib/utils"

interface DivineBackgroundProps {
  variant?: "default" | "calm" | "vibrant"
  className?: string
}

export function DivineBackground({ variant = "default", className }: DivineBackgroundProps) {
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      {/* Base gradient - warm ivory */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-ivory-dark/30 to-ivory" />

      {/* Peacock blue watercolor blob - top right */}
      <div
        className={cn(
          "absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full",
          "bg-gradient-to-br from-peacock/8 via-peacock-light/5 to-transparent",
          "blur-3xl",
          variant === "vibrant" && "from-peacock/12 via-peacock-light/8"
        )}
      />

      {/* Gold flute curves - center left */}
      <div
        className={cn(
          "absolute top-1/3 -left-1/4 w-[600px] h-[600px] rounded-full",
          "bg-gradient-to-tr from-gold/10 via-gold-light/5 to-transparent",
          "blur-3xl",
          variant === "vibrant" && "from-gold/15 via-gold-light/10"
        )}
      />

      {/* Lotus pink glow - bottom center */}
      <div
        className={cn(
          "absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full",
          "bg-gradient-to-t from-lotus/6 via-lotus-light/3 to-transparent",
          "blur-3xl",
          variant === "vibrant" && "from-lotus/10 via-lotus-light/6"
        )}
      />

      {/* Soft temple light glow - top left */}
      <div
        className={cn(
          "absolute -top-1/3 left-1/4 w-[500px] h-[500px] rounded-full",
          "bg-gradient-to-br from-gold-light/8 via-ivory/5 to-transparent",
          "blur-3xl"
        )}
      />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Calm variant - reduce overall opacity */}
      {variant === "calm" && (
        <div className="absolute inset-0 bg-ivory/40" />
      )}
    </div>
  )
}
