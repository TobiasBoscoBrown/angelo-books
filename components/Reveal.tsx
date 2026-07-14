"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Stagger within a group, in ms. */
  delay?: number;
  /** How far it travels up, in px. */
  distance?: number;
  className?: string;
  as?: "div" | "section" | "li";
};

/**
 * Floats its children up into place the first time they scroll into view.
 * Respects prefers-reduced-motion: those users get the content immediately,
 * with no transform and no transition.
 */
export default function Reveal({
  children,
  delay = 0,
  distance = 24,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    // If it's already in view on load, show it without waiting for a scroll.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: React.CSSProperties = reduced
    ? {}
    : {
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translate3d(0, ${distance}px, 0)`,
        transition:
          "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
      };

  // Polymorphic tag: ElementType keeps the ref assignable across div/section/li.
  const Comp = Tag as React.ElementType;

  return (
    <Comp ref={ref} className={className} style={style}>
      {children}
    </Comp>
  );
}
