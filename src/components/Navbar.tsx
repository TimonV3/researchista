"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ResearchistaLogo } from "./ResearchistaLogo";

const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/certification", label: "Certification" },
  { href: "/for-researchers", label: "For Researchers" },
  { href: "/play-and-learn", label: "Play & Learn" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-border-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center group focus:outline-none"
        >
          <ResearchistaLogo variant="compact" theme="light" />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1 bg-subtle/70 p-1 rounded-full border border-border-warm"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive ? "text-paper" : "text-ink-muted hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-ink -z-10"
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/certification#apply"
            className="px-4 py-2 rounded-full bg-coral text-white text-sm font-semibold hover:bg-coral/90 transition-all shadow-sm hover:shadow"
          >
            Get Certified
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-xl bg-subtle text-ink hover:bg-border-warm transition-colors cursor-pointer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t border-border-warm bg-paper overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-ink text-paper"
                        : "text-ink-muted hover:bg-subtle hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/certification#apply"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl bg-coral text-white text-sm font-semibold text-center"
              >
                Apply for Certification
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
