import { useParams, useNavigate } from 'react-router-dom';
import { CategoryBadge } from '@/components/common/CategoryBadge';
import { StatusBadge } from '@/components/common/StatusBadge';
import { Button } from '@/components/ui/button';
import { getDiscountStatus, isEndingToday, isEndingSoon } from '@/types/discount';
import { ArrowLeft, MapPin, Clock, Bell, Calendar, ExternalLink, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useDiscount } from '@/hooks/useDiscounts';
import { downloadDiscountIcs } from '@/utils/downloadIcs';
import { toast } from 'sonner';

export default function DiscountDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: discount, isLoading, isError } = useDiscount(id || '');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (isError || !discount) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Discount not found.</p>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </div>
    );
  }

  const status = getDiscountStatus(discount);
  const endingToday = isEndingToday(discount);
  const endingSoon = isEndingSoon(discount);

  const getStatusBadge = () => {
    if (status === 'ended') return <StatusBadge variant="ended">Ended</StatusBadge>;
    if (status === 'upcoming') return <StatusBadge variant="upcoming">Upcoming</StatusBadge>;
    if (endingToday) return <StatusBadge variant="endingToday">Ends today</StatusBadge>;
    if (endingSoon) return <StatusBadge variant="ending">Ending soon</StatusBadge>;
    return <StatusBadge variant="active">Active</StatusBadge>;
  };

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="flex items-center gap-3 p-4">
          <button onClick={() => navigate(-1)} className="p-1">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-h3 truncate flex-1">{discount.storeName}</h1>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Title section */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <CategoryBadge categoryId={discount.categoryId} />
            {getStatusBadge()}
          </div>
          <h2 className="text-h1">{discount.title}</h2>
          <p className="text-2xl font-bold text-primary mt-1">{discount.discountValue}</p>
        </div>

        {/* Info card */}
        <div className="rounded-xl border bg-card p-4 space-y-3">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Period</p>
              <p className="text-sm text-muted-foreground">
                {format(new Date(discount.startDate), 'yyyy.M.d (EEE)', { locale: ko })} ~{' '}
                {format(new Date(discount.endDate), 'yyyy.M.d (EEE)', { locale: ko })}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">{discount.storeName}</p>
              <p className="text-sm text-muted-foreground">{discount.location.address}</p>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="h-40 bg-muted rounded-xl flex items-center justify-center border">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-6 h-6 mx-auto mb-1" />
            <p className="text-xs">Map area</p>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={() =>
            window.open(
              `https://maps.google.com/?q=${discount.location.lat},${discount.location.lng}`,
              '_blank'
            )
          }
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Directions
        </Button>

        {/* Description */}
        <div>
          <h3 className="text-h3 mb-2">Details</h3>
          <p className="text-sm text-muted-foreground leading-relaxed transition-all whitespace-pre-wrap">
            {discount.description}
          </p>
        </div>

        {/* Tags */}
        {discount.tags && discount.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {discount.tags.map((tag) => (
              <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => toast.info('Notifications are coming soon.')}
          >
            <Bell className="w-4 h-4 mr-2" />
            Notify me
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              downloadDiscountIcs(discount);
              toast.success('Calendar file downloaded.');
            }}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Add to calendar
          </Button>
        </div>
      </div>
    </div>
  );
}
