-- Researchista Database Schema (Supabase / PostgreSQL)
-- Project Ref: vsbusirqaflkjuumjtwe

-- 1. Certified Products Directory
create table if not exists public.certified_products (
  id uuid primary key default gen_random_uuid(),
  certificate_number text not null unique,
  slug text not null unique,
  name text not null,
  tagline text not null,
  research_project text not null,
  researcher text not null,
  orcid text,
  institution text not null,
  funding text,
  doi text,
  year text,
  price_eur numeric(10, 2),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Seed Certificate #001: Mobility Era Game
insert into public.certified_products (
  certificate_number,
  slug,
  name,
  tagline,
  research_project,
  researcher,
  orcid,
  institution,
  funding,
  doi,
  year,
  price_eur
) values (
  '#001',
  'mobility-era-game',
  'Mobility Era Game',
  'The game of your life across 41 European countries.',
  'Social Protection & Cross-Border Mobility in Europe (Doctoral Thesis)',
  'Dr. Irina Burlacu',
  '0000-0002-1940-8421',
  'Maastricht University, Graduate School of Governance',
  'Luxembourg National Research Fund (FNR) — AFR Grant',
  '10.26481/dis.20150701ib',
  '2024',
  39.00
) on conflict (certificate_number) do nothing;

-- 2. Research-Powered Certification Applications (/certification#apply)
create table if not exists public.certification_applications (
  id uuid primary key default gen_random_uuid(),
  applicant_name text not null,
  applicant_email text not null,
  applicant_role text not null,
  product_name text not null,
  research_link text not null,
  story text not null,
  consent_confirmed boolean not null default false,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

-- 3. Product Orders & Pre-orders (/products/mobility-era-game)
create table if not exists public.product_orders (
  id uuid primary key default gen_random_uuid(),
  product_slug text not null,
  product_name text not null,
  edition text not null default 'board',
  quantity integer not null default 1 check (quantity > 0),
  unit_price_eur numeric(10, 2) not null default 39.00,
  customer_name text not null,
  customer_email text not null,
  shipping_country text not null,
  notes text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- 4. Educator, Workshop & Classroom Inquiries (/play-and-learn & /for-researchers)
create table if not exists public.workshop_inquiries (
  id uuid primary key default gen_random_uuid(),
  contact_name text not null,
  contact_email text not null,
  organization text,
  audience_type text not null,
  participants_count text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- Enable Row Level Security (RLS)
alter table public.certified_products enable row level security;
alter table public.certification_applications enable row level security;
alter table public.product_orders enable row level security;
alter table public.workshop_inquiries enable row level security;

-- Public read access for certified products
create policy "Public can view active certified products"
  on public.certified_products for select
  using (is_active = true);

-- Public insert access for website forms
create policy "Public can submit certification applications"
  on public.certification_applications for insert
  with check (true);

create policy "Public can submit product orders"
  on public.product_orders for insert
  with check (true);

create policy "Public can submit workshop inquiries"
  on public.workshop_inquiries for insert
  with check (true);
