import { corporateConfidant as cc, site } from "@/content/site";

/**
 * Machine-readable pricing (schema.org) so search engines and AI tools can
 * read what Muri sells and what it costs. Built from content/site.ts, so
 * changing a price there updates this too.
 */
const ccUrl = `${site.url}/corporate-confidant`;

export const sessionOffer = {
  "@type": "Offer",
  name: "Corporate Confidant Session",
  description: "One confidential one-hour decision session, plus a one-page Clarity Brief within 24 hours. Full refund if you leave without clarity.",
  price: cc.sessionPrice,
  priceCurrency: "USD",
  url: ccUrl,
  availability: "https://schema.org/InStock",
};

export const retainerOffers = cc.ongoingSupport.plans.map((p) => ({
  "@type": "Offer",
  name: `Ongoing Support, ${p.days}`,
  description: `Corporate Confidant Ongoing Support retainer for ${p.days}.`,
  url: `${ccUrl}#ongoing-support`,
  availability: "https://schema.org/InStock",
  priceSpecification: p.startingAt
    ? { "@type": "PriceSpecification", minPrice: p.amount, priceCurrency: "USD" }
    : { "@type": "PriceSpecification", price: p.amount, priceCurrency: "USD" },
}));

const amounts = [cc.sessionPrice, ...cc.ongoingSupport.plans.map((p) => p.amount)];
const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;
export const priceRange = `${fmt(Math.min(...amounts))}–${fmt(Math.max(...amounts))}`;

export const corporateConfidantService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate Confidant",
  serviceType: "Confidential executive decision support",
  description: cc.seoDescription,
  url: ccUrl,
  areaServed: "US",
  provider: { "@type": "ProfessionalService", name: site.legalName, url: site.url },
  offers: [sessionOffer, ...retainerOffers],
};
