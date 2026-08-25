import type { NextConfig } from "next";

/**
 * The site used to sell four separate services. It sells one now, and the
 * other three pages are gone. These redirects keep the old URLs (and anything
 * that already links to them) pointing at the service that absorbed them.
 */
const retiredServices = [
  "outbound-calling",
  "meeting-prep",
  "campaign-reporting",
  "outbound-systems",
];

const nextConfig: NextConfig = {
  async redirects() {
    return retiredServices.map((slug) => ({
      source: `/services/${slug}`,
      destination: "/services/cold-calling",
      permanent: true,
    }));
  },
};

export default nextConfig;
