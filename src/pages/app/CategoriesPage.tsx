import { MobileLayout } from '@/components/layout/MobileLayout';
import { SearchBar } from '@/components/common/SearchBar';
import { DiscountCard } from '@/components/common/DiscountCard';
import { EmptyState } from '@/components/common/EmptyState';
import { CATEGORIES, getCategoryById } from '@/data/categories';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryId } from '@/types/discount';
import { cn } from '@/lib/utils';
import {
  ShoppingCart, Coffee, UtensilsCrossed, Heart,
  Scissors, Store, Ticket, MoreHorizontal, LucideIcon,
  Loader2
} from 'lucide-react';
import { useDiscounts } from '@/hooks/useDiscounts';
import { Skeleton } from '@/components/ui/skeleton';

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart, Coffee, UtensilsCrossed, Heart,
  Scissors, Store, Ticket, MoreHorizontal,
};

export default function CategoriesPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);
  
  const { data: discounts = [], isLoading } = useDiscounts();

  const displayDiscounts = discounts.filter(d => {
    if (selectedCategory) {
      return d.categoryId === selectedCategory;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        d.title.toLowerCase().includes(q) ||
        d.storeName.toLowerCase().includes(q)
      );
    }
    return false;
  });

  const showCategories = !selectedCategory && !searchQuery;

  const headerContent = (
    <div className="p-4 space-y-3">
      <h1 className="text-h2">카테고리</h1>
      <SearchBar
        placeholder="할인 검색"
        value={searchQuery}
        onChange={(v) => {
          setSearchQuery(v);
          setSelectedCategory(null);
        }}
      />
    </div>
  );

  return (
    <MobileLayout headerContent={headerContent}>
      <div className="p-4">
        {isLoading ? (
          <div className="grid grid-cols-2 gap-3">
             {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 rounded-xl border bg-card space-y-2">
                   <Skeleton className="w-12 h-12 rounded-full" />
                   <Skeleton className="w-16 h-4" />
                   <Skeleton className="w-8 h-3" />
                </div>
             ))}
          </div>
        ) : showCategories ? (
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((cat) => {
              const Icon = iconMap[cat.icon] || MoreHorizontal;
              const count = discounts.filter(d => d.categoryId === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    'flex flex-col items-center justify-center p-6 rounded-xl border bg-card',
                    'hover:border-primary hover:shadow-elevation-2 transition-all'
                  )}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                    style={{ backgroundColor: `hsl(var(--${cat.color}) / 0.1)` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: `hsl(var(--${cat.color}))` }} />
                  </div>
                  <span className="font-medium text-sm">{cat.name}</span>
                  <span className="text-xs text-muted-foreground">{count}개</span>
                </button>
              );
            })}
          </div>
        ) : (
          <>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm text-primary mb-3 flex items-center gap-1"
              >
                ← 전체 카테고리
              </button>
            )}
            
            <h2 className="text-h3 mb-3">
              {selectedCategory ? getCategoryById(selectedCategory)?.name : '검색 결과'}
              <span className="text-muted-foreground font-normal ml-2">
                {displayDiscounts.length}개
              </span>
            </h2>

            {displayDiscounts.length === 0 ? (
              <EmptyState type="no-results" />
            ) : (
              <div className="space-y-3">
                {displayDiscounts.map((discount) => (
                  <DiscountCard
                    key={discount.id}
                    discount={discount}
                    onClick={() => navigate(`/app/discount/${discount.id}`)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </MobileLayout>
  );
}
