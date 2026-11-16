import { Award, CheckCircle2, Globe, GraduationCap, Star } from "lucide-react";
import { PROOF_PARTNERS } from "@/data/researchista";

const ICONS = [GraduationCap, Award, Globe, Award, Star];

export function ProofMarquee() {
  const items = [...PROOF_PARTNERS, ...PROOF_PARTNERS];

  return (
    <section
      aria-label="Partners and recognition"
      className="border-y border-border-warm bg-subtle/50 py-5 overflow-hidden"
    >
      <div className="animate-marquee items-center gap-6">
        {items.map((partner, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <div
              key={`${partner.name}-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border-warm shadow-2xs shrink-0"
            >
              <Icon className="w-4 h-4 text-coral shrink-0" />
              <span className="font-serif font-bold text-sm text-ink">
                {partner.name}
              </span>
              <span className="text-xs text-ink-muted border-l border-border-warm pl-3">
                {partner.label}
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
