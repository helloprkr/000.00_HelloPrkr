import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Remove Grammarly attributes
  response.headers.set('Content-Security-Policy', "script-src 'self' 'unsafe-inline' 'unsafe-eval';")
  
  return response
}

export const config = {
  matcher: '/:path*',
}