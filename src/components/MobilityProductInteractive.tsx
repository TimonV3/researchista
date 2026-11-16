"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  Dices,
  ExternalLink,
  FileText,
  Globe,
  ShoppingBag,
  Smartphone,
  Users,
} from "lucide-react";
import { useState } from "react";
import {
  MOBILITY_ERA_CERTIFICATE,
  MOBILITY_ERA_STORY_FRAME,
} from "@/data/researchista";
import { CertificateModal } from "./CertificateModal";
import { ProductOrderModal } from "./ProductOrderModal";
import { ResearchPoweredSeal } from "./ResearchPoweredSeal";
import { StoryFrame4Part } from "./StoryFrame4Part";

const PRODUCT_FAQ = [
  {
    q: "How many players can play Mobility Era Game?",
    a: "2 to 6 players (age 14+), or up to 30 students in classroom workshop teams. A typical session takes 45–60 minutes.",
  },
  {
    q: "What languages are available?",
    a: "Available in English, French, German, and Romanian — both in the physical box edition and inside the mobile app.",
  },
  {
    q: "Do I need prior knowledge of EU tax or social law?",
    a: "Not at all. The rules of the game are the rules of real life, simplified just enough to be felt, not just read.",
  },
];

export function MobilityProductInteractive() {
  const [certOpen, setCertOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [edition, setEdition] = useState<"board" | "app">("board");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [addedNotice, setAddedNotice] = useState(false);

  const handleBuyClick = () => {
    setOrderOpen(true);
  };

  const handleAppNotice = () => {
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  return (
    <div className="space-y-20">
      {/* Above the fold */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative">
          <div className="rounded-[2rem] bg-ink text-paper p-8 sm:p-10 border border-gold/30 shadow-2xl relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -left-16 -top-16 w-56 h-56 rounded-full bg-cobalt/25 blur-3xl"
            />
            <div className="relative z-10 flex items-start justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs text-gold uppercase tracking-wider">
                  Research-Powered Product #001
                </span>
                <h2 className="font-serif text-3xl font-bold text-white mt-1">
                  41 Countries. One Life.
                </h2>
              </div>
              <ResearchPoweredSeal
                certificateId="#001"
                projectLabel="CLICK TO VERIFY"
                size="sm"
                onClick={() => setCertOpen(true)}
              />
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-3 mb-6">
              <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
                <Users className="w-4 h-4 text-coral mb-1.5" />
                <p className="font-semibold text-sm text-white">2–6 Players</p>
                <p className="text-xs text-paper/65">Age 14+</p>
              </div>
              <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
                <Globe className="w-4 h-4 text-gold mb-1.5" />
                <p className="font-semibold text-sm text-white">4 Languages</p>
                <p className="text-xs text-paper/65">EN • FR • DE • RO</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCertOpen(true)}
              className="relative z-10 w-full py-3 px-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-gold/40 text-xs font-mono text-gold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              Click the Research-Powered Seal to inspect Certificate #001
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald font-mono text-xs font-bold">
              TRIPLE E AWARDS FINALIST
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink leading-tight">
              Mobility Era Game
            </h1>
            <p className="text-xl text-ink-muted">
              The game of your life across 41 European countries.
            </p>
          </div>

          {/* Edition switcher */}
          <div className="inline-flex p-1 rounded-full bg-subtle border border-border-warm">
            <button
              type="button"
              onClick={() => setEdition("board")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                edition === "board"
                  ? "bg-ink text-paper shadow-xs"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <Dices className="w-4 h-4" />
              Board Game (€39)
            </button>
            <button
              type="button"
              onClick={() => setEdition("app")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                edition === "app"
                  ? "bg-ink text-paper shadow-xs"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile App (iOS &amp; Android)
            </button>
          </div>

          <AnimatePresence mode="wait">
            {edition === "board" ? (
              <motion.div
                key="board"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="space-y-4"
              >
                <p className="text-sm text-ink-muted leading-relaxed">
                  Includes European 41-country board, life-event cards (study,
                  work, love, taxes, health), happiness tokens, and classroom
                  discussion guide.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleBuyClick}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-coral text-white font-semibold text-sm hover:bg-coral/90 transition-colors shadow-md cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Order Board Game — €39.00
                  </button>
                  <button
                    type="button"
                    onClick={() => setCertOpen(true)}
                    className="px-5 py-3.5 rounded-full bg-card border border-border-warm text-sm font-semibold text-ink hover:border-ink transition-colors cursor-pointer"
                  >
                    View Seal #001
                  </button>
                </div>
                {addedNotice && (
                  <p className="text-xs font-mono text-emerald font-semibold">
                    ✓ Added Mobility Era Board Game to your inquiry cart!
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="app"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="space-y-4"
              >
                <p className="text-sm text-ink-muted leading-relaxed">
                  Play solo or with friends on iOS and Android. Rated 4.8★ on
                  the App Store for making European social protection intuitive.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#app-download"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAppNotice();
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cobalt text-white font-semibold text-sm hover:bg-cobalt/90 transition-colors shadow-md"
                  >
                    App Store (4.8★)
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="#google-play"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAppNotice();
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-card border border-border-warm text-ink font-semibold text-sm hover:border-ink transition-colors"
                  >
                    Google Play
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                {addedNotice && (
                  <p className="text-xs font-mono text-cobalt font-semibold">
                    ✓ App Store / Google Play store links ready for launch!
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* The Frame: "Powered by Research" story block */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
            POWERED BY RESEARCH — STORY BLOCK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-2">
            From doctoral thesis to 41-country life simulator.
          </h2>
        </div>
        <StoryFrame4Part frame={MOBILITY_ERA_STORY_FRAME} />
      </section>

      {/* Collapsible Certificate Details */}
      <section className="rounded-3xl bg-card border border-border-warm overflow-hidden">
        <button
          type="button"
          onClick={() => setDetailsOpen((prev) => !prev)}
          className="w-full px-6 sm:px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-subtle/40 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-cobalt" />
            <div>
              <h3 className="font-serif text-xl font-bold text-ink">
                Certificate Details (#001)
              </h3>
              <p className="text-xs text-ink-muted">
                Research project title, researcher ORCID, institution, FNR
                funding, and DOI link
              </p>
            </div>
          </div>
          <motion.span
            animate={{ rotate: detailsOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown className="w-5 h-5 text-ink-muted" />
          </motion.span>
        </button>

        <AnimatePresence>
          {detailsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border-warm"
            >
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 sm:p-8 text-sm bg-subtle/25">
                <div>
                  <dt className="font-mono text-xs text-ink-muted uppercase">
                    Research project
                  </dt>
                  <dd className="font-semibold text-ink mt-1">
                    {MOBILITY_ERA_CERTIFICATE.researchProject}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-ink-muted uppercase">
                    Researcher
                  </dt>
                  <dd className="font-semibold text-ink mt-1">
                    {MOBILITY_ERA_CERTIFICATE.researcher} — ORCID{" "}
                    {MOBILITY_ERA_CERTIFICATE.orcid}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-ink-muted uppercase">
                    Institution
                  </dt>
                  <dd className="font-semibold text-ink mt-1">
                    {MOBILITY_ERA_CERTIFICATE.institution}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-ink-muted uppercase">
                    Funding &amp; Year
                  </dt>
                  <dd className="font-semibold text-ink mt-1">
                    {MOBILITY_ERA_CERTIFICATE.funding} ({MOBILITY_ERA_CERTIFICATE.year})
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="font-mono text-xs text-ink-muted uppercase">
                    Publication DOI
                  </dt>
                  <dd className="font-mono text-cobalt font-semibold mt-1">
                    https://doi.org/{MOBILITY_ERA_CERTIFICATE.doi}
                  </dd>
                </div>
              </dl>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Reviews & FAQ */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-ink">
            What players &amp; educators say
          </h3>
          <blockquote className="rounded-3xl bg-subtle/70 border border-border-warm p-6 space-y-3">
            <p className="text-sm sm:text-base text-ink italic leading-relaxed">
              &ldquo;Our students understood more about cross-border taxation
              and social security in one 50-minute game than in three weeks of
              lectures.&rdquo;
            </p>
            <footer className="font-mono text-xs text-ink-muted">
              — University Lecturer, European Policy Workshop
            </footer>
          </blockquote>
        </div>

        <div className="lg:col-span-7 space-y-3">
          <h3 className="font-serif text-2xl font-bold text-ink mb-4">
            Frequently asked questions
          </h3>
          {PRODUCT_FAQ.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={item.q}
                className="rounded-2xl bg-card border border-border-warm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-3 text-left font-semibold text-sm text-ink cursor-pointer"
                >
                  {item.q}
                  <ChevronDown
                    className={`w-4 h-4 text-ink-muted transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-ink-muted leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <CertificateModal
        certificate={MOBILITY_ERA_CERTIFICATE}
        isOpen={certOpen}
        onClose={() => setCertOpen(false)}
      />

      <ProductOrderModal
        isOpen={orderOpen}
        onClose={() => setOrderOpen(false)}
        productSlug="mobility-era-game"
        productName="Mobility Era Game"
        unitPriceEur={39}
      />
    </div>
  );
}
