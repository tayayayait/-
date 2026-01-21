import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Discount, getDiscountStatus, isEndingToday, isEndingSoon, isNew } from '@/types/discount';
import { CategoryBadge } from './CategoryBadge';
import { StatusBadge } from './StatusBadge';
import { MapPin, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

interface DiscountCardProps {
  discount: Discount;
  onClick?: () => void;
  className?: string;
  compact?: boolean;
}

export function DiscountCard({ discount, onClick, className, compact = false }: DiscountCardProps) {
  const status = getDiscountStatus(discount);
  const endingToday = isEndingToday(discount);
  const endingSoon = isEndingSoon(discount);
  const isNewDiscount = isNew(discount);

  const getStatusBadge = () => {
    if (status === 'ended') {
      return <StatusBadge variant="ended">종료됨</StatusBadge>;
    }
    if (status === 'upcoming') {
      return <StatusBadge variant="upcoming">예정</StatusBadge>;
    }
    if (endingToday) {
      return <StatusBadge variant="endingToday">오늘 종료</StatusBadge>;
    }
    if (endingSoon) {
      return <StatusBadge variant="ending">마감 임박</StatusBadge>;
    }
    if (isNewDiscount) {
      return <StatusBadge variant="new">NEW</StatusBadge>;
    }
    return <StatusBadge variant="active">진행중</StatusBadge>;
  };

  const formatDateRange = () => {
    const start = new Date(discount.startDate);
    const end = new Date(discount.endDate);
    return `${format(start, 'M.d', { locale: ko })} - ${format(end, 'M.d', { locale: ko })}`;
  };

  /* Compact View (Map markers, etc) */
  if (compact) {
    return (
      <Card
        className={cn(
          'cursor-pointer rounded-xl border-none shadow-elevation-1',
          'transition-all duration-200 hover:shadow-elevation-2 active:scale-95',
          className
        )}
        onClick={onClick}
      >
        <CardContent className="p-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <CategoryBadge categoryId={discount.categoryId} size="sm" showIcon={false} />
                {getStatusBadge()}
              </div>
              <h4 className="font-semibold text-sm truncate leading-tight">{discount.title}</h4>
              <p className="text-xs text-muted-foreground truncate">{discount.storeName}</p>
            </div>
            <div className="text-right shrink-0 bg-primary/5 rounded-lg px-2 py-1">
              <span className="text-lg font-bold text-primary">{discount.discountValue}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  /* Default List View */
  return (
    <Card
      className={cn(
        'cursor-pointer rounded-2xl border-none shadow-sm overflow-hidden bg-card',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-elevation-2',
        'active:scale-[0.98]',
        status === 'ended' && 'opacity-60 saturate-0',
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <CategoryBadge categoryId={discount.categoryId} size="sm" />
              {getStatusBadge()}
            </div>
            <h3 className="font-bold text-lg line-clamp-1 text-foreground leading-tight tracking-tight">
              {discount.title}
            </h3>
          </div>
          <div className="text-right shrink-0 bg-primary/10 rounded-xl px-3 py-1.5 flex flex-col items-center justify-center min-w-[60px]">
            <span className="text-xl font-extrabold text-primary leading-none">{discount.discountValue}</span>
          </div>
        </div>

        {/* Store */}
        <p className="text-sm font-semibold text-foreground/80 mb-1 flex items-center gap-1">
          {discount.storeName}
        </p>

        {/* Summary */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {discount.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1 rounded-md">
            <Clock className="h-3.5 w-3.5 text-primary/70" />
            <span className="font-medium">{formatDateRange()}</span>
          </div>
          <div className="flex items-center gap-1.5 max-w-[50%]">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <span className="truncate">{discount.location.address.split(' ').slice(0, 2).join(' ')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
