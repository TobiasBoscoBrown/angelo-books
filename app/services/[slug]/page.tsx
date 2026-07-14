import { brand } from "@/lib/brand";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return brand.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = brand.services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} | Angelo Books`,
    description: service.description,
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = brand.services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const others = brand.services.filter((s) => s.slug !== params.slug);

  return (
    <>
      <section
        className="pt-36 pb-20"
        style={{ background: "var(--navy-dark)" }}
      >
        <div className="max-w-3xl mx-auto px-5">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--gold)" }}
          >
            Service
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            {service.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "#a8c0d8" }}>
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto px-5">
          <p className="text-base leading-relaxed" style={{ color: "var(--text-mid)" }}>
            {service.detail}
          </p>

          <div
            className="mt-12 rounded-2xl p-8 border"
            style={{ background: "var(--off-white)", borderColor: "var(--line)" }}
          >
            <p className="font-semibold mb-3" style={{ color: "var(--navy)" }}>
              Ready to get started?
            </p>
            <p className="text-sm mb-5" style={{ color: "var(--text-mid)" }}>
              Book a free call with Angelo and talk through whether{" "}
              {service.name.toLowerCase()} is what your agency needs right now.
            </p>
            <a
              href={brand.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: "var(--navy)", color: "white" }}
            >
              Book a Free Call
            </a>
          </div>

          {others.length > 0 && (
            <div className="mt-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "var(--text-soft)" }}
              >
                Other services
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {others.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block p-5 rounded-xl border transition-all hover:shadow-sm hover:-translate-y-0.5"
                    style={{ background: "var(--off-white)", borderColor: "var(--line)" }}
                  >
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--navy)" }}>
                      {s.name}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-soft)" }}>
                      {s.description.slice(0, 80)}...
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
