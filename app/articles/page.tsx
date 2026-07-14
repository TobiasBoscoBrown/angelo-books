import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { brand } from "@/lib/brand";
import { SITE_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Articles | Angelo Books",
  description:
    "Notes on outbound sales for marketing agencies, written from real campaign data. No industry averages, no projections.",
  alternates: { canonical: `${SITE_URL}/articles` },
};

const fmt = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export default function ArticlesIndex() {
  return (
    <>
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: "var(--navy-dark)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 -right-32 w-[760px] h-[760px] rounded-full opacity-[0.10]"
          style={{
            background: "radial-gradient(circle, var(--gold) 0%, transparent 62%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-5">
          <div className="rise">
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
              style={{ color: "var(--gold)" }}
            >
              Articles
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.05] max-w-3xl tracking-[-0.02em]">
              Outbound, with the numbers attached.
            </h1>
            <p
              className="mt-6 text-lg leading-relaxed max-w-2xl"
              style={{ color: "#a8c0d8" }}
            >
              Everything here is written from campaigns {brand.owner} actually
              ran. Where there is a number, there is a screenshot behind it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: "var(--off-white)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-1 gap-5">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80} distance={26}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group block p-8 md:p-10 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "white", borderColor: "var(--line)" }}
                >
                  <div
                    className="flex flex-wrap items-center gap-3 text-xs mb-4"
                    style={{ color: "var(--text-soft)" }}
                  >
                    <time dateTime={a.published}>{fmt(a.published)}</time>
                    <span aria-hidden>·</span>
                    <span>{a.readingMinutes} min read</span>
                  </div>
                  <h2
                    className="font-display text-2xl md:text-3xl font-semibold mb-3 leading-snug"
                    style={{ color: "var(--navy)" }}
                  >
                    {a.h1}
                  </h2>
                  <p
                    className="text-base leading-relaxed mb-6 max-w-2xl"
                    style={{ color: "var(--text-mid)" }}
                  >
                    {a.description}
                  </p>
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.14em] inline-flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "var(--gold)" }}
                  >
                    Read it <span aria-hidden>→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
