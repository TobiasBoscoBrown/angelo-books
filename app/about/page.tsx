import { brand } from "@/lib/brand";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Angelo Miguel | Angelo Books",
  description:
    "Angelo Books is a founder-led cold-calling operation run by Angelo Miguel, working with growing AI companies and select B2B businesses with a proven offer in the US and Australia.",
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
                  One service. <br />
                  Someone accountable for it.
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
              Angelo Books does one thing: cold calling, run for growing AI
              companies and a small number of B2B businesses with an offer that
              already sells.
            </p>
            <p className="mt-6 leading-relaxed">
              Plenty of companies build something good and then find out that
              nobody hears about it. The founders are busy shipping. Hiring a
              rep means recruiting, training and paying for a role before it
              produces anything. So the phone never gets picked up, and the
              company never really finds out whether calling would have worked
              for them.
            </p>
            <p className="mt-5 leading-relaxed">
              That is the gap Angelo Miguel started Angelo Books to fill. Every
              engagement starts with a two-week pilot, because the honest first
              question is not how many meetings you want, it is whether cold
              calling suits what you sell and who you sell it to. Sometimes the
              answer is meetings in the first week. Sometimes it is that the
              targeting is off, or the offer needs a different opener. Both are
              worth knowing early.
            </p>
            <p className="mt-5 leading-relaxed">
              The business is founder-led and stays that way. Angelo is on the
              phone and in the messaging, and as the business grows he will
              bring on a small team held to the standard he set. Either way you
              will know who is calling on your behalf and what they are saying.
            </p>
            <p className="mt-5 leading-relaxed">
              What you will not get is a guaranteed number of meetings, a
              commission-only arrangement, or a spreadsheet of everyone who was
              ever dialed. The service is cold calling. You get the
              conversations worth having, the weekly numbers, and a straight
              read on what the market said back.
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
                { label: "What it is", value: brand.type },
                { label: "Markets served", value: brand.serving.join(", ") },
                { label: "Who it is for", value: brand.icpDescription },
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
              href="/services/cold-calling"
              className="px-7 py-4 rounded font-semibold text-center border transition-all duration-300 hover:-translate-y-0.5"
              style={{ color: "var(--navy)", borderColor: "var(--navy)" }}
            >
              See how a campaign runs
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
