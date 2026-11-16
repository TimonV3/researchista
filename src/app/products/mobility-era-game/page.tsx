import type { Metadata } from "next";
import Link from "next/link";
import { MobilityProductInteractive } from "@/components/MobilityProductInteractive";

export const metadata: Metadata = {
  title: "Mobility Era Game — Research-Powered Product #001",
  description:
    "Mobility Era Game — the game of your life across 41 European countries. Inspired by Dr. Irina Burlacu's PhD research at Maastricht University, funded by FNR.",
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Mobility Era Game",
  description:
    "The game of your life across 41 European countries. Inspired by the doctoral research of Dr. Irina Burlacu at Maastricht University, funded by FNR.",
  brand: {
    "@type": "Brand",
    name: "Researchista",
  },
  hasCertification: {
    "@type": "Certification",
    name: "Research-Powered Seal #001",
    issuedBy: {
      "@type": "Organization",
      name: "Researchista",
    },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "39.00",
    availability: "https://schema.org/InStock",
  },
};

export default function MobilityEraGamePage() {
  return (
    <div className="py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs font-mono text-ink-muted">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/products" className="hover:text-ink">
            Products
          </Link>{" "}
          / <span className="text-ink font-semibold">Mobility Era Game</span>
        </nav>

        <MobilityProductInteractive />
      </div>
    </div>
  );
}
