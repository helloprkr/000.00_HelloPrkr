export function generateActivityData() {
  const data = []
  const now = new Date()
  
  // Use a fixed seed for consistent data between server and client
  const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate()
  const random = (n: number) => {
    const x = Math.sin(n) * 10000
    return Math.floor((x - Math.floor(x)) * 5)
  }
  
  for (let i = 0; i < 365; i++) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    
    // Generate deterministic count based on date
    const count = random(seed + i)
    
    data.unshift({
      date: date.toISOString().split("T")[0],
      count
    })
  }
  
  return data
}