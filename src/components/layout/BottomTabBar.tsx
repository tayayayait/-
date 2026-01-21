import { cn } from '@/lib/utils';
import { NavLink, useLocation } from 'react-router-dom';
import { Map, Calendar, Grid3X3, Settings, LucideIcon } from 'lucide-react';

interface TabItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

const tabs: TabItem[] = [
  { path: '/app', label: '지도', icon: Map },
  { path: '/app/calendar', label: '캘린더', icon: Calendar },
  { path: '/app/categories', label: '카테고리', icon: Grid3X3 },
  { path: '/app/settings', label: '설정', icon: Settings },
];

export function BottomTabBar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/app') {
      return location.pathname === '/app' || location.pathname === '/app/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-tab-bar border-t safe-area-inset-bottom">
      <div className="flex items-center justify-around h-14 max-w-md mx-auto">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 w-full h-full transition-colors',
                active ? 'text-tab-bar-active' : 'text-tab-bar-foreground'
              )}
            >
              <tab.icon className={cn('h-5 w-5', active && 'stroke-[2.5]')} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
