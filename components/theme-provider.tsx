"use client"

import { ThemeProvider as NextThemeProvider } from "next-themes"
import { TooltipProvider } from "@/components/ui/tooltip"

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}) {
  return (
    <NextThemeProvider {...props}>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </NextThemeProvider>
  )
}