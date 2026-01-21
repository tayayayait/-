import { MobileLayout } from '@/components/layout/MobileLayout';
import { CATEGORIES } from '@/data/categories';
import { CategoryId } from '@/types/discount';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Bell, Clock } from 'lucide-react';
import { notificationService } from '@/services/notificationService';
import { toast } from 'sonner';

export default function SettingsPage() {
  const [favoriteCategories, setFavoriteCategories] = useState<CategoryId[]>(['mart', 'cafe']);
  const [notificationRadius, setNotificationRadius] = useState(3);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleCategory = (categoryId: CategoryId) => {
    setFavoriteCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const headerContent = (
    <div className="p-4">
      <h1 className="text-h2">설정</h1>
      <p className="text-sm text-muted-foreground">알림과 카테고리를 설정하세요</p>
    </div>
  );

  return (
    <MobileLayout headerContent={headerContent}>
      <div className="p-4 space-y-6">
        {/* 관심 카테고리 */}
        <section className="space-y-3">
          <h3 className="text-h3 flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            관심 카테고리
          </h3>
          <p className="text-sm text-muted-foreground">선택한 카테고리의 새 할인 알림을 받습니다</p>
          <div className="space-y-2">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="flex items-center space-x-3 p-3 rounded-lg border bg-card">
                <Checkbox
                  id={cat.id}
                  checked={favoriteCategories.includes(cat.id)}
                  onCheckedChange={() => toggleCategory(cat.id)}
                />
                <Label htmlFor={cat.id} className="flex-1 cursor-pointer font-medium">
                  {cat.name}
                </Label>
              </div>
            ))}
          </div>
        </section>

        {/* 알림 반경 */}
        <section className="space-y-3">
          <h3 className="text-h3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            알림 반경
          </h3>
          <p className="text-sm text-muted-foreground">
            현재 위치에서 {notificationRadius}km 이내의 할인만 알림
          </p>
          <div className="px-2">
            <Slider
              value={[notificationRadius]}
              onValueChange={([v]) => setNotificationRadius(v)}
              min={0.5}
              max={10}
              step={0.5}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>0.5km</span>
              <span>10km</span>
            </div>
          </div>
        </section>

        {/* 알림 설정 */}
        <section className="space-y-3">
          <h3 className="text-h3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            알림 설정
          </h3>
          <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
            <div>
              <p className="font-medium">푸시 알림</p>
              <p className="text-sm text-muted-foreground">새 할인 알림 받기</p>
            </div>
            <Switch
              checked={notificationsEnabled}
              onCheckedChange={async (checked) => {
                if (checked) {
                  const token = await notificationService.requestPermission();
                  if (token) {
                    setNotificationsEnabled(true);
                    toast.success('알림이 설정되었습니다');
                  } else {
                    setNotificationsEnabled(false);
                    toast.error('알림 권한이 필요합니다');
                  }
                } else {
                  setNotificationsEnabled(false);
                }
              }}
            />
          </div>
        </section>
      </div>
    </MobileLayout>
  );
}
