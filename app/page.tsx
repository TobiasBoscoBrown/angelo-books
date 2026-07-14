import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/brand";
import { articles } from "@/lib/articles";
import Faq from "@/components/Faq";
import Proof from "@/components/Proof";
import Reveal from "@/components/Reveal";

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
            <div className="rise" style={{ animationDelay: "0ms" }}>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
                style={{ color: "var(--gold)" }}
              >
                Outbound Sales for Marketing Agencies
              </p>
            </div>

            <div className="rise" style={{ animationDelay: "80ms" }}>
              <h1 className="font-display text-[2.6rem] leading-[1.04] md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-[-0.02em] text-balance">
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
            </div>

            <div className="rise" style={{ animationDelay: "150ms" }}>
              <p
                className="text-lg md:text-xl leading-relaxed mb-9 max-w-xl"
                style={{ color: "#a8c0d8" }}
              >
                {brand.subTagline} No tech headache, no hiring, no wasted
                afternoons on the phone. We dial, qualify, and book. You close.
              </p>
            </div>

            <div className="rise" style={{ animationDelay: "210ms" }}>
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
            </div>

            <div className="rise" style={{ animationDelay: "280ms" }}>
              <div
                className="mt-10 pt-8 border-t flex flex-wrap gap-x-6 gap-y-2 text-sm"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "#8fa8c0",
                }}
              >
                <span>Family-operated agency</span>
                <span>US + Australia</span>
                <span>Marketing agency specialists</span>
              </div>
            </div>
          </div>

          {/* Founder card */}
          <div className="rise relative hidden md:block" style={{ animationDelay: "160ms" }}>
            <div
              className="rounded-3xl p-8 border"
              style={{
                background:
                  "linear-gradient(160deg, rgba(37,77,115,0.95) 0%, rgba(26,58,92,0.72) 100%)",
                borderColor: "rgba(255,255,255,0.10)",
                boxShadow: "0 40px 90px -30px rgba(0,0,0,0.8)",
              }}
            >
              <div className="flex items-center gap-5">
                <span
                  className="flex-shrink-0 rounded-full p-[3px]"
                  style={{
                    background:
                      "linear-gradient(140deg, var(--gold) 0%, rgba(255,255,255,0.18) 100%)",
                  }}
                >
                  <Image
                    src="/angelo.png"
                    alt="Angelo Miguel, founder of Angelo Books"
                    width={240}
                    height={240}
                    priority
                    className="block rounded-full w-[132px] h-[132px] object-cover"
                    style={{ background: "white" }}
                  />
                </span>
                <div className="min-w-0">
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-2"
                    style={{ color: "var(--gold)" }}
                  >
                    The founder
                  </p>
                  <p className="font-display text-3xl font-bold text-white leading-tight">
                    {brand.owner}
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#a8c0d8" }}>
                    {brand.founderRole}, {brand.name}
                  </p>
                </div>
              </div>

              <blockquote
                className="mt-7 pt-6 border-t font-display text-xl italic leading-snug"
                style={{
                  borderColor: "rgba(255,255,255,0.14)",
                  color: "var(--gold-light)",
                }}
              >
                &ldquo;{brand.founderQuote}&rdquo;
              </blockquote>

              <dl className="mt-7 space-y-3 text-sm">
                {[
                  { k: "Based in", v: brand.location },
                  { k: "Serving", v: brand.serving.join(" + ") },
                  { k: "Operation", v: `${brand.type}, since ${brand.founded}` },
                ].map((row) => (
                  <div key={row.k} className="flex gap-4">
                    <dt
                      className="w-20 flex-shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] pt-0.5"
                      style={{ color: "#7d97b3" }}
                    >
                      {row.k}
                    </dt>
                    <dd style={{ color: "#c8d6e5" }}>{row.v}</dd>
                  </div>
                ))}
              </dl>

              <div
                className="mt-7 pt-6 border-t flex items-center gap-3"
                style={{ borderColor: "rgba(255,255,255,0.14)" }}
              >
                <a
                  href={brand.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded text-xs font-semibold text-center border transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.22)", color: "white" }}
                >
                  Threads
                </a>
                <a
                  href={brand.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded text-xs font-semibold text-center border transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.22)", color: "white" }}
                >
                  LinkedIn
                </a>
                <a
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded text-xs font-semibold text-center transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
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

      {/* ARTICLES */}
      <section
        id="articles"
        className="py-24 md:py-32"
        style={{ background: "var(--off-white)" }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "var(--gold)" }}
              >
                Articles
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em]"
                style={{ color: "var(--navy)" }}
              >
                Outbound, with the numbers attached.
              </h2>
              <p
                className="mt-5 text-lg leading-relaxed"
                style={{ color: "var(--text-mid)" }}
              >
                Written from campaigns we actually ran. Where there is a number,
                there is a screenshot behind it.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5">
            {articles.slice(0, 2).map((a, i) => (
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
                    <span>{a.readingMinutes} min read</span>
                  </div>
                  <h3
                    className="font-display text-2xl md:text-3xl font-semibold mb-3 leading-snug"
                    style={{ color: "var(--navy)" }}
                  >
                    {a.h1}
                  </h3>
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

          {articles.length > 2 && (
            <Reveal delay={160}>
              <div className="mt-10">
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ color: "var(--navy)", borderColor: "var(--navy)" }}
                >
                  All articles <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          )}
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
