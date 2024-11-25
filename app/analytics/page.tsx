"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { MetricCard } from "@/components/analytics/metric-card"
import { StatusBreakdown } from "@/components/analytics/status-breakdown"
import { WeeklyTrend } from "@/components/analytics/weekly-trend"
import { TopContributors } from "@/components/analytics/top-contributors"
import { useAnalytics } from "@/lib/hooks/use-analytics"
import { exportToCSV } from "@/lib/utils/export"

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("7D")
  const { data, isLoading } = useAnalytics(dateRange)

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <div className="flex gap-4">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7D">Last 7 days</SelectItem>
              <SelectItem value="30D">Last 30 days</SelectItem>
              <SelectItem value="90D">Last 90 days</SelectItem>
              <SelectItem value="YTD">Year to date</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={() => exportToCSV(data)}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Ideas"
          value={data?.totalIdeas}
          change={data?.totalIdeasChange}
          isLoading={isLoading}
        />
        <MetricCard
          title="In Progress"
          value={data?.inProgressIdeas}
          change={data?.inProgressIdeasChange}
          isLoading={isLoading}
        />
        <MetricCard
          title="Completed"
          value={data?.completedIdeas}
          change={data?.completedIdeasChange}
          isLoading={isLoading}
        />
        <MetricCard
          title="Contributors"
          value={data?.totalContributors}
          change={data?.totalContributorsChange}
          isLoading={isLoading}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <StatusBreakdown data={data?.statusBreakdown} isLoading={isLoading} />
        <WeeklyTrend data={data?.weeklyTrend} isLoading={isLoading} />
      </div>

      <TopContributors data={data?.topContributors} isLoading={isLoading} />
    </div>
  )
}