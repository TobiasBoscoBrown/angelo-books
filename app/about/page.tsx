import { brand } from "@/lib/brand";
import Link from "next/link";
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
        className="pt-36 pb-20"
        style={{ background: "var(--navy-dark)" }}
      >
        <div className="max-w-3xl mx-auto px-5">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--gold)" }}
          >
            About
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            A small team. <br />
            Real accountability.
          </h1>
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
              className="px-7 py-4 rounded font-semibold text-center border transition-colors"
              style={{ color: "var(--navy)", borderColor: "var(--navy)" }}
            >
              See all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
