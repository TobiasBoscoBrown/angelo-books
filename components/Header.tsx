"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { brand } from "@/lib/brand";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Services", href: "/#services" },
    { label: "Results", href: "/#proof" },
    { label: "Articles", href: "/articles" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/#faq" },
  ];

  // Unscrolled the header floats over the navy hero band, so it needs light
  // ink. Once the white bar slides in behind it, everything flips back to navy.
  const wordmarkColor = scrolled ? "var(--navy)" : "#ffffff";
  const linkColor = scrolled ? "var(--text-mid)" : "#c8d8e8";
  const linkHoverColor = scrolled ? "var(--navy)" : "#ffffff";
  const barColor = scrolled ? "var(--navy)" : "#ffffff";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="font-display text-xl font-bold tracking-tight transition-colors duration-300"
            style={{ color: wordmarkColor }}
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
              className="text-sm font-medium transition-colors duration-300"
              style={{ color: linkColor }}
              onMouseOver={(e) => (e.currentTarget.style.color = linkHoverColor)}
              onMouseOut={(e) => (e.currentTarget.style.color = linkColor)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={brand.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-semibold rounded border transition-all duration-300 hover:opacity-90"
            style={
              scrolled
                ? {
                    background: "var(--navy)",
                    borderColor: "var(--navy)",
                    color: "#ffffff",
                  }
                : {
                    background: "transparent",
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#ffffff",
                  }
            }
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
            className={`block h-0.5 w-6 transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
            style={{ background: open ? "var(--navy)" : barColor }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
            style={{ background: open ? "var(--navy)" : barColor }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
            style={{ background: open ? "var(--navy)" : barColor }}
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
