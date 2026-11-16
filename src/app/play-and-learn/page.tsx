import type { Metadata } from "next";
import { ArrowRight, Calendar, GraduationCap, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { WorkshopInquiryForm } from "@/components/WorkshopInquiryForm";

export const metadata: Metadata = {
  title: "Play & Learn — For Educators, Workshops & Families",
  description:
    "Bring research-powered games into classrooms, university workshops, and family game nights across Europe.",
};

export default function PlayAndLearnPage() {
  return (
    <div className="py-14 sm:py-20 space-y-20">
      <section id="workshop-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 scroll-mt-24">
        <Reveal className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-cobalt font-bold">
            BOOK A WORKSHOP OR CLASSROOM KIT
          </span>
          <h2 className="font-serif text-3xl font-bold text-ink">
            Bring Mobility Era to your school, university, or event.
          </h2>
        </Reveal>
        <WorkshopInquiryForm />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl space-y-5">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald/10 text-emerald font-mono text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            PLAY &amp; LEARN
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink leading-tight">
            For teachers, workshops, events, and curious families.
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Turn abstract European policy, fiscal literacy, and cross-border
            life decisions into a lively 60-minute session where everyone learns
            by playing.
          </p>
        </Reveal>
      </section>

      <section id="workshop-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 scroll-mt-24">
        <Reveal className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-cobalt font-bold">
            BOOK A WORKSHOP OR CLASSROOM KIT
          </span>
          <h2 className="font-serif text-3xl font-bold text-ink">
            Bring Mobility Era to your school, university, or event.
          </h2>
        </Reveal>
        <WorkshopInquiryForm />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: GraduationCap,
              tag: "FOR TEACHERS",
              title: "Classroom & University Kits",
              body: "Ready-to-run 5-box sets with facilitator notes, debrief questions, and links to the underlying Maastricht University research.",
            },
            {
              icon: Calendar,
              tag: "WORKSHOPS & EVENTS",
              title: "Live Facilitated Sessions",
              body: "Invite Researchista to run an interactive Mobility Era workshop at your conference, EU project meeting, or student orientation.",
            },
            {
              icon: Users,
              tag: "FOR FAMILIES",
              title: "Kitchen-Table Discovery",
              body: "Designed for ages 14+ and 2–6 players. Spark conversations about studying abroad, working, health, and happiness.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-3xl bg-card border border-border-warm p-7 space-y-4 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cobalt">
                      {item.tag}
                    </span>
                    <Icon className="w-5 h-5 text-coral" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-ink">
                    {item.title}
                  </h2>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      <section id="workshop-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 scroll-mt-24">
        <Reveal className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-cobalt font-bold">
            BOOK A WORKSHOP OR CLASSROOM KIT
          </span>
          <h2 className="font-serif text-3xl font-bold text-ink">
            Bring Mobility Era to your school, university, or event.
          </h2>
        </Reveal>
        <WorkshopInquiryForm />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] bg-ink text-paper p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-serif text-3xl font-bold text-white">
                Ready to bring Mobility Era to your classroom or event?
              </h2>
              <p className="text-sm text-paper/75">
                Start with Mobility Era Game (#001) or reach out to organize a
                live Researchista workshop.
              </p>
            </div>
            <Link
              href="/products/mobility-era-game"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-ink font-bold text-sm hover:bg-white transition-colors shrink-0"
            >
              Explore Mobility Era Game <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
