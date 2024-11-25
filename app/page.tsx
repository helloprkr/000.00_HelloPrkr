import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardMetrics } from '@/components/dashboard/metrics'
import { ActivityHeatmap } from '@/components/dashboard/activity-heatmap'
import { ProgressGraph } from '@/components/dashboard/progress-graph'
import { RecentIdeas } from '@/components/dashboard/recent-ideas'

export default function Home() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <DashboardMetrics />
      <ActivityHeatmap />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProgressGraph />
        <RecentIdeas />
      </div>
    </div>
  )
}