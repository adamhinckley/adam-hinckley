const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.trim().length > 0
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "https://www.adamhinckley.com";

// Normalize by removing any trailing slashes so consumers get a consistent base URL.
const normalizedSiteUrl = rawSiteUrl.replace(/\/+$/, "");

export const siteUrl = normalizedSiteUrl;
