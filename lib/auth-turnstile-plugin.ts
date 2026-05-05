import { APIError, type BetterAuthPlugin } from "better-auth";
import { createAuthMiddleware } from "better-auth/api";
import { verifyTurnstile } from "@/lib/security/turnstile";

export function adminTurnstilePlugin() {
  return {
    id: "admin-turnstile",
    hooks: {
      before: [
        {
          matcher(context) {
            return context.path === "/sign-in/email";
          },
          handler: createAuthMiddleware(async (ctx) => {
            const token =
              typeof ctx.body?.turnstileToken === "string"
                ? ctx.body.turnstileToken
                : undefined;
            const ok = await verifyTurnstile(token);

            if (!ok) {
              throw APIError.from("BAD_REQUEST", {
                message: "Security check failed.",
                code: "TURNSTILE_FAILED",
              });
            }
          }),
        },
      ],
    },
  } satisfies BetterAuthPlugin;
}
