import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { scenes } from "@/content/scenes";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return scenes.map((scene) => ({
    slug: scene.slug,
  }));
}

export default async function SceneDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const sorted = [...scenes].sort((a, b) => a.order - b.order);
  const currentIndex = sorted.findIndex((item) => item.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const scene = sorted[currentIndex];
  const previous = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const next =
    currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

  const portraitScenes = ["scene-05", "scene-08", "scene-09", "scene-13"];
  const isPortrait = portraitScenes.includes(scene.slug);

  return (
    <main className="min-h-screen bg-[#f7f5f0] px-6 py-16 text-neutral-800 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <Link
            href="/scene"
            className="text-[11px] uppercase tracking-[0.24em] text-neutral-500 transition hover:text-neutral-800"
          >
            Back to Scene
          </Link>
        </div>

        <article className="inward-fade">
          <h1 className="mb-10 text-[16px] font-light leading-[1.7] tracking-[0.04em] text-neutral-700">
            {scene.title}
          </h1>

          <div
            className={
              isPortrait
                ? "mb-6 flex max-w-[720px] justify-center"
                : "mb-6 max-w-[720px] overflow-hidden bg-neutral-200"
            }
          >
            <Image
              src={scene.image}
              alt=""
              width={1200}
              height={900}
              className={
                isPortrait
                  ? "h-auto max-h-[72vh] w-auto max-w-full object-contain"
                  : "h-auto w-full"
              }
              sizes={
                isPortrait
                  ? "(max-width: 768px) 78vw, 420px"
                  : "(max-width: 768px) 100vw, 720px"
              }
              priority
            />
          </div>

          <div className="mt-6 space-y-1">
            <p className="text-[13px] leading-[1.8] tracking-[0.06em] text-neutral-600">
              {scene.ja}
            </p>
            <p className="text-[12px] leading-[1.8] tracking-[0.06em] text-neutral-500">
              {scene.caption}
            </p>
          </div>
        </article>

        <nav className="mt-16 border-t border-neutral-300 pt-8">
          <div className="flex items-start justify-between gap-8">
            <div className="min-h-[48px] flex-1">
              {previous ? (
                <Link
                  href={`/scene/${previous.slug}`}
                  className="group inline-block"
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-neutral-300 transition group-hover:text-neutral-700">
                    Remain
                  </p>
                  <p className="text-[14px] leading-[1.6] tracking-[0.04em] text-neutral-500 transition group-hover:text-neutral-800">
                    {previous.title}
                  </p>
                </Link>
              ) : null}
            </div>

            <div className="min-h-[48px] flex-1 text-right">
              {next ? (
                <Link
                  href={`/scene/${next.slug}`}
                  className="group inline-block"
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-neutral-300 transition group-hover:text-neutral-700">
                    Toward
                  </p>
                  <p className="text-[14px] leading-[1.6] tracking-[0.04em] text-neutral-500 transition group-hover:text-neutral-800">
                    {next.title}
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