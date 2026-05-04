import Link from "next/link";
import SimplePageLayout from "@/components/SimplePageLayout";
import { scenes } from "@/content/scenes";

export default function ScenePage() {
  const sorted = [...scenes].sort((a, b) => a.order - b.order);

  return (
    <SimplePageLayout title="SCENE">
      <p className="mb-14 text-[13px] tracking-[0.06em] text-[#161616]/52">
        Still frames from inward.
      </p>

      <ul className="space-y-4">
        {sorted.map((scene) => (
          <li key={scene.slug}>
            <Link
  href={`/scene/${scene.slug}`}
  className="group block transition duration-300 active:scale-[0.98]"
>
              {/* 英語タイトル（主） */}
              <p className="text-[16px] leading-[1.7] tracking-[0.04em] font-light opacity-70 transition duration-500 group-hover:opacity-100">
                {scene.title}
              </p>

              {/* 日本語（補助・小さく/薄く） */}
              <p className="mt-1 text-[12px] tracking-[0.06em] text-[#161616]/35 transition duration-500 group-hover:text-[#161616]/55">
                {scene.ja}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </SimplePageLayout>
  );
}