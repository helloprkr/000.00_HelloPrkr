"use client"

import dynamic from "next/dynamic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChartSkeleton } from "@/components/dashboard/charts/line-chart-skeleton"

const Chart = dynamic(
  () => import("./chart-component").then((mod) => mod.Chart),
  {
    ssr: false,
    loading: () => <LineChartSkeleton />
  }
)

interface LineChartProps {
  title: string
  data: {
    name: string
    value: number
  }[]
}

export function LineChart({ title, data }: LineChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <Chart data={data} />
        </div>
      </CardContent>
    </Card>
  )
}