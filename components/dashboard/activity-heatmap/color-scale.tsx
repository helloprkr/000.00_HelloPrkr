"use client"

import { memo } from "react"

export const ColorScale = memo(function ColorScale() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">Less</span>
      <div className="flex gap-1">
        <div className="w-3 h-3 rounded-sm bg-muted" />
        <div className="w-3 h-3 rounded-sm bg-primary/20" />
        <div className="w-3 h-3 rounded-sm bg-primary/40" />
        <div className="w-3 h-3 rounded-sm bg-primary/60" />
        <div className="w-3 h-3 rounded-sm bg-primary/80" />
      </div>
      <span className="text-muted-foreground">More</span>
    </div>
  )
})