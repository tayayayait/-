import { useQuery } from '@tanstack/react-query';
import { discountService } from '@/services/discountService';
import { MOCK_DISCOUNTS } from '@/data/mockDiscounts';

export function useDiscounts() {
  return useQuery({
    queryKey: ['discounts'],
    queryFn: async () => {
      try {
        const data = await discountService.getDiscounts();
        // If no data returned (e.g. empty DB), return empty array
        return data;
      } catch (error) {
        console.warn('Failed to fetch from Supabase, falling back to mock data:', error);
        // Fallback to mock data to keep the app usable during setup
        return MOCK_DISCOUNTS; 
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useDiscount(id: string) {
  return useQuery({
    queryKey: ['discount', id],
    queryFn: async () => {
      try {
        const data = await discountService.getDiscountById(id);
        if (!data) throw new Error('Not found');
        return data;
      } catch (error) {
        console.warn('Failed to fetch detail, fallback to mock:', error);
        return MOCK_DISCOUNTS.find(d => d.id === id) || null;
      }
    },
    enabled: !!id,
  });
}
