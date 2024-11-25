"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generateActivityData, ActivityDay, calculateStreak, calculateLevel, calculateNextLevelProgress } from "@/lib/utils/activity"
import { TodayActivity } from "./activity-heatmap/today-activity"
import { Achievements } from "./activity-heatmap/achievements"
import { cn } from "@/lib/utils"

interface ActivityHeatmapProps {
  className?: string
}

export function ActivityHeatmap({ className }: ActivityHeatmapProps) {
  // Generate activity data with a fixed seed for consistent demo data
  const activityData = generateActivityData(12345)
  const today = activityData[activityData.length - 1]
  const streak = calculateStreak(activityData)
  const level = calculateLevel(activityData)
  const nextLevel = calculateNextLevelProgress(activityData)

  // Group data by weeks for the heatmap
  const weeks: ActivityDay[][] = []
  let currentWeek: ActivityDay[] = []
  
  activityData.forEach((day, index) => {
    currentWeek.push(day)
    if (currentWeek.length === 7 || index === activityData.length - 1) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  })

  const getIntensityClass = (count: number) => {
    if (count === 0) return "bg-muted hover:bg-muted/80"
    if (count <= 1) return "bg-primary/20 hover:bg-primary/30"
    if (count <= 2) return "bg-primary/40 hover:bg-primary/50"
    if (count <= 3) return "bg-primary/60 hover:bg-primary/70"
    return "bg-primary/80 hover:bg-primary/90"
  }

  return (
    <div className={cn("space-y-6", className)}>
      <TodayActivity 
        count={today.count}
        streak={streak}
        level={level}
        nextLevel={nextLevel}
      />

      <Card>
        <CardHeader>
          <CardTitle>Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-2">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={cn(
                        "w-3 h-3 rounded-sm transition-colors hover:ring-2 hover:ring-ring",
                        getIntensityClass(day.count)
                      )}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-muted" />
                <div className="w-3 h-3 rounded-sm bg-primary/20" />
                <div className="w-3 h-3 rounded-sm bg-primary/40" />
                <div className="w-3 h-3 rounded-sm bg-primary/60" />
                <div className="w-3 h-3 rounded-sm bg-primary/80" />
              </div>
              <span>More</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Achievements data={activityData} />
    </div>
  )
}