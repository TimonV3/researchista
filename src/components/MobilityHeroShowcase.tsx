"use client";

import { motion } from "framer-motion";
import { Compass, Heart, MapPin, Smartphone, Sparkles, Trophy } from "lucide-react";
import { useState } from "react";
import { MOBILITY_ERA_CERTIFICATE } from "@/data/researchista";
import { CertificateModal } from "./CertificateModal";
import { ResearchPoweredSeal } from "./ResearchPoweredSeal";

const FLOATING_COUNTRIES = [
  "Luxembourg",
  "Netherlands",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Sweden",
  "Poland",
];

export function MobilityHeroShowcase() {
  const [certOpen, setCertOpen] = useState(false);

  return (
    <>
      <div className="relative mx-auto w-full max-w-lg py-6">
        {/* Soft background glow */}
        <div
          aria-hidden="true"
          className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-coral/15 via-gold/10 to-cobalt/15 blur-2xl"
        />

        {/* Main Board Game Box Card */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="relative rounded-3xl bg-ink text-paper p-6 sm:p-8 shadow-2xl border border-gold/30"
        >
          <div className="flex items-center justify-between gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 font-mono text-xs text-gold">
              <Sparkles className="w-3.5 h-3.5" />
              BOARD GAME + APP
            </span>
            <span className="font-mono text-xs text-paper/65">
              41 EUROPEAN COUNTRIES
            </span>
          </div>

          <div className="space-y-2 mb-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Mobility Era Game
            </h2>
            <p className="text-sm text-paper/75">
              The game of your life across 41 European countries. Study, work,
              pay taxes, invest in health — the happiest player wins.
            </p>
          </div>

          {/* Stylized game board tiles */}
          <div className="grid grid-cols-3 gap-2.5 mb-6">
            <div className="rounded-2xl bg-white/8 border border-white/10 p-3">
              <MapPin className="w-4 h-4 text-coral mb-1.5" />
              <p className="font-mono text-xs font-bold text-white">41</p>
              <p className="text-[11px] text-paper/65">Countries</p>
            </div>
            <div className="rounded-2xl bg-white/8 border border-white/10 p-3">
              <Heart className="w-4 h-4 text-emerald-400 mb-1.5" />
              <p className="font-mono text-xs font-bold text-white">Happiness</p>
              <p className="text-[11px] text-paper/65">Win condition</p>
            </div>
            <div className="rounded-2xl bg-white/8 border border-white/10 p-3">
              <Trophy className="w-4 h-4 text-gold mb-1.5" />
              <p className="font-mono text-xs font-bold text-white">Triple E</p>
              <p className="text-[11px] text-paper/65">Award finalist</p>
            </div>
          </div>

          {/* Country route pills */}
          <div className="flex flex-wrap gap-1.5">
            {FLOATING_COUNTRIES.map((country, idx) => (
              <motion.span
                key={country}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + idx * 0.05 }}
                className="px-2.5 py-1 rounded-full bg-white/6 border border-white/10 text-[11px] font-mono text-paper/80"
              >
                {country}
              </motion.span>
            ))}
            <span className="px-2.5 py-1 rounded-full bg-coral/20 border border-coral/40 text-[11px] font-mono text-coral">
              +33 more
            </span>
          </div>
        </motion.div>

        {/* Floating Companion App Card */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-6 rounded-2xl bg-card border border-border-warm shadow-xl px-4 py-3"
        >
          <div className="w-10 h-10 rounded-xl bg-cobalt/10 text-cobalt flex items-center justify-center">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-ink">iOS &amp; Android App</p>
            <p className="text-[11px] text-ink-muted flex items-center gap-1">
              <Compass className="w-3 h-3 text-coral" /> 4.8★ App Store
            </p>
          </div>
        </motion.div>

        {/* Clickable Research-Powered Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
          animate={{ opacity: 1, scale: 1, rotate: 6 }}
          transition={{
            delay: 0.45,
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className="absolute -top-6 -right-4 sm:-right-8 z-10"
        >
          <ResearchPoweredSeal
            certificateId="#001"
            projectLabel="CLICK TO VERIFY"
            size="md"
            onClick={() => setCertOpen(true)}
          />
        </motion.div>
      </div>

      <CertificateModal
        certificate={MOBILITY_ERA_CERTIFICATE}
        isOpen={certOpen}
        onClose={() => setCertOpen(false)}
      />
    </>
  );
}
