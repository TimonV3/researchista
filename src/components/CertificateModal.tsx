"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ExternalLink, FileText, X } from "lucide-react";
import Link from "next/link";
import type { CertificateDetails } from "@/data/researchista";
import { ResearchPoweredSeal } from "./ResearchPoweredSeal";

interface CertificateModalProps {
  certificate: CertificateDetails;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({
  certificate,
  isOpen,
  onClose,
}: CertificateModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 18 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-3xl bg-paper border-2 border-gold/60 shadow-2xl p-6 sm:p-8 overflow-hidden"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-subtle hover:bg-border-warm flex items-center justify-center text-ink transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-border-warm">
              <ResearchPoweredSeal
                certificateId={certificate.id}
                size="sm"
                className="shrink-0"
              />
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald/10 text-emerald font-mono text-xs font-semibold mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {certificate.endorsementStatus}
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink">
                  Certificate {certificate.id} — {certificate.productName}
                </h3>
                <p className="text-sm text-ink-muted mt-1">
                  The Research-Powered Seal certifies the verifiable link
                  between this product and its originating research.
                </p>
              </div>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 text-sm">
              <div className="sm:col-span-2 bg-card rounded-2xl p-4 border border-border-warm">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  Research Project
                </dt>
                <dd className="font-semibold text-ink mt-1">
                  {certificate.researchProject}
                </dd>
              </div>
              <div className="bg-card rounded-2xl p-4 border border-border-warm">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  Researcher
                </dt>
                <dd className="font-semibold text-ink mt-1">
                  {certificate.researcher}
                </dd>
                <dd className="font-mono text-xs text-cobalt mt-0.5">
                  ORCID: {certificate.orcid}
                </dd>
              </div>
              <div className="bg-card rounded-2xl p-4 border border-border-warm">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  Institution & Funding
                </dt>
                <dd className="font-semibold text-ink mt-1">
                  {certificate.institution}
                </dd>
                <dd className="text-xs text-ink-muted mt-0.5">
                  {certificate.funding} ({certificate.year})
                </dd>
              </div>
              <div className="sm:col-span-2 bg-subtle/70 rounded-2xl p-4 border border-border-warm flex items-center justify-between gap-3">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-coral" />
                    Publication / Thesis DOI
                  </dt>
                  <dd className="font-mono text-xs sm:text-sm font-semibold text-ink mt-1">
                    doi.org/{certificate.doi}
                  </dd>
                </div>
                <a
                  href={`https://doi.org/${certificate.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink text-paper text-xs font-semibold hover:bg-cobalt transition-colors shrink-0"
                >
                  Verify DOI
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </dl>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <Link
                href="/certification"
                onClick={onClose}
                className="text-sm font-semibold text-cobalt hover:underline"
              >
                About the Research-Powered Seal →
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-coral transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
