import { Category, CategoryId } from '@/types/discount';

export const CATEGORIES: Category[] = [
  {
    id: 'mart',
    name: '마트/슈퍼',
    icon: 'ShoppingCart',
    color: 'category-mart',
  },
  {
    id: 'cafe',
    name: '카페',
    icon: 'Coffee',
    color: 'category-cafe',
  },
  {
    id: 'restaurant',
    name: '음식점',
    icon: 'UtensilsCrossed',
    color: 'category-restaurant',
  },
  {
    id: 'medical',
    name: '병원/약국',
    icon: 'Heart',
    color: 'category-medical',
  },
  {
    id: 'beauty',
    name: '뷰티/헤어',
    icon: 'Scissors',
    color: 'category-beauty',
  },
  {
    id: 'convenience',
    name: '편의점',
    icon: 'Store',
    color: 'category-convenience',
  },
  {
    id: 'culture',
    name: '문화/레저',
    icon: 'Ticket',
    color: 'category-culture',
  },
  {
    id: 'other',
    name: '기타',
    icon: 'MoreHorizontal',
    color: 'category-other',
  },
];

export const getCategoryById = (id: CategoryId): Category | undefined => {
  return CATEGORIES.find((cat) => cat.id === id);
};

export const getCategoryColor = (id: CategoryId): string => {
  const category = getCategoryById(id);
  return category?.color || 'category-other';
};

export const getCategoryName = (id: CategoryId): string => {
  const category = getCategoryById(id);
  return category?.name || '기타';
};
