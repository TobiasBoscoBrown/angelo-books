"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { brand } from "@/lib/brand";
import Reveal from "@/components/Reveal";

type Shot = (typeof brand.proof)[number];

export default function ProofGallery() {
  const shots: Shot[] = brand.proof;
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) => (i === null ? i : (i + dir + shots.length) % shots.length)),
    [shots.length]
  );

  // Keyboard: Escape closes, arrows move between shots.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  // Lock background scroll while the lightbox is up, and park focus on Close.
  useEffect(() => {
    if (open === null) return;
    lastFocused.current = document.activeElement as HTMLElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      lastFocused.current?.focus?.();
    };
  }, [open]);

  const active = open === null ? null : shots[open];

  return (
    <>
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {shots.map((p, i) => (
          <Reveal key={p.src} delay={i * 110} distance={34}>
            <figure
              className="h-full flex flex-col rounded-2xl p-3 border"
              style={{
                background: "rgba(255,255,255,0.045)",
                borderColor: "rgba(255,255,255,0.10)",
                boxShadow: "0 24px 60px -28px rgba(0,0,0,0.75)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Open larger view: ${p.kicker}`}
                className="group relative block rounded-xl overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={
                  {
                    // gold focus ring against the navy panel
                    ["--tw-ring-color" as string]: "var(--gold)",
                    ["--tw-ring-offset-color" as string]: "var(--navy-dark)",
                  } as React.CSSProperties
                }
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%)",
                  }}
                >
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1.5 rounded"
                    style={{
                      background: "var(--gold)",
                      color: "var(--navy-dark)",
                    }}
                  >
                    View full size
                  </span>
                </span>
              </button>

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

      {/* LIGHTBOX */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.kicker}. ${active.note}`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(6,17,30,0.92)" }}
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close full size view"
            className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center text-2xl leading-none transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2"
            style={{
              background: "rgba(255,255,255,0.10)",
              color: "white",
              ["--tw-ring-color" as string]: "var(--gold)",
            } as React.CSSProperties}
          >
            <span aria-hidden>×</span>
          </button>

          {shots.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous screenshot"
                className="absolute left-3 sm:left-6 w-11 h-11 rounded-full items-center justify-center hidden sm:flex transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  color: "white",
                  ["--tw-ring-color" as string]: "var(--gold)",
                } as React.CSSProperties}
              >
                <span aria-hidden>‹</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next screenshot"
                className="absolute right-3 sm:right-6 w-11 h-11 rounded-full items-center justify-center hidden sm:flex transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  color: "white",
                  ["--tw-ring-color" as string]: "var(--gold)",
                } as React.CSSProperties}
              >
                <span aria-hidden>›</span>
              </button>
            </>
          )}

          <figure
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-xl overflow-hidden border"
              style={{ borderColor: "rgba(255,255,255,0.14)" }}
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                className="w-full h-auto block"
                sizes="100vw"
                quality={100}
                priority
              />
            </div>
            <figcaption className="mt-5 max-w-2xl">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-2"
                style={{ color: "var(--gold)" }}
              >
                {active.kicker}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#a8c0d8" }}>
                {active.note}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
