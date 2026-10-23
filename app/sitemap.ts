import type { MetadataRoute } from "next";
import { site, starterPages } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const starters = [
    ["/case-studies", starterPages.caseStudies.ready],
    ["/live", starterPages.live.ready],
    ["/toolkit", starterPages.toolkit.ready],
    ["/travel", starterPages.travel.ready],
  ] as const;

  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/founder-sessions`, priority: 0.9 },
    ...starters.filter(([, ready]) => ready).map(([path]) => ({ url: `${site.url}${path}`, priority: 0.6 })),
  ];
}
