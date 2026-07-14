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

          <p className="text-xs font-semibold uppercase tracking-widest mt-8 mb-3 text-white">
            Follow Angelo
          </p>
          <div className="flex items-center gap-3">
            <a
              href={brand.threads}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Angelo on Threads (opens in a new tab)"
              className="group flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "#2a4d70" }}
            >
              <svg
                viewBox="0 0 192 192"
                aria-hidden
                className="w-[18px] h-[18px] transition-colors"
                fill="currentColor"
                style={{ color: "#8fa8c0" }}
              >
                <path d="M141.5 89.7c-.8-.4-1.7-.8-2.6-1.1-1.5-27.5-16.5-43.2-41.7-43.4h-.3c-15.1 0-27.6 6.4-35.3 18.1l13.9 9.5c5.8-8.7 14.8-10.6 21.4-10.6h.2c8.2.1 14.4 2.4 18.4 6.9 2.9 3.3 4.9 7.9 5.9 13.6-7.7-1.3-16-1.7-24.9-1.2-25 1.4-41.1 16-40 36.3.6 10.3 5.7 19.2 14.500 25 7.4 4.9 17 7.3 26.9 6.8 13.1-.7 23.4-5.7 30.6-14.9 5.4-7 8.9-16 10.4-27.4 6.2 3.7 10.8 8.6 13.3 14.5 4.3 10 4.6 26.5-8.9 39.9-11.8 11.8-26 16.9-47.4 17.1-23.8-.2-41.8-7.8-53.4-22.7C31.6 142.7 25.9 122.6 25.7 96c.2-26.6 5.9-46.7 17-59.9C54.3 21.2 72.3 13.6 96.1 13.4c24 .2 42.3 7.8 54.4 22.8 5.9 7.3 10.4 16.5 13.3 27.2l16.3-4.4c-3.6-13.2-9.2-24.5-16.9-33.9C147.7 6.1 124.7-3.2 96.2-3.4h-.1C67.6-3.2 44.9 6.2 28.7 25c-14.4 16.8-21.9 40.2-22.1 69.4v.2c.2 29.2 7.7 52.6 22.1 69.4 16.2 18.8 38.9 28.2 67.4 28.4h.1c25.3-.2 43.2-6.8 57.9-21.5 19.3-19.3 18.7-43.4 12.3-58.2-4.5-10.6-13.1-19.2-24.9-25zM97.1 132.6c-11 .6-22.4-4.3-23-15.1-.4-8 5.7-16.9 23.6-17.9 2-.1 4-.2 6-.2 6.5 0 12.6.6 18.1 1.8-2.1 25.6-14.1 30.8-24.7 31.4z" />
              </svg>
            </a>
            <a
              href={brand.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Angelo Miguel on LinkedIn (opens in a new tab)"
              className="group flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "#2a4d70" }}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="w-[18px] h-[18px]"
                fill="currentColor"
                style={{ color: "#8fa8c0" }}
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </div>
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
