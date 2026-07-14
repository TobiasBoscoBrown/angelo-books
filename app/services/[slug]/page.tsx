import { brand } from "@/lib/brand";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
  return brand.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = brand.services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Angelo Books`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | Angelo Books`,
      description: service.description,
      type: "article",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = brand.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = brand.services.filter((s) => s.slug !== slug);
  const index = brand.services.findIndex((s) => s.slug === slug);

  return (
    <>
      {/* HERO */}
      <section
        className="relative pt-36 pb-32 overflow-hidden"
        style={{ background: "var(--navy-dark)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-32 w-[720px] h-[720px] rounded-full opacity-[0.09]"
          style={{
            background:
              "radial-gradient(circle, var(--gold) 0%, transparent 62%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-5">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs mb-6"
              style={{ color: "#7d97b3" }}
            >
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link
                href="/#services"
                className="transition-colors hover:text-white"
              >
                Services
              </Link>
              <span aria-hidden>/</span>
              <span style={{ color: "var(--gold)" }}>{service.name}</span>
            </nav>

            <p
              className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
              style={{ color: "var(--gold)" }}
            >
              Service {String(index + 1).padStart(2, "0")}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.05] max-w-3xl">
              {service.name}
            </h1>
            <p
              className="mt-4 font-display text-xl md:text-2xl italic"
              style={{ color: "var(--gold-light)" }}
            >
              {service.tagline}
            </p>
            <p
              className="mt-6 text-lg leading-relaxed max-w-2xl"
              style={{ color: "#a8c0d8" }}
            >
              {service.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={brand.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 font-semibold rounded text-center transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
              >
                Book a Free Strategy Call
              </a>
              <Link
                href="/#proof"
                className="px-7 py-4 font-semibold rounded border text-center text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{ borderColor: "rgba(255,255,255,0.28)" }}
              >
                See the receipts
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BEST FOR — floats up over the navy/off-white seam */}
      <section className="relative z-10" style={{ background: "var(--off-white)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <Reveal distance={30}>
            <div
              className="-mt-20 md:-mt-24 rounded-2xl p-8 md:p-10 border"
              style={{
                background: "white",
                borderColor: "var(--line)",
                boxShadow: "0 34px 80px -30px rgba(15,37,64,0.5)",
              }}
            >
              <div className="flex items-start gap-4 md:gap-5">
                <span
                  aria-hidden
                  className="flex-shrink-0 mt-1.5 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "var(--off-white)" }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                </span>
                <div>
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-2.5"
                    style={{ color: "var(--text-soft)" }}
                  >
                    Best for
                  </p>
                  <p
                    className="font-display text-xl md:text-2xl leading-snug"
                    style={{ color: "var(--navy)" }}
                  >
                    {service.bestFor}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DETAIL + PROCESS */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-24" style={{ background: "var(--off-white)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <Reveal>
            <p
              className="font-display text-2xl md:text-3xl leading-snug max-w-3xl"
              style={{ color: "var(--navy)" }}
            >
              {service.detail}
            </p>
          </Reveal>

          <div className="mt-20">
            <Reveal>
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] mb-10"
                style={{ color: "var(--text-soft)" }}
              >
                How it works
              </p>
            </Reveal>

            <ol className="relative">
              {service.steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 90} distance={28}>
                  <div className="relative flex gap-6 pb-10 last:pb-0">
                    {/* connector rail */}
                    {i < service.steps.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-[19px] top-11 bottom-0 w-px"
                        style={{ background: "var(--line)" }}
                      />
                    )}
                    <span
                      className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "var(--navy)",
                        color: "var(--gold)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <div className="pt-1.5">
                      <p
                        className="font-semibold text-lg mb-1.5"
                        style={{ color: "var(--navy)" }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="text-base leading-relaxed max-w-2xl"
                        style={{ color: "var(--text-mid)" }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 md:py-24" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto px-5">
          <Reveal>
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--text-soft)" }}
            >
              What you get
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-10"
              style={{ color: "var(--navy)" }}
            >
              Every {service.name.toLowerCase()} engagement includes
            </h2>
          </Reveal>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
            {service.deliverables.map((d, i) => (
              <Reveal as="li" key={d} delay={i * 60} distance={20}>
                <div
                  className="flex items-start gap-3 py-4 border-b"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span
                    aria-hidden
                    className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
                  >
                    ✓
                  </span>
                  <span
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-mid)" }}
                  >
                    {d}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24" style={{ background: "var(--off-white)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <Reveal distance={30}>
            <div
              className="relative rounded-3xl p-10 md:p-14 overflow-hidden"
              style={{ background: "var(--navy)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-40 -right-20 w-[560px] h-[560px] rounded-full opacity-[0.10]"
                style={{
                  background:
                    "radial-gradient(circle, var(--gold) 0%, transparent 62%)",
                }}
              />
              <div className="relative max-w-xl">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                  Ready to get started?
                </h2>
                <p
                  className="mt-4 text-base leading-relaxed"
                  style={{ color: "#a8c0d8" }}
                >
                  Book a free call with {brand.owner} and talk through whether{" "}
                  {service.name.toLowerCase()} is what your agency needs right
                  now. You will be talking to the person who runs your campaign,
                  not an account manager.
                </p>
                <a
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block px-7 py-4 rounded font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
                >
                  Book a Free Call
                </a>
              </div>
            </div>
          </Reveal>

          {/* OTHER SERVICES */}
          {others.length > 0 && (
            <div className="mt-20">
              <Reveal>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                  style={{ color: "var(--text-soft)" }}
                >
                  Other services
                </p>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {others.map((s, i) => (
                  <Reveal key={s.slug} delay={i * 80} distance={22}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group block h-full p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "white",
                        borderColor: "var(--line)",
                      }}
                    >
                      <p
                        className="font-semibold mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        {s.name}
                      </p>
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "var(--text-soft)" }}
                      >
                        {s.tagline}
                      </p>
                      <span
                        className="text-xs font-semibold uppercase tracking-[0.14em] inline-flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: "var(--gold)" }}
                      >
                        Learn more <span aria-hidden>→</span>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
