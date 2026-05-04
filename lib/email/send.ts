import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

type SendEmailInput = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

export async function sendEmail({ to, subject, text, replyTo }: SendEmailInput) {
  if (!process.env.RESEND_API_KEY) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("RESEND_API_KEY is required to send email.");
    }

    return { skipped: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.RESEND_FROM_EMAIL || `Regent Technologies <onboarding@resend.dev>`;

  return resend.emails.send({
    from,
    to,
    subject,
    text,
    replyTo: replyTo || siteConfig.email,
  });
}
