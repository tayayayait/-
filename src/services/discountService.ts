import { supabase } from '@/lib/supabase';
import { Discount } from '@/types/discount';

export const discountService = {
  async getDiscounts(): Promise<Discount[]> {
    const { data, error } = await supabase
      .from('discounts')
      .select(`
        *,
        store:stores (
          name,
          address,
          lat,
          lng,
          category
        )
      `)
      .eq('is_active', true)
      .order('end_date', { ascending: true });

    if (error) {
      console.error('Error fetching discounts:', error);
      throw error;
    }

    return data.map(mapToDiscount);
  },

  async getDiscountById(id: string): Promise<Discount | null> {
    const { data, error } = await supabase
      .from('discounts')
      .select(`
        *,
        store:stores (
          name,
          address,
          lat,
          lng,
          category
        )
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching discount:', error);
      return null;
    }

    return mapToDiscount(data);
  },

  async createDiscount(input: CreateDiscountInput): Promise<void> {
    const { error } = await supabase
      .from('discounts')
      .insert({
        store_id: input.storeId,
        title: input.title,
        description: input.description,
        start_date: input.startDate,
        end_date: input.endDate,
        discount_type: input.discountType,
        discount_price: input.discountValue ? parseInt(input.discountValue.replace(/[^0-9]/g, '')) : 0, // Simple parsing
        is_active: true
      });

    if (error) throw error;
  },

  async updateDiscount(id: string, input: Partial<CreateDiscountInput>): Promise<void> {
    const updateData: Record<string, unknown> = {};
    if (input.storeId !== undefined) updateData.store_id = input.storeId;
    if (input.title !== undefined) updateData.title = input.title;
    if (input.description !== undefined) updateData.description = input.description;
    if (input.startDate !== undefined) updateData.start_date = input.startDate;
    if (input.endDate !== undefined) updateData.end_date = input.endDate;
    if (input.discountType !== undefined) updateData.discount_type = input.discountType;
    if (input.discountValue !== undefined) {
      updateData.discount_price = input.discountValue
        ? parseInt(input.discountValue.replace(/[^0-9]/g, ''))
        : 0;
    }

    const { error } = await supabase
      .from('discounts')
      .update(updateData)
      .eq('id', id);

    if (error) throw error;
  },

  async deleteDiscount(id: string): Promise<void> {
    const { error } = await supabase
      .from('discounts')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};

export interface CreateDiscountInput {
  storeId: string;
  title: string;
  description: string;
  startDate: string; // ISO
  endDate: string; // ISO
  discountType: string;
  discountValue: string;
  pushNotification?: boolean;
}

// Helper to map DB response to Frontend Type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapToDiscount(row: any): Discount {
  const discountType = row.discount_type?.toLowerCase() || 'percent';
  let discountValue = '';

  if (discountType === 'percent') {
    discountValue = `${row.discount_price}%`;
  } else if (discountType === 'amount') {
    discountValue = `${row.discount_price.toLocaleString()}원`;
  } else {
    discountValue = row.discount_price ? `${row.discount_price}` : '할인';
  }

  return {
    id: row.id,
    title: row.title,
    storeName: row.store?.name || 'Unknown Store',
    categoryId: row.store?.category?.toLowerCase() || 'other',
    startDate: row.start_date,
    endDate: row.end_date,
    location: {
      address: row.store?.address || '',
      lat: row.store?.lat || 0,
      lng: row.store?.lng || 0,
    },
    discountType: discountType as any,
    discountValue: discountValue,
    summary: row.description?.slice(0, 50) || '',
    description: row.description || '',
    tags: [],
    createdAt: row.created_at,
    updatedAt: row.created_at,
  };
}
