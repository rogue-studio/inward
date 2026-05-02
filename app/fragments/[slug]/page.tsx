import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fragments } from "@/content/fragments";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return fragments.map((fragment) => ({
    slug: fragment.slug,
  }));
}

export default async function FragmentDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const sorted = [...fragments].sort((a, b) => a.order - b.order);
  const currentIndex = sorted.findIndex((item) => item.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const fragment = sorted[currentIndex];
  const previousFragment = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const nextFragment =
    currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#f7f5f0] px-6 py-16 text-neutral-800 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <Link
            href="/fragments"
            className="text-[11px] uppercase tracking-[0.24em] text-neutral-500 transition hover:text-neutral-800"
          >
            Back to Fragments
          </Link>
        </div>

        <article>
          <div className="mb-10 space-y-5">
            <div className="space-y-1">
              {fragment.ja.map((line, index) => (
                <p
                  key={index}
                  className="text-[14px] leading-[1.6] tracking-[0.05em] text-neutral-700"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="space-y-1 pt-1">
              {fragment.en.map((line, index) => (
                <p
                  key={index}
                  className="text-[13px] leading-[1.5] tracking-[0.06em] text-neutral-500"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

         <div className="relative aspect-[4/3] max-w-[360px] overflow-hidden bg-neutral-200">
            <Image
              src={fragment.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </div>
        </article>

        <nav className="mt-16 border-t border-neutral-300 pt-8">
          <div className="flex items-start justify-between gap-8">
            <div className="min-h-[48px] flex-1">
              {previousFragment ? (
                <Link
                  href={`/fragments/${previousFragment.slug}`}
                  className="group inline-block"
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-neutral-300 transition group-hover:text-neutral-700">
                    Remain
                  </p>
                  <p className="text-[14px] leading-[1.6] tracking-[0.04em] text-neutral-500 transition group-hover:text-neutral-800">
                    {previousFragment.preview}
                  </p>
                </Link>
              ) : null}
            </div>

            <div className="min-h-[48px] flex-1 text-right">
              {nextFragment ? (
                <Link
                  href={`/fragments/${nextFragment.slug}`}
                  className="group inline-block"
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-neutral-300 transition group-hover:text-neutral-700">
                    Toward
                  </p>
                  <p className="text-[14px] leading-[1.6] tracking-[0.04em] text-neutral-500 transition group-hover:text-neutral-800">
                    {nextFragment.preview}
                  </p>
                </Link>
              ) : null}
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}