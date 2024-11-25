import { Skeleton } from "@/components/ui/skeleton"

export function LineChartSkeleton() {
  return (
    <div className="h-[200px] w-full flex items-center justify-center">
      <Skeleton className="h-full w-full" />
    </div>
  )
}