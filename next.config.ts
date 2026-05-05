import type { NextConfig } from "next";

function getRemotePattern(url: string | undefined) {
  if (!url) {
    return undefined;
  }

  try {
    const parsed = new URL(url);
    return {
      protocol: parsed.protocol.replace(":", "") as "http" | "https",
      hostname: parsed.hostname,
      port: parsed.port,
      pathname: `${parsed.pathname.replace(/\/$/, "") || ""}/**`,
    };
  } catch {
    return undefined;
  }
}

const r2RemotePattern = getRemotePattern(process.env.R2_PUBLIC_BASE_URL);

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: r2RemotePattern ? [r2RemotePattern] : [],
  },
};

export default nextConfig;
