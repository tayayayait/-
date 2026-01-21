import { cn } from '@/lib/utils';
import { CategoryId } from '@/types/discount';
import { getCategoryById, getCategoryColor } from '@/data/categories';
import {
  ShoppingCart,
  Coffee,
  UtensilsCrossed,
  Heart,
  Scissors,
  Store,
  Ticket,
  MoreHorizontal,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Coffee,
  UtensilsCrossed,
  Heart,
  Scissors,
  Store,
  Ticket,
  MoreHorizontal,
};

interface CategoryBadgeProps {
  categoryId: CategoryId;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CategoryBadge({
  categoryId,
  showIcon = true,
  size = 'md',
  className,
}: CategoryBadgeProps) {
  const category = getCategoryById(categoryId);
  if (!category) return null;

  const Icon = iconMap[category.icon] || MoreHorizontal;
  const colorClass = getCategoryColor(categoryId);

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-sm gap-1.5',
    lg: 'px-3 py-1.5 text-base gap-2',
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-3.5 w-3.5',
    lg: 'h-4 w-4',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        sizeClasses[size],
        className
      )}
      style={{
        backgroundColor: `hsl(var(--${colorClass}) / 0.1)`,
        color: `hsl(var(--${colorClass}))`,
      }}
    >
      {showIcon && <Icon className={iconSizes[size]} />}
      {category.name}
    </span>
  );
}
