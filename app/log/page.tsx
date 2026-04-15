import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOG | INWARD",
  description: "Unfinished records from inward.",
};

export default function LogPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 text-[#161616]">
      <h1 className="mb-12 text-[28px] font-normal uppercase tracking-[0.14em] text-[#161616]/88">
        LOG
      </h1>

    <div className="text-[15px] leading-[2.1] text-[#161616]/68">
  <p>-プロジェクト準備中の本末転倒ルーティン-</p>
  <p>余白の尊さを綴りながら、現実は詰め詰め深夜作業。</p>
  <p>朝方に繰り出す大欠伸は私の矛盾の集大成か。</p>
  <p>でも、誰かに何かを届けたくて出来栄えに悩むわけで。</p>
  <p>本末転倒くらいが誠実に違いないと確信がある。</p>
  <p>おいしいブラックコーヒーに出会える。</p>
</div>

    </main>
  );
}