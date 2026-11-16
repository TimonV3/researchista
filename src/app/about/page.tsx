import type { Metadata } from "next";
import { ArrowRight, Award, GraduationCap, HeartHandshake, Trophy } from "lucide-react";
import Link from "next/link";
import { ProofMarquee } from "@/components/ProofMarquee";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { ABOUT_TIMELINE } from "@/data/researchista";

export const metadata: Metadata = {
  title: "About & Story — Closing the Gap Between Research and Life",
  description:
    "How Dr. Irina Burlacu turned her PhD thesis at Maastricht University into Mobility Era Game and launched Researchista.",
};

export default function AboutPage() {
  return (
    <div className="py-14 sm:py-20 space-y-20">
      {/* Mission & Founder Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
              ABOUT RESEARCHISTA
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink leading-tight">
              Close the gap between what research knows and what people live.
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              Researchista began with a simple frustration: brilliant social
              policy research was sitting inside academic PDFs, unread by the
              very people whose lives it described.
            </p>
            <p className="text-base text-ink-muted leading-relaxed">
              Dr. Irina Burlacu conducted her doctoral research at Maastricht
              University (funded by the Luxembourg National Research Fund — FNR)
              on how Europeans navigate taxes, healthcare, and social protection
              when they move across borders. To make those invisible rules
              tangible, she created <strong>Mobility Era Game</strong> — turning
              years of research into a joyful, 41-country life simulator.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products/mobility-era-game"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-coral transition-colors"
              >
                Explore Mobility Era Game <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/certification"
                className="px-6 py-3 rounded-full bg-card border border-border-warm text-ink text-sm font-semibold hover:border-ink transition-colors"
              >
                The Research-Powered Seal
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="rounded-3xl bg-ink text-paper p-8 space-y-5 border border-gold/30 shadow-xl">
              <GraduationCap className="w-8 h-8 text-gold" />
              <h2 className="font-serif text-2xl font-bold text-white">
                &ldquo;Serious research, joyful products.&rdquo;
              </h2>
              <p className="text-sm text-paper/75 leading-relaxed">
                Every product we build or certify follows the same honest rule:
                name the research, name the researcher, and explain the leap
                from insight to product.
              </p>
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-mono text-gold block font-bold">41</span>
                  <span className="text-paper/70">European countries modeled</span>
                </div>
                <div>
                  <span className="font-mono text-gold block font-bold">#001</span>
                  <span className="text-paper/70">First Research-Powered Seal</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Animated Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-cobalt font-bold">
            THE JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-2">
            Thesis → Game → App → Awards → Certification
          </h2>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {ABOUT_TIMELINE.map((item, idx) => (
            <StaggerItem key={item.stage}>
              <div className="h-full rounded-3xl bg-card border border-border-warm p-6 flex flex-col justify-between relative hover:border-coral transition-colors">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] font-bold text-coral">
                      {item.year}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-subtle font-mono text-[11px] font-bold flex items-center justify-center text-ink">
                      {idx + 1}
                    </span>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-ink text-paper font-mono text-[11px] font-semibold mb-2">
                    {item.stage}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Press, Awards & Partners */}
      <section className="space-y-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-subtle p-7 border border-border-warm space-y-2">
              <Trophy className="w-6 h-6 text-gold" />
              <h3 className="font-serif text-xl font-bold text-ink">
                Triple E Awards Finalist
              </h3>
              <p className="text-sm text-ink-muted">
                Recognized for transforming the &ldquo;Ivory Tower&rdquo;
                through educational gaming.
              </p>
            </div>
            <div className="rounded-3xl bg-subtle p-7 border border-border-warm space-y-2">
              <Award className="w-6 h-6 text-coral" />
              <h3 className="font-serif text-xl font-bold text-ink">
                FNR &amp; Maastricht Roots
              </h3>
              <p className="text-sm text-ink-muted">
                Grounded in peer-reviewed doctoral research funded by the
                Luxembourg National Research Fund.
              </p>
            </div>
            <div className="rounded-3xl bg-subtle p-7 border border-border-warm space-y-2">
              <HeartHandshake className="w-6 h-6 text-emerald" />
              <h3 className="font-serif text-xl font-bold text-ink">
                European Partnerships
              </h3>
              <p className="text-sm text-ink-muted">
                Collaborating with universities, EU projects, educators, and
                retailers across Europe.
              </p>
            </div>
          </Reveal>
        </div>
        <ProofMarquee />
      </section>
    </div>
  );
}
