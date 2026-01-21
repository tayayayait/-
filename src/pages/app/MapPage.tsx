import { MobileLayout } from '@/components/layout/MobileLayout';
import { SearchBar } from '@/components/common/SearchBar';
import { FilterChip } from '@/components/common/FilterChip';
import { DiscountCard } from '@/components/common/DiscountCard';
import { CATEGORIES } from '@/data/categories';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CategoryId } from '@/types/discount';
import { useDiscounts } from '@/hooks/useDiscounts';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';

const SEOUL_CENTER = { lat: 37.5665, lng: 126.9780 };
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

export default function MapPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<CategoryId[]>([]);
  
  const { data: discounts = [], isLoading } = useDiscounts();

  /* State for Map Center */
  const [center, setCenter] = useState(SEOUL_CENTER);

  /* Geolocation Handler */
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast.error('이 브라우저는 위치 정보를 지원하지 않습니다.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
        toast.success('현재 위치로 이동했습니다.');
        
        // MVP: Also fetch discounts near this location could be added here
      },
      (error) => {
        console.error('Geolocation error:', error);
        toast.error('위치 정보를 가져올 수 없습니다. 원한을 확인해주세요.');
      }
    );
  };

  const toggleCategory = (categoryId: CategoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredDiscounts = discounts.filter((d) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(d.categoryId);
    const matchesSearch = !searchQuery || 
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.storeName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const headerContent = (
    <div className="p-4 space-y-3 pointer-events-auto">
      <SearchBar
        placeholder="매장명, 할인명 검색"
        value={searchQuery}
        onChange={setSearchQuery}
      />
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {CATEGORIES.slice(0, 5).map((cat) => (
          <FilterChip
            key={cat.id}
            selected={selectedCategories.includes(cat.id)}
            onClick={() => toggleCategory(cat.id)}
          >
            {cat.name}
          </FilterChip>
        ))}
      </div>
    </div>
  );

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <MobileLayout headerContent={headerContent}>
        {/* Map Area - Height 50% for split view effect */}
        <div className="h-[45vh] w-full relative">
          <Map
            defaultCenter={SEOUL_CENTER}
            center={center}
            onCenterChanged={(ev) => setCenter(ev.detail.center)}
            defaultZoom={13}
            mapId="DEMO_MAP_ID" // Required for AdvancedMarker
            disableDefaultUI={true}
            className="w-full h-full"
          >
            {filteredDiscounts.map((discount) => {
               // Fallback if coordinates are missing (0,0)
               if(discount.location.lat === 0 && discount.location.lng === 0) return null;
               
               return (
                <AdvancedMarker
                  key={discount.id}
                  position={discount.location}
                  onClick={() => navigate(`/app/discount/${discount.id}`)}
                >
                  <Pin 
                    background={getCategoryColor(discount.categoryId)} 
                    borderColor={'#ffffff'} 
                    glyphColor={'#ffffff'} 
                  />
                </AdvancedMarker>
               );
            })}
          </Map>
          
          <div className="absolute bottom-4 right-4 z-10">
             <Button 
               variant="secondary" 
               size="icon" 
               className="rounded-full shadow-lg"
               onClick={handleCurrentLocation}
             >
               <MapPin className="w-5 h-5" />
             </Button>
          </div>
        </div>

        {/* Discount list - Remaining height */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
          <div className="flex items-center justify-between">
            <h2 className="text-h3">주변 할인 {filteredDiscounts.length}개</h2>
          </div>
          
          {isLoading ? (
             <div className="space-y-3">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="rounded-2xl border p-4 space-y-3">
                    <div className="flex justify-between">
                       <div className="space-y-2">
                          <div className="flex gap-2">
                             <Skeleton className="w-12 h-5 rounded-full" />
                             <Skeleton className="w-10 h-5 rounded-full" />
                          </div>
                          <Skeleton className="w-32 h-5" />
                       </div>
                       <Skeleton className="w-16 h-8 rounded-lg" />
                    </div>
                    <Skeleton className="w-24 h-4" />
                    <Skeleton className="w-full h-8" />
                 </div>
               ))}
             </div>
          ) : (
            filteredDiscounts.map((discount) => (
              <DiscountCard
                key={discount.id}
                discount={discount}
                onClick={() => navigate(`/app/discount/${discount.id}`)}
              />
            ))
          )}
        </div>
      </MobileLayout>
    </APIProvider>
  );
}

// Helper to get color code from tailwind variable (simplified for MVP)
function getCategoryColor(id: string): string {
  switch(id) {
    case 'mart': return '#2563EB'; // blue-600
    case 'cafe': return '#D97706'; // amber-600
    case 'beauty': return '#EC4899'; // pink-500
    default: return '#64748B'; // slate-500
  }
}
