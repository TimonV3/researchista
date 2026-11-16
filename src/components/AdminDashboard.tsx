"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  Lock,
  LogOut,
  RefreshCw,
  Search,
  ShoppingBag,
} from "lucide-react";
import { useCallback, useState } from "react";

interface CertificationRow {
  id: string;
  applicant_name: string;
  applicant_email: string;
  applicant_role: string;
  product_name: string;
  research_link: string;
  story: string;
  status: string;
  created_at: string;
}

interface OrderRow {
  id: string;
  product_name: string;
  edition: string;
  quantity: number;
  unit_price_eur: number;
  customer_name: string;
  customer_email: string;
  shipping_country: string;
  notes: string | null;
  status: string;
  created_at: string;
}

interface WorkshopRow {
  id: string;
  contact_name: string;
  contact_email: string;
  organization: string | null;
  audience_type: string;
  participants_count: string | null;
  message: string;
  status: string;
  created_at: string;
}

type TabKey = "certifications" | "orders" | "workshops";

const STATUS_BADGE: Record<string, string> = {
  pending: "bg-gold/15 text-ink border-gold/40",
  new: "bg-cobalt/10 text-cobalt border-cobalt/30",
  approved: "bg-emerald/15 text-emerald border-emerald/30",
  completed: "bg-emerald/15 text-emerald border-emerald/30",
  scheduled: "bg-emerald/15 text-emerald border-emerald/30",
  archived: "bg-subtle text-ink-muted border-border-warm",
};

export function AdminDashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authedCreds, setAuthedCreds] = useState<{
    email: string;
    password: string;
  } | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("certifications");
  const [search, setSearch] = useState("");

  const [certifications, setCertifications] = useState<CertificationRow[]>([]);
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [workshops, setWorkshops] = useState<WorkshopRow[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchData = useCallback(async (adminEmail: string, pass: string) => {
    setLoading(true);
    setFetchError(null);
    setAuthError(null);

    try {
      const res = await fetch("/api/admin/submissions", {
        headers: {
          "x-admin-email": adminEmail,
          "x-admin-password": pass,
        },
      });
      const data = await res.json();

      if (res.status === 401) {
        setAuthError("Incorrect admin email or password.");
        setAuthedCreds(null);
        return;
      }

      if (!res.ok) {
        setAuthedCreds({ email: adminEmail, password: pass });
        setFetchError(
          `${data.error || "Failed to load data."}${
            data.hint ? ` — ${data.hint}` : ""
          }`
        );
        return;
      }

      setAuthedCreds({ email: adminEmail, password: pass });
      setCertifications(data.certifications ?? []);
      setOrders(data.orders ?? []);
      setWorkshops(data.workshops ?? []);
    } catch {
      setFetchError("Network error while fetching submissions.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(email.trim(), password);
  };

  const handleStatusUpdate = async (
    table: string,
    id: string,
    status: string
  ) => {
    if (!authedCreds) return;
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-email": authedCreds.email,
        "x-admin-password": authedCreds.password,
      },
      body: JSON.stringify({ table, id, status }),
    });
    fetchData(authedCreds.email, authedCreds.password);
  };

  if (!authedCreds) {
    return (
      <div className="max-w-md mx-auto py-16">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleLogin}
          className="rounded-3xl bg-card border border-border-warm p-8 shadow-lg space-y-5"
        >
          <div className="w-12 h-12 rounded-2xl bg-ink text-gold flex items-center justify-center">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-coral font-bold">
              RESEARCHISTA ADMIN
            </span>
            <h1 className="font-serif text-2xl font-bold text-ink mt-1">
              Sign in to view submissions
            </h1>
            <p className="text-xs text-ink-muted mt-1">
              Enter your administrator email and password.
            </p>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-ink-muted mb-1.5">
              Admin Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@researchista.eu"
              className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm focus:outline-none focus:border-cobalt"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-ink-muted mb-1.5">
              Admin Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full px-4 py-2.5 rounded-xl bg-paper border border-border-warm text-sm focus:outline-none focus:border-cobalt"
            />
          </div>

          {authError && (
            <p className="text-xs font-mono text-coral bg-coral/10 border border-coral/25 rounded-xl px-3.5 py-2">
              {authError}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-coral transition-colors cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign in to Dashboard"}
          </button>
        </motion.form>
      </div>
    );
  }

  const totalRevenue = orders.reduce(
    (sum, o) => sum + Number(o.unit_price_eur || 0) * Number(o.quantity || 1),
    0
  );

  const q = search.trim().toLowerCase();
  const filteredCerts = certifications.filter(
    (c) =>
      !q ||
      c.applicant_name.toLowerCase().includes(q) ||
      c.product_name.toLowerCase().includes(q) ||
      c.applicant_email.toLowerCase().includes(q)
  );
  const filteredOrders = orders.filter(
    (o) =>
      !q ||
      o.customer_name.toLowerCase().includes(q) ||
      o.customer_email.toLowerCase().includes(q) ||
      o.shipping_country.toLowerCase().includes(q)
  );
  const filteredWorkshops = workshops.filter(
    (w) =>
      !q ||
      w.contact_name.toLowerCase().includes(q) ||
      w.contact_email.toLowerCase().includes(q) ||
      (w.organization || "").toLowerCase().includes(q)
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
            ADMIN DASHBOARD
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1">
            Client Submissions &amp; Orders
          </h1>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => fetchData(authedCreds.email, authedCreds.password)}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border-warm text-xs font-semibold text-ink hover:border-ink cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
          <button
            type="button"
            onClick={() => setAuthedCreds(null)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-subtle text-xs font-semibold text-ink hover:bg-border-warm cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Lock
          </button>
        </div>
      </div>

      {fetchError && (
        <div className="rounded-2xl bg-coral/10 border border-coral/30 p-4 text-xs font-mono text-ink">
          {fetchError}
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-3xl bg-card border border-border-warm p-6 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase text-ink-muted">
              Certification Apps
            </p>
            <p className="font-serif text-3xl font-bold text-ink mt-1">
              {certifications.length}
            </p>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-gold/15 text-ink flex items-center justify-center">
            <Award className="w-5 h-5 text-gold" />
          </div>
        </div>
        <div className="rounded-3xl bg-card border border-border-warm p-6 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase text-ink-muted">
              Product Orders
            </p>
            <p className="font-serif text-3xl font-bold text-ink mt-1">
              {orders.length}{" "}
              <span className="text-sm font-mono font-normal text-emerald">
                (€{totalRevenue.toFixed(0)})
              </span>
            </p>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-coral/10 text-coral flex items-center justify-center">
            <ShoppingBag className="w-5 h-5" />
          </div>
        </div>
        <div className="rounded-3xl bg-card border border-border-warm p-6 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase text-ink-muted">
              Workshop Inquiries
            </p>
            <p className="font-serif text-3xl font-bold text-ink mt-1">
              {workshops.length}
            </p>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="inline-flex p-1 rounded-full bg-subtle border border-border-warm w-fit">
          {(
            [
              { key: "certifications", label: `Certifications (${certifications.length})` },
              { key: "orders", label: `Orders (${orders.length})` },
              { key: "workshops", label: `Workshops (${workshops.length})` },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === tab.key
                  ? "bg-ink text-paper"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter by name, email, product..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-card border border-border-warm text-sm focus:outline-none focus:border-cobalt"
          />
        </div>
      </div>

      {/* Table / Cards List */}
      {activeTab === "certifications" && (
        <div className="space-y-4">
          {filteredCerts.length === 0 ? (
            <div className="rounded-3xl bg-card border border-border-warm p-10 text-center text-sm text-ink-muted">
              No certification applications found yet.
            </div>
          ) : (
            filteredCerts.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-card border border-border-warm p-6 space-y-3 shadow-2xs"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-serif text-xl font-bold text-ink">
                        {item.product_name}
                      </h3>
                      <span
                        className={`px-2.5 py-0.5 rounded-full border font-mono text-[11px] font-semibold uppercase ${
                          STATUS_BADGE[item.status] || STATUS_BADGE.pending
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-ink-muted mt-1">
                      <strong>{item.applicant_name}</strong> ({item.applicant_role}) •{" "}
                      {item.applicant_email}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleStatusUpdate(
                          "certification_applications",
                          item.id,
                          "approved"
                        )
                      }
                      className="px-3 py-1.5 rounded-full bg-emerald/10 text-emerald text-xs font-semibold hover:bg-emerald hover:text-white transition-colors cursor-pointer"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleStatusUpdate(
                          "certification_applications",
                          item.id,
                          "archived"
                        )
                      }
                      className="px-3 py-1.5 rounded-full bg-subtle text-ink-muted text-xs font-semibold hover:bg-border-warm cursor-pointer"
                    >
                      Archive
                    </button>
                  </div>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {item.story}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border-warm text-xs">
                  {/^https?:\/\//i.test(item.research_link) ? (
                    <a
                      href={item.research_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-cobalt hover:underline"
                    >
                      {item.research_link}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="font-mono text-ink-muted">
                      {item.research_link}
                    </span>
                  )}
                  <span className="font-mono text-ink-muted">
                    {new Date(item.created_at).toLocaleString()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === "orders" && (
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="rounded-3xl bg-card border border-border-warm p-10 text-center text-sm text-ink-muted">
              No product orders found yet.
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="rounded-3xl bg-card border border-border-warm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="font-serif text-xl font-bold text-ink">
                      {order.quantity}× {order.product_name}
                    </h3>
                    <span className="font-mono text-xs font-bold text-emerald">
                      €{(Number(order.unit_price_eur) * order.quantity).toFixed(2)}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full border font-mono text-[11px] font-semibold uppercase ${
                        STATUS_BADGE[order.status] || STATUS_BADGE.new
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-xs text-ink-muted">
                    <strong>{order.customer_name}</strong> ({order.customer_email}) • Ship to:{" "}
                    <strong>{order.shipping_country}</strong>
                  </p>
                  {order.notes && (
                    <p className="text-xs text-ink-muted italic">
                      Note: {order.notes}
                    </p>
                  )}
                  <p className="font-mono text-[11px] text-ink-muted">
                    {new Date(order.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      handleStatusUpdate("product_orders", order.id, "completed")
                    }
                    className="px-3.5 py-1.5 rounded-full bg-emerald/10 text-emerald text-xs font-semibold hover:bg-emerald hover:text-white transition-colors cursor-pointer"
                  >
                    Mark Completed
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === "workshops" && (
        <div className="space-y-4">
          {filteredWorkshops.length === 0 ? (
            <div className="rounded-3xl bg-card border border-border-warm p-10 text-center text-sm text-ink-muted">
              No workshop inquiries found yet.
            </div>
          ) : (
            filteredWorkshops.map((w) => (
              <div
                key={w.id}
                className="rounded-3xl bg-card border border-border-warm p-6 space-y-3 shadow-2xs"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-serif text-xl font-bold text-ink">
                        {w.contact_name}
                        {w.organization ? ` — ${w.organization}` : ""}
                      </h3>
                      <span
                        className={`px-2.5 py-0.5 rounded-full border font-mono text-[11px] font-semibold uppercase ${
                          STATUS_BADGE[w.status] || STATUS_BADGE.new
                        }`}
                      >
                        {w.status}
                      </span>
                    </div>
                    <p className="text-xs text-ink-muted mt-1">
                      {w.contact_email} • {w.audience_type}
                      {w.participants_count ? ` • ${w.participants_count} participants` : ""}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleStatusUpdate("workshop_inquiries", w.id, "scheduled")
                    }
                    className="px-3.5 py-1.5 rounded-full bg-cobalt/10 text-cobalt text-xs font-semibold hover:bg-cobalt hover:text-white transition-colors cursor-pointer"
                  >
                    Mark Scheduled
                  </button>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {w.message}
                </p>
                <p className="font-mono text-[11px] text-ink-muted">
                  {new Date(w.created_at).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
