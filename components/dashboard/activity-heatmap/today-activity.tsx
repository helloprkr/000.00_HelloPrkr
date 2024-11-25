"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trophy, Flame, Star, ArrowUp } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

interface TodayActivityProps {
  count: number
  streak: number
  level: number
  nextLevel: {
    current: number
    total: number
    percentage: number
  }
}

export function TodayActivity({ count, streak, level, nextLevel }: TodayActivityProps) {
  return (
    <Card className="bg-primary/5 border-primary/10">
      <CardContent className="pt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-3 cursor-help">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Today</p>
                  <p className="text-3xl font-bold">{count}</p>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ideas contributed today</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-3 cursor-help">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Flame className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Streak</p>
                  <p className="text-3xl font-bold">{streak} days</p>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Consecutive days with contributions</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-3 cursor-help">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Level</p>
                  <p className="text-3xl font-bold">{level}</p>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Your current innovation level</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-3 cursor-help">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ArrowUp className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Next Level</p>
                    <p className="text-sm font-medium">{nextLevel.current}/{nextLevel.total}</p>
                  </div>
                  <Progress value={nextLevel.percentage} className="mt-3" />
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Progress to next level</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  )
}