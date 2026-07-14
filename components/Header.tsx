"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { brand } from "@/lib/brand";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Services", href: "/#services" },
    { label: "Results", href: "/#results" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="font-display text-xl font-bold tracking-tight"
            style={{ color: "var(--navy)" }}
          >
            Angelo Books
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--text-mid)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--navy)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--text-mid)")
              }
            >
              {l.label}
            </Link>
          ))}
          <a
            href={brand.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-semibold rounded text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--navy)" }}
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
            style={{ color: "var(--navy)" }}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
            style={{ background: "var(--navy)" }}
          />
          <span
            className={`block h-0.5 w-6 transition-transform ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
            style={{ background: "var(--navy)" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium py-1"
              style={{ color: "var(--navy)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={brand.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 text-sm font-semibold rounded text-white text-center"
            style={{ background: "var(--navy)" }}
            onClick={() => setOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
