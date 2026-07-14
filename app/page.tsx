import Link from "next/link";
import { brand } from "@/lib/brand";
import ResultsCarousel from "@/components/ResultsCarousel";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center pt-24 pb-16"
        style={{ background: "var(--navy-dark)" }}
      >
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--gold)" }}
            >
              Outbound Sales for Marketing Agencies
            </p>
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
            >
              Get in a meeting with your dream clients.
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "#a8c0d8" }}
            >
              {brand.subTagline} No tech headache, no hiring, no wasted
              afternoons on the phone. We dial, qualify, and book. You close.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={brand.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 font-semibold rounded text-white text-center transition-opacity hover:opacity-90"
                style={{ background: "var(--gold)" , color: "var(--navy-dark)" }}
              >
                Book a Free Strategy Call
              </a>
              <Link
                href="#results"
                className="px-7 py-4 font-semibold rounded text-center border transition-colors hover:bg-white/10"
                style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}
              >
                See Campaign Results
              </Link>
            </div>

            {/* Trust strip */}
            <div
              className="mt-10 pt-8 border-t flex flex-wrap gap-6 text-sm"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "#8fa8c0" }}
            >
              <span>Family-operated agency</span>
              <span>US + Australia</span>
              <span>Marketing agency specialists</span>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--navy-light)",
                padding: "40px",
                minHeight: "420px",
              }}
            >
              <div
                className="rounded-xl p-8"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "var(--gold)" }}
                >
                  Campaign snapshot
                </p>
                <div className="space-y-5">
                  {[
                    { n: "85", label: "Outbound dials" },
                    { n: "7", label: "Appointments booked" },
                    { n: "2", label: "Meeting preps delivered" },
                  ].map((r) => (
                    <div key={r.n} className="flex items-center gap-4">
                      <span
                        className="font-display text-4xl font-bold"
                        style={{ color: "var(--gold)" }}
                      >
                        {r.n}
                      </span>
                      <span className="text-sm" style={{ color: "#a8c0d8" }}>
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-6 pt-5 border-t text-sm italic"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: "#a8c0d8" }}
                >
                  &ldquo;Great work!&rdquo; &mdash; client feedback
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-3 rounded font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
                >
                  Get results like this
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: "var(--off-white)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--gold)" }}
            >
              What we do
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{ color: "var(--navy)" }}
            >
              Outbound, handled.
            </h2>
            <p
              className="mt-4 max-w-xl text-base leading-relaxed"
              style={{ color: "var(--text-mid)" }}
            >
              Every piece of the pipeline, from the first dial to the booked
              meeting, run by a team that knows how marketing agencies sell.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brand.services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block p-8 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{
                  background: "white",
                  borderColor: "var(--line)",
                }}
              >
                <h3
                  className="font-display text-xl font-semibold mb-3 group-hover:text-[color:var(--navy)]"
                  style={{ color: "var(--navy)" }}
                >
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {s.description}
                </p>
                <p
                  className="mt-4 text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "var(--gold)" }}
                >
                  Learn more &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section
        id="results"
        className="py-24"
        style={{ background: "var(--navy-dark)" }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--gold)" }}
            >
              Real campaign data
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Numbers from actual campaigns.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: "#a8c0d8" }}>
              Not projections. Not averages from someone else's case study.
              This is what Angelo Books delivered.
            </p>
          </div>
          <ResultsCarousel />
          <div className="mt-12 text-center">
            <a
              href={brand.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded font-semibold transition-opacity hover:opacity-90"
              style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
            >
              Book a call to talk through your pipeline
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--gold)" }}
            >
              Who is behind this
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-5"
              style={{ color: "var(--navy)" }}
            >
              Angelo Miguel, <br />
              running a family operation.
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-mid)" }}>
              Angelo Books is a family-operated outbound agency built for one
              purpose: booking qualified meetings for marketing agencies that
              sell to local service businesses in the US and Australia.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
              When you work with Angelo Books, you deal with Angelo directly.
              Not an account manager. Not a junior rep. The person who picked
              up your call is the same person running your campaign.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 py-3 rounded border font-semibold text-sm transition-colors hover:bg-navy hover:text-white"
              style={{ color: "var(--navy)", borderColor: "var(--navy)" }}
            >
              Full story &rarr;
            </Link>
          </div>
          <div
            className="rounded-2xl p-10"
            style={{ background: "var(--off-white)" }}
          >
            <p
              className="font-display text-xl font-semibold mb-6"
              style={{ color: "var(--navy)" }}
            >
              Who this is for
            </p>
            <ul className="space-y-4">
              {[
                "Marketing agencies selling web design, SEO, paid ads, or AI services",
                "Agencies serving local service businesses (trades, home services, healthcare)",
                "Teams great at delivery but struggling to fill the front of the pipeline",
                "Owners who have tried hiring in-house SDRs and found it too expensive or inconsistent",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm" style={{ color: "var(--text-mid)" }}>
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "var(--navy)" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24" style={{ background: "var(--off-white)" }}>
        <div className="max-w-3xl mx-auto px-5">
          <div className="mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--gold)" }}
            >
              Common questions
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{ color: "var(--navy)" }}
            >
              What you want to know.
            </h2>
          </div>
          <Faq />
        </div>
      </section>

      {/* CTA BAND */}
      <section
        className="py-20 text-center"
        style={{ background: "var(--navy)" }}
      >
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to fill your calendar?
          </h2>
          <p className="text-base mb-8" style={{ color: "#a8c0d8" }}>
            Book a free strategy call. We will look at your ICP, talk through
            your current pipeline, and tell you exactly how we would run your
            outbound.
          </p>
          <a
            href={brand.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded font-semibold text-lg transition-opacity hover:opacity-90"
            style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
          >
            Book a Free Call with Angelo
          </a>
        </div>
      </section>
    </>
  );
}
