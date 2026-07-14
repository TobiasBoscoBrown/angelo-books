import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { brand } from "@/lib/brand";
import { SITE_URL } from "@/lib/site";
import ArticleBody from "@/components/ArticleBody";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const url = `${SITE_URL}/articles/${a.slug}`;
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: url },
    openGraph: {
      title: a.title,
      description: a.description,
      type: "article",
      url,
      images: [{ url: a.hero.src, width: 1600, height: 900, alt: a.hero.alt }],
      publishedTime: a.published,
      modifiedTime: a.updated,
      authors: [brand.owner],
    },
    twitter: {
      card: "summary_large_image",
      title: a.title,
      description: a.description,
      images: [a.hero.src],
    },
  };
}

const fmt = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const url = `${SITE_URL}/articles/${a.slug}`;
  const headings = a.blocks.filter(
    (b): b is Extract<typeof b, { t: "h2" }> => b.t === "h2"
  );
  const faqBlock = a.blocks.find(
    (b): b is Extract<typeof b, { t: "faq" }> => b.t === "faq"
  );

  // Article + FAQPage structured data. FAQPage is what earns the expandable
  // question rows in Google's results, so the Q&A must match the page exactly.
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: a.h1,
        description: a.description,
        datePublished: a.published,
        dateModified: a.updated,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: {
          "@type": "Person",
          name: brand.owner,
          jobTitle: brand.founderRole,
          url: brand.linkedin,
        },
        publisher: {
          "@type": "Organization",
          name: brand.name,
          url: SITE_URL,
        },
        image: `${SITE_URL}${a.hero.src}`,
      },
      ...(faqBlock
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqBlock.items.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      {/* HERO */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "var(--navy-dark)" }}
      >
        {/* Hero art. Its background is colour-matched to --navy-dark and it is
            masked out toward the left so the headline always sits on flat navy. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src={a.hero.src}
            alt=""
            width={1600}
            height={900}
            priority
            className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto max-w-none opacity-90"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 26%, #000 62%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 26%, #000 62%)",
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-5">
          <div className="rise">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs mb-6"
              style={{ color: "#7d97b3" }}
            >
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link href="/articles" className="transition-colors hover:text-white">
                Articles
              </Link>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.08] max-w-xl lg:max-w-2xl tracking-[-0.02em]">
              {a.h1}
            </h1>

            <div
              className="mt-7 flex flex-wrap items-center gap-3 text-sm"
              style={{ color: "#8fa8c0" }}
            >
              <span style={{ color: "var(--gold)" }}>{brand.owner}</span>
              <span aria-hidden>·</span>
              <time dateTime={a.published}>{fmt(a.published)}</time>
              <span aria-hidden>·</span>
              <span>{a.readingMinutes} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="pt-16 pb-24 md:pt-20 md:pb-28" style={{ background: "var(--off-white)" }}>
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
          <ArticleBody blocks={a.blocks} />

          {/* Contents rail */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-4"
                style={{ color: "var(--text-soft)" }}
              >
                On this page
              </p>
              <ul className="space-y-2.5">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className="text-sm leading-snug block transition-colors"
                      style={{ color: "var(--text-mid)" }}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

    </>
  );
}
