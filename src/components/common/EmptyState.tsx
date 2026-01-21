import { cn } from '@/lib/utils';
import { Package, Search, MapPin, Calendar, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

type EmptyStateType = 'no-results' | 'no-discounts' | 'no-location' | 'no-calendar' | 'no-notifications';

interface EmptyStateProps {
  type: EmptyStateType;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

const defaultContent: Record<EmptyStateType, { icon: React.ElementType; title: string; description: string }> = {
  'no-results': {
    icon: Search,
    title: '검색 결과가 없습니다',
    description: '다른 검색어나 필터를 시도해보세요.',
  },
  'no-discounts': {
    icon: Package,
    title: '할인 정보가 없습니다',
    description: '아직 등록된 할인 정보가 없어요.',
  },
  'no-location': {
    icon: MapPin,
    title: '위치 정보가 필요합니다',
    description: '주변 할인 정보를 보려면 위치 권한을 허용해주세요.',
  },
  'no-calendar': {
    icon: Calendar,
    title: '이 날짜에 할인이 없습니다',
    description: '다른 날짜를 선택해보세요.',
  },
  'no-notifications': {
    icon: Bell,
    title: '알림이 없습니다',
    description: '관심 카테고리를 설정하면 새 할인 알림을 받을 수 있어요.',
  },
};

export function EmptyState({
  type,
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  const content = defaultContent[type];
  const Icon = content.icon;

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-12 px-4 text-center',
        className
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
        <Icon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">
        {title || content.title}
      </h3>
      <p className="text-sm text-muted-foreground max-w-[280px] mb-4">
        {description || content.description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="outline" size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
