
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are required in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const STORES = [
  {
    name: '이마트 강남점',
    category: 'MART',
    address: '서울 강남구 역삼동 123-45',
    lat: 37.4979,
    lng: 127.0276,
    tel: '02-1234-5678',
  },
  {
    name: '스타벅스 역삼역점',
    category: 'CAFE',
    address: '서울 강남구 역삼동 555-55',
    lat: 37.5006,
    lng: 127.0364,
    tel: '02-9876-5432',
  },
  {
    name: '올리브영 강남본점',
    category: 'BEAUTY',
    address: '서울 서초구 서초동 1303-22',
    lat: 37.5025,
    lng: 127.0258,
    tel: '02-555-5555',
  },
];

async function seed() {
  console.log('🌱 Seeding data...');

  // 1. Insert Stores
  const { data: stores, error: storeError } = await supabase
    .from('stores')
    .upsert(STORES, { onConflict: 'name' }) // Simplification: assuming name is unique for demo
    .select();

  if (storeError) {
    console.error('Error inserting stores:', storeError);
    return;
  }

  console.log(`✅ Inserted ${stores.length} stores.`);

  // 2. Insert Discounts
  const DISCOUNTS = [
    {
      store_id: stores.find(s => s.name === '이마트 강남점')?.id,
      title: '신선식품 타임세일',
      description: '저녁 8시 이후 신선식품 전품목 30% 할인',
      start_date: new Date().toISOString(),
      end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // +7 days
      discount_type: 'PERCENT',
      discount_price: 30,
      is_active: true,
    },
    {
      store_id: stores.find(s => s.name === '스타벅스 역삼역점')?.id,
      title: '해피아워 1+1',
      description: '오후 2시~5시 제조 음료 1+1',
      start_date: new Date().toISOString(),
      end_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // +3 days
      discount_type: 'BOGO', // Buy One Get One
      discount_price: 0,
      is_active: true,
    },
    {
      store_id: stores.find(s => s.name === '올리브영 강남본점')?.id,
      title: '봄 정기 세일',
      description: '인기 브랜드 최대 50% 할인',
      start_date: new Date().toISOString(),
      end_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // +14 days
      discount_type: 'PERCENT',
      discount_price: 50,
      is_active: true,
    },
  ];

  const { error: discountError } = await supabase
    .from('discounts')
    .insert(DISCOUNTS);

  if (discountError) {
    console.error('Error inserting discounts:', discountError);
    return;
  }

  console.log('✅ Inserted sample discounts.');
  console.log('🎉 Seeding complete!');
}

seed().catch(console.error);
