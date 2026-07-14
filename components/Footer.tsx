import Link from "next/link";
import { brand } from "@/lib/brand";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--navy-dark)", color: "#c8d6e5" }}>
      <div className="max-w-6xl mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-xl font-bold text-white mb-3">
            Angelo Books
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#8fa8c0" }}>
            {brand.tagline}
          </p>
          <p className="text-sm mt-4" style={{ color: "#8fa8c0" }}>
            {brand.type}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">
            Quick Links
          </p>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Services", href: "/#services" },
              { label: "Results", href: "/#results" },
              { label: "About Angelo", href: "/about" },
              { label: "FAQ", href: "/#faq" },
              { label: "Book a Call", href: brand.calendlyUrl },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-white transition-colors"
                  style={{ color: "#8fa8c0" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">
            Serving
          </p>
          <ul className="space-y-1 text-sm" style={{ color: "#8fa8c0" }}>
            {brand.serving.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="text-xs mt-6" style={{ color: "#8fa8c0" }}>
            Based in {brand.location}
          </p>
          <a
            href={brand.threads}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs hover:text-white transition-colors"
            style={{ color: "#8fa8c0" }}
          >
            @justangeloing on Threads
          </a>
        </div>
      </div>
      <div
        className="border-t px-5 py-5 text-center text-xs"
        style={{ borderColor: "#1e3f60", color: "#6080a0" }}
      >
        &copy; {year} Angelo Books. All rights reserved.
      </div>
    </footer>
  );
}
