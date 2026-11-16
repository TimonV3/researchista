import { NextResponse } from "next/server";
import {
  checkRateLimit,
  getClientIp,
  isValidEmail,
  sanitizeHttpUrl,
} from "@/lib/security";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(ip, "certifications", 8, 60_000)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a minute." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, role, productName, researchLink, story, consent } =
      body ?? {};

    if (
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.length > 150 ||
      !isValidEmail(email) ||
      typeof productName !== "string" ||
      productName.trim().length < 2 ||
      productName.length > 200 ||
      typeof story !== "string" ||
      story.trim().length < 10 ||
      story.length > 3000 ||
      !consent
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields and confirm consent." },
        { status: 400 }
      );
    }

    const safeLink = sanitizeHttpUrl(researchLink);
    if (!safeLink) {
      return NextResponse.json(
        {
          error:
            "Please provide a valid HTTP(S) URL or DOI (e.g. https://doi.org/10....).",
        },
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
      .from("certification_applications")
      .insert({
        applicant_name: name.trim(),
        applicant_email: email.trim(),
        applicant_role:
          typeof role === "string" && role.trim()
            ? role.trim().slice(0, 100)
            : "Researcher",
        product_name: productName.trim(),
        research_link: safeLink,
        story: story.trim(),
        consent_confirmed: true,
      })
      .select("id, created_at")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, application: data }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
