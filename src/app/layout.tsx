import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://researchista.eu"),
  title: {
    default: "Researchista — Research-Powered Games & Science Communication Products",
    template: "%s | Researchista",
  },
  description:
    "Researchista turns research into things people love to play, wear and use — and certifies the link between a product and the research that inspired it.",
  keywords: [
    "research-powered games",
    "science communication products",
    "certified research products",
    "educational games EU",
    "Mobility Era Game",
    "Research-Powered Seal",
  ],
  openGraph: {
    title: "Researchista — Research you can play with.",
    description:
      "We transform research projects into games, tools and experiences — and certify every product that is genuinely powered by research.",
    type: "website",
    locale: "en_US",
    siteName: "Researchista",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://researchista.eu/#organization",
      name: "Researchista",
      url: "https://researchista.eu",
      description:
        "Researchista turns research into things people love to play, wear and use — and certifies the link between a product and the research that inspired it.",
      founder: {
        "@type": "Person",
        name: "Dr. Irina Burlacu",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://researchista.eu/#website",
      url: "https://researchista.eu",
      name: "Researchista",
      publisher: {
        "@id": "https://researchista.eu/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink selection:bg-coral/20 selection:text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
