import { brand } from "@/lib/brand";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Angelo Miguel | Angelo Books",
  description:
    "Angelo Books is a family-operated outbound sales agency run by Angelo Miguel. We book qualified meetings for marketing agencies in the US and Australia.",
};

export default function About() {
  return (
    <>
      {/* Header band */}
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
        <div className="relative max-w-3xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <span
                className="flex-shrink-0 rounded-full p-[3px]"
                style={{
                  background:
                    "linear-gradient(140deg, var(--gold) 0%, rgba(255,255,255,0.15) 100%)",
                }}
              >
                <Image
                  src="/angelo.png"
                  alt="Angelo Miguel, founder of Angelo Books"
                  width={240}
                  height={240}
                  priority
                  className="block rounded-full w-[104px] h-[104px] object-cover"
                  style={{ background: "white" }}
                />
              </span>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] mb-3"
                  style={{ color: "var(--gold)" }}
                >
                  About
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-[-0.02em]">
                  A small team. <br />
                  Real accountability.
                </h1>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto px-5">
          <div className="prose prose-lg max-w-none" style={{ color: "var(--text-mid)" }}>
            <p className="text-xl font-semibold leading-relaxed" style={{ color: "var(--navy)" }}>
              Angelo Books was built on a simple observation: most marketing
              agencies are excellent at what they do, and terrible at finding
              people to do it for.
            </p>
            <p className="mt-6 leading-relaxed">
              The best web designers, SEO specialists, and paid media buyers
              spend their afternoons on cold calls instead of client work. They
              hire junior reps who do not understand the offer. They buy lists
              and blast them with generic emails. The pipeline stays thin.
            </p>
            <p className="mt-5 leading-relaxed">
              Angelo Miguel started Angelo Books to fix that. As a
              family-operated outbound agency based in Sta. Rosa, Laguna,
              Angelo works directly with marketing agencies selling to local
              service businesses in the US and Australia, handling everything
              from building the prospect list to booking the meeting and writing
              the prep brief.
            </p>
            <p className="mt-5 leading-relaxed">
              There is no account manager in the way. No hand-off to a junior
              team after you sign. Angelo runs the campaigns himself, which
              means he is personally invested in whether they perform.
            </p>
            <p className="mt-5 leading-relaxed">
              If you work with Angelo Books, you will know exactly what is
              happening on your campaign every week. You will walk into every
              sales conversation prepared. And you will spend your time closing,
              not dialing.
            </p>
          </div>

          <div
            className="mt-14 rounded-2xl p-8 border"
            style={{ background: "var(--off-white)", borderColor: "var(--line)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--gold)" }}
            >
              The details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Agency type", value: brand.type },
                { label: "Based in", value: brand.location },
                { label: "Markets served", value: brand.serving.join(", ") },
                { label: "Clients", value: brand.icpDescription },
              ].map((d) => (
                <div key={d.label}>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-1"
                    style={{ color: "var(--text-soft)" }}
                  >
                    {d.label}
                  </p>
                  <p className="text-base font-medium" style={{ color: "var(--navy)" }}>
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href={brand.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded font-semibold text-center transition-opacity hover:opacity-90"
              style={{ background: "var(--navy)", color: "white" }}
            >
              Book a Call with Angelo
            </a>
            <Link
              href="/#services"
              className="px-7 py-4 rounded font-semibold text-center border transition-all duration-300 hover:-translate-y-0.5"
              style={{ color: "var(--navy)", borderColor: "var(--navy)" }}
            >
              See all services
            </Link>
          </div>

          <div
            className="mt-12 pt-8 border-t flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
            style={{ borderColor: "var(--line)", color: "var(--text-soft)" }}
          >
            <span>Find Angelo elsewhere:</span>
            <a
              href={brand.threads}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 transition-colors"
              style={{ color: "var(--navy)" }}
            >
              Threads
            </a>
            <a
              href={brand.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 transition-colors"
              style={{ color: "var(--navy)" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
