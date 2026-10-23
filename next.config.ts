import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old Wix URLs → new pages, so links and Google results keep working.
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/items", destination: "/toolkit", permanent: true },
      { source: "/items/:slug*", destination: "/toolkit", permanent: true },
      { source: "/news", destination: "/travel", permanent: true },
      { source: "/news/:slug*", destination: "/travel", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/blank", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
