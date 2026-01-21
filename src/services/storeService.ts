import { supabase } from '@/lib/supabase';

export interface Store {
  id: string;
  name: string;
  category: string;
  address: string;
}

export const storeService = {
  async getStores(): Promise<Store[]> {
    const { data, error } = await supabase
      .from('stores')
      .select('id, name, category, address')
      .order('name');
      
    if (error) throw error;
    return data || [];
  }
};
