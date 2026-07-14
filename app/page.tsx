import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/brand";
import ResultsCarousel from "@/components/ResultsCarousel";
import Faq from "@/components/Faq";
import Proof from "@/components/Proof";
import Reveal from "@/components/Reveal";

const snapshot = brand.results.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
        style={{ background: "var(--navy-dark)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-56 -right-40 w-[900px] h-[900px] rounded-full opacity-[0.10]"
          style={{
            background: "radial-gradient(circle, var(--gold) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-72 -left-56 w-[820px] h-[820px] rounded-full opacity-[0.10]"
          style={{
            background:
              "radial-gradient(circle, var(--navy-light) 0%, transparent 62%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div>
            <Reveal>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
                style={{ color: "var(--gold)" }}
              >
                Outbound Sales for Marketing Agencies
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-[2.75rem] leading-[1.02] md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-[-0.02em]">
                Get in a meeting with your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic" style={{ color: "var(--gold-light)" }}>
                    dream clients
                  </span>
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 bottom-1 h-3 md:h-4 -z-0 rounded"
                    style={{ background: "var(--gold)", opacity: 0.18 }}
                  />
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p
                className="text-lg md:text-xl leading-relaxed mb-9 max-w-xl"
                style={{ color: "#a8c0d8" }}
              >
                {brand.subTagline} No tech headache, no hiring, no wasted
                afternoons on the phone. We dial, qualify, and book. You close.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 font-semibold rounded text-center transition-transform duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--gold)",
                    color: "var(--navy-dark)",
                    boxShadow: "0 18px 40px -16px rgba(201,168,76,0.55)",
                  }}
                >
                  Book a Free Strategy Call
                </a>
                <Link
                  href="#proof"
                  className="px-7 py-4 font-semibold rounded text-center border text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.3)" }}
                >
                  See the receipts
                </Link>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div
                className="mt-10 pt-8 border-t flex flex-wrap gap-x-6 gap-y-2 text-sm"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "#8fa8c0",
                }}
              >
                <span>Family-operated agency</span>
                <span aria-hidden style={{ color: "#3c5f85" }}>·</span>
                <span>US + Australia</span>
                <span aria-hidden style={{ color: "#3c5f85" }}>·</span>
                <span>Marketing agency specialists</span>
              </div>
            </Reveal>
          </div>

          {/* Snapshot card */}
          <Reveal delay={160} distance={40} className="relative hidden md:block">
            <div
              className="rounded-3xl p-8 border"
              style={{
                background:
                  "linear-gradient(160deg, rgba(37,77,115,0.95) 0%, rgba(26,58,92,0.75) 100%)",
                borderColor: "rgba(255,255,255,0.10)",
                boxShadow: "0 40px 90px -30px rgba(0,0,0,0.8)",
              }}
            >
              <div
                className="rounded-2xl p-7"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: "var(--gold)" }}
                  >
                    One week of dialing
                  </p>
                  <p className="text-[11px]" style={{ color: "#7d97b3" }}>
                    Mar 31 – Apr 4
                  </p>
                </div>

                <div className="space-y-5">
                  {snapshot.map((r) => (
                    <div key={r.label} className="flex items-baseline gap-4">
                      <span
                        className="font-display text-5xl font-bold tabular-nums leading-none w-[4.5rem] flex-shrink-0"
                        style={{ color: "var(--gold)" }}
                      >
                        {r.metric}
                      </span>
                      <span className="text-sm" style={{ color: "#a8c0d8" }}>
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-7 pt-5 border-t text-sm italic"
                  style={{
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "#a8c0d8",
                  }}
                >
                  &ldquo;Excellent work!&rdquo; &mdash; client feedback
                </div>
              </div>

              <a
                href={brand.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full py-3.5 rounded font-semibold text-sm text-center transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
              >
                Get results like this
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 md:py-32"
        style={{ background: "var(--off-white)" }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mb-16 max-w-2xl">
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "var(--gold)" }}
              >
                What we do
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em]"
                style={{ color: "var(--navy)" }}
              >
                Outbound, handled.
              </h2>
              <p
                className="mt-5 text-lg leading-relaxed"
                style={{ color: "var(--text-mid)" }}
              >
                Every piece of the pipeline, from the first dial to the booked
                meeting, run by a team that knows how marketing agencies sell.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brand.services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80} distance={30}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block h-full p-8 md:p-9 rounded-2xl border overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
                  style={{
                    background: "white",
                    borderColor: "var(--line)",
                    boxShadow: "0 1px 2px rgba(15,37,64,0.04)",
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute top-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{ background: "var(--gold)" }}
                  />
                  <p
                    className="font-display text-5xl font-bold mb-5 leading-none tabular-nums"
                    style={{ color: "var(--warm-gray)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="font-display text-2xl font-semibold mb-2"
                    style={{ color: "var(--navy)" }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="font-display text-base italic mb-4"
                    style={{ color: "var(--gold)" }}
                  >
                    {s.tagline}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--text-mid)" }}
                  >
                    {s.description}
                  </p>
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.14em] inline-flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "var(--navy)" }}
                  >
                    Learn more <span aria-hidden>→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <Proof />

      {/* RESULTS */}
      <section
        id="results"
        className="py-24 md:py-32"
        style={{ background: "var(--navy)" }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "var(--gold)" }}
              >
                Real campaign data
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-[-0.02em]">
                Numbers from actual campaigns.
              </h2>
              <p
                className="mt-5 text-lg leading-relaxed"
                style={{ color: "#a8c0d8" }}
              >
                Not projections. Not averages from someone else&apos;s case
                study. This is what Angelo Books delivered.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ResultsCarousel />
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-14 text-center">
              <a
                href={brand.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
              >
                Book a call to talk through your pipeline
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-24 md:py-32" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <div className="flex items-center gap-5 mb-7">
              <span
                className="relative flex-shrink-0 rounded-full p-[3px]"
                style={{
                  background:
                    "linear-gradient(140deg, var(--gold) 0%, var(--warm-gray) 100%)",
                }}
              >
                <Image
                  src="/angelo.png"
                  alt="Angelo Miguel, founder of Angelo Books"
                  width={240}
                  height={240}
                  className="block rounded-full w-[92px] h-[92px] object-cover"
                  style={{ background: "white" }}
                />
              </span>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] mb-1.5"
                  style={{ color: "var(--gold)" }}
                >
                  Who is behind this
                </p>
                <p className="font-semibold" style={{ color: "var(--navy)" }}>
                  {brand.owner}
                </p>
                <p className="text-sm" style={{ color: "var(--text-soft)" }}>
                  Founder, Angelo Books
                </p>
              </div>
            </div>

            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-6 leading-[1.08] tracking-[-0.02em]"
              style={{ color: "var(--navy)" }}
            >
              A family operation, <br />
              not an account manager.
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "var(--text-mid)" }}
            >
              Angelo Books is a family-operated outbound agency built for one
              purpose: booking qualified meetings for marketing agencies that
              sell to local service businesses in the US and Australia.
            </p>
            <p
              className="text-base leading-relaxed mb-9"
              style={{ color: "var(--text-mid)" }}
            >
              When you work with Angelo Books, you deal with Angelo directly.
              Not an account manager. Not a junior rep. The person who picked up
              your call is the same person running your campaign.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{ color: "var(--navy)", borderColor: "var(--navy)" }}
            >
              Full story <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <Reveal delay={120} distance={34}>
            <div
              className="rounded-3xl p-9 md:p-10 border"
              style={{
                background: "var(--off-white)",
                borderColor: "var(--line)",
                boxShadow: "0 30px 70px -40px rgba(15,37,64,0.4)",
              }}
            >
              <p
                className="font-display text-2xl font-semibold mb-7"
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
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-mid)" }}
                  >
                    <span
                      aria-hidden
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
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-24 md:py-32"
        style={{ background: "var(--off-white)" }}
      >
        <div className="max-w-3xl mx-auto px-5">
          <Reveal>
            <div className="mb-12">
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "var(--gold)" }}
              >
                Common questions
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em]"
                style={{ color: "var(--navy)" }}
              >
                What you want to know.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section
        className="relative py-24 md:py-28 text-center overflow-hidden"
        style={{ background: "var(--navy)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, var(--gold) 0%, transparent 60%)",
          }}
        />
        <Reveal className="relative max-w-2xl mx-auto px-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 tracking-[-0.02em]">
            Ready to fill your calendar?
          </h2>
          <p className="text-lg mb-9" style={{ color: "#a8c0d8" }}>
            Book a free strategy call. We will look at your ICP, talk through
            your current pipeline, and tell you exactly how we would run your
            outbound.
          </p>
          <a
            href={brand.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-9 py-5 rounded font-semibold text-lg transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--gold)",
              color: "var(--navy-dark)",
              boxShadow: "0 24px 50px -18px rgba(201,168,76,0.5)",
            }}
          >
            Book a Free Call with Angelo
          </a>
        </Reveal>
      </section>
    </>
  );
}
