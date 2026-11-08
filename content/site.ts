/**
 * ALL SITE COPY LIVES HERE.
 * To change wording on the site, edit the text in this file and push.
 * Vercel redeploys automatically in about a minute.
 */

export const site = {
  name: "Muri",
  legalName: "Muri LLC",
  url: "https://www.murime.com",
  /** The $500 Corporate Confidant session. Every "Book the Session" button uses this. */
  bookingUrl: "https://app.acuityscheduling.com/schedule.php?owner=38736171",
  /**
   * The free 30-minute intro call. Every "Start a Conversation" button uses this.
   * Paste the Acuity link for the free intro-call appointment type here once Mel
   * creates it. While it's empty, the button opens an email to Mel instead.
   */
  introCallUrl: "",
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
    title: "Muri | Leadership Strategy, Consulting & Speaking | Omaha",
    description:
      "Mel helps founders, executives and the companies behind them make the hard calls, align their teams and grow without burning out. Strategy, leadership workshops, speaking and Corporate Confidant.",
  },
};

/** Where "Start a Conversation" goes: the free intro call, or an email until it exists. */
export const introHref =
  site.introCallUrl ||
  `mailto:${site.contact.email}?subject=${encodeURIComponent("Starting a conversation")}`;

export const ctas = {
  book: "Book the Session ($500)",
  bookShort: "Book the Session",
  talk: "Start a Conversation",
};

/**
 * Extra pages. Each stays hidden (out of the menu, and the page returns
 * "not found") until `ready` is set to true. Mel's copy is already in place.
 */
export const pagesReady = {
  caseStudies: false, // needs 3 to 5 real stories with client permission
  live: false, // needs the schedule and TikTok handle
  toolkit: false, // needs the product picks and links
  travel: false, // needs destinations; email sign-up is phase two
};

export const nav = [
  { label: "Home", href: "/", show: true },
  { label: "Corporate Confidant", href: "/corporate-confidant", show: true },
  { label: "Case Studies", href: "/case-studies", show: pagesReady.caseStudies },
  { label: "The Daily Live", href: "/live", show: pagesReady.live },
  { label: "Toolkit", href: "/toolkit", show: pagesReady.toolkit },
  { label: "Travel", href: "/travel", show: pagesReady.travel },
].filter((item) => item.show);

/* ------------------------------------------------------------------ */
/* Home page                                                           */
/* ------------------------------------------------------------------ */

export const home = {
  hero: {
    eyebrow: "Strategy · Leadership · Speaking",
    title: "Support for the person who supports everyone else.",
    body: "I help founders, executives and the companies behind them make the hard calls, align their teams and grow without burning out. Twenty years of corporate experience, now on your side of the table.",
    trust: [
      "20 years turning “impossible” situations around",
      "Confidential by default",
      "Based in Omaha, working everywhere",
    ],
  },
  problem: {
    title: "The pressure usually starts with a decision.",
    body: [
      "Burnout. Growth that stalled. A team pulling in three directions. Look underneath and there's almost always a decision nobody has made yet, or a conversation nobody wants to have.",
      "That's where I start. Get the real issue named, and the rest gets simpler.",
    ],
  },
  doors: {
    title: "Find your starting point.",
    items: [
      {
        who: "Founders and owners.",
        body: "You built it, and now it needs things you weren't trained for. We sort out what to fix first, and what to stop doing.",
        label: "Strategic Business Consulting",
        href: "/#consulting",
      },
      {
        who: "Senior leaders.",
        body: "You're the one everyone brings their problems to. Bring yours to someone outside the building.",
        label: "Corporate Confidant",
        href: "/corporate-confidant",
      },
      {
        who: "Companies and HR teams.",
        body: "Your leaders need alignment, a plan they believe in, and a kickoff people remember.",
        label: "Leadership Alignment Workshops",
        href: "/#workshops",
      },
      {
        who: "Event planners.",
        body: "You need a speaker who keeps the room awake at 8 AM and sends them home with notes.",
        label: "Speaking",
        href: "/#speaking",
      },
    ],
  },
  featured: {
    eyebrow: "Corporate Confidant™ · A Muri offering",
    titleLead: "You hold everyone else's answers.",
    titleAccent: "Who holds yours?",
    body: "One confidential hour for leaders who are done carrying everything alone. You leave with a decision and, within 24 hours, a one-page Clarity Brief for the next 30 days.",
    smallPrint: "$500 · 1 hour · Full refund if you leave without clarity",
    learnMore: "See How It Works",
  },
  services: {
    title: "How we can work together",
    items: [
      {
        id: "consulting",
        title: "Strategic Business Consulting",
        body: "For founders and leadership teams at a turning point: scaling a startup, rethinking how you sell, or reshaping the whole organization. I come in, find what's actually in the way, and build a plan that fits your goals and your values.",
        bullets: [] as string[],
      },
      {
        id: "workshops",
        title: "Leadership Alignment Workshops",
        body: "For teams that need to leave the room pointed the same direction.",
        bullets: [
          "Strategic planning you'll actually carry out",
          "Sales and team kickoffs",
          "Conference design and delivery",
          "Startup team alignment",
          "Proven practices from healthcare, tech and beyond",
        ],
      },
      {
        id: "speaking",
        title: "Speaking",
        body: "Talks that wake up the room. When laptops open and notes start flowing at 8 AM, people are hearing something worth keeping. Topics include:",
        bullets: [
          "Industry Evolution: Healthcare, Tech and Beyond",
          "Building Connections That Drive Growth",
          "From Startup to Scale: Navigating Growth Challenges",
          "The Art of Organizational Transformation",
        ],
      },
    ],
  },
  howItWorks: {
    title: "Starting is simple.",
    steps: [
      { title: "We talk.", body: "A free 30-minute call about what's going on and what you need." },
      {
        title: "You get a recommendation.",
        body: "A plain proposal for the right format: a session, a project, a workshop or a talk. A real recommendation, with no pressure attached.",
      },
      { title: "We do the work.", body: "Together, on your timeline, with check-ins you can count on." },
      { title: "You keep the results.", body: "A plan your team owns after I'm gone." },
    ],
  },
  whyCare: {
    title: "Why do I care?",
    body: "Because I've been the person everyone came to. For 20 years I turned “impossible” situations into wins, and I watched too many talented leaders burn out chasing growth at any cost. Success without fulfillment is another way to fail. I started Muri to help leaders achieve boldly and still live fully.",
    signature: "Mel",
  },
  beliefs: {
    title: "Achieve boldly. Live fully.",
    items: [
      { title: "Ambition and presence can share a calendar.", body: "You don't have to pick between growth and a life you enjoy." },
      { title: "Clear beats complicated.", body: "Simplify the complex, strengthen what matters, build connections that last." },
      { title: "Joy counts.", body: "Build the business. Keep the joy." },
    ],
  },
  contact: {
    title: "Let's create a path you can live with.",
    body: "Tell me what you're carrying. A short email is enough to start, and I'll reply personally.",
    explore: "Or explore",
  },
};

/* ------------------------------------------------------------------ */
/* Corporate Confidant page                                            */
/* ------------------------------------------------------------------ */

export const corporateConfidant = {
  seoTitle: "Corporate Confidant™ | A Confidential Decision Session | Muri",
  /** Price of The Session, used in search/AI structured data. Change with the button text. */
  sessionPrice: 500,
  seoDescription:
    "One confidential hour for leaders, founders and high performers. You leave with a decision and, within 24 hours, a one-page Clarity Brief for the next 30 days. $500, with a full refund if you leave without clarity.",
  hero: {
    eyebrow: "Corporate Confidant™ · A Muri offering",
    titleLead: "You hold everyone else's answers.",
    titleAccent: "Who holds yours?",
    body: "One confidential hour for leaders, founders and high performers who need to think out loud with someone outside the building. You leave with a decision and a written plan for the next 30 days.",
    smallPrint: "1 hour · $500 · Clarity Brief within 24 hours · What you say stays here. Always.",
  },
  problem: {
    title: "When you're the go-to for everyone else, who supports you?",
    body: [
      "Your team brings you their problems. Your board wants answers. Your family wants you home. Somewhere in there is a decision you keep pushing to next week.",
      "What helps is one honest conversation with someone who has no stake in the outcome and has sat in your chair.",
    ],
  },
  whoFor: {
    title: "Who it's for",
    items: [
      "Founders weighing a hire, a pivot, a partner or an exit",
      "Executives carrying a call they can't talk through at work",
      "High performers deciding whether to stay, push or leave",
      "Anyone who keeps saying “I just need to think” and never gets the hour",
    ],
  },
  howItWorks: {
    title: "How it works",
    steps: [
      { title: "Book your hour.", body: "Pick a time on the calendar." },
      {
        title: "Have the conversation.",
        body: "Sixty minutes, fully confidential. You talk, I listen hard and ask the questions nobody around you will.",
      },
      {
        title: "Get your Clarity Brief.",
        body: "Within 24 hours you get a one-page letter naming five things: what you brought, what it actually is, the decision, what you're avoiding, and your next 30 days.",
      },
      {
        title: "Move.",
        body: "You leave with the next step written down, so the decision doesn't drift back into next week.",
      },
    ],
  },
  promise: {
    title: "Clarity, or your money back.",
    body: "If you leave without clarity and a path forward, you pay nothing. Ask within 48 hours for a full refund. No forms, no awkward conversation.",
  },
  whyMe: {
    title: "Why me",
    body: "I spent 20 years in corporate roles turning “impossible” situations around, and I was often the person everyone else leaned on. I know what it costs to carry that alone. Corporate Confidant is the conversation I wish I'd had.",
    link: "Read more about Mel",
  },
  faq: {
    title: "Common questions",
    items: [
      { q: "Is this really confidential?", a: "Yes. What you say stays between us." },
      {
        q: "Is this coaching or therapy?",
        a: "It's a focused decision session for business and career calls. It's a strong first step, and it doesn't replace therapy or ongoing coaching.",
      },
      {
        q: "What if I need more than one hour?",
        a: "Many decisions take more than one conversation. When yours does, Ongoing Support keeps me in your corner for 30, 60 or 90 days.",
        links: [{ label: "Ongoing Support", href: "#ongoing-support" }],
      },
      {
        q: "Does it work for teams?",
        a: "The Session is one-on-one. For teams, see Leadership Alignment Workshops.",
        links: [{ label: "Leadership Alignment Workshops", href: "/#workshops" }],
      },
    ] as { q: string; a: string; links?: { label: string; href: string }[] }[],
  },
  /**
   * Ongoing Support (the accountability program from Mel's pricing brief).
   * Linked from the FAQ. Prices here also feed Google/AI structured data and /llms.txt.
   * Brief's language rule: say "ongoing" / "in the room with you"; avoid "upgrade", "next level", "tier".
   */
  ongoingSupport: {
    eyebrow: "Ongoing Support",
    title: "When one hour isn't enough.",
    body: "The Session gives you the decision. Ongoing Support makes sure you actually make it, with me in the room with you every week.",
    plans: [
      { days: "30 days", price: "$4,000", amount: 4000, calls: "4 weekly calls", recommended: false },
      { days: "60 days", price: "$6,750", amount: 6750, calls: "9 weekly calls", recommended: false },
      { days: "90 days", price: "$9,000", amount: 9000, calls: "13 weekly calls", recommended: true },
    ],
    recommendedLabel: "Recommended",
    includesTitle: "Every term includes",
    includes: [
      "A 45-minute call every week",
      "The Agency Roadmap at kickoff: decisions made, obstacles mapped, the next 30 days structured",
      "Access to me between calls",
      "A written checkpoint at the midpoint",
    ],
    credit: "Already had The Session? Your $500 counts in full toward any term when you enroll within 7 days.",
    payment: "Paid in full, or a 50% deposit with the balance at the midpoint.",
  },
  closing: {
    title: "One hour. One decision. Thirty days of clarity.",
    more: "Looking for consulting, a workshop or a speaker?",
    moreLink: "See everything Muri offers",
  },
};

/* ------------------------------------------------------------------ */
/* Extra pages (hidden until pagesReady is true)                       */
/* ------------------------------------------------------------------ */

/** Shared closing line on The Daily Live, Toolkit and Travel. */
export const sharedCloser = {
  line: "Build the business. Keep the joy.",
  ask: "Need a thinking partner for a bigger decision?",
};

export const caseStudies = {
  title: "From impossible to inevitable.",
  intro:
    "A few of the situations I've helped leaders and teams work through. Names are left out where clients asked, because confidentiality comes first here too.",
  /** Add 3 to 5 real stories. Only include a quote with written permission. */
  cases: [] as { title: string; who: string; situation: string; whatWeDid: string; whatChanged: string; quote?: string }[],
  closing: "Your situation could be next.",
};

export const live = {
  eyebrow: "The Virtual Watercooler",
  title: "Start your workday with people who get it.",
  /** e.g. "every weekday" — fill in before setting pagesReady.live to true. */
  schedule: "",
  tiktokUrl: "",
  body: (schedule: string) =>
    `A one-hour live stream for people who work from home, ${schedule} at 8 AM Central on TikTok. Real talk about work, leadership and keeping your joy, with a community that shows up.`,
  expectTitle: "What to expect",
  expect: [
    "A warm-up for your brain before the inbox wins",
    "One practical idea you can use that day",
    "Questions answered live",
    "The coworkers you've been missing",
  ],
  cta: "Join on TikTok",
};

export const toolkit = {
  title: "The executive work-from-home toolkit.",
  intro:
    "The tools, gear and habits I rely on to do focused work from home. Everything here is something I'd recommend to a client.",
  disclosure:
    "Some links on this page are affiliate links. If you buy through them, Muri may earn a small commission at no extra cost to you.",
  /** Fill in each category's picks: { name, note, url }. */
  categories: [
    { title: "Desk and setup", items: [] as { name: string; note: string; url: string }[] },
    { title: "Focus and planning", items: [] as { name: string; note: string; url: string }[] },
    { title: "Wellbeing", items: [] as { name: string; note: string; url: string }[] },
    { title: "Tech", items: [] as { name: string; note: string; url: string }[] },
  ],
};

export const travel = {
  title: "Work somewhere that refills you.",
  intro:
    "Workations and executive retreats for leaders who think better away from the usual four walls. Real work in the morning, real rest after.",
  items: [
    { title: "Workations", body: "Destinations and dates coming soon." },
    { title: "Executive retreats", body: "Strategy, alignment and recovery for leadership teams, planned end to end." },
  ],
  // Phase two: "Get First Word" email sign-up.
};
