"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

interface ContributionCellProps {
  date: string
  count: number
}

export const ContributionCell = memo(function ContributionCell({ date, count }: ContributionCellProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })

  const intensity = Math.min(Math.floor(count / 2), 4)
  const baseClass = "w-3 h-3 rounded-sm transition-colors hover:ring-2 hover:ring-ring"
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(baseClass, {
            "bg-muted": intensity === 0,
            "bg-primary/20": intensity === 1,
            "bg-primary/40": intensity === 2,
            "bg-primary/60": intensity === 3,
            "bg-primary/80": intensity === 4,
          })}
          data-count={count}
          data-date={date}
        />
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-medium">{count} contributions</p>
        <p className="text-xs text-muted-foreground">{formattedDate}</p>
      </TooltipContent>
    </Tooltip>
  )
})