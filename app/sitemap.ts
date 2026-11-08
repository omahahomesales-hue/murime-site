import type { MetadataRoute } from "next";
import { pagesReady, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const extra = [
    ["/case-studies", pagesReady.caseStudies],
    ["/live", pagesReady.live],
    ["/toolkit", pagesReady.toolkit],
    ["/travel", pagesReady.travel],
  ] as const;

  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/corporate-confidant`, priority: 0.9 },
    ...extra.filter(([, ready]) => ready).map(([path]) => ({ url: `${site.url}${path}`, priority: 0.6 })),
  ];
}
