import crypto from "node:crypto";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && email.length <= 254 && EMAIL_RE.test(email.trim());
}

/**
 * Validates and normalizes an external research URL or DOI.
 * Rejects javascript:, data:, vbscript:, and other non-HTTP(S) schemes.
 */
export function sanitizeHttpUrl(input: unknown): string | null {
  if (typeof input !== "string") return null;
  const trimmed = input.trim();
  if (!trimmed || trimmed.length > 1000) return null;

  // Normalize bare DOI strings like "10.26481/dis.20150701ib"
  const candidate = trimmed.startsWith("10.")
    ? `https://doi.org/${trimmed}`
    : trimmed;

  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

/**
 * Constant-time string comparison using SHA-256 digests to prevent timing attacks
 * and length-leakage.
 */
export function timingSafeCompare(a: string, b: string): boolean {
  const digestA = crypto.createHash("sha256").update(a).digest();
  const digestB = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(digestA, digestB);
}

interface RateBucket {
  count: number;
  resetAt: number;
}

const rateBuckets = new Map<string, RateBucket>();

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

export function checkRateLimit(
  ip: string,
  bucket: string,
  maxRequests = 15,
  windowMs = 60_000
): boolean {
  const key = `${bucket}:${ip}`;
  const now = Date.now();
  const existing = rateBuckets.get(key);

  if (!existing || now > existing.resetAt) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (existing.count >= maxRequests) {
    return false;
  }

  existing.count += 1;
  return true;
}
