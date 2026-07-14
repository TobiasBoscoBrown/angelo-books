import { brand } from "@/lib/brand";
import Reveal from "@/components/Reveal";
import ProofGallery from "@/components/ProofGallery";

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
            campaigns ran. Client names are covered. Nothing else is. Tap any one to read it full size.
          </p>
        </Reveal>

        <ProofGallery />

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
