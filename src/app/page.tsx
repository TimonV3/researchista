import type { Metadata } from "next";
import { ArrowRight, Award, BookOpen, CheckCircle2, Layers, Sparkles } from "lucide-react";
import Link from "next/link";
import { MobilityHeroShowcase } from "@/components/MobilityHeroShowcase";
import { ProofMarquee } from "@/components/ProofMarquee";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { StoryFrame4Part } from "@/components/StoryFrame4Part";
import {
  MOBILITY_ERA_STORY_FRAME,
  THREE_PILLARS,
} from "@/data/researchista";

export const metadata: Metadata = {
  title: "Researchista — Research you can play with",
  description:
    "We transform research projects into games, tools and experiences — and certify every product that is genuinely powered by research.",
};

const PILLAR_STYLES = {
  coral: "bg-coral/10 text-coral border-coral/25",
  cobalt: "bg-cobalt/10 text-cobalt border-cobalt/25",
  emerald: "bg-emerald/10 text-emerald border-emerald/25",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dot-grid pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-7">
              <Reveal delay={0.05}>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border-warm shadow-2xs font-mono text-xs font-semibold text-ink">
                  <Sparkles className="w-3.5 h-3.5 text-coral" />
                  SERIOUS RESEARCH, JOYFUL PRODUCTS
                </span>
              </Reveal>

              <Reveal delay={0.12}>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-ink leading-[1.05]">
                  Research you can{" "}
                  <span className="relative inline-block text-coral">
                    play with.
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 220 14"
                      className="absolute -bottom-1 left-0 w-full h-3 text-gold/70"
                      fill="none"
                    >
                      <path
                        d="M3 10C58 3 145 2 217 9"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-lg sm:text-xl text-ink-muted leading-relaxed max-w-xl">
                  We transform research projects into games, tools and
                  experiences — and certify every product that is genuinely
                  powered by research.
                </p>
              </Reveal>

              <Reveal delay={0.28}>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-paper font-semibold text-sm sm:text-base hover:bg-coral transition-colors shadow-md"
                  >
                    Explore products
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/for-researchers"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-card border border-border-warm text-ink font-semibold text-sm sm:text-base hover:border-ink transition-colors"
                  >
                    I am a researcher
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.34}>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-ink-muted font-medium">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald" />
                    Publicly verifiable DOI &amp; ORCID
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald" />
                    Endorsed by researchers
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <MobilityHeroShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <ProofMarquee />

      {/* Three Pillars */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
              What we do
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-2">
              Closing the gap between what research knows and what people live.
            </h2>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_PILLARS.map((pillar) => (
              <StaggerItem key={pillar.number}>
                <Link
                  href={pillar.href}
                  className="group flex flex-col justify-between h-full rounded-3xl bg-card border border-border-warm p-7 sm:p-8 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`px-3 py-1 rounded-full font-mono text-xs font-bold border ${
                          PILLAR_STYLES[pillar.accent]
                        }`}
                      >
                        {pillar.number}
                      </span>
                      <ArrowRight className="w-4 h-4 text-ink-muted group-hover:text-coral group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border-warm">
                    <span className="text-sm font-semibold text-ink group-hover:text-coral transition-colors">
                      {pillar.cta} →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Story Block */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[2rem] bg-ink text-paper p-8 sm:p-12 lg:p-14 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-coral/20 blur-3xl"
              />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 font-mono text-xs text-gold">
                    <BookOpen className="w-3.5 h-3.5" />
                    FEATURED STORY
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                    From a PhD thesis to the #1 board game on fiscal education
                  </h2>
                  <p className="text-paper/75 text-base sm:text-lg max-w-2xl">
                    Dr. Irina Burlacu spent years studying how social protection
                    works when Europeans move across borders. Then she asked: why
                    keep this inside an unread PDF when families can feel it at
                    the kitchen table?
                  </p>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-ink font-bold text-sm hover:bg-white transition-colors"
                  >
                    Read the founder story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signature 4-Part Frame Interactive Preview */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-cobalt font-bold inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                THE SHARED STORY FRAME
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-2">
                Every certified product tells its story in 4 transparent steps.
              </h2>
            </div>
            <Link
              href="/products/mobility-era-game"
              className="text-sm font-semibold text-cobalt hover:underline shrink-0"
            >
              See full Mobility Era Game page →
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <StoryFrame4Part frame={MOBILITY_ERA_STORY_FRAME} compact />
          </Reveal>
        </div>
      </section>

      {/* Certification Directory Teaser */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[2rem] bg-subtle border border-border-warm p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald">
                  <Award className="w-4 h-4" />
                  RESEARCH-POWERED DIRECTORY
                </span>
                <h2 className="font-serif text-3xl font-bold text-ink">
                  Certificate #001 is live. Could yours be #002?
                </h2>
                <p className="text-ink-muted">
                  Whether you are a researcher with a breakthrough insight or a
                  maker building a research-inspired product, apply to join the
                  certified directory.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/certification"
                  className="px-6 py-3.5 rounded-full bg-ink text-paper font-semibold text-sm hover:bg-cobalt transition-colors"
                >
                  Explore Certification
                </Link>
                <Link
                  href="/certification#apply"
                  className="px-6 py-3.5 rounded-full bg-coral text-white font-semibold text-sm hover:bg-coral/90 transition-colors"
                >
                  Apply for #002
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
