import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import {
  LayoutDashboard,
  Lightbulb,
  BarChart3,
  UserCircle,
} from 'lucide-react';

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Lightbulb className="h-6 w-6" />
              <span className="font-bold text-xl">IdeaFlow</span>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Button>
              </Link>
              <Link href="/ideas">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Lightbulb className="h-4 w-4" />
                  <span>Ideas</span>
                </Button>
              </Link>
              <Link href="/analytics">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <UserCircle className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}