import type { NextConfig } from "next";

/**
 * The site used to sell four separate services, then one called Cold Calling.
 * It now sells Outbound Business Development, and the older pages are gone. These redirects keep the old URLs (and anything
 * that already links to them) pointing at the service that absorbed them.
 */
const retiredServices = [
  "cold-calling",
  "outbound-calling",
  "meeting-prep",
  "campaign-reporting",
  "outbound-systems",
];

const nextConfig: NextConfig = {
  async redirects() {
    return retiredServices.map((slug) => ({
      source: `/services/${slug}`,
      destination: "/services/outbound-business-development",
      permanent: true,
    }));
  },
};

export default nextConfig;
