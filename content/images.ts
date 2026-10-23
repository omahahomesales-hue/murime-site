/**
 * Every image on the site. `file` is the copy saved in /public/images.
 * `wix` is the original on Wix, used only as a fallback until the
 * local copy exists (run `npm run localize-images`, or let the
 * "Localize images" GitHub Action do it).
 */
export const images = {
  logo: {
    file: "/images/muri-logo.png",
    wix: "8ba7a3_e0a80ee7a0bd498488dc00db92005725~mv2.png",
    alt: "Muri",
    width: 274,
    height: 82,
  },
  hero: {
    file: "/images/hero-desk.jpg",
    wix: "8ba7a3_aaba3bdf2a2245d8a512528bd899f72b~mv2.jpg",
    alt: "A desk lamp lighting a quiet office at night",
    width: 1920,
    height: 1080,
  },
  confidantBanner: {
    file: "/images/corporate-confidant-banner.jpg",
    wix: "8ba7a3_ba39c4faf6be4df4b5eea286c6764681~mv2.jpg",
    alt: "Corporate Confidant, executive decision support",
    width: 2352,
    height: 358,
  },
  character: {
    file: "/images/muri-character.png",
    wix: "8ba7a3_f6e11467c494413c96eaf5aa9e2806e8~mv2.png",
    alt: "",
    width: 476,
    height: 288,
  },
  portrait: {
    file: "/images/mel-portrait.jpg",
    wix: "8ba7a3_8e82fde8e10945948d1a6a53275a77ae~mv2.jpeg",
    alt: "Mel, founder of Muri",
    width: 748,
    height: 1006,
  },
  learned: {
    file: "/images/learned.jpg",
    wix: "8ba7a3_d3f5cd50f07240aa98e2246619e79a39~mv2.jpg",
    alt: "Mel with friends",
    width: 1200,
    height: 900,
  },
  ogHome: {
    file: "/images/og-home.png",
    wix: "8ba7a3_39f010b2773d48a399107299514bfb53~mv2.png",
    alt: "Muri",
    width: 2500,
    height: 1330,
  },
  ogFounder: {
    file: "/images/og-founder-sessions.jpg",
    wix: "8ba7a3_8cb4741fdb044a8fa3452a79a72833e7~mv2.jpg",
    alt: "Founder Sessions",
    width: 1200,
    height: 1200,
  },
} as const;

export type ImageKey = keyof typeof images;
