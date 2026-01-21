// 카테고리 타입
export type CategoryId = 
  | 'mart' 
  | 'cafe' 
  | 'restaurant' 
  | 'medical' 
  | 'beauty' 
  | 'convenience' 
  | 'culture' 
  | 'other';

export interface Category {
  id: CategoryId;
  name: string;
  icon: string; // lucide icon name
  color: string; // tailwind class
}

// 할인 혜택 타입
export type DiscountType = 'percent' | 'amount' | 'bogo' | 'gift' | 'other';

// 할인 상태
export type DiscountStatus = 'active' | 'upcoming' | 'ended';

// 할인 정보
export interface Discount {
  id: string;
  title: string;
  storeName: string;
  categoryId: CategoryId;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  discountType: DiscountType;
  discountValue: string; // e.g., "30%", "5000원", "1+1"
  summary: string; // 혜택 요약 (50자 이내)
  description: string; // 상세 설명
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

// 할인 상태 계산 헬퍼
export function getDiscountStatus(discount: Discount): DiscountStatus {
  const now = new Date();
  const start = new Date(discount.startDate);
  const end = new Date(discount.endDate);
  
  if (now < start) return 'upcoming';
  if (now > end) return 'ended';
  return 'active';
}

// 오늘 종료 여부
export function isEndingToday(discount: Discount): boolean {
  const today = new Date();
  const end = new Date(discount.endDate);
  return (
    today.getFullYear() === end.getFullYear() &&
    today.getMonth() === end.getMonth() &&
    today.getDate() === end.getDate()
  );
}

// 마감 임박 (3일 이내)
export function isEndingSoon(discount: Discount): boolean {
  const now = new Date();
  const end = new Date(discount.endDate);
  const diffDays = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return diffDays > 0 && diffDays <= 3;
}

// 신규 (3일 이내 등록)
export function isNew(discount: Discount): boolean {
  const now = new Date();
  const created = new Date(discount.createdAt);
  const diffDays = Math.ceil((now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24));
  return diffDays <= 3;
}

// 사용자 설정
export interface UserSettings {
  favoriteCategories: CategoryId[];
  notificationRadius: number; // km
  quietTimeStart: string; // HH:mm
  quietTimeEnd: string; // HH:mm
  notificationsEnabled: boolean;
  locationEnabled: boolean;
}

// 필터 상태
export interface DiscountFilters {
  categories: CategoryId[];
  dateRange: 'today' | 'week' | 'month' | 'all';
  searchQuery: string;
  status: DiscountStatus | 'all';
}
