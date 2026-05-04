"use server";

import { getDb, hasDatabase } from "@/lib/db";
import { contactMessages } from "@/lib/db/schema";
import { sendEmail } from "@/lib/email/send";
import { siteConfig } from "@/lib/site-config";
import { contactInputSchema } from "@/lib/validation/admin";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

export async function submitContactAction(
  _state: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const input = contactInputSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    turnstileToken: formData.get("cf-turnstile-response"),
  });

  if (!input.success) {
    return { ok: false, message: "Check the form and try again." };
  }

  const turnstileOk = await verifyTurnstile(input.data.turnstileToken);

  if (!turnstileOk) {
    return { ok: false, message: "Security check failed. Try again." };
  }

  if (hasDatabase) {
    await getDb().insert(contactMessages).values({
      name: input.data.name,
      email: input.data.email,
      phone: input.data.phone || null,
      message: input.data.message,
    });
  }

  await sendEmail({
    to: siteConfig.email,
    replyTo: input.data.email,
    subject: `Website inquiry from ${input.data.name}`,
    text: [
      `Name: ${input.data.name}`,
      `Email: ${input.data.email}`,
      `Phone: ${input.data.phone || "Not provided"}`,
      "",
      input.data.message,
    ].join("\n"),
  });

  return { ok: true, message: "Message sent." };
}

async function verifyTurnstile(token?: string) {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    return true;
  }

  if (!token) {
    return false;
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });
  const data = (await response.json()) as { success?: boolean };

  return Boolean(data.success);
}
