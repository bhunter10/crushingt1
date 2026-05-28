import nodemailer from "nodemailer";

export type ContactFormPayload = {
  name: string;
  email: string;
  interest: string;
  phone: string;
  message: string;
};

const contactTo = "crushingt1foundation@gmail.com";

export function isContactEmailConfigured() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendContactEmail(payload: ContactFormPayload) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("Email is not configured.");
  }

  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? "465");
  const to = process.env.CONTACT_TO ?? contactTo;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  const phoneLine = payload.phone ? `Phone: ${payload.phone}` : null;

  await transporter.sendMail({
    from: `"CrushingT1 Website" <${user}>`,
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
}
