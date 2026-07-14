"use client";
import { useRef, useEffect } from "react";

const cards = [
  {
    metric: "7",
    label: "Appointments booked",
    context: "from 85 targeted dials in a single campaign",
    feedback: "Great work!",
  },
  {
    metric: "85",
    label: "Outbound dials",
    context: "all targeted, prepared, and followed up",
    feedback: null,
  },
  {
    metric: "2",
    label: "Meeting preps",
    context: "delivered so the client walked in ready to close",
    feedback: null,
  },
  {
    metric: "100%",
    label: "Niche-targeted lists",
    context: "built from scratch, no generic databases",
    feedback: null,
  },
];

// duplicate for seamless loop
const allCards = [...cards, ...cards];

export default function ResultsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function getStep() {
    const t = trackRef.current;
    if (!t || !t.children[0]) return 340;
    const c = t.children[0] as HTMLElement;
    const gap = parseFloat(getComputedStyle(t).gap || "20") || 20;
    return c.getBoundingClientRect().width + gap;
  }

  function getW() {
    return getStep() * cards.length;
  }

  function go(dir: number) {
    const t = trackRef.current;
    if (!t) return;
    if (dir < 0 && t.scrollLeft < getStep()) t.scrollLeft += getW();
    t.scrollBy({ left: dir * getStep(), behavior: "smooth" });
  }

  function start() {
    stop();
    intervalRef.current = setInterval(() => go(1), 3600);
  }

  function stop() {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    const onScroll = () => {
      const w = getW();
      if (t.scrollLeft >= w) t.scrollLeft -= w;
      else if (t.scrollLeft < 0) t.scrollLeft += w;
    };
    t.addEventListener("scroll", onScroll, { passive: true });
    t.addEventListener("pointerenter", stop);
    t.addEventListener("pointerleave", start);
    start();
    return () => {
      t.removeEventListener("scroll", onScroll);
      t.removeEventListener("pointerenter", stop);
      t.removeEventListener("pointerleave", start);
      stop();
    };
  });

  return (
    <div className="relative">
      <button
        className="car-btn absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 rounded-full border flex items-center justify-center bg-white shadow-sm hidden md:flex"
        style={{ borderColor: "var(--line)" }}
        onClick={() => { go(-1); start(); }}
        aria-label="Previous"
      >
        &#8249;
      </button>

      <div ref={trackRef} className="carousel-track py-2">
        {allCards.map((c, i) => (
          <div
            key={i}
            className="rounded-xl p-7 flex flex-col gap-3 border"
            style={{
              background: "white",
              borderColor: "var(--line)",
              minHeight: "200px",
            }}
          >
            <p
              className="font-display text-5xl font-bold"
              style={{ color: "var(--navy)" }}
            >
              {c.metric}
            </p>
            <p className="font-semibold text-base" style={{ color: "var(--text-dark)" }}>
              {c.label}
            </p>
            <p className="text-sm" style={{ color: "var(--text-soft)" }}>
              {c.context}
            </p>
            {c.feedback && (
              <p
                className="text-sm italic mt-auto pt-3 border-t"
                style={{ color: "var(--navy)", borderColor: "var(--warm-gray)" }}
              >
                &ldquo;{c.feedback}&rdquo; &mdash; client
              </p>
            )}
          </div>
        ))}
      </div>

      <button
        className="car-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 rounded-full border flex items-center justify-center bg-white shadow-sm hidden md:flex"
        style={{ borderColor: "var(--line)" }}
        onClick={() => { go(1); start(); }}
        aria-label="Next"
      >
        &#8250;
      </button>
    </div>
  );
}
