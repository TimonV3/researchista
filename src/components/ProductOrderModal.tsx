"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

interface ProductOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productSlug: string;
  productName: string;
  unitPriceEur: number;
}

export function ProductOrderModal({
  isOpen,
  onClose,
  productSlug,
  productName,
  unitPriceEur,
}: ProductOrderModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    shippingCountry: "Luxembourg",
    quantity: 1,
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug,
          productName,
          edition: "board",
          unitPriceEur,
          ...form,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Could not place order.");
        return;
      }
      setOrderId(data.order?.id ?? null);
      setSubmitted(true);
    } catch {
      setErrorMsg("Network error while placing order.");
    } finally {
      setLoading(false);
    }
  };

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
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl bg-paper border border-border-warm shadow-2xl p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close order modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-subtle hover:bg-border-warm flex items-center justify-center text-ink cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink">
                  Order request received!
                </h3>
                <p className="text-sm text-ink-muted">
                  Thank you, {form.customerName}. We reserved {form.quantity}×{" "}
                  <strong>{productName}</strong> (€
                  {(unitPriceEur * form.quantity).toFixed(2)}) for shipping to{" "}
                  {form.shippingCountry}.
                </p>
                {orderId && (
                  <p className="font-mono text-xs text-emerald font-semibold">
                    Order ID: {orderId}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-ink text-paper text-sm font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pr-8">
                  <span className="font-mono text-xs text-coral font-bold uppercase">
                    ORDER BOARD GAME
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-ink mt-1">
                    {productName} — €{unitPriceEur.toFixed(2)}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-ink-muted mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.customerName}
                      onChange={(e) =>
                        setForm({ ...form, customerName: e.target.value })
                      }
                      className="w-full px-3.5 py-2 rounded-xl bg-card border border-border-warm text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-ink-muted mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.customerEmail}
                      onChange={(e) =>
                        setForm({ ...form, customerEmail: e.target.value })
                      }
                      className="w-full px-3.5 py-2 rounded-xl bg-card border border-border-warm text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-ink-muted mb-1">
                      Shipping Country
                    </label>
                    <input
                      type="text"
                      required
                      value={form.shippingCountry}
                      onChange={(e) =>
                        setForm({ ...form, shippingCountry: e.target.value })
                      }
                      className="w-full px-3.5 py-2 rounded-xl bg-card border border-border-warm text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-ink-muted mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={form.quantity}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          quantity: Math.max(1, Number(e.target.value)),
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-xl bg-card border border-border-warm text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-ink-muted mb-1">
                    Language / Notes (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. English edition, classroom invoice needed"
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-card border border-border-warm text-sm"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs font-mono text-coral bg-coral/10 border border-coral/25 rounded-xl px-3.5 py-2">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-coral text-white font-semibold text-sm hover:bg-coral/90 disabled:opacity-60 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ShoppingBag className="w-4 h-4" />
                  )}
                  {loading
                    ? "Saving order..."
                    : `Confirm Order — €${(unitPriceEur * form.quantity).toFixed(2)}`}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
