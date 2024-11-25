"use client"

import { useMemo } from "react"
import { LineChart } from "./charts/line-chart"

export function ProgressGraph() {
  const data = useMemo(() => [
    { name: "Jan", ideas: 4, completed: 1 },
    { name: "Feb", ideas: 3, completed: 2 },
    { name: "Mar", ideas: 6, completed: 3 },
    { name: "Apr", ideas: 8, completed: 4 },
    { name: "May", ideas: 7, completed: 3 },
    { name: "Jun", ideas: 9, completed: 5 },
  ], [])

  const lines = useMemo(() => [
    { key: "ideas", color: "hsl(var(--primary))" },
    { key: "completed", color: "hsl(var(--primary) / 0.5)" },
  ], [])

  return <LineChart data={data} lines={lines} title="Progress Overview" />
}