import { ReactNode } from 'react';
import { BottomTabBar } from './BottomTabBar';
import { PageTransition } from './PageTransition';
import { cn } from '@/lib/utils';

interface MobileLayoutProps {
  children: ReactNode;
  showTabBar?: boolean;
  className?: string;
  headerContent?: ReactNode;
}

export function MobileLayout({
  children,
  showTabBar = true,
  className,
  headerContent,
}: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      {/* Header */}
      {headerContent && (
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          {headerContent}
        </header>
      )}

      {/* Main Content */}
      <main
        className={cn(
          'flex-1 overflow-auto',
          showTabBar && 'pb-16', // Space for tab bar
          className
        )}
      >
        <PageTransition>{children}</PageTransition>
      </main>

      {/* Bottom Tab Bar */}
      {showTabBar && <BottomTabBar />}
    </div>
  );
}
