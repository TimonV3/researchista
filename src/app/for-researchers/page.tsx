import type { Metadata } from "next";
import { ArrowRight, Award, Briefcase, Compass, FileText, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { RESEARCHER_STEPS } from "@/data/researchista";

export const metadata: Metadata = {
  title: "For Researchers — Turn Your Research Into a Product",
  description:
    "Your research deserves to be played with, not just cited. Discover the 5-step path from thesis to Research-Powered product.",
};

export default function ForResearchersPage() {
  return (
    <div className="py-14 sm:py-20 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cobalt/10 text-cobalt font-mono text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            FOR RESEARCHERS • INSPIRATION HUB
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink leading-[1.08]">
            Your research deserves to be played with, not just cited.
          </h1>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            Turn your thesis, paper, or grant insight into a game, kit, app, or
            experience — and own your story with the Research-Powered Seal.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/certification#apply"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-coral text-white font-semibold text-sm hover:bg-coral/90 transition-colors shadow-md"
            >
              Start your application
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products/mobility-era-game"
              className="px-6 py-3.5 rounded-full bg-card border border-border-warm text-ink font-semibold text-sm hover:border-ink transition-colors"
            >
              See Case Study #001
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Why this path */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Why communicate your research this way?
          </h2>
        </Reveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "Reach people papers never will",
              body: "A 14-year-old won't read your thesis — but will play it, gift it, and remember it.",
            },
            {
              icon: Briefcase,
              title: "Science communication with a business model",
              body: "Combine societal impact with revenue and lasting public visibility.",
            },
            {
              icon: Award,
              title: "Turn impact into evidence",
              body: "Funders increasingly ask 'so what?' A certified product is a concrete, public answer.",
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.title}>
                <div className="h-full rounded-3xl bg-card border border-border-warm p-7 space-y-3 shadow-2xs">
                  <div className="w-11 h-11 rounded-2xl bg-subtle flex items-center justify-center text-coral">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink">
                    {card.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* 5-step path from thesis to product */}
      <section className="bg-ink text-paper py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
              HOW IT WORKS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The 5-step path from thesis to product
            </h2>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {RESEARCHER_STEPS.map((item) => (
              <StaggerItem key={item.step}>
                <div className="h-full rounded-2xl bg-white/8 border border-white/12 p-5 space-y-3">
                  <span className="font-mono text-xs font-bold text-gold">
                    STEP {item.step}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-paper/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Success stories + Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full rounded-3xl bg-subtle border border-border-warm p-8 space-y-4">
              <span className="font-mono text-xs font-bold text-emerald uppercase">
                SUCCESS STORY #001
              </span>
              <h3 className="font-serif text-2xl font-bold text-ink">
                Mobility Era Game — Your project could be #002
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Inspired by Dr. Irina Burlacu&apos;s PhD at Maastricht
                University, now played across 41 European countries and named a
                Triple E Awards finalist.
              </p>
              <Link
                href="/products/mobility-era-game"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:underline"
              >
                Explore Case Study #001 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-card border border-border-warm p-8 space-y-4">
              <span className="font-mono text-xs font-bold text-coral uppercase">
                WORKSHOPS &amp; PLAYBOOK
              </span>
              <h3 className="font-serif text-2xl font-bold text-ink">
                Need help finding the playable insight?
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                We run university workshops, keynotes, and 1-on-1 ideation
                sessions to help research teams translate complex findings into
                tangible products.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/play-and-learn"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-paper text-xs font-semibold hover:bg-coral transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" /> Book a Workshop
                </Link>
                <Link
                  href="/certification#apply"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-subtle text-ink text-xs font-semibold hover:bg-border-warm transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" /> Pitch Your Research
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
