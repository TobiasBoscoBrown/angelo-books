/**
 * One place for the canonical origin.
 *
 * sitemap.ts and robots.ts both hardcoded https://angelobooks.com while the
 * site actually serves from Vercel. Wrong canonicals split ranking signals,
 * so this reads the real deployment origin and lets the custom domain take
 * over via NEXT_PUBLIC_SITE_URL the moment it's live.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://angelo-books.vercel.app");
