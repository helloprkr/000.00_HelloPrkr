"use client"

import { useState, useEffect } from "react"
import { useWebSocket } from "@/lib/hooks/use-websocket"

interface Idea {
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

export function useIdeas() {
  const [ideas, setIdeas] = useState<Idea[]>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error>()
  const socket = useWebSocket()

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch("/api/ideas")
        if (!response.ok) throw new Error("Failed to fetch ideas")
        const data = await response.json()
        setIdeas(data)
      } catch (err) {
        setError(err as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchIdeas()

    if (socket) {
      socket.on("idea:created", (idea: Idea) => {
        setIdeas(prev => prev ? [idea, ...prev] : [idea])
      })

      socket.on("idea:updated", (updatedIdea: Idea) => {
        setIdeas(prev => prev?.map(idea => 
          idea.id === updatedIdea.id ? updatedIdea : idea
        ))
      })
    }

    return () => {
      if (socket) {
        socket.off("idea:created")
        socket.off("idea:updated")
      }
    }
  }, [socket])

  return { ideas, isLoading, error }
}