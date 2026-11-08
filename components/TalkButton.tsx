import { ctas, introHref, site } from "@/content/site";

/** "Start a Conversation": the free intro call in Acuity, or an email to Mel until that link exists. */
export function TalkButton({ className }: { className: string }) {
  const external = Boolean(site.introCallUrl);
  return (
    <a className={className} href={introHref} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {ctas.talk}
    </a>
  );
}
