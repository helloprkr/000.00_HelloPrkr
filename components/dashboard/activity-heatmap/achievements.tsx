"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Zap, Crown, Star, Flame, Brain, Rocket } from "lucide-react"
import { ActivityDay } from "@/lib/utils/activity"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface Achievement {
  icon: typeof Trophy
  title: string
  description: string
  unlocked: boolean
  progress?: {
    current: number
    total: number
  }
}

interface AchievementsProps {
  data: ActivityDay[]
}

export function Achievements({ data }: AchievementsProps) {
  const achievements: Achievement[] = [
    {
      icon: Trophy,
      title: "First Milestone",
      description: "Complete your first idea",
      unlocked: true
    },
    {
      icon: Target,
      title: "Consistent Creator",
      description: "7 day streak",
      unlocked: true,
      progress: {
        current: 5,
        total: 7
      }
    },
    {
      icon: Zap,
      title: "Idea Machine",
      description: "Submit 5 ideas in one day",
      unlocked: false,
      progress: {
        current: 3,
        total: 5
      }
    },
    {
      icon: Crown,
      title: "Innovation Master",
      description: "Reach level 10",
      unlocked: false,
      progress: {
        current: 4,
        total: 10
      }
    },
    {
      icon: Star,
      title: "Rising Star",
      description: "Get 3 ideas marked as featured",
      unlocked: false,
      progress: {
        current: 1,
        total: 3
      }
    },
    {
      icon: Flame,
      title: "Hot Streak",
      description: "Maintain a 30-day streak",
      unlocked: false,
      progress: {
        current: 12,
        total: 30
      }
    },
    {
      icon: Brain,
      title: "Thought Leader",
      description: "Have 10 ideas in progress",
      unlocked: false,
      progress: {
        current: 6,
        total: 10
      }
    },
    {
      icon: Rocket,
      title: "MVP Champion",
      description: "Complete 5 MVPs",
      unlocked: false,
      progress: {
        current: 2,
        total: 5
      }
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "flex flex-col items-center p-4 text-center rounded-lg border space-y-2",
                    achievement.unlocked
                      ? "bg-primary/5 border-primary/10"
                      : "bg-muted/10 border-muted/20"
                  )}
                >
                  <achievement.icon 
                    className={cn(
                      "h-8 w-8",
                      achievement.unlocked ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  {achievement.progress && !achievement.unlocked && (
                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all"
                        style={{ 
                          width: `${(achievement.progress.current / achievement.progress.total) * 100}%`
                        }}
                      />
                    </div>
                  )}
                  <Badge variant={achievement.unlocked ? "default" : "outline"}>
                    {achievement.unlocked ? "Unlocked" : "Locked"}
                  </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                {achievement.unlocked ? (
                  <p>Achievement unlocked!</p>
                ) : achievement.progress ? (
                  <p>{achievement.progress.current}/{achievement.progress.total} progress</p>
                ) : (
                  <p>Keep working to unlock this achievement</p>
                )}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}