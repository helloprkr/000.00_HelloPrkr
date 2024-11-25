"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"

interface IdeaCardProps {
  idea: {
    id: string
    title: string
    description: string
    status: "New" | "In Progress" | "Completed"
    createdAt: string
    author: {
      name: string
      avatar: string
    }
  }
}

export function IdeaCard({ idea }: IdeaCardProps) {
  const statusColors = {
    New: "default",
    "In Progress": "secondary",
    Completed: "success"
  } as const

  return (
    <Card className="group hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Badge variant={statusColors[idea.status]}>{idea.status}</Badge>
        <time className="text-sm text-muted-foreground">
          {formatDistanceToNow(new Date(idea.createdAt), { addSuffix: true })}
        </time>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold truncate mb-2">{idea.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {idea.description}
        </p>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={idea.author.avatar} />
            <AvatarFallback>
              {idea.author.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{idea.author.name}</span>
        </div>
      </CardContent>
    </Card>
  )
}