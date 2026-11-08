import type { NextConfig } from "next";

// Old Wix URLs → new pages, so links and Google results keep working.
// Toolkit and Travel are hidden until Mel's content is in, so their old Wix
// links go home for now (temporary). Once a page is ready, point its old
// link at the page and make it permanent.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/blank", destination: "/", permanent: true },
      { source: "/founder-sessions", destination: "/corporate-confidant", permanent: true },
      { source: "/items", destination: "/", permanent: false },
      { source: "/items/:slug*", destination: "/", permanent: false },
      { source: "/news", destination: "/", permanent: false },
      { source: "/news/:slug*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
