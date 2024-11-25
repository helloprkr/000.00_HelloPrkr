"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContributionCell } from "./contribution-cell"
import { ColorScale } from "./color-scale"
import { TodayActivity } from "./today-activity"
import { Achievements } from "./achievements"
import { useActivityData } from "@/lib/hooks/use-activity-data"
import { Skeleton } from "@/components/ui/skeleton"

function TodayActivitySkeleton() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function AchievementsSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-32" />
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col items-center p-4 space-y-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function ActivityHeatmap() {
  const { data, weeks, todayStats } = useActivityData()
  
  return (
    <div className="space-y-6">
      <TodayActivity {...todayStats} />
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Activity History</CardTitle>
            <p className="text-sm text-muted-foreground">Your idea development journey</p>
          </div>
          <ColorScale />
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full flex items-center justify-center overflow-x-auto">
            <div className="grid grid-flow-col gap-1 auto-cols-min py-4">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-1">
                  {week.map((day) => (
                    <ContributionCell
                      key={day.date}
                      date={day.date}
                      count={day.count}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Achievements data={data} />
    </div>
  )
}