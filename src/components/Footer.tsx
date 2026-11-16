import Link from "next/link";
import { ResearchistaLogo } from "./ResearchistaLogo";

export function Footer() {
  return (
    <footer className="bg-ink text-paper/90 border-t border-ink/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <ResearchistaLogo variant="full" theme="dark" />
            </Link>
            <p className="text-sm text-paper/75 max-w-sm leading-relaxed">
              Researchista turns research into things people love to play, wear
              and use — and certifies the link between a product and the
              research that inspired it.
            </p>
            <p className="font-mono text-xs text-gold">
              &ldquo;Serious research, joyful products.&rdquo;
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-paper/50">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-gold transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  href="/products/mobility-era-game"
                  className="hover:text-gold transition-colors"
                >
                  Mobility Era Game
                </Link>
              </li>
              <li>
                <Link
                  href="/play-and-learn"
                  className="hover:text-gold transition-colors"
                >
                  Play &amp; Learn
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-paper/50">
              Certification &amp; Researchers
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/certification"
                  className="hover:text-gold transition-colors"
                >
                  The Research-Powered Seal
                </Link>
              </li>
              <li>
                <Link
                  href="/certification#directory"
                  className="hover:text-gold transition-colors"
                >
                  Certified Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/certification#apply"
                  className="hover:text-gold transition-colors"
                >
                  Apply for Certification
                </Link>
              </li>
              <li>
                <Link
                  href="/for-researchers"
                  className="hover:text-gold transition-colors"
                >
                  For Researchers
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-paper/50">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Mission &amp; Story
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">
                  Blog / Journal
                </Link>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  className="hover:text-gold transition-colors font-mono text-xs"
                >
                  llms.txt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-paper/55">
          <p>
            © 2026 Researchista. Close the gap between
            what research knows and what people live.
          </p>
          <p className="font-mono">
            Certificate #001 • Maastricht University • FNR
          </p>
        </div>
      </div>
    </footer>
  );
}
