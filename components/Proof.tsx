import Image from "next/image";
import { brand } from "@/lib/brand";
import Reveal from "@/components/Reveal";

export default function Proof() {
  return (
    <section
      id="proof"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--navy-dark)" }}
    >
      {/* soft gold bloom behind the cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--gold) 0%, transparent 62%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5">
        <Reveal>
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            style={{ color: "var(--gold)" }}
          >
            Receipts
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.08] max-w-2xl">
            Not a case study. <br className="hidden sm:block" />
            The actual messages.
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed max-w-xl"
            style={{ color: "#a8c0d8" }}
          >
            These are real client threads, posted publicly by Angelo as the
            campaigns ran. Client names are covered. Nothing else is.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {brand.proof.map((p, i) => (
            <Reveal key={p.src} delay={i * 110} distance={34}>
              <figure
                className="group h-full flex flex-col rounded-2xl p-3 border transition-transform duration-500 hover:-translate-y-1.5"
                style={{
                  background: "rgba(255,255,255,0.045)",
                  borderColor: "rgba(255,255,255,0.10)",
                  boxShadow: "0 24px 60px -28px rgba(0,0,0,0.75)",
                }}
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    className="w-full h-auto block"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="mt-4 px-2 pb-2">
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-2"
                    style={{ color: "var(--gold)" }}
                  >
                    {p.kicker}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#a8c0d8" }}
                  >
                    {p.note}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <p className="mt-10 text-sm" style={{ color: "#7d97b3" }}>
            More of these go up as the campaigns run.{" "}
            <a
              href={brand.threads}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-white"
              style={{ color: "var(--gold-light)" }}
            >
              Follow along on Threads
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
