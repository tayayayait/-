import { MobileLayout } from '@/components/layout/MobileLayout';
import { DiscountCard } from '@/components/common/DiscountCard';
import { EmptyState } from '@/components/common/EmptyState';
import { Calendar } from '@/components/ui/calendar';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useDiscounts } from '@/hooks/useDiscounts';
import { Loader2 } from 'lucide-react';

export default function CalendarPage() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  const { data: discounts = [], isLoading } = useDiscounts();

  // Selected date discounts
  const discountsForDate = useMemo(() => {
    if (!selectedDate) return [];
    
    // Normalize selected date to YYYY-MM-DD
    const targetDateStr = format(selectedDate, 'yyyy-MM-dd');
    
    return discounts.filter(d => {
       const start = new Date(d.startDate);
       const end = new Date(d.endDate);
       
       // Normalize range to YYYY-MM-DD for comparison
       const startStr = format(start, 'yyyy-MM-dd');
       const endStr = format(end, 'yyyy-MM-dd');
       
       return targetDateStr >= startStr && targetDateStr <= endStr;
    });
  }, [discounts, selectedDate]);

  // All dates that have at least one discount
  const datesWithDiscounts = useMemo(() => {
    const dates = new Set<string>();
    
    if (!discounts) return dates;
    
    discounts.forEach((d) => {
      const start = new Date(d.startDate);
      const end = new Date(d.endDate);
      
      const current = new Date(start);
      // Iterate from start to end
      while (current <= end) {
        dates.add(format(current, 'yyyy-MM-dd'));
        current.setDate(current.getDate() + 1);
      }
    });
    return dates;
  }, [discounts]);

  const headerContent = (
    <div className="p-4">
      <h1 className="text-h2">캘린더</h1>
      <p className="text-sm text-muted-foreground">날짜별 할인 정보를 확인하세요</p>
    </div>
  );

  return (
    <MobileLayout headerContent={headerContent}>
      <div className="p-4">
        {/* Calendar */}
        <div className="bg-card rounded-lg border p-3 mb-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => date && setSelectedDate(date)}
            locale={ko}
            modifiers={{
              hasDiscount: (date) => datesWithDiscounts.has(format(date, 'yyyy-MM-dd')),
            }}
            modifiersStyles={{
              hasDiscount: { fontWeight: 'bold', color: 'var(--primary)' },
            }}
          />
        </div>

        {/* Selected date header */}
        <h2 className="text-h3 mb-3">
          {format(selectedDate, 'M월 d일 (EEEE)', { locale: ko })}
          <span className="text-muted-foreground font-normal ml-2">
            {discountsForDate.length}개
          </span>
        </h2>

        {/* Discounts for date */}
        {isLoading ? (
             <div className="flex justify-center p-8">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : discountsForDate.length === 0 ? (
          <EmptyState type="no-calendar" />
        ) : (
          <div className="space-y-3">
            {discountsForDate.map((discount) => (
              <DiscountCard
                key={discount.id}
                discount={discount}
                compact
                onClick={() => navigate(`/app/discount/${discount.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </MobileLayout>
  );
}
