"use client"

import { useMemo } from "react"
import { ActivityDay, generateActivityData, calculateStreak, calculateLevel, calculateNextLevelProgress } from "@/lib/utils/activity"

export function useActivityData() {
  // Generate deterministic data based on current date
  const data = useMemo<ActivityDay[]>(() => {
    const now = new Date()
    const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate()
    return generateActivityData(seed)
  }, [])
  
  const weeks = useMemo(() => {
    const result: ActivityDay[][] = []
    for (let i = 0; i < data.length; i += 7) {
      result.push(data.slice(i, Math.min(i + 7, data.length)))
    }
    return result
  }, [data])

  const todayStats = useMemo(() => {
    const today = data[data.length - 1]
    return {
      count: today.count,
      streak: calculateStreak(data),
      level: calculateLevel(data),
      nextLevel: calculateNextLevelProgress(data)
    }
  }, [data])

  return { data, weeks, todayStats }
}