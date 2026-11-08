import { corporateConfidant as cc, home, site } from "@/content/site";

// Plain-text summary for AI assistants (llmstxt.org). Built from content/site.ts.
export const dynamic = "force-static";

export function GET() {
  const plans = cc.ongoingSupport.plans
    .map((p) => `  - ${p.days}: ${p.price} (${p.calls})${p.recommended ? " (recommended)" : ""}`)
    .join("\n");
  const includes = cc.ongoingSupport.includes.map((i) => `  - ${i}`).join("\n");
  const services = home.services.items
    .map((s) => `- ${s.title}: ${s.body}${s.bullets.length ? " " + s.bullets.join("; ") + "." : ""}`)
    .join("\n");

  const body = `# ${site.legalName}

> ${site.seo.description}

Based in ${site.contact.address}, working everywhere. Contact: ${site.contact.email}, ${site.contact.phone}.

## Corporate Confidant (${site.url}/corporate-confidant)

${cc.hero.body}

- The Session: $${cc.sessionPrice.toLocaleString("en-US")} for 1 hour, with a one-page Clarity Brief within 24 hours. Full refund if you leave without clarity (ask within 48 hours). Book: ${site.bookingUrl}
- Ongoing Support (${site.url}/corporate-confidant#ongoing-support):
${plans}
  Every term includes:
${includes}
  ${cc.ongoingSupport.credit}
  Payment: ${cc.ongoingSupport.payment}

## Services (${site.url}/#services)

${services}

## Pages

- [Home](${site.url}/)
- [Corporate Confidant](${site.url}/corporate-confidant)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
