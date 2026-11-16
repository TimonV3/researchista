"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

export function WorkshopInquiryForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({
    contactName: "",
    contactEmail: "",
    organization: "",
    audienceType: "High School / University Class",
    participantsCount: "20-30",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/workshops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Could not submit inquiry.");
        return;
      }
      setInquiryId(data.inquiry?.id ?? null);
      setSubmitted(true);
    } catch {
      setErrorMsg("Network error while sending inquiry.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl bg-emerald/10 border border-emerald/30 p-8 text-center space-y-3"
      >
        <CheckCircle2 className="w-8 h-8 text-emerald mx-auto" />
        <h3 className="font-serif text-2xl font-bold text-ink">
          Workshop inquiry saved!
        </h3>
        <p className="text-sm text-ink-muted max-w-md mx-auto">
          We&apos;ll follow up at {form.contactEmail} with availability and
          classroom kit details.
        </p>
        {inquiryId && (
          <p className="font-mono text-xs text-emerald font-semibold">
            Reference ID: {inquiryId}
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-card border border-border-warm p-6 sm:p-8 shadow-sm space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-ink-muted mb-1">
            Your Name
          </label>
          <input
            type="text"
            required
            placeholder="Prof. Elena Weber"
            value={form.contactName}
            onChange={(e) => setForm({ ...form, contactName: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase text-ink-muted mb-1">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="e.weber@school.eu"
            value={form.contactEmail}
            onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-ink-muted mb-1">
            School / Organization
          </label>
          <input
            type="text"
            placeholder="Maastricht University"
            value={form.organization}
            onChange={(e) => setForm({ ...form, organization: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase text-ink-muted mb-1">
            Audience
          </label>
          <select
            value={form.audienceType}
            onChange={(e) => setForm({ ...form, audienceType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm"
          >
            <option>High School / University Class</option>
            <option>Research Team Workshop</option>
            <option>Conference / EU Event</option>
            <option>Family / Community Night</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-mono uppercase text-ink-muted mb-1">
            Participants
          </label>
          <input
            type="text"
            placeholder="e.g. 25"
            value={form.participantsCount}
            onChange={(e) =>
              setForm({ ...form, participantsCount: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-ink-muted mb-1">
          Tell us about your session or classroom kit request
        </label>
        <textarea
          rows={3}
          required
          placeholder="Preferred dates, topics (fiscal literacy, cross-border mobility, turning research into games)..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm"
        />
      </div>

      {errorMsg && (
        <p className="text-xs font-mono text-coral bg-coral/10 border border-coral/25 rounded-xl px-4 py-2.5">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-cobalt disabled:opacity-60 transition-colors cursor-pointer"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {loading ? "Sending..." : "Book Workshop / Request Classroom Kit"}
      </button>
    </form>
  );
}
