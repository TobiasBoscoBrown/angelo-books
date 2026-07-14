"use client";
import { useState } from "react";
import { brand } from "@/lib/brand";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y" style={{ borderColor: "var(--line)" }}>
      {brand.faqs.map((item, i) => (
        <div key={i}>
          <button
            className="w-full text-left py-5 flex items-start justify-between gap-4 focus:outline-none"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-base pr-2" style={{ color: "var(--navy)" }}>
              {item.q}
            </span>
            <span
              className="flex-shrink-0 text-xl leading-none transition-transform"
              style={{
                color: "var(--navy)",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <p
              className="pb-5 text-sm leading-relaxed"
              style={{ color: "var(--text-mid)" }}
            >
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
