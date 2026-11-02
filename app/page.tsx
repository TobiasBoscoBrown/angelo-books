import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/brand";
import { articles } from "@/lib/articles";
import Faq from "@/components/Faq";
import Proof from "@/components/Proof";
import ClientWall from "@/components/ClientWall";
import Reveal from "@/components/Reveal";

const { hero, qualified, engagements, fit, delivery } = brand;

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
                {hero.eyebrow}
              </p>
            </div>

            <div className="rise" style={{ animationDelay: "80ms" }}>
              <h1 className="font-display text-[2.6rem] leading-[1.04] md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-[-0.02em] text-balance">
                The right conversations{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic" style={{ color: "var(--gold-light)" }}>
                    can change your business.
                  </span>
                </span>
              </h1>
            </div>

            <div className="rise" style={{ animationDelay: "150ms" }}>
              <p
                className="text-lg md:text-xl leading-relaxed mb-6 max-w-xl"
                style={{ color: "#a8c0d8" }}
              >
                {hero.lead}
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-9 max-w-xl text-white">
                {hero.tagline}{" "}
                <span style={{ color: "var(--gold-light)" }}>{hero.scope}</span>
              </p>
            </div>

            <div className="rise" style={{ animationDelay: "210ms" }}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
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
                  Book a Call
                </a>
                <Link
                  href="#how-it-works"
                  className="text-center text-sm font-medium underline underline-offset-4 transition-colors hover:text-white"
                  style={{ color: "#c8d8e8" }}
                >
                  How we work
                </Link>
              </div>
            </div>
          </div>

          {/* Proof first, founder second */}
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
              <div
                className="rounded-2xl p-7"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-6"
                  style={{ color: "var(--gold)" }}
                >
                  What we focus on
                </p>

                <ul className="space-y-5">
                  {hero.focus.map((item, i) => (
                    <li key={item} className="flex items-baseline gap-5">
                      <span
                        className="font-display text-3xl font-bold tabular-nums leading-none w-10 flex-shrink-0"
                        style={{ color: "var(--gold)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl text-white">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className="mt-7 pt-5 border-t text-sm italic"
                  style={{
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "#a8c0d8",
                  }}
                >
                  {hero.focusNote}
                </p>
              </div>

              <Link
                href="#results"
                className="mt-6 block w-full py-3.5 rounded font-semibold text-sm text-center transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
              >
                See results
              </Link>

              {/* compact founder strip */}
              <div
                className="mt-6 pt-6 border-t flex items-center justify-between gap-4"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">
                    {brand.owner}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#7d97b3" }}>
                    {brand.founderRole}, leads every campaign
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={brand.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded text-[11px] font-semibold border text-white transition-all duration-300 hover:bg-white/10"
                    style={{ borderColor: "rgba(255,255,255,0.22)" }}
                  >
                    Threads
                  </a>
                  {brand.linkedin && (
                    <a
                      href={brand.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded text-[11px] font-semibold border text-white transition-all duration-300 hover:bg-white/10"
                      style={{ borderColor: "rgba(255,255,255,0.22)" }}
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientWall />

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 md:py-32" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "var(--gold)" }}
              >
                How it works
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em]"
                style={{ color: "var(--navy)" }}
              >
                How we create opportunities.
              </h2>
            </div>
          </Reveal>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {brand.howItWorks.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90} distance={28}>
                <div
                  className="h-full rounded-2xl p-7 border"
                  style={{ background: "var(--off-white)", borderColor: "var(--line)" }}
                >
                  <span
                    className="flex w-10 h-10 rounded-full items-center justify-center text-sm font-bold mb-5"
                    style={{ background: "var(--navy)", color: "var(--gold)" }}
                  >
                    {i + 1}
                  </span>
                  <p
                    className="font-semibold text-lg mb-2"
                    style={{ color: "var(--navy)" }}
                  >
                    {step.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200}>
            <p
              className="mt-8 text-sm leading-relaxed max-w-2xl"
              style={{ color: "var(--text-soft)" }}
            >
              {brand.channelNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUALIFIED CONVERSATION */}
      <section
        id="qualified"
        className="py-24 md:py-32"
        style={{ background: "var(--off-white)" }}
      >
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
              style={{ color: "var(--gold)" }}
            >
              Honest success criteria
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6"
              style={{ color: "var(--navy)" }}
            >
              What counts as a qualified conversation.
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-mid)" }}
            >
              {qualified.is}
            </p>
            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: "var(--text-mid)" }}
            >
              {qualified.rejection}
            </p>
            <p
              className="mt-5 text-sm leading-relaxed"
              style={{ color: "var(--text-soft)" }}
            >
              {qualified.scopeNote}
            </p>
          </Reveal>

          <Reveal delay={100} distance={30}>
            <div
              className="rounded-2xl p-8 md:p-9 border"
              style={{ background: "white", borderColor: "var(--line)" }}
            >
              <p
                className="font-display text-2xl font-semibold mb-6"
                style={{ color: "var(--navy)" }}
              >
                It does not include
              </p>
              <ul className="space-y-4">
                {qualified.isNot.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-mid)" }}
                  >
                    <span
                      aria-hidden
                      className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "var(--warm-gray)", color: "var(--navy)" }}
                    >
                      ×
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FIT */}
      <section id="fit" className="py-24 md:py-32" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "var(--gold)" }}
              >
                Straight answer
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em]"
                style={{ color: "var(--navy)" }}
              >
                Who we work best with.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal distance={30}>
              <div
                className="h-full rounded-2xl p-8 md:p-9 border"
                style={{ background: "var(--off-white)", borderColor: "var(--line)" }}
              >
                <p
                  className="font-display text-2xl font-semibold mb-6"
                  style={{ color: "var(--navy)" }}
                >
                  A strong fit
                </p>
                <ul className="space-y-4">
                  {fit.yes.map((item) => (
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

            <Reveal delay={100} distance={30}>
              <div
                className="h-full rounded-2xl p-8 md:p-9 border"
                style={{ background: "var(--off-white)", borderColor: "var(--line)" }}
              >
                <p
                  className="font-display text-2xl font-semibold mb-6"
                  style={{ color: "var(--navy)" }}
                >
                  Who we&apos;re probably not for
                </p>
                <ul className="space-y-4">
                  {fit.no.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-soft)" }}
                    >
                      <span
                        aria-hidden
                        className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: "var(--warm-gray)", color: "var(--navy)" }}
                      >
                        ×
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section id="engagements" className="py-24 md:py-32" style={{ background: "var(--off-white)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "var(--gold)" }}
              >
                {engagements.eyebrow}
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em]"
                style={{ color: "var(--navy)" }}
              >
                {engagements.headline}
              </h2>
              <p
                className="mt-5 text-lg leading-relaxed"
                style={{ color: "var(--text-mid)" }}
              >
                {engagements.intro}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagements.cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 100} distance={30}>
                <div
                  className="h-full rounded-2xl p-9 md:p-10 border"
                  style={
                    i === 0
                      ? { background: "white", borderColor: "var(--line)" }
                      : {
                          background: "var(--navy)",
                          borderColor: "var(--navy)",
                          boxShadow: "0 34px 80px -40px rgba(15,37,64,0.6)",
                        }
                  }
                >
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-3"
                    style={{ color: "var(--gold)" }}
                  >
                    Path {i + 1}
                  </p>
                  <p
                    className="font-display text-3xl font-bold mb-4"
                    style={{ color: i === 0 ? "var(--navy)" : "#ffffff" }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-base font-semibold leading-relaxed mb-3"
                    style={{ color: i === 0 ? "var(--navy)" : "#ffffff" }}
                  >
                    {card.for}
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: i === 0 ? "var(--text-mid)" : "#c8d8e8" }}
                  >
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <p
                className="text-base leading-relaxed max-w-3xl"
                style={{ color: "var(--text-mid)" }}
              >
                {engagements.note}
              </p>
              <a
                href={brand.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-7 py-4 rounded font-semibold text-center transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
              >
                Book a Call
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="py-24 md:py-32" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto px-5">
          <Reveal>
            <div className="flex items-center gap-5 mb-8">
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
              {delivery.title}.
            </h2>
            {delivery.body.map((para) => (
              <p
                key={para}
                className="text-lg leading-relaxed mb-5"
                style={{ color: "var(--text-mid)" }}
              >
                {para}
              </p>
            ))}
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded border font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{ color: "var(--navy)", borderColor: "var(--navy)" }}
            >
              About Angelo <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROOF */}
      <Proof />

      {/* ARTICLES (shown only when at least one is published) */}
      {articles.length > 0 && (
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
                Cold calling, with the numbers attached.
              </h2>
              <p
                className="mt-5 text-lg leading-relaxed"
                style={{ color: "var(--text-mid)" }}
              >
                Written from campaigns Angelo has run. Where there is a number,
                there is a screenshot behind it.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5">
            {articles.slice(0, 2).map((a, i) => (
              <Reveal key={a.slug} delay={i * 80} distance={26}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[280px_1fr] rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "white", borderColor: "var(--line)" }}
                >
                  <div className="relative overflow-hidden" style={{ background: "var(--navy-dark)" }}>
                    <Image
                      src={a.hero.src}
                      alt={a.hero.alt}
                      width={1600}
                      height={900}
                      className="h-full w-full object-cover min-h-[180px] transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>
                  <div className="p-8 md:p-10">
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
                  </div>
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
      )}

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
            Let&apos;s see if outbound makes sense for you.
          </h2>
          <p className="text-lg mb-9" style={{ color: "#a8c0d8" }}>
            Book a call. We&apos;ll go through what you sell, who you want to
            reach, and whether an engagement makes sense. If it doesn&apos;t,
            we&apos;ll say so.
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
            Book a Call with Angelo
          </a>
          <p className="mt-6 text-sm" style={{ color: "#8fa8c0" }}>
            Prefer the phone?{" "}
            <a
              href={brand.phoneHref}
              className="underline underline-offset-4 transition-colors hover:text-white"
              style={{ color: "var(--gold-light)" }}
            >
              {brand.phone}
            </a>
          </p>
        </Reveal>
      </section>
    </>
  );
}
