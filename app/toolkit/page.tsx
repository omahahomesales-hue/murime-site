import type { Metadata } from "next";
import { starterPages } from "@/content/site";
import { StarterPage } from "@/components/StarterPage";

const page = starterPages.toolkit;

export const metadata: Metadata = {
  title: page.title,
  description: page.intro,
  alternates: { canonical: "/toolkit" },
  robots: page.ready ? undefined : { index: false, follow: true },
};

export default function Page() {
  return <StarterPage title={page.title} intro={page.intro} />;
}
