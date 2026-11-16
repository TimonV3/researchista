import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp, timingSafeCompare } from "@/lib/security";
import { getSupabaseServerClient } from "@/lib/supabase";

function isAuthorized(request: Request): { ok: boolean; misconfigured?: boolean } {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return { ok: false, misconfigured: true };
  }

  const headerEmail = request.headers.get("x-admin-email") || "";
  const headerPass = request.headers.get("x-admin-password") || "";

  const emailMatch = timingSafeCompare(headerEmail, adminEmail);
  const passMatch = timingSafeCompare(headerPass, adminPassword);
  return { ok: emailMatch && passMatch };
}

export async function GET(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(ip, "admin-auth", 20, 60_000)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute." },
      { status: 429 }
    );
  }

  const auth = isAuthorized(request);
  if (auth.misconfigured) {
    return NextResponse.json(
      { error: "Admin credentials are not configured on the server." },
      { status: 503 }
    );
  }
  if (!auth.ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase client is not configured." },
      { status: 503 }
    );
  }

  const [certsRes, ordersRes, workshopsRes] = await Promise.all([
    supabase
      .from("certification_applications")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase
      .from("product_orders")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase
      .from("workshop_inquiries")
      .select("*")
      .order("created_at", { ascending: false }),
  ]);

  const errors = [
    certsRes.error?.message,
    ordersRes.error?.message,
    workshopsRes.error?.message,
  ].filter(Boolean);

  if (errors.length > 0) {
    return NextResponse.json(
      {
        error: errors[0],
        hint: "Add SUPABASE_SERVICE_ROLE_KEY to .env.local or configure RLS policies.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    certifications: certsRes.data ?? [],
    orders: ordersRes.data ?? [],
    workshops: workshopsRes.data ?? [],
  });
}

export async function PATCH(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(ip, "admin-patch", 30, 60_000)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const auth = isAuthorized(request);
  if (!auth.ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase client is not configured." },
      { status: 503 }
    );
  }

  try {
    const { table, id, status } = await request.json();
    const allowedTables = [
      "certification_applications",
      "product_orders",
      "workshop_inquiries",
    ];
    const allowedStatuses = [
      "pending",
      "approved",
      "archived",
      "new",
      "completed",
      "scheduled",
    ];

    if (
      !allowedTables.includes(table) ||
      typeof id !== "string" ||
      !allowedStatuses.includes(status)
    ) {
      return NextResponse.json({ error: "Invalid update payload." }, { status: 400 });
    }

    const { error } = await supabase
      .from(table)
      .update({ status })
      .eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
