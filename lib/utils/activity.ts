export interface ActivityDay {
  date: string
  count: number
}

// Deterministic random number generator
function mulberry32(a: number) {
  return function() {
    let t = a += 0x6D2B79F5
    t = Math.imul(t ^ t >>> 15, t | 1)
    t ^= t + Math.imul(t ^ t >>> 7, t | 61)
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

export function calculateStreak(data: ActivityDay[]): number {
  let streak = 0
  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i].count > 0) streak++
    else break
  }
  return streak
}

export function calculateLevel(data: ActivityDay[]): number {
  const totalContributions = data.reduce((sum, day) => sum + day.count, 0)
  return Math.floor(Math.sqrt(totalContributions / 10)) + 1
}

export function calculateNextLevelProgress(data: ActivityDay[]): {
  current: number
  total: number
  percentage: number
} {
  const totalContributions = data.reduce((sum, day) => sum + day.count, 0)
  const currentLevel = Math.floor(Math.sqrt(totalContributions / 10))
  const nextLevelTotal = Math.pow(currentLevel + 1, 2) * 10
  const current = totalContributions - (Math.pow(currentLevel, 2) * 10)
  const total = nextLevelTotal - (Math.pow(currentLevel, 2) * 10)
  
  return {
    current,
    total,
    percentage: (current / total) * 100
  }
}

export function generateActivityData(seed: number): ActivityDay[] {
  const data: ActivityDay[] = []
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  
  const random = mulberry32(seed)
  
  for (let i = 364; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    
    // Generate more realistic activity patterns
    const dayOfWeek = date.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    const baseChance = isWeekend ? 0.3 : 0.7
    
    // Add some periodic intensity to simulate project cycles
    const cycleIntensity = Math.sin(i / 14) * 0.3 + 0.7
    
    const count = Math.floor(random() * 5 * baseChance * cycleIntensity)
    
    data.push({
      date: date.toISOString().split('T')[0],
      count
    })
  }
  
  return data
}