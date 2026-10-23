/**
 * ALL SITE COPY LIVES HERE.
 * To change wording on the site, edit the text in this file and push.
 * Vercel redeploys automatically in about a minute.
 */

export const site = {
  name: "Muri",
  legalName: "Muri LLC",
  url: "https://www.murime.com",
  bookingUrl: "https://app.acuityscheduling.com/schedule.php?owner=38736171",
  contact: {
    address: "Omaha, NE",
    phone: "402-212-2717",
    email: "Mel@MuriMe.com",
  },
  social: {
    facebook: "https://www.facebook.com/meliwike/",
    linkedin: "https://www.linkedin.com/in/melwike/",
  },
  seo: {
    title: "Muri | Business Growth Consulting for Sustainable Success",
    description:
      "At Muri Consulting, we help healthcare staffing firms, real estate businesses, and entrepreneurs connect strategy to execution. We specialize in business consulting for sustainable growth, leadership coaching, and strategic scaling.",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Founder Sessions", href: "/founder-sessions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "The Daily Live", href: "/live" },
  { label: "Toolkit", href: "/toolkit" },
  { label: "Travel", href: "/travel" },
];

export const home = {
  hero: {
    titleLead: "You hold everyone else's answers.",
    titleAccent: "Who holds yours?",
    body: "Corporate Confidant is a confidential decision-support service for leaders who are done carrying everything alone.",
    cta: "Book the Session - $500",
  },
  confidant: {
    eyebrow: "What you say stays here. Always.",
    pillars: [
      {
        title: "One Hour",
        body: "One private conversation with someone who has no stake in your organization's politics and no reason to tell you what you want to hear.",
      },
      {
        title: "One Decision",
        body: "Not a list of options. We name the real problem, which is usually not the one you walked in with, and the single decision that follows from it.",
      },
      {
        title: "One Letter",
        body: "Within 24 hours, a one-page Clarity Brief written to you. Reports get filed. Letters get reread at 11pm, which is when the decision actually gets made.",
      },
    ],
    guarantee: "If you leave without clarity and a path forward, you pay nothing.",
  },
  whyCare: {
    title: "Why do I care?",
    body: "Because I've been there. After 15 years of turning “impossible” situations into breakthrough moments, I've learned that success without fulfillment is just another form of failure. I care because I've seen too many talented leaders burn out chasing growth at any cost. There's a better way — one that lets you achieve boldly while living fully.",
  },
  learned: {
    title: "Here's What We've Learned.",
    body: "The path from impossible to inevitable isn't about doing more. It's about simplifying the complex, strengthening what matters, and creating connections that last.",
  },
  services: {
    eyebrow: "Services",
    title: "What We Do At Muri",
    items: [
      {
        title: "Strategic Business Consulting",
        body: "Whether you're scaling your startup, reimagining your sales approach, or transforming your entire organization, we create tailored solutions that align with your vision and values.",
        bullets: [] as string[],
      },
      {
        title: "Leadership Alignment Workshops",
        body: "Transforming potential into performance:",
        bullets: [
          "Strategic planning and execution",
          "Sales and team kick-off events",
          "Conference design and implementation",
          "Cross-industry best practices integration",
          "Startup team alignment",
        ],
      },
      {
        title: "Speaking Engagements",
        body: "The kind of talks that wake up the room — literally. When laptops open and notes start flowing at 8 AM, you know you're hearing something worth remembering. Speaking topics include:",
        bullets: [
          "Industry Evolution: Healthcare, Tech, and Beyond",
          "Building Connections That Drive Growth",
          "From Startup to Scale: Navigating Growth Challenges",
          "The Art of Organizational Transformation",
        ],
      },
    ],
  },
  ethos: {
    title: "Brand Ethos. Achieving Boldly, Living Fully",
    body: "At the core of our philosophy is the belief that achievement isn't just about reaching goals; it's about the journey that shapes us along the way. Success is most meaningful when it's celebrated in the magic of everyday moments—the connections, growth, and lessons that make life extraordinary. Around here, they happen every day. We call them Murricles, and we can't wait to share them with you!",
    pillars: [
      {
        title: "Our Belief.",
        body: "Life is more than a race to the finish line. Achievements shine brightest when they're fueled by intention and when we remain present to the beauty that unfolds daily.",
      },
      {
        title: "Our Approach.",
        body: "We empower individuals to pursue their goals boldly while staying rooted in the here and now. By blending ambition with presence, we help you create a life where success and fulfillment coexist. With a few shenanigans along the way, dare we say, you may discover a bit of extra joy?!?",
      },
      {
        title: "Our Commitment.",
        body: "To help you achieve without losing sight of what matters most—whether that's fostering meaningful relationships, staying true to your values, or simply savoring the small moments that make life magical.",
      },
    ],
    closer: "Let's Create a Path You Can Live With",
  },
};

export const founderSessions = {
  seoTitle: "Corporate Confidant | Founder Sessions",
  seoDescription:
    "Sometimes the most important conversation is the one you haven't been able to have yet. Founder Sessions with Corporate Confidant.",
  title: "Sometimes the most important conversation is the one you haven't been able to have yet",
  subtitle: "No board room. No performance. Just an honest conversation about your business and your leadership.",
  cta: "Book a Founder Session",
};

/**
 * Starter pages. These were Wix template placeholders on the old site.
 * Replace `intro` with real content when ready, then set `ready: true`
 * so search engines start indexing the page.
 */
export const starterPages = {
  caseStudies: {
    ready: false,
    title: "Case Studies",
    intro: "Stories of leaders and teams who went from stuck to moving. Case studies are on their way.",
  },
  live: {
    ready: false,
    title: "The Daily Live",
    intro: "Everyday Murricles: the moments, lessons, and shenanigans from a life lived boldly. New posts are coming soon.",
  },
  toolkit: {
    ready: false,
    title: "Toolkit",
    intro: "The tools, frameworks, and resources we actually use with clients. The toolkit is being assembled now.",
  },
  travel: {
    ready: false,
    title: "Travel",
    intro: "Notes and photos from the road. Travel stories are coming soon.",
  },
};
