-- Allow reading and updating status on form submissions for the Admin Dashboard
-- Note: For production, restrict these policies to authenticated admin users or use SUPABASE_SERVICE_ROLE_KEY server-side.

create policy "Allow read certification applications"
  on public.certification_applications for select
  using (true);

create policy "Allow update certification applications"
  on public.certification_applications for update
  using (true);

create policy "Allow read product orders"
  on public.product_orders for select
  using (true);

create policy "Allow update product orders"
  on public.product_orders for update
  using (true);

create policy "Allow read workshop inquiries"
  on public.workshop_inquiries for select
  using (true);

create policy "Allow update workshop inquiries"
  on public.workshop_inquiries for update
  using (true);
