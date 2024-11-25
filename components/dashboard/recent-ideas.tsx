"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"

const recentIdeas = [
  {
    id: 1,
    title: "AI-Powered Content Generator",
    description: "Create high-quality content using advanced AI models",
    status: "In Progress",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    createdAt: new Date(2024, 2, 15),
  },
  {
    id: 2,
    title: "Smart Home Energy Monitor",
    description: "Track and optimize home energy consumption in real-time",
    status: "Planning",
    author: {
      name: "Mike Ross",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    createdAt: new Date(2024, 2, 14),
  },
  {
    id: 3,
    title: "Virtual Reality Fitness App",
    description: "Immersive workout experience in virtual environments",
    status: "MVP",
    author: {
      name: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    createdAt: new Date(2024, 2, 13),
  },
]

export function RecentIdeas() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Ideas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recentIdeas.map((idea) => (
            <div
              key={idea.id}
              className="flex items-start justify-between space-x-4"
            >
              <div className="space-y-1">
                <h4 className="font-semibold">{idea.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {idea.description}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={idea.author.avatar} />
                      <AvatarFallback>
                        {idea.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">
                      {idea.author.name}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {formatDistanceToNow(idea.createdAt, { addSuffix: true })}
                  </span>
                </div>
              </div>
              <Badge
                variant={
                  idea.status === "MVP"
                    ? "default"
                    : idea.status === "In Progress"
                    ? "secondary"
                    : "outline"
                }
              >
                {idea.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}