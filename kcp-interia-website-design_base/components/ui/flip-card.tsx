"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface FlipCardProps {
  front: ReactNode
  back: ReactNode
  className?: string
  direction?: "horizontal" | "vertical"
}

export function FlipCard({ front, back, className, direction = "horizontal" }: FlipCardProps) {
  return (
    <div
      className={cn(
        "group perspective-1000",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-3d",
          direction === "horizontal"
            ? "group-hover:rotate-y-180"
            : "group-hover:rotate-x-180"
        )}
      >
        {/* Front */}
        <div
          className={cn(
            "absolute inset-0 backface-hidden",
            "rounded-2xl p-6",
            "bg-ivory/70 backdrop-blur-xl",
            "border border-ivory-dark/50",
            "shadow-lg shadow-peacock/5",
            "flex flex-col items-center justify-center text-center"
          )}
        >
          {front}
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute inset-0 backface-hidden",
            direction === "horizontal" ? "rotate-y-180" : "rotate-x-180",
            "rounded-2xl p-6",
            "bg-peacock/90 backdrop-blur-xl",
            "border border-peacock-light/30",
            "shadow-lg shadow-peacock/20",
            "flex flex-col items-center justify-center text-center text-ivory"
          )}
        >
          {back}
        </div>
      </div>
    </div>
  )
}
