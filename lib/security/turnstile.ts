export async function verifyTurnstile(token?: string) {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    return true;
  }

  if (!token) {
    return false;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });
    const data = (await response.json()) as { success?: boolean };

    return Boolean(data.success);
  } catch {
    return false;
  }
}
