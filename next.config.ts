import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/arkca"). Empty for local dev and custom domains.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  agentRules: false,
  // Static export is only needed for GitHub Pages; `next dev` is unaffected.
  ...(process.env.GITHUB_PAGES === "true"
    ? { output: "export" as const, basePath, images: { unoptimized: true } }
    : {}),
};

export default nextConfig;
