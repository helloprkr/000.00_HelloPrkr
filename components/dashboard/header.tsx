"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle, Download } from "lucide-react"
import { useRouter } from "next/navigation"

export function DashboardHeader() {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Track and manage your innovation journey
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Button
          onClick={() => router.push("/ideas/new")}
          className="flex items-center gap-2"
        >
          <PlusCircle className="h-4 w-4" />
          New Idea
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>
    </div>
  )
}