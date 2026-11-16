import type { Metadata } from "next";
import { ArrowRight, Award, CheckCircle2, FileCheck2, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { CertificationApplyForm } from "@/components/CertificationApplyForm";
import { ResearchPoweredSeal } from "@/components/ResearchPoweredSeal";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { CERTIFICATION_FAQ, CERTIFICATION_STEPS } from "@/data/researchista";

export const metadata: Metadata = {
  title: "The Research-Powered Seal — Certification",
  description:
    "Proof that this product was born from real research. Learn what the Research-Powered Seal means, explore the certified directory, and apply.",
};

export default function CertificationPage() {
  return (
    <div className="py-14 sm:py-20 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-ink text-paper p-8 sm:p-14 lg:p-16 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-gold/15 blur-3xl"
          />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 font-mono text-xs text-gold">
                <Award className="w-3.5 h-3.5" />
                THE RESEARCH-POWERED SEAL
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Proof that this product was born from real research.
              </h1>
              <p className="text-lg text-paper/80 max-w-2xl leading-relaxed">
                Some products are inspired by a hunch. Ours — and the ones we
                certify — are inspired by years of research, with a paper trail
                to prove it.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#directory"
                  className="px-6 py-3.5 rounded-full bg-gold text-ink font-bold text-sm hover:bg-white transition-colors"
                >
                  See certified products
                </a>
                <a
                  href="#apply"
                  className="px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
                >
                  Apply for certification
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <ResearchPoweredSeal
                certificateId="#001+"
                projectLabel="VERIFIED ORIGIN"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What the Seal means */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Reveal className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-cobalt font-bold">
            WHAT THE SEAL MEANS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Transparent origin. Verifiable paper trail.
          </h2>
          <blockquote className="rounded-2xl bg-subtle border-l-4 border-coral p-6 text-base sm:text-lg font-medium text-ink">
            A product carries the Research-Powered Seal when it demonstrably
            originated from a specific, verifiable research project — and the
            researchers behind it endorse the link.
          </blockquote>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "The research project",
              desc: "Its title, institution and funder, publicly verifiable.",
            },
            {
              title: "The researcher",
              desc: "Named, with links to their work (DOI, ORCID).",
            },
            {
              title: "The story",
              desc: "How a scientific insight became a product you can hold, told in the same honest frame every time.",
            },
            {
              title: "The endorsement",
              desc: "The researchers confirm their work inspired the product.",
            },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-3xl bg-card border border-border-warm p-6 space-y-2 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald" />
                <h3 className="font-serif text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal>
          <div className="rounded-2xl bg-coral/8 border border-coral/25 p-6 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-coral shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-ink leading-relaxed">
              <strong>What the Seal is NOT:</strong> it is not a quality mark
              for the product itself, and it is not paid advertising. It
              certifies one thing only — <em>the origin and the story</em> —
              transparently, so you can check it yourself.
            </p>
          </div>
        </Reveal>
      </section>

      {/* How it works (3 steps) */}
      <section className="bg-subtle/60 border-y border-border-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Reveal className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
              HOW IT WORKS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-2">
              Three steps from submission to Seal.
            </h2>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATION_STEPS.map((step) => (
              <StaggerItem key={step.step}>
                <div className="h-full rounded-3xl bg-card border border-border-warm p-7 space-y-3 shadow-2xs">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-ink text-paper inline-block">
                    STEP {step.step}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certified Products Directory */}
      <section
        id="directory"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24"
      >
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald font-bold">
            CERTIFIED PRODUCTS DIRECTORY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-2">
            The directory starts here — and so does the collection.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <Link
              href="/products/mobility-era-game"
              className="group block h-full rounded-3xl bg-ink text-paper p-8 border border-gold/40 shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-gold text-ink">
                  #001 — CERTIFIED
                </span>
                <FileCheck2 className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Mobility Era Game
              </h3>
              <p className="text-sm text-paper/80 leading-relaxed mb-6">
                From a PhD thesis on social protection across borders to the #1
                board game on fiscal education, played across 41 European
                countries.
              </p>
              <span className="text-sm font-semibold text-gold group-hover:underline inline-flex items-center gap-1.5">
                Read the story <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="#apply"
              className="group block h-full rounded-3xl bg-card border-2 border-dashed border-border-warm hover:border-coral p-8 transition-all"
            >
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-subtle text-ink-muted">
                #002 — OPEN SLOT
              </span>
              <h3 className="font-serif text-2xl font-bold text-ink mt-5 mb-2">
                Your project?
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                Games, toys, kits, apps, books, or experiences whose core idea
                comes from a verifiable research project.
              </p>
              <span className="text-sm font-semibold text-coral group-hover:underline inline-flex items-center gap-1.5">
                Apply for certification <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ + Apply Form */}
      <section
        id="apply"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
                FAQ &amp; ELIGIBILITY
              </span>
              <h2 className="font-serif text-3xl font-bold text-ink mt-2">
                Apply for the Research-Powered Seal
              </h2>
              <p className="text-sm text-ink-muted mt-2">
                It starts with a short form and a conversation. Free for the
                first cohort to build the directory.
              </p>
            </Reveal>

            <div className="space-y-4">
              {CERTIFICATION_FAQ.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl bg-card border border-border-warm p-5"
                >
                  <h3 className="font-semibold text-sm text-ink">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted mt-1.5 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <CertificationApplyForm />
          </div>
        </div>
      </section>
    </div>
  );
}
