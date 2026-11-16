import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://vsbusirqaflkjuumjtwe.supabase.co";

export function getSupabaseServerClient() {
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!key) {
    return null;
  }

  return createClient(SUPABASE_URL, key, {
    auth: { persistSession: false },
  });
}
