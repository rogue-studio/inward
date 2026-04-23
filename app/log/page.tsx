import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOG | INWARD",
  description: "Unfinished records from inward.",
};

export default function LogPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 text-[#161616]">
      <h1 className="mb-4 text-[28px] font-normal uppercase tracking-[0.14em] text-[#161616]/88">
        LOG
      </h1>
<p className="mb-14 text-[13px] tracking-[0.06em] text-[#161616]/52">
        Unfinished records from inward.
      </p>

    <div className="text-[15px] leading-[2.1] text-[#161616]/68">
  <p>#制作ログ #本末転倒</p>
  <p>余白の尊さを編集する詰め詰めタスクの深夜。</p>
  <p>矛盾と皮肉を楽しみながら、おはよう日本へ。</p>

  <p>#ご感想ログ #信頼</p>
  <p>「もう少し読者を信じてもいい気がしますけどね」</p>

  <p>#ご感想ログ #ギミック</p>
  <p>「比喩を使わない観察的断片が読者体験的には比喩になる仕掛けはおもろい」</p>
  
  <p>#制作ログ #思い切り</p>
  <p>詩的に過ぎたり、説明し過ぎたり。</p>
  <p>バランス修正もせず、思い切りゴミ箱行きに。</p>
　
</div>

    </main>
  );
}