import { isContactEmailConfigured, sendContactEmail, type ContactFormPayload } from "@/lib/send-contact-email";
import { NextResponse } from "next/server";

const interestOptions = new Set([
  "Volunteer",
  "Sponsor",
  "Share a story",
  "Future donation",
  "Media or partnership"
]);

function readString(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed || trimmed.length > maxLength) {
    return null;
  }

  return trimmed;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parsePayload(body: unknown): ContactFormPayload | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const record = body as Record<string, unknown>;

  if (typeof record.company === "string" && record.company.trim()) {
    return null;
  }

  const name = readString(record.name, 120);
  const email = readString(record.email, 254);
  const interest = readString(record.interest, 80);
  const message = readString(record.message, 5000);
  const phone = readString(record.phone ?? "", 40) ?? "";

  if (!name || !email || !interest || !message || !isValidEmail(email) || !interestOptions.has(interest)) {
    return null;
  }

  return { name, email, interest, phone, message };
}

export async function POST(request: Request) {
  if (!isContactEmailConfigured()) {
    return NextResponse.json(
      { error: "Contact email is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const payload = parsePayload(body);

  if (!payload) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  try {
    await sendContactEmail(payload);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again in a few minutes." },
      { status: 502 }
    );
  }
}
