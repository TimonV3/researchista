"use client";

import { motion } from "framer-motion";
import { BookOpen, Dices, Globe2, Lightbulb } from "lucide-react";
import { useState } from "react";
import type { StoryFrame } from "@/data/researchista";

interface StoryFrame4PartProps {
  frame: StoryFrame;
  compact?: boolean;
}

const STEPS = [
  {
    key: "research" as const,
    step: "01",
    label: "The Research",
    tag: "Where it began",
    icon: BookOpen,
    color: "bg-cobalt/10 text-cobalt border-cobalt/30",
    activeBg: "bg-cobalt text-white",
  },
  {
    key: "insight" as const,
    step: "02",
    label: "The Insight",
    tag: "What it revealed",
    icon: Lightbulb,
    color: "bg-gold/15 text-ink border-gold/40",
    activeBg: "bg-gold text-ink",
  },
  {
    key: "product" as const,
    step: "03",
    label: "The Product",
    tag: "How it became real",
    icon: Dices,
    color: "bg-coral/10 text-coral border-coral/30",
    activeBg: "bg-coral text-white",
  },
  {
    key: "impact" as const,
    step: "04",
    label: "The Impact",
    tag: "What it changes",
    icon: Globe2,
    color: "bg-emerald/10 text-emerald border-emerald/30",
    activeBg: "bg-emerald text-white",
  },
];

export function StoryFrame4Part({ frame, compact = false }: StoryFrame4PartProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStep = STEPS[activeIndex];
  const currentData = frame[currentStep.key];

  return (
    <div className="space-y-6">
      {/* Interactive step selector bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {STEPS.map((item, idx) => {
          const Icon = item.icon;
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`group relative text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                isActive
                  ? "bg-card border-ink shadow-md -translate-y-0.5"
                  : "bg-card/60 border-border-warm hover:bg-card hover:border-ink/30"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                    isActive ? item.activeBg : "bg-subtle text-ink-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs font-bold text-ink-muted">
                  {item.step}
                </span>
              </div>
              <p className="font-serif font-bold text-base text-ink">
                {item.label}
              </p>
              <p className="text-xs text-ink-muted mt-0.5">{item.tag}</p>
              {isActive && (
                <motion.div
                  layoutId="story-frame-indicator"
                  className="absolute bottom-0 left-4 right-4 h-1 rounded-t-full bg-coral"
                  transition={{ type: "spring", stiffness: 360, damping: 28 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Animated story stage */}
      <motion.div
        key={currentStep.key}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`rounded-3xl bg-card border border-border-warm shadow-sm ${
          compact ? "p-6 sm:p-8" : "p-7 sm:p-10"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${currentStep.color}`}
            >
              Step {currentStep.step} • {currentData.subtitle}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              {currentData.title}
            </h3>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              {currentData.body}
            </p>
          </div>

          <div className="flex md:flex-col items-center gap-2 shrink-0 self-start">
            <div className="px-4 py-3 rounded-2xl bg-subtle/80 border border-border-warm text-center">
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted block">
                Consistent Frame
              </span>
              <span className="font-mono text-xs font-bold text-ink">
                Research → Insight → Product → Impact
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              {STEPS.map((s, idx) => (
                <button
                  key={s.key}
                  type="button"
                  aria-label={`Jump to ${s.label}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeIndex
                      ? "w-6 bg-coral"
                      : "w-2 bg-border-warm hover:bg-ink/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
