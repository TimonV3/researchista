import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp, isValidEmail } from "@/lib/security";
import { getSupabaseServerClient } from "@/lib/supabase";

const CANONICAL_PRODUCTS: Record<string, { name: string; priceEur: number }> = {
  "mobility-era-game:board": { name: "Mobility Era Game", priceEur: 39.0 },
  "classroom-pack:board": { name: "Classroom & Workshop Pack", priceEur: 165.0 },
};

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(ip, "orders", 10, 60_000)) {
    return NextResponse.json(
      { error: "Too many order requests. Please try again shortly." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const {
      productSlug,
      edition,
      quantity,
      customerName,
      customerEmail,
      shippingCountry,
      notes,
    } = body ?? {};

    const cleanEdition = edition === "board" ? "board" : "board";
    const catalogEntry =
      CANONICAL_PRODUCTS[`${String(productSlug)}:${cleanEdition}`];

    if (!catalogEntry) {
      return NextResponse.json(
        { error: "Unknown product or edition." },
        { status: 400 }
      );
    }

    if (
      typeof customerName !== "string" ||
      customerName.trim().length < 2 ||
      customerName.length > 150 ||
      !isValidEmail(customerEmail) ||
      typeof shippingCountry !== "string" ||
      shippingCountry.trim().length < 2 ||
      shippingCountry.length > 100
    ) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and shipping country." },
        { status: 400 }
      );
    }

    const parsedQty = Math.min(50, Math.max(1, Math.floor(Number(quantity) || 1)));
    const cleanNotes =
      typeof notes === "string" && notes.trim()
        ? notes.trim().slice(0, 500)
        : null;

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json(
        { error: "Database connection is not configured." },
        { status: 503 }
      );
    }

    const { data, error } = await supabase
      .from("product_orders")
      .insert({
        product_slug: String(productSlug),
        product_name: catalogEntry.name,
        edition: cleanEdition,
        quantity: parsedQty,
        unit_price_eur: catalogEntry.priceEur,
        customer_name: customerName.trim(),
        customer_email: customerEmail.trim(),
        shipping_country: shippingCountry.trim(),
        notes: cleanNotes,
      })
      .select("id, created_at")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, order: data }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
