-- Enable PostGIS for location features (Optional but recommended for later)
-- create extension if not exists postgis;

-- 1. Stores Table (매장 정보)
create table public.stores (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  category text not null, -- 'MART', 'CAFE', 'HOSPITAL', 'FRANCHISE', 'ETC'
  address text not null,
  lat double precision not null,
  lng double precision not null,
  tel text,
  image_url text
);

-- 2. Discounts Table (할인 정보)
create table public.discounts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  store_id uuid references public.stores(id) on delete cascade not null,
  title text not null,
  description text,
  start_date timestamptz not null,
  end_date timestamptz not null,
  discount_type text default 'PERCENT', -- 'PERCENT', 'AMOUNT', 'BOGO', 'GIFT'
  original_price integer,
  discount_price integer,
  image_url text,
  is_active boolean default true
);

-- 3. Notifications Table (알림 로그)
create table public.notifications (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  title text not null,
  body text,
  target_audience text default 'ALL', -- 'ALL', 'NEARBY', 'CATEGORY'
  sent_at timestamptz
);

-- 4. Enable Row Level Security (RLS)
alter table public.stores enable row level security;
alter table public.discounts enable row level security;
alter table public.notifications enable row level security;

-- 5. Create Policies (Public Read, Admin Write)
-- For MVP, allowing public read for stores and discounts
create policy "Public stores are viewable by everyone"
  on public.stores for select
  using ( true );

create policy "Public discounts are viewable by everyone"
  on public.discounts for select
  using ( is_active = true );

-- MVP: Allow client-side admin screens to write without Auth
-- TODO: Replace with authenticated/admin-only policies before production
create policy "Public discounts are insertable by everyone"
  on public.discounts for insert
  with check ( true );

create policy "Public discounts are updatable by everyone"
  on public.discounts for update
  using ( true )
  with check ( true );

create policy "Public discounts are deletable by everyone"
  on public.discounts for delete
  using ( true );
