import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp, isValidEmail } from "@/lib/security";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(ip, "workshops", 8, 60_000)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const {
      contactName,
      contactEmail,
      organization,
      audienceType,
      participantsCount,
      message,
    } = body ?? {};

    if (
      typeof contactName !== "string" ||
      contactName.trim().length < 2 ||
      contactName.length > 150 ||
      !isValidEmail(contactEmail) ||
      typeof audienceType !== "string" ||
      audienceType.trim().length < 2 ||
      typeof message !== "string" ||
      message.trim().length < 5 ||
      message.length > 2000
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields with valid information." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json(
        { error: "Database connection is not configured." },
        { status: 503 }
      );
    }

    const { data, error } = await supabase
      .from("workshop_inquiries")
      .insert({
        contact_name: contactName.trim(),
        contact_email: contactEmail.trim(),
        organization:
          typeof organization === "string" && organization.trim()
            ? organization.trim().slice(0, 200)
            : null,
        audience_type: audienceType.trim().slice(0, 120),
        participants_count:
          typeof participantsCount === "string" && participantsCount.trim()
            ? participantsCount.trim().slice(0, 50)
            : null,
        message: message.trim(),
      })
      .select("id, created_at")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, inquiry: data }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
