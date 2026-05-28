import { Resend } from "resend";

export type ContactFormPayload = {
  name: string;
  email: string;
  interest: string;
  phone: string;
  message: string;
};

const contactTo = "crushingt1foundation@gmail.com";

export function isContactEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendContactEmail(payload: ContactFormPayload) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Email is not configured.");
  }

  const to = process.env.CONTACT_TO ?? contactTo;
  const from = process.env.CONTACT_FROM ?? "CrushingT1 Website <onboarding@resend.dev>";
  const resend = new Resend(apiKey);

  const phoneLine = payload.phone ? `Phone: ${payload.phone}` : null;

  const result = await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: `CrushingT1 website message — ${payload.interest}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Interest: ${payload.interest}`,
      phoneLine,
      "",
      "Message:",
      payload.message
    ]
      .filter(Boolean)
      .join("\n")
  });

  if (result.error) {
    throw new Error(result.error.message);
  }
}
