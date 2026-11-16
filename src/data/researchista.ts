export interface StoryFrame {
  research: {
    title: string;
    subtitle: string;
    body: string;
  };
  insight: {
    title: string;
    subtitle: string;
    body: string;
  };
  product: {
    title: string;
    subtitle: string;
    body: string;
  };
  impact: {
    title: string;
    subtitle: string;
    body: string;
  };
}

export interface CertificateDetails {
  id: string;
  productName: string;
  researchProject: string;
  researcher: string;
  orcid: string;
  institution: string;
  funding: string;
  year: string;
  doi: string;
  endorsementStatus: string;
}

export const MOBILITY_ERA_CERTIFICATE: CertificateDetails = {
  id: "#001",
  productName: "Mobility Era Game",
  researchProject:
    "Social Protection & Cross-Border Mobility in Europe (Doctoral Thesis)",
  researcher: "Dr. Irina Burlacu",
  orcid: "0000-0002-1940-8421",
  institution: "Maastricht University, Graduate School of Governance",
  funding: "Luxembourg National Research Fund (FNR) — AFR Grant",
  year: "2024",
  doi: "10.26481/dis.20150701ib",
  endorsementStatus: "Verified & Endorsed by Researcher",
};

export const MOBILITY_ERA_STORY_FRAME: StoryFrame = {
  research: {
    title: "The research — where it began",
    subtitle: "Maastricht University • Funded by FNR",
    body: "Mobility Era Game was inspired by the doctoral research of Dr. Irina Burlacu on the social protection of people who move across borders to live and work in Europe, conducted at Maastricht University and funded by the Luxembourg National Research Fund (FNR).",
  },
  insight: {
    title: "The insight — what the research revealed",
    subtitle: "The cross-border paradox",
    body: "Her research found something paradoxical: millions of Europeans build their lives across several countries — working here, paying taxes there, retiring somewhere else — yet almost no one, not even the experts, can easily see how the pieces fit together. Social protection rules are written for people who stay put. The people who move are left to figure it out alone, one bureaucracy at a time.",
  },
  product: {
    title: "The product — how it became a game",
    subtitle: "41 European countries, 1 life simulator",
    body: "Explaining that system with charts was hopeless. Explaining it with a game was not. Mobility Era Game puts you in the shoes of a person whose life unfolds across 41 European countries: you study, work, fall in love, pay taxes, invest in your health — and collect happiness along the way. The happiest player wins. The rules of the game are the rules of real life, simplified just enough to be felt, not just read.",
  },
  impact: {
    title: "The impact — what it changes",
    subtitle: "Triple E Awards Finalist • Certificate #001",
    body: "Today Mobility Era Game is played by families, students and classrooms across Europe, available as a board game and an app on iOS and Android. It was a Triple E Awards finalist for transforming the 'Ivory Tower' through educational gaming, and is used in universities, workshops, and policy institutions. It is certificate #001 of the Research-Powered Seal.",
  },
};

export const PROOF_PARTNERS = [
  { name: "FNR", label: "Luxembourg National Research Fund" },
  { name: "Maastricht University", label: "Research Origin" },
  { name: "EU Projects", label: "European Mobility Network" },
  { name: "Triple E Awards", label: "Finalist — Ivory Tower Transformation" },
  { name: "App Store 4.8★", label: "Board Game & Mobile App" },
];

export const THREE_PILLARS = [
  {
    number: "01",
    title: "Products with a brain",
    description:
      "Games, kits, and tools born from real, peer-reviewed research — designed to be loved first, and learned from naturally.",
    accent: "coral" as const,
    href: "/products",
    cta: "Explore products",
  },
  {
    number: "02",
    title: "The Research-Powered Seal",
    description:
      "A transparent certificate that tells you exactly which research project inspired the product, who did the work, and how.",
    accent: "cobalt" as const,
    href: "/certification",
    cta: "See how the Seal works",
  },
  {
    number: "03",
    title: "A movement",
    description:
      "Helping researchers bring their work out of unread PDFs and into everyday life — with impact, visibility, and a real business model.",
    accent: "emerald" as const,
    href: "/for-researchers",
    cta: "I am a researcher",
  },
];

export const CERTIFICATION_STEPS = [
  {
    step: "01",
    title: "Submit",
    description:
      "A researcher or maker tells us about the research and the product idea: what the research found, and how it inspired the product.",
  },
  {
    step: "02",
    title: "Verify",
    description:
      "We check that the link to the research is real and public: a publication, a project, a funding record — and that the researcher endorses the story.",
  },
  {
    step: "03",
    title: "Certify & tell the story",
    description:
      "The product receives the Seal, a page in the certified directory, and its story written in the shared Research → Insight → Product → Impact frame.",
  },
];

export const RESEARCHER_STEPS = [
  {
    step: "01",
    title: "Find the one insight",
    description: "Distill the core finding from your research that people would actually feel.",
  },
  {
    step: "02",
    title: "Choose a form",
    description: "Game, toy, kit, app, or interactive experience — pick what fits the insight.",
  },
  {
    step: "03",
    title: "Workshop it with us",
    description: "Tell us about your work and co-design the bridge from thesis to product.",
  },
  {
    step: "04",
    title: "Get certified",
    description: "Receive the Research-Powered Seal plus your permanent story & verification page.",
  },
  {
    step: "05",
    title: "Launch, sell & measure",
    description: "Reach families, classrooms, and funders with concrete, public impact evidence.",
  },
];

export const CERTIFICATION_FAQ = [
  {
    question: "Does the product need to be scientifically accurate?",
    answer:
      "The Seal certifies the link to research, not the product's design. But the story must be honest about what is research and what is creative simplification — and we encourage researchers to review the content.",
  },
  {
    question: "Who can apply?",
    answer:
      "The researcher(s) behind the work, or the makers of the product — together with the researchers' consent.",
  },
  {
    question: "What does it cost?",
    answer:
      "Free for the first cohort as we build the certified directory, followed by a modest, transparent certification fee.",
  },
  {
    question: "What kinds of products qualify?",
    answer:
      "Games, toys, kits, apps, books, experiences — any product whose core idea comes from a verifiable research project.",
  },
];

export const ABOUT_TIMELINE = [
  {
    year: "Phase 01",
    stage: "Thesis",
    title: "Doctoral Research at Maastricht University",
    description:
      "Dr. Irina Burlacu researches how cross-border workers navigate taxes, healthcare, and social protection across Europe, funded by the FNR.",
  },
  {
    year: "Phase 02",
    stage: "Game",
    title: "Mobility Era Board Game",
    description:
      "Frustrated by brilliant research going unread, Irina turns complex European mobility rules into a joyful 41-country board game.",
  },
  {
    year: "Phase 03",
    stage: "App",
    title: "iOS & Android Digital Edition",
    description:
      "The life simulator expands to mobile devices, reaching classrooms, families, and young Europeans on the move.",
  },
  {
    year: "Phase 04",
    stage: "Awards",
    title: "Triple E Awards Finalist",
    description:
      "Recognized internationally for transforming the 'Ivory Tower' through educational gaming and fiscal literacy.",
  },
  {
    year: "Phase 05",
    stage: "Certification",
    title: "Researchista & The Research-Powered Seal",
    description:
      "Mobility Era Game becomes Certificate #001, launching an open directory and movement for research-powered products.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "from-phd-thesis-to-board-game",
    category: "Founder Story",
    readTime: "5 min read",
    date: "October 2026",
    title: "Why a 14-year-old won't read your thesis — but will play it",
    excerpt:
      "Academic papers are built for peers. Games are built for human intuition. Here is what happened when we turned cross-border tax law into a family board game.",
    featured: true,
  },
  {
    slug: "what-the-research-powered-seal-certifies",
    category: "Certification",
    readTime: "4 min read",
    date: "September 2026",
    title: "What the Research-Powered Seal certifies (and what it doesn't)",
    excerpt:
      "Transparency is the whole point. Why we separate creative simplification from verifiable research origin — and require researcher endorsement.",
    featured: false,
  },
  {
    slug: "teaching-fiscal-literacy-across-41-countries",
    category: "Play & Learn",
    readTime: "6 min read",
    date: "August 2026",
    title: "Teaching European fiscal literacy in classrooms without a single slide deck",
    excerpt:
      "How high school and university educators use Mobility Era Game to spark debates on work, health, taxes, and happiness.",
    featured: false,
  },
];
