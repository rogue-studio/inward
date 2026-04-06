import { notFound } from "next/navigation";
import Link from "next/link";
import { fragments } from "@/content/fragments";

export default async function FragmentDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const fragment = fragments.find((f) => f.slug === slug);

  if (!fragment) return notFound();

  const currentIndex = fragments.findIndex((f) => f.slug === slug);
  const prev = fragments[currentIndex - 1];
  const next = fragments[currentIndex + 1];

  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#1a1a1a] px-6">
      <div className="mx-auto max-w-[520px] py-44">
        <div className="mb-24">
          <Link
            href="/fragments"
            className="font-ui text-[14px] tracking-[0.18em] opacity-60 transition hover:opacity-100"
          >
            ← FRAGMENTS
          </Link>
        </div>

        <div className="font-ja space-y-1 text-[18px] leading-[1.65] tracking-[0.02em] text-[#1a1a1a]">
          {fragment.ja.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="mt-6 font-en space-y-1.5 text-[16px] leading-[1.05] tracking-[0.05em] text-[#1a1a1a]/60">
          {fragment.en.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="mt-28 flex justify-between font-ui text-[14px] tracking-[0.15em] opacity-60">
          {prev ? (
            <Link
              href={`/fragments/${prev.slug}`}
              className="transition hover:opacity-80"
            >
              ← BEFORE
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/fragments/${next.slug}`}
              className="transition hover:opacity-80"
            >
              AFTER →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return fragments.map((f) => ({
    slug: f.slug,
  }));
}