import Image from "next/image";
import type { Block } from "@/lib/articles";
import Reveal from "@/components/Reveal";

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="max-w-2xl">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "lead":
            return (
              <Reveal key={i}>
                <p
                  className="font-display text-2xl md:text-[1.7rem] leading-snug mb-10"
                  style={{ color: "var(--navy)" }}
                >
                  {b.text}
                </p>
              </Reveal>
            );

          case "answer":
            return (
              <Reveal key={i}>
                <div
                  className="rounded-2xl p-7 mb-12 border-l-4"
                  style={{
                    background: "var(--off-white)",
                    borderColor: "var(--gold)",
                  }}
                >
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-3"
                    style={{ color: "var(--text-soft)" }}
                  >
                    The short answer
                  </p>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--navy)" }}
                  >
                    {b.text}
                  </p>
                </div>
              </Reveal>
            );

          case "h2":
            return (
              <Reveal key={i}>
                <h2
                  id={b.id}
                  className="font-display text-3xl md:text-4xl font-bold mt-16 mb-5 scroll-mt-28 tracking-[-0.02em]"
                  style={{ color: "var(--navy)" }}
                >
                  {b.text}
                </h2>
              </Reveal>
            );

          case "h3":
            return (
              <Reveal key={i}>
                <h3
                  className="font-display text-xl font-semibold mt-10 mb-3"
                  style={{ color: "var(--navy)" }}
                >
                  {b.text}
                </h3>
              </Reveal>
            );

          case "p":
            return (
              <Reveal key={i}>
                <p
                  className="text-[1.0625rem] leading-[1.75] mb-5"
                  style={{ color: "var(--text-mid)" }}
                >
                  {b.text}
                </p>
              </Reveal>
            );

          case "ul":
            return (
              <Reveal key={i}>
                <ul className="mb-6 mt-2 space-y-3">
                  {b.items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-3 text-[1.0625rem] leading-[1.7]"
                      style={{ color: "var(--text-mid)" }}
                    >
                      <span
                        aria-hidden
                        className="flex-shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--gold)" }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );

          case "stats":
            return (
              <Reveal key={i} distance={30}>
                <div
                  className="my-10 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
                  style={{ background: "var(--navy-dark)" }}
                >
                  {b.items.map((s) => (
                    <div key={s.label}>
                      <p
                        className="font-display text-4xl font-bold mb-1.5 tabular-nums"
                        style={{ color: "var(--gold)" }}
                      >
                        {s.value}
                      </p>
                      <p className="text-sm leading-snug" style={{ color: "#a8c0d8" }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            );

          case "table":
            return (
              <Reveal key={i} distance={26}>
                <figure className="my-10">
                  <div
                    className="overflow-x-auto rounded-2xl border"
                    style={{ borderColor: "var(--line)", background: "white" }}
                  >
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr style={{ background: "var(--off-white)" }}>
                          {b.head.map((h) => (
                            <th
                              key={h}
                              scope="col"
                              className="px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap"
                              style={{ color: "var(--text-soft)" }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {b.rows.map((r, ri) => (
                          <tr
                            key={ri}
                            className="border-t"
                            style={{ borderColor: "var(--line)" }}
                          >
                            {r.map((c, ci) => (
                              <td
                                key={ci}
                                className="px-5 py-3.5 tabular-nums"
                                style={{
                                  color: ci === 0 ? "var(--navy)" : "var(--text-mid)",
                                  fontWeight: ci === 0 ? 600 : 400,
                                }}
                              >
                                {c}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {b.caption && (
                    <figcaption
                      className="mt-3 text-xs leading-relaxed"
                      style={{ color: "var(--text-soft)" }}
                    >
                      {b.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            );

          case "callout":
            return (
              <Reveal key={i} distance={26}>
                <aside
                  className="my-10 rounded-2xl p-7 border"
                  style={{ background: "white", borderColor: "var(--line)" }}
                >
                  <p
                    className="font-semibold mb-2.5 flex items-center gap-2.5"
                    style={{ color: "var(--navy)" }}
                  >
                    <span
                      aria-hidden
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "var(--gold)" }}
                    />
                    {b.title}
                  </p>
                  <p
                    className="text-[0.975rem] leading-relaxed"
                    style={{ color: "var(--text-mid)" }}
                  >
                    {b.text}
                  </p>
                </aside>
              </Reveal>
            );

          case "quote":
            return (
              <Reveal key={i}>
                <blockquote className="my-10 pl-6 border-l-2" style={{ borderColor: "var(--gold)" }}>
                  <p
                    className="font-display text-2xl italic leading-snug mb-3"
                    style={{ color: "var(--navy)" }}
                  >
                    &ldquo;{b.text}&rdquo;
                  </p>
                  <cite className="text-sm not-italic" style={{ color: "var(--text-soft)" }}>
                    {b.cite}
                  </cite>
                </blockquote>
              </Reveal>
            );

          case "proof":
            return (
              <Reveal key={i} distance={30}>
                <figure className="my-10">
                  <div
                    className="rounded-2xl overflow-hidden border p-3"
                    style={{ background: "var(--navy-dark)", borderColor: "var(--line)" }}
                  >
                    <Image
                      src={b.src}
                      alt={b.alt}
                      width={b.width}
                      height={b.height}
                      className="w-full h-auto block rounded-xl"
                      sizes="(max-width: 768px) 100vw, 672px"
                    />
                  </div>
                  <figcaption
                    className="mt-3 text-xs leading-relaxed"
                    style={{ color: "var(--text-soft)" }}
                  >
                    {b.caption}
                  </figcaption>
                </figure>
              </Reveal>
            );

          case "faq":
            return (
              <Reveal key={i}>
                <div className="mt-8 mb-4">
                  {b.items.map((f) => (
                    <details
                      key={f.q}
                      className="group border-b py-5"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <summary
                        className="flex items-start justify-between gap-4 cursor-pointer list-none font-semibold text-[1.0625rem] leading-snug"
                        style={{ color: "var(--navy)" }}
                      >
                        {f.q}
                        <span
                          aria-hidden
                          className="flex-shrink-0 mt-1 transition-transform duration-300 group-open:rotate-45"
                          style={{ color: "var(--gold)" }}
                        >
                          +
                        </span>
                      </summary>
                      <p
                        className="mt-3 text-[1.0625rem] leading-[1.7] pr-8"
                        style={{ color: "var(--text-mid)" }}
                      >
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </Reveal>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
