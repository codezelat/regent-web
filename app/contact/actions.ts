"use server";

import { getDb, hasDatabase } from "@/lib/db";
import { contactMessages } from "@/lib/db/schema";
import { sendEmail } from "@/lib/email/send";
import { verifyTurnstile } from "@/lib/security/turnstile";
import { siteConfig } from "@/lib/site-config";
import { contactInputSchema } from "@/lib/validation/admin";

export type ContactFormState = {
  ok: boolean;
  message: string;
  nonce: string;
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
    subject: formData.get("subject"),
    productName: formData.get("productName"),
    productSlug: formData.get("productSlug"),
    productUrl: formData.get("productUrl"),
    turnstileToken: formData.get("cf-turnstile-response"),
  });

  if (!input.success) {
    return contactState(false, "Check the form and try again.");
  }

  const turnstileOk = await verifyTurnstile(input.data.turnstileToken);

  if (!turnstileOk) {
    return contactState(false, "Security check failed. Try again.");
  }

  const contextLines = [
    input.data.subject ? `Subject: ${input.data.subject}` : null,
    input.data.productName ? `Product: ${input.data.productName}` : null,
    input.data.productSlug ? `Product slug: ${input.data.productSlug}` : null,
    input.data.productUrl ? `Product URL: ${input.data.productUrl}` : null,
  ].filter(Boolean);
  const storedMessage = [
    ...contextLines,
    contextLines.length ? "" : null,
    input.data.message,
  ].filter(Boolean).join("\n");
  const emailSubject =
    input.data.subject ||
    (input.data.productName
      ? `Product inquiry: ${input.data.productName}`
      : `Website inquiry from ${input.data.name}`);

  if (hasDatabase) {
    await getDb().insert(contactMessages).values({
      name: input.data.name,
      email: input.data.email,
      phone: input.data.phone || null,
      message: storedMessage,
    });
  }

  await sendEmail({
    to: siteConfig.email,
    replyTo: input.data.email,
    subject: emailSubject,
    text: [
      `Name: ${input.data.name}`,
      `Email: ${input.data.email}`,
      `Phone: ${input.data.phone || "Not provided"}`,
      ...contextLines,
      "",
      input.data.message,
    ].join("\n"),
  });

  return contactState(true, "Message sent.");
}

function contactState(ok: boolean, message: string): ContactFormState {
  return { ok, message, nonce: crypto.randomUUID() };
}
