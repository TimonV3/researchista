import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { BLOG_POSTS } from "@/data/researchista";

export const metadata: Metadata = {
  title: "Journal — Science Communication & Research-Powered Stories",
  description:
    "Essays and field notes on turning academic research into games, fiscal education in Europe, and the Research-Powered Seal.",
};

export default function BlogPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <Reveal className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-coral font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            RESEARCHISTA JOURNAL
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink">
            Notes on serious research &amp; joyful products.
          </h1>
          <p className="text-lg text-ink-muted">
            Stories from researchers, educators, and makers bridging the gap
            between academic insight and everyday life.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="h-full rounded-3xl bg-card border border-border-warm p-7 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-subtle text-ink font-semibold">
                      {post.category}
                    </span>
                    <span className="text-ink-muted">{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-ink leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border-warm flex items-center justify-between text-xs">
                  <span className="font-mono text-ink-muted">{post.date}</span>
                  <Link
                    href={
                      post.category === "Certification"
                        ? "/certification"
                        : post.category === "Play & Learn"
                          ? "/play-and-learn"
                          : "/about"
                    }
                    className="inline-flex items-center gap-1 font-semibold text-cobalt hover:underline"
                  >
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
