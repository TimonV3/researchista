import type { Metadata } from "next";
import { ArrowRight, Award, BookOpen, Dices, PlusCircle, Smartphone } from "lucide-react";
import Link from "next/link";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Products — Research-Powered Games & Tools",
  description:
    "Discover and buy research-powered games, tools and experiences certified by Researchista. Featuring Mobility Era Game (#001).",
};

export default function ProductsPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <Reveal className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
            RESEARCHISTA SHOP
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink">
            Products born from real research.
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Every product in our shop carries the Research-Powered Seal — a
            transparent link back to the thesis, funding, and researchers who
            inspired it.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {/* #001 Mobility Era Game */}
          <StaggerItem className="lg:col-span-2">
            <div className="group h-full rounded-[2rem] bg-ink text-paper p-8 sm:p-10 border border-gold/30 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-coral/20 blur-3xl"
              />
              <div className="relative z-10 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-gold font-mono text-xs font-bold">
                    <Award className="w-3.5 h-3.5" />
                    CERTIFICATE #001
                  </span>
                  <span className="font-mono text-xs text-paper/65">
                    AGE 14+ • 2–6 PLAYERS • EN / FR / DE / RO
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Mobility Era Game
                </h2>
                <p className="text-paper/80 text-base sm:text-lg max-w-2xl leading-relaxed">
                  The game of your life across 41 European countries. Inspired by
                  Dr. Irina Burlacu&apos;s PhD research at Maastricht University
                  (funded by FNR) on cross-border social protection.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 text-xs font-semibold">
                    <Dices className="w-4 h-4 text-coral" /> Board Game Edition
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 text-xs font-semibold">
                    <Smartphone className="w-4 h-4 text-gold" /> iOS &amp; Android App
                  </span>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-paper/60 block">
                    Board Game &amp; Digital
                  </span>
                  <span className="font-serif text-2xl font-bold text-white">
                    €39.00{" "}
                    <span className="text-sm font-sans font-normal text-paper/65">
                      (App free to try)
                    </span>
                  </span>
                </div>
                <Link
                  href="/products/mobility-era-game"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral text-white font-semibold text-sm hover:bg-white hover:text-ink transition-colors"
                >
                  View product &amp; story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </StaggerItem>

          {/* Classroom & Workshop Kit */}
          <StaggerItem>
            <div className="h-full rounded-[2rem] bg-card border border-border-warm p-8 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cobalt/10 text-cobalt font-mono text-xs font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                  EDUCATORS &amp; SCHOOLS
                </span>
                <h2 className="font-serif text-2xl font-bold text-ink">
                  Classroom &amp; Workshop Pack
                </h2>
                <p className="text-sm text-ink-muted leading-relaxed">
                  5 Mobility Era board games + facilitator guide + EU fiscal
                  literacy lesson plan for high schools, universities, and
                  policy workshops.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-border-warm flex items-center justify-between gap-3">
                <span className="font-serif text-xl font-bold text-ink">
                  €165.00
                </span>
                <Link
                  href="/play-and-learn"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-ink text-paper text-xs font-semibold hover:bg-cobalt transition-colors"
                >
                  For Educators
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Open Slot #002 */}
        <Reveal>
          <div className="rounded-3xl bg-subtle/80 border-2 border-dashed border-border-warm p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-card border border-border-warm flex items-center justify-center shrink-0 text-coral">
                <PlusCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-ink-muted">
                  ENTRY #002 — OPEN COHORT
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink mt-1">
                  Have you built a product inspired by research?
                </h3>
                <p className="text-sm text-ink-muted mt-1 max-w-xl">
                  Games, toys, kits, apps, books, or experiences — apply for the
                  Research-Powered Seal and join the directory.
                </p>
              </div>
            </div>
            <Link
              href="/certification#apply"
              className="px-6 py-3 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-coral transition-colors shrink-0"
            >
              Apply for #002 →
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
