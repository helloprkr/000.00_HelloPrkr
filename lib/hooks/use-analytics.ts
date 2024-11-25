"use client"

import { useState, useEffect } from "react"
import { useWebSocket } from "@/lib/hooks/use-websocket"

interface AnalyticsData {
  totalIdeas: number
  totalIdeasChange: number
  inProgressIdeas: number
  inProgressIdeasChange: number
  completedIdeas: number
  completedIdeasChange: number
  totalContributors: number
  totalContributorsChange: number
  statusBreakdown: {
    name: string
    value: number
  }[]
  weeklyTrend: {
    date: string
    count: number
  }[]
  topContributors: {
    name: string
    avatar: string
    count: number
  }[]
}

export function useAnalytics(dateRange: string) {
  const [data, setData] = useState<AnalyticsData>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error>()
  const socket = useWebSocket()

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch(`/api/analytics?range=${dateRange}`)
        if (!response.ok) throw new Error("Failed to fetch analytics")
        const data = await response.json()
        setData(data)
      } catch (err) {
        setError(err as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAnalytics()

    if (socket) {
      socket.on("analytics:updated", (newData: AnalyticsData) => {
        setData(newData)
      })
    }

    return () => {
      if (socket) {
        socket.off("analytics:updated")
      }
    }
  }, [dateRange, socket])

  return { data, isLoading, error }
}