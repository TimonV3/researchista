"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

export function CertificationApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Researcher",
    productName: "",
    researchLink: "",
    story: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/certifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Could not submit application.");
        return;
      }
      setApplicationId(data.application?.id ?? null);
      setSubmitted(true);
    } catch {
      setErrorMsg("Network error while submitting your application.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl bg-emerald/10 border border-emerald/30 p-8 sm:p-10 text-center space-y-4"
      >
        <div className="w-12 h-12 rounded-full bg-emerald text-white flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-ink">
          Application saved for &ldquo;{form.productName || "Your Project"}&rdquo;
        </h3>
        <p className="text-sm text-ink-muted max-w-md mx-auto">
          Thank you, {form.name || "researcher"}. Our verification team has
          logged your submission and will review your public research link for
          Certificate #002+.
        </p>
        {applicationId && (
          <p className="font-mono text-xs text-emerald font-semibold">
            Reference ID: {applicationId}
          </p>
        )}
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setApplicationId(null);
          }}
          className="px-5 py-2.5 rounded-full bg-ink text-paper text-xs font-semibold cursor-pointer"
        >
          Submit another project
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-card border border-border-warm p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            required
            placeholder="Dr. Alex Martin"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm text-ink focus:outline-none focus:border-cobalt"
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="alex@university.edu"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm text-ink focus:outline-none focus:border-cobalt"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">
            I am a...
          </label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm text-ink focus:outline-none focus:border-cobalt"
          >
            <option>Researcher</option>
            <option>Product Maker (with researcher consent)</option>
            <option>University / Research Funder</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">
            Product or Idea Name
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Climate Choices Card Game"
            value={form.productName}
            onChange={(e) => setForm({ ...form, productName: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm text-ink focus:outline-none focus:border-cobalt"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">
          Verifiable Research Link (DOI, Thesis, ORCID, or Grant ID)
        </label>
        <input
          type="text"
          required
          placeholder="https://doi.org/10...."
          value={form.researchLink}
          onChange={(e) => setForm({ ...form, researchLink: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm text-ink focus:outline-none focus:border-cobalt"
        />
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-1.5">
          How did the research inspire the product?
        </label>
        <textarea
          rows={3}
          required
          placeholder="Share the core insight and what form the product takes (game, kit, app, experience)..."
          value={form.story}
          onChange={(e) => setForm({ ...form, story: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm text-ink focus:outline-none focus:border-cobalt"
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-ink-muted cursor-pointer">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-0.5 rounded border-border-warm text-coral focus:ring-coral"
        />
        <span>
          I confirm the originating research is publicly verifiable, the
          researcher(s) endorse this link, and our story is honest about
          creative simplification.
        </span>
      </label>

      {errorMsg && (
        <p className="text-xs font-mono text-coral bg-coral/10 border border-coral/25 rounded-xl px-4 py-2.5">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-coral text-white font-semibold text-sm hover:bg-coral/90 disabled:opacity-60 transition-colors shadow-md cursor-pointer"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {loading ? "Submitting..." : "Apply for certification"}
      </button>
    </form>
  );
}
