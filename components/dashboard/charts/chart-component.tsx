"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

interface ChartProps {
  data: {
    name: string
    value: number
  }[]
}

const defaultAxisProps = {
  tick: { fontSize: 12 },
  stroke: "currentColor",
  strokeOpacity: 0.1
}

export function Chart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis 
          {...defaultAxisProps}
          dataKey="name"
          padding={{ left: 10, right: 10 }}
        />
        <YAxis
          {...defaultAxisProps}
          width={35}
          padding={{ top: 20, bottom: 20 }}
        />
        <Tooltip 
          contentStyle={{
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)"
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}