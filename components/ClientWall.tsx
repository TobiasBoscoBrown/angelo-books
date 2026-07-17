import Image from "next/image";
import { brand } from "@/lib/brand";
import Reveal from "@/components/Reveal";

/**
 * Logos are pre-rendered as white silhouettes on transparency, optically
 * balanced by area rather than height, so a wide wordmark and a square icon
 * carry the same visual weight. Rendered at half their intrinsic size for
 * crispness on retina.
 */
export default function ClientWall() {
  return (
    <section
      className="py-16 md:py-20 border-t"
      style={{
        background: "var(--navy-dark)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-center mb-10"
            style={{ color: "#7d97b3" }}
          >
            Businesses Angelo has run campaigns for
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
            {brand.clients.map((c) => (
              <li key={c.src} className="flex items-center">
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={c.width}
                  height={c.height}
                  className="h-auto w-auto opacity-60 transition-opacity duration-300 hover:opacity-100"
                  style={{
                    maxHeight: 36,
                    width: "auto",
                  }}
                />
                {c.name && <span className="sr-only">{c.name}</span>}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
